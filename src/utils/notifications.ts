/**
 * notifications.ts
 * 이메일 & SMS 발송 공용 유틸리티
 */
import getSupabase from './supabase';

export interface EmailParams {
  to: string;
  subject: string;
  html: string;
  type?: string;
}

export interface SMSParams {
  receiver: string;
  message: string;
}

export interface NotificationResult {
  success: boolean;
  error?: string;
}

export async function sendEmail(params: EmailParams): Promise<NotificationResult> {
  const sb = getSupabase();
  if (!sb) return { success: false, error: 'Supabase 초기화 실패' };

  try {
    const { data, error } = await sb.functions.invoke('send-email', { body: params });
    if (error) throw error;
    if (data?.error) throw new Error(data.error);
    return { success: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[notifications] sendEmail 오류:', msg);
    return { success: false, error: msg };
  }
}

export async function sendSMS(params: SMSParams): Promise<NotificationResult> {
  const sb = getSupabase();
  if (!sb) return { success: false, error: 'Supabase 초기화 실패' };

  try {
    const { data, error } = await sb.functions.invoke('send-sms', { body: params });
    if (error) throw error;
    if (data?.error) throw new Error(data.error);
    if (!data?.success) throw new Error(data?.message || 'SMS 발송 실패');
    return { success: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[notifications] sendSMS 오류:', msg);
    return { success: false, error: msg };
  }
}

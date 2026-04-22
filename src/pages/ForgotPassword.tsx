import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';
import { resetPassword } from '../utils/auth';
import type { ReactElement } from 'react';

const ForgotPassword = (): ReactElement => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await resetPassword(email);
      setSent(true);
    } catch (err) {
      setError('이메일 전송에 실패했습니다.');
      console.error('Reset error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <>
        <SEOHead title={t('auth.forgotPasswordTitle')} path="/forgot-password" />
        <div className="auth-page">
          <div className="auth-card">
            <div className="auth-success">
              <h2>{t('auth.resetEmailSent')}</h2>
              <p>{t('auth.checkEmailForReset')}</p>
              <Link to="/login" className="btn-primary">{t('auth.backToLogin')}</Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead title={t('auth.forgotPasswordTitle')} path="/forgot-password" />
      <div className="auth-page">
        <div className="auth-card animate-fade-in-up">
          <h1>{t('auth.forgotPasswordTitle')}</h1>
          <p className="subtitle">{t('auth.forgotPasswordSubtitle')}</p>
          <form className="auth-form" onSubmit={handleSubmit}>
            {error && <div className="auth-error">{error}</div>}
            <div className="form-group">
              <label>{t('auth.email')}</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('auth.emailPlaceholder')} required />
            </div>
            <button type="submit" className="auth-submit" disabled={loading}>
              {loading ? t('auth.sending') : t('auth.sendResetLink')}
            </button>
          </form>
          <div className="auth-footer">
            <p><Link to="/login">{t('auth.backToLogin')}</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;

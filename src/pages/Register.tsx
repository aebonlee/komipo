import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { signUp, signInWithGoogle, signInWithKakao } from '../utils/auth';
import type { ReactElement } from 'react';

const Register = (): ReactElement => {
  const { t } = useLanguage();
  const { isLoggedIn, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  // 이미 로그인된 경우 홈으로 리디렉트
  useEffect(() => {
    if (!authLoading && isLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [isLoggedIn, authLoading, navigate]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password.length < 6) { setError(t('auth.passwordTooShort')); return; }
    if (password !== confirmPassword) { setError(t('auth.passwordMismatch')); return; }
    setLoading(true);
    try {
      await signUp(email, password, displayName);
      setSuccess(true);
    } catch (err) {
      setError(t('auth.signUpError'));
      console.error('Register error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <>
        <SEOHead title={t('auth.signUpTitle')} path="/register" />
        <div className="auth-page">
          <div className="auth-card">
            <div className="auth-success">
              <h2>{t('auth.signUpSuccess')}</h2>
              <p>{t('auth.checkEmail')}</p>
              <Link to="/login" className="btn-primary">{t('auth.goToLogin')}</Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead title={t('auth.signUpTitle')} path="/register" />
      <div className="auth-page">
        <div className="auth-card animate-fade-in-up">
          <h1>{t('auth.signUpTitle')}</h1>
          <p className="subtitle">{t('auth.signUpSubtitle')}</p>

          <div className="oauth-buttons">
            <button className="oauth-btn" onClick={() => signInWithGoogle()}>
              <svg width="20" height="20" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Google로 가입
            </button>
            <button className="oauth-btn" onClick={() => signInWithKakao()} style={{ background: '#FEE500', borderColor: '#FEE500', color: '#191919' }}>
              <svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 3C6.48 3 2 6.58 2 10.94c0 2.8 1.86 5.27 4.66 6.67l-1.19 4.39 5.09-3.36c.47.04.95.06 1.44.06 5.52 0 10-3.58 10-7.94S17.52 3 12 3z" fill="#191919"/></svg>
              카카오로 가입
            </button>
          </div>

          <div className="auth-divider"><span>{t('auth.or')}</span></div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {error && <div className="auth-error">{error}</div>}
            <div className="form-group">
              <label>{t('auth.displayName')}</label>
              <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder={t('auth.displayNamePlaceholder')} required />
            </div>
            <div className="form-group">
              <label>{t('auth.email')}</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('auth.emailPlaceholder')} required />
            </div>
            <div className="form-group">
              <label>{t('auth.password')}</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={t('auth.passwordPlaceholder')} required />
            </div>
            <div className="form-group">
              <label>{t('auth.passwordConfirm')}</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder={t('auth.passwordConfirmPlaceholder')} required />
            </div>
            <button type="submit" className="auth-submit" disabled={loading}>
              {loading ? t('auth.signingUp') : t('auth.signUp')}
            </button>
          </form>

          <div className="auth-footer">
            <p>{t('auth.hasAccount')} <Link to="/login">{t('auth.login')}</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

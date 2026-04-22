import { useAuth } from '../contexts/AuthContext';
import SEOHead from '../components/SEOHead';
import { BADGES } from '../config/badges';
import type { ReactElement } from 'react';

const Profile = (): ReactElement => {
  const { profile } = useAuth();
  const earnedBadges: string[] = [];

  return (
    <>
      <SEOHead title="프로필" path="/profile" />
      <div className="progress-page">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header">
            <h2>내 프로필</h2>
          </div>

          {/* Profile Card */}
          <div className="card animate-fade-in-up" style={{ textAlign: 'center', padding: '40px' }}>
            <div style={{
              width: '80px', height: '80px', borderRadius: '50%',
              background: 'var(--accent)', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '32px', fontWeight: 700, margin: '0 auto 16px'
            }}>
              {(profile?.display_name || profile?.email || '?')[0].toUpperCase()}
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 700 }}>{profile?.display_name || '이름 없음'}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{profile?.email}</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginTop: '24px' }}>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--accent)' }}>0</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>도장</div>
              </div>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--accent)' }}>{earnedBadges.length}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>배지</div>
              </div>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--accent)' }}>-</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>랭킹</div>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div style={{ marginTop: '40px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>획득한 배지</h3>
            <div className="badge-grid">
              {BADGES.map((badge) => (
                <div key={badge.id} className={`badge-item ${earnedBadges.includes(badge.id) ? 'earned' : 'locked'}`}>
                  <div className="badge-icon">{badge.icon}</div>
                  <div className="badge-title">{badge.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificate Section */}
          <div style={{ marginTop: '40px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>인증서</h3>
            <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                모든 레벨을 클리어하면 AI 마스터 인증서가 발급됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

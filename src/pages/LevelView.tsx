import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { LEVELS } from '../config/levels';
import { CHALLENGE_DATA } from '../data/challenges';
import type { ReactElement } from 'react';

const LevelView = (): ReactElement => {
  const { level } = useParams<{ level: string }>();
  const levelId = Number(level);
  const currentLevel = LEVELS.find(l => l.id === levelId);
  const challenges = CHALLENGE_DATA.filter(c => c.levelId === levelId);

  if (!currentLevel) {
    return (
      <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2>레벨을 찾을 수 없습니다.</h2>
        <Link to="/challenge" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>도장깨기로 돌아가기</Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead title={currentLevel.title} path={`/challenge/${level}`} />
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <div style={{ marginBottom: '16px' }}>
            <Link to="/challenge" style={{ color: 'var(--accent)', fontSize: '14px', fontWeight: 600 }}>&larr; 도장깨기 허브</Link>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '64px' }}>{currentLevel.icon}</span>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: currentLevel.color, marginTop: '12px' }}>{currentLevel.title}</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>{currentLevel.description}</p>
            <div style={{ marginTop: '16px', fontSize: '14px', color: 'var(--text-muted)' }}>
              {challenges.length}문제 | 통과 기준: {Math.round(currentLevel.passThreshold * 100)}%
            </div>
          </div>

          {/* Stamp Board */}
          <div style={{ maxWidth: '600px', margin: '0 auto 40px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>도장판</h3>
            <div className="stamp-board">
              {challenges.map((c, i) => (
                <Link to={`/challenge/${level}/${c.id}`} key={c.id} className="stamp empty" title={`문제 ${i + 1}`} style={{ textDecoration: 'none' }}>
                  {i + 1}
                </Link>
              ))}
            </div>
          </div>

          {/* Challenge List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '700px', margin: '0 auto' }}>
            {challenges.map((challenge, i) => (
              <Link to={`/challenge/${level}/${challenge.id}`} key={challenge.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700, flexShrink: 0 }}>
                  {i + 1}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: '15px', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{challenge.question}</p>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '18px', height: '18px', color: 'var(--text-muted)', flexShrink: 0 }}>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LevelView;

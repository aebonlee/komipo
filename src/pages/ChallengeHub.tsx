import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { LEVELS } from '../config/levels';
import type { ReactElement } from 'react';

const ChallengeHub = (): ReactElement => {
  return (
    <>
      <SEOHead title="AI 도장깨기" path="/challenge" />
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <div className="section-header">
            <h2>AI 도장깨기 챌린지</h2>
            <p>4단계 레벨을 클리어하고 AI 그랜드 마스터에 도전하세요!</p>
          </div>

          <div style={{ maxWidth: '600px', margin: '0 auto 40px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>📋 도장깨기 규칙</h3>
            <ul style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: '20px', listStyle: 'disc' }}>
              <li>정답 시 도장 1개 획득 (문제당 1회)</li>
              <li>오답 시 재도전 무제한 (시도 기록 저장)</li>
              <li>한 번 획득한 도장은 사라지지 않습니다</li>
              <li>레벨 통과 기준 이상이면 다음 레벨 해금</li>
            </ul>
          </div>

          <div className="level-grid">
            {LEVELS.map((level, i) => (
              <Link to={i === 0 ? `/challenge/${level.id}` : '#'} key={level.id} className={`level-card ${i === 0 ? 'unlocked' : 'locked'}`} style={{ borderColor: i === 0 ? level.color : undefined, textDecoration: 'none', color: 'inherit' }}>
                <div className="level-icon">{level.icon}</div>
                <h3 style={{ color: level.color }}>{level.title}</h3>
                <p>{level.description}</p>
                <div style={{ marginTop: '12px' }}>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                    {level.questionCount}문제 | 통과: {Math.round(level.passThreshold * 100)}%
                  </div>
                </div>
                {i > 0 && (
                  <div className="level-badge" style={{ background: 'var(--text-muted)' }}>🔒 잠김</div>
                )}
                {i === 0 && (
                  <div className="level-badge" style={{ background: level.color }}>도전 가능</div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ChallengeHub;

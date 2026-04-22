import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const DEMO_LEADERBOARD = [
  { rank: 1, name: '김AI', stamps: 85, badges: 8, level: '고수' },
  { rank: 2, name: '이프롬프트', stamps: 72, badges: 7, level: '고급' },
  { rank: 3, name: '박챌린지', stamps: 65, badges: 6, level: '고급' },
  { rank: 4, name: '최데이터', stamps: 58, badges: 5, level: '중급' },
  { rank: 5, name: '정에이전트', stamps: 45, badges: 4, level: '중급' },
];

const Leaderboard = (): ReactElement => {
  return (
    <>
      <SEOHead title="랭킹" path="/leaderboard" />
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header">
            <h2>AI 도장깨기 랭킹</h2>
            <p>도장을 가장 많이 모은 AI 마스터들을 확인하세요.</p>
          </div>

          <table className="leaderboard-table">
            <thead>
              <tr>
                <th style={{ width: '60px' }}>순위</th>
                <th>이름</th>
                <th style={{ textAlign: 'center' }}>도장</th>
                <th style={{ textAlign: 'center' }}>배지</th>
                <th style={{ textAlign: 'center' }}>최고 레벨</th>
              </tr>
            </thead>
            <tbody>
              {DEMO_LEADERBOARD.map((entry) => (
                <tr key={entry.rank}>
                  <td>
                    <span className={`rank-badge ${entry.rank <= 3 ? `rank-${entry.rank}` : ''}`}>
                      {entry.rank}
                    </span>
                  </td>
                  <td style={{ fontWeight: 600 }}>{entry.name}</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--accent)' }}>{entry.stamps}</td>
                  <td style={{ textAlign: 'center' }}>{entry.badges}</td>
                  <td style={{ textAlign: 'center' }}>{entry.level}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p style={{ textAlign: 'center', marginTop: '32px', color: 'var(--text-muted)', fontSize: '14px' }}>
            * 데모 데이터입니다. 로그인 후 챌린지에 참여하면 실제 랭킹에 반영됩니다.
          </p>
        </div>
      </section>
    </>
  );
};

export default Leaderboard;

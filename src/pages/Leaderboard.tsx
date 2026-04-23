import { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import getSupabase from '../utils/supabase';
import type { ReactElement } from 'react';

interface LeaderboardEntry {
  rank: number;
  user_id: string;
  display_name: string;
  stamps_count: number;
  badges_count: number;
  highest_level: string;
}

const Leaderboard = (): ReactElement => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const supabase = getSupabase();
      if (!supabase) { setLoading(false); return; }

      try {
        const { data, error } = await supabase.rpc('komipo_get_leaderboard', { limit_count: 20 });
        if (error) throw error;
        if (data && data.length > 0) {
          setEntries(data.map((d: { display_name: string; stamps_count: number; badges_count: number; highest_level: number; user_id: string }, i: number) => ({
            rank: i + 1,
            user_id: d.user_id,
            display_name: d.display_name || '학습자',
            stamps_count: d.stamps_count || 0,
            badges_count: d.badges_count || 0,
            highest_level: levelName(d.highest_level),
          })));
        }
      } catch {
        // RPC not available yet - show empty state
      }
      setLoading(false);
    };
    fetchLeaderboard();
  }, []);

  const levelName = (level: number | null): string => {
    if (!level) return '-';
    const names: Record<number, string> = { 1: '초급', 2: '중급', 3: '고급', 4: '고수' };
    return names[level] || '-';
  };

  return (
    <>
      <SEOHead title="랭킹" path="/leaderboard" />
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header">
            <h2>AI 도장깨기 랭킹</h2>
            <p>도장을 가장 많이 모은 AI 마스터들을 확인하세요.</p>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <div className="loading-spinner" />
              <p style={{ marginTop: '16px', color: 'var(--text-muted)' }}>랭킹 로딩 중...</p>
            </div>
          ) : entries.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏆</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>아직 랭킹 데이터가 없습니다</h3>
              <p style={{ color: 'var(--text-muted)' }}>도장깨기 챌린지에 참여하면 랭킹에 표시됩니다.</p>
            </div>
          ) : (
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
                {entries.map((entry) => (
                  <tr key={entry.user_id}>
                    <td>
                      <span className={`rank-badge ${entry.rank <= 3 ? `rank-${entry.rank}` : ''}`}>
                        {entry.rank}
                      </span>
                    </td>
                    <td style={{ fontWeight: 600 }}>{entry.display_name}</td>
                    <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--accent)' }}>{entry.stamps_count}</td>
                    <td style={{ textAlign: 'center' }}>{entry.badges_count}</td>
                    <td style={{ textAlign: 'center' }}>{entry.highest_level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </>
  );
};

export default Leaderboard;

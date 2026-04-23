import { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { LEVELS } from '../config/levels';
import { BADGES } from '../config/badges';
import { CATEGORIES } from '../data/categories';
import { useAuth } from '../contexts/AuthContext';
import getSupabase, { TABLES } from '../utils/supabase';
import type { ReactElement } from 'react';

const Progress = (): ReactElement => {
  const { user } = useAuth();
  const totalLessons = CATEGORIES.reduce((sum, c) => sum + c.lessonCount, 0);

  const [totalStamps, setTotalStamps] = useState(0);
  const [totalLessonsCompleted, setTotalLessonsCompleted] = useState(0);
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);
  const [levelStamps, setLevelStamps] = useState<Record<number, number>>({});
  const [highestLevel, setHighestLevel] = useState('-');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      const supabase = getSupabase();
      if (!supabase || !user) { setLoading(false); return; }

      try {
        // Fetch stamps count per level
        const { data: stamps } = await supabase
          .from(TABLES.stamps)
          .select('level_id')
          .eq('user_id', user.id);

        if (stamps) {
          setTotalStamps(stamps.length);
          const byLevel: Record<number, number> = {};
          stamps.forEach((s: { level_id: number }) => {
            byLevel[s.level_id] = (byLevel[s.level_id] || 0) + 1;
          });
          setLevelStamps(byLevel);

          // Determine highest level
          const completed = LEVELS.filter(l =>
            (byLevel[l.id] || 0) / l.questionCount >= l.passThreshold
          );
          if (completed.length > 0) {
            setHighestLevel(completed[completed.length - 1].title.split(' ')[0]);
          }
        }

        // Fetch lesson progress
        const { data: progress } = await supabase
          .from(TABLES.lesson_progress)
          .select('id')
          .eq('user_id', user.id)
          .eq('completed', true);

        if (progress) {
          setTotalLessonsCompleted(progress.length);
        }

        // Fetch earned badges
        const { data: badges } = await supabase
          .from(TABLES.user_badges)
          .select('badge_id')
          .eq('user_id', user.id);

        if (badges) {
          setEarnedBadges(badges.map((b: { badge_id: string }) => b.badge_id));
        }
      } catch {
        // Tables may not exist yet
      }
      setLoading(false);
    };
    fetchProgress();
  }, [user]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '120px 0' }}>
        <div className="loading-spinner" />
        <p style={{ marginTop: '16px', color: 'var(--text-muted)' }}>학습 현황 로딩 중...</p>
      </div>
    );
  }

  return (
    <>
      <SEOHead title="학습 현황" path="/progress" />
      <div className="progress-page">
        <div className="container">
          <div className="section-header">
            <h2>내 학습 대시보드</h2>
            <p>학습 진행 상황과 도장 수집 현황을 확인하세요.</p>
          </div>

          {/* KPI Cards */}
          <div className="progress-grid">
            <div className="progress-stat-card animate-fade-in-up">
              <div className="progress-stat-value">{totalStamps}</div>
              <div className="progress-stat-label">획득한 도장</div>
            </div>
            <div className="progress-stat-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="progress-stat-value">{totalLessonsCompleted}/{totalLessons}</div>
              <div className="progress-stat-label">완료한 레슨</div>
            </div>
            <div className="progress-stat-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="progress-stat-value">{earnedBadges.length}/{BADGES.length}</div>
              <div className="progress-stat-label">획득한 배지</div>
            </div>
            <div className="progress-stat-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="progress-stat-value">{highestLevel}</div>
              <div className="progress-stat-label">최고 레벨</div>
            </div>
          </div>

          {/* Level Progress */}
          <div style={{ marginTop: '48px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>레벨별 진행 현황</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {LEVELS.map((level) => {
                const stamps = levelStamps[level.id] || 0;
                const pct = Math.round((stamps / level.questionCount) * 100);
                const passed = pct >= level.passThreshold * 100;
                return (
                  <div key={level.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span style={{ fontSize: '36px' }}>{level.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontWeight: 600 }}>
                          {level.title}
                          {passed && <span style={{ marginLeft: '8px', color: 'var(--success)', fontSize: '13px' }}>✅ 통과</span>}
                        </span>
                        <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{stamps} / {level.questionCount} 도장 ({pct}%)</span>
                      </div>
                      <div className="progress-bar-wrapper">
                        <div className="progress-bar-fill" style={{ width: `${pct}%`, background: level.color }} />
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                        통과 기준: {Math.round(level.passThreshold * 100)}%
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Badges */}
          <div style={{ marginTop: '48px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>배지 컬렉션</h3>
            <div className="badge-grid">
              {BADGES.map((badge) => (
                <div key={badge.id} className={`badge-item ${earnedBadges.includes(badge.id) ? 'earned' : 'locked'}`}>
                  <div className="badge-icon">{badge.icon}</div>
                  <div className="badge-title">{badge.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>{badge.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;

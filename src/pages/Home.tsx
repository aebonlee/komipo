import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { CATEGORIES } from '../data/categories';
import { LEVELS } from '../config/levels';
import type { ReactElement } from 'react';

const Home = (): ReactElement => {
  const { isLoggedIn } = useAuth();
  const { t } = useLanguage();

  return (
    <>
      <SEOHead />

      {/* Hero */}
      <section className="hero">
        <div className="hero-content animate-fade-in-up">
          <h1>{t('site.home.title')} — <span>AI 도장깨기</span></h1>
          <p>{t('site.home.description')}</p>
          <div className="hero-actions">
            <Link to="/learn" className="hero-btn hero-btn-primary">학습 시작하기</Link>
            {isLoggedIn ? (
              <Link to="/challenge" className="hero-btn hero-btn-secondary">도장깨기 도전</Link>
            ) : (
              <Link to="/login" className="hero-btn hero-btn-secondary">로그인</Link>
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="container">
        <div className="stats-bar">
          <div className="stat-card animate-fade-in-up">
            <div className="stat-icon"><i className="fa-solid fa-layer-group" /></div>
            <div className="stat-value">7</div>
            <div className="stat-label">학습 카테고리</div>
          </div>
          <div className="stat-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="stat-icon"><i className="fa-solid fa-book-open" /></div>
            <div className="stat-value">36</div>
            <div className="stat-label">학습 레슨</div>
          </div>
          <div className="stat-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="stat-icon"><i className="fa-solid fa-trophy" /></div>
            <div className="stat-value">90</div>
            <div className="stat-label">챌린지 문제</div>
          </div>
          <div className="stat-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="stat-icon"><i className="fa-solid fa-medal" /></div>
            <div className="stat-value">4</div>
            <div className="stat-label">도장 레벨</div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <section style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <div className="section-header">
            <h2>AI 학습 카테고리</h2>
            <p>7개 분야의 체계적인 AI 교육 콘텐츠로 AI 리터러시를 키워보세요.</p>
          </div>
          <div className="category-grid">
            {CATEGORIES.map((cat, i) => (
              <Link to={`/learn/${cat.id}`} key={cat.id} className="category-card animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="category-icon">
                  <i className={cat.faIcon} />
                </div>
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
                <div className="category-meta">
                  <span>{cat.lessonCount}개 레슨</span>
                  <span>{cat.estimatedMinutes}분</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Levels */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <div className="section-header">
            <h2>AI 도장깨기 챌린지</h2>
            <p>4단계 레벨을 클리어하고 AI 마스터가 되어보세요!</p>
          </div>
          <div className="level-grid">
            {LEVELS.map((level, i) => (
              <div key={level.id} className={`level-card ${i === 0 ? 'unlocked' : 'locked'}`} style={{ borderColor: i === 0 ? level.color : undefined }}>
                <div className="level-icon">{level.icon}</div>
                <h3 style={{ color: level.color }}>{level.title}</h3>
                <p>{level.description}</p>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                  {level.questionCount}문제 | 통과 기준: {Math.round(level.passThreshold * 100)}%
                </div>
                {i > 0 && (
                  <div className="level-badge" style={{ background: 'var(--text-muted)' }}>
                    <i className="fa-solid fa-lock" style={{ marginRight: '4px' }} /> 잠김
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

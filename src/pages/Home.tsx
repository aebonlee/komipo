import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { LEVELS } from '../config/levels';
import type { ReactElement } from 'react';

const CATEGORIES = [
  { id: 'ai-basics', icon: '🤖', title: 'AI 기초', titleEn: 'AI Basics', desc: 'AI/ML/DL 개념, 생성형 AI, LLM의 기본을 배웁니다.', lessons: 5 },
  { id: 'ai-tools', icon: '🛠️', title: 'AI 도구 활용', titleEn: 'AI Tools', desc: 'ChatGPT, Claude, Gemini 등 주요 AI 도구 사용법을 익힙니다.', lessons: 6 },
  { id: 'prompt', icon: '✍️', title: '프롬프트 엔지니어링', titleEn: 'Prompt Engineering', desc: '효과적인 프롬프트 작성법과 고급 기법을 학습합니다.', lessons: 6 },
  { id: 'ai-agents', icon: '🤝', title: 'AI 에이전트', titleEn: 'AI Agents', desc: 'AI 에이전트의 개념과 MCP, 자동화 활용법을 배웁니다.', lessons: 4 },
  { id: 'business', icon: '💼', title: '업무 활용', titleEn: 'Business Use', desc: '문서, 데이터, PPT, 이메일 등 실무에서의 AI 활용을 배웁니다.', lessons: 6 },
  { id: 'ethics', icon: '🛡️', title: 'AI 윤리 & 보안', titleEn: 'AI Ethics & Security', desc: '책임있는 AI 사용, 프라이버시, 보안 가이드를 학습합니다.', lessons: 5 },
  { id: 'advanced', icon: '🚀', title: '고급 활용', titleEn: 'Advanced', desc: 'Fine-tuning, RAG, API 등 고급 AI 기술을 배웁니다.', lessons: 4 },
];

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
            <div className="stat-icon">📚</div>
            <div className="stat-value">7</div>
            <div className="stat-label">학습 카테고리</div>
          </div>
          <div className="stat-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="stat-icon">📝</div>
            <div className="stat-value">36</div>
            <div className="stat-label">학습 레슨</div>
          </div>
          <div className="stat-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="stat-icon">🏆</div>
            <div className="stat-value">90</div>
            <div className="stat-label">챌린지 문제</div>
          </div>
          <div className="stat-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="stat-icon">🎖️</div>
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
                <div className="category-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <div className="category-meta">
                  <span>{cat.lessons}개 레슨</span>
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
                    🔒 잠김
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

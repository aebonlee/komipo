import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { CATEGORIES } from '../data/categories';
import { LESSONS } from '../data/lessons';
import { useLanguage } from '../contexts/LanguageContext';
import type { ReactElement } from 'react';

const CategoryView = (): ReactElement => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const category = CATEGORIES.find(c => c.id === categoryId);
  const lessons = LESSONS.filter(l => l.categoryId === categoryId);

  if (!category) {
    return (
      <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2>카테고리를 찾을 수 없습니다.</h2>
        <Link to="/learn" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>학습 허브로 돌아가기</Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead title={language === 'ko' ? category.title : category.titleEn} path={`/learn/${categoryId}`} />

      {/* Mobile sidebar toggle */}
      <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="메뉴 토글">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
          {sidebarOpen
            ? <path d="M18 6L6 18M6 6l12 12" />
            : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
          }
        </svg>
        <span>목차</span>
      </button>

      <div className="learn-layout">
        {/* Left Sidebar */}
        <aside className={`learn-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <Link to="/learn" className="sidebar-back-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><polyline points="15 18 9 12 15 6" /></svg>
              학습 허브
            </Link>
          </div>
          <nav className="sidebar-nav">
            {CATEGORIES.map(cat => {
              const catLessons = LESSONS.filter(l => l.categoryId === cat.id);
              const isCurrentCat = cat.id === categoryId;
              return (
                <div key={cat.id} className={`sidebar-category ${isCurrentCat ? 'active' : ''}`}>
                  <div
                    className="sidebar-category-title"
                    onClick={() => navigate(`/learn/${cat.id}`)}
                  >
                    <span className="sidebar-cat-icon">{cat.icon}</span>
                    <span>{language === 'ko' ? cat.title : cat.titleEn}</span>
                    <span className="sidebar-cat-count">{catLessons.length}</span>
                  </div>
                  {isCurrentCat && (
                    <ul className="sidebar-lessons">
                      {catLessons.map((l, i) => (
                        <li key={l.id}>
                          <Link
                            to={`/learn/${cat.id}/${l.id}`}
                            className="sidebar-lesson-link"
                            onClick={() => setSidebarOpen(false)}
                          >
                            <span className="sidebar-lesson-num">{i + 1}</span>
                            <span className="sidebar-lesson-title">{language === 'ko' ? l.title : l.titleEn}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Sidebar overlay for mobile */}
        {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

        {/* Main Content */}
        <main className="learn-main">
          <div className="lesson-content animate-fade-in-up">
            <div className="lesson-breadcrumb">
              <Link to="/learn">학습</Link>
              <span>/</span>
              <span className="current">{language === 'ko' ? category.title : category.titleEn}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <span style={{ fontSize: '48px' }}>{category.icon}</span>
              <div>
                <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '4px' }}>{language === 'ko' ? category.title : category.titleEn}</h1>
                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{language === 'ko' ? category.description : category.descriptionEn}</p>
              </div>
            </div>

            <div className="category-lesson-stats">
              <span>📚 {lessons.length}개 레슨</span>
              <span>⏱️ 총 {category.estimatedMinutes}분</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
            {lessons.map((lesson, i) => (
              <Link to={`/learn/${categoryId}/${lesson.id}`} key={lesson.id} className="lesson-list-card animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="lesson-list-num">{i + 1}</div>
                <div className="lesson-list-info">
                  <h3>{language === 'ko' ? lesson.title : lesson.titleEn}</h3>
                  <div className="lesson-list-meta">
                    <span>⏱️ {lesson.estimatedMinutes}분</span>
                    <span>📝 퀴즈 {lesson.quizzes.length}문제</span>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '20px', height: '20px', color: 'var(--text-muted)', flexShrink: 0 }}>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default CategoryView;

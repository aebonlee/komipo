import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { CATEGORIES } from '../data/categories';
import { LESSONS } from '../data/lessons';
import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from '../contexts/ToastContext';
import type { ReactElement } from 'react';

const LessonView = (): ReactElement => {
  const { categoryId, lessonId } = useParams<{ categoryId: string; lessonId: string }>();
  const { language } = useLanguage();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const lesson = LESSONS.find(l => l.id === lessonId && l.categoryId === categoryId);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!lesson) {
    return (
      <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2>레슨을 찾을 수 없습니다.</h2>
        <Link to="/learn" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>학습 허브로 돌아가기</Link>
      </div>
    );
  }

  const handleQuizSubmit = () => {
    if (Object.keys(quizAnswers).length < lesson.quizzes.length) {
      showToast('모든 문제에 답해주세요.', 'warning');
      return;
    }
    setQuizSubmitted(true);
    const correct = lesson.quizzes.filter((q, i) => quizAnswers[i] === q.correctIndex).length;
    if (correct === lesson.quizzes.length) {
      showToast('모든 문제를 맞혔습니다! 🎉', 'success');
    } else {
      showToast(`${lesson.quizzes.length}문제 중 ${correct}문제 정답`, 'info');
    }
  };

  const categoryLessons = LESSONS.filter(l => l.categoryId === categoryId);
  const currentIndex = categoryLessons.findIndex(l => l.id === lessonId);
  const prevLesson = currentIndex > 0 ? categoryLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < categoryLessons.length - 1 ? categoryLessons[currentIndex + 1] : null;

  return (
    <>
      <SEOHead title={language === 'ko' ? lesson.title : lesson.titleEn} path={`/learn/${categoryId}/${lessonId}`} />

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
                    onClick={() => {
                      if (!isCurrentCat) navigate(`/learn/${cat.id}`);
                    }}
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
                            className={`sidebar-lesson-link ${l.id === lessonId ? 'active' : ''}`}
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
              <Link to={`/learn/${categoryId}`}>{CATEGORIES.find(c => c.id === categoryId)?.title}</Link>
              <span>/</span>
              <span className="current">{lesson.title}</span>
            </div>

            <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px' }}>{language === 'ko' ? lesson.title : lesson.titleEn}</h1>
            <div className="lesson-meta">
              <span>📖 레슨 {currentIndex + 1} / {categoryLessons.length}</span>
              <span>⏱️ 예상 학습 시간: {lesson.estimatedMinutes}분</span>
            </div>

            <div className="lesson-body" dangerouslySetInnerHTML={{ __html: lesson.content }} />
          </div>

          {/* Quiz Section */}
          {lesson.quizzes.length > 0 && (
            <div className="lesson-content" style={{ marginTop: '24px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '24px' }}>📝 확인 퀴즈</h2>
              {lesson.quizzes.map((quiz, qi) => (
                <div key={qi} style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: qi < lesson.quizzes.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <p style={{ fontWeight: 600, marginBottom: '12px' }}>{qi + 1}. {quiz.question}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {quiz.options.map((opt, oi) => {
                      let optClass = 'challenge-option';
                      if (quizSubmitted) {
                        if (oi === quiz.correctIndex) optClass += ' correct';
                        else if (quizAnswers[qi] === oi) optClass += ' incorrect';
                      } else if (quizAnswers[qi] === oi) {
                        optClass += ' selected';
                      }
                      return (
                        <div key={oi} className={optClass} onClick={() => !quizSubmitted && setQuizAnswers(prev => ({ ...prev, [qi]: oi }))}>
                          <span className="option-marker">{String.fromCharCode(65 + oi)}</span>
                          <span className="option-text">{opt}</span>
                        </div>
                      );
                    })}
                  </div>
                  {quizSubmitted && (
                    <div className={`challenge-explanation ${quizAnswers[qi] === quiz.correctIndex ? 'correct' : ''}`} style={{ marginTop: '12px' }}>
                      {quizAnswers[qi] === quiz.correctIndex ? '✅ 정답입니다! ' : '❌ 오답입니다. '}
                      {quiz.explanation}
                    </div>
                  )}
                </div>
              ))}
              {!quizSubmitted ? (
                <button className="btn-primary" onClick={handleQuizSubmit} style={{ width: '100%' }}>답안 제출</button>
              ) : (
                <button className="btn-secondary" onClick={() => { setQuizSubmitted(false); setQuizAnswers({}); }} style={{ width: '100%' }}>다시 풀기</button>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="lesson-nav">
            {prevLesson ? (
              <Link to={`/learn/${categoryId}/${prevLesson.id}`} className="lesson-nav-btn prev">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><polyline points="15 18 9 12 15 6" /></svg>
                <div>
                  <span className="lesson-nav-label">이전 레슨</span>
                  <span className="lesson-nav-title">{language === 'ko' ? prevLesson.title : prevLesson.titleEn}</span>
                </div>
              </Link>
            ) : <div />}
            {nextLesson ? (
              <Link to={`/learn/${categoryId}/${nextLesson.id}`} className="lesson-nav-btn next">
                <div>
                  <span className="lesson-nav-label">다음 레슨</span>
                  <span className="lesson-nav-title">{language === 'ko' ? nextLesson.title : nextLesson.titleEn}</span>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><polyline points="9 18 15 12 9 6" /></svg>
              </Link>
            ) : (
              <Link to={`/learn/${categoryId}`} className="lesson-nav-btn next">
                <div>
                  <span className="lesson-nav-label">완료</span>
                  <span className="lesson-nav-title">목록으로 돌아가기</span>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><polyline points="9 18 15 12 9 6" /></svg>
              </Link>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default LessonView;

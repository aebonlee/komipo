import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { LESSONS } from '../data/lessons';
import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from '../contexts/ToastContext';
import type { ReactElement } from 'react';

const LessonView = (): ReactElement => {
  const { categoryId, lessonId } = useParams<{ categoryId: string; lessonId: string }>();
  const { language } = useLanguage();
  const { showToast } = useToast();

  const lesson = LESSONS.find(l => l.id === lessonId && l.categoryId === categoryId);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

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

  const currentIndex = LESSONS.filter(l => l.categoryId === categoryId).findIndex(l => l.id === lessonId);
  const categoryLessons = LESSONS.filter(l => l.categoryId === categoryId);
  const prevLesson = currentIndex > 0 ? categoryLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < categoryLessons.length - 1 ? categoryLessons[currentIndex + 1] : null;

  return (
    <>
      <SEOHead title={language === 'ko' ? lesson.title : lesson.titleEn} path={`/learn/${categoryId}/${lessonId}`} />
      <div className="lesson-container">
        <div style={{ marginBottom: '16px' }}>
          <Link to={`/learn/${categoryId}`} style={{ color: 'var(--accent)', fontSize: '14px', fontWeight: 600 }}>&larr; {categoryId} 목록</Link>
        </div>

        <div className="lesson-content animate-fade-in-up">
          <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px' }}>{language === 'ko' ? lesson.title : lesson.titleEn}</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '32px' }}>예상 학습 시간: {lesson.estimatedMinutes}분</p>

          <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
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
                {quizSubmitted && quizAnswers[qi] !== quiz.correctIndex && (
                  <div className="challenge-explanation" style={{ marginTop: '12px' }}>
                    {quiz.explanation}
                  </div>
                )}
              </div>
            ))}
            {!quizSubmitted && (
              <button className="btn-primary" onClick={handleQuizSubmit} style={{ width: '100%' }}>답안 제출</button>
            )}
          </div>
        )}

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px', gap: '16px' }}>
          {prevLesson ? (
            <Link to={`/learn/${categoryId}/${prevLesson.id}`} className="btn-secondary">&larr; 이전 레슨</Link>
          ) : <div />}
          {nextLesson ? (
            <Link to={`/learn/${categoryId}/${nextLesson.id}`} className="btn-primary">다음 레슨 &rarr;</Link>
          ) : (
            <Link to={`/learn/${categoryId}`} className="btn-primary">목록으로 돌아가기</Link>
          )}
        </div>
      </div>
    </>
  );
};

export default LessonView;

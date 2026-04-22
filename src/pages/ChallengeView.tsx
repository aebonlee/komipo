import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { CHALLENGE_DATA } from '../data/challenges';
import { LEVELS } from '../config/levels';
import { useToast } from '../contexts/ToastContext';
import type { ReactElement } from 'react';

const ChallengeView = (): ReactElement => {
  const { level, id } = useParams<{ level: string; id: string }>();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const levelId = Number(level);

  const currentLevel = LEVELS.find(l => l.id === levelId);
  const challenges = CHALLENGE_DATA.filter(c => c.levelId === levelId);
  const challenge = CHALLENGE_DATA.find(c => c.id === id && c.levelId === levelId);
  const currentIndex = challenges.findIndex(c => c.id === id);

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    setSelectedAnswer(null);
    setSubmitted(false);
  }, [id]);

  if (!challenge || !currentLevel) {
    return (
      <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2>문제를 찾을 수 없습니다.</h2>
        <Link to="/challenge" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>도장깨기로 돌아가기</Link>
      </div>
    );
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      showToast('답을 선택해주세요.', 'warning');
      return;
    }
    setSubmitted(true);
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    const isCorrect = selectedAnswer === challenge.correctIndex;

    if (isCorrect) {
      showToast(`정답입니다! 🎉 ${timeSpent < 30 ? '(번개 풀이! ⚡)' : ''}`, 'success');
    } else {
      showToast('오답입니다. 해설을 확인해보세요.', 'error');
    }
  };

  const nextChallenge = currentIndex < challenges.length - 1 ? challenges[currentIndex + 1] : null;

  return (
    <>
      <SEOHead title={`문제 ${currentIndex + 1} - ${currentLevel.title}`} path={`/challenge/${level}/${id}`} />
      <div className="challenge-container">
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to={`/challenge/${level}`} style={{ color: 'var(--accent)', fontSize: '14px', fontWeight: 600 }}>&larr; {currentLevel.title}</Link>
          <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
            문제 {currentIndex + 1} / {challenges.length}
          </span>
        </div>

        <div style={{ marginBottom: '12px' }}>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-fill" style={{ width: `${((currentIndex + 1) / challenges.length) * 100}%`, background: currentLevel.color }} />
          </div>
        </div>

        <div className="challenge-question animate-fade-in-up">
          <h2>{challenge.question}</h2>

          <div className="challenge-options">
            {challenge.options.map((option, oi) => {
              let optClass = 'challenge-option';
              if (submitted) {
                if (oi === challenge.correctIndex) optClass += ' correct';
                else if (selectedAnswer === oi) optClass += ' incorrect';
              } else if (selectedAnswer === oi) {
                optClass += ' selected';
              }
              return (
                <div key={oi} className={optClass} onClick={() => !submitted && setSelectedAnswer(oi)}>
                  <span className="option-marker">{String.fromCharCode(65 + oi)}</span>
                  <span className="option-text">{option}</span>
                </div>
              );
            })}
          </div>

          {submitted && (
            <div className="challenge-explanation animate-fade-in">
              <strong>해설:</strong> {challenge.explanation}
            </div>
          )}

          <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
            {!submitted ? (
              <button className="btn-primary" onClick={handleSubmit} style={{ flex: 1 }}>제출하기</button>
            ) : (
              <>
                {selectedAnswer !== challenge.correctIndex && (
                  <button className="btn-secondary" onClick={() => { setSelectedAnswer(null); setSubmitted(false); }} style={{ flex: 1 }}>다시 도전</button>
                )}
                {nextChallenge ? (
                  <button className="btn-primary" onClick={() => navigate(`/challenge/${level}/${nextChallenge.id}`)} style={{ flex: 1 }}>다음 문제 &rarr;</button>
                ) : (
                  <Link to={`/challenge/${level}`} className="btn-primary" style={{ flex: 1, textAlign: 'center' }}>레벨로 돌아가기</Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChallengeView;

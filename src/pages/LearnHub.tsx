import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { CATEGORIES } from '../data/categories';
import { useLanguage } from '../contexts/LanguageContext';
import type { ReactElement } from 'react';

const LearnHub = (): ReactElement => {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead title="AI 학습" path="/learn" />
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <div className="section-header">
            <h2>AI 학습 허브</h2>
            <p>7개 카테고리의 체계적인 AI 교육 콘텐츠로 AI 리터러시를 향상시키세요.</p>
          </div>
          <div className="category-grid">
            {CATEGORIES.map((cat, i) => (
              <Link to={`/learn/${cat.id}`} key={cat.id} className="category-card animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="category-icon">
                  <i className={cat.faIcon} />
                </div>
                <h3>{language === 'ko' ? cat.title : cat.titleEn}</h3>
                <p>{language === 'ko' ? cat.description : cat.descriptionEn}</p>
                <div className="category-meta">
                  <span>{cat.lessonCount}개 레슨</span>
                  <span>{cat.estimatedMinutes}분</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LearnHub;

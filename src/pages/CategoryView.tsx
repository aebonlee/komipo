import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { CATEGORIES } from '../data/categories';
import { LESSONS } from '../data/lessons';
import { useLanguage } from '../contexts/LanguageContext';
import type { ReactElement } from 'react';

const CategoryView = (): ReactElement => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { language } = useLanguage();

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
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <div style={{ marginBottom: '16px' }}>
            <Link to="/learn" style={{ color: 'var(--accent)', fontSize: '14px', fontWeight: 600 }}>&larr; 학습 허브</Link>
          </div>
          <div className="section-header" style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
              <span style={{ fontSize: '48px' }}>{category.icon}</span>
              <div>
                <h2 style={{ textAlign: 'left' }}>{language === 'ko' ? category.title : category.titleEn}</h2>
                <p style={{ textAlign: 'left', margin: 0 }}>{language === 'ko' ? category.description : category.descriptionEn}</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
            {lessons.map((lesson, i) => (
              <Link to={`/learn/${categoryId}/${lesson.id}`} key={lesson.id} className="card animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s`, display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(59,130,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 700, color: 'var(--accent)', flexShrink: 0 }}>
                  {i + 1}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>{language === 'ko' ? lesson.title : lesson.titleEn}</h3>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{lesson.estimatedMinutes}분</span>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '20px', height: '20px', color: 'var(--text-muted)', flexShrink: 0 }}>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryView;

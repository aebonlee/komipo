import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import type { ReactElement } from 'react';

const AdminAnalytics = (): ReactElement => {
  return (
    <>
      <SEOHead title="학습 분석" path="/admin/analytics" noindex />
      <div className="admin-page">
        <div className="container">
          <div className="admin-header">
            <h1>학습 분석</h1>
          </div>

          <nav className="admin-nav">
            <Link to="/admin">대시보드</Link>
            <Link to="/admin/users">회원 관리</Link>
            <Link to="/admin/challenges">챌린지 관리</Link>
            <Link to="/admin/lessons">레슨 관리</Link>
            <Link to="/admin/analytics" className="active">학습 분석</Link>
          </nav>

          <div className="kpi-grid">
            <div className="kpi-card">
              <div className="kpi-label">일일 활성 학습자</div>
              <div className="kpi-value">0</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-label">평균 학습 시간</div>
              <div className="kpi-value">-분</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-label">레벨 클리어율</div>
              <div className="kpi-value">-%</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-label">인기 카테고리</div>
              <div className="kpi-value">-</div>
            </div>
          </div>

          <div className="card" style={{ padding: '32px', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)' }}>
              Supabase 연동 후 상세 학습 분석 데이터와 차트가 표시됩니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAnalytics;

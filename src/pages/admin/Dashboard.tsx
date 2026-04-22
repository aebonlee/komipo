import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import type { ReactElement } from 'react';

const AdminDashboard = (): ReactElement => {
  return (
    <>
      <SEOHead title="관리자 대시보드" path="/admin" noindex />
      <div className="admin-page">
        <div className="container">
          <div className="admin-header">
            <h1>관리자 대시보드</h1>
          </div>

          <nav className="admin-nav">
            <Link to="/admin" className="active">대시보드</Link>
            <Link to="/admin/users">회원 관리</Link>
            <Link to="/admin/challenges">챌린지 관리</Link>
            <Link to="/admin/lessons">레슨 관리</Link>
            <Link to="/admin/analytics">학습 분석</Link>
          </nav>

          <div className="kpi-grid">
            <div className="kpi-card">
              <div className="kpi-label">전체 회원</div>
              <div className="kpi-value">0</div>
              <div className="kpi-change up">학습 참여 대기 중</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-label">총 도장 발급</div>
              <div className="kpi-value">0</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-label">챌린지 시도</div>
              <div className="kpi-value">0</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-label">레슨 완료</div>
              <div className="kpi-value">0</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-label">평균 정답률</div>
              <div className="kpi-value">-%</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-label">그랜드 마스터</div>
              <div className="kpi-value">0</div>
            </div>
          </div>

          <div className="card" style={{ padding: '32px', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '12px' }}>학습 분석 차트</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Supabase 연동 후 실시간 학습 데이터가 표시됩니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

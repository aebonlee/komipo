import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import type { ReactElement } from 'react';

const AdminChallenges = (): ReactElement => {
  return (
    <>
      <SEOHead title="챌린지 관리" path="/admin/challenges" noindex />
      <div className="admin-page">
        <div className="container">
          <div className="admin-header">
            <h1>챌린지 관리</h1>
          </div>

          <nav className="admin-nav">
            <Link to="/admin">대시보드</Link>
            <Link to="/admin/users">회원 관리</Link>
            <Link to="/admin/challenges" className="active">챌린지 관리</Link>
            <Link to="/admin/lessons">레슨 관리</Link>
            <Link to="/admin/analytics">학습 분석</Link>
          </nav>

          <div className="card" style={{ padding: '32px', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)' }}>
              Supabase 연동 후 챌린지 문제 CRUD가 가능합니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminChallenges;

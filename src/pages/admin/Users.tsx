import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import type { ReactElement } from 'react';

const AdminUsers = (): ReactElement => {
  return (
    <>
      <SEOHead title="회원 관리" path="/admin/users" noindex />
      <div className="admin-page">
        <div className="container">
          <div className="admin-header">
            <h1>회원 관리</h1>
          </div>

          <nav className="admin-nav">
            <Link to="/admin">대시보드</Link>
            <Link to="/admin/users" className="active">회원 관리</Link>
            <Link to="/admin/challenges">챌린지 관리</Link>
            <Link to="/admin/lessons">레슨 관리</Link>
            <Link to="/admin/analytics">학습 분석</Link>
          </nav>

          <div className="card" style={{ padding: '32px', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)' }}>
              Supabase 연동 후 회원 목록이 표시됩니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUsers;

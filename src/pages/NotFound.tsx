import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const NotFound = (): ReactElement => (
  <>
    <SEOHead title="404" noindex />
    <div className="not-found">
      <h1>404</h1>
      <h2>페이지를 찾을 수 없습니다</h2>
      <p>요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
      <Link to="/" className="btn-primary">홈으로 돌아가기</Link>
    </div>
  </>
);

export default NotFound;

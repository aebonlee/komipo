import { lazy, Suspense, type ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthGuard from '../components/AuthGuard';
import AdminGuard from '../components/AdminGuard';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Pages
const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Auth
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));

// Learn
const LearnHub = lazy(() => import('../pages/LearnHub'));
const CategoryView = lazy(() => import('../pages/CategoryView'));
const LessonView = lazy(() => import('../pages/LessonView'));

// Challenge
const ChallengeHub = lazy(() => import('../pages/ChallengeHub'));
const LevelView = lazy(() => import('../pages/LevelView'));
const ChallengeView = lazy(() => import('../pages/ChallengeView'));

// Prompt Practice
const PromptPractice = lazy(() => import('../pages/prompt-practice/PromptPractice'));

// Progress & Profile
const Progress = lazy(() => import('../pages/Progress'));
const Profile = lazy(() => import('../pages/Profile'));
const Leaderboard = lazy(() => import('../pages/Leaderboard'));

// Admin
const AdminDashboard = lazy(() => import('../pages/admin/Dashboard'));
const AdminUsers = lazy(() => import('../pages/admin/Users'));
const AdminChallenges = lazy(() => import('../pages/admin/Challenges'));
const AdminLessons = lazy(() => import('../pages/admin/Lessons'));
const AdminAnalytics = lazy(() => import('../pages/admin/Analytics'));

const Loading = (): ReactElement => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div className="loading-spinner"></div>
  </div>
);

const PublicLayout = (): ReactElement => {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Learn */}
            <Route path="/learn" element={<LearnHub />} />
            <Route path="/learn/:categoryId" element={<CategoryView />} />
            <Route path="/learn/:categoryId/:lessonId" element={<LessonView />} />

            {/* Prompt Practice */}
            <Route path="/prompt-practice" element={<PromptPractice />} />

            {/* Challenge */}
            <Route path="/challenge" element={<AuthGuard><ChallengeHub /></AuthGuard>} />
            <Route path="/challenge/:level" element={<AuthGuard><LevelView /></AuthGuard>} />
            <Route path="/challenge/:level/:id" element={<AuthGuard><ChallengeView /></AuthGuard>} />

            {/* Progress & Profile */}
            <Route path="/progress" element={<AuthGuard><Progress /></AuthGuard>} />
            <Route path="/profile" element={<AuthGuard><Profile /></AuthGuard>} />
            <Route path="/leaderboard" element={<Leaderboard />} />

            {/* Admin */}
            <Route path="/admin" element={<AdminGuard><AdminDashboard /></AdminGuard>} />
            <Route path="/admin/users" element={<AdminGuard><AdminUsers /></AdminGuard>} />
            <Route path="/admin/challenges" element={<AdminGuard><AdminChallenges /></AdminGuard>} />
            <Route path="/admin/lessons" element={<AdminGuard><AdminLessons /></AdminGuard>} />
            <Route path="/admin/analytics" element={<AdminGuard><AdminAnalytics /></AdminGuard>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;

/* ───────────────────────────────────────────
 *  Domain types for KOMIPO AI Learning Platform
 * ─────────────────────────────────────────── */

// ─── User / Auth ───
export interface UserProfile {
  id: string;
  email: string;
  name: string;
  display_name: string;
  avatar_url: string;
  phone: string;
  provider: string;
  role: string;
  signup_domain: string;
  visited_sites: string[];
  last_sign_in_at: string;
  updated_at: string;
}

export interface AccountBlock {
  status: string;
  reason: string;
  suspended_until: string | null;
}

// ─── Site Config ───
export interface BrandPart {
  text: string;
  className: string;
}

export interface MenuItem {
  path: string;
  labelKey: string;
  activePath?: string;
  dropdown?: SubMenuItem[];
}

export interface SubMenuItem {
  path: string;
  labelKey: string;
}

export interface FamilySite {
  name: string;
  url: string;
}

export interface ColorOption {
  name: ColorTheme;
  color: string;
}

export interface CompanyInfo {
  name: string;
  ceo: string;
  bizNumber: string;
  salesNumber?: string;
  publisherNumber?: string;
  address: string;
  email: string;
  phone: string;
  kakao?: string;
  businessHours?: string;
}

export interface SiteFeatures {
  shop: boolean;
  community: boolean;
  search: boolean;
  auth: boolean;
  license: boolean;
}

export interface SiteConfig {
  id: string;
  name: string;
  nameKo: string;
  description: string;
  url: string;
  dbPrefix: string;
  parentSite: { name: string; url: string };
  brand: { parts: BrandPart[] };
  themeColor: string;
  company: CompanyInfo;
  features: SiteFeatures;
  colors: ColorOption[];
  menuItems: MenuItem[];
  footerLinks: { path: string; labelKey: string }[];
  familySites: FamilySite[];
}

// ─── Toast ───
export type ToastType = 'info' | 'success' | 'error' | 'warning';

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

// ─── Theme ───
export type ThemeMode = 'auto' | 'light' | 'dark';
export type ColorTheme = 'blue' | 'red' | 'green' | 'purple' | 'orange';

// ─── Language ───
export type Language = 'ko' | 'en';

// ─── Learning System ───
export interface Category {
  id: string;
  title: string;
  titleEn: string;
  icon: string;
  description: string;
  descriptionEn: string;
  lessonCount: number;
  sortOrder: number;
}

export interface Lesson {
  id: string;
  categoryId: string;
  title: string;
  titleEn: string;
  content: string;
  estimatedMinutes: number;
  sortOrder: number;
  quizzes: LessonQuiz[];
}

export interface LessonQuiz {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

// ─── Challenge System ───
export interface ChallengeLevel {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  questionCount: number;
  passThreshold: number;
  color: string;
  icon: string;
  prerequisiteLevel: number | null;
}

export interface Challenge {
  id: string;
  levelId: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  points: number;
  sortOrder: number;
}

export interface Stamp {
  userId: string;
  challengeId: string;
  levelId: number;
  earnedAt: string;
}

export interface ChallengeAttempt {
  userId: string;
  challengeId: string;
  answer: number;
  isCorrect: boolean;
  timeSpent: number;
  createdAt: string;
}

export interface UserLevelStatus {
  levelId: number;
  status: 'locked' | 'unlocked' | 'in_progress' | 'completed';
  bestScore: number;
  stampsEarned: number;
  totalStamps: number;
  attempts: number;
}

// ─── Badge System ───
export interface Badge {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  color: string;
  condition: string;
}

export interface UserBadge {
  badgeId: string;
  earnedAt: string;
}

// ─── Progress ───
export interface LessonProgress {
  lessonId: string;
  completed: boolean;
  quizScore: number | null;
  completedAt: string | null;
}

// ─── Leaderboard ───
export interface LeaderboardEntry {
  userId: string;
  displayName: string;
  avatarUrl: string;
  totalStamps: number;
  badgeCount: number;
  highestLevel: number;
  rank: number;
}

// ─── Admin ───
export interface Announcement {
  id: string;
  title: string;
  content: string;
  isActive: boolean;
  createdAt: string;
}

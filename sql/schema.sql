-- ============================================
-- KOMIPO AI Learning Platform — Database Schema
-- Prefix: komipo_
-- ============================================

-- ── 카테고리 ──
CREATE TABLE IF NOT EXISTS komipo_categories (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  title_en TEXT,
  icon TEXT,
  description TEXT,
  description_en TEXT,
  lesson_count INTEGER DEFAULT 0,
  estimated_minutes INTEGER DEFAULT 0,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ── 레슨 ──
CREATE TABLE IF NOT EXISTS komipo_lessons (
  id TEXT PRIMARY KEY,
  category_id TEXT REFERENCES komipo_categories(id),
  title TEXT NOT NULL,
  title_en TEXT,
  content TEXT,
  estimated_minutes INTEGER DEFAULT 10,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ── 레슨 퀴즈 ──
CREATE TABLE IF NOT EXISTS komipo_lesson_quizzes (
  id SERIAL PRIMARY KEY,
  lesson_id TEXT REFERENCES komipo_lessons(id),
  question TEXT NOT NULL,
  options JSONB NOT NULL DEFAULT '[]',
  correct_index INTEGER NOT NULL,
  explanation TEXT,
  sort_order INTEGER DEFAULT 0
);

-- ── 레벨 정의 ──
CREATE TABLE IF NOT EXISTS komipo_levels (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  title_en TEXT,
  description TEXT,
  question_count INTEGER DEFAULT 20,
  pass_threshold NUMERIC(3,2) DEFAULT 0.70,
  color TEXT DEFAULT '#3B82F6',
  icon TEXT DEFAULT '🏆',
  prerequisite_level INTEGER REFERENCES komipo_levels(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ── 챌린지 문제 ──
CREATE TABLE IF NOT EXISTS komipo_challenges (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  level_id INTEGER REFERENCES komipo_levels(id),
  question TEXT NOT NULL,
  options JSONB NOT NULL DEFAULT '[]',
  correct_index INTEGER NOT NULL,
  explanation TEXT,
  points INTEGER DEFAULT 1,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ── 도장 (유저별 문제 정답 기록) ──
CREATE TABLE IF NOT EXISTS komipo_stamps (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  challenge_id TEXT REFERENCES komipo_challenges(id),
  level_id INTEGER REFERENCES komipo_levels(id),
  earned_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, challenge_id)
);

-- ── 챌린지 시도 기록 ──
CREATE TABLE IF NOT EXISTS komipo_challenge_attempts (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  challenge_id TEXT REFERENCES komipo_challenges(id),
  answer INTEGER NOT NULL,
  is_correct BOOLEAN NOT NULL,
  time_spent INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ── 유저별 레벨 상태 ──
CREATE TABLE IF NOT EXISTS komipo_user_levels (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  level_id INTEGER REFERENCES komipo_levels(id),
  status TEXT DEFAULT 'locked' CHECK (status IN ('locked', 'unlocked', 'in_progress', 'completed')),
  best_score NUMERIC(5,2) DEFAULT 0,
  stamps_earned INTEGER DEFAULT 0,
  attempts INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, level_id)
);

-- ── 레슨 진행 기록 ──
CREATE TABLE IF NOT EXISTS komipo_lesson_progress (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id TEXT REFERENCES komipo_lessons(id),
  completed BOOLEAN DEFAULT false,
  quiz_score NUMERIC(5,2),
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, lesson_id)
);

-- ── 배지 정의 ──
CREATE TABLE IF NOT EXISTS komipo_badges (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  title_en TEXT,
  description TEXT,
  description_en TEXT,
  icon TEXT,
  color TEXT DEFAULT '#3B82F6',
  condition TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ── 유저 배지 획득 ──
CREATE TABLE IF NOT EXISTS komipo_user_badges (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  badge_id TEXT REFERENCES komipo_badges(id),
  earned_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, badge_id)
);

-- ── 인증서 ──
CREATE TABLE IF NOT EXISTS komipo_certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  certificate_type TEXT NOT NULL,
  issued_at TIMESTAMPTZ DEFAULT now(),
  data JSONB DEFAULT '{}'
);

-- ── 활동 로그 ──
CREATE TABLE IF NOT EXISTS komipo_activity_log (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  details JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ── 공지사항 ──
CREATE TABLE IF NOT EXISTS komipo_announcements (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ═══ INDEX ═══
CREATE INDEX IF NOT EXISTS idx_komipo_stamps_user ON komipo_stamps(user_id);
CREATE INDEX IF NOT EXISTS idx_komipo_stamps_level ON komipo_stamps(level_id);
CREATE INDEX IF NOT EXISTS idx_komipo_attempts_user ON komipo_challenge_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_komipo_lesson_progress_user ON komipo_lesson_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_komipo_user_levels_user ON komipo_user_levels(user_id);
CREATE INDEX IF NOT EXISTS idx_komipo_activity_log_user ON komipo_activity_log(user_id);

-- ═══ RLS ═══
ALTER TABLE komipo_stamps ENABLE ROW LEVEL SECURITY;
ALTER TABLE komipo_challenge_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE komipo_user_levels ENABLE ROW LEVEL SECURITY;
ALTER TABLE komipo_lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE komipo_user_badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE komipo_certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE komipo_activity_log ENABLE ROW LEVEL SECURITY;

-- Users can read/write their own data
CREATE POLICY "Users manage own stamps" ON komipo_stamps FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users manage own attempts" ON komipo_challenge_attempts FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users manage own levels" ON komipo_user_levels FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users manage own lesson_progress" ON komipo_lesson_progress FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users manage own badges" ON komipo_user_badges FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users manage own certs" ON komipo_certificates FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users manage own activity" ON komipo_activity_log FOR ALL USING (auth.uid() = user_id);

-- Public read for reference tables
ALTER TABLE komipo_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE komipo_lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE komipo_lesson_quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE komipo_levels ENABLE ROW LEVEL SECURITY;
ALTER TABLE komipo_challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE komipo_badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE komipo_announcements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read categories" ON komipo_categories FOR SELECT USING (true);
CREATE POLICY "Anyone can read lessons" ON komipo_lessons FOR SELECT USING (true);
CREATE POLICY "Anyone can read quizzes" ON komipo_lesson_quizzes FOR SELECT USING (true);
CREATE POLICY "Anyone can read levels" ON komipo_levels FOR SELECT USING (true);
CREATE POLICY "Anyone can read challenges" ON komipo_challenges FOR SELECT USING (true);
CREATE POLICY "Anyone can read badges" ON komipo_badges FOR SELECT USING (true);
CREATE POLICY "Anyone can read announcements" ON komipo_announcements FOR SELECT USING (true);

-- ═══ SEED DATA ═══

-- Levels
INSERT INTO komipo_levels (id, title, title_en, description, question_count, pass_threshold, color, icon, prerequisite_level) VALUES
  (1, '초급 (Beginner)', 'Beginner', 'AI 기초 개념과 주요 도구에 대한 기본 이해도를 확인합니다.', 20, 0.70, '#00B894', '🌱', NULL),
  (2, '중급 (Intermediate)', 'Intermediate', '프롬프트 엔지니어링과 AI 도구 활용 능력을 평가합니다.', 25, 0.75, '#FDCB6E', '⚡', 1),
  (3, '고급 (Advanced)', 'Advanced', 'AI 에이전트, 업무 자동화, 윤리적 활용에 대한 심화 지식을 평가합니다.', 25, 0.80, '#E17055', '🔥', 2),
  (4, '고수 (Master)', 'Master', 'Fine-tuning, RAG, API 활용 등 고급 AI 기술에 대한 전문가 수준을 확인합니다.', 20, 0.85, '#FFD700', '👑', 3)
ON CONFLICT (id) DO NOTHING;

-- Badges
INSERT INTO komipo_badges (id, title, title_en, description, description_en, icon, color, condition) VALUES
  ('first-stamp', '첫 도장', 'First Stamp', '첫 번째 도장을 획득했습니다!', 'Earned your first stamp!', '🎯', '#3B82F6', 'stamps_total >= 1'),
  ('stamp-10', '도장 수집가', 'Stamp Collector', '도장 10개를 모았습니다!', 'Collected 10 stamps!', '📚', '#8B5CF6', 'stamps_total >= 10'),
  ('stamp-50', '도장 마스터', 'Stamp Master', '도장 50개를 모았습니다!', 'Collected 50 stamps!', '🏆', '#F59E0B', 'stamps_total >= 50'),
  ('beginner-master', '초급 마스터', 'Beginner Master', '초급 레벨을 클리어했습니다!', 'Cleared Beginner level!', '🌱', '#00B894', 'level_1_cleared'),
  ('intermediate-master', '중급 마스터', 'Intermediate Master', '중급 레벨을 클리어했습니다!', 'Cleared Intermediate level!', '⚡', '#FDCB6E', 'level_2_cleared'),
  ('advanced-master', '고급 마스터', 'Advanced Master', '고급 레벨을 클리어했습니다!', 'Cleared Advanced level!', '🔥', '#E17055', 'level_3_cleared'),
  ('grand-master', '그랜드 마스터', 'Grand Master', '모든 레벨을 클리어했습니다!', 'Cleared all levels!', '👑', '#FFD700', 'all_levels_cleared'),
  ('lightning', '번개 풀이', 'Lightning Solver', '30초 이내에 정답을 맞혔습니다!', 'Correct within 30 seconds!', '⚡', '#F97316', 'answer_under_30s'),
  ('perfect-level', '완벽한 레벨', 'Perfect Level', '한 레벨에서 100% 정답률을 달성했습니다!', '100% accuracy in a level!', '💎', '#06B6D4', 'level_100_percent')
ON CONFLICT (id) DO NOTHING;

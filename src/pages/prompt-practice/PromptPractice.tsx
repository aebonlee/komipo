import { useState, useMemo, useCallback } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

/* ============================================
   메뉴 구조 (4 카테고리, 15 하위)
   ============================================ */
const MENU = [
  {
    id: 'basics', icon: 'fa-book-open', labelKo: '프롬프트 기초', labelEn: 'Prompt Basics', color: 'green',
    descKo: '프롬프트의 개념과 구성 원칙을 학습합니다',
    descEn: 'Learn the concept and principles of prompts',
    children: [
      { id: 'what-is-prompt', icon: 'fa-circle-question', labelKo: '프롬프트란', labelEn: 'What is a Prompt', descKo: '프롬프트의 정의와 역할', descEn: 'Definition and role of prompts' },
      { id: 'good-prompt', icon: 'fa-star', labelKo: '좋은 프롬프트의 조건', labelEn: 'Good Prompt Criteria', descKo: '효과적인 프롬프트의 요소', descEn: 'Elements of effective prompts' },
      { id: 'prompt-frameworks', icon: 'fa-sitemap', labelKo: '프롬프트 구조(RTF/CRISPE)', labelEn: 'Prompt Frameworks', descKo: 'RTF, CRISPE 등 프레임워크', descEn: 'RTF, CRISPE frameworks' },
    ],
  },
  {
    id: 'techniques', icon: 'fa-wand-magic-sparkles', labelKo: '핵심 기법', labelEn: 'Core Techniques', color: 'blue',
    descKo: '프롬프트 엔지니어링의 핵심 기법을 익힙니다',
    descEn: 'Master core prompt engineering techniques',
    children: [
      { id: 'few-shot', icon: 'fa-list-ol', labelKo: 'Few-shot 학습', labelEn: 'Few-shot Learning', descKo: '예시를 활용한 학습', descEn: 'Learning with examples' },
      { id: 'chain-of-thought', icon: 'fa-link', labelKo: 'Chain-of-Thought', labelEn: 'Chain-of-Thought', descKo: '단계적 사고 유도', descEn: 'Step-by-step reasoning' },
      { id: 'role-assign', icon: 'fa-user-tie', labelKo: '역할 지정', labelEn: 'Role Assignment', descKo: 'AI에게 역할 부여하기', descEn: 'Assigning roles to AI' },
      { id: 'output-format', icon: 'fa-table-columns', labelKo: '출력 형식 지정', labelEn: 'Output Formatting', descKo: '원하는 형식으로 출력받기', descEn: 'Getting output in desired format' },
    ],
  },
  {
    id: 'business', icon: 'fa-briefcase', labelKo: '업무 프롬프트', labelEn: 'Business Prompts', color: 'purple',
    descKo: '발전소 업무에 바로 활용 가능한 프롬프트를 학습합니다',
    descEn: 'Learn practical prompts for power plant operations',
    children: [
      { id: 'report-prompt', icon: 'fa-file-lines', labelKo: '보고서 작성', labelEn: 'Report Writing', descKo: '업무 보고서 생성 프롬프트', descEn: 'Business report generation prompts' },
      { id: 'meeting-prompt', icon: 'fa-clipboard-list', labelKo: '회의록 정리', labelEn: 'Meeting Minutes', descKo: '회의록 요약 및 정리', descEn: 'Meeting minutes summarization' },
      { id: 'data-prompt', icon: 'fa-chart-line', labelKo: '데이터 분석', labelEn: 'Data Analysis', descKo: '설비 데이터 분석 프롬프트', descEn: 'Equipment data analysis prompts' },
      { id: 'email-prompt', icon: 'fa-envelope', labelKo: '이메일 작성', labelEn: 'Email Drafting', descKo: '업무 이메일 프롬프트', descEn: 'Business email prompts' },
      { id: 'safety-prompt', icon: 'fa-shield-halved', labelKo: '안전점검 보고', labelEn: 'Safety Inspection', descKo: '안전점검 보고서 프롬프트', descEn: 'Safety inspection report prompts' },
    ],
  },
  {
    id: 'practice', icon: 'fa-flask', labelKo: '실전 연습', labelEn: 'Practice', color: 'orange',
    descKo: '직접 프롬프트를 작성하고 분석합니다',
    descEn: 'Write and analyze prompts yourself',
    children: [
      { id: 'analyzer', icon: 'fa-magnifying-glass-chart', labelKo: '프롬프트 분석기', labelEn: 'Prompt Analyzer', descKo: '프롬프트 점수 분석', descEn: 'Analyze prompt scores' },
      { id: 'comparison-quiz', icon: 'fa-scale-balanced', labelKo: '비교 평가', labelEn: 'Comparison Quiz', descKo: '어떤 프롬프트가 더 좋을까?', descEn: 'Which prompt is better?' },
      { id: 'challenges', icon: 'fa-trophy', labelKo: '도전 과제', labelEn: 'Challenges', descKo: '프롬프트 개선 도전', descEn: 'Prompt improvement challenges' },
    ],
  },
];

const ALL_SECTIONS = MENU.flatMap(g =>
  g.children.length > 0 ? [g.id, ...g.children.map(c => c.id)] : [g.id]
);

/* ============================================
   학습 콘텐츠 데이터 (발전소 직원 맞춤)
   ============================================ */
const CONTENT: Record<string, {
  titleKo: string; titleEn: string; icon: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blocks: any[];
}> = {
  'what-is-prompt': {
    titleKo: '프롬프트란 무엇인가?', titleEn: 'What is a Prompt?', icon: 'fa-circle-question',
    blocks: [
      { type: 'text', ko: '프롬프트(Prompt)는 AI에게 원하는 결과를 얻기 위해 입력하는 텍스트 지시문입니다. "프롬프트 엔지니어링"이란 AI로부터 최적의 결과를 이끌어내기 위해 프롬프트를 체계적으로 설계하는 기술을 말합니다.', en: 'A prompt is the text instruction you give AI to get desired results. "Prompt engineering" refers to the systematic design of prompts to elicit optimal results from AI.' },
      { type: 'cards', items: [
        { icon: 'fa-keyboard', ko: '입력 (Input): AI에게 전달하는 텍스트. 질문, 지시, 맥락 정보 등을 포함합니다.', en: 'Input: Text delivered to AI, including questions, instructions, and context.', color: 'blue' },
        { icon: 'fa-bullseye', ko: '목적 (Purpose): 원하는 결과의 형태와 내용을 정확히 전달하여 AI가 방향을 잡도록 합니다.', en: 'Purpose: Clearly convey the desired form and content so AI understands the direction.', color: 'green' },
        { icon: 'fa-sliders', ko: '제어 (Control): 응답의 길이, 형식, 톤, 수준을 지정하여 AI 출력을 제어합니다.', en: 'Control: Specify response length, format, tone, and level to steer AI output.', color: 'purple' },
      ]},
      { type: 'text', ko: '## 프롬프트의 기본 구성 요소\n프롬프트는 다음 요소들을 조합하여 작성합니다. 모든 요소를 매번 포함할 필요는 없지만, 많이 포함할수록 AI의 응답 품질이 향상됩니다.', en: '## Basic Components of a Prompt\nPrompts are composed by combining the following elements. Not all are needed every time, but the more you include, the better the AI response quality.' },
      { type: 'table', headers: ['ko:구성 요소', 'en:Component', 'ko:설명', 'en:Description', 'ko:예시', 'en:Example'], rows: [
        ['ko:역할 (Role)', 'en:Role', 'ko:AI가 수행할 역할을 지정', 'en:Assign a role for AI to play', 'ko:"너는 발전소 설비 관리 전문가야"', 'en:"You are a power plant equipment expert"'],
        ['ko:맥락 (Context)', 'en:Context', 'ko:배경 상황과 조건을 제공', 'en:Provide background and conditions', 'ko:"500MW 화력발전소 보일러 설비 대상"', 'en:"For a 500MW thermal power plant boiler"'],
        ['ko:과제 (Task)', 'en:Task', 'ko:수행할 구체적 작업을 명시', 'en:Specify the concrete task', 'ko:"월간 정비 보고서를 작성해줘"', 'en:"Create a monthly maintenance report"'],
        ['ko:형식 (Format)', 'en:Format', 'ko:출력 형태를 지정', 'en:Specify output format', 'ko:"표 형식으로 정리해줘"', 'en:"Organize in table format"'],
        ['ko:제약 (Constraints)', 'en:Constraints', 'ko:제한 조건이나 규칙 설정', 'en:Set limitations or rules', 'ko:"A4 2장 이내, 한국어로"', 'en:"Within 2 A4 pages, in Korean"'],
        ['ko:예시 (Examples)', 'en:Examples', 'ko:원하는 결과의 샘플 제공', 'en:Provide sample of desired result', 'ko:"다음 형식을 참고해: ..."', 'en:"Refer to this format: ..."'],
      ]},
      { type: 'text', ko: '## 프롬프트 수준에 따른 결과 비교\n같은 목적이라도 프롬프트의 구체성에 따라 AI 응답의 품질이 크게 달라집니다.', en: '## Result Comparison by Prompt Quality\nEven with the same goal, AI response quality varies greatly depending on prompt specificity.' },
      { type: 'prompt-comparison',
        badLabelKo: '초급 프롬프트', badLabelEn: 'Basic Prompt',
        goodLabelKo: '전문가 수준 프롬프트', goodLabelEn: 'Expert-Level Prompt',
        badKo: '보고서 만들어줘', badEn: 'Make me a report',
        goodKo: '너는 화력발전소 설비 관리 전문가야.\n\n다음 조건으로 월간 설비 점검 보고서를 작성해줘:\n- 대상: 보일러 2호기 (500MW)\n- 기간: 2026년 3월\n- 포함: 점검 항목, 상태 평가, 조치 사항, 다음 달 계획\n- 상태: 정상/주의/경고/위험 4단계\n- 형식: 마크다운 표\n- 분량: A4 2장 이내', goodEn: 'You are a thermal power plant equipment management expert.\n\nCreate a monthly equipment inspection report with these conditions:\n- Target: Boiler Unit 2 (500MW)\n- Period: March 2026\n- Include: inspection items, condition assessment, actions taken, next month plan\n- Status: 4 levels (Normal/Caution/Warning/Critical)\n- Format: markdown table\n- Length: within 2 A4 pages' },
      { type: 'steps', items: [
        { icon: 'fa-circle-xmark', ko: '초급: "만들어줘" → AI가 임의로 판단, 결과가 모호함', en: 'Basic: "Make me" → AI guesses, vague results' },
        { icon: 'fa-circle-check', ko: '전문가: 역할 + 맥락 + 과제 + 형식 + 제약 → 정확하고 실용적인 결과', en: 'Expert: Role + Context + Task + Format + Constraints → Precise, practical results' },
      ]},
      { type: 'text', ko: '## 발전소 업무에서의 프롬프트 활용\nAI 프롬프트를 잘 활용하면 반복적인 문서 작성 시간을 절약하고, 더 체계적인 업무 처리가 가능합니다.', en: '## Prompts in Power Plant Operations\nWhen you use prompts effectively, you save time on repetitive documentation and achieve more systematic work processing.' },
      { type: 'cards', items: [
        { icon: 'fa-file-lines', ko: '보고서: 정비, 점검, 운전 보고서 초안 자동 생성', en: 'Reports: Auto-generate drafts for maintenance and inspection reports', color: 'blue' },
        { icon: 'fa-chart-line', ko: '데이터 분석: 설비 운전 데이터 트렌드 분석 및 이상 감지', en: 'Data Analysis: Equipment operation data trend analysis and anomaly detection', color: 'blue' },
        { icon: 'fa-envelope', ko: '이메일: 협력사, 유관기관 대상 업무 이메일 초안 작성', en: 'Email: Draft business emails to partners and related organizations', color: 'blue' },
        { icon: 'fa-shield-halved', ko: '안전: 안전점검 체크리스트 및 보고서 작성', en: 'Safety: Safety inspection checklists and report generation', color: 'blue' },
        { icon: 'fa-clipboard-list', ko: '회의록: 회의 내용 요약 및 액션아이템 추출', en: 'Minutes: Meeting content summarization and action item extraction', color: 'blue' },
      ]},
      { type: 'tip', ko: '프롬프트는 단순한 질문이 아니라, AI와의 전문적인 소통 도구입니다. "무엇을 원하는지"뿐 아니라 "어떤 형태로, 어떤 수준으로, 어떤 조건에서" 원하는지를 명확히 전달하세요.', en: 'A prompt is not just a question — it\'s a professional communication tool with AI. Communicate not only "what you want" but "in what format, at what level, under what conditions."' },
    ],
  },
  'good-prompt': {
    titleKo: '좋은 프롬프트의 조건', titleEn: 'Good Prompt Criteria', icon: 'fa-star',
    blocks: [
      { type: 'text', ko: '좋은 프롬프트는 AI가 정확하고 유용한 응답을 생성하도록 돕습니다. 다음 5가지 요소를 포함하면 프롬프트의 품질이 크게 향상됩니다.', en: 'Good prompts help AI generate accurate and useful responses. Including these 5 elements greatly improves prompt quality.' },
      { type: 'principles', items: [
        { num: 1, titleKo: '구체성 (Specificity)', titleEn: 'Specificity', ko: '모호한 표현 대신 구체적인 세부사항을 포함하세요. 대상 설비, 기간, 수량을 명시합니다.', en: 'Include specific details instead of vague expressions. Specify target equipment, period, and quantities.' },
        { num: 2, titleKo: '맥락 (Context)', titleEn: 'Context', ko: '배경 정보를 제공하여 AI가 상황을 이해하도록 합니다. 발전소 유형, 설비 종류, 업무 목적 등을 포함합니다.', en: 'Provide background information so AI understands the situation. Include plant type, equipment type, work purpose, etc.' },
        { num: 3, titleKo: '형식 지정 (Format)', titleEn: 'Format', ko: '원하는 출력 형식을 명시합니다. 표, 목록, 단락, 체크리스트 등 원하는 형태를 지정합니다.', en: 'Specify desired output format. Indicate whether you want a table, list, paragraph, checklist, etc.' },
        { num: 4, titleKo: '제약 조건 (Constraints)', titleEn: 'Constraints', ko: '제한사항을 명시합니다. 분량, 수준, 포함/제외 요소, 문체 등을 지정합니다.', en: 'State limitations. Specify length, level, include/exclude elements, tone, etc.' },
        { num: 5, titleKo: '예시 제공 (Examples)', titleEn: 'Examples', ko: '원하는 결과의 예시를 하나 이상 포함하면 AI가 기대치를 정확히 파악합니다.', en: 'Including one or more examples of desired output helps AI understand your expectations precisely.' },
      ]},
      { type: 'prompt-comparison',
        badLabelKo: '나쁜 프롬프트', badLabelEn: 'Bad Prompt',
        goodLabelKo: '좋은 프롬프트', goodLabelEn: 'Good Prompt',
        badKo: '보고서 만들어줘', badEn: 'Make me a report',
        goodKo: '한국중부발전 보령화력발전소 3호기 터빈 정기점검 결과 보고서를 작성해줘. 점검일, 점검 항목, 상태 평가(정상/주의/경고), 조치 사항, 차기 점검 예정일을 표 형식으로 정리해줘. 요약 소견도 200자 이내로 포함해줘.', goodEn: 'Create a regular turbine inspection report for KOMIPO Boryeong Power Plant Unit 3. Organize inspection date, items, condition assessment (Normal/Caution/Warning), actions taken, and next inspection date in table format. Include a summary opinion within 200 characters.' },
      { type: 'exercise', ko: '여러분의 담당 업무에 대해 위 5가지 요소를 모두 포함한 프롬프트를 작성해보세요.', en: 'Try writing a prompt for your work that includes all 5 elements above.' },
    ],
  },
  'prompt-frameworks': {
    titleKo: '프롬프트 구조: RTF / CRISPE', titleEn: 'Prompt Frameworks: RTF / CRISPE', icon: 'fa-sitemap',
    blocks: [
      { type: 'text', ko: '프롬프트를 체계적으로 작성하기 위한 프레임워크를 활용하면 일관되고 높은 품질의 결과를 얻을 수 있습니다.', en: 'Using frameworks for systematic prompt writing helps you get consistent, high-quality results.' },
      { type: 'framework-table', frameworkKo: 'RTF 프레임워크', frameworkEn: 'RTF Framework',
        rows: [
          { letterKo: 'R', letterEn: 'R', labelKo: '역할 (Role)', labelEn: 'Role', descKo: 'AI에게 부여할 전문가 역할', descEn: 'Expert role to assign to AI', exKo: '"너는 발전설비 정비 전문가야"', exEn: '"You are a power plant maintenance expert"' },
          { letterKo: 'T', letterEn: 'T', labelKo: '과제 (Task)', labelEn: 'Task', descKo: '수행할 구체적 작업', descEn: 'Specific task to perform', exKo: '"월간 정비 보고서를 작성해줘"', exEn: '"Create a monthly maintenance report"' },
          { letterKo: 'F', letterEn: 'F', labelKo: '형식 (Format)', labelEn: 'Format', descKo: '원하는 출력 형태', descEn: 'Desired output format', exKo: '"표 형식으로 정리해줘"', exEn: '"Organize in table format"' },
        ]},
      { type: 'framework-table', frameworkKo: 'CRISPE 프레임워크', frameworkEn: 'CRISPE Framework',
        rows: [
          { letterKo: 'C', letterEn: 'C', labelKo: '용량/역할 (Capacity)', labelEn: 'Capacity', descKo: 'AI의 역할과 전문성', descEn: 'AI\'s role and expertise', exKo: '"전력 산업 안전관리 전문가로서"', exEn: '"As a power industry safety expert"' },
          { letterKo: 'R', letterEn: 'R', labelKo: '요청 (Request)', labelEn: 'Request', descKo: '구체적 요청사항', descEn: 'Specific request', exKo: '"안전점검 체크리스트를 만들어줘"', exEn: '"Create a safety checklist"' },
          { letterKo: 'I', letterEn: 'I', labelKo: '통찰 (Insight)', labelEn: 'Insight', descKo: '배경 정보와 맥락', descEn: 'Background info and context', exKo: '"연 2회 정기 안전점검 대상"', exEn: '"For biannual regular safety inspection"' },
          { letterKo: 'S', letterEn: 'S', labelKo: '스타일 (Style)', labelEn: 'Style', descKo: '문체와 톤', descEn: 'Writing style and tone', exKo: '"공식적이고 전문적인 톤으로"', exEn: '"In a formal, professional tone"' },
          { letterKo: 'P', letterEn: 'P', labelKo: '개인화 (Personalize)', labelEn: 'Personalize', descKo: '대상과 상황 맞춤', descEn: 'Tailored to audience', exKo: '"발전소 현장 직원 대상"', exEn: '"For plant floor staff"' },
          { letterKo: 'E', letterEn: 'E', labelKo: '실험 (Experiment)', labelEn: 'Experiment', descKo: '반복과 개선', descEn: 'Iteration and improvement', exKo: '"3가지 버전을 만들어줘"', exEn: '"Create 3 versions"' },
        ]},
      { type: 'tip', ko: '처음에는 RTF로 시작하고, 익숙해지면 CRISPE로 확장하면 됩니다. 프레임워크는 도구이지 규칙이 아닙니다.', en: 'Start with RTF, then expand to CRISPE as you get comfortable. Frameworks are tools, not rules.' },
    ],
  },
  'few-shot': {
    titleKo: 'Few-shot 학습', titleEn: 'Few-shot Learning', icon: 'fa-list-ol',
    blocks: [
      { type: 'text', ko: 'Few-shot 학습은 AI에게 원하는 결과의 예시를 1~3개 제공하여 패턴을 학습시키는 기법입니다. 예시가 없는 것을 Zero-shot, 하나인 것을 One-shot이라고 합니다.', en: 'Few-shot learning provides 1-3 examples of desired output to teach AI the pattern. Zero examples is Zero-shot, one example is One-shot.' },
      { type: 'prompt-example', labelKo: 'Few-shot 프롬프트 예시', labelEn: 'Few-shot Prompt Example',
        promptKo: '다음 형식으로 설비 점검 요약을 작성해줘.\n\n예시 1:\n설비: 보일러 1호기\n요약: 과열기 튜브 마모 0.3mm 진행. 다음 정기 점검 시 교체 검토 필요. 현재 운전 지장 없음.\n\n예시 2:\n설비: 터빈 2호기\n요약: 블레이드 진동 수치 정상 범위(0.8mm/s). 윤활유 점도 양호. 차기 오버홀 시 까지 정상 운전 가능.\n\n설비: 발전기 3호기\n요약:',
        promptEn: 'Write equipment inspection summaries in the following format.\n\nExample 1:\nEquipment: Boiler Unit 1\nSummary: Superheater tube wear progressed 0.3mm. Replacement review needed at next regular inspection. No current operation issues.\n\nExample 2:\nEquipment: Turbine Unit 2\nSummary: Blade vibration within normal range (0.8mm/s). Lubricant viscosity good. Normal operation possible until next overhaul.\n\nEquipment: Generator Unit 3\nSummary:',
        responseKo: 'AI는 제공된 예시의 패턴(설비-요약 구조, 수치 포함, 조치 의견)을 학습하여 일관된 형식의 점검 요약을 생성합니다.',
        responseEn: 'AI learns the pattern from provided examples (equipment-summary structure, including numbers, action opinions) to generate consistently formatted summaries.' },
      { type: 'prompt-comparison',
        badLabelKo: 'Zero-shot (예시 없음)', badLabelEn: 'Zero-shot (No examples)',
        goodLabelKo: 'Few-shot (예시 포함)', goodLabelEn: 'Few-shot (With examples)',
        badKo: '발전기 3호기 점검 요약 써줘', badEn: 'Write inspection summary for Generator 3',
        goodKo: '(위의 예시처럼 2개의 예시를 포함하여 패턴을 보여준 후 요청)', goodEn: '(Include 2 examples as shown above to demonstrate the pattern before requesting)' },
      { type: 'tip', ko: 'Few-shot은 특히 특정 형식이나 톤을 유지해야 할 때 매우 효과적입니다. 정비 보고서, 점검 기록, 업무 일지 등의 일관성을 유지하는 데 유용합니다.', en: 'Few-shot is especially effective when maintaining a specific format or tone. Useful for maintaining consistency in maintenance reports, inspection records, work logs, etc.' },
      { type: 'exercise', ko: '자신의 담당 설비에 대해 점검 요약 2개를 예시로 작성하고, 세 번째 요약을 AI에게 생성하도록 Few-shot 프롬프트를 만들어보세요.', en: 'Write 2 inspection summaries for your equipment as examples, then create a Few-shot prompt for AI to generate a third one.' },
    ],
  },
  'chain-of-thought': {
    titleKo: 'Chain-of-Thought (CoT)', titleEn: 'Chain-of-Thought (CoT)', icon: 'fa-link',
    blocks: [
      { type: 'text', ko: 'Chain-of-Thought는 AI에게 단계별로 사고하도록 유도하는 기법입니다. "단계별로 생각해봐"라는 간단한 지시만으로도 AI의 추론 품질이 크게 향상됩니다.', en: 'Chain-of-Thought guides AI to think step by step. Even a simple instruction like "think step by step" significantly improves AI\'s reasoning quality.' },
      { type: 'prompt-comparison',
        badLabelKo: '일반 프롬프트', badLabelEn: 'Regular Prompt',
        goodLabelKo: 'CoT 프롬프트', goodLabelEn: 'CoT Prompt',
        badKo: '이 설비 고장 원인 분석해줘.', badEn: 'Analyze the cause of this equipment failure.',
        goodKo: '이 설비 고장의 원인을 분석해줘. 다음 단계를 따라 분석해줘:\n1단계: 고장 현상을 정리한다\n2단계: 관련 운전 데이터를 확인한다\n3단계: 가능한 원인을 나열한다\n4단계: 각 원인의 가능성을 평가한다\n5단계: 최종 원인 판단과 재발 방지 대책을 제시한다', goodEn: 'Analyze the cause of this equipment failure. Follow these steps:\nStep 1: Organize failure symptoms\nStep 2: Check related operational data\nStep 3: List possible causes\nStep 4: Evaluate likelihood of each cause\nStep 5: Present final cause determination and prevention measures' },
      { type: 'steps', items: [
        { icon: 'fa-1', ko: '문제를 명확히 정의한다', en: 'Define the problem clearly' },
        { icon: 'fa-2', ko: '필요한 단계를 나열한다', en: 'List the necessary steps' },
        { icon: 'fa-3', ko: '각 단계를 순서대로 실행하도록 지시한다', en: 'Instruct to execute each step in order' },
        { icon: 'fa-4', ko: '최종 결론을 요청한다', en: 'Request the final conclusion' },
      ]},
      { type: 'tip', ko: 'CoT는 특히 복잡한 고장 분석, 안전 평가, 의사결정 지원에 효과적입니다. 설비 트러블슈팅, 사고 원인 분석 시 유용합니다.', en: 'CoT is especially effective for complex failure analysis, safety assessment, and decision support. Useful for equipment troubleshooting and accident cause analysis.' },
    ],
  },
  'role-assign': {
    titleKo: '역할 지정 기법', titleEn: 'Role Assignment Technique', icon: 'fa-user-tie',
    blocks: [
      { type: 'text', ko: '역할 지정은 AI에게 특정 전문가의 관점에서 응답하도록 요청하는 기법입니다. 역할을 부여하면 AI의 응답 톤, 깊이, 관점이 해당 전문가에 맞게 조정됩니다.', en: 'Role assignment asks AI to respond from a specific expert\'s perspective. Assigning a role adjusts AI\'s response tone, depth, and viewpoint to match that expert.' },
      { type: 'cards', items: [
        { icon: 'fa-gear', ko: '발전설비 정비 전문가', en: 'Power Plant Maintenance Expert', color: 'blue' },
        { icon: 'fa-fire', ko: '화력발전 운전 전문 엔지니어', en: 'Thermal Power Operation Engineer', color: 'green' },
        { icon: 'fa-shield-halved', ko: '산업안전 관리 전문가', en: 'Industrial Safety Manager', color: 'purple' },
        { icon: 'fa-chart-bar', ko: '에너지 데이터 분석가', en: 'Energy Data Analyst', color: 'orange' },
      ]},
      { type: 'prompt-example', labelKo: '역할 지정 프롬프트 예시', labelEn: 'Role Assignment Example',
        promptKo: '너는 20년 경력의 화력발전소 보일러 정비 전문가야.\n\n보일러 과열기 튜브에서 두께 감소가 발견되었어. 현재 설계 두께 대비 15% 감소 상태야.\n\n다음 사항을 분석해줘:\n1. 가능한 원인 (최소 3가지)\n2. 즉각적 조치 사항\n3. 장기적 관리 방안\n4. 교체 시기 판단 기준',
        promptEn: 'You are a boiler maintenance expert with 20 years of experience at thermal power plants.\n\nThickness reduction was found in the boiler superheater tubes. Currently at 15% reduction from design thickness.\n\nAnalyze the following:\n1. Possible causes (at least 3)\n2. Immediate actions needed\n3. Long-term management plan\n4. Replacement timing criteria',
        responseKo: '역할을 부여함으로써 AI가 발전소 현장의 전문 지식을 활용하여 더 실무적이고 전문적인 분석 결과를 생성합니다.',
        responseEn: 'By assigning a role, AI leverages power plant field expertise to generate more practical and professional analysis results.' },
      { type: 'exercise', ko: '여러분의 업무에 맞는 전문가 역할을 설정하고, 그 역할을 활용한 프롬프트를 작성해보세요.', en: 'Set up an expert role that fits your work and write a prompt using that role.' },
    ],
  },
  'output-format': {
    titleKo: '출력 형식 지정', titleEn: 'Output Format Specification', icon: 'fa-table-columns',
    blocks: [
      { type: 'text', ko: '출력 형식을 명확히 지정하면 AI가 바로 활용 가능한 형태로 결과를 생성합니다. 표, 목록, JSON, 마크다운 등 다양한 형식을 지정할 수 있습니다.', en: 'Clearly specifying output format makes AI generate results in immediately usable form. You can specify tables, lists, JSON, markdown, and more.' },
      { type: 'cards', items: [
        { icon: 'fa-table', ko: '표 형식: 점검 기록, 데이터 비교, 일정 정리에 적합', en: 'Table: Good for inspection records, data comparison, schedules', color: 'blue' },
        { icon: 'fa-list-ul', ko: '목록 형식: 체크리스트, 절차서, 점검 항목에 적합', en: 'List: Good for checklists, procedures, inspection items', color: 'green' },
        { icon: 'fa-code', ko: 'JSON/구조화: 시스템 연동, 데이터 처리에 적합', en: 'JSON/Structured: Good for system integration, data processing', color: 'purple' },
        { icon: 'fa-paragraph', ko: '서술 형식: 분석 보고서, 소견서, 이메일에 적합', en: 'Narrative: Good for analysis reports, opinions, emails', color: 'orange' },
      ]},
      { type: 'prompt-example', labelKo: '형식 지정 예시', labelEn: 'Format Specification Example',
        promptKo: '발전소 주요 설비의 월간 운전 현황을 다음 표 형식으로 작성해줘:\n\n| 설비명 | 가동률(%) | 효율(%) | 주요 이슈 | 조치 사항 |\n|--------|-----------|---------|-----------|----------|\n| 보일러 1호기 | ... | ... | ... | ... |',
        promptEn: 'Create a monthly operation status of major power plant equipment in this table format:\n\n| Equipment | Availability(%) | Efficiency(%) | Key Issues | Actions |\n|-----------|-----------------|---------------|------------|--------|\n| Boiler Unit 1 | ... | ... | ... | ... |',
        responseKo: '표 형식을 미리 지정하면 AI가 일관된 구조로 모든 설비 현황을 채워줍니다.',
        responseEn: 'Specifying the table format in advance makes AI fill all equipment status with a consistent structure.' },
      { type: 'tip', ko: '출력 형식의 일부를 직접 작성해서 보여주면(예: 표의 헤더만 제공) AI가 더 정확하게 패턴을 따릅니다.', en: 'Writing part of the output format yourself (e.g., providing just table headers) helps AI follow the pattern more accurately.' },
    ],
  },
  'report-prompt': {
    titleKo: '보고서 작성 프롬프트', titleEn: 'Report Writing Prompts', icon: 'fa-file-lines',
    blocks: [
      { type: 'text', ko: '보고서는 발전소 업무의 핵심입니다. AI를 활용하면 체계적이고 일관된 보고서를 효율적으로 작성할 수 있습니다. 핵심은 충분한 맥락을 제공하는 것입니다.', en: 'Reports are core to power plant operations. Using AI, you can efficiently create systematic and consistent reports. The key is providing sufficient context.' },
      { type: 'prompt-comparison',
        badLabelKo: '모호한 프롬프트', badLabelEn: 'Vague Prompt',
        goodLabelKo: '구체적 프롬프트', goodLabelEn: 'Specific Prompt',
        badKo: '정비 보고서 만들어줘', badEn: 'Make me a maintenance report',
        goodKo: '너는 화력발전소 정비 관리 전문가야.\n\n다음 조건으로 월간 정비 실적 보고서를 작성해줘:\n- 발전소: 보령화력 3호기 (500MW)\n- 기간: 2026년 3월\n- 포함: 예방정비, 사후정비, 개선정비 실적\n- 항목별: 설비명, 정비 내용, 소요 시간, 결과, 특이사항\n- 하단: 다음 달 정비 계획 요약\n- 형식: 마크다운 표\n- 분량: A4 3장 이내', goodEn: 'You are a thermal power plant maintenance management expert.\n\nCreate a monthly maintenance performance report:\n- Plant: Boryeong Thermal Unit 3 (500MW)\n- Period: March 2026\n- Include: preventive, corrective, and improvement maintenance\n- Per item: equipment, work done, time spent, result, remarks\n- Bottom: next month maintenance plan summary\n- Format: markdown table\n- Length: within 3 A4 pages' },
      { type: 'steps', items: [
        { icon: 'fa-user-tie', ko: '역할 지정: 정비 관리 전문가', en: 'Role: Maintenance management expert' },
        { icon: 'fa-info-circle', ko: '맥락 제공: 발전소, 호기, 기간', en: 'Context: Plant, unit, period' },
        { icon: 'fa-bullseye', ko: '포함 항목: 정비 유형별 실적', en: 'Items: Performance by maintenance type' },
        { icon: 'fa-table', ko: '형식 지정: 표 형식, 포함할 열 명시', en: 'Format: Table format, specify columns' },
        { icon: 'fa-sliders', ko: '제약 조건: 분량, 추가 요약 등', en: 'Constraints: Length, additional summary, etc.' },
      ]},
      { type: 'exercise', ko: '자신이 담당하는 설비의 정비 보고서를 위 구조를 참고하여 AI에게 요청해보세요.', en: 'Try requesting a maintenance report for your equipment from AI using the structure above.' },
    ],
  },
  'meeting-prompt': {
    titleKo: '회의록 정리 프롬프트', titleEn: 'Meeting Minutes Prompts', icon: 'fa-clipboard-list',
    blocks: [
      { type: 'text', ko: '회의록 정리는 시간이 많이 소요되는 업무입니다. AI를 활용하면 회의 내용을 체계적으로 정리하고 액션아이템을 추출할 수 있습니다.', en: 'Meeting minutes organization is time-consuming. Using AI, you can systematically organize meeting content and extract action items.' },
      { type: 'prompt-comparison',
        badLabelKo: '모호한 프롬프트', badLabelEn: 'Vague Prompt',
        goodLabelKo: '구체적 프롬프트', goodLabelEn: 'Specific Prompt',
        badKo: '회의록 정리해줘', badEn: 'Organize meeting minutes',
        goodKo: '다음 회의 내용을 정리해줘:\n\n[회의 내용 붙여넣기]\n\n정리 형식:\n1. 회의 개요: 일시, 장소, 참석자, 주제\n2. 주요 논의사항: 핵심 내용을 3~5개 항목으로\n3. 결정사항: 확정된 내용 목록\n4. 액션아이템: 담당자, 내용, 기한을 표로\n5. 차기 회의: 예정일, 준비 사항\n\n톤: 공식적, 간결하게\n분량: A4 1장 이내', goodEn: 'Organize the following meeting content:\n\n[Paste meeting content]\n\nFormat:\n1. Overview: date, location, attendees, topic\n2. Key discussions: 3-5 items\n3. Decisions: list of confirmed items\n4. Action items: table with person, task, deadline\n5. Next meeting: date, preparation needed\n\nTone: formal, concise\nLength: within 1 A4 page' },
      { type: 'tip', ko: '회의 내용을 그대로 붙여넣고 정리 형식만 지정하면, AI가 핵심을 추출하여 깔끔한 회의록을 만들어 줍니다.', en: 'Just paste the meeting content and specify the format, and AI will extract the key points to create clean minutes.' },
    ],
  },
  'data-prompt': {
    titleKo: '데이터 분석 프롬프트', titleEn: 'Data Analysis Prompts', icon: 'fa-chart-line',
    blocks: [
      { type: 'text', ko: '발전소 운전 데이터를 AI에게 분석 의뢰할 때, 구체적인 분석 요청이 핵심입니다.', en: 'When requesting AI to analyze power plant operation data, specific analysis requests are key.' },
      { type: 'prompt-comparison',
        badLabelKo: '모호한 프롬프트', badLabelEn: 'Vague Prompt',
        goodLabelKo: '구체적 프롬프트', goodLabelEn: 'Specific Prompt',
        badKo: '이 데이터 분석해줘', badEn: 'Analyze this data',
        goodKo: '너는 발전소 운전 데이터 분석 전문가야.\n\n다음 보일러 운전 데이터를 분석해줘:\n[데이터 붙여넣기]\n\n분석 항목:\n1. 주요 파라미터 트렌드 (증감 추이)\n2. 이상 수치 감지 (정상 범위 벗어난 값)\n3. 파라미터 간 상관관계\n4. 효율 변화 분석\n5. 개선 제안 (최소 3가지)\n\n형식: 각 항목별 요약 + 주요 수치는 표로', goodEn: 'You are a power plant operation data analysis expert.\n\nAnalyze the following boiler operation data:\n[Paste data]\n\nAnalysis items:\n1. Key parameter trends\n2. Anomaly detection (out-of-range values)\n3. Parameter correlations\n4. Efficiency change analysis\n5. Improvement suggestions (at least 3)\n\nFormat: summary per item + key figures in table' },
      { type: 'tip', ko: '데이터를 붙여넣을 때 CSV나 표 형식으로 제공하면 AI가 더 정확하게 분석합니다. 분석 관점을 명시하면 원하는 인사이트를 얻을 수 있습니다.', en: 'Providing data in CSV or table format helps AI analyze more accurately. Specifying analysis perspectives helps you get the insights you want.' },
    ],
  },
  'email-prompt': {
    titleKo: '이메일 작성 프롬프트', titleEn: 'Email Drafting Prompts', icon: 'fa-envelope',
    blocks: [
      { type: 'text', ko: '업무 이메일은 명확하고 전문적이어야 합니다. AI를 활용하면 상황에 맞는 이메일을 빠르게 작성할 수 있습니다.', en: 'Business emails must be clear and professional. Using AI, you can quickly draft emails appropriate for each situation.' },
      { type: 'prompt-comparison',
        badLabelKo: '모호한 프롬프트', badLabelEn: 'Vague Prompt',
        goodLabelKo: '구체적 프롬프트', goodLabelEn: 'Specific Prompt',
        badKo: '이메일 써줘', badEn: 'Write an email',
        goodKo: '다음 조건으로 업무 이메일을 작성해줘:\n\n- 수신: 설비 제조사 담당자\n- 목적: 터빈 부품 교체 견적 요청\n- 포함 사항: 부품명(터빈 블레이드 3세트), 납기 희망일(2026년 6월), 설치 지원 포함 여부 확인\n- 톤: 공식적이면서 협조적\n- 분량: 200자 이내\n- 한국어로 작성', goodEn: 'Write a business email with these conditions:\n\n- To: Equipment manufacturer representative\n- Purpose: Request quotation for turbine parts replacement\n- Include: part name (3 sets of turbine blades), desired delivery (June 2026), confirm installation support\n- Tone: formal yet cooperative\n- Length: within 200 words\n- In Korean' },
      { type: 'exercise', ko: '최근 보내야 할 업무 이메일 하나를 선택하여, 위 구조를 따르는 프롬프트를 작성해보세요.', en: 'Select a recent business email you need to send and write a prompt following the structure above.' },
    ],
  },
  'safety-prompt': {
    titleKo: '안전점검 보고 프롬프트', titleEn: 'Safety Inspection Report Prompts', icon: 'fa-shield-halved',
    blocks: [
      { type: 'text', ko: '안전점검 보고는 발전소 운영의 핵심입니다. AI를 활용하면 체계적인 점검 보고서를 빠르게 작성할 수 있습니다.', en: 'Safety inspection reporting is core to power plant operations. Using AI, you can quickly create systematic inspection reports.' },
      { type: 'prompt-comparison',
        badLabelKo: '모호한 프롬프트', badLabelEn: 'Vague Prompt',
        goodLabelKo: '구체적 프롬프트', goodLabelEn: 'Specific Prompt',
        badKo: '안전점검 보고서 만들어줘', badEn: 'Make me a safety inspection report',
        goodKo: '너는 산업안전보건 전문가야.\n\n다음 조건으로 분기별 안전점검 결과 보고서를 작성해줘:\n- 대상: 보령화력발전소 보일러동\n- 기간: 2026년 1분기\n- 점검 분야: 전기, 기계, 화학, 소방\n- 각 분야별: 점검 항목, 적합/부적합/보완 필요, 조치 사항\n- 하단: 위험도 평가 매트릭스 (발생 가능성 × 심각도)\n- 형식: 표 + 종합 소견\n- 관련 법규: 산업안전보건법 근거 포함', goodEn: 'You are an industrial safety and health expert.\n\nCreate a quarterly safety inspection result report:\n- Target: Boryeong Thermal Power Plant boiler building\n- Period: Q1 2026\n- Areas: electrical, mechanical, chemical, fire\n- Per area: items, conforming/non-conforming/needs improvement, actions\n- Bottom: risk assessment matrix (likelihood × severity)\n- Format: table + overall findings\n- Include: relevant safety regulation references' },
      { type: 'tip', ko: '안전 보고서는 법적 근거가 중요합니다. 관련 법규나 기준을 프롬프트에 포함하면 더 전문적인 보고서를 얻을 수 있습니다.', en: 'Legal basis is important for safety reports. Including relevant regulations or standards in your prompt helps you get more professional reports.' },
    ],
  },
};

/* ============================================
   비교 평가 퀴즈 (발전소 업무 맞춤)
   ============================================ */
const COMPARISON_QUIZZES = [
  {
    id: 'q1',
    questionKo: '설비 정비 보고서를 작성하려고 합니다. 어떤 프롬프트가 더 좋을까요?',
    questionEn: 'You want to create an equipment maintenance report. Which prompt is better?',
    optionA: { ko: '정비 보고서 만들어줘.', en: 'Make me a maintenance report.' },
    optionB: { ko: '너는 발전설비 정비 전문가야. 보령화력 2호기 보일러의 3월 정비 실적 보고서를 표 형식으로 작성해줘. 예방정비/사후정비별로 설비명, 정비 내용, 소요 시간, 결과를 포함해줘.', en: 'You are a power plant maintenance expert. Create a March maintenance report for Boryeong Unit 2 boiler in table format. Include equipment, work done, time, and result by preventive/corrective maintenance type.' },
    answerKo: 'B', answerEn: 'B',
    explanationKo: 'B는 역할 지정, 구체적 맥락(발전소, 호기, 기간), 형식(표), 제약 조건(정비 유형별 구분)을 모두 포함하여 훨씬 유용한 결과를 얻을 수 있습니다.',
    explanationEn: 'B includes role, specific context (plant, unit, period), format (table), and constraints (by maintenance type), yielding much more useful results.',
  },
  {
    id: 'q2',
    questionKo: '설비 고장 원인을 분석하려고 합니다.',
    questionEn: 'You want to analyze equipment failure causes.',
    optionA: { ko: '너는 20년 경력의 터빈 전문가야. 이 고장 현상을 5단계로 분석해줘: 1)현상 정리 2)데이터 확인 3)원인 나열 4)가능성 평가 5)최종 판단과 재발 방지 대책. 수치 근거를 포함해줘.', en: 'You are a turbine expert with 20 years experience. Analyze this failure in 5 steps: 1)Symptoms 2)Data check 3)List causes 4)Evaluate likelihood 5)Final judgment and prevention. Include numerical evidence.' },
    optionB: { ko: '이 고장 원인 알려줘.', en: 'Tell me the cause of this failure.' },
    answerKo: 'A', answerEn: 'A',
    explanationKo: 'A는 역할(터빈 전문가), CoT 기법(5단계 분석), 구체적 요구(수치 근거)를 활용하여 체계적이고 실용적인 분석 결과를 얻을 수 있습니다.',
    explanationEn: 'A uses role (turbine expert), CoT technique (5-step analysis), and specific requirements (numerical evidence) for systematic, practical analysis.',
  },
  {
    id: 'q3',
    questionKo: '안전점검 체크리스트를 만들려고 합니다.',
    questionEn: 'You want to create a safety inspection checklist.',
    optionA: { ko: '안전점검 체크리스트 만들어줘. 좋은 거로.', en: 'Make me a safety checklist. A good one.' },
    optionB: { ko: '화력발전소 보일러동의 분기별 안전점검 체크리스트를 만들어줘. 점검 분야 4개(전기, 기계, 화학, 소방), 분야별 점검 항목 5개씩, 적합/부적합/해당없음 체크란, 비고란을 포함한 표로 작성해줘.', en: 'Create a quarterly safety inspection checklist for a thermal plant boiler building. 4 areas (electrical, mechanical, chemical, fire), 5 items per area, conforming/non-conforming/N/A checkboxes, and remarks column in table format.' },
    answerKo: 'B', answerEn: 'B',
    explanationKo: 'B는 대상, 점검 분야와 항목 수, 체크리스트 구조, 형식을 모두 구체적으로 명시했습니다.',
    explanationEn: 'B specifically states target, inspection areas and item count, checklist structure, and format.',
  },
  {
    id: 'q4',
    questionKo: '업무 이메일을 작성하려고 합니다.',
    questionEn: 'You want to write a business email.',
    optionA: { ko: '이메일 써줘.', en: 'Write an email.' },
    optionB: { ko: '설비 제조사에게 터빈 블레이드 교체 견적을 요청하는 이메일을 써줘.\n부품명(블레이드 3세트), 납기(6월), 설치 지원 포함 여부를 확인하고, 공식적이면서 협조적인 톤으로 200자 이내로 작성해줘.', en: 'Write an email to the equipment manufacturer requesting a turbine blade replacement quotation.\nInclude part name (3 blade sets), delivery (June), confirm installation support, in a formal yet cooperative tone within 200 words.' },
    answerKo: 'B', answerEn: 'B',
    explanationKo: 'B는 수신자, 목적, 포함 사항, 톤, 분량을 모두 구체적으로 명시하여 바로 사용할 수 있는 이메일을 받을 수 있습니다.',
    explanationEn: 'B specifies recipient, purpose, content, tone, and length for an immediately usable email.',
  },
  {
    id: 'q5',
    questionKo: '회의록을 정리하려고 합니다.',
    questionEn: 'You want to organize meeting minutes.',
    optionA: { ko: '다음 회의 내용을 정리해줘:\n[내용]\n\n형식: 1)개요(일시/참석자/주제) 2)논의사항 3~5개 3)결정사항 4)액션아이템(담당/내용/기한 표) 5)차기회의\n톤: 공식적, A4 1장', en: 'Organize this meeting:\n[Content]\n\nFormat: 1)Overview 2)3-5 discussion items 3)Decisions 4)Action items table 5)Next meeting\nTone: formal, 1 page' },
    optionB: { ko: '회의록 정리해줘.', en: 'Organize the minutes.' },
    answerKo: 'A', answerEn: 'A',
    explanationKo: 'A는 정리 형식(5개 섹션), 세부 구조(액션아이템 표), 톤과 분량을 명시하여 즉시 활용 가능한 회의록을 받을 수 있습니다.',
    explanationEn: 'A specifies format (5 sections), detail structure (action items table), tone and length for immediately usable minutes.',
  },
  {
    id: 'q6',
    questionKo: '운전 데이터를 분석하려고 합니다.',
    questionEn: 'You want to analyze operation data.',
    optionA: { ko: '이 데이터 분석해줘.', en: 'Analyze this data.' },
    optionB: { ko: '너는 발전소 운전 데이터 분석가야. 다음 보일러 운전 데이터를 분석해줘:\n[데이터]\n\n분석: 1)파라미터 트렌드 2)이상치 감지 3)효율 변화 4)개선 제안 3가지\n형식: 항목별 요약 + 핵심 수치 표', en: 'You are a plant data analyst. Analyze this boiler data:\n[Data]\n\nAnalysis: 1)Trends 2)Anomalies 3)Efficiency changes 4)3 improvement suggestions\nFormat: summary per item + key figures table' },
    answerKo: 'B', answerEn: 'B',
    explanationKo: 'B는 역할(데이터 분석가), 구체적 분석 항목(4개), 형식(요약+표)을 명시하여 실무에 바로 활용 가능한 분석을 받을 수 있습니다.',
    explanationEn: 'B specifies role (data analyst), specific analysis items (4), and format (summary+table) for immediately usable analysis.',
  },
];

/* ============================================
   도전 과제 (발전소 업무 맞춤)
   ============================================ */
const CHALLENGES = [
  {
    id: 'ch1',
    titleKo: '정비 보고서 프롬프트 개선', titleEn: 'Improve Maintenance Report Prompt',
    descKo: '아래의 약한 프롬프트를 개선하세요. 역할, 맥락, 형식, 제약 조건을 추가하세요.',
    descEn: 'Improve the weak prompt below. Add role, context, format, and constraints.',
    weakPromptKo: '정비 보고서 만들어줘', weakPromptEn: 'Make me a maintenance report',
    hintsKo: ['역할을 지정하세요 (예: 발전설비 정비 전문가)', '발전소명, 호기, 기간을 구체적으로 제시하세요', '출력 형식(표)과 포함할 항목을 명시하세요', '정비 유형(예방/사후/개선)별 구분을 추가하세요'],
    hintsEn: ['Assign a role (e.g., power plant maintenance expert)', 'Specify plant name, unit, and period', 'State output format (table) and items to include', 'Add classification by maintenance type'],
    minScore: 60,
  },
  {
    id: 'ch2',
    titleKo: '이메일 작성 프롬프트 개선', titleEn: 'Improve Email Prompt',
    descKo: '아래의 약한 프롬프트를 구체적인 업무 이메일 요청으로 개선하세요.',
    descEn: 'Improve the weak prompt below into a specific business email request.',
    weakPromptKo: '이메일 써줘', weakPromptEn: 'Write an email',
    hintsKo: ['수신자와 목적을 명시하세요', '포함해야 할 구체적 내용을 나열하세요', '톤(공식적/협조적)과 분량을 지정하세요'],
    hintsEn: ['Specify recipient and purpose', 'List specific content to include', 'Specify tone and length'],
    minScore: 55,
  },
  {
    id: 'ch3',
    titleKo: '고장 분석 프롬프트 개선', titleEn: 'Improve Failure Analysis Prompt',
    descKo: '약한 프롬프트를 단계별 고장 분석 요청으로 개선하세요.',
    descEn: 'Improve the weak prompt into a step-by-step failure analysis request.',
    weakPromptKo: '고장 원인 알려줘', weakPromptEn: 'Tell me the failure cause',
    hintsKo: ['전문가 역할을 지정하세요', '단계별 분석을 요청하세요 (CoT)', '분석에 포함할 항목(원인, 데이터, 대책)을 명시하세요', '수치 근거 포함을 요청하세요'],
    hintsEn: ['Assign an expert role', 'Request step-by-step analysis (CoT)', 'Specify items to include (causes, data, measures)', 'Request numerical evidence'],
    minScore: 60,
  },
  {
    id: 'ch4',
    titleKo: '안전점검 프롬프트 개선', titleEn: 'Improve Safety Inspection Prompt',
    descKo: '약한 프롬프트를 체계적인 안전점검 보고서 요청으로 개선하세요.',
    descEn: 'Improve the weak prompt into a systematic safety inspection report request.',
    weakPromptKo: '안전점검 보고서 만들어줘', weakPromptEn: 'Make me a safety report',
    hintsKo: ['안전 전문가 역할을 지정하세요', '점검 분야와 항목 수를 명시하세요', '평가 기준(적합/부적합)을 제시하세요', '관련 법규 근거를 포함하세요'],
    hintsEn: ['Assign a safety expert role', 'Specify inspection areas and item count', 'Provide evaluation criteria', 'Include relevant regulation references'],
    minScore: 55,
  },
  {
    id: 'ch5',
    titleKo: '데이터 분석 프롬프트 개선', titleEn: 'Improve Data Analysis Prompt',
    descKo: '약한 프롬프트를 구체적인 운전 데이터 분석 요청으로 개선하세요.',
    descEn: 'Improve the weak prompt into a specific operation data analysis request.',
    weakPromptKo: '이 데이터 분석해줘', weakPromptEn: 'Analyze this data',
    hintsKo: ['데이터 분석가 역할을 지정하세요', '분석할 항목(트렌드, 이상치, 효율 등)을 나열하세요', '결과 형식(요약+표)을 지정하세요', '개선 제안을 포함하세요'],
    hintsEn: ['Assign a data analyst role', 'List analysis items (trends, anomalies, efficiency)', 'Specify result format (summary + table)', 'Include improvement suggestions'],
    minScore: 50,
  },
];

/* ============================================
   프롬프트 분석기 로직
   ============================================ */
interface TechniqueResult {
  hasRole: boolean;
  hasFewShot: boolean;
  hasCoT: boolean;
  hasFormat: boolean;
  hasContext: boolean;
  hasConstraints: boolean;
  hasSpecificity: boolean;
}

interface AnalysisResult {
  tech: TechniqueResult;
  score: number;
  suggestions: string[];
  passed?: boolean;
}

function detectTechniques(text: string): TechniqueResult {
  const len = text.length;
  return {
    hasRole: /너는|you are|act as|역할|role|전문가|expert|엔지니어|engineer|분석가|analyst/i.test(text),
    hasFewShot: /예시|example|예:|ex:|예를 들어|for example|다음과 같이|like this|예시\s*\d/i.test(text),
    hasCoT: /단계|step|step-by-step|단계별|1단계|2단계|먼저.*그다음|first.*then|차례|순서대로/i.test(text),
    hasFormat: /표|table|목록|list|json|마크다운|markdown|형식|format|열|column|행|row/i.test(text),
    hasContext: /발전소|plant|설비|equipment|호기|unit|대상|target|기간|period|부서|department/i.test(text),
    hasConstraints: /이내|within|이상|이하|제한|limit|포함|include|제외|exclude|분량|length|단어|word|개|점|A4|페이지/i.test(text),
    hasSpecificity: len > 100 && (text.match(/\n/g) || []).length >= 2,
  };
}

function calculateScore(text: string, techniques: TechniqueResult): number {
  if (!text.trim()) return 0;
  let score = 20;
  if (techniques.hasRole) score += 15;
  if (techniques.hasFewShot) score += 15;
  if (techniques.hasCoT) score += 10;
  if (techniques.hasFormat) score += 10;
  if (techniques.hasContext) score += 10;
  if (techniques.hasConstraints) score += 10;
  if (techniques.hasSpecificity) score += 10;
  return Math.min(score, 100);
}

function generateSuggestions(techniques: TechniqueResult, lang: string): string[] {
  const suggestions = [];
  const isKo = lang === 'ko';
  if (!techniques.hasRole) suggestions.push(isKo ? '역할을 지정해보세요 (예: "너는 발전설비 정비 전문가야")' : 'Try assigning a role (e.g., "You are a power plant maintenance expert")');
  if (!techniques.hasFewShot) suggestions.push(isKo ? '원하는 결과의 예시를 1~2개 포함해보세요' : 'Include 1-2 examples of desired output');
  if (!techniques.hasCoT) suggestions.push(isKo ? '단계별 분석을 요청해보세요 (예: "다음 단계로 분석해줘")' : 'Request step-by-step analysis (e.g., "Analyze in these steps")');
  if (!techniques.hasFormat) suggestions.push(isKo ? '출력 형식을 지정해보세요 (예: "표 형식으로", "목록으로")' : 'Specify output format (e.g., "in table format", "as a list")');
  if (!techniques.hasContext) suggestions.push(isKo ? '맥락을 추가하세요 (발전소명, 설비, 기간, 대상 등)' : 'Add context (plant name, equipment, period, target, etc.)');
  if (!techniques.hasConstraints) suggestions.push(isKo ? '제약 조건을 명시하세요 (분량, 개수, 포함/제외 요소)' : 'Specify constraints (length, count, include/exclude elements)');
  if (!techniques.hasSpecificity) suggestions.push(isKo ? '프롬프트를 더 구체적으로 작성하세요 (최소 3줄 이상)' : 'Make your prompt more detailed (at least 3 lines)');
  return suggestions;
}

/* ============================================
   서브 컴포넌트: BlockRenderer
   ============================================ */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function BlockRenderer({ block, lang }: { block: any; lang: string }) {
  const isKo = lang === 'ko';
  switch (block.type) {
    case 'text': {
      const txt = isKo ? block.ko : block.en;
      const parts = txt.split('\n').filter((l: string) => l.trim());
      return (
        <div className="ck-text-block">
          {parts.map((line: string, li: number) => {
            if (line.startsWith('## ')) return <h4 key={li} className="ck-text-heading">{line.slice(3)}</h4>;
            return <p key={li} className="ck-text">{line}</p>;
          })}
        </div>
      );
    }
    case 'highlight':
      return <div className="ck-highlight">{isKo ? block.ko : block.en}</div>;
    case 'cards':
      return (
        <div className="ck-mini-cards">
          {block.items.map((c: Record<string, string>, i: number) => (
            <div key={i} className={`ck-mini-card ck-mini-card--${c.color}`}>
              <span>{isKo ? c.ko : c.en}</span>
            </div>
          ))}
        </div>
      );
    case 'steps':
      return (
        <div className="ck-steps">
          {block.items.map((s: Record<string, string>, i: number) => (
            <div key={i} className="ck-step">
              <span className="ck-step-num">{i + 1}</span>
              <span>{isKo ? s.ko : s.en}</span>
            </div>
          ))}
        </div>
      );
    case 'principles':
      return (
        <div className="ck-principles">
          {block.items.map((p: Record<string, unknown>, i: number) => (
            <div key={i} className="ck-principle">
              <span className="ck-principle-num">{p.num as number}</span>
              <div>
                <h5>{String(isKo ? p.titleKo : p.titleEn)}</h5>
                <p>{String(isKo ? p.ko : p.en)}</p>
              </div>
            </div>
          ))}
        </div>
      );
    case 'prompt-example':
      return (
        <div className="pp-prompt-box">
          <div className="pp-prompt-label">{isKo ? block.labelKo : block.labelEn}</div>
          <div className="pp-prompt-text">{isKo ? block.promptKo : block.promptEn}</div>
          {(block.responseKo || block.responseEn) && (
            <div className="pp-response-text">{isKo ? block.responseKo : block.responseEn}</div>
          )}
        </div>
      );
    case 'prompt-comparison':
      return (
        <div className="pp-compare-full">
          <div className="pp-compare-card pp-compare-card--bad">
            <div className="pp-compare-label">{isKo ? (block.badLabelKo || '나쁜 프롬프트') : (block.badLabelEn || 'Bad Prompt')}</div>
            <div className="pp-compare-text">{isKo ? block.badKo : block.badEn}</div>
          </div>
          <div className="pp-compare-card pp-compare-card--good">
            <div className="pp-compare-label">{isKo ? (block.goodLabelKo || '좋은 프롬프트') : (block.goodLabelEn || 'Good Prompt')}</div>
            <div className="pp-compare-text">{isKo ? block.goodKo : block.goodEn}</div>
          </div>
        </div>
      );
    case 'tip':
      return (
        <div className="pp-tip">
          <span className="pp-tip-label">TIP</span>
          <span>{isKo ? block.ko : block.en}</span>
        </div>
      );
    case 'exercise':
      return (
        <div className="pp-exercise">
          <div className="pp-exercise-label">{isKo ? '연습문제' : 'Exercise'}</div>
          <p>{isKo ? block.ko : block.en}</p>
        </div>
      );
    case 'framework-table':
      return (
        <div className="pp-framework">
          <h4 className="pp-framework-title">{isKo ? block.frameworkKo : block.frameworkEn}</h4>
          <table className="pp-framework-table">
            <thead>
              <tr>
                <th>{isKo ? '구분' : 'Letter'}</th>
                <th>{isKo ? '요소' : 'Element'}</th>
                <th>{isKo ? '설명' : 'Description'}</th>
                <th>{isKo ? '예시' : 'Example'}</th>
              </tr>
            </thead>
            <tbody>
              {block.rows.map((r: Record<string, string>, i: number) => (
                <tr key={i}>
                  <td className="pp-fw-letter">{isKo ? r.letterKo : r.letterEn}</td>
                  <td className="pp-fw-label">{isKo ? r.labelKo : r.labelEn}</td>
                  <td>{isKo ? r.descKo : r.descEn}</td>
                  <td className="pp-fw-example">{isKo ? r.exKo : r.exEn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'table': {
      const langHeaders = block.headers.filter((h: string) => h.startsWith(isKo ? 'ko:' : 'en:')).map((h: string) => h.split(':')[1]);
      const langRows = block.rows.map((row: string[]) => row.filter((c: string) => c.startsWith(isKo ? 'ko:' : 'en:')).map((c: string) => c.split(':').slice(1).join(':')));
      return (
        <div className="pp-framework" style={{ marginTop: 16 }}>
          <table className="pp-framework-table">
            <thead><tr>{langHeaders.map((h: string, i: number) => <th key={i}>{h}</th>)}</tr></thead>
            <tbody>
              {langRows.map((row: string[], i: number) => (
                <tr key={i}>{row.map((cell: string, j: number) => <td key={j}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    default:
      return null;
  }
}

/* ============================================
   서브 컴포넌트: Breadcrumb
   ============================================ */
function Breadcrumb({ activeSection, activeParent, onNavigate, lang }: { activeSection: string; activeParent: string; onNavigate: (id: string) => void; lang: string }) {
  const isKo = lang === 'ko';
  const parentMenu = MENU.find(m => m.id === activeParent);
  const isChild = activeSection !== activeParent;
  const childMenu = isChild ? parentMenu?.children.find(c => c.id === activeSection) : null;
  return (
    <nav className="ck-breadcrumb">
      <button onClick={() => onNavigate(MENU[0].id)}>
        <i className="fa-solid fa-house" />
      </button>
      {parentMenu && (
        <>
          <i className="fa-solid fa-chevron-right ck-bc-sep" />
          <button className={!isChild ? 'current' : ''} onClick={() => onNavigate(parentMenu.id)}>
            {isKo ? parentMenu.labelKo : parentMenu.labelEn}
          </button>
        </>
      )}
      {childMenu && (
        <>
          <i className="fa-solid fa-chevron-right ck-bc-sep" />
          <span className="current">{isKo ? childMenu.labelKo : childMenu.labelEn}</span>
        </>
      )}
    </nav>
  );
}

/* ============================================
   서브 컴포넌트: NavButtons
   ============================================ */
function NavButtons({ activeSection, onNavigate, lang }: { activeSection: string; onNavigate: (id: string) => void; lang: string }) {
  const isKo = lang === 'ko';
  const idx = ALL_SECTIONS.indexOf(activeSection);
  const prevId = idx > 0 ? ALL_SECTIONS[idx - 1] : null;
  const nextId = idx < ALL_SECTIONS.length - 1 ? ALL_SECTIONS[idx + 1] : null;

  function getLabel(id: string) {
    for (const g of MENU) {
      if (g.id === id) return isKo ? g.labelKo : g.labelEn;
      const c = g.children.find(ch => ch.id === id);
      if (c) return isKo ? c.labelKo : c.labelEn;
    }
    return id;
  }

  return (
    <div className="ck-nav-buttons">
      {prevId ? (
        <button className="ck-nav-btn" onClick={() => onNavigate(prevId)}>
          <i className="fa-solid fa-arrow-left" />
          <div><span className="ck-nav-label">{isKo ? '이전' : 'Prev'}</span><span className="ck-nav-title">{getLabel(prevId)}</span></div>
        </button>
      ) : <div />}
      {nextId ? (
        <button className="ck-nav-btn ck-nav-next" onClick={() => onNavigate(nextId)}>
          <div><span className="ck-nav-label">{isKo ? '다음' : 'Next'}</span><span className="ck-nav-title">{getLabel(nextId)}</span></div>
          <i className="fa-solid fa-chevron-right" />
        </button>
      ) : <div />}
    </div>
  );
}

/* ============================================
   Overview 컴포넌트
   ============================================ */
function OverviewPanel({ group, onNavigate, lang }: { group: (typeof MENU)[number]; onNavigate: (id: string) => void; lang: string }) {
  const isKo = lang === 'ko';
  return (
    <div className="ck-content-box">
      <div className={`ck-overview-header ck-oh--${group.color}`}>
        <div>
          <h2>{isKo ? group.labelKo : group.labelEn}</h2>
          <p>{isKo ? group.descKo : group.descEn}</p>
        </div>
        <span className="ck-oh-badge">{group.children.length} {isKo ? '개 주제' : 'topics'}</span>
      </div>
      <div className="ck-overview-grid">
        {group.children.map(child => (
          <button key={child.id} className={`ck-ov-card ck-ov--${group.color}`} onClick={() => onNavigate(child.id)}>
            <div className="ck-ov-card-body">
              <h4>{isKo ? child.labelKo : child.labelEn}</h4>
              <p>{isKo ? child.descKo : child.descEn}</p>
            </div>
            <span className="ck-ov-arrow">&#8250;</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ============================================
   ContentPanel
   ============================================ */
function ContentPanel({ sectionId, lang }: { sectionId: string; lang: string }) {
  const data = CONTENT[sectionId];
  if (!data) return null;
  const isKo = lang === 'ko';
  const group = MENU.find(g => g.children.some(c => c.id === sectionId));
  const color = group?.color || 'blue';
  return (
    <div className="ck-content-box">
      <div className={`ck-content-header ck-ch--${color}`}>
        <h2>{isKo ? data.titleKo : data.titleEn}</h2>
      </div>
      <div className="ck-content-body">
        {data.blocks.map((block: Record<string, unknown>, i: number) => <BlockRenderer key={i} block={block} lang={lang} />)}
      </div>
    </div>
  );
}

/* ============================================
   PromptAnalyzer
   ============================================ */
function PromptAnalyzer({ lang }: { lang: string }) {
  const [text, setText] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const isKo = lang === 'ko';

  const handleAnalyze = useCallback(() => {
    if (!text.trim()) return;
    const tech = detectTechniques(text);
    const score = calculateScore(text, tech);
    const suggestions = generateSuggestions(tech, lang);
    setResult({ tech, score, suggestions });
  }, [text, lang]);

  const techniqueLabels: Record<string, string> = {
    hasRole: isKo ? '역할 지정' : 'Role Assignment',
    hasFewShot: isKo ? 'Few-shot' : 'Few-shot',
    hasCoT: isKo ? 'Chain-of-Thought' : 'Chain-of-Thought',
    hasFormat: isKo ? '형식 지정' : 'Format Spec',
    hasContext: isKo ? '맥락 제공' : 'Context',
    hasConstraints: isKo ? '제약 조건' : 'Constraints',
    hasSpecificity: isKo ? '구체성' : 'Specificity',
  };

  const getScoreColor = (s: number) => s >= 80 ? '#00B894' : s >= 60 ? '#3B82F6' : s >= 40 ? '#FDCB6E' : '#E17055';
  const getScoreLabel = (s: number) => {
    if (s >= 80) return isKo ? '우수' : 'Excellent';
    if (s >= 60) return isKo ? '양호' : 'Good';
    if (s >= 40) return isKo ? '보통' : 'Fair';
    return isKo ? '개선 필요' : 'Needs Improvement';
  };

  return (
    <div className="ck-content-box">
      <div className="ck-content-header ck-ch--orange">
        <h2>{isKo ? '프롬프트 분석기' : 'Prompt Analyzer'}</h2>
      </div>
      <div className="ck-content-body">
        <p className="ck-text">{isKo ? '프롬프트를 입력하면 기법 감지, 점수, 개선 제안을 받을 수 있습니다.' : 'Enter a prompt to get technique detection, scoring, and improvement suggestions.'}</p>
        <textarea
          className="pp-analyzer-input"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder={isKo ? '분석할 프롬프트를 입력하세요...' : 'Enter a prompt to analyze...'}
          rows={6}
        />
        <button className="pp-analyze-btn" onClick={handleAnalyze} disabled={!text.trim()}>
          {isKo ? '분석하기' : 'Analyze'}
        </button>

        {result && (
          <div className="pp-result-area">
            <div className="pp-score" style={{ borderColor: getScoreColor(result.score) }}>
              <div className="pp-score-number" style={{ color: getScoreColor(result.score) }}>{result.score}</div>
              <div className="pp-score-label" style={{ color: getScoreColor(result.score) }}>{getScoreLabel(result.score)}</div>
              <div className="pp-score-max">/ 100</div>
            </div>

            <div className="pp-techniques">
              <h4>{isKo ? '감지된 기법' : 'Detected Techniques'}</h4>
              <div className="pp-technique-badges">
                {Object.entries(result.tech).map(([key, detected]) => (
                  <span key={key} className={`pp-technique-badge ${detected ? 'active' : ''}`}>
                    {detected ? '+' : '-'} {techniqueLabels[key]}
                  </span>
                ))}
              </div>
            </div>

            {result.suggestions.length > 0 && (
              <div className="pp-suggestions">
                <h4>{isKo ? '개선 제안' : 'Improvement Suggestions'}</h4>
                <ul>
                  {result.suggestions.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================
   ComparisonQuiz
   ============================================ */
function ComparisonQuiz({ lang }: { lang: string }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const isKo = lang === 'ko';

  const quiz = COMPARISON_QUIZZES[currentIdx];
  const answer = isKo ? quiz.answerKo : quiz.answerEn;

  const handleSelect = useCallback((choice: string) => {
    if (selected) return;
    setSelected(choice);
    setShowExplanation(true);
    if (choice === answer) setCorrectCount(c => c + 1);
  }, [selected, answer]);

  const handleNext = useCallback(() => {
    if (currentIdx < COMPARISON_QUIZZES.length - 1) {
      setCurrentIdx(i => i + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  }, [currentIdx]);

  const handleReset = useCallback(() => {
    setCurrentIdx(0);
    setSelected(null);
    setShowExplanation(false);
    setCorrectCount(0);
  }, []);

  return (
    <div className="ck-content-box">
      <div className="ck-content-header ck-ch--orange">
        <div className="ck-ch-text">
          <h2>{isKo ? '비교 평가 퀴즈' : 'Comparison Quiz'}</h2>
          <p>{currentIdx + 1} / {COMPARISON_QUIZZES.length} · {isKo ? `정답 ${correctCount}개` : `${correctCount} correct`}</p>
        </div>
      </div>
      <div className="ck-content-body">
        <h3 className="pp-quiz-question">{isKo ? quiz.questionKo : quiz.questionEn}</h3>
        <div className="pp-quiz-cards">
          <button
            className={`pp-quiz-card ${selected === 'A' ? (answer === 'A' ? 'correct' : 'wrong') : ''} ${selected && answer === 'A' ? 'correct' : ''}`}
            onClick={() => handleSelect('A')}
            disabled={!!selected}
          >
            <span className="pp-quiz-label">A</span>
            <p>{isKo ? quiz.optionA.ko : quiz.optionA.en}</p>
          </button>
          <button
            className={`pp-quiz-card ${selected === 'B' ? (answer === 'B' ? 'correct' : 'wrong') : ''} ${selected && answer === 'B' ? 'correct' : ''}`}
            onClick={() => handleSelect('B')}
            disabled={!!selected}
          >
            <span className="pp-quiz-label">B</span>
            <p>{isKo ? quiz.optionB.ko : quiz.optionB.en}</p>
          </button>
        </div>

        {showExplanation && (
          <div className={`pp-quiz-explanation ${selected === answer ? 'correct' : 'wrong'}`}>
            <div className="pp-quiz-result-icon">
              {selected === answer ? (isKo ? '정답' : 'Correct') : (isKo ? '오답' : 'Incorrect')}
            </div>
            <p>{isKo ? quiz.explanationKo : quiz.explanationEn}</p>
          </div>
        )}

        <div className="pp-quiz-actions">
          {currentIdx < COMPARISON_QUIZZES.length - 1 && selected && (
            <button className="pp-analyze-btn" onClick={handleNext}>
              {isKo ? '다음 문제' : 'Next Question'}
            </button>
          )}
          {currentIdx === COMPARISON_QUIZZES.length - 1 && selected && (
            <div className="pp-quiz-final">
              <p>{isKo ? `최종 결과: ${COMPARISON_QUIZZES.length}문제 중 ${correctCount}개 정답` : `Final: ${correctCount} of ${COMPARISON_QUIZZES.length} correct`}</p>
              <button className="pp-analyze-btn" onClick={handleReset}>
                {isKo ? '다시 풀기' : 'Retry'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================
   ChallengePanel
   ============================================ */
function ChallengePanel({ lang }: { lang: string }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [showHints, setShowHints] = useState(false);
  const isKo = lang === 'ko';

  const challenge = CHALLENGES[currentIdx];

  const handleSubmit = useCallback(() => {
    if (!userInput.trim()) return;
    const tech = detectTechniques(userInput);
    const score = calculateScore(userInput, tech);
    const suggestions = generateSuggestions(tech, lang);
    const passed = score >= challenge.minScore;
    setResult({ tech, score, suggestions, passed });
    if (passed) setCompleted(prev => ({ ...prev, [challenge.id]: true }));
  }, [userInput, lang, challenge]);

  const completedCount = Object.keys(completed).length;

  return (
    <div className="ck-content-box">
      <div className="ck-content-header ck-ch--orange">
        <div className="ck-ch-text">
          <h2>{isKo ? '도전 과제' : 'Challenges'}</h2>
          <p>{isKo ? `완료 ${completedCount} / ${CHALLENGES.length}` : `Completed ${completedCount} / ${CHALLENGES.length}`}</p>
        </div>
      </div>
      <div className="ck-content-body">
        <div className="pp-challenge-tabs">
          {CHALLENGES.map((ch, i) => (
            <button
              key={ch.id}
              className={`pp-challenge-tab ${currentIdx === i ? 'active' : ''} ${completed[ch.id] ? 'completed' : ''}`}
              onClick={() => { setCurrentIdx(i); setUserInput(''); setResult(null); setShowHints(false); }}
            >
              {completed[ch.id] ? <span>&#10003;</span> : <span>{i + 1}</span>}
            </button>
          ))}
        </div>

        <h3 className="pp-challenge-title">{isKo ? challenge.titleKo : challenge.titleEn}</h3>
        <p className="ck-text">{isKo ? challenge.descKo : challenge.descEn}</p>

        <div className="pp-prompt-box pp-prompt-box--weak">
          <div className="pp-prompt-label">{isKo ? '개선이 필요한 프롬프트' : 'Prompt that needs improvement'}</div>
          <div className="pp-prompt-text">{isKo ? challenge.weakPromptKo : challenge.weakPromptEn}</div>
        </div>

        <button className="pp-hint-toggle" onClick={() => setShowHints(!showHints)}>
          {showHints ? (isKo ? '힌트 숨기기' : 'Hide Hints') : (isKo ? '힌트 보기' : 'Show Hints')}
        </button>

        {showHints && (
          <div className="pp-hints">
            {(isKo ? challenge.hintsKo : challenge.hintsEn).map((h, i) => (
              <div key={i} className="pp-hint-item">{h}</div>
            ))}
          </div>
        )}

        <textarea
          className="pp-analyzer-input"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          placeholder={isKo ? '개선된 프롬프트를 작성하세요...' : 'Write your improved prompt...'}
          rows={6}
        />
        <button className="pp-analyze-btn" onClick={handleSubmit} disabled={!userInput.trim()}>
          {isKo ? '제출하기' : 'Submit'}
        </button>

        {result && (
          <div className="pp-result-area">
            <div className={`pp-challenge-result ${result.passed ? 'passed' : 'failed'}`}>
              <span>
                {result.passed
                  ? (isKo ? `통과! (${result.score}점)` : `Passed! (${result.score} pts)`)
                  : (isKo ? `미달 (${result.score}점 / ${challenge.minScore}점 필요)` : `Not yet (${result.score} pts / ${challenge.minScore} needed)`)}
              </span>
            </div>
            <div className="pp-techniques">
              <h4>{isKo ? '감지된 기법' : 'Detected Techniques'}</h4>
              <div className="pp-technique-badges">
                {Object.entries(result.tech).map(([key, detected]) => (
                  <span key={key} className={`pp-technique-badge ${detected ? 'active' : ''}`}>
                    {detected ? '+' : '-'} {({ hasRole: isKo ? '역할' : 'Role', hasFewShot: 'Few-shot', hasCoT: 'CoT', hasFormat: isKo ? '형식' : 'Format', hasContext: isKo ? '맥락' : 'Context', hasConstraints: isKo ? '제약' : 'Constraints', hasSpecificity: isKo ? '구체성' : 'Detail' } as Record<string, string>)[key]}
                  </span>
                ))}
              </div>
            </div>
            {result.suggestions.length > 0 && (
              <div className="pp-suggestions">
                <h4>{isKo ? '개선 제안' : 'Suggestions'}</h4>
                <ul>{result.suggestions.map((s, i) => <li key={i}>{s}</li>)}</ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================
   메인 컴포넌트
   ============================================ */
export default function PromptPractice() {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const [activeSection, setActiveSection] = useState('basics');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({ basics: true });

  const activeParent = useMemo(() => {
    for (const m of MENU) {
      if (m.id === activeSection) return m.id;
      if (m.children.some(c => c.id === activeSection)) return m.id;
    }
    return 'basics';
  }, [activeSection]);

  const navigate = useCallback((id: string) => {
    setActiveSection(id);
    for (const m of MENU) {
      if (m.id === id || m.children.some(c => c.id === id)) {
        setOpenGroups(prev => ({ ...prev, [m.id]: true }));
        break;
      }
    }
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleParentClick = useCallback((parentId: string) => {
    const isOpen = openGroups[parentId];
    setOpenGroups(prev => ({ ...prev, [parentId]: !isOpen }));
    if (!isOpen || MENU.find(m => m.id === parentId)?.children.length === 0) {
      setActiveSection(parentId);
      setSidebarOpen(false);
    }
  }, [openGroups]);

  const isGroupSection = MENU.some(g => g.id === activeSection);
  const activeGroup = MENU.find(g => g.id === activeSection);

  const renderContent = useMemo(() => {
    if (isGroupSection && activeGroup) {
      return <OverviewPanel group={activeGroup} onNavigate={navigate} lang={language} />;
    }
    if (activeSection === 'analyzer') {
      return <PromptAnalyzer lang={language} />;
    }
    if (activeSection === 'comparison-quiz') {
      return <ComparisonQuiz lang={language} />;
    }
    if (activeSection === 'challenges') {
      return <ChallengePanel lang={language} />;
    }
    if (CONTENT[activeSection]) {
      return <ContentPanel sectionId={activeSection} lang={language} />;
    }
    return null;
  }, [activeSection, isGroupSection, activeGroup, language, navigate]);

  return (
    <>
      <SEOHead
        title={isKo ? '프롬프트 실습' : 'Prompt Practice'}
        description={isKo ? '발전소 직원을 위한 프롬프트 엔지니어링 실습 가이드' : 'Prompt engineering practice guide for power plant staff'}
        path="/prompt-practice"
      />
      <div className="ck-page">
        <button className="ck-mobile-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <i className={`fa-solid ${sidebarOpen ? 'fa-xmark' : 'fa-bars'}`} />
          <span>{isKo ? '메뉴' : 'Menu'}</span>
        </button>

        <div className="ck-layout">
          {/* Sidebar */}
          <aside className={`ck-sidebar ${sidebarOpen ? 'open' : ''}`}>
            <div className="ck-sb-header">
              <i className="fa-solid fa-terminal" />
              <span>{isKo ? '프롬프트 실습' : 'Prompt Practice'}</span>
            </div>
            <nav className="ck-sb-nav">
              {MENU.map(group => (
                <div key={group.id} className={`ck-nav-group ${activeParent === group.id ? 'active' : ''}`}>
                  <button
                    className={`ck-nav-parent ck-np--${group.color}`}
                    onClick={() => handleParentClick(group.id)}
                  >
                    <i className={`fa-solid ${group.icon} ck-np-icon`} />
                    <span>{isKo ? group.labelKo : group.labelEn}</span>
                    {group.children.length > 0 && (
                      <i className={`fa-solid fa-chevron-down ck-nav-arrow ${openGroups[group.id] ? 'open' : ''}`} />
                    )}
                  </button>
                  {group.children.length > 0 && openGroups[group.id] && (
                    <ul className="ck-nav-children">
                      {group.children.map(child => (
                        <li key={child.id}>
                          <button
                            className={`ck-nav-child ${activeSection === child.id ? 'active' : ''}`}
                            onClick={() => navigate(child.id)}
                          >
                            <i className={`fa-solid ${child.icon} ck-nc-icon`} />
                            <span>{isKo ? child.labelKo : child.labelEn}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
          </aside>

          {/* Main */}
          <main className="ck-main">
            {!isGroupSection && <Breadcrumb activeSection={activeSection} activeParent={activeParent} onNavigate={navigate} lang={language} />}
            {renderContent}
            <NavButtons activeSection={activeSection} onNavigate={navigate} lang={language} />
          </main>
        </div>
      </div>
    </>
  );
}

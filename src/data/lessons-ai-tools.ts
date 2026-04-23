import type { LessonData } from './lessons';

export const LESSONS_AI_TOOLS: LessonData[] = [
  // ── 1. ChatGPT 활용 가이드 ──
  {
    id: 'chatgpt-guide',
    categoryId: 'ai-tools',
    title: 'ChatGPT 활용 가이드',
    titleEn: 'ChatGPT Guide',
    content: `
<h2>ChatGPT 개요</h2>
<p>ChatGPT는 미국의 AI 기업 <strong>OpenAI</strong>가 개발한 대화형 AI 서비스로, 2022년 11월 출시 이후 전 세계적으로 생성형 AI 열풍을 이끌고 있습니다. GPT(Generative Pre-trained Transformer) 아키텍처를 기반으로 하며, 방대한 텍스트 데이터를 학습하여 사람과 자연스러운 대화를 나눌 수 있습니다.</p>

<h3>주요 모델 라인업</h3>
<ul>
  <li><strong>GPT-4o</strong> — OpenAI의 주력 멀티모달 모델. 텍스트, 이미지, 음성을 통합적으로 처리하며, 빠른 응답 속도와 높은 정확도를 자랑합니다.</li>
  <li><strong>GPT-4</strong> — 복잡한 추론과 긴 문맥 처리에 강점을 가진 모델로, 전문적인 분석 작업에 적합합니다.</li>
  <li><strong>o1 / o1-mini</strong> — 추론(Reasoning) 특화 모델. 수학, 코딩, 과학 문제에서 단계별 사고 과정을 거쳐 정확한 답을 도출합니다.</li>
  <li><strong>GPT-4o mini</strong> — 경량화 모델. 일상적인 대화와 간단한 작업에 적합하며, 무료 사용자에게 제공됩니다.</li>
</ul>

<h3>ChatGPT 플랜 비교</h3>
<table>
  <thead>
    <tr><th>구분</th><th>Free</th><th>Plus ($20/월)</th><th>Team ($25/인/월)</th><th>Enterprise</th></tr>
  </thead>
  <tbody>
    <tr><td>모델 접근</td><td>GPT-4o mini</td><td>GPT-4o, o1, o1-mini</td><td>GPT-4o, o1, o1-mini</td><td>전체 모델</td></tr>
    <tr><td>이미지 생성 (DALL-E)</td><td>제한적</td><td>무제한</td><td>무제한</td><td>무제한</td></tr>
    <tr><td>Advanced Data Analysis</td><td>제한적</td><td>지원</td><td>지원</td><td>지원</td></tr>
    <tr><td>웹 브라우징</td><td>지원</td><td>지원</td><td>지원</td><td>지원</td></tr>
    <tr><td>GPTs(커스텀 봇)</td><td>사용만 가능</td><td>생성 + 사용</td><td>팀 전용 GPTs</td><td>사내 전용 GPTs</td></tr>
    <tr><td>파일 업로드</td><td>제한적</td><td>지원</td><td>지원</td><td>지원</td></tr>
    <tr><td>데이터 보안</td><td>학습에 활용 가능</td><td>학습 제외 선택</td><td>학습 제외 기본</td><td>완전 격리</td></tr>
    <tr><td>관리자 콘솔</td><td>없음</td><td>없음</td><td>있음</td><td>있음 (SSO, SCIM)</td></tr>
  </tbody>
</table>

<h3>핵심 기능 상세</h3>

<h4>1. 텍스트 생성 및 편집</h4>
<p>보고서 초안 작성, 이메일 작성, 번역, 요약, 교정 등 거의 모든 텍스트 관련 작업을 수행합니다. 한국어에 대한 이해도가 높아 자연스러운 한국어 문서를 생성할 수 있습니다.</p>

<h4>2. 코드 작성 및 디버깅</h4>
<p>Python, JavaScript, SQL, VBA 등 다양한 프로그래밍 언어의 코드를 작성하고, 기존 코드의 오류를 찾아 수정할 수 있습니다. 특히 Excel VBA 매크로 작성에 유용합니다.</p>

<h4>3. Advanced Data Analysis (구 Code Interpreter)</h4>
<p>CSV, Excel 파일을 직접 업로드하면 Python 코드를 자동으로 작성하여 데이터를 분석하고 시각화합니다. 별도의 프로그래밍 지식 없이도 데이터 분석이 가능합니다.</p>

<h4>4. 이미지 생성 (DALL-E 3 통합)</h4>
<p>텍스트 설명만으로 이미지를 생성합니다. 프레젠테이션 삽화, 개념도, 인포그래픽 등을 빠르게 만들 수 있습니다.</p>

<h4>5. 웹 브라우징</h4>
<p>실시간으로 인터넷을 검색하여 최신 정보를 반영한 답변을 제공합니다. 최신 규정, 뉴스, 기술 동향을 파악하는 데 유용합니다.</p>

<h4>6. GPTs (커스텀 봇)</h4>
<p>특정 업무에 특화된 맞춤형 AI 봇을 코딩 없이 만들 수 있습니다. 발전소 안전 규정 FAQ 봇, 설비 매뉴얼 검색 봇 등을 구축할 수 있습니다.</p>

<div class="info-box">
  <strong>정보:</strong> GPTs는 자연어로 지시문(Instructions)을 작성하고, 참고 문서를 업로드하면 해당 문서에 기반한 전문 봇을 만들 수 있습니다.
</div>

<h3>발전소 업무 실전 활용 예시</h3>

<h4>예시 1: 설비 점검 보고서 초안 작성</h4>
<blockquote>
"당신은 화력발전소 설비 관리 전문가입니다. 아래 점검 데이터를 바탕으로 월간 설비 점검 보고서를 작성해주세요. 형식은 1) 점검 개요, 2) 주요 이상 징후, 3) 조치 사항, 4) 차월 점검 계획으로 구성합니다."
</blockquote>

<h4>예시 2: 운전 데이터 분석</h4>
<p>터빈 진동 데이터(CSV)를 업로드하고 Advanced Data Analysis로 이상 징후를 탐지하고, 추세 그래프를 자동 생성할 수 있습니다.</p>

<h4>예시 3: 안전 교육 자료 제작</h4>
<p>최신 안전 규정을 웹 브라우징으로 검색한 뒤, DALL-E로 안전 가이드 삽화를 생성하여 교육 PPT에 활용할 수 있습니다.</p>

<div class="tip-box">
  <strong>실무 팁:</strong> ChatGPT에 역할(Role)을 부여하고, 구체적인 출력 형식을 지정하면 훨씬 전문적이고 일관된 결과를 얻을 수 있습니다. "발전소 기술 팀장으로서 보고서를 작성하라"는 식으로 지시하면 전문 용어와 격식체가 자연스럽게 반영됩니다.
</div>

<div class="warning-box">
  <strong>주의:</strong> ChatGPT에 사내 기밀 데이터나 개인정보를 입력하기 전에 반드시 사내 AI 사용 정책을 확인하세요. Enterprise 또는 Team 플랜이 아닌 경우 입력 데이터가 모델 학습에 활용될 수 있습니다.
</div>
`,
    estimatedMinutes: 20,
    sortOrder: 1,
    quizzes: [
      {
        question: 'ChatGPT의 추론(Reasoning) 특화 모델은 무엇인가요?',
        options: ['GPT-4o', 'GPT-4o mini', 'o1', 'DALL-E 3'],
        correctIndex: 2,
        explanation: 'o1 모델은 수학, 코딩, 과학 등 복잡한 추론 문제에서 단계별 사고 과정을 거쳐 정확한 답을 도출하는 추론 특화 모델입니다.',
      },
      {
        question: 'ChatGPT Team 플랜에서 사용자 입력 데이터의 기본 학습 정책은?',
        options: [
          '모든 데이터가 학습에 활용됨',
          '학습 제외가 기본 설정',
          '데이터 보안 옵션 없음',
          '관리자가 선택 불가',
        ],
        correctIndex: 1,
        explanation: 'ChatGPT Team 플랜은 기본적으로 사용자 입력 데이터가 모델 학습에 활용되지 않습니다. 기업 환경에서 보안을 고려한 설정입니다.',
      },
    ],
  },

  // ── 2. Claude 활용 가이드 ──
  {
    id: 'claude-guide',
    categoryId: 'ai-tools',
    title: 'Claude 활용 가이드',
    titleEn: 'Claude Guide',
    content: `
<h2>Claude 개요</h2>
<p><strong>Claude</strong>는 미국의 AI 안전 연구 기업 <strong>Anthropic</strong>이 개발한 대화형 AI 어시스턴트입니다. OpenAI의 전 핵심 연구원들이 설립한 Anthropic은 "안전하고 유익한 AI"를 핵심 가치로 삼고 있으며, <strong>Constitutional AI</strong>(헌법적 AI)라는 독자적 안전 기법으로 더 정확하고 책임감 있는 응답을 생성합니다.</p>

<h3>Claude 모델 라인업</h3>
<table>
  <thead>
    <tr><th>모델</th><th>특징</th><th>컨텍스트 윈도우</th><th>적합한 용도</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Claude Haiku</strong></td><td>초고속 경량 모델</td><td>200K 토큰</td><td>실시간 채팅, 빠른 분류, 간단한 질의응답</td></tr>
    <tr><td><strong>Claude Sonnet</strong></td><td>성능-비용 균형형</td><td>200K 토큰</td><td>업무 문서 작성, 코드 생성, 데이터 분석</td></tr>
    <tr><td><strong>Claude Opus</strong></td><td>최고 성능 모델</td><td>200K 토큰</td><td>복잡한 분석, 전문 리서치, 장문 보고서</td></tr>
  </tbody>
</table>

<h3>Claude의 핵심 특장점</h3>

<h4>1. 업계 최장 컨텍스트 윈도우 (200K 토큰)</h4>
<p>Claude는 최대 <strong>200,000 토큰</strong>(약 15만 단어, 한글 기준 약 500페이지 분량)의 문서를 한 번에 읽고 분석할 수 있습니다. 발전소 운영 매뉴얼, 기술 규격서, 법규 문서 등 장문의 기술 문서를 통째로 업로드하여 분석하기에 최적입니다.</p>

<h4>2. 정확하고 정직한 분석</h4>
<p>Constitutional AI 기법으로 학습되어 확실하지 않은 정보에 대해 솔직하게 "모른다"고 답변하는 경향이 강합니다. 이는 할루시네이션(환각) 문제를 줄여 기술 문서나 안전 관련 문서 작업에서 높은 신뢰성을 제공합니다.</p>

<h4>3. 탁월한 코드 분석 및 생성</h4>
<p>프로그래밍 벤치마크에서 일관되게 상위권을 차지하며, 특히 코드 리뷰, 버그 탐지, 리팩토링 제안에서 강점을 보입니다.</p>

<h4>4. 뉘앙스 있는 한국어 처리</h4>
<p>한국어의 높임말, 격식체/비격식체를 구분하여 자연스러운 비즈니스 문서를 생성합니다.</p>

<h3>Claude 주요 기능</h3>

<h4>Artifacts (아티팩트)</h4>
<p>Claude가 생성한 문서, 코드, 차트, 다이어그램 등을 대화창 옆의 독립된 패널에서 미리보기로 확인하고 편집할 수 있는 기능입니다. HTML/CSS/JavaScript 코드를 실시간으로 렌더링하여 결과를 즉시 확인할 수 있습니다.</p>

<h4>Projects (프로젝트)</h4>
<p>관련 대화와 참고 문서를 하나의 프로젝트로 묶어 관리하는 기능입니다. 프로젝트에 업로드한 문서는 해당 프로젝트 내 모든 대화에서 참조할 수 있어, 반복적인 파일 업로드 없이 일관된 맥락에서 작업할 수 있습니다.</p>

<h4>Claude Code</h4>
<p>터미널에서 직접 실행되는 AI 코딩 에이전트로, 코드베이스를 자율적으로 분석하고 수정합니다. 개발자가 아니더라도 자동화 스크립트 작성에 도움을 받을 수 있습니다.</p>

<div class="info-box">
  <strong>정보:</strong> Claude의 Projects 기능을 활용하면 발전소 운영 매뉴얼, 안전 규정, 설비 사양서 등을 프로젝트에 등록해두고 언제든 참조하면서 질의할 수 있습니다.
</div>

<h3>발전소 업무 활용 시나리오</h3>

<h4>시나리오 1: 기술 규격서 비교 분석</h4>
<p>200페이지 분량의 터빈 기술 규격서 2개(기존 사양 vs 신규 사양)를 동시에 업로드하고, "두 규격서의 주요 차이점을 표 형태로 정리해줘"라고 요청하면 핵심 변경사항을 한눈에 파악할 수 있습니다.</p>

<h4>시나리오 2: 안전 보고서 코드 리뷰</h4>
<p>설비 모니터링 시스템의 알람 로직 코드를 업로드하고, 잠재적 버그나 누락된 예외 처리를 검토받을 수 있습니다.</p>

<h4>시나리오 3: 규정 준수 체크리스트 생성</h4>
<p>환경부 배출 규제 문서를 업로드한 뒤, "우리 발전소에 적용되는 항목을 체크리스트로 만들어줘"라고 요청하여 규정 준수 관리 문서를 자동 생성할 수 있습니다.</p>

<div class="tip-box">
  <strong>실무 팁:</strong> 긴 기술 문서를 분석할 때는 Claude에게 먼저 "이 문서의 목차와 핵심 내용을 요약해줘"라고 요청한 뒤, 관심 있는 섹션을 구체적으로 질문하는 단계별 접근이 효과적입니다.
</div>

<h3>Claude 플랜 구성</h3>
<ul>
  <li><strong>Free</strong> — Sonnet 모델 제한적 사용, 일일 메시지 제한</li>
  <li><strong>Pro ($20/월)</strong> — Opus 포함 전 모델 접근, Projects, 높은 사용량</li>
  <li><strong>Team ($25/인/월)</strong> — 팀 관리, 공유 Projects, 관리자 콘솔</li>
  <li><strong>Enterprise</strong> — SSO, SCIM, 감사 로그, SLA 보장</li>
</ul>

<div class="warning-box">
  <strong>주의:</strong> Claude Free 플랜에서는 일일 메시지 수가 제한되어 있으므로, 업무에 본격적으로 활용하려면 Pro 이상의 플랜을 권장합니다.
</div>
`,
    estimatedMinutes: 20,
    sortOrder: 2,
    quizzes: [
      {
        question: 'Claude가 한 번에 처리할 수 있는 최대 컨텍스트 윈도우 크기는?',
        options: ['8K 토큰', '32K 토큰', '128K 토큰', '200K 토큰'],
        correctIndex: 3,
        explanation: 'Claude는 최대 200,000(200K) 토큰의 컨텍스트 윈도우를 지원하여, 약 500페이지 분량의 문서를 한 번에 읽고 분석할 수 있습니다.',
      },
      {
        question: 'Claude의 안전성 기반 기술인 Constitutional AI의 핵심 특징은?',
        options: [
          '가장 빠른 응답 속도 제공',
          '확실하지 않은 정보에 솔직하게 답변',
          '이미지 생성에 특화',
          '오프라인에서만 작동',
        ],
        correctIndex: 1,
        explanation: 'Constitutional AI는 AI가 확실하지 않은 정보에 대해 솔직하게 "모른다"고 답변하도록 하여 할루시네이션을 줄이고 신뢰성을 높이는 기법입니다.',
      },
    ],
  },

  // ── 3. Gemini 활용 가이드 ──
  {
    id: 'gemini-guide',
    categoryId: 'ai-tools',
    title: 'Gemini 활용 가이드',
    titleEn: 'Gemini Guide',
    content: `
<h2>Gemini 개요</h2>
<p><strong>Gemini</strong>는 <strong>Google DeepMind</strong>가 개발한 멀티모달 AI 모델로, 텍스트, 이미지, 오디오, 비디오, 코드를 통합적으로 이해하고 생성할 수 있습니다. Google 검색, Gmail, Google Docs, Sheets, Slides 등 Google 생태계와 긴밀하게 통합되어 있다는 것이 최대 강점입니다.</p>

<h3>Gemini 모델 라인업</h3>
<table>
  <thead>
    <tr><th>모델</th><th>특징</th><th>컨텍스트</th><th>적합한 용도</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Gemini Nano</strong></td><td>온디바이스 경량 모델</td><td>32K</td><td>스마트폰 내 AI 기능, 오프라인 처리</td></tr>
    <tr><td><strong>Gemini Pro</strong></td><td>범용 고성능 모델</td><td>1M 토큰</td><td>일반 업무, 문서 분석, 코드 작성</td></tr>
    <tr><td><strong>Gemini Ultra</strong></td><td>최고 성능 모델</td><td>1M 토큰</td><td>복잡한 추론, 대규모 데이터 분석, 전문 연구</td></tr>
  </tbody>
</table>

<div class="info-box">
  <strong>정보:</strong> Gemini Pro/Ultra는 최대 <strong>100만(1M) 토큰</strong>의 컨텍스트 윈도우를 지원합니다. 이는 약 700페이지 이상의 문서를 한 번에 처리할 수 있는 규모로, 현존 최대 수준입니다.
</div>

<h3>Google Workspace 통합</h3>
<p>Gemini의 가장 큰 차별점은 이미 많은 기업과 기관에서 사용 중인 Google Workspace에 자연스럽게 통합된다는 점입니다.</p>

<h4>Gmail에서의 활용</h4>
<ul>
  <li>긴 이메일 스레드를 한 줄로 요약</li>
  <li>상황에 맞는 답장 초안 자동 생성</li>
  <li>이메일 톤 조절 (격식체/비격식체)</li>
</ul>

<h4>Google Docs에서의 활용</h4>
<ul>
  <li>"Help me write" 기능으로 문서 초안 작성</li>
  <li>기존 문서 요약, 확장, 톤 변경</li>
  <li>브레인스토밍 및 아이디어 정리</li>
</ul>

<h4>Google Sheets에서의 활용</h4>
<ul>
  <li>자연어로 복잡한 함수/수식 생성</li>
  <li>데이터 패턴 분석 및 인사이트 도출</li>
  <li>피봇 테이블 자동 생성</li>
</ul>

<h4>Google Slides에서의 활용</h4>
<ul>
  <li>주제만 입력하면 프레젠테이션 초안 자동 생성</li>
  <li>슬라이드별 핵심 메시지 제안</li>
  <li>발표자 노트 자동 작성</li>
</ul>

<h3>멀티모달 기능의 실제 활용</h3>
<p>Gemini는 태생적으로 멀티모달 처리를 위해 설계되어, 텍스트뿐 아니라 이미지, 동영상, 오디오를 동시에 이해합니다.</p>
<ul>
  <li><strong>이미지 분석</strong>: 설비 사진을 촬영하여 "이 부품의 마모 상태를 분석해줘"라고 질문</li>
  <li><strong>동영상 이해</strong>: 교육 동영상을 업로드하고 핵심 내용 요약 요청</li>
  <li><strong>오디오 처리</strong>: 회의 녹음 파일을 업로드하여 회의록 자동 생성</li>
</ul>

<h3>NotebookLM — AI 리서치 도구</h3>
<p><strong>NotebookLM</strong>은 Google이 제공하는 AI 기반 리서치/학습 도구입니다. 여러 문서(PDF, 텍스트, 웹페이지, 유튜브 영상)를 업로드하면 해당 자료만을 기반으로 답변을 생성하므로 할루시네이션이 거의 없습니다.</p>
<ul>
  <li>업로드한 자료 기반 Q&A</li>
  <li>자동 요약 및 핵심 주제 추출</li>
  <li><strong>Audio Overview</strong>: 업로드 문서를 기반으로 팟캐스트 스타일 오디오 요약을 자동 생성</li>
  <li>출처가 명확하여 기술 문서 분석에 매우 유용</li>
</ul>

<div class="tip-box">
  <strong>실무 팁:</strong> NotebookLM에 발전소 운영 매뉴얼, 안전 규정, 정비 이력 데이터를 함께 업로드하면, 해당 자료들만 참조하는 사내 전용 AI 지식 베이스를 구축할 수 있습니다. 무료로 사용 가능하며 할루시네이션 위험이 매우 낮습니다.
</div>

<h3>Google AI 서비스 비교</h3>
<table>
  <thead>
    <tr><th>서비스</th><th>주요 용도</th><th>통합 환경</th><th>비용</th></tr>
  </thead>
  <tbody>
    <tr><td>Gemini (gemini.google.com)</td><td>범용 대화형 AI</td><td>독립 웹앱</td><td>무료 / Advanced $19.99/월</td></tr>
    <tr><td>Gemini for Workspace</td><td>업무 생산성 향상</td><td>Gmail, Docs, Sheets, Slides</td><td>Workspace 추가 요금</td></tr>
    <tr><td>NotebookLM</td><td>문서 기반 리서치</td><td>독립 웹앱</td><td>무료</td></tr>
    <tr><td>Google AI Studio</td><td>개발자용 AI 실험</td><td>웹 IDE</td><td>무료 (API 종량제)</td></tr>
    <tr><td>Vertex AI</td><td>기업용 AI 플랫폼</td><td>Google Cloud</td><td>종량제</td></tr>
  </tbody>
</table>

<h3>발전소 업무 활용 예시</h3>
<ul>
  <li><strong>Google Sheets + Gemini</strong>: 월간 발전량 데이터를 Sheets에 정리하고, Gemini로 추세 분석 및 이상 패턴 탐지</li>
  <li><strong>NotebookLM</strong>: 설비 제조사의 기술 매뉴얼을 업로드하고, 정비 절차에 대한 Q&A를 수행</li>
  <li><strong>Google Docs + Gemini</strong>: 점검 보고서 초안을 자동 생성하고, 형식과 내용을 빠르게 보완</li>
</ul>

<div class="warning-box">
  <strong>주의:</strong> Gemini for Workspace는 조직의 Google Workspace 관리자가 기능을 활성화해야 사용할 수 있습니다. 개인 Gmail 계정에서는 일부 기능이 제한될 수 있습니다.
</div>
`,
    estimatedMinutes: 20,
    sortOrder: 3,
    quizzes: [
      {
        question: 'Google의 AI 리서치 도구로, 업로드한 문서만 기반으로 답변하여 할루시네이션이 거의 없는 서비스는?',
        options: ['Google Bard', 'NotebookLM', 'Google AI Studio', 'Vertex AI'],
        correctIndex: 1,
        explanation: 'NotebookLM은 사용자가 업로드한 문서만을 기반으로 답변을 생성하므로, 할루시네이션 위험이 매우 낮은 AI 리서치 도구입니다.',
      },
      {
        question: 'Gemini Pro/Ultra 모델이 지원하는 최대 컨텍스트 윈도우 크기는?',
        options: ['32K 토큰', '128K 토큰', '200K 토큰', '1M(100만) 토큰'],
        correctIndex: 3,
        explanation: 'Gemini Pro/Ultra는 최대 100만(1M) 토큰의 컨텍스트 윈도우를 지원하여 현존 최대 수준의 문서를 한 번에 처리할 수 있습니다.',
      },
    ],
  },

  // ── 4. Copilot 활용 가이드 ──
  {
    id: 'copilot-guide',
    categoryId: 'ai-tools',
    title: 'Copilot 활용 가이드',
    titleEn: 'Copilot Guide',
    content: `
<h2>Microsoft Copilot 개요</h2>
<p><strong>Microsoft Copilot</strong>은 Microsoft가 OpenAI의 GPT 기술을 기반으로 구축한 AI 어시스턴트입니다. 가장 큰 차별점은 <strong>Microsoft 365(Office) 제품군</strong>에 직접 통합되어 있다는 것입니다. 이미 Word, Excel, PowerPoint, Outlook을 사용하고 있는 기업에게는 별도의 AI 도구를 배울 필요 없이 기존 워크플로우 안에서 바로 AI를 활용할 수 있습니다.</p>

<h3>Copilot 제품 라인업</h3>
<ul>
  <li><strong>Copilot (무료)</strong> — Bing 통합 검색, 기본 대화, 이미지 생성</li>
  <li><strong>Copilot Pro ($20/월)</strong> — 개인용 Office 앱 통합, 우선 접근, GPT-4 Turbo</li>
  <li><strong>Microsoft 365 Copilot ($30/인/월)</strong> — 기업용 Office 전체 통합, Teams, 보안 관리</li>
  <li><strong>Copilot Studio</strong> — 기업 맞춤형 Copilot 봇 빌더</li>
</ul>

<h3>Office 365 통합 상세</h3>

<h4>Word에서의 Copilot</h4>
<ul>
  <li>"이 주제로 3페이지 보고서를 작성해줘" — 초안 자동 생성</li>
  <li>기존 문서의 요약, 확장, 톤 변경</li>
  <li>참조 문서를 지정하면 해당 문서 스타일로 작성</li>
  <li>표, 목록, 제목 구조 자동 생성</li>
</ul>

<h4>Excel에서의 Copilot</h4>
<ul>
  <li>자연어로 수식/함수 생성: "매출 상위 10개 항목을 추출해줘"</li>
  <li>데이터 패턴 분석 및 인사이트 도출</li>
  <li>피봇 테이블, 차트 자동 생성</li>
  <li>조건부 서식 자동 적용</li>
  <li>이상값(outlier) 자동 감지</li>
</ul>

<h4>PowerPoint에서의 Copilot</h4>
<ul>
  <li>Word 문서나 주제를 기반으로 프레젠테이션 자동 생성</li>
  <li>발표자 노트 자동 작성</li>
  <li>슬라이드 디자인 제안 및 레이아웃 조정</li>
  <li>기존 PPT를 요약하여 경영진 보고용으로 축약</li>
</ul>

<h4>Outlook에서의 Copilot</h4>
<ul>
  <li>긴 이메일 스레드 요약 ("이 스레드에서 결정된 사항은?")</li>
  <li>상황에 맞는 답장 초안 자동 생성</li>
  <li>미팅 일정 조율 자동화</li>
  <li>팔로업 이메일 리마인더</li>
</ul>

<h4>Teams에서의 Copilot</h4>
<ul>
  <li>실시간 회의 내용 요약 및 Action Items 추출</li>
  <li>"이 회의에서 나에 대한 언급이 있었나?" — 핵심 내용 필터링</li>
  <li>회의 녹화 영상에서 특정 주제 검색</li>
  <li>채팅 대화 요약</li>
</ul>

<h3>Copilot 활용 영역 비교</h3>
<table>
  <thead>
    <tr><th>Office 앱</th><th>주요 AI 기능</th><th>발전소 활용 예시</th></tr>
  </thead>
  <tbody>
    <tr><td>Word</td><td>문서 초안, 요약, 편집</td><td>설비 점검 보고서 초안 자동 작성</td></tr>
    <tr><td>Excel</td><td>데이터 분석, 수식 생성, 차트</td><td>발전량 데이터 추세 분석 및 이상 패턴 감지</td></tr>
    <tr><td>PowerPoint</td><td>PPT 자동 생성, 디자인</td><td>월간 운영 보고 프레젠테이션 자동 제작</td></tr>
    <tr><td>Outlook</td><td>이메일 요약, 답장 초안</td><td>설비 업체 커뮤니케이션 효율화</td></tr>
    <tr><td>Teams</td><td>회의 요약, Action Items</td><td>정비 회의 내용 자동 정리 및 작업 할당</td></tr>
  </tbody>
</table>

<h3>GitHub Copilot — 개발자를 위한 AI</h3>
<p><strong>GitHub Copilot</strong>은 코드 작성에 특화된 AI 어시스턴트입니다. Visual Studio Code 등 IDE(통합 개발 환경)에 플러그인으로 설치하면, 코드를 작성하는 동안 실시간으로 자동 완성 제안을 제공합니다.</p>
<ul>
  <li>코드 자동 완성 및 전체 함수 생성</li>
  <li>주석을 기반으로 코드 자동 작성</li>
  <li>테스트 코드 자동 생성</li>
  <li>코드 설명 및 문서화</li>
</ul>

<div class="info-box">
  <strong>정보:</strong> 발전소의 SCADA 시스템 데이터를 Excel로 내보낸 뒤, Copilot으로 "지난 6개월간 터빈 온도 추세를 분석하고 이상 징후를 표시해줘"라고 요청하면 자동으로 차트와 분석 결과를 생성합니다.
</div>

<h3>Copilot Studio</h3>
<p>Copilot Studio는 기업이 자체적인 맞춤형 AI 봇을 코드 없이 구축할 수 있는 플랫폼입니다.</p>
<ul>
  <li>사내 문서를 기반으로 한 FAQ 봇 구축</li>
  <li>Power Automate와 연동한 워크플로우 자동화</li>
  <li>SharePoint, Dynamics 365 등 Microsoft 생태계 전체와 연결</li>
</ul>

<div class="tip-box">
  <strong>실무 팁:</strong> 이미 Microsoft 365를 사용 중인 조직이라면, Copilot은 가장 학습 비용이 낮은 AI 도구입니다. 별도의 외부 사이트에 접속할 필요 없이 현재 사용 중인 Word, Excel, PPT 안에서 바로 AI를 활용할 수 있습니다.
</div>

<div class="warning-box">
  <strong>주의:</strong> Microsoft 365 Copilot은 조직의 Microsoft 365 라이선스와 별도로 추가 구독이 필요하며, 관리자의 설정이 필요합니다. 도입 전 IT 부서와 협의하세요.
</div>
`,
    estimatedMinutes: 22,
    sortOrder: 4,
    quizzes: [
      {
        question: 'Microsoft 365 Copilot에서 Excel의 AI 기능이 아닌 것은?',
        options: [
          '자연어로 수식 생성',
          '피봇 테이블 자동 생성',
          '3D 모델링',
          '이상값 자동 감지',
        ],
        correctIndex: 2,
        explanation: '3D 모델링은 Excel Copilot의 기능이 아닙니다. Excel Copilot은 수식 생성, 데이터 분석, 차트/피봇 테이블 생성, 이상값 감지 등을 지원합니다.',
      },
      {
        question: 'Copilot Studio의 주요 용도는?',
        options: [
          '이미지 생성',
          '기업 맞춤형 AI 봇 구축',
          '코드 자동 완성',
          '동영상 편집',
        ],
        correctIndex: 1,
        explanation: 'Copilot Studio는 기업이 사내 문서를 기반으로 맞춤형 AI 봇을 코드 없이 구축할 수 있는 플랫폼입니다.',
      },
    ],
  },

  // ── 5. Perplexity AI 활용법 ──
  {
    id: 'perplexity-guide',
    categoryId: 'ai-tools',
    title: 'Perplexity AI 활용법',
    titleEn: 'Perplexity AI Guide',
    content: `
<h2>Perplexity AI 개요</h2>
<p><strong>Perplexity AI</strong>는 "AI 시대의 검색 엔진"을 표방하는 혁신적인 서비스입니다. 기존 검색 엔진(Google, Naver)이 관련 웹페이지 목록을 보여주는 것과 달리, Perplexity는 질문에 대한 <strong>직접적인 답변</strong>을 실시간 웹 검색 결과를 종합하여 제공하며, 모든 정보에 <strong>출처(Source)</strong>를 명시합니다.</p>

<h3>핵심 기능 상세</h3>

<h4>1. 출처 기반 답변 (Source-cited Answers)</h4>
<p>Perplexity의 모든 답변에는 참조한 웹페이지의 링크가 번호로 표시됩니다. 사용자는 각 정보의 출처를 즉시 확인하고 원문을 검증할 수 있어, AI 답변의 신뢰성을 크게 높입니다.</p>
<blockquote>예: "한국중부발전 바이오매스 혼소 비율은 약 5%입니다.[1][2]" — [1], [2]를 클릭하면 원본 문서로 이동</blockquote>

<h4>2. Focus 모드 (검색 범위 지정)</h4>
<ul>
  <li><strong>All</strong> — 전체 웹 검색 (기본)</li>
  <li><strong>Academic</strong> — 학술 논문/연구 자료만 검색</li>
  <li><strong>Writing</strong> — 웹 검색 없이 순수 AI 작문</li>
  <li><strong>Math</strong> — 수학 문제 풀이 특화</li>
  <li><strong>Video</strong> — 유튜브 등 동영상 콘텐츠 검색</li>
  <li><strong>Social</strong> — Reddit, 포럼 등 소셜 미디어 검색</li>
</ul>

<h4>3. Collections (컬렉션)</h4>
<p>관련 검색들을 주제별로 묶어 관리하는 기능입니다. "보일러 정비", "환경 규제 동향" 등 주제별 리서치 폴더를 만들어 체계적으로 정보를 축적할 수 있습니다.</p>

<h4>4. Pro Search (심층 검색)</h4>
<p>단순 검색을 넘어서, 여러 단계의 후속 검색을 자동으로 수행하여 심층적이고 종합적인 리서치 보고서를 생성합니다. 복잡한 기술적 질문이나 비교 분석에 매우 유용합니다.</p>

<h3>기존 검색 vs AI 검색 비교</h3>
<table>
  <thead>
    <tr><th>비교 항목</th><th>기존 검색 (Google/Naver)</th><th>AI 검색 (Perplexity)</th></tr>
  </thead>
  <tbody>
    <tr><td>검색 결과 형태</td><td>웹페이지 링크 목록</td><td>직접적인 답변 + 출처</td></tr>
    <tr><td>정보 종합</td><td>사용자가 여러 페이지를 직접 방문</td><td>AI가 자동으로 여러 소스 종합</td></tr>
    <tr><td>후속 질문</td><td>새로운 검색어 입력 필요</td><td>대화형으로 연속 질문 가능</td></tr>
    <tr><td>출처 확인</td><td>직접 페이지 방문하여 확인</td><td>답변 내 출처 번호로 즉시 확인</td></tr>
    <tr><td>비교 분석</td><td>여러 페이지를 수동으로 비교</td><td>AI가 자동으로 비교표 생성</td></tr>
    <tr><td>최신 정보</td><td>검색 인덱싱에 의존</td><td>실시간 웹 검색 반영</td></tr>
    <tr><td>학습 곡선</td><td>검색어 작성 스킬 필요</td><td>자연어 질문으로 바로 사용</td></tr>
  </tbody>
</table>

<h3>리서치 작업 활용법</h3>

<h4>활용 1: 기술 동향 조사</h4>
<p>"2025~2026년 수소혼소 가스터빈 기술 동향"을 Pro Search로 검색하면, 여러 출처의 정보를 종합한 상세 보고서를 자동 생성합니다. 각 정보의 출처가 명시되어 보고서에 바로 인용할 수 있습니다.</p>

<h4>활용 2: 규제/정책 변경 사항 파악</h4>
<p>Academic Focus 모드로 "탄소중립 2050 발전부문 로드맵 최신 현황"을 검색하면, 정부 공식 문서와 학술 자료를 우선적으로 참조한 답변을 받을 수 있습니다.</p>

<h4>활용 3: 경쟁사/벤치마킹 분석</h4>
<p>"국내 발전사 AI 도입 사례 비교"를 검색하면 한국전력, 한국남부발전 등의 AI 도입 현황을 비교 정리한 결과를 얻을 수 있습니다.</p>

<h4>활용 4: 설비 문제 해결</h4>
<p>"GE 9HA 가스터빈 진동 이상 원인 및 대처법"과 같은 구체적인 기술 질문에 대해 제조사 매뉴얼, 기술 포럼, 학술 논문 등을 종합한 답변을 받을 수 있습니다.</p>

<div class="tip-box">
  <strong>실무 팁:</strong> Perplexity의 Collections 기능을 활용하여 "보일러 기술", "터빈 정비", "환경 규제", "안전 관리" 등 주제별 리서치 폴더를 만들어두면, 시간이 지나면서 체계적인 기술 지식 베이스가 축적됩니다.
</div>

<h3>Perplexity 플랜 구성</h3>
<ul>
  <li><strong>Free</strong> — 기본 검색 무제한, Pro Search 하루 5회</li>
  <li><strong>Pro ($20/월)</strong> — Pro Search 무제한, 파일 업로드 분석, GPT-4/Claude 모델 선택 가능</li>
  <li><strong>Enterprise</strong> — SSO, 감사 로그, 데이터 격리, 팀 관리</li>
</ul>

<div class="warning-box">
  <strong>주의:</strong> Perplexity는 실시간 웹 검색에 기반하므로, 검색 시점에 따라 결과가 달라질 수 있습니다. 중요한 기술 정보는 반드시 원본 출처를 확인하세요. 또한 사내 기밀 정보를 검색 쿼리에 포함하지 않도록 주의합니다.
</div>
`,
    estimatedMinutes: 18,
    sortOrder: 5,
    quizzes: [
      {
        question: 'Perplexity AI에서 학술 논문과 연구 자료만 검색하는 모드는?',
        options: ['All', 'Writing', 'Academic', 'Social'],
        correctIndex: 2,
        explanation: 'Academic Focus 모드는 학술 논문, 연구 자료, 공식 문서 등 학술적 소스만을 대상으로 검색하여 전문적인 리서치에 적합합니다.',
      },
      {
        question: 'Perplexity AI가 기존 검색 엔진과 가장 크게 다른 점은?',
        options: [
          '광고가 많음',
          '직접적인 답변과 출처를 함께 제공',
          '이미지 검색만 가능',
          '오프라인에서만 작동',
        ],
        correctIndex: 1,
        explanation: 'Perplexity AI는 웹페이지 목록 대신 직접적인 답변을 생성하며, 각 정보에 출처(Source)를 번호로 명시하여 검증이 가능합니다.',
      },
    ],
  },

  // ── 6. 이미지 생성 AI 활용 ──
  {
    id: 'image-ai',
    categoryId: 'ai-tools',
    title: '이미지 생성 AI 활용',
    titleEn: 'Image Generation AI',
    content: `
<h2>이미지 생성 AI 개요</h2>
<p>이미지 생성 AI는 텍스트 설명(프롬프트)만으로 고품질의 이미지를 자동으로 생성하는 기술입니다. 디자이너가 아닌 일반 업무자도 프레젠테이션 삽화, 보고서 일러스트, 교육 자료 이미지 등을 빠르게 만들 수 있게 되었습니다.</p>

<h3>이미지 생성 AI의 핵심 원리 — Diffusion 모델</h3>
<p>현재 대부분의 이미지 생성 AI는 <strong>Diffusion(확산) 모델</strong>을 기반으로 합니다. 이 모델은 이미지에 점진적으로 노이즈(잡음)를 추가한 뒤, 그 역과정을 학습하여 노이즈로부터 깨끗한 이미지를 복원하는 방식으로 작동합니다.</p>
<ol>
  <li><strong>순방향 과정 (Forward)</strong>: 원본 이미지에 단계적으로 노이즈를 추가하여 완전한 잡음 상태로 만듦</li>
  <li><strong>역방향 과정 (Reverse)</strong>: 잡음 상태에서 단계적으로 노이즈를 제거하여 이미지를 복원</li>
  <li><strong>텍스트 조건 (Text Conditioning)</strong>: 사용자가 입력한 프롬프트를 조건으로 하여 해당 내용에 맞는 이미지를 생성</li>
</ol>

<div class="info-box">
  <strong>정보:</strong> 쉽게 말하면, 이미지 생성 AI는 "깨끗한 이미지 → 잡음"이 되는 과정을 학습한 뒤, 그 과정을 역으로 수행하여 "잡음 → 깨끗한 이미지"를 만들어내는 것입니다. 여기에 텍스트 프롬프트가 "어떤 이미지를 만들 것인지"의 가이드 역할을 합니다.
</div>

<h3>주요 이미지 생성 AI 비교</h3>
<table>
  <thead>
    <tr><th>서비스</th><th>개발사</th><th>특장점</th><th>접근 방법</th><th>비용</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>DALL-E 3</strong></td><td>OpenAI</td><td>자연어 이해력 최고, ChatGPT 통합</td><td>ChatGPT 내 직접 사용</td><td>ChatGPT 구독 포함</td></tr>
    <tr><td><strong>Midjourney</strong></td><td>Midjourney Inc.</td><td>예술적 품질 최고, 심미적 이미지</td><td>Discord / 웹 앱</td><td>$10~$60/월</td></tr>
    <tr><td><strong>Stable Diffusion</strong></td><td>Stability AI</td><td>오픈소스, 로컬 실행, 완전한 커스텀</td><td>로컬 설치 / 웹 서비스</td><td>무료 (로컬) / 유료 (API)</td></tr>
    <tr><td><strong>Ideogram</strong></td><td>Ideogram AI</td><td>텍스트 렌더링 최고, 로고/배너</td><td>웹 앱</td><td>무료 / $7~$16/월</td></tr>
    <tr><td><strong>Imagen 3</strong></td><td>Google</td><td>사실적 표현, Gemini 통합</td><td>Gemini / Vertex AI</td><td>Gemini 구독 포함</td></tr>
    <tr><td><strong>Flux</strong></td><td>Black Forest Labs</td><td>빠른 생성, 높은 충실도</td><td>API / 웹 서비스</td><td>무료 / 유료</td></tr>
  </tbody>
</table>

<h3>효과적인 이미지 프롬프트 작성법</h3>
<p>이미지 생성 AI에서 좋은 결과를 얻으려면 <strong>구체적이고 체계적인 프롬프트</strong>를 작성하는 것이 핵심입니다.</p>

<h4>프롬프트 구성 공식</h4>
<pre><code>[주제/대상] + [상세 설명] + [스타일/분위기] + [기술적 설정]</code></pre>

<h4>좋은 프롬프트 vs 나쁜 프롬프트</h4>
<ul>
  <li><strong>나쁜 예</strong>: "발전소 그려줘" → 모호하고 비구체적</li>
  <li><strong>좋은 예</strong>: "현대적인 복합화력발전소의 외관, 푸른 하늘 배경, 높은 굴뚝에서 수증기가 나오는 장면, 깔끔한 기업 홍보 스타일, 사실적인 3D 렌더링, 고해상도" → 주제, 상세, 스타일, 기술 설정 모두 포함</li>
</ul>

<h4>프롬프트 핵심 키워드</h4>
<ul>
  <li><strong>스타일</strong>: photorealistic (사실적), illustration (일러스트), infographic (인포그래픽), flat design (플랫 디자인), watercolor (수채화), isometric (아이소메트릭)</li>
  <li><strong>분위기</strong>: professional (전문적), warm (따뜻한), clean (깔끔한), dramatic (극적인), corporate (기업적인)</li>
  <li><strong>품질</strong>: high resolution, detailed, 4K, sharp focus, studio lighting</li>
  <li><strong>구도</strong>: wide angle (광각), close-up (클로즈업), aerial view (조감도), bird's eye view (부감)</li>
</ul>

<h3>발전소 업무 활용 예시</h3>

<h4>1. 프레젠테이션 삽화</h4>
<p>월간 운영 보고 PPT에 들어갈 개념도, 프로세스 다이어그램, 미래 비전 이미지 등을 빠르게 생성할 수 있습니다.</p>
<blockquote>
프롬프트 예: "에너지 전환을 상징하는 인포그래픽, 화석연료에서 재생에너지로의 전환 과정, 풍력/태양광/수소 아이콘 포함, 깔끔한 플랫 디자인 스타일, 기업 보고서용, 파란색 톤"
</blockquote>

<h4>2. 안전 교육 가이드 일러스트</h4>
<p>안전 교육 자료에 필요한 삽화를 직접 생성할 수 있습니다. 안전모 착용, 고소 작업 안전, 화학물질 취급 등의 상황별 일러스트를 맞춤 제작합니다.</p>
<blockquote>
프롬프트 예: "산업 현장에서 안전모와 안전복을 착용한 작업자가 설비를 점검하는 모습, 안전 교육 포스터 스타일, 밝고 선명한 색감, 심플한 일러스트레이션"
</blockquote>

<h4>3. 사내 홍보 콘텐츠</h4>
<p>사내 뉴스레터, 행사 포스터, SNS 콘텐츠에 필요한 이미지를 저작권 걱정 없이 생성할 수 있습니다.</p>

<h4>4. 교육 자료 시각화</h4>
<p>복잡한 기술 개념(가스터빈 작동 원리, 열역학 사이클 등)을 쉽게 이해할 수 있는 시각 자료로 변환합니다.</p>

<div class="tip-box">
  <strong>실무 팁:</strong> 이미지 생성 시 원하는 결과가 나오지 않으면, 프롬프트를 점진적으로 수정하면서 결과를 개선합니다. 한 번에 완벽한 결과를 기대하기보다 3~5회 반복하여 최적의 이미지를 찾는 것이 효과적입니다. 또한, 부정 프롬프트(Negative Prompt)를 활용하면 원하지 않는 요소를 제거할 수 있습니다.
</div>

<h3>이미지 생성 AI 사용 시 유의사항</h3>
<ul>
  <li><strong>저작권</strong>: AI 생성 이미지의 저작권은 서비스마다 정책이 다릅니다. 상업적 사용 전 반드시 이용약관을 확인하세요.</li>
  <li><strong>정확도</strong>: AI 이미지는 세부 사항(손가락 수, 텍스트 렌더링 등)에서 오류가 있을 수 있으므로, 기술 도면이나 정밀 설계도 용도로는 적합하지 않습니다.</li>
  <li><strong>초상권</strong>: 실존 인물과 유사한 이미지를 생성하는 것은 법적 문제가 될 수 있으므로 주의합니다.</li>
  <li><strong>텍스트</strong>: 대부분의 이미지 AI는 이미지 내 텍스트를 정확하게 생성하는 데 약합니다. Ideogram이 텍스트 렌더링에 가장 강점을 보입니다.</li>
</ul>

<div class="warning-box">
  <strong>주의:</strong> AI 생성 이미지를 공식 문서나 대외 홍보에 사용할 때는 "AI 생성 이미지"임을 표기하는 것을 권장합니다. 또한 특정 브랜드 로고나 상표와 유사한 이미지 생성은 상표권 침해의 소지가 있으므로 주의하세요.
</div>
`,
    estimatedMinutes: 22,
    sortOrder: 6,
    quizzes: [
      {
        question: '이미지 내 텍스트 렌더링(글자 삽입)에 가장 강점을 보이는 이미지 생성 AI는?',
        options: ['DALL-E 3', 'Midjourney', 'Stable Diffusion', 'Ideogram'],
        correctIndex: 3,
        explanation: 'Ideogram은 이미지 내에 텍스트를 정확하게 렌더링하는 능력이 가장 뛰어나, 로고, 배너, 포스터 등 텍스트가 포함된 이미지 제작에 적합합니다.',
      },
      {
        question: '현재 대부분의 이미지 생성 AI가 기반으로 하는 핵심 기술은?',
        options: [
          'GAN(생성적 적대 신경망)',
          'Diffusion(확산) 모델',
          'RNN(순환 신경망)',
          'CNN(합성곱 신경망)',
        ],
        correctIndex: 1,
        explanation: '현재 DALL-E 3, Midjourney, Stable Diffusion 등 대부분의 이미지 생성 AI는 Diffusion(확산) 모델을 기반으로 하여, 노이즈에서 이미지를 복원하는 방식으로 작동합니다.',
      },
    ],
  },
];

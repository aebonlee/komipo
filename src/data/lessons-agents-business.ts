import type { LessonData } from './lessons';

// ────────────────────────────────────────────
//  AI 에이전트 (categoryId: 'ai-agents') — 4 lessons
// ────────────────────────────────────────────

export const LESSONS_AGENTS: LessonData[] = [
  // ── 1. AI 에이전트란? ──
  {
    id: 'agent-concept',
    categoryId: 'ai-agents',
    title: 'AI 에이전트란?',
    titleEn: 'What are AI Agents?',
    estimatedMinutes: 18,
    sortOrder: 1,
    content: `
<h2>AI 에이전트의 정의</h2>
<p>AI 에이전트(AI Agent)란, 사용자로부터 <strong>목표(Goal)</strong>를 부여받으면 스스로 계획을 세우고, 외부 도구를 활용하며, 중간 결과를 평가해 최종 목표를 달성하는 <strong>자율적 AI 시스템</strong>입니다. 단순히 질문에 답변하는 챗봇과 달리, 에이전트는 복잡한 과업을 여러 단계로 분해하고 각 단계를 순차적 또는 병렬로 수행합니다.</p>

<div class="info-box">
<strong>핵심 포인트:</strong> 챗봇은 "묻고 답하기"이지만, AI 에이전트는 "목표를 주면 스스로 해결하기"입니다. 발전소 현장에서 비유하자면, 챗봇은 "매뉴얼 검색기"이고 에이전트는 "경험 많은 엔지니어 보조원"입니다.
</div>

<h3>챗봇 vs AI 에이전트 비교</h3>
<table>
<thead>
<tr><th>구분</th><th>챗봇 (Chatbot)</th><th>AI 에이전트 (Agent)</th></tr>
</thead>
<tbody>
<tr><td>작동 방식</td><td>사용자 질문 → 답변</td><td>목표 부여 → 자율 수행</td></tr>
<tr><td>도구 사용</td><td>없음 또는 제한적</td><td>API, DB, 파일 시스템 등 다양한 도구 활용</td></tr>
<tr><td>다단계 작업</td><td>단일 턴 응답</td><td>여러 단계를 계획·실행·검증</td></tr>
<tr><td>자기 반성</td><td>없음</td><td>중간 결과 평가 후 전략 수정</td></tr>
<tr><td>메모리</td><td>대화 세션 내 기억</td><td>장기 메모리 저장 및 참조</td></tr>
<tr><td>활용 예시</td><td>FAQ 챗봇, 고객 상담</td><td>코드 자동 생성, 리서치 보고서, 업무 자동화</td></tr>
</tbody>
</table>

<h3>AI 에이전트의 4가지 핵심 구성요소</h3>
<ol>
<li><strong>계획 (Planning)</strong>: 목표를 하위 작업으로 분해하고 실행 순서를 결정합니다. 예를 들어 "설비 정비 보고서를 작성하라"는 목표를 받으면, 데이터 수집 → 분석 → 보고서 초안 작성 → 검토의 단계로 분해합니다.</li>
<li><strong>도구 사용 (Tool Use)</strong>: 데이터베이스 조회, 웹 검색, 파일 읽기/쓰기, API 호출 등 외부 도구를 직접 호출합니다. 이를 통해 LLM 단독으로는 불가능한 실시간 데이터 접근이 가능해집니다.</li>
<li><strong>메모리 (Memory)</strong>: 대화 이력(단기 메모리)과 과거 작업 결과(장기 메모리)를 저장하여 맥락을 유지합니다. 장기 메모리는 벡터 데이터베이스(Vector DB) 등에 저장됩니다.</li>
<li><strong>자기 반성 (Self-Reflection)</strong>: 중간 결과를 스스로 평가하고, 오류가 발견되면 전략을 수정합니다. "이 데이터가 충분한가?", "이 답변이 정확한가?" 등을 판단합니다.</li>
</ol>

<h3>에이전트의 주요 프레임워크</h3>
<h4>1. ReAct (Reasoning + Acting)</h4>
<p>"추론하고 행동하기"를 반복하는 패턴입니다. 한 단계씩 생각(Thought) → 행동(Action) → 관찰(Observation)을 반복하며 목표에 접근합니다.</p>
<pre><code>Thought: 보령화력 1호기의 이번 달 진동 데이터를 확인해야 한다.
Action: CMMS에서 1호기 진동 센서 데이터 조회
Observation: 진동값이 지난주 대비 15% 상승했다.
Thought: 정상 범위를 초과했는지 기준치와 비교해야 한다.
Action: 설비 기준치 데이터베이스 조회
Observation: 기준치 대비 78%로 아직 정상 범위이나 상승 추세이다.</code></pre>

<h4>2. Plan-and-Execute</h4>
<p>먼저 전체 계획을 세운 후, 계획에 따라 순차적으로 실행합니다. 복잡한 프로젝트형 작업에 적합하며, 계획 단계에서 전체 구조를 파악하므로 일관성 있는 결과를 생성합니다.</p>

<h4>3. Multi-Agent (다중 에이전트)</h4>
<p>서로 다른 역할의 에이전트 여러 개가 협업합니다. 예를 들어 리서치 에이전트가 정보를 수집하고, 분석 에이전트가 데이터를 처리하며, 보고서 에이전트가 최종 문서를 작성하는 팀워크 구조입니다.</p>

<h3>현재 AI 에이전트 생태계 (2025~2026)</h3>
<ul>
<li><strong>OpenAI</strong>: GPT-4 기반 에이전트, Custom GPTs를 통한 업무별 에이전트 구축</li>
<li><strong>Anthropic</strong>: Claude + MCP를 통한 도구 연결 에이전트, Claude Code 코딩 에이전트</li>
<li><strong>Google</strong>: Gemini 기반 에이전트, Google Workspace 통합</li>
<li><strong>Microsoft</strong>: Copilot Agents, Microsoft 365 생태계 자동화</li>
<li><strong>오픈소스</strong>: LangChain, CrewAI, AutoGen 등 에이전트 프레임워크</li>
</ul>

<h3>발전소 업무 에이전트 활용 시나리오</h3>
<div class="tip-box">
<strong>시나리오:</strong> 한국중부발전 정비팀에서 "이번 분기 터빈 설비 상태 종합 보고서"를 AI 에이전트에게 요청하면?
<ol>
<li><strong>계획</strong>: 에이전트가 보고서에 필요한 정보를 파악 — 가동률 데이터, 정비 이력, 진동 센서 트렌드</li>
<li><strong>도구 사용</strong>: 사내 CMMS(정비관리시스템)에서 데이터 조회, 센서 데이터 API 호출</li>
<li><strong>메모리</strong>: 이전 분기 보고서 양식과 핵심 지표를 기억</li>
<li><strong>자기 반성</strong>: 누락된 데이터가 있으면 추가 조회, 이상치 발견 시 확인 요청</li>
</ol>
</div>

<div class="warning-box">
<strong>주의:</strong> AI 에이전트는 강력하지만, 아직 완벽하지 않습니다. 특히 안전과 관련된 의사결정에서는 반드시 사람의 최종 확인이 필요합니다. 에이전트의 판단을 무조건 신뢰하지 말고, 결과를 검증하는 습관을 가져야 합니다.
</div>

<blockquote>AI 에이전트는 "지시하면 알아서 일하는 AI 동료"라고 이해하면 됩니다. 2025~2026년 현재 급속히 발전 중인 분야로, 발전산업에서도 설비 모니터링, 보고서 자동화, 안전 점검 등에 적용이 확대되고 있습니다.</blockquote>
`,
    quizzes: [
      {
        question: 'AI 에이전트의 4가지 핵심 구성요소에 해당하지 않는 것은?',
        options: ['계획 (Planning)', '도구 사용 (Tool Use)', '데이터 라벨링 (Data Labeling)', '자기 반성 (Self-Reflection)'],
        correctIndex: 2,
        explanation: 'AI 에이전트의 4가지 구성요소는 계획(Planning), 도구 사용(Tool Use), 메모리(Memory), 자기 반성(Self-Reflection)입니다. 데이터 라벨링은 머신러닝 학습 데이터 준비 과정이지 에이전트의 구성요소가 아닙니다.',
      },
      {
        question: 'ReAct 프레임워크에서 에이전트가 반복하는 3단계 순서는?',
        options: [
          '계획 → 실행 → 보고',
          '생각(Thought) → 행동(Action) → 관찰(Observation)',
          '입력 → 처리 → 출력',
          '학습 → 추론 → 저장',
        ],
        correctIndex: 1,
        explanation: 'ReAct(Reasoning + Acting) 프레임워크는 생각(Thought) → 행동(Action) → 관찰(Observation)을 반복하며 목표에 접근하는 패턴입니다.',
      },
    ],
  },

  // ── 2. MCP(Model Context Protocol) ──
  {
    id: 'mcp-basics',
    categoryId: 'ai-agents',
    title: 'MCP(Model Context Protocol)',
    titleEn: 'MCP Basics',
    estimatedMinutes: 18,
    sortOrder: 2,
    content: `
<h2>MCP란 무엇인가?</h2>
<p><strong>MCP(Model Context Protocol)</strong>는 Anthropic이 2024년에 공개한 <strong>오픈 표준 프로토콜</strong>로, AI 모델이 외부 도구, 데이터 소스, 시스템과 <strong>표준화된 방식</strong>으로 연결될 수 있게 해줍니다. USB-C가 다양한 기기를 하나의 표준 커넥터로 연결하듯, MCP는 AI와 외부 세계를 하나의 표준으로 연결합니다.</p>

<div class="info-box">
<strong>비유:</strong> MCP는 "AI를 위한 USB-C 포트"입니다. 어떤 AI 모델이든, 어떤 외부 시스템이든 MCP라는 하나의 표준으로 연결할 수 있습니다. 과거에는 각 AI마다 별도 플러그인을 만들어야 했지만, MCP로 "한 번 만들면 어디서든" 사용 가능합니다.
</div>

<h3>왜 MCP가 필요한가?</h3>
<p>기존에는 AI가 외부 시스템과 연결되려면 각 시스템마다 별도의 커스텀 통합(integration)을 개발해야 했습니다. 예를 들어 ChatGPT에서 Slack을 사용하려면 Slack 전용 플러그인이, Claude에서 사용하려면 또 다른 통합이 필요했습니다. AI 모델이 N개, 외부 시스템이 M개라면 N x M 개의 통합이 필요합니다. MCP는 이 문제를 표준화하여 N + M 개로 줄여줍니다.</p>

<h3>MCP의 3가지 핵심 구성요소</h3>
<table>
<thead>
<tr><th>구성요소</th><th>역할</th><th>예시</th></tr>
</thead>
<tbody>
<tr><td><strong>Tools (도구)</strong></td><td>AI가 호출할 수 있는 함수/API</td><td>데이터베이스 쿼리 실행, 파일 읽기/쓰기, 이메일 발송, 센서 데이터 조회</td></tr>
<tr><td><strong>Resources (리소스)</strong></td><td>AI가 읽을 수 있는 데이터/문서</td><td>사내 매뉴얼, 설비 데이터, 규정 문서, 정비 이력</td></tr>
<tr><td><strong>Prompts (프롬프트)</strong></td><td>재사용 가능한 프롬프트 템플릿</td><td>보고서 작성 템플릿, 데이터 분석 템플릿, 이상 보고 템플릿</td></tr>
</tbody>
</table>

<h3>MCP 서버/클라이언트 아키텍처</h3>
<p>MCP는 <strong>서버-클라이언트 구조</strong>로 작동합니다.</p>
<ul>
<li><strong>MCP 서버</strong>: 외부 시스템(DB, 파일, API 등)을 감싸는 어댑터. 각 서비스마다 하나의 MCP 서버를 구축합니다. 예) Slack MCP 서버, GitHub MCP 서버, 설비관리 MCP 서버</li>
<li><strong>MCP 클라이언트</strong>: AI 애플리케이션(Claude Desktop, VS Code 등)이 MCP 서버에 접속하는 부분입니다.</li>
<li><strong>MCP 호스트</strong>: 사용자가 실제로 사용하는 AI 앱. 여러 MCP 서버에 동시 접속 가능합니다.</li>
</ul>

<h4>작동 흐름</h4>
<pre><code>사용자 요청 → MCP 호스트(AI 앱) → MCP 클라이언트 → MCP 서버 → 외부 시스템
                                                          ↓
                                             결과 반환 → AI가 답변 생성</code></pre>

<h3>MCP 전송 방식</h3>
<p>MCP는 두 가지 전송 방식을 지원합니다.</p>
<ul>
<li><strong>stdio (표준 입출력)</strong>: 로컬 환경에서 MCP 서버를 프로세스로 실행. 설치가 간단하고 보안성이 높습니다.</li>
<li><strong>SSE (Server-Sent Events)</strong>: 네트워크를 통한 원격 접속. 팀 전체가 공유하는 서버에 적합합니다.</li>
</ul>

<h3>실제 MCP 활용 사례</h3>
<ul>
<li><strong>파일 시스템 MCP 서버</strong>: AI가 로컬 파일을 읽고, 쓰고, 검색할 수 있습니다.</li>
<li><strong>데이터베이스 MCP 서버</strong>: AI가 직접 SQL 쿼리를 실행하여 데이터를 조회합니다.</li>
<li><strong>Slack MCP 서버</strong>: AI가 Slack 채널에 메시지를 보내거나 대화 이력을 읽을 수 있습니다.</li>
<li><strong>GitHub MCP 서버</strong>: AI가 코드 저장소에 접근하여 이슈를 생성하거나 PR을 검토합니다.</li>
<li><strong>Google Drive MCP 서버</strong>: AI가 문서를 검색하고 내용을 읽어 답변에 활용합니다.</li>
</ul>

<h3>MCP 서버 구성 예시 (JSON)</h3>
<pre><code>{
  "mcpServers": {
    "설비관리": {
      "command": "node",
      "args": ["cmms-mcp-server.js"],
      "env": { "DB_HOST": "cmms.komipo.co.kr" }
    },
    "센서데이터": {
      "command": "python",
      "args": ["sensor-mcp-server.py"]
    }
  }
}</code></pre>

<div class="tip-box">
<strong>발전소 적용 시나리오:</strong> 한국중부발전에서 "설비 MCP 서버"를 구축하면, AI 에이전트가 CMMS(정비관리시스템)의 정비 이력을 직접 조회하고, 센서 데이터 API를 호출하며, 보고서를 자동으로 생성할 수 있습니다. 별도의 커스텀 개발 없이 표준 프로토콜로 연결됩니다.
</div>

<div class="warning-box">
<strong>보안 주의:</strong> MCP를 통해 AI가 외부 시스템에 접근할 때는 반드시 접근 권한을 최소화하고, 민감한 데이터에 대한 접근 제어를 설정해야 합니다. 읽기 전용(read-only) 권한으로 시작하는 것이 안전합니다. 프롬프트 인젝션 공격에도 주의해야 합니다.
</div>

<blockquote>MCP는 2024년 말 공개 이후 빠르게 생태계가 확장되고 있으며, GitHub, Slack, Google Drive, Notion 등 수백 개의 MCP 서버가 이미 존재합니다. 앞으로 AI 에이전트의 핵심 인프라로 자리잡을 전망입니다.</blockquote>
`,
    quizzes: [
      {
        question: 'MCP(Model Context Protocol)의 3가지 핵심 구성요소가 아닌 것은?',
        options: ['Tools (도구)', 'Resources (리소스)', 'Prompts (프롬프트)', 'Widgets (위젯)'],
        correctIndex: 3,
        explanation: 'MCP의 3가지 핵심 구성요소는 Tools(도구), Resources(리소스), Prompts(프롬프트)입니다. Widgets는 MCP의 구성요소가 아닙니다.',
      },
      {
        question: 'MCP 아키텍처에서 외부 시스템(DB, 파일 등)을 감싸는 어댑터 역할을 하는 것은?',
        options: ['MCP 호스트', 'MCP 클라이언트', 'MCP 서버', 'MCP 브리지'],
        correctIndex: 2,
        explanation: 'MCP 서버는 외부 시스템(데이터베이스, 파일 시스템, API 등)을 감싸는 어댑터 역할을 합니다. AI 앱(호스트)이 MCP 클라이언트를 통해 MCP 서버에 접속합니다.',
      },
    ],
  },

  // ── 3. AI 자동화 ──
  {
    id: 'automation',
    categoryId: 'ai-agents',
    title: 'AI 자동화',
    titleEn: 'AI Automation',
    estimatedMinutes: 16,
    sortOrder: 3,
    content: `
<h2>AI 자동화의 개념</h2>
<p><strong>AI 자동화</strong>란, 인공지능 기술을 활용하여 반복적이거나 규칙 기반의 업무를 자동으로 처리하는 것을 말합니다. 기존 RPA(Robotic Process Automation)가 정해진 규칙에 따라 작업을 반복했다면, AI 자동화는 <strong>판단력과 유연성</strong>을 갖추어 비정형 업무까지 처리할 수 있습니다.</p>

<h3>RPA vs AI 자동화 비교</h3>
<table>
<thead>
<tr><th>구분</th><th>RPA (기존 자동화)</th><th>AI 자동화</th></tr>
</thead>
<tbody>
<tr><td>작업 유형</td><td>정형화된 반복 작업</td><td>비정형 포함 다양한 작업</td></tr>
<tr><td>규칙</td><td>사전 정의된 규칙 필요</td><td>스스로 판단 가능</td></tr>
<tr><td>예외 처리</td><td>예외 발생 시 중단</td><td>AI가 상황 판단하여 대응</td></tr>
<tr><td>자연어 이해</td><td>불가능</td><td>가능 (이메일, 문서 내용 이해)</td></tr>
<tr><td>학습 능력</td><td>없음</td><td>데이터에서 패턴 학습</td></tr>
<tr><td>적용 예시</td><td>엑셀 데이터 복사/붙여넣기</td><td>이메일 분석 후 자동 분류 및 회신</td></tr>
</tbody>
</table>

<h3>주요 워크플로우 자동화 도구</h3>
<h4>1. Zapier</h4>
<p>5,000개 이상의 앱을 연결하는 글로벌 1위 자동화 플랫폼입니다. "트리거 → 액션" 구조로 작동합니다. 예를 들어 "이메일에 첨부파일이 오면 → Google Drive에 자동 저장 → Slack에 알림" 같은 워크플로우를 코드 없이 구축합니다.</p>

<h4>2. Make (구 Integromat)</h4>
<p>시각적 워크플로우 디자이너로 복잡한 자동화 시나리오를 설계합니다. 분기 처리, 반복, 에러 핸들링 등 고급 기능을 지원하여 Zapier보다 복잡한 자동화에 적합합니다.</p>

<h4>3. Microsoft Power Automate</h4>
<p>Microsoft 365 환경에 통합된 자동화 도구입니다. Outlook, Teams, SharePoint, Excel 등 Microsoft 제품과의 연동이 탁월합니다. 발전소처럼 Microsoft 365를 사용하는 조직에 특히 유용합니다.</p>

<h3>노코드(No-Code) 자동화의 장점</h3>
<div class="info-box">
<strong>노코드 자동화란:</strong> 프로그래밍 지식 없이 드래그 앤 드롭, 설정만으로 업무 자동화를 구축하는 방식입니다. 현업 담당자가 직접 자동화를 만들 수 있어, IT 부서에 의존하지 않고 빠르게 적용할 수 있습니다.
</div>

<h3>프로세스 마이닝</h3>
<p><strong>프로세스 마이닝(Process Mining)</strong>은 시스템 로그 데이터를 분석하여 실제 업무 프로세스를 시각화하고, 자동화 가능한 지점을 발견하는 기법입니다. 자동화 대상을 선정할 때 감이 아닌 데이터 기반으로 판단할 수 있습니다.</p>
<ul>
<li>시스템 로그에서 업무 흐름을 자동으로 추출</li>
<li>병목 구간, 반복 작업, 예외 처리 빈도를 시각화</li>
<li>자동화 ROI(투자수익률)가 높은 프로세스를 우선순위로 식별</li>
</ul>

<h3>발전소 업무 자동화 시나리오</h3>
<div class="tip-box">
<ol>
<li><strong>일일 운전 보고서 자동 생성</strong>: 센서 데이터를 수집하여 운전 현황 보고서를 자동으로 작성하고 관련 부서에 배포</li>
<li><strong>설비 이상 징후 자동 알림</strong>: 진동, 온도, 압력 센서 데이터를 실시간 분석하여 이상 패턴 감지 시 담당자에게 즉시 알림</li>
<li><strong>정비 작업 지시서 자동 생성</strong>: 설비 상태 데이터 기반으로 정비 필요 시점을 예측하고 작업 지시서를 자동 생성</li>
<li><strong>안전 교육 수료 현황 자동 집계</strong>: 직원별 안전 교육 이수 현황을 자동으로 집계하고 미이수자에게 알림 발송</li>
<li><strong>환경 규제 준수 모니터링</strong>: 배출가스 데이터를 실시간 모니터링하여 기준치 초과 시 자동 알림 및 대응 프로세스 시작</li>
</ol>
</div>

<h3>자동화 구축 5단계</h3>
<ol>
<li><strong>업무 분석</strong>: 현재 수행 중인 업무를 상세히 분석하고, 자동화 대상을 선정합니다. 반복 빈도가 높고, 규칙성이 있으며, 오류 가능성이 있는 업무가 우선 대상입니다.</li>
<li><strong>도구 선택</strong>: 업무 특성에 맞는 AI 도구를 선택합니다.</li>
<li><strong>구현</strong>: 워크플로우를 설계하고 자동화를 구현합니다. 작은 범위부터 시작합니다.</li>
<li><strong>테스트</strong>: 다양한 상황에서 테스트하고, 예외 상황에서의 동작을 확인합니다.</li>
<li><strong>운영 및 개선</strong>: 실제 운영하며 지속적으로 모니터링하고 개선합니다.</li>
</ol>

<div class="warning-box">
<strong>주의사항:</strong> 자동화는 사람의 판단을 완전히 대체하는 것이 아닙니다. 특히 안전 관련 의사결정은 반드시 사람이 최종 확인해야 합니다. AI 자동화는 "사람의 업무를 돕는 도구"로 활용해야 합니다.
</div>
`,
    quizzes: [
      {
        question: 'RPA와 AI 자동화의 가장 큰 차이점은?',
        options: [
          'RPA가 더 비싸다',
          'AI 자동화는 비정형 업무도 판단하여 처리할 수 있다',
          'RPA는 클라우드에서만 작동한다',
          'AI 자동화는 인터넷이 필요 없다',
        ],
        correctIndex: 1,
        explanation: 'RPA는 정해진 규칙에 따라 정형 작업만 반복하지만, AI 자동화는 자연어 이해와 판단력을 갖추어 비정형 업무까지 유연하게 처리할 수 있습니다.',
      },
      {
        question: '업무 자동화 도구 중 Microsoft 365 환경에 가장 잘 통합되는 것은?',
        options: [
          'Zapier',
          'Make (Integromat)',
          'Power Automate',
          'IFTTT',
        ],
        correctIndex: 2,
        explanation: 'Microsoft Power Automate는 Microsoft 365 환경에 통합된 자동화 도구로, Outlook, Teams, SharePoint, Excel 등 Microsoft 제품과의 연동이 가장 뛰어납니다.',
      },
    ],
  },

  // ── 4. AI 에이전트 활용 사례 ──
  {
    id: 'agent-cases',
    categoryId: 'ai-agents',
    title: 'AI 에이전트 활용 사례',
    titleEn: 'Agent Use Cases',
    estimatedMinutes: 18,
    sortOrder: 4,
    content: `
<h2>AI 에이전트 실제 활용 사례</h2>
<p>2025~2026년 현재, AI 에이전트는 다양한 산업과 업무 영역에서 실제로 활용되고 있습니다. 주요 유형별 사례를 살펴봅니다.</p>

<h3>1. 코딩 에이전트</h3>
<p>코딩 에이전트는 소프트웨어 개발 과정을 자동화합니다. 단순 코드 완성을 넘어 전체 기능 구현, 버그 수정, 테스트 작성까지 수행합니다.</p>
<ul>
<li><strong>Claude Code (Anthropic)</strong>: 터미널에서 직접 작동하는 코딩 에이전트. 코드베이스를 분석하고, 파일을 생성/수정하며, 테스트를 실행합니다. 복잡한 리팩토링이나 새 기능 구현을 자율적으로 수행합니다. MCP를 통해 GitHub, 데이터베이스 등에 직접 접근합니다.</li>
<li><strong>Cursor</strong>: AI 통합 코드 에디터. 코드 문맥을 이해하고, 여러 파일에 걸친 변경 사항을 한 번에 제안합니다.</li>
<li><strong>GitHub Copilot Workspace</strong>: 이슈(Issue)를 분석하고, 해결 계획을 세우고, 코드를 작성하고, Pull Request까지 생성합니다. 개발 워크플로우 전체를 자동화합니다.</li>
</ul>

<h3>2. 리서치 에이전트</h3>
<p>리서치 에이전트는 복잡한 조사 작업을 자동으로 수행합니다. 여러 소스를 검색하고, 정보를 종합하여 리포트를 생성합니다.</p>
<ul>
<li><strong>Perplexity Pro</strong>: 웹을 실시간 검색하고, 여러 소스의 정보를 종합하여 출처가 명시된 리서치 보고서를 생성합니다.</li>
<li><strong>Deep Research (OpenAI/Google)</strong>: 복잡한 주제에 대해 수십 개의 소스를 탐색하고, 수 분에 걸쳐 심층 분석 보고서를 작성합니다. "발전소 AI 예측 정비 최신 동향"같은 복잡한 주제도 체계적으로 조사합니다.</li>
</ul>

<h3>3. 업무 자동화 에이전트</h3>
<p>일상적인 비즈니스 업무를 자동화하는 에이전트입니다.</p>
<ul>
<li><strong>Microsoft Copilot Agents</strong>: Microsoft 365 환경에서 작동. 이메일을 분석하고 회의를 잡고, Excel 데이터를 분석하고, PowerPoint를 생성하는 등 Office 업무를 자동화합니다.</li>
<li><strong>Salesforce Agentforce</strong>: 고객 관계 관리(CRM)에서 영업, 마케팅, 고객 서비스 업무를 자동화합니다.</li>
<li><strong>Zapier Central</strong>: 5,000개 이상의 앱을 연결하여 크로스 플랫폼 업무 자동화를 수행하는 AI 에이전트입니다.</li>
</ul>

<h3>4. 고객 지원 에이전트</h3>
<p>기존 룰 기반 챗봇을 넘어, 복잡한 고객 문의도 스스로 해결하는 에이전트입니다.</p>
<ul>
<li>고객의 문의 내용을 이해하고, 사내 지식베이스를 검색하여 정확한 답변을 제공합니다.</li>
<li>해결이 어려운 경우 적절한 담당자에게 자동으로 에스컬레이션합니다.</li>
<li>대화 이력을 기억하여 반복 설명이 필요 없습니다.</li>
</ul>

<h3>에이전트 유형별 비교표</h3>
<table>
<thead>
<tr><th>유형</th><th>대표 서비스</th><th>주요 기능</th><th>적용 분야</th></tr>
</thead>
<tbody>
<tr><td>코딩 에이전트</td><td>Claude Code, Cursor, Copilot</td><td>코드 생성·수정·테스트</td><td>소프트웨어 개발, IT 부서</td></tr>
<tr><td>리서치 에이전트</td><td>Perplexity Pro, Deep Research</td><td>다중 소스 검색·분석·보고서</td><td>기획, 연구, 정책 분석</td></tr>
<tr><td>업무 에이전트</td><td>Copilot Agents, Zapier Central</td><td>이메일·문서·데이터 자동화</td><td>일반 사무, 경영지원</td></tr>
<tr><td>고객 지원 에이전트</td><td>Intercom Fin, Zendesk AI</td><td>고객 문의 자동 응대</td><td>고객 서비스, 콜센터</td></tr>
</tbody>
</table>

<h3>5. 발전소 모니터링 에이전트</h3>
<p>발전산업에 특화된 AI 에이전트는 설비의 실시간 상태를 모니터링하고, 이상 징후를 조기에 감지하여 대응합니다.</p>
<ul>
<li><strong>설비 상태 모니터링</strong>: 수천 개의 센서 데이터를 실시간 분석하여, 정상 패턴에서 벗어나는 미세한 변화를 감지합니다.</li>
<li><strong>자동 원인 분석</strong>: 이상 징후가 감지되면 과거 정비 이력과 유사 사례를 자동으로 검색하여 원인을 추정합니다.</li>
<li><strong>정비 일정 자동 조정</strong>: 설비 상태에 따라 정비 일정을 자동으로 제안하거나 조정합니다.</li>
<li><strong>보고서 자동 생성</strong>: 일일/주간/월간 설비 상태 보고서를 데이터 기반으로 자동 생성합니다.</li>
</ul>

<div class="tip-box">
<strong>한국중부발전이 기대할 수 있는 AI 에이전트 활용 비전:</strong>
<ul>
<li><strong>통합 설비 관리 에이전트</strong>: 전체 발전 설비의 상태를 실시간 모니터링하고, 이상 징후 발견 시 자동으로 원인을 분석하여 정비 일정을 제안합니다.</li>
<li><strong>안전 관리 에이전트</strong>: CCTV 영상을 분석하여 안전 위반 사항을 자동 감지하고, 즉시 알림을 발송합니다.</li>
<li><strong>보고서 에이전트</strong>: 운전 데이터, 정비 이력, 환경 데이터를 종합하여 각종 보고서를 자동으로 생성합니다.</li>
<li><strong>교육·훈련 에이전트</strong>: 직원별 역량 수준에 맞는 맞춤형 교육 콘텐츠를 자동 추천하고 학습 진도를 관리합니다.</li>
</ul>
</div>

<div class="info-box">
<strong>키포인트:</strong> AI 에이전트는 "단순 도구"에서 "AI 동료"로 진화하고 있습니다. 중요한 것은 기술 자체가 아니라, 우리 업무에 어떻게 적용할 것인가에 대한 아이디어입니다. 작은 것부터 시작하여 점진적으로 확대하는 것이 성공적인 도입의 핵심입니다.
</div>
`,
    quizzes: [
      {
        question: '다음 중 코딩 에이전트에 해당하지 않는 것은?',
        options: ['Claude Code', 'Cursor', 'Perplexity Pro', 'GitHub Copilot Workspace'],
        correctIndex: 2,
        explanation: 'Perplexity Pro는 코딩 에이전트가 아닌 리서치 에이전트입니다. 웹을 검색하여 정보를 종합하고 리포트를 생성하는 것이 주요 기능입니다.',
      },
      {
        question: '발전소 모니터링 에이전트가 이상 징후를 감지한 후 수행하는 작업으로 적절하지 않은 것은?',
        options: [
          '과거 정비 이력에서 유사 사례를 검색한다',
          '설비를 자동으로 즉시 정지시킨다',
          '원인을 추정하고 담당자에게 알린다',
          '정비 일정 조정을 제안한다',
        ],
        correctIndex: 1,
        explanation: 'AI 에이전트는 이상 징후 감지, 원인 분석, 알림, 정비 제안 등을 수행하지만, 설비를 자동으로 즉시 정지시키는 것은 안전상 사람의 최종 판단이 필요한 영역입니다.',
      },
    ],
  },
];

// ────────────────────────────────────────────
//  업무 활용 (categoryId: 'business') — 6 lessons
// ────────────────────────────────────────────

export const LESSONS_BUSINESS: LessonData[] = [
  // ── 1. 문서 작성 AI 활용 ──
  {
    id: 'doc-ai',
    categoryId: 'business',
    title: '문서 작성 AI 활용',
    titleEn: 'Document AI',
    estimatedMinutes: 16,
    sortOrder: 1,
    content: `
<h2>AI를 활용한 업무 문서 작성</h2>
<p>업무에서 작성하는 보고서, 기획서, 매뉴얼, 규정 문서 등을 AI의 도움으로 빠르고 체계적으로 작성할 수 있습니다. 핵심 원칙은 <strong>"초안은 AI가, 검토는 사람이"</strong>입니다.</p>

<div class="tip-box">
<strong>원칙:</strong> AI가 생성한 문서를 그대로 사용하지 마세요. AI 초안을 바탕으로 사실 확인, 내용 보완, 톤 조절 등 사람의 검토를 반드시 거쳐야 합니다.
</div>

<h3>문서 유형별 AI 활용 방법</h3>
<table>
<thead>
<tr><th>문서 유형</th><th>AI 활용 방법</th><th>적합한 AI 도구</th><th>주의사항</th></tr>
</thead>
<tbody>
<tr><td>보고서</td><td>데이터 분석 → 핵심 인사이트 도출 → 보고서 형식 생성</td><td>Claude, ChatGPT</td><td>수치 정확성 반드시 검증</td></tr>
<tr><td>기획서</td><td>아이디어 브레인스토밍 → 목차 구성 → 초안 작성</td><td>Claude, ChatGPT</td><td>실현 가능성은 사람이 판단</td></tr>
<tr><td>매뉴얼</td><td>절차를 단계별로 정리 → 주의사항 추가 → 도식화 제안</td><td>Claude, Copilot</td><td>현장 경험 기반 검증 필수</td></tr>
<tr><td>규정 문서</td><td>기존 규정 참조 → 법규 반영 → 문구 통일</td><td>Claude, ChatGPT</td><td>법무 검토 필수</td></tr>
</tbody>
</table>

<h3>발전소 보고서 작성 프롬프트 예시</h3>
<h4>1. 설비 가동률 보고서</h4>
<pre><code>역할: 한국중부발전 발전운영팀 과장
작업: 2026년 1분기 설비 가동률 분석 보고서 작성

조건:
- 대상 설비: 보령화력 1~4호기
- 보고서 형식: 1) 개요 2) 설비별 가동률 현황 3) 전년 동기 비교
  4) 이상 사항 및 원인 5) 개선 방안 6) 결론
- 데이터: [첨부 엑셀 파일 참조]
- 분량: A4 5페이지 이내
- 톤: 공식적, 간결체</code></pre>

<h4>2. AI 도입 기획서</h4>
<pre><code>역할: 한국중부발전 경영혁신팀 담당자
작업: "AI 기반 설비 예측 정비 시스템 도입" 기획서 초안 작성

구성:
- 추진 배경 및 필요성
- 현황 분석 (As-Is)
- 목표 (To-Be)
- 추진 전략 및 일정
- 소요 예산 (개략)
- 기대 효과
- 리스크 및 대응 방안</code></pre>

<h3>문서 검토 및 편집에 AI 활용</h3>
<p>이미 작성된 문서를 AI에게 검토를 요청할 수도 있습니다.</p>
<ul>
<li><strong>문법·맞춤법 교정</strong>: "이 문서의 문법 오류와 맞춤법을 교정해주세요"</li>
<li><strong>문체 통일</strong>: "이 보고서의 문체를 경어체/격식체로 통일해주세요"</li>
<li><strong>논리 흐름 점검</strong>: "이 기획서의 논리적 흐름을 검토하고 개선점을 제안해주세요"</li>
<li><strong>요약 생성</strong>: "이 30페이지 보고서를 경영진용 1페이지 요약본으로 만들어주세요"</li>
<li><strong>스타일 일관성</strong>: "이 문서의 용어와 표현을 사내 표준 양식에 맞게 통일해주세요"</li>
</ul>

<h3>문서 작성 시 스타일 일관성 유지법</h3>
<div class="info-box">
<strong>팁:</strong> 사내 표준 문서 양식이나 이전에 잘 작성된 보고서를 AI에게 "참조 문서"로 제공하면, AI가 동일한 스타일과 톤으로 새 문서를 작성합니다. "첨부한 참조 보고서와 동일한 구조, 톤, 용어를 사용하여 작성해주세요"라고 지시하세요.
</div>

<div class="warning-box">
<strong>주의:</strong> 사내 기밀 문서나 개인정보가 포함된 문서를 외부 AI 서비스에 업로드할 때는 회사의 정보보안 정책을 반드시 확인하세요. 기밀 등급이 높은 문서는 사내 AI 또는 엔터프라이즈 버전을 사용해야 합니다.
</div>

<blockquote>AI 문서 작성의 핵심은 "AI에게 초안을 맡기고, 사람은 검토와 판단에 집중하는 것"입니다. 이를 통해 문서 작성 시간을 50~70% 단축하면서도 품질을 유지할 수 있습니다.</blockquote>
`,
    quizzes: [
      {
        question: 'AI를 활용한 문서 작성의 올바른 원칙은?',
        options: [
          'AI가 최종본을 생성하고 사람은 확인만 한다',
          '초안은 AI가 작성하고, 검토와 수정은 사람이 한다',
          'AI에게 모든 판단을 위임한다',
          '사람이 먼저 완성하고 AI는 사용하지 않는다',
        ],
        correctIndex: 1,
        explanation: 'AI 문서 작성의 핵심 원칙은 "초안은 AI가, 검토는 사람이"입니다. AI가 빠르게 초안을 생성하고, 사람이 사실 확인, 내용 보완, 톤 조절 등의 검토를 수행합니다.',
      },
      {
        question: '다음 중 AI에게 보고서 작성을 요청할 때 프롬프트에 포함해야 할 요소가 아닌 것은?',
        options: [
          '보고서 형식과 목차 구조',
          'AI 모델의 학습 데이터 출처',
          '참조할 데이터와 분량 제한',
          '작성자의 역할과 톤 지정',
        ],
        correctIndex: 1,
        explanation: 'AI에게 보고서를 요청할 때는 역할, 형식, 참조 데이터, 분량, 톤 등을 지정합니다. AI 모델의 학습 데이터 출처는 사용자가 지정할 수 있는 것이 아니며 프롬프트에 포함할 요소가 아닙니다.',
      },
    ],
  },

  // ── 2. 데이터 분석 AI 활용 ──
  {
    id: 'data-ai',
    categoryId: 'business',
    title: '데이터 분석 AI 활용',
    titleEn: 'Data Analysis AI',
    estimatedMinutes: 18,
    sortOrder: 2,
    content: `
<h2>AI를 활용한 데이터 분석</h2>
<p>Excel 파일, CSV 데이터, 데이터베이스 등의 데이터를 AI에게 전달하면, 복잡한 통계 분석부터 시각화, 인사이트 도출까지 빠르게 수행할 수 있습니다. 코딩 지식 없이도 자연어로 데이터를 분석하는 시대가 열렸습니다.</p>

<h3>AI 데이터 분석 워크플로우</h3>
<ol>
<li><strong>데이터 준비</strong>: 분석할 데이터 파일을 준비합니다 (Excel, CSV 등)</li>
<li><strong>AI에 업로드</strong>: 데이터 파일을 AI 도구에 업로드합니다</li>
<li><strong>분석 요청</strong>: 자연어로 분석 내용을 요청합니다</li>
<li><strong>결과 확인</strong>: AI가 생성한 분석 결과와 시각화를 확인합니다</li>
<li><strong>인사이트 도출</strong>: 분석 결과를 바탕으로 의사결정에 활용합니다</li>
</ol>

<h3>AI 데이터 분석 도구 비교</h3>
<table>
<thead>
<tr><th>도구</th><th>장점</th><th>단점</th><th>추천 용도</th></tr>
</thead>
<tbody>
<tr><td><strong>ChatGPT (Advanced Data Analysis)</strong></td><td>Python 코드 자동 실행, 차트 생성, 파일 업로드</td><td>유료(Plus 필요), 대용량 한계</td><td>복잡한 통계 분석, 시각화</td></tr>
<tr><td><strong>Claude</strong></td><td>긴 데이터 처리, 정확한 분석, Artifacts로 시각화</td><td>코드 직접 실행 제한적</td><td>데이터 해석, 보고서 작성</td></tr>
<tr><td><strong>Google Sheets + Gemini</strong></td><td>스프레드시트 내에서 바로 활용, 무료</td><td>복잡한 분석은 한계</td><td>간단한 데이터 정리·분석</td></tr>
<tr><td><strong>Microsoft Copilot (Excel)</strong></td><td>Excel과 완벽 통합, 수식·차트 자동 생성</td><td>Microsoft 365 라이선스 필요</td><td>기존 Excel 업무 효율화</td></tr>
</tbody>
</table>

<h3>AI 데이터 분석의 4가지 핵심 활용</h3>
<h4>1. 데이터 정제 (Data Cleaning)</h4>
<p>결측값 처리, 이상치 감지, 형식 통일, 중복 제거 등의 데이터 전처리를 AI가 자동 수행합니다.</p>
<pre><code>프롬프트 예시:
"이 엑셀 데이터에서 결측값이 있는 행을 찾아주세요. 결측값은 전후 데이터의
평균으로 대체하고, 이상치(평균에서 표준편차 3배 이상 벗어난 값)도 표시해주세요."</code></pre>

<h4>2. 패턴 분석 (Pattern Analysis)</h4>
<p>데이터에서 트렌드, 상관관계, 주기적 패턴 등을 자동으로 발견합니다.</p>
<pre><code>프롬프트 예시:
"최근 12개월간 설비 가동률 데이터에서 계절별 패턴이 있는지 분석해주세요.
월별 평균 가동률 추이와 전년 동기 대비 변화율도 보여주세요."</code></pre>

<h4>3. 시각화 (Visualization)</h4>
<p>막대그래프, 선 그래프, 히트맵, 산점도 등 다양한 차트를 자동 생성합니다. ChatGPT의 Advanced Data Analysis는 Python 코드를 실행하여 고품질 차트를 즉시 만들어줍니다.</p>

<h4>4. 인사이트 도출 (Insight Generation)</h4>
<p>데이터 분석 결과를 바탕으로 비즈니스 인사이트와 액션 아이템을 제안합니다.</p>

<h3>발전소 운전 데이터 분석 예시</h3>
<div class="tip-box">
<strong>예시 1: 설비 가동률 분석</strong>
<p>보령화력 1~4호기의 월별 가동률 데이터를 AI에게 업로드하면:</p>
<ul>
<li>호기별 가동률 추이 그래프 자동 생성</li>
<li>가동률이 낮았던 기간과 원인(정비, 고장 등) 상관관계 분석</li>
<li>다음 분기 가동률 예측 및 정비 일정 최적화 제안</li>
</ul>
</div>

<div class="tip-box">
<strong>예시 2: 센서 데이터 이상 탐지</strong>
<p>터빈 진동 센서, 온도 센서, 압력 센서 데이터를 함께 분석하면:</p>
<ul>
<li>정상 운전 범위를 자동으로 학습하고, 이상 패턴을 감지</li>
<li>진동값과 온도의 상관관계를 시각화하여 이상 징후를 조기 발견</li>
<li>과거 고장 데이터와 비교하여 유사 패턴 경고</li>
</ul>
</div>

<div class="warning-box">
<strong>보안 주의:</strong> 사내 운영 데이터를 외부 AI 서비스에 업로드할 때는 반드시 정보보안 정책을 확인하세요. 민감한 운영 데이터는 사내 AI 시스템이나 엔터프라이즈 AI를 사용해야 합니다. 데이터를 익명화하거나 샘플 데이터로 대체하는 방법도 고려하세요.
</div>

<blockquote>AI 데이터 분석은 전문 데이터 분석가가 아니더라도 누구나 데이터 기반 의사결정을 할 수 있게 해줍니다. 핵심은 "어떤 질문을 던질 것인가"입니다.</blockquote>
`,
    quizzes: [
      {
        question: 'AI 데이터 분석 워크플로우의 올바른 순서는?',
        options: [
          '분석 요청 → 데이터 준비 → 업로드 → 인사이트 도출',
          '데이터 준비 → AI에 업로드 → 분석 요청 → 결과 확인 → 인사이트 도출',
          '인사이트 도출 → 데이터 준비 → 결과 확인',
          '시각화 → 데이터 정제 → 업로드 → 패턴 분석',
        ],
        correctIndex: 1,
        explanation: 'AI 데이터 분석의 올바른 워크플로우는 데이터 준비 → AI에 업로드 → 분석 요청 → 결과 확인 → 인사이트 도출의 순서입니다.',
      },
      {
        question: '사내 운영 데이터를 AI로 분석할 때 가장 주의해야 할 점은?',
        options: [
          '분석 속도를 최대한 빠르게 해야 한다',
          '무료 AI 도구만 사용해야 한다',
          '정보보안 정책을 확인하고 민감한 데이터의 외부 유출을 방지해야 한다',
          '반드시 Python 코드를 직접 작성해야 한다',
        ],
        correctIndex: 2,
        explanation: '사내 운영 데이터를 AI로 분석할 때는 정보보안 정책 준수가 가장 중요합니다. 민감한 데이터는 사내 AI 시스템이나 엔터프라이즈 AI를 사용하고, 외부 서비스에는 익명화 또는 샘플 데이터를 사용해야 합니다.',
      },
    ],
  },

  // ── 3. PPT 제작 AI 활용 ──
  {
    id: 'ppt-ai',
    categoryId: 'business',
    title: 'PPT 제작 AI 활용',
    titleEn: 'PPT AI',
    estimatedMinutes: 16,
    sortOrder: 3,
    content: `
<h2>AI를 활용한 프레젠테이션 제작</h2>
<p>프레젠테이션 제작은 구조 설계, 내용 작성, 디자인, 발표 준비까지 많은 시간이 소요됩니다. AI를 활용하면 이 과정을 크게 단축하면서도 전문적인 결과물을 만들 수 있습니다.</p>

<h3>AI PPT 제작 도구 비교</h3>
<table>
<thead>
<tr><th>도구</th><th>특징</th><th>가격</th><th>추천 대상</th></tr>
</thead>
<tbody>
<tr><td><strong>Microsoft Copilot (PPT)</strong></td><td>기존 PPT에 AI 통합, Word 문서에서 PPT 자동 생성</td><td>Microsoft 365 Copilot 라이선스</td><td>Microsoft 365 사용자</td></tr>
<tr><td><strong>Gamma.app</strong></td><td>텍스트 입력만으로 아름다운 PPT 생성, 웹 기반</td><td>무료/유료</td><td>빠른 프레젠테이션이 필요한 경우</td></tr>
<tr><td><strong>ChatGPT + VBA</strong></td><td>ChatGPT로 VBA 매크로를 생성하여 PPT를 자동 제작</td><td>ChatGPT 구독</td><td>커스텀 자동화가 필요한 경우</td></tr>
<tr><td><strong>Beautiful.ai</strong></td><td>AI 기반 스마트 레이아웃, 자동 디자인 조정</td><td>유료</td><td>디자인 품질이 중요한 경우</td></tr>
</tbody>
</table>

<h3>AI로 PPT 만드는 3단계</h3>
<div class="tip-box">
<ol>
<li><strong>구조 설계</strong>: Claude/ChatGPT에게 전체 슬라이드 목차와 각 슬라이드 핵심 메시지를 설계하도록 요청</li>
<li><strong>내용 생성</strong>: 각 슬라이드의 상세 내용, 불릿 포인트, 데이터를 AI로 생성</li>
<li><strong>디자인 적용</strong>: Gamma.app 또는 Copilot으로 디자인을 자동 적용하거나, PowerPoint에서 직접 편집</li>
</ol>
</div>

<h3>프레젠테이션 구조 설계 프롬프트</h3>
<pre><code>프롬프트 예시:
"한국중부발전 경영진 보고용 프레젠테이션을 설계해주세요.

주제: AI 기반 설비 예측 정비 시스템 도입 제안
대상: 경영진 (기술 배경 다양)
시간: 20분 발표 + 10분 Q&A
슬라이드 수: 15장 이내

각 슬라이드별 제목, 핵심 메시지, 포함할 시각 자료를 제안해주세요."</code></pre>

<h3>슬라이드 디자인 원칙</h3>
<ul>
<li><strong>1슬라이드 1메시지</strong>: 한 슬라이드에 하나의 핵심 메시지만 담습니다.</li>
<li><strong>6-6-6 규칙</strong>: 한 슬라이드에 6줄 이내, 한 줄에 6단어 이내, 연속 6슬라이드 이상 텍스트만 넣지 않습니다.</li>
<li><strong>시각화 우선</strong>: 텍스트보다 그래프, 다이어그램, 이미지를 우선 사용합니다.</li>
<li><strong>일관된 색상</strong>: 회사 CI 색상(한국중부발전 블루/그린)을 기준으로 2~3가지 색상만 사용합니다.</li>
</ul>

<h3>발표 대본(Speaker Notes) 생성</h3>
<p>슬라이드가 완성되면 AI에게 발표 대본을 요청할 수 있습니다.</p>
<pre><code>프롬프트 예시:
"이 프레젠테이션의 발표 대본을 작성해주세요.
- 총 발표 시간: 20분
- 슬라이드별 소요 시간을 표시해주세요
- 톤: 전문적이지만 친근하게
- 도입부에 청중의 관심을 끄는 질문 포함
- 핵심 데이터를 강조하는 표현 사용"</code></pre>

<h3>보고서 프레젠테이션 활용</h3>
<p>이미 작성된 보고서 문서가 있다면, AI에게 "이 보고서를 15장 슬라이드로 변환해주세요"라고 요청하면 핵심 내용을 추출하여 프레젠테이션 구조로 재구성해줍니다. Microsoft Copilot은 Word 파일에서 직접 PPT를 생성하는 기능을 제공합니다.</p>

<div class="info-box">
<strong>참고:</strong> AI로 생성한 PPT는 반드시 내용의 정확성을 확인하고, 회사의 브랜드 가이드라인에 맞게 디자인을 조정해야 합니다. 특히 숫자 데이터와 그래프는 원본 데이터와 대조하여 검증하세요.
</div>
`,
    quizzes: [
      {
        question: '효과적인 프레젠테이션 디자인의 "1슬라이드 1메시지" 원칙이 의미하는 것은?',
        options: [
          '한 슬라이드에 가능한 많은 정보를 담는다',
          '한 슬라이드에 하나의 핵심 메시지만 담는다',
          '전체 프레젠테이션에 하나의 메시지만 넣는다',
          '슬라이드마다 같은 내용을 반복한다',
        ],
        correctIndex: 1,
        explanation: '"1슬라이드 1메시지" 원칙은 한 슬라이드에 하나의 핵심 메시지만 담아 청중이 쉽게 이해하도록 하는 디자인 원칙입니다.',
      },
      {
        question: '다음 중 AI PPT 제작 도구와 그 특징이 올바르게 연결된 것은?',
        options: [
          'Gamma.app — 마크다운으로 슬라이드 작성',
          'Beautiful.ai — Microsoft 365 전용',
          'Microsoft Copilot — Word 문서에서 PPT 자동 생성 가능',
          'ChatGPT — 디자인 자동 적용 전문',
        ],
        correctIndex: 2,
        explanation: 'Microsoft Copilot for PowerPoint는 Word 문서를 기반으로 PPT를 자동 생성하는 기능을 제공합니다. Gamma.app은 텍스트 입력 기반, Beautiful.ai는 AI 스마트 레이아웃 자동 조정이 특징입니다.',
      },
    ],
  },

  // ── 4. 이메일 작성 AI 활용 ──
  {
    id: 'email-ai',
    categoryId: 'business',
    title: '이메일 작성 AI 활용',
    titleEn: 'Email AI',
    estimatedMinutes: 14,
    sortOrder: 4,
    content: `
<h2>AI를 활용한 비즈니스 이메일 작성</h2>
<p>비즈니스 이메일은 명확성, 예의, 적절한 톤이 중요합니다. AI를 활용하면 상황에 맞는 전문적인 이메일을 빠르게 작성할 수 있습니다.</p>

<h3>비즈니스 이메일 AI 작성 4원칙</h3>
<ol>
<li><strong>수신자와 목적을 명확히 지정</strong>: "누구에게, 무슨 목적으로" 보내는지를 프롬프트에 분명히 작성합니다.</li>
<li><strong>핵심 내용을 불릿 포인트로 제공</strong>: 이메일에 포함할 핵심 정보를 나열합니다.</li>
<li><strong>톤과 격식 수준을 지정</strong>: 격식체, 비즈니스 캐주얼, 친근한 톤 등을 명시합니다.</li>
<li><strong>생성된 이메일을 반드시 검토</strong>: 수신자 이름, 날짜, 금액 등 구체적 정보의 정확성을 확인합니다.</li>
</ol>

<h3>상황별 이메일 프롬프트</h3>
<h4>1. 업무 요청 이메일</h4>
<pre><code>수신자: 보령화력 정비부 김팀장님
목적: 2분기 정기 정비 일정 확인 요청
포함 내용:
- 1호기 보일러 정비 일정 문의
- 정비 기간 중 가동 계획 확인
- 정비 인력 배정 현황 요청
톤: 정중한 격식체</code></pre>

<h4>2. 회신 이메일</h4>
<pre><code>원본 이메일: [이메일 내용 붙여넣기]
회신 목적: 요청 사항 수락 및 일정 확인
포함 내용:
- 요청 사항 수락
- 구체적 일정 안내 (5/15~5/20)
- 추가 필요 자료 안내
톤: 협조적, 격식체</code></pre>

<h4>3. 공지 이메일</h4>
<pre><code>수신자: 발전운영본부 전 직원
목적: 하계 안전 특별 점검 안내
포함 내용:
- 점검 기간: 2026.6.1~6.30
- 점검 대상: 전 설비
- 부서별 점검 담당자 지정 요청
- 점검 결과 보고 기한
톤: 공식적, 간결</code></pre>

<h3>이메일 톤 조절</h3>
<p>같은 내용이라도 톤에 따라 이메일의 인상이 크게 달라집니다.</p>
<ul>
<li><strong>격식체 (Formal)</strong>: "~에 대하여 알려드리고자 합니다", "검토하여 주시기 바랍니다"</li>
<li><strong>비즈니스 캐주얼</strong>: "~에 대해 안내드립니다", "확인 부탁드립니다"</li>
<li><strong>영문 이메일</strong>: AI에게 "이 이메일을 비즈니스 영문으로 작성해주세요"라고 요청하면 자연스러운 영어 이메일을 생성합니다.</li>
</ul>

<h3>이메일 템플릿 관리</h3>
<div class="tip-box">
<strong>실전 팁:</strong> 자주 보내는 이메일 유형(정기 보고, 미팅 요청, 자료 요청, 안전 공지 등)은 프롬프트 템플릿으로 만들어두면 매번 처음부터 작성할 필요가 없습니다. AI에게 "이전에 만든 템플릿을 참고하여 이번 달 내용으로 업데이트해주세요"라고 요청하면 됩니다.
</div>

<h3>팔로업 이메일 관리</h3>
<p>보낸 이메일에 대한 후속 조치 관리도 AI가 도울 수 있습니다.</p>
<ul>
<li>"지난주 보낸 자료 요청 이메일에 대한 리마인더 이메일을 작성해주세요. 정중하면서도 긴급성을 전달해주세요."</li>
<li>"3일간 답변이 없는 경우 보낼 팔로업 이메일을 작성해주세요."</li>
</ul>

<div class="warning-box">
<strong>주의사항:</strong> AI가 생성한 이메일에는 수신자 이름, 날짜, 금액 등의 구체적 정보가 정확한지 반드시 확인하세요. 또한 사내 보안 규정에 따라 민감한 정보가 포함되지 않았는지 점검하세요.
</div>
`,
    quizzes: [
      {
        question: 'AI로 비즈니스 이메일을 작성할 때 프롬프트에 반드시 포함해야 할 요소는?',
        options: [
          'AI 모델의 버전 번호',
          '수신자, 목적, 포함 내용, 톤 지정',
          '이메일 서버 주소',
          '수신자의 이메일 비밀번호',
        ],
        correctIndex: 1,
        explanation: 'AI에게 이메일 작성을 요청할 때는 수신자가 누구인지, 어떤 목적인지, 어떤 내용을 포함할지, 어떤 톤으로 작성할지를 명시해야 적절한 이메일이 생성됩니다.',
      },
      {
        question: 'AI가 생성한 이메일을 발송하기 전에 가장 중요하게 확인해야 할 것은?',
        options: [
          'AI 서비스 이용 요금',
          '이메일 폰트 크기',
          '수신자 이름, 날짜, 금액 등 구체적 정보의 정확성',
          '이메일 본문의 글자 수',
        ],
        correctIndex: 2,
        explanation: 'AI가 생성한 이메일에서 수신자 이름, 날짜, 금액 등 구체적 정보는 AI가 잘못 생성했을 수 있으므로 반드시 정확성을 확인해야 합니다.',
      },
    ],
  },

  // ── 5. 회의록 AI 정리 ──
  {
    id: 'meeting-ai',
    categoryId: 'business',
    title: '회의록 AI 정리',
    titleEn: 'Meeting Minutes AI',
    estimatedMinutes: 16,
    sortOrder: 5,
    content: `
<h2>AI를 활용한 회의록 정리</h2>
<p>회의록 작성은 많은 시간이 소요되는 업무입니다. AI를 활용하면 회의 내용을 체계적으로 정리하고, 핵심 결정사항과 Action Items를 자동으로 추출할 수 있습니다.</p>

<h3>회의록 AI 정리 워크플로우</h3>
<ol>
<li><strong>녹음</strong>: 회의 내용을 녹음합니다 (참석자 동의 필수)</li>
<li><strong>STT (Speech-to-Text)</strong>: 음성을 텍스트로 변환합니다</li>
<li><strong>AI 정리</strong>: 변환된 텍스트를 AI에게 회의록 형식으로 정리 요청</li>
<li><strong>검토 및 보완</strong>: 정리된 회의록을 검토하고 보완합니다</li>
<li><strong>배포</strong>: 확정된 회의록을 참석자에게 배포합니다</li>
</ol>

<h3>STT(음성-텍스트 변환) 도구 비교</h3>
<table>
<thead>
<tr><th>도구</th><th>한국어 지원</th><th>정확도</th><th>가격</th><th>특징</th></tr>
</thead>
<tbody>
<tr><td><strong>Whisper (OpenAI)</strong></td><td>우수</td><td>높음</td><td>무료(오픈소스)/API 유료</td><td>다국어 지원, 로컬 실행 가능</td></tr>
<tr><td><strong>Clova Note (네이버)</strong></td><td>최고</td><td>매우 높음</td><td>무료(제한적)/유료</td><td>한국어 최적화, 화자 구분, 모바일 앱</td></tr>
<tr><td><strong>Otter.ai</strong></td><td>제한적</td><td>높음(영어)</td><td>무료(제한적)/유료</td><td>실시간 변환, Zoom/Teams 통합</td></tr>
<tr><td><strong>Google STT</strong></td><td>우수</td><td>높음</td><td>API 사용량 기반</td><td>Google 생태계 통합, 실시간 스트리밍</td></tr>
</tbody>
</table>

<h3>회의록 정리 프롬프트</h3>
<pre><code>다음은 회의 녹취를 텍스트로 변환한 내용입니다. 이를 아래 형식의 회의록으로 정리해주세요.

[회의 정보]
- 회의명: (내용에서 추론)
- 일시: 2026년 4월 23일
- 장소: 보령화력 회의실
- 참석자: (대화에서 추출)

[회의록 형식]
1. 회의 개요 (2~3줄 요약)
2. 주요 논의사항 (항목별 정리)
3. 결정사항 (명확한 결정 내용)
4. Action Items (담당자, 기한 포함)
   - [ ] 담당자: OOO, 기한: YYYY-MM-DD, 내용: ~~~
5. 차기 회의 일정 (언급된 경우)

주의: 추측하지 말고, 실제 대화 내용에서 확인 가능한 것만 기록하세요.

---
[녹취 텍스트]
(여기에 STT 변환 텍스트를 붙여넣습니다)</code></pre>

<h3>Action Item 자동 추출</h3>
<p>AI는 회의 내용에서 자동으로 Action Items를 식별할 수 있습니다. "~해야 한다", "~까지 완료", "~담당" 등의 표현을 인식하여 담당자, 기한, 구체적 내용을 구조화합니다.</p>

<h3>팔로업 이메일 자동 생성</h3>
<p>회의록이 정리되면, AI에게 팔로업 이메일을 자동으로 생성하도록 요청할 수 있습니다.</p>
<pre><code>위 회의록을 바탕으로 전체 참석자에게 보낼 팔로업 이메일을 작성해주세요.
포함 내용:
- 회의 핵심 요약 (3줄 이내)
- 결정사항 목록
- 각 담당자별 Action Items와 기한
- 다음 회의 일정 안내 (있는 경우)
톤: 간결하고 전문적</code></pre>

<h3>회의록 자동화 시스템 구축</h3>
<div class="tip-box">
<strong>한국중부발전 활용 팁:</strong>
<ul>
<li>정기 안전 회의, 설비 점검 회의 등 반복 회의는 회의록 템플릿을 만들어두면 일관성이 유지됩니다.</li>
<li>Clova Note는 한국어 인식 정확도가 가장 높으므로 한국어 회의에 추천합니다.</li>
<li>Action Items에 자동 알림을 연결하면 후속 조치 누락을 방지할 수 있습니다.</li>
<li>Microsoft Teams를 사용한다면 Teams 자체 녹화 + Copilot 요약 기능을 활용할 수도 있습니다.</li>
</ul>
</div>

<div class="warning-box">
<strong>녹음 주의사항:</strong> 회의 녹음은 반드시 참석자 전원의 동의를 받아야 합니다. 개인정보보호법에 따라 타인의 음성을 무단 녹음하는 것은 법적 문제가 될 수 있습니다. 녹음 시작 전에 "회의록 작성을 위해 녹음합니다"라고 안내하세요.
</div>

<blockquote>AI 회의록 정리를 도입하면 회의록 작성에 걸리던 30분~1시간이 5분으로 단축됩니다. 절약된 시간을 실제 업무와 의사결정에 집중할 수 있습니다.</blockquote>
`,
    quizzes: [
      {
        question: '한국어 회의 녹음을 텍스트로 변환(STT)할 때 가장 추천되는 도구는?',
        options: ['Otter.ai', 'Clova Note', 'Siri 받아쓰기', 'Dragon NaturallySpeaking'],
        correctIndex: 1,
        explanation: 'Clova Note(네이버)는 한국어 음성 인식에 최적화되어 있어 한국어 회의 녹음의 텍스트 변환에 가장 높은 정확도를 보입니다.',
      },
      {
        question: 'AI 회의록 정리 시 Action Items에 반드시 포함해야 할 정보는?',
        options: [
          '회의실 좌석 배치도',
          '담당자와 기한',
          'AI 서비스 이용 비용',
          '참석자의 직급 순서',
        ],
        correctIndex: 1,
        explanation: 'Action Items에는 누가(담당자), 언제까지(기한), 무엇을(구체적 내용) 해야 하는지가 명확히 포함되어야 후속 조치가 제대로 이행됩니다.',
      },
    ],
  },

  // ── 6. 발전소 AI 활용 사례 ──
  {
    id: 'power-plant',
    categoryId: 'business',
    title: '발전소 AI 활용 사례',
    titleEn: 'Power Plant AI Cases',
    estimatedMinutes: 20,
    sortOrder: 6,
    content: `
<h2>발전소에서의 AI 활용</h2>
<p>발전산업은 AI 기술의 적용 효과가 가장 큰 분야 중 하나입니다. 설비의 안정적 운영, 효율 극대화, 안전 확보, 환경 규제 준수 등 다양한 영역에서 AI가 실질적 가치를 제공하고 있습니다.</p>

<h3>발전소 AI 활용 분야 종합표</h3>
<table>
<thead>
<tr><th>활용 분야</th><th>AI 기술</th><th>핵심 효과</th><th>적용 사례</th></tr>
</thead>
<tbody>
<tr><td>예측 정비</td><td>머신러닝, 시계열 분석</td><td>비계획 정지 50~70% 감소</td><td>터빈·보일러 이상 징후 사전 감지</td></tr>
<tr><td>발전량 최적화</td><td>강화학습, 최적화 알고리즘</td><td>연료 효율 3~5% 향상</td><td>연소 최적화, 출력 스케줄링</td></tr>
<tr><td>안전 관리</td><td>컴퓨터 비전, 영상 분석</td><td>안전사고 발생률 감소</td><td>안전장비 착용 감지, 위험 구역 침입 탐지</td></tr>
<tr><td>환경 관리</td><td>예측 모델, 실시간 분석</td><td>환경 규제 위반 사전 방지</td><td>배출가스 농도 예측 및 제어</td></tr>
<tr><td>디지털 트윈</td><td>시뮬레이션, 3D 모델링</td><td>운영 시나리오 가상 검증</td><td>가상 모델 기반 최적 운전 조건 탐색</td></tr>
<tr><td>스마트 그리드</td><td>수요 예측, 부하 분산</td><td>전력 공급 안정화</td><td>전력 수요 예측 및 최적 발전 스케줄링</td></tr>
</tbody>
</table>

<h3>1. 예측 정비 (Predictive Maintenance)</h3>
<p>예측 정비는 발전소 AI 활용의 가장 대표적인 사례입니다. 기존의 시간 기반 정비(TBM) 대신, AI가 설비 데이터를 분석하여 <strong>고장이 발생하기 전에</strong> 최적의 정비 시점을 예측합니다.</p>
<h4>작동 원리</h4>
<ol>
<li><strong>데이터 수집</strong>: 진동, 온도, 압력, 유량 센서에서 실시간 데이터 수집</li>
<li><strong>패턴 학습</strong>: 정상 운전 상태의 데이터 패턴을 AI가 학습</li>
<li><strong>이상 감지</strong>: 정상 패턴에서 벗어나는 미세한 변화를 조기에 감지</li>
<li><strong>고장 예측</strong>: 과거 고장 사례와 비교하여 잔여 수명(RUL) 예측</li>
<li><strong>정비 권고</strong>: 최적의 정비 시점과 필요한 작업을 제안</li>
</ol>

<div class="tip-box">
<strong>실제 효과:</strong> 글로벌 발전사들은 AI 예측 정비 도입 후 비계획 정지(Unplanned Outage)를 50~70% 감소시키고, 정비 비용을 20~30% 절감한 사례를 보고하고 있습니다.
</div>

<h3>2. 발전량 최적화</h3>
<p>AI가 기상 데이터, 전력 수요 예측, 연료 가격, 설비 상태 등을 종합 분석하여 발전량을 최적화합니다.</p>
<ul>
<li><strong>연소 최적화</strong>: 보일러의 연소 조건(공기량, 연료량, 온도 등)을 AI가 실시간 최적화하여 연료 효율을 높입니다.</li>
<li><strong>출력 스케줄링</strong>: 전력 수요 예측에 기반하여 각 발전기의 출력을 최적화합니다.</li>
<li><strong>신재생에너지 통합</strong>: 태양광·풍력의 간헐적 발전량을 예측하고 화력 발전과의 최적 조합을 계산합니다.</li>
</ul>

<h3>3. 안전 관리</h3>
<p>발전소의 안전은 최우선 가치입니다. AI 기반 안전 관리 시스템은 사고를 사전에 예방합니다.</p>
<ul>
<li><strong>안전장비 감지</strong>: 작업자가 안전모, 안전화, 안전대 등을 올바르게 착용했는지 AI가 CCTV 영상으로 자동 확인</li>
<li><strong>위험 구역 침입 탐지</strong>: 비인가자의 위험 구역 진입을 실시간 감지하고 알림</li>
<li><strong>이상 행동 감지</strong>: 쓰러짐, 넘어짐, 비정상 동작 등을 감지하여 즉시 대응</li>
</ul>

<h3>4. 환경 모니터링</h3>
<p>배출가스(SOx, NOx, 미세먼지 등)의 농도를 AI가 실시간 모니터링하고, 규제 기준 초과를 사전에 예측하여 대응합니다.</p>
<ul>
<li>배출가스 농도 추이를 AI가 분석하여 기준치 초과 가능 시점을 사전 경고</li>
<li>연소 조건 조정을 통한 배출량 최소화 방안을 AI가 제안</li>
<li>환경 보고서 데이터를 자동으로 수집하고 보고서를 생성</li>
</ul>

<h3>5. 디지털 트윈 (Digital Twin)</h3>
<p>디지털 트윈은 실제 발전 설비와 동일한 가상 모델을 만들어, 다양한 운전 시나리오를 시뮬레이션하는 기술입니다.</p>
<ul>
<li><strong>가상 시뮬레이션</strong>: 실제 설비에 영향 없이 운전 조건 변경의 효과를 사전 검증</li>
<li><strong>운전원 교육</strong>: 가상 환경에서 비상 상황 대응 훈련</li>
<li><strong>설비 수명 예측</strong>: 장기 운전 데이터를 기반으로 설비 수명을 시뮬레이션</li>
</ul>

<h3>6. 스마트 그리드와 AI</h3>
<p>스마트 그리드는 전력 생산부터 소비까지 전 과정을 ICT 기술로 지능화한 차세대 전력망입니다. AI는 스마트 그리드의 핵심 기술로 활용됩니다.</p>
<ul>
<li><strong>전력 수요 예측</strong>: 기상, 계절, 요일, 시간대별 전력 수요를 AI가 정밀 예측</li>
<li><strong>부하 분산</strong>: 발전소 간 최적 부하 배분을 AI가 계산</li>
<li><strong>에너지 저장 최적화</strong>: ESS(에너지저장장치) 충·방전 시점을 AI가 결정</li>
</ul>

<h3>KOMIPO AI 적용 로드맵</h3>
<div class="info-box">
<strong>한국중부발전 적용 로드맵 제안:</strong>
<ol>
<li><strong>1단계 (즉시)</strong>: 기존 센서 데이터 기반 이상 감지 시스템 도입</li>
<li><strong>2단계 (6개월)</strong>: AI 예측 정비 시스템 파일럿 적용 (주요 설비 대상)</li>
<li><strong>3단계 (1년)</strong>: 연소 최적화 AI 도입 및 안전 관리 AI 확대</li>
<li><strong>4단계 (2년)</strong>: 통합 디지털 트윈 플랫폼 구축</li>
</ol>
</div>

<div class="warning-box">
<strong>도입 시 주의사항:</strong> AI 시스템은 기존 운전원의 경험과 판단을 대체하는 것이 아니라 보완하는 것입니다. 최종 의사결정은 반드시 숙련된 운전원이 수행해야 하며, AI의 판단에 대한 설명 가능성(Explainability)이 확보되어야 합니다.
</div>

<blockquote>발전소의 AI 도입은 "비용 절감"을 넘어 "안전 확보"와 "환경 규제 준수"라는 본질적 가치를 실현합니다. 작은 파일럿 프로젝트부터 시작하여 점진적으로 확대하는 것이 성공의 열쇠입니다.</blockquote>
`,
    quizzes: [
      {
        question: 'AI 예측 정비(Predictive Maintenance)의 주요 효과는?',
        options: [
          '설비를 더 자주 정비한다',
          '고장이 발생한 후 빠르게 수리한다',
          '비계획 정지를 사전에 예방하고 정비 비용을 절감한다',
          '정비 인력을 완전히 대체한다',
        ],
        correctIndex: 2,
        explanation: 'AI 예측 정비는 센서 데이터를 분석하여 고장이 발생하기 전에 최적의 정비 시점을 예측합니다. 이를 통해 비계획 정지를 50~70% 감소시키고, 정비 비용을 20~30% 절감할 수 있습니다.',
      },
      {
        question: '발전소에서 디지털 트윈(Digital Twin)의 활용 사례가 아닌 것은?',
        options: [
          '운전 조건 변경의 효과를 가상 시뮬레이션',
          '비상 상황 대응 훈련',
          'SNS 마케팅 캠페인 관리',
          '설비 수명 예측 시뮬레이션',
        ],
        correctIndex: 2,
        explanation: '디지털 트윈은 실제 설비의 가상 모델을 만들어 운전 시뮬레이션, 비상 훈련, 수명 예측 등에 활용됩니다. SNS 마케팅은 발전소 디지털 트윈의 활용 사례가 아닙니다.',
      },
    ],
  },
];

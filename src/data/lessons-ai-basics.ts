import type { LessonData } from './lessons';

export const LESSONS_AI_BASICS: LessonData[] = [
  // ── 1. 인공지능(AI)이란? ──
  {
    id: 'ai-what',
    categoryId: 'ai-basics',
    title: '인공지능(AI)이란?',
    titleEn: 'What is AI?',
    estimatedMinutes: 15,
    sortOrder: 1,
    content: `
<h2>1. 인공지능(AI)의 정의</h2>
<p>
  <strong>인공지능(Artificial Intelligence, AI)</strong>이란 인간의 학습 능력, 추론 능력, 지각 능력, 판단 능력 등
  고차원적인 지적 활동을 컴퓨터 시스템으로 구현하는 기술을 총칭합니다. 쉽게 말하면, 사람처럼 생각하고 배우고
  판단할 수 있는 컴퓨터 프로그램을 만드는 것이 AI의 목표입니다.
</p>
<p>
  AI는 단순히 프로그래밍된 규칙을 따르는 것이 아니라, <em>데이터로부터 패턴을 스스로 학습</em>하고,
  새로운 상황에서 적절한 판단을 내리는 것이 핵심입니다. 예를 들어, 발전소 설비의 진동 데이터를 분석하여
  고장 징후를 미리 감지하거나, 기상 데이터를 바탕으로 최적의 발전량을 예측하는 것이 AI의 실제 활용 사례입니다.
</p>

<div class="info-box">
  <strong>참고:</strong> AI(Artificial Intelligence)라는 용어는 1956년 미국 다트머스 대학교에서 열린
  학술 회의에서 존 매카시(John McCarthy) 교수가 처음 제안했습니다. 이 회의는 AI 역사의 공식적인 출발점으로
  여겨집니다.
</div>

<h2>2. AI의 분류: 약한 AI, 강한 AI, 초지능 AI</h2>
<p>
  AI는 지능의 범위와 수준에 따라 크게 세 가지로 분류됩니다. 현재 우리가 일상에서 접하는 모든 AI는
  <strong>약한 AI(Narrow AI)</strong>에 해당하며, 강한 AI와 초지능 AI는 아직 이론적 단계에 머물러 있습니다.
</p>

<table>
  <thead>
    <tr>
      <th>구분</th>
      <th>약한 AI (Narrow AI)</th>
      <th>강한 AI (General AI / AGI)</th>
      <th>초지능 AI (Super AI / ASI)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>정의</strong></td>
      <td>특정 작업에 특화된 AI</td>
      <td>인간과 동등한 범용 지능</td>
      <td>인간을 초월하는 지능</td>
    </tr>
    <tr>
      <td><strong>현재 상태</strong></td>
      <td>상용화 완료</td>
      <td>연구 진행 중</td>
      <td>이론적 개념</td>
    </tr>
    <tr>
      <td><strong>예시</strong></td>
      <td>ChatGPT, 번역기, 자율주행, 음성비서</td>
      <td>영화 속 AI (아이언맨 자비스)</td>
      <td>공상과학 소설 수준</td>
    </tr>
    <tr>
      <td><strong>학습 범위</strong></td>
      <td>훈련된 특정 영역만 수행</td>
      <td>모든 지적 작업 수행 가능</td>
      <td>모든 영역에서 인간 초월</td>
    </tr>
    <tr>
      <td><strong>자의식</strong></td>
      <td>없음</td>
      <td>가능성 논의 중</td>
      <td>이론적으로 가능</td>
    </tr>
  </tbody>
</table>

<div class="tip-box">
  <strong>팁:</strong> 2024년 이후 ChatGPT, Claude 등 생성형 AI가 매우 뛰어난 능력을 보이지만,
  이들도 여전히 '약한 AI'에 해당합니다. 다양한 작업을 수행할 수 있지만, 진정한 이해나 자의식은
  갖고 있지 않기 때문입니다.
</div>

<h2>3. AI의 역사: 탄생에서 생성형 AI까지</h2>

<h3>3-1. 태동기 (1950s~1960s)</h3>
<p>
  1950년 앨런 튜링(Alan Turing)이 "기계가 생각할 수 있는가?"라는 질문을 던지며 <strong>튜링 테스트</strong>를
  제안했습니다. 1956년 다트머스 회의에서 AI 연구가 공식 시작되었고, 초기에는 논리 추론과 규칙 기반 시스템
  (전문가 시스템)이 주류를 이루었습니다.
</p>

<h3>3-2. AI 겨울 (1970s~1980s, 1990s)</h3>
<p>
  과도한 기대와 달리 기술적 한계가 드러나면서 AI 연구 투자가 크게 줄어든 시기입니다. 두 차례의 AI 겨울을
  거치면서 많은 연구자들이 AI 분야를 떠났지만, 일부 핵심 연구는 계속 이어졌습니다.
</p>

<h3>3-3. 머신러닝 부흥기 (2000s~2010s)</h3>
<p>
  빅데이터와 GPU 컴퓨팅의 발전으로 머신러닝, 특히 <strong>딥러닝</strong>이 비약적으로 발전했습니다.
  2012년 AlexNet이 이미지 인식 대회(ImageNet)에서 압도적인 성능을 보이며 딥러닝 시대가 열렸고,
  2016년 AlphaGo가 바둑에서 이세돌 9단을 이기며 전 세계에 AI의 가능성을 보여주었습니다.
</p>

<h3>3-4. 생성형 AI 시대 (2020s~)</h3>
<p>
  2017년 구글이 발표한 <strong>Transformer 아키텍처</strong>를 기반으로 GPT, BERT 등 대규모 언어 모델(LLM)이
  등장했습니다. 2022년 11월 ChatGPT 출시로 생성형 AI가 대중화되었고, 현재 텍스트, 이미지, 코드, 음성 등
  거의 모든 영역에서 AI가 콘텐츠를 생성할 수 있게 되었습니다.
</p>

<h2>4. AI 기술의 구성 요소</h2>
<p>AI는 하나의 기술이 아니라 여러 세부 기술의 집합체입니다. 주요 구성 요소는 다음과 같습니다.</p>

<ul>
  <li>
    <strong>머신러닝 (Machine Learning, ML)</strong>: 데이터에서 패턴을 학습하여 예측과 판단을 수행하는 기술.
    AI의 핵심 기반 기술입니다.
  </li>
  <li>
    <strong>딥러닝 (Deep Learning, DL)</strong>: 인공 신경망을 여러 층으로 쌓아 복잡한 패턴을 학습하는 머신러닝의
    한 분야. 이미지 인식, 음성 인식, 자연어 처리 등에서 탁월한 성능을 보입니다.
  </li>
  <li>
    <strong>자연어 처리 (Natural Language Processing, NLP)</strong>: 인간의 언어를 컴퓨터가 이해하고 생성하는 기술.
    ChatGPT, Claude 같은 대화형 AI의 핵심 기술입니다.
  </li>
  <li>
    <strong>컴퓨터 비전 (Computer Vision, CV)</strong>: 이미지와 영상을 컴퓨터가 인식하고 분석하는 기술.
    발전소에서는 설비 외관 검사, 안전 모니터링 등에 활용됩니다.
  </li>
  <li>
    <strong>로보틱스 (Robotics)</strong>: AI를 탑재한 로봇이 물리적 환경에서 작업을 수행하는 기술.
    위험한 발전소 환경에서의 무인 점검 등에 활용 가능합니다.
  </li>
</ul>

<h2>5. 발전소 업무에서의 AI 활용 사례</h2>
<p>
  한국중부발전과 같은 발전 기업에서 AI는 이미 다양한 영역에서 핵심 기술로 자리잡고 있습니다.
</p>

<h4>설비 예측 정비 (Predictive Maintenance)</h4>
<p>
  터빈, 보일러, 발전기 등 주요 설비에 부착된 센서에서 수집되는 진동, 온도, 압력 데이터를
  AI가 실시간으로 분석하여 고장 징후를 조기에 감지합니다. 이를 통해 계획되지 않은 정지(Unplanned Outage)를
  방지하고 정비 비용을 절감할 수 있습니다.
</p>

<h4>발전 효율 최적화</h4>
<p>
  AI가 연료 투입량, 기상 조건, 전력 수요 등 복합적인 변수를 분석하여 최적의 운전 조건을 실시간으로
  추천합니다. 이를 통해 연료비를 절감하고 발전 효율을 극대화할 수 있습니다.
</p>

<h4>안전 관리</h4>
<p>
  CCTV 영상에 컴퓨터 비전 AI를 적용하여 작업자의 안전장구 착용 여부 감지, 위험 구역 무단 접근 경고,
  화재 및 이상 징후 감지 등을 자동으로 수행합니다.
</p>

<h4>환경 모니터링</h4>
<p>
  배출 가스 데이터, 수질 데이터 등을 AI가 실시간 분석하여 환경 규제 기준 초과 가능성을
  사전에 경고하고, 최적의 운전 조건을 추천합니다.
</p>

<blockquote>
  AI는 발전소의 안전성, 효율성, 경제성을 동시에 향상시킬 수 있는 핵심 기술입니다.
  직원 여러분이 AI의 기본 개념을 이해하면, 현장에서의 AI 도입과 활용에 더욱 적극적으로
  참여할 수 있습니다.
</blockquote>
`,
    quizzes: [
      {
        question: '현재 상용화되어 일상에서 사용하고 있는 AI(예: ChatGPT, 번역기, 음성비서)는 다음 중 어떤 유형에 해당하나요?',
        options: [
          '강한 AI (General AI)',
          '약한 AI (Narrow AI)',
          '초지능 AI (Super AI)',
          '양자 AI (Quantum AI)',
        ],
        correctIndex: 1,
        explanation:
          '현재 상용화된 모든 AI 시스템(ChatGPT, Siri, 번역기 등)은 특정 작업에 특화된 약한 AI(Narrow AI)에 해당합니다. 강한 AI(AGI)와 초지능 AI(ASI)는 아직 실현되지 않은 개념입니다.',
      },
      {
        question: '다음 중 AI 기술의 구성 요소와 그 설명이 올바르게 연결된 것은?',
        options: [
          'NLP — 이미지와 영상을 인식하는 기술',
          '컴퓨터 비전 — 인간의 언어를 이해하는 기술',
          '딥러닝 — 인공 신경망을 여러 층으로 쌓아 학습하는 기술',
          '로보틱스 — 데이터에서 패턴을 학습하는 기술',
        ],
        correctIndex: 2,
        explanation:
          '딥러닝(Deep Learning)은 인공 신경망을 여러 층(layer)으로 쌓아 복잡한 패턴을 학습하는 머신러닝의 한 분야입니다. NLP는 자연어 처리, 컴퓨터 비전은 이미지/영상 인식, 로보틱스는 로봇 기술입니다.',
      },
    ],
  },

  // ── 2. 머신러닝과 딥러닝 ──
  {
    id: 'ml-dl',
    categoryId: 'ai-basics',
    title: '머신러닝과 딥러닝',
    titleEn: 'Machine Learning & Deep Learning',
    estimatedMinutes: 18,
    sortOrder: 2,
    content: `
<h2>1. 머신러닝(Machine Learning) 개요</h2>
<p>
  <strong>머신러닝(ML)</strong>은 컴퓨터가 명시적으로 프로그래밍되지 않아도, 데이터를 통해 스스로 학습하고
  성능을 개선하는 AI의 핵심 분야입니다. 전통적인 프로그래밍에서는 사람이 규칙을 직접 코딩하지만,
  머신러닝에서는 데이터를 입력하면 컴퓨터가 스스로 규칙(패턴)을 찾아냅니다.
</p>

<div class="info-box">
  <strong>전통적 프로그래밍 vs 머신러닝:</strong><br/>
  - 전통적 프로그래밍: <code>규칙 + 데이터 → 결과</code><br/>
  - 머신러닝: <code>데이터 + 결과 → 규칙(모델)</code>
</div>

<h2>2. 머신러닝의 3가지 유형</h2>

<h3>2-1. 지도학습 (Supervised Learning)</h3>
<p>
  <strong>정답(레이블)</strong>이 있는 데이터셋으로 모델을 학습시키는 방법입니다. 입력 데이터와 그에 대응하는
  정답을 함께 제공하여, 모델이 입력으로부터 정답을 예측하는 규칙을 학습합니다.
</p>
<ul>
  <li><strong>분류(Classification)</strong>: 이메일이 스팸인지 아닌지 판별, 설비 상태가 정상/주의/위험인지 분류</li>
  <li><strong>회귀(Regression)</strong>: 내일의 전력 수요량 예측, 설비의 잔존 수명 예측</li>
</ul>
<p>
  <em>발전소 적용 사례:</em> 과거 설비 운전 데이터(온도, 압력, 진동 등)와 고장 기록을 학습시켜,
  현재 설비 데이터로부터 고장 가능성을 예측하는 모델을 만들 수 있습니다.
</p>

<h3>2-2. 비지도학습 (Unsupervised Learning)</h3>
<p>
  정답 없이 데이터의 숨겨진 구조나 패턴을 스스로 발견하는 학습 방법입니다.
</p>
<ul>
  <li><strong>군집화(Clustering)</strong>: 유사한 운전 패턴끼리 그룹화, 고객 세그먼트 분류</li>
  <li><strong>차원 축소(Dimensionality Reduction)</strong>: 수천 개의 센서 데이터를 핵심 변수로 압축</li>
  <li><strong>이상 탐지(Anomaly Detection)</strong>: 정상 범위를 벗어나는 이상 패턴 자동 감지</li>
</ul>
<p>
  <em>발전소 적용 사례:</em> 수백 개의 센서 데이터 중 정상 운전 범위를 벗어나는 이상 패턴을
  자동으로 감지하여 운전원에게 경고를 보내는 시스템에 활용됩니다.
</p>

<h3>2-3. 강화학습 (Reinforcement Learning)</h3>
<p>
  에이전트(Agent)가 환경(Environment)과 상호작용하면서 <strong>보상(Reward)</strong>을 최대화하는 방향으로
  행동 전략을 학습하는 방법입니다. 시행착오를 통해 최적의 전략을 찾아갑니다.
</p>
<ul>
  <li><strong>게임 AI</strong>: AlphaGo, 게임 플레이 AI</li>
  <li><strong>로봇 제어</strong>: 로봇의 보행, 물건 잡기 등</li>
  <li><strong>자원 최적화</strong>: 발전소 연료 투입 최적화, 데이터센터 냉각 최적화</li>
</ul>
<p>
  <em>발전소 적용 사례:</em> 구글 DeepMind는 강화학습으로 데이터센터 냉각 에너지를 40% 절감했습니다.
  유사한 기법으로 발전소의 보일러 연소 효율을 최적화할 수 있습니다.
</p>

<div class="tip-box">
  <strong>팁:</strong> 발전소에서 가장 많이 활용되는 머신러닝 유형은 <strong>지도학습</strong>(설비 고장 예측)과
  <strong>비지도학습</strong>(이상 탐지)입니다. 강화학습은 운전 최적화 분야에서 점차 적용이 확대되고 있습니다.
</div>

<h2>3. 딥러닝(Deep Learning)의 이해</h2>
<p>
  <strong>딥러닝</strong>은 인간 뇌의 뉴런(신경세포) 구조를 모방한 <strong>인공 신경망(Artificial Neural Network)</strong>을
  여러 층(layer)으로 깊게 쌓아 복잡한 패턴을 학습하는 기술입니다. "딥(Deep)"이라는 이름은 신경망의 층이
  깊다(많다)는 뜻에서 유래했습니다.
</p>

<h3>3-1. 신경망의 기본 구조</h3>
<ul>
  <li><strong>입력층 (Input Layer)</strong>: 원본 데이터를 받아들이는 층. 예) 이미지의 픽셀 값, 센서 측정값</li>
  <li><strong>은닉층 (Hidden Layers)</strong>: 데이터의 특징을 추출하고 변환하는 중간 층. 층이 많을수록 더 복잡한 패턴을 학습할 수 있습니다.</li>
  <li><strong>출력층 (Output Layer)</strong>: 최종 결과를 출력하는 층. 예) "정상/이상" 분류 결과, 예측 수치</li>
</ul>

<h3>3-2. 주요 딥러닝 아키텍처</h3>
<p>용도에 따라 다양한 딥러닝 구조가 발전해 왔습니다.</p>

<h4>CNN (Convolutional Neural Network) - 합성곱 신경망</h4>
<p>
  이미지 처리에 특화된 구조입니다. 이미지에서 가장자리, 형태, 질감 등의 특징을 자동으로 추출합니다.
  발전소에서는 설비 외관 사진으로 균열이나 부식을 자동 감지하는 데 활용됩니다.
</p>

<h4>RNN (Recurrent Neural Network) - 순환 신경망</h4>
<p>
  시계열 데이터(시간 순서가 있는 데이터)를 처리하는 데 적합합니다. 과거의 정보를 기억하여 다음 값을 예측합니다.
  설비 센서의 시간별 데이터 분석, 전력 수요 예측 등에 활용됩니다.
</p>

<h4>Transformer</h4>
<p>
  2017년 구글이 발표한 혁신적 아키텍처로, <strong>Self-Attention</strong> 메커니즘을 통해 입력 데이터의
  모든 부분 간 관계를 동시에 파악합니다. GPT, Claude, Gemini 등 현재 대부분의 LLM은
  Transformer 아키텍처를 기반으로 합니다.
</p>

<h2>4. 머신러닝 vs 딥러닝 비교</h2>

<table>
  <thead>
    <tr>
      <th>비교 항목</th>
      <th>머신러닝 (ML)</th>
      <th>딥러닝 (DL)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>데이터 요구량</strong></td>
      <td>상대적으로 적은 데이터로 가능</td>
      <td>대량의 데이터가 필요</td>
    </tr>
    <tr>
      <td><strong>특성 추출</strong></td>
      <td>사람이 직접 설계 (Feature Engineering)</td>
      <td>모델이 자동으로 특성 추출</td>
    </tr>
    <tr>
      <td><strong>컴퓨팅 자원</strong></td>
      <td>일반 CPU로도 학습 가능</td>
      <td>GPU/TPU 등 고성능 하드웨어 필요</td>
    </tr>
    <tr>
      <td><strong>해석 가능성</strong></td>
      <td>비교적 해석이 용이 (결정트리 등)</td>
      <td>블랙박스 — 해석이 어려움</td>
    </tr>
    <tr>
      <td><strong>적용 분야</strong></td>
      <td>정형 데이터 (엑셀, DB 테이블)</td>
      <td>비정형 데이터 (이미지, 텍스트, 음성)</td>
    </tr>
    <tr>
      <td><strong>대표 알고리즘</strong></td>
      <td>결정트리, SVM, 랜덤포레스트, XGBoost</td>
      <td>CNN, RNN, Transformer, GAN</td>
    </tr>
    <tr>
      <td><strong>관계</strong></td>
      <td>AI의 하위 분야</td>
      <td>머신러닝의 하위 분야</td>
    </tr>
  </tbody>
</table>

<div class="warning-box">
  <strong>주의:</strong> 딥러닝이 항상 머신러닝보다 나은 것은 아닙니다.
  데이터가 적거나 정형 데이터를 다룰 때는 전통적인 머신러닝(XGBoost, Random Forest 등)이
  더 좋은 성능을 보이는 경우가 많습니다. 발전소 센서 데이터처럼 정형 데이터가 많은 환경에서는
  두 접근법을 적절히 조합하는 것이 중요합니다.
</div>

<blockquote>
  AI ⊃ 머신러닝 ⊃ 딥러닝 — 딥러닝은 머신러닝의 한 종류이며, 머신러닝은 AI의 한 분야입니다.
  이 포함 관계를 기억하면 각 기술의 위치를 이해하기 쉽습니다.
</blockquote>
`,
    quizzes: [
      {
        question: '정답(레이블)이 없는 데이터에서 숨겨진 패턴이나 구조를 스스로 발견하는 머신러닝 유형은 무엇인가요?',
        options: [
          '지도학습 (Supervised Learning)',
          '비지도학습 (Unsupervised Learning)',
          '강화학습 (Reinforcement Learning)',
          '전이학습 (Transfer Learning)',
        ],
        correctIndex: 1,
        explanation:
          '비지도학습(Unsupervised Learning)은 레이블(정답)이 없는 데이터에서 군집화, 차원 축소, 이상 탐지 등을 통해 데이터의 숨겨진 구조나 패턴을 스스로 발견합니다.',
      },
      {
        question: '다음 중 머신러닝(ML)과 딥러닝(DL)의 차이점으로 올바른 것은?',
        options: [
          '딥러닝은 데이터 없이도 학습할 수 있다',
          '머신러닝은 비정형 데이터만 처리할 수 있다',
          '딥러닝은 모델이 자동으로 특성(Feature)을 추출하지만, 전통적 머신러닝은 사람이 특성을 설계해야 한다',
          '머신러닝은 GPU가 반드시 필요하지만, 딥러닝은 CPU만으로 충분하다',
        ],
        correctIndex: 2,
        explanation:
          '전통적 머신러닝에서는 사람이 직접 특성 공학(Feature Engineering)을 수행하지만, 딥러닝은 원시 데이터로부터 모델이 자동으로 중요한 특성을 추출합니다. 이것이 딥러닝의 핵심 장점 중 하나입니다.',
      },
    ],
  },

  // ── 3. 생성형 AI의 이해 ──
  {
    id: 'gen-ai',
    categoryId: 'ai-basics',
    title: '생성형 AI의 이해',
    titleEn: 'Understanding Generative AI',
    estimatedMinutes: 16,
    sortOrder: 3,
    content: `
<h2>1. 생성형 AI(Generative AI)의 정의</h2>
<p>
  <strong>생성형 AI</strong>란 학습한 데이터의 패턴을 기반으로 <em>새로운 콘텐츠</em>를 생성할 수 있는
  인공지능 기술을 말합니다. 기존의 AI가 주어진 데이터를 분류하거나 예측하는 데 초점을 맞추었다면,
  생성형 AI는 텍스트, 이미지, 코드, 음성, 영상 등 전혀 새로운 콘텐츠를 창작해 냅니다.
</p>
<p>
  생성형 AI의 핵심 원리는 <strong>확률 분포 학습</strong>입니다. 방대한 양의 데이터를 학습하여
  데이터의 통계적 패턴(확률 분포)을 파악하고, 이 패턴에 기반하여 새로운 데이터를 생성합니다.
  예를 들어, LLM은 수조 개의 단어 조합 패턴을 학습하여, 주어진 문맥에서 가장 자연스러운
  다음 단어(토큰)를 예측하는 방식으로 문장을 생성합니다.
</p>

<div class="info-box">
  <strong>판별형 AI vs 생성형 AI:</strong><br/>
  - <strong>판별형 AI(Discriminative AI)</strong>: "이 이메일은 스팸인가 아닌가?" — 분류/예측에 집중<br/>
  - <strong>생성형 AI(Generative AI)</strong>: "이 주제로 이메일을 작성해줘" — 새로운 콘텐츠 생성
</div>

<h2>2. 주요 생성형 AI 모델 비교</h2>
<p>
  2022년 ChatGPT 출시 이후, 글로벌 기업들이 경쟁적으로 강력한 생성형 AI 모델을 출시하고 있습니다.
  각 모델은 고유한 강점과 특성을 가지고 있어, 용도에 맞게 선택하여 활용하는 것이 효과적입니다.
</p>

<table>
  <thead>
    <tr>
      <th>모델명</th>
      <th>제작사</th>
      <th>주요 강점</th>
      <th>특징</th>
      <th>활용 추천 분야</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>GPT-4o / GPT-4.5</strong></td>
      <td>OpenAI</td>
      <td>범용성, 멀티모달</td>
      <td>가장 넓은 생태계, 플러그인 지원</td>
      <td>범용 업무, 코딩, 데이터 분석</td>
    </tr>
    <tr>
      <td><strong>Claude (Opus/Sonnet)</strong></td>
      <td>Anthropic</td>
      <td>장문 분석, 안전성, 코딩</td>
      <td>200K 토큰 컨텍스트, Constitutional AI</td>
      <td>문서 분석, 보고서 작성, 코드 개발</td>
    </tr>
    <tr>
      <td><strong>Gemini (Ultra/Pro)</strong></td>
      <td>Google</td>
      <td>멀티모달, Google 연동</td>
      <td>Google Workspace 통합, 검색 연동</td>
      <td>Google 생태계 활용, 리서치</td>
    </tr>
    <tr>
      <td><strong>Llama 3</strong></td>
      <td>Meta</td>
      <td>오픈소스, 커스터마이징</td>
      <td>무료 사용, 로컬 실행 가능</td>
      <td>자체 AI 시스템 구축, 연구</td>
    </tr>
    <tr>
      <td><strong>Grok</strong></td>
      <td>xAI</td>
      <td>실시간 정보, X(트위터) 연동</td>
      <td>실시간 데이터 접근</td>
      <td>최신 정보 검색, SNS 분석</td>
    </tr>
  </tbody>
</table>

<h2>3. 생성형 AI의 유형별 분류</h2>

<h3>3-1. 텍스트 생성 AI</h3>
<p>
  자연어로 된 텍스트를 생성하는 AI입니다. 보고서 작성, 이메일 작성, 번역, 요약, 질의응답 등에 활용됩니다.
  대표적으로 ChatGPT, Claude, Gemini가 있습니다.
</p>
<p>
  <em>발전소 활용:</em> 설비 점검 보고서 초안 작성, 안전 매뉴얼 번역, 운전 일지 요약,
  기술 문서 검색 및 질의응답 시스템 구축 등에 활용할 수 있습니다.
</p>

<h3>3-2. 이미지 생성 AI</h3>
<p>
  텍스트 설명(프롬프트)을 입력하면 이에 맞는 이미지를 생성합니다. DALL-E 3, Midjourney,
  Stable Diffusion, Ideogram 등이 대표적입니다.
</p>
<p>
  <em>발전소 활용:</em> 안전 교육 자료 삽화 제작, 프레젠테이션 시각 자료, 설비 배치 컨셉 이미지 등을
  빠르게 만들 수 있습니다.
</p>

<h3>3-3. 코드 생성 AI</h3>
<p>
  자연어로 원하는 기능을 설명하면 프로그래밍 코드를 자동으로 작성합니다. GitHub Copilot,
  Claude Code, Cursor 등이 대표적입니다. Python, JavaScript, SQL 등 다양한 프로그래밍 언어를 지원합니다.
</p>
<p>
  <em>발전소 활용:</em> 설비 데이터 분석용 Python 스크립트 생성, Excel 매크로 자동 작성,
  데이터베이스 조회 SQL 생성 등에 활용할 수 있습니다.
</p>

<h3>3-4. 음성/음악 생성 AI</h3>
<p>
  텍스트를 자연스러운 음성으로 변환(TTS)하거나, 음성을 텍스트로 변환(STT)합니다.
  또한 음악을 자동으로 작곡하는 AI도 등장했습니다. ElevenLabs, Suno AI 등이 대표적입니다.
</p>
<p>
  <em>발전소 활용:</em> 안전 교육 영상 내레이션 자동 생성, 회의 녹음 자동 텍스트 변환,
  다국어 안전 안내 방송 제작 등에 활용 가능합니다.
</p>

<h2>4. 생성형 AI의 비즈니스 임팩트</h2>
<p>
  생성형 AI는 기업의 업무 방식을 근본적으로 변화시키고 있습니다. 맥킨지(McKinsey)에 따르면,
  생성형 AI는 전 세계적으로 <strong>연간 2.6조~4.4조 달러</strong>의 경제적 가치를 창출할 것으로
  전망됩니다.
</p>

<ul>
  <li><strong>생산성 혁신</strong>: 반복적인 문서 작업, 데이터 정리 등을 AI가 대신 처리하여 직원들이 고부가가치 업무에 집중할 수 있습니다.</li>
  <li><strong>의사결정 지원</strong>: 방대한 데이터를 빠르게 분석하여 경영진의 의사결정을 지원합니다.</li>
  <li><strong>고객 경험 향상</strong>: 24시간 AI 챗봇, 개인 맞춤형 서비스 등으로 고객 만족도를 높입니다.</li>
  <li><strong>혁신 가속화</strong>: 아이디어 발굴, 프로토타입 제작, 시장 분석 등의 속도를 획기적으로 높입니다.</li>
</ul>

<div class="warning-box">
  <strong>주의:</strong> 생성형 AI가 만들어낸 결과물은 항상 사실 확인이 필요합니다. AI는 "그럴듯하지만 틀린" 내용을
  자신감 있게 생성할 수 있으며(할루시네이션), 특히 전문 기술 분야에서는 반드시 전문가의 검증을 거쳐야 합니다.
  발전소의 설비 관련 판단에 AI를 활용할 때는 최종 의사결정은 반드시 전문 엔지니어가 수행해야 합니다.
</div>

<blockquote>
  생성형 AI는 "인간의 역할을 대체"하는 것이 아니라 "인간의 능력을 증강(Augment)"하는 도구입니다.
  AI를 잘 활용하는 직원과 그렇지 않은 직원 사이의 생산성 격차는 점점 벌어지고 있습니다.
</blockquote>
`,
    quizzes: [
      {
        question: '생성형 AI(Generative AI)의 핵심 특징으로 가장 적절한 것은?',
        options: [
          '기존 데이터를 분류하고 라벨링하는 것',
          '학습한 패턴을 기반으로 새로운 콘텐츠를 창작하는 것',
          '데이터베이스에서 정보를 검색하는 것',
          '하드웨어를 자동으로 제어하는 것',
        ],
        correctIndex: 1,
        explanation:
          '생성형 AI는 학습한 데이터의 패턴(확률 분포)을 기반으로 텍스트, 이미지, 코드, 음성 등 전혀 새로운 콘텐츠를 생성하는 것이 핵심 특징입니다.',
      },
      {
        question: '다음 중 오픈소스로 공개되어 자체 서버에서 운영할 수 있는 생성형 AI 모델은?',
        options: [
          'GPT-4o (OpenAI)',
          'Claude Opus (Anthropic)',
          'Gemini Ultra (Google)',
          'Llama 3 (Meta)',
        ],
        correctIndex: 3,
        explanation:
          'Meta의 Llama 3는 오픈소스로 공개되어 누구나 무료로 다운로드하고, 자체 서버에서 실행하거나 커스터마이징(Fine-tuning)할 수 있습니다. GPT, Claude, Gemini는 API를 통해 서비스로 제공됩니다.',
      },
    ],
  },

  // ── 4. LLM(대규모 언어 모델)의 기초 ──
  {
    id: 'llm-basics',
    categoryId: 'ai-basics',
    title: 'LLM(대규모 언어 모델)의 기초',
    titleEn: 'LLM Basics',
    estimatedMinutes: 18,
    sortOrder: 4,
    content: `
<h2>1. LLM(Large Language Model)이란?</h2>
<p>
  <strong>LLM(대규모 언어 모델)</strong>은 방대한 텍스트 데이터(인터넷 문서, 책, 논문 등)를 학습하여
  인간과 유사한 수준의 자연어 이해 및 생성 능력을 갖춘 AI 모델입니다. "대규모"라는 이름은 모델이 가진
  <strong>매개변수(파라미터)</strong>의 수가 수십억~수조 개에 달하기 때문입니다.
</p>
<p>
  LLM의 핵심 원리는 매우 간단합니다: <strong>주어진 문맥에서 다음에 올 가능성이 가장 높은 토큰을 예측</strong>하는 것입니다.
  이 단순한 원리가 수천억 개의 파라미터와 결합되면, 놀랍도록 자연스러운 문장 생성, 번역, 요약, 추론 등이 가능해집니다.
</p>

<div class="info-box">
  <strong>비유:</strong> LLM은 마치 수십억 권의 책을 읽은 사람처럼, 특정 문맥 뒤에 어떤 말이 올지
  통계적으로 가장 적절한 답을 예측합니다. 다만, "이해"한다기보다는 "패턴을 매칭"한다는 점이
  인간의 언어 능력과의 근본적인 차이입니다.
</div>

<h2>2. LLM의 주요 개념</h2>

<h3>2-1. 토큰 (Token)</h3>
<p>
  LLM이 텍스트를 처리하는 <strong>기본 단위</strong>입니다. 영어에서는 대략 단어 1개가 1~1.5 토큰에 해당하고,
  한국어에서는 한 글자가 보통 1~3 토큰에 해당합니다. 예를 들어 "안녕하세요"는 약 3~5 토큰으로 분할됩니다.
</p>
<p>
  토큰은 LLM의 입출력 비용 계산에도 사용됩니다. API 사용료는 보통 입력 토큰 수 + 출력 토큰 수를 기준으로 청구됩니다.
</p>

<h3>2-2. 컨텍스트 윈도우 (Context Window)</h3>
<p>
  LLM이 한 번에 처리할 수 있는 <strong>최대 토큰 수</strong>입니다. 컨텍스트 윈도우가 클수록 더 긴 문서를
  한 번에 분석하거나, 더 긴 대화 맥락을 기억할 수 있습니다.
</p>
<ul>
  <li>GPT-4o: 128K 토큰 (약 300페이지 분량)</li>
  <li>Claude Opus/Sonnet: 200K 토큰 (약 500페이지 분량)</li>
  <li>Gemini 1.5 Pro: 1M~2M 토큰 (약 1,500~3,000페이지 분량)</li>
</ul>

<h3>2-3. 온도 (Temperature)</h3>
<p>
  LLM 출력의 <strong>창의성(랜덤성)</strong>을 조절하는 값입니다. 0에서 2 사이의 값을 설정합니다.
</p>
<ul>
  <li><strong>온도 0 (낮음)</strong>: 가장 확률 높은 토큰만 선택 → 일관되고 예측 가능한 답변. 팩트 기반 업무에 적합.</li>
  <li><strong>온도 0.7 (중간)</strong>: 적절한 창의성과 일관성의 균형. 일반적인 대화나 문서 작성에 적합.</li>
  <li><strong>온도 1.5~2 (높음)</strong>: 높은 랜덤성 → 창의적이지만 비일관적. 브레인스토밍이나 창작 활동에 적합.</li>
</ul>

<h3>2-4. Top-P (Nucleus Sampling)</h3>
<p>
  다음 토큰을 선택할 때, 누적 확률이 P 이하인 토큰들 중에서만 선택하는 방식입니다.
  Top-P가 0.1이면 상위 10% 확률의 토큰 중에서만 선택하므로 보수적이 되고,
  Top-P가 0.9이면 상위 90% 확률의 토큰 중에서 선택하므로 다양한 표현이 나옵니다.
</p>
<p>
  일반적으로 <strong>온도(Temperature)</strong>와 <strong>Top-P</strong> 중 하나만 조절하는 것이 권장됩니다.
  두 값을 동시에 극단적으로 설정하면 예측할 수 없는 결과가 나올 수 있습니다.
</p>

<h2>3. 할루시네이션(Hallucination)의 이해와 대응</h2>

<h3>3-1. 할루시네이션이란?</h3>
<p>
  AI가 <strong>사실이 아닌 정보를 마치 사실인 것처럼 자신감 있게 생성</strong>하는 현상입니다.
  LLM은 "다음 토큰 예측"을 수행하는 것이지, "사실 검증"을 수행하는 것이 아니기 때문에 발생합니다.
  그럴듯하게 들리지만 완전히 허구인 내용을 만들어 낼 수 있습니다.
</p>

<h3>3-2. 할루시네이션의 원인</h3>
<ul>
  <li><strong>학습 데이터의 한계</strong>: 학습 데이터에 포함되지 않은 최신 정보나 전문 지식에 대해 "추측"으로 답변</li>
  <li><strong>확률 기반 생성</strong>: 가장 "그럴듯한" 다음 토큰을 선택하는 방식이므로, 사실 여부와 무관하게 자연스러운 문장이 생성됨</li>
  <li><strong>과도한 자신감</strong>: 모르는 것을 모른다고 말하기보다 답을 만들어내는 경향</li>
</ul>

<h3>3-3. 할루시네이션 대응 방법</h3>
<ol>
  <li>AI 결과물은 항상 <strong>교차 검증</strong>(Fact-checking)을 수행합니다.</li>
  <li>프롬프트에 <strong>"확실하지 않으면 모른다고 답하세요"</strong>라는 지시를 포함합니다.</li>
  <li><strong>출처</strong>를 명시하도록 요청하고, 제시된 출처의 존재 여부를 직접 확인합니다.</li>
  <li>중요한 기술적 판단에는 AI를 참고 자료로만 활용하고, <strong>전문가의 최종 검증</strong>을 거칩니다.</li>
  <li><strong>RAG(검색 증강 생성)</strong> 기법을 적용하여 신뢰할 수 있는 문서를 AI에 직접 제공합니다.</li>
</ol>

<div class="warning-box">
  <strong>주의:</strong> 발전소 설비의 안전과 직결되는 기술적 판단에서 AI의 할루시네이션은
  심각한 결과를 초래할 수 있습니다. 반드시 전문 엔지니어의 검증을 거치십시오.
  AI는 "참고 도구"이지, "최종 의사결정자"가 아닙니다.
</div>

<h2>4. LLM의 작동 과정: 프롬프트에서 응답까지</h2>
<p>사용자가 프롬프트를 입력하면 LLM은 다음과 같은 과정을 거쳐 응답을 생성합니다.</p>
<ol>
  <li><strong>토큰화(Tokenization)</strong>: 입력 텍스트를 토큰 단위로 분할합니다.</li>
  <li><strong>임베딩(Embedding)</strong>: 각 토큰을 고차원 벡터(숫자 배열)로 변환합니다.</li>
  <li><strong>Transformer 처리</strong>: Self-Attention 메커니즘으로 토큰 간 관계를 파악합니다.</li>
  <li><strong>다음 토큰 예측</strong>: 각 토큰이 다음에 올 확률을 계산합니다.</li>
  <li><strong>샘플링</strong>: Temperature, Top-P 등의 설정에 따라 토큰을 선택합니다.</li>
  <li><strong>반복</strong>: 선택된 토큰을 문맥에 추가하고, 종료 조건이 될 때까지 4~5번을 반복합니다.</li>
  <li><strong>디토큰화(Detokenization)</strong>: 생성된 토큰 시퀀스를 사람이 읽을 수 있는 텍스트로 변환합니다.</li>
</ol>

<h2>5. 주요 LLM 비교표</h2>

<table>
  <thead>
    <tr>
      <th>모델명</th>
      <th>제작사</th>
      <th>파라미터 수 (추정)</th>
      <th>컨텍스트 윈도우</th>
      <th>특장점</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>GPT-4o</strong></td>
      <td>OpenAI</td>
      <td>비공개 (수천억 추정)</td>
      <td>128K 토큰</td>
      <td>멀티모달, 빠른 속도</td>
    </tr>
    <tr>
      <td><strong>Claude Opus 4</strong></td>
      <td>Anthropic</td>
      <td>비공개</td>
      <td>200K 토큰</td>
      <td>장문 분석, 안전성, 코딩</td>
    </tr>
    <tr>
      <td><strong>Gemini 1.5 Pro</strong></td>
      <td>Google</td>
      <td>비공개</td>
      <td>1M~2M 토큰</td>
      <td>초대형 컨텍스트, 멀티모달</td>
    </tr>
    <tr>
      <td><strong>Llama 3.1 405B</strong></td>
      <td>Meta</td>
      <td>4,050억</td>
      <td>128K 토큰</td>
      <td>오픈소스, 커스터마이징 가능</td>
    </tr>
    <tr>
      <td><strong>Mistral Large</strong></td>
      <td>Mistral AI</td>
      <td>비공개</td>
      <td>128K 토큰</td>
      <td>유럽 기반, 다국어 강점</td>
    </tr>
    <tr>
      <td><strong>DeepSeek-V3</strong></td>
      <td>DeepSeek</td>
      <td>6,710억 (MoE)</td>
      <td>128K 토큰</td>
      <td>비용 효율, 오픈소스</td>
    </tr>
  </tbody>
</table>

<div class="tip-box">
  <strong>팁:</strong> LLM을 선택할 때는 단순히 파라미터 수가 아니라, 본인의 업무 특성에 맞는 모델을
  선택하는 것이 중요합니다. 장문 문서 분석이 많다면 Claude나 Gemini가, Google 서비스와의 연동이
  중요하다면 Gemini가, 자체 시스템 구축이 목표라면 Llama 계열이 적합합니다.
</div>
`,
    quizzes: [
      {
        question: 'LLM(대규모 언어 모델)에서 "온도(Temperature)" 값을 0에 가깝게 설정하면 어떤 효과가 나타나나요?',
        options: [
          '더 창의적이고 예측 불가능한 답변이 생성된다',
          '일관되고 예측 가능한 답변이 생성된다',
          'AI의 처리 속도가 빨라진다',
          '컨텍스트 윈도우가 확장된다',
        ],
        correctIndex: 1,
        explanation:
          '온도(Temperature) 값이 0에 가까우면 LLM은 가장 확률이 높은 토큰만 선택하므로, 일관되고 예측 가능한 답변이 생성됩니다. 팩트 기반 업무(보고서, 기술 문서 등)에 적합합니다.',
      },
      {
        question: 'AI 할루시네이션(Hallucination)에 대한 설명으로 올바르지 않은 것은?',
        options: [
          'AI가 사실이 아닌 정보를 자신감 있게 생성하는 현상이다',
          'LLM이 "다음 토큰 예측"에 기반하기 때문에 발생한다',
          'RAG(검색 증강 생성) 기법으로 완전히 제거할 수 있다',
          '프롬프트에 "모르면 모른다고 답하라"는 지시를 추가하면 줄일 수 있다',
        ],
        correctIndex: 2,
        explanation:
          'RAG 기법은 할루시네이션을 크게 줄일 수 있지만, 완전히 제거하는 것은 불가능합니다. 어떤 방법을 사용하더라도 AI 결과물에 대한 사실 검증(Fact-checking)은 항상 필요합니다.',
      },
    ],
  },

  // ── 5. AI의 발전사와 미래 ──
  {
    id: 'ai-history',
    categoryId: 'ai-basics',
    title: 'AI의 발전사와 미래',
    titleEn: 'AI History & Future',
    estimatedMinutes: 15,
    sortOrder: 5,
    content: `
<h2>1. AI 발전 타임라인</h2>
<p>
  인공지능은 1950년대에 학문적 개념으로 시작하여, 여러 차례의 부흥과 침체를 거쳐 오늘날
  우리 생활 전반에 영향을 미치는 핵심 기술로 자리잡았습니다. 약 70년에 걸친 AI의 발전사를
  시대별로 살펴보겠습니다.
</p>

<table>
  <thead>
    <tr>
      <th>시대</th>
      <th>기간</th>
      <th>핵심 사건</th>
      <th>주요 기술/인물</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>태동기</strong></td>
      <td>1950~1956</td>
      <td>튜링 테스트 제안, "인공지능" 용어 탄생</td>
      <td>앨런 튜링, 존 매카시</td>
    </tr>
    <tr>
      <td><strong>황금기</strong></td>
      <td>1956~1974</td>
      <td>초기 AI 프로그램 개발, 낙관적 전망</td>
      <td>ELIZA(챗봇), 퍼셉트론</td>
    </tr>
    <tr>
      <td><strong>1차 AI 겨울</strong></td>
      <td>1974~1980</td>
      <td>기술적 한계 노출, 연구 투자 감소</td>
      <td>XOR 문제, 연산 능력 부족</td>
    </tr>
    <tr>
      <td><strong>전문가 시스템</strong></td>
      <td>1980~1987</td>
      <td>규칙 기반 전문가 시스템 상용화</td>
      <td>MYCIN(의료진단), R1(설비구성)</td>
    </tr>
    <tr>
      <td><strong>2차 AI 겨울</strong></td>
      <td>1987~1993</td>
      <td>전문가 시스템의 한계, 투자 축소</td>
      <td>유지보수 비용 과다</td>
    </tr>
    <tr>
      <td><strong>통계적 ML</strong></td>
      <td>1993~2011</td>
      <td>데이터 기반 접근법 부상</td>
      <td>SVM, 랜덤포레스트, IBM Deep Blue(1997), IBM Watson(2011)</td>
    </tr>
    <tr>
      <td><strong>딥러닝 혁명</strong></td>
      <td>2012~2019</td>
      <td>딥러닝이 AI의 주류로 부상</td>
      <td>AlexNet(2012), AlphaGo(2016), Transformer(2017), BERT(2018), GPT-2(2019)</td>
    </tr>
    <tr>
      <td><strong>생성형 AI 시대</strong></td>
      <td>2020~현재</td>
      <td>LLM 대중화, 멀티모달 AI, AI 에이전트</td>
      <td>GPT-3(2020), DALL-E(2021), ChatGPT(2022), GPT-4(2023), Claude 3(2024), AI 에이전트(2025~)</td>
    </tr>
  </tbody>
</table>

<h2>2. 각 시대의 핵심 기술과 이정표</h2>

<h3>2-1. 태동기와 황금기 (1950s~1970s)</h3>
<p>
  1950년 앨런 튜링은 논문 <em>"Computing Machinery and Intelligence"</em>에서
  "기계가 생각할 수 있는가?"라는 질문을 던지며 <strong>튜링 테스트</strong>를 제안했습니다.
  1956년 다트머스 회의에서 존 매카시, 마빈 민스키, 클로드 섀넌 등이 모여 "인공지능"이라는
  학문 분야를 공식적으로 출범시켰습니다.
</p>
<p>
  이 시기에 최초의 챗봇 <strong>ELIZA</strong>(1966)가 개발되었고, 간단한 게임을 하고 정리를 증명하는
  프로그램들이 만들어졌습니다. 연구자들은 "20년 안에 인간 수준의 AI가 실현될 것"이라고 낙관했지만,
  현실은 그리 녹록지 않았습니다.
</p>

<h3>2-2. AI 겨울 (1970s~1980s, 1990s)</h3>
<p>
  과도한 낙관과 달리 AI 기술이 기대에 미치지 못하면서, 정부와 기업의 연구 투자가 급감한 시기입니다.
  특히 퍼셉트론의 한계(XOR 문제), 자연어 번역의 어려움, 컴퓨팅 파워 부족 등이 주요 원인이었습니다.
  두 차례의 AI 겨울은 연구자들에게 큰 시련이었지만, 이 시기에도 <strong>역전파 알고리즘</strong>(1986),
  <strong>CNN의 원형</strong>(LeNet, 1989) 등 핵심 기술이 조용히 발전하고 있었습니다.
</p>

<h3>2-3. 머신러닝과 딥러닝 부흥 (2000s~2010s)</h3>
<p>
  인터넷의 발전으로 대량의 데이터가 축적되고, GPU 컴퓨팅의 발전으로 대규모 연산이 가능해지면서
  머신러닝, 특히 딥러닝이 비약적으로 발전했습니다.
</p>
<ul>
  <li><strong>1997년</strong>: IBM Deep Blue가 체스 세계 챔피언 가리 카스파로프를 격파</li>
  <li><strong>2011년</strong>: IBM Watson이 퀴즈쇼 Jeopardy!에서 인간 챔피언을 이김</li>
  <li><strong>2012년</strong>: AlexNet이 ImageNet 대회에서 압도적 성능 → 딥러닝 시대 개막</li>
  <li><strong>2016년</strong>: Google DeepMind의 AlphaGo가 바둑 세계 챔피언 이세돌 9단을 4:1로 격파</li>
  <li><strong>2017년</strong>: Google이 <strong>Transformer</strong> 아키텍처 발표 → 현대 AI의 기반 기술</li>
</ul>

<h3>2-4. 생성형 AI와 LLM 시대 (2020~현재)</h3>
<p>
  Transformer를 기반으로 한 대규모 언어 모델(LLM)이 급속히 발전했습니다.
</p>
<ul>
  <li><strong>2020년</strong>: GPT-3 공개 — 1,750억 파라미터의 놀라운 텍스트 생성 능력</li>
  <li><strong>2021년</strong>: DALL-E, GitHub Copilot — 이미지 생성과 코드 생성 AI 등장</li>
  <li><strong>2022년 11월</strong>: <strong>ChatGPT 출시</strong> — 출시 5일 만에 100만 사용자, 2개월 만에 1억 사용자 돌파. 역사상 가장 빠르게 성장한 서비스</li>
  <li><strong>2023년</strong>: GPT-4, Claude 2, Gemini 등 고성능 LLM 경쟁 본격화</li>
  <li><strong>2024년</strong>: Claude 3, GPT-4o, 멀티모달 AI 고도화, AI 에이전트 개념 부상</li>
  <li><strong>2025~2026년</strong>: Claude Opus 4, GPT-5 등 차세대 모델, AI 에이전트 실용화, AI 코딩 도구 대중화</li>
</ul>

<h2>3. AI의 미래 전망</h2>

<h3>3-1. AGI(범용 인공지능)를 향한 여정</h3>
<p>
  업계의 많은 전문가들이 향후 5~15년 내에 <strong>AGI(Artificial General Intelligence)</strong>,
  즉 인간과 동등한 수준의 범용 지능을 가진 AI가 등장할 것으로 전망하고 있습니다.
  OpenAI의 샘 올트먼, Google DeepMind의 데미스 하사비스 등은 AGI가 2030년대에
  실현될 가능성을 언급하고 있습니다. 다만, 이에 대한 학계의 의견은 여전히 분분합니다.
</p>

<h3>3-2. AI 에이전트의 시대</h3>
<p>
  2025년부터 AI는 단순한 질의응답을 넘어, <strong>자율적으로 계획을 세우고 도구를 사용하며 작업을 수행</strong>하는
  에이전트로 진화하고 있습니다. Claude Code, GitHub Copilot Workspace 등 코딩 에이전트부터
  시작하여, 업무 자동화, 연구 보조, 고객 서비스 등 다양한 분야로 확산되고 있습니다.
</p>

<h3>3-3. AI 규제와 거버넌스</h3>
<p>
  AI의 급격한 발전과 함께, 안전하고 책임 있는 AI 사용을 위한 규제 프레임워크도 빠르게 정비되고 있습니다.
  EU의 <strong>AI Act</strong>(2024년 발효), 미국의 행정명령, 한국의 <strong>인공지능 기본법</strong> 등
  각국이 AI 규제 체계를 마련하고 있습니다.
</p>

<div class="info-box">
  <strong>한국의 AI 규제:</strong> 한국은 2024년 '인공지능 기본법'을 제정하여 AI 기술 발전과
  안전한 활용 사이의 균형을 추구하고 있습니다. 고위험 AI 시스템의 투명성, 설명가능성,
  공정성 등에 대한 요건을 규정하고 있습니다.
</div>

<h2>4. 발전산업에서의 AI 미래</h2>
<p>
  한국중부발전과 같은 발전 기업에서 AI는 앞으로 더욱 중요한 역할을 할 것으로 예상됩니다.
</p>

<h4>디지털 트윈 (Digital Twin)</h4>
<p>
  물리적 발전 설비를 가상 공간에 정밀하게 복제하여, AI가 실시간으로 시뮬레이션하고 최적 운전 조건을
  도출합니다. 실제 설비를 건드리지 않고 다양한 시나리오를 테스트할 수 있어 안전성과 효율성을
  동시에 향상시킵니다.
</p>

<h4>자율 운전 발전소</h4>
<p>
  AI가 발전소의 전체 운전을 자율적으로 관리하는 미래가 다가오고 있습니다. 연료 투입, 출력 조절,
  환경 규제 준수 등을 AI가 실시간으로 최적화하며, 운전원은 감독자(Supervisor) 역할을 수행합니다.
</p>

<h4>탄소중립과 AI</h4>
<p>
  2050 탄소중립 목표 달성을 위해 AI는 필수적인 기술입니다. 재생에너지 발전량 예측, 에너지 저장 최적화,
  탄소 포집 효율 극대화, 전력 수요-공급 밸런싱 등에 AI가 핵심 역할을 수행하게 됩니다.
</p>

<h4>예측 정비 고도화</h4>
<p>
  현재도 활용되고 있는 예측 정비가 더욱 정교해져, 단순 고장 예측을 넘어 <strong>잔존 수명 예측(RUL, Remaining Useful Life)</strong>,
  최적 정비 시점과 범위 자동 결정, 부품 자동 발주까지 이어지는 통합 정비 시스템으로 발전할 것입니다.
</p>

<div class="tip-box">
  <strong>팁:</strong> AI 기술의 변화 속도는 매우 빠릅니다. 중요한 것은 특정 도구를 마스터하는 것이 아니라,
  AI의 기본 원리와 활용 방법론을 이해하는 것입니다. 기본기를 갖추면 새로운 AI 도구가 나와도
  빠르게 적응할 수 있습니다.
</div>

<blockquote>
  "AI를 두려워할 필요는 없습니다. 하지만 AI를 무시해서도 안 됩니다.
  AI는 우리의 경쟁자가 아니라 동료입니다. AI를 잘 활용하는 사람이
  곧 미래의 핵심 인재가 될 것입니다." — AI 전문가들의 공통된 조언
</blockquote>
`,
    quizzes: [
      {
        question: '2017년 Google이 발표한 AI 아키텍처로, ChatGPT, Claude, Gemini 등 현대 LLM의 기반 기술이 된 것은?',
        options: [
          '퍼셉트론 (Perceptron)',
          'CNN (Convolutional Neural Network)',
          'RNN (Recurrent Neural Network)',
          'Transformer',
        ],
        correctIndex: 3,
        explanation:
          'Transformer는 2017년 Google이 "Attention Is All You Need" 논문에서 발표한 아키텍처로, Self-Attention 메커니즘을 통해 입력 데이터의 모든 부분 간 관계를 효율적으로 파악합니다. GPT, Claude, Gemini 등 현재 대부분의 LLM이 Transformer를 기반으로 합니다.',
      },
      {
        question: '발전산업에서의 AI 미래 기술 중, 물리적 설비를 가상 공간에 복제하여 AI가 실시간 시뮬레이션을 수행하는 기술은?',
        options: [
          '블록체인 (Blockchain)',
          '디지털 트윈 (Digital Twin)',
          '양자 컴퓨팅 (Quantum Computing)',
          '메타버스 (Metaverse)',
        ],
        correctIndex: 1,
        explanation:
          '디지털 트윈(Digital Twin)은 물리적 설비를 가상 공간에 정밀하게 복제하여, AI가 실시간으로 시뮬레이션하고 최적 운전 조건을 도출하는 기술입니다. 실제 설비를 건드리지 않고 다양한 시나리오를 안전하게 테스트할 수 있습니다.',
      },
    ],
  },
];

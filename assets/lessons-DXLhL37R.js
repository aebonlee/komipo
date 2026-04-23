const t=[{id:"ai-what",categoryId:"ai-basics",title:"인공지능(AI)이란?",titleEn:"What is AI?",estimatedMinutes:15,sortOrder:1,content:`
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
`,quizzes:[{question:"현재 상용화되어 일상에서 사용하고 있는 AI(예: ChatGPT, 번역기, 음성비서)는 다음 중 어떤 유형에 해당하나요?",options:["강한 AI (General AI)","약한 AI (Narrow AI)","초지능 AI (Super AI)","양자 AI (Quantum AI)"],correctIndex:1,explanation:"현재 상용화된 모든 AI 시스템(ChatGPT, Siri, 번역기 등)은 특정 작업에 특화된 약한 AI(Narrow AI)에 해당합니다. 강한 AI(AGI)와 초지능 AI(ASI)는 아직 실현되지 않은 개념입니다."},{question:"다음 중 AI 기술의 구성 요소와 그 설명이 올바르게 연결된 것은?",options:["NLP — 이미지와 영상을 인식하는 기술","컴퓨터 비전 — 인간의 언어를 이해하는 기술","딥러닝 — 인공 신경망을 여러 층으로 쌓아 학습하는 기술","로보틱스 — 데이터에서 패턴을 학습하는 기술"],correctIndex:2,explanation:"딥러닝(Deep Learning)은 인공 신경망을 여러 층(layer)으로 쌓아 복잡한 패턴을 학습하는 머신러닝의 한 분야입니다. NLP는 자연어 처리, 컴퓨터 비전은 이미지/영상 인식, 로보틱스는 로봇 기술입니다."}]},{id:"ml-dl",categoryId:"ai-basics",title:"머신러닝과 딥러닝",titleEn:"Machine Learning & Deep Learning",estimatedMinutes:18,sortOrder:2,content:`
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
`,quizzes:[{question:"정답(레이블)이 없는 데이터에서 숨겨진 패턴이나 구조를 스스로 발견하는 머신러닝 유형은 무엇인가요?",options:["지도학습 (Supervised Learning)","비지도학습 (Unsupervised Learning)","강화학습 (Reinforcement Learning)","전이학습 (Transfer Learning)"],correctIndex:1,explanation:"비지도학습(Unsupervised Learning)은 레이블(정답)이 없는 데이터에서 군집화, 차원 축소, 이상 탐지 등을 통해 데이터의 숨겨진 구조나 패턴을 스스로 발견합니다."},{question:"다음 중 머신러닝(ML)과 딥러닝(DL)의 차이점으로 올바른 것은?",options:["딥러닝은 데이터 없이도 학습할 수 있다","머신러닝은 비정형 데이터만 처리할 수 있다","딥러닝은 모델이 자동으로 특성(Feature)을 추출하지만, 전통적 머신러닝은 사람이 특성을 설계해야 한다","머신러닝은 GPU가 반드시 필요하지만, 딥러닝은 CPU만으로 충분하다"],correctIndex:2,explanation:"전통적 머신러닝에서는 사람이 직접 특성 공학(Feature Engineering)을 수행하지만, 딥러닝은 원시 데이터로부터 모델이 자동으로 중요한 특성을 추출합니다. 이것이 딥러닝의 핵심 장점 중 하나입니다."}]},{id:"gen-ai",categoryId:"ai-basics",title:"생성형 AI의 이해",titleEn:"Understanding Generative AI",estimatedMinutes:16,sortOrder:3,content:`
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
`,quizzes:[{question:"생성형 AI(Generative AI)의 핵심 특징으로 가장 적절한 것은?",options:["기존 데이터를 분류하고 라벨링하는 것","학습한 패턴을 기반으로 새로운 콘텐츠를 창작하는 것","데이터베이스에서 정보를 검색하는 것","하드웨어를 자동으로 제어하는 것"],correctIndex:1,explanation:"생성형 AI는 학습한 데이터의 패턴(확률 분포)을 기반으로 텍스트, 이미지, 코드, 음성 등 전혀 새로운 콘텐츠를 생성하는 것이 핵심 특징입니다."},{question:"다음 중 오픈소스로 공개되어 자체 서버에서 운영할 수 있는 생성형 AI 모델은?",options:["GPT-4o (OpenAI)","Claude Opus (Anthropic)","Gemini Ultra (Google)","Llama 3 (Meta)"],correctIndex:3,explanation:"Meta의 Llama 3는 오픈소스로 공개되어 누구나 무료로 다운로드하고, 자체 서버에서 실행하거나 커스터마이징(Fine-tuning)할 수 있습니다. GPT, Claude, Gemini는 API를 통해 서비스로 제공됩니다."}]},{id:"llm-basics",categoryId:"ai-basics",title:"LLM(대규모 언어 모델)의 기초",titleEn:"LLM Basics",estimatedMinutes:18,sortOrder:4,content:`
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
`,quizzes:[{question:'LLM(대규모 언어 모델)에서 "온도(Temperature)" 값을 0에 가깝게 설정하면 어떤 효과가 나타나나요?',options:["더 창의적이고 예측 불가능한 답변이 생성된다","일관되고 예측 가능한 답변이 생성된다","AI의 처리 속도가 빨라진다","컨텍스트 윈도우가 확장된다"],correctIndex:1,explanation:"온도(Temperature) 값이 0에 가까우면 LLM은 가장 확률이 높은 토큰만 선택하므로, 일관되고 예측 가능한 답변이 생성됩니다. 팩트 기반 업무(보고서, 기술 문서 등)에 적합합니다."},{question:"AI 할루시네이션(Hallucination)에 대한 설명으로 올바르지 않은 것은?",options:["AI가 사실이 아닌 정보를 자신감 있게 생성하는 현상이다",'LLM이 "다음 토큰 예측"에 기반하기 때문에 발생한다',"RAG(검색 증강 생성) 기법으로 완전히 제거할 수 있다",'프롬프트에 "모르면 모른다고 답하라"는 지시를 추가하면 줄일 수 있다'],correctIndex:2,explanation:"RAG 기법은 할루시네이션을 크게 줄일 수 있지만, 완전히 제거하는 것은 불가능합니다. 어떤 방법을 사용하더라도 AI 결과물에 대한 사실 검증(Fact-checking)은 항상 필요합니다."}]},{id:"ai-history",categoryId:"ai-basics",title:"AI의 발전사와 미래",titleEn:"AI History & Future",estimatedMinutes:15,sortOrder:5,content:`
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
`,quizzes:[{question:"2017년 Google이 발표한 AI 아키텍처로, ChatGPT, Claude, Gemini 등 현대 LLM의 기반 기술이 된 것은?",options:["퍼셉트론 (Perceptron)","CNN (Convolutional Neural Network)","RNN (Recurrent Neural Network)","Transformer"],correctIndex:3,explanation:'Transformer는 2017년 Google이 "Attention Is All You Need" 논문에서 발표한 아키텍처로, Self-Attention 메커니즘을 통해 입력 데이터의 모든 부분 간 관계를 효율적으로 파악합니다. GPT, Claude, Gemini 등 현재 대부분의 LLM이 Transformer를 기반으로 합니다.'},{question:"발전산업에서의 AI 미래 기술 중, 물리적 설비를 가상 공간에 복제하여 AI가 실시간 시뮬레이션을 수행하는 기술은?",options:["블록체인 (Blockchain)","디지털 트윈 (Digital Twin)","양자 컴퓨팅 (Quantum Computing)","메타버스 (Metaverse)"],correctIndex:1,explanation:"디지털 트윈(Digital Twin)은 물리적 설비를 가상 공간에 정밀하게 복제하여, AI가 실시간으로 시뮬레이션하고 최적 운전 조건을 도출하는 기술입니다. 실제 설비를 건드리지 않고 다양한 시나리오를 안전하게 테스트할 수 있습니다."}]}],o=[{id:"chatgpt-guide",categoryId:"ai-tools",title:"ChatGPT 활용 가이드",titleEn:"ChatGPT Guide",content:`
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
`,estimatedMinutes:20,sortOrder:1,quizzes:[{question:"ChatGPT의 추론(Reasoning) 특화 모델은 무엇인가요?",options:["GPT-4o","GPT-4o mini","o1","DALL-E 3"],correctIndex:2,explanation:"o1 모델은 수학, 코딩, 과학 등 복잡한 추론 문제에서 단계별 사고 과정을 거쳐 정확한 답을 도출하는 추론 특화 모델입니다."},{question:"ChatGPT Team 플랜에서 사용자 입력 데이터의 기본 학습 정책은?",options:["모든 데이터가 학습에 활용됨","학습 제외가 기본 설정","데이터 보안 옵션 없음","관리자가 선택 불가"],correctIndex:1,explanation:"ChatGPT Team 플랜은 기본적으로 사용자 입력 데이터가 모델 학습에 활용되지 않습니다. 기업 환경에서 보안을 고려한 설정입니다."}]},{id:"claude-guide",categoryId:"ai-tools",title:"Claude 활용 가이드",titleEn:"Claude Guide",content:`
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
`,estimatedMinutes:20,sortOrder:2,quizzes:[{question:"Claude가 한 번에 처리할 수 있는 최대 컨텍스트 윈도우 크기는?",options:["8K 토큰","32K 토큰","128K 토큰","200K 토큰"],correctIndex:3,explanation:"Claude는 최대 200,000(200K) 토큰의 컨텍스트 윈도우를 지원하여, 약 500페이지 분량의 문서를 한 번에 읽고 분석할 수 있습니다."},{question:"Claude의 안전성 기반 기술인 Constitutional AI의 핵심 특징은?",options:["가장 빠른 응답 속도 제공","확실하지 않은 정보에 솔직하게 답변","이미지 생성에 특화","오프라인에서만 작동"],correctIndex:1,explanation:'Constitutional AI는 AI가 확실하지 않은 정보에 대해 솔직하게 "모른다"고 답변하도록 하여 할루시네이션을 줄이고 신뢰성을 높이는 기법입니다.'}]},{id:"gemini-guide",categoryId:"ai-tools",title:"Gemini 활용 가이드",titleEn:"Gemini Guide",content:`
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
`,estimatedMinutes:20,sortOrder:3,quizzes:[{question:"Google의 AI 리서치 도구로, 업로드한 문서만 기반으로 답변하여 할루시네이션이 거의 없는 서비스는?",options:["Google Bard","NotebookLM","Google AI Studio","Vertex AI"],correctIndex:1,explanation:"NotebookLM은 사용자가 업로드한 문서만을 기반으로 답변을 생성하므로, 할루시네이션 위험이 매우 낮은 AI 리서치 도구입니다."},{question:"Gemini Pro/Ultra 모델이 지원하는 최대 컨텍스트 윈도우 크기는?",options:["32K 토큰","128K 토큰","200K 토큰","1M(100만) 토큰"],correctIndex:3,explanation:"Gemini Pro/Ultra는 최대 100만(1M) 토큰의 컨텍스트 윈도우를 지원하여 현존 최대 수준의 문서를 한 번에 처리할 수 있습니다."}]},{id:"copilot-guide",categoryId:"ai-tools",title:"Copilot 활용 가이드",titleEn:"Copilot Guide",content:`
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
`,estimatedMinutes:22,sortOrder:4,quizzes:[{question:"Microsoft 365 Copilot에서 Excel의 AI 기능이 아닌 것은?",options:["자연어로 수식 생성","피봇 테이블 자동 생성","3D 모델링","이상값 자동 감지"],correctIndex:2,explanation:"3D 모델링은 Excel Copilot의 기능이 아닙니다. Excel Copilot은 수식 생성, 데이터 분석, 차트/피봇 테이블 생성, 이상값 감지 등을 지원합니다."},{question:"Copilot Studio의 주요 용도는?",options:["이미지 생성","기업 맞춤형 AI 봇 구축","코드 자동 완성","동영상 편집"],correctIndex:1,explanation:"Copilot Studio는 기업이 사내 문서를 기반으로 맞춤형 AI 봇을 코드 없이 구축할 수 있는 플랫폼입니다."}]},{id:"perplexity-guide",categoryId:"ai-tools",title:"Perplexity AI 활용법",titleEn:"Perplexity AI Guide",content:`
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
`,estimatedMinutes:18,sortOrder:5,quizzes:[{question:"Perplexity AI에서 학술 논문과 연구 자료만 검색하는 모드는?",options:["All","Writing","Academic","Social"],correctIndex:2,explanation:"Academic Focus 모드는 학술 논문, 연구 자료, 공식 문서 등 학술적 소스만을 대상으로 검색하여 전문적인 리서치에 적합합니다."},{question:"Perplexity AI가 기존 검색 엔진과 가장 크게 다른 점은?",options:["광고가 많음","직접적인 답변과 출처를 함께 제공","이미지 검색만 가능","오프라인에서만 작동"],correctIndex:1,explanation:"Perplexity AI는 웹페이지 목록 대신 직접적인 답변을 생성하며, 각 정보에 출처(Source)를 번호로 명시하여 검증이 가능합니다."}]},{id:"image-ai",categoryId:"ai-tools",title:"이미지 생성 AI 활용",titleEn:"Image Generation AI",content:`
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
`,estimatedMinutes:22,sortOrder:6,quizzes:[{question:"이미지 내 텍스트 렌더링(글자 삽입)에 가장 강점을 보이는 이미지 생성 AI는?",options:["DALL-E 3","Midjourney","Stable Diffusion","Ideogram"],correctIndex:3,explanation:"Ideogram은 이미지 내에 텍스트를 정확하게 렌더링하는 능력이 가장 뛰어나, 로고, 배너, 포스터 등 텍스트가 포함된 이미지 제작에 적합합니다."},{question:"현재 대부분의 이미지 생성 AI가 기반으로 하는 핵심 기술은?",options:["GAN(생성적 적대 신경망)","Diffusion(확산) 모델","RNN(순환 신경망)","CNN(합성곱 신경망)"],correctIndex:1,explanation:"현재 DALL-E 3, Midjourney, Stable Diffusion 등 대부분의 이미지 생성 AI는 Diffusion(확산) 모델을 기반으로 하여, 노이즈에서 이미지를 복원하는 방식으로 작동합니다."}]}],r=[{id:"prompt-basics",categoryId:"prompt",title:"프롬프트 기초",titleEn:"Prompt Basics",estimatedMinutes:18,sortOrder:1,content:`
<h2>1. 프롬프트란 무엇인가?</h2>
<p>
  <strong>프롬프트(Prompt)</strong>는 AI 모델에게 전달하는 <strong>입력 텍스트</strong>, 즉 지시문입니다.
  검색 엔진에 검색어를 입력하듯이, AI에게는 프롬프트를 입력하여 원하는 결과를 요청합니다.
  하지만 검색어와 달리 프롬프트는 <em>단순한 키워드가 아니라</em> 맥락, 조건, 형식까지 포함하는 정교한 요청문입니다.
</p>
<p>
  발전소 현장에서 AI를 활용할 때, 프롬프트 하나의 차이가 30분짜리 보고서 작성을 5분으로 줄이거나,
  반대로 전혀 사용할 수 없는 결과물을 만들어낼 수 있습니다. 프롬프트 엔지니어링은
  <strong>AI 시대의 핵심 리터러시(문해력)</strong>라 할 수 있습니다.
</p>
<blockquote>"AI는 똑똑한 신입사원과 같다. 명확한 업무 지시를 줘야 훌륭한 결과를 낸다."</blockquote>

<h2>2. 좋은 프롬프트의 5가지 핵심 요소 (RCICF)</h2>
<p>효과적인 프롬프트는 다음 5가지 요소를 조합하여 구성합니다. 모든 요소를 항상 사용할 필요는 없지만, 복잡한 요청일수록 더 많은 요소를 포함하는 것이 좋습니다.</p>

<table>
  <thead>
    <tr><th>요소</th><th>영문</th><th>설명</th><th>발전소 예시</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>역할</strong></td><td>Role</td>
      <td>AI에게 특정 전문가 역할 부여</td>
      <td>"당신은 화력발전소 설비 엔지니어입니다"</td>
    </tr>
    <tr>
      <td><strong>맥락</strong></td><td>Context</td>
      <td>배경 정보와 상황 설명</td>
      <td>"보일러 압력이 정상 범위를 벗어나고 있으며, 지난 24시간 동안 온도가 5도 상승했습니다"</td>
    </tr>
    <tr>
      <td><strong>지시</strong></td><td>Instruction</td>
      <td>수행할 작업을 명확하게 기술</td>
      <td>"원인을 분석하고 조치 방안을 3가지 제시해주세요"</td>
    </tr>
    <tr>
      <td><strong>제약</strong></td><td>Constraints</td>
      <td>제한 조건이나 주의사항</td>
      <td>"기술 용어는 한국어로 작성하되 괄호 안에 영문을 병기해주세요"</td>
    </tr>
    <tr>
      <td><strong>형식</strong></td><td>Format</td>
      <td>원하는 출력 형태 지정</td>
      <td>"표 형식으로 정리하고, A4 2장 이내로 작성해주세요"</td>
    </tr>
  </tbody>
</table>

<div class="info-box">
  <strong>기억법:</strong> 5가지 요소의 영문 앞글자를 따서 <strong>RCICF</strong>로 기억할 수 있습니다 — Role, Context, Instruction, Constraints, Format.
</div>

<h2>3. 나쁜 프롬프트 vs 좋은 프롬프트 — 발전소 업무 비교</h2>
<p>같은 의도라도 프롬프트를 어떻게 작성하느냐에 따라 결과가 크게 달라집니다.</p>

<table>
  <thead>
    <tr><th>상황</th><th>나쁜 프롬프트 (Bad)</th><th>좋은 프롬프트 (Good)</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>설비 보고서</td>
      <td>"보고서 써줘"</td>
      <td>"당신은 발전소 운영팀 과장입니다. 2026년 1분기 설비 가동률 보고서를 작성해주세요. 형식은 1) 요약, 2) 월별 가동률 표, 3) 주요 이슈, 4) 개선 방안으로 구성하고, A4 2장 분량으로 작성해주세요."</td>
    </tr>
    <tr>
      <td>안전 교육</td>
      <td>"안전 교육 자료 만들어줘"</td>
      <td>"화력발전소 신입 직원 대상 밀폐공간 작업 안전수칙 교육 자료를 작성해주세요. 10개 핵심 수칙을 불릿 포인트로 정리하고, 각 수칙마다 실제 사고 사례 1개를 포함해주세요. 전문 용어에는 설명을 추가해주세요."</td>
    </tr>
    <tr>
      <td>데이터 분석</td>
      <td>"데이터 분석해줘"</td>
      <td>"첨부된 CSV 파일은 지난 6개월간 터빈 진동 데이터입니다. 1) 이상치(outlier)를 식별하고, 2) 시계열 트렌드를 분석하며, 3) 정비가 필요한 시점을 예측해주세요. 결과는 차트와 함께 제시해주세요."</td>
    </tr>
    <tr>
      <td>번역</td>
      <td>"영어로 번역해줘"</td>
      <td>"다음 기술 보고서를 영어로 번역해주세요. 발전소 전문 용어(복수기, 탈황설비 등)는 국제 표준 용어를 사용하고, 번역 후 원문-번역문 대조표를 만들어주세요."</td>
    </tr>
    <tr>
      <td>이메일</td>
      <td>"이메일 작성해줘"</td>
      <td>"협력업체 담당자에게 정비 일정 변경 안내 이메일을 작성해주세요. 기존: 4월 15일 → 변경: 4월 22일. 사유: 부품 납기 지연. 정중하면서 명확한 톤으로, 회신 요청을 포함해주세요."</td>
    </tr>
  </tbody>
</table>

<h2>4. 프롬프트 프레임워크</h2>
<p>체계적인 프롬프트 작성을 위해 여러 프레임워크가 제안되었습니다. 상황에 맞는 프레임워크를 선택하여 활용하세요.</p>

<h3>4-1. CRISP 프레임워크</h3>
<ul>
  <li><strong>C</strong>apacity (역량): AI에게 부여할 전문가 역할</li>
  <li><strong>R</strong>equest (요청): 수행할 구체적 작업</li>
  <li><strong>I</strong>nsight (통찰): 배경 정보 및 맥락</li>
  <li><strong>S</strong>tyle (스타일): 어조, 분량, 언어 수준</li>
  <li><strong>P</strong>arameters (매개변수): 형식, 길이, 제약 조건</li>
</ul>

<h3>4-2. RACE 프레임워크</h3>
<ul>
  <li><strong>R</strong>ole (역할): 전문가 역할 설정</li>
  <li><strong>A</strong>ction (행동): 구체적으로 수행할 작업</li>
  <li><strong>C</strong>ontext (맥락): 상황 설명 및 배경 정보</li>
  <li><strong>E</strong>xpectation (기대): 기대하는 결과물의 형식과 수준</li>
</ul>

<h3>4-3. CO-STAR 프레임워크</h3>
<ul>
  <li><strong>C</strong>ontext: 배경 설명</li>
  <li><strong>O</strong>bjective: 목표</li>
  <li><strong>S</strong>tyle: 문체</li>
  <li><strong>T</strong>one: 어조</li>
  <li><strong>A</strong>udience: 대상 독자</li>
  <li><strong>R</strong>esponse: 출력 형식</li>
</ul>

<div class="tip-box">
  <strong>실전 팁:</strong> 어떤 프레임워크를 사용하든 핵심은 동일합니다 — <strong>역할, 맥락, 지시, 형식, 제약</strong>을 빠짐없이 포함하세요. 처음부터 완벽한 프롬프트를 쓸 필요는 없습니다. 간단히 시작하고 AI의 응답을 보면서 <strong>반복적으로 개선(Iterative Refinement)</strong>하는 것이 효과적입니다.
</div>

<h2>5. 프롬프트 작성 체크리스트</h2>
<p>프롬프트를 전송하기 전에 아래 항목을 점검하세요.</p>
<ul>
  <li>AI에게 어떤 역할(전문가)을 부여했는가?</li>
  <li>충분한 배경 정보와 맥락을 제공했는가?</li>
  <li>수행할 작업을 명확하고 구체적으로 기술했는가?</li>
  <li>원하는 출력 형식(표, 목록, 문단 등)을 지정했는가?</li>
  <li>분량, 언어, 톤 등 제약 조건을 명시했는가?</li>
  <li>AI가 오해할 수 있는 모호한 표현은 없는가?</li>
  <li>결과물의 대상 독자(수신자)를 명시했는가?</li>
</ul>

<h2>6. 발전소 업무 프롬프트 실전 연습</h2>
<p>다음 연습 문제를 통해 프롬프트 작성을 연습해보세요.</p>
<ol>
  <li><strong>설비 점검 보고서</strong>: "당신은 발전설비 점검 전문가입니다. 다음 점검 데이터를 바탕으로 설비 상태 평가 보고서를 작성해주세요. 양호/주의/위험 3단계로 등급을 매기고, 위험 항목에 대한 조치 방안을 제시해주세요."</li>
  <li><strong>교대 인수인계</strong>: "다음 교대근무 인수인계 메모를 체계적으로 정리해주세요. 형식: 1) 당직 현황 요약, 2) 주요 이슈 및 조치 사항, 3) 차기 교대 주의 사항, 4) 미완료 작업 목록."</li>
  <li><strong>기술 문서 요약</strong>: "다음 기술 매뉴얼(영문)의 핵심 내용을 한국어로 요약해주세요. 운전원이 현장에서 참고할 수 있도록 A4 1장 분량의 요약본을 작성하되, 안전 주의사항은 별도 박스로 강조해주세요."</li>
</ol>

<div class="warning-box">
  <strong>주의:</strong> 프롬프트에 회사 기밀 정보, 개인정보, 보안 관련 데이터를 포함하지 마세요. 외부 AI 서비스에 입력된 정보는 학습 데이터로 사용될 수 있습니다. 반드시 사내 AI 사용 정책을 확인하세요.
</div>

<h4>정리</h4>
<p>
  프롬프트 엔지니어링은 AI를 효과적으로 활용하기 위한 <strong>핵심 역량</strong>입니다.
  좋은 프롬프트의 5가지 요소(역할, 맥락, 지시, 형식, 제약)를 이해하고,
  CRISP/RACE/CO-STAR 등의 프레임워크를 활용하여 점진적으로 프롬프트 작성 능력을 키워나가세요.
  처음에는 시간이 걸리더라도, 숙달되면 AI를 통해 발전소 업무 생산성을 크게 향상시킬 수 있습니다.
</p>
`,quizzes:[{question:"좋은 프롬프트의 5가지 핵심 요소(RCICF)에 포함되지 않는 것은?",options:["역할(Role)","맥락(Context)","예산(Budget)","형식(Format)"],correctIndex:2,explanation:"좋은 프롬프트의 5가지 핵심 요소는 역할(Role), 맥락(Context), 지시(Instruction), 제약(Constraints), 형식(Format)입니다. 예산(Budget)은 포함되지 않습니다."},{question:"다음 중 프롬프트 프레임워크가 아닌 것은?",options:["CRISP (Capacity-Request-Insight-Style-Parameters)","RACE (Role-Action-Context-Expectation)","SMART (Specific-Measurable-Achievable-Relevant-Time-bound)","CO-STAR (Context-Objective-Style-Tone-Audience-Response)"],correctIndex:2,explanation:"SMART는 목표 설정 프레임워크이지 프롬프트 프레임워크가 아닙니다. CRISP, RACE, CO-STAR는 모두 프롬프트를 체계적으로 작성하기 위한 프레임워크입니다."}]},{id:"few-shot",categoryId:"prompt",title:"Few-shot 프롬프팅",titleEn:"Few-shot Prompting",estimatedMinutes:18,sortOrder:2,content:`
<h2>1. Few-shot 프롬프팅이란?</h2>
<p>
  Few-shot 프롬프팅은 AI에게 <strong>원하는 패턴을 몇 가지 예시를 통해 보여준 후</strong>,
  같은 패턴으로 새로운 입력에 대해 응답하도록 유도하는 기법입니다. 마치 신입 직원에게
  "이런 식으로 해주세요"라고 예시를 보여주는 것과 같습니다.
</p>
<p>
  이 기법은 특히 <strong>표준화된 형식이 중요한 발전소 업무</strong> — 정비 일지, 설비 점검 보고서,
  안전 사고 보고서 등 — 에서 AI가 조직의 양식에 맞게 출력을 생성하도록 유도할 때 매우 효과적입니다.
</p>

<h2>2. Zero-shot, One-shot, Few-shot 비교</h2>
<p>예시를 몇 개 제공하느냐에 따라 프롬프팅 방식이 구분됩니다.</p>

<table>
  <thead>
    <tr><th>유형</th><th>예시 수</th><th>설명</th><th>적합한 상황</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Zero-shot</strong></td>
      <td>0개</td>
      <td>예시 없이 직접 지시만으로 요청</td>
      <td>단순한 번역, 요약 등 AI가 이미 잘 수행하는 일반적 작업</td>
    </tr>
    <tr>
      <td><strong>One-shot</strong></td>
      <td>1개</td>
      <td>하나의 예시를 보여준 후 요청</td>
      <td>출력 형식을 간단히 지정하고 싶을 때</td>
    </tr>
    <tr>
      <td><strong>Few-shot</strong></td>
      <td>2~5개</td>
      <td>여러 예시를 보여준 후 요청</td>
      <td>복잡한 패턴, 특수한 형식, 도메인 특화 작업</td>
    </tr>
  </tbody>
</table>

<h3>Zero-shot 예시</h3>
<pre><code>다음 문장을 영어로 번역해주세요:
"보일러 튜브 누수가 발생했습니다."</code></pre>
<p>AI는 예시 없이도 번역을 잘 수행합니다. 이처럼 단순한 작업에는 Zero-shot으로 충분합니다.</p>

<h3>One-shot 예시: 설비 코드 분류</h3>
<pre><code>아래 형식으로 설비 코드를 분류해주세요.

예시:
입력: "BLR-001 보일러 1호기"
출력: {"코드": "BLR-001", "설비명": "보일러 1호기", "분류": "열교환설비", "등급": "A"}

이제 다음을 분류해주세요:
입력: "TBN-003 터빈 3호기"
출력:</code></pre>

<h2>3. Few-shot 실전 예시 — 발전소 문서</h2>

<h3>정비 일지 요약</h3>
<pre><code>아래 형식으로 정비 일지를 요약해주세요.

예시 1:
원문: "2026-03-15 보일러 1호기 과열기 튜브 점검 실시. 3번 튜브에서 두께 감소 확인(설계두께 5.0mm → 측정 4.2mm). 차기 정비 시 교체 권고."
요약: [2026-03-15] 보일러 1호기 | 과열기 튜브 점검 | 3번 튜브 두께 감소(4.2/5.0mm) | 조치: 차기 교체 권고

예시 2:
원문: "2026-03-18 복수기 냉각수 배관 진동 이상 감지. 진동값 4.5mm/s(허용치 3.0mm/s). 베어링 마모 의심. 긴급 정비 요청."
요약: [2026-03-18] 복수기 | 냉각수 배관 진동 이상(4.5/3.0mm/s) | 원인: 베어링 마모 의심 | 조치: 긴급 정비 요청

예시 3:
원문: "2026-03-20 FGD(배연탈황설비) 슬러리 펌프 교체 작업 완료. 가동 테스트 정상. 다음 점검일: 2026-09-20."
요약: [2026-03-20] FGD | 슬러리 펌프 교체 완료 | 가동 테스트 정상 | 차기 점검: 2026-09-20

이제 다음 정비 일지를 같은 형식으로 요약해주세요:
원문: "2026-04-01 급수펌프 2호기 축정렬 불량 확인. 진동값 상승 추세. 계획정비 시 축정렬 교정 필요. 일일 모니터링 지시."
요약:</code></pre>

<h3>안전 사고 분류</h3>
<pre><code>다음 안전 보고서를 분류해주세요.

예시 1:
보고서: "작업자가 안전모 미착용 상태로 고소 작업 중 낙하물에 부딪혀 두부 열상 발생"
분류: {"유형": "인적 요인", "심각도": "경상", "원인": "보호구 미착용", "관련규정": "산업안전보건법 제32조"}

예시 2:
보고서: "배관 플랜지 볼트 체결 불량으로 인한 스팀 누출 발생, 인근 작업자 화상"
분류: {"유형": "기계적 요인", "심각도": "중상", "원인": "체결 불량", "관련규정": "산업안전보건법 제38조"}

예시 3:
보고서: "폭우로 인한 석탄야적장 침수, 컨베이어벨트 전기 합선 발생"
분류: {"유형": "환경적 요인", "심각도": "설비손상", "원인": "기상악화(폭우)", "관련규정": "산업안전보건법 제37조"}

이제 다음 보고서를 분류해주세요:
보고서: "밀폐공간 진입 시 산소 농도 미측정으로 작업자 질식 사고 발생"
분류:</code></pre>

<h2>4. 효과적인 예시 선택 5가지 원칙</h2>
<ol>
  <li><strong>대표성</strong>: 실제 데이터에서 자주 나타나는 패턴을 예시로 선택합니다.</li>
  <li><strong>다양성</strong>: 서로 다른 유형의 입력-출력 쌍을 포함합니다. 비슷한 예시만 나열하면 AI가 특정 패턴에 편향됩니다.</li>
  <li><strong>일관성</strong>: 모든 예시에서 동일한 형식과 스타일을 유지합니다. 예시 간에 형식이 다르면 AI가 혼란을 겪습니다.</li>
  <li><strong>경계 사례(Edge Case)</strong>: 일반적인 경우뿐 아니라 특이한 경우의 예시도 1개 정도 포함합니다.</li>
  <li><strong>순서</strong>: 단순한 예시를 먼저, 복잡한 예시를 나중에 배치합니다.</li>
</ol>

<div class="tip-box">
  <strong>실전 팁:</strong> Few-shot 예시는 <strong>다양한 케이스</strong>를 포함하는 것이 좋습니다. 위 정비 일지 예시에서도 두께 감소, 진동 이상, 부품 교체 등 서로 다른 유형을 포함하여 AI가 다양한 상황에 대응할 수 있도록 했습니다.
</div>

<h2>5. Few-shot이 효과적인 발전소 업무</h2>
<ul>
  <li><strong>설비 이상 보고서 표준화</strong>: 다양한 작성자가 쓴 보고서를 통일된 형식으로 변환</li>
  <li><strong>정비 이력 데이터 정리</strong>: 자유 형식 기록을 구조화된 데이터(JSON, 표)로 변환</li>
  <li><strong>안전 사고 보고서 분류</strong>: 사고 보고서를 유형(인적, 기계적, 환경적)별로 자동 분류</li>
  <li><strong>기술 용어 번역</strong>: 발전소 전문 용어를 표준 영문 용어로 일관되게 번역</li>
  <li><strong>고장 코드 매핑</strong>: 자연어 설명을 표준 고장 코드(KS, ISO)로 매핑</li>
</ul>

<h2>6. Few-shot의 한계와 주의사항</h2>
<div class="warning-box">
  <strong>주의할 점:</strong>
  <ul>
    <li>예시가 너무 많으면 토큰을 과도하게 소비하여 비용이 증가하고, 컨텍스트 윈도우를 낭비합니다. 일반적으로 <strong>3~5개</strong>면 충분합니다.</li>
    <li>잘못된 예시를 제공하면 AI가 그 오류 패턴까지 학습합니다. 예시의 정확성을 반드시 검증하세요.</li>
    <li>예시에 편향된 데이터가 포함되면 AI 출력에도 편향이 반영됩니다.</li>
    <li>매우 창의적인 작업(아이디어 브레인스토밍 등)에서는 Few-shot이 오히려 AI의 사고를 제한할 수 있습니다.</li>
    <li>예시의 순서도 결과에 영향을 줄 수 있습니다. 가장 관련성 높은 예시를 마지막에 배치하면 효과적입니다 (최신성 편향 활용).</li>
  </ul>
</div>

<h4>정리</h4>
<p>
  Few-shot 프롬프팅은 AI에게 <strong>"내가 원하는 것이 이런 것"</strong>이라고 구체적으로 보여줄 수 있는 강력한 기법입니다.
  특히 표준화된 형식이 중요한 발전소 업무에서 매우 유용합니다.
  핵심은 <strong>대표적이고, 다양하며, 일관된 예시</strong>를 선택하는 것입니다.
  Zero-shot으로 부족할 때 One-shot이나 Few-shot을 시도하고,
  도메인 전문 작업에서는 처음부터 Few-shot을 적극 활용하세요.
</p>
`,quizzes:[{question:"다음 중 Few-shot 프롬프팅에 대한 설명으로 올바른 것은?",options:["예시 없이 직접 지시만으로 요청하는 방식이다","2~5개의 예시를 통해 AI의 응답 패턴을 유도하는 기법이다","반드시 20개 이상의 예시를 제공해야 한다","AI 모델을 추가 학습시키는 Fine-tuning과 동일한 개념이다"],correctIndex:1,explanation:"Few-shot 프롬프팅은 2~5개의 예시를 제공하여 AI가 원하는 패턴을 학습하고 동일한 형식으로 응답하도록 유도하는 기법입니다. Fine-tuning과는 다른 개념이며, 모델 자체를 변경하지 않습니다."},{question:"Few-shot 예시 선택 시 반드시 지켜야 할 원칙이 아닌 것은?",options:["모든 예시에서 출력 형식의 일관성 유지","서로 다른 유형의 입력-출력 쌍으로 다양성 확보","예시를 가능한 한 많이(20개 이상) 제공","경계 사례(Edge Case)를 1개 정도 포함"],correctIndex:2,explanation:"예시가 너무 많으면 토큰을 과도하게 소비하고 컨텍스트 윈도우를 낭비합니다. 일반적으로 3~5개의 대표적이고 다양한 예시면 충분하며, 일관성과 다양성을 확보하는 것이 핵심입니다."}]},{id:"cot",categoryId:"prompt",title:"Chain-of-Thought 프롬프팅",titleEn:"Chain-of-Thought Prompting",estimatedMinutes:16,sortOrder:3,content:`
<h2>1. Chain-of-Thought(CoT)란?</h2>
<p>
  Chain-of-Thought(CoT) 프롬프팅은 AI에게 <strong>답을 바로 말하지 말고, 생각하는 과정을 단계별로
  보여달라</strong>고 요청하여 더 정확한 답변을 유도하는 기법입니다. 2022년 Google Research의
  Jason Wei 등이 발표한 논문에서 제안되었으며, 복잡한 추론이 필요한 작업에서 AI의 성능을
  크게 향상시키는 것으로 입증되었습니다.
</p>
<p>
  일반적인 프롬프팅에서 AI는 질문을 받으면 바로 최종 답을 생성합니다. 하지만 CoT를 사용하면
  AI가 <strong>중간 사고 단계</strong>를 하나씩 거치면서 답에 도달합니다. 이 과정에서 논리적 오류가
  줄어들고, 복잡한 문제도 정확하게 풀 수 있게 됩니다.
</p>

<div class="info-box">
  <strong>비유:</strong> 수학 시험에서 "풀이 과정을 쓰세요"라고 하면 정답률이 올라가는 것과 같은 원리입니다. 생각의 과정을 명시적으로 펼치면 실수를 줄일 수 있습니다.
</div>

<h2>2. "단계별로 생각해보세요" — 가장 간단한 CoT</h2>
<p>CoT를 유도하는 가장 간단한 방법은 프롬프트 끝에 특정 구문을 추가하는 것입니다.</p>
<ul>
  <li><strong>"단계별로 생각해보세요."</strong> (한국어)</li>
  <li><strong>"Let's think step by step."</strong> (영문)</li>
  <li><strong>"하나씩 차근차근 분석해주세요."</strong></li>
  <li><strong>"풀이 과정을 상세히 보여주세요."</strong></li>
</ul>

<h2>3. 수학/비용 계산에서의 CoT</h2>
<h3>CoT 없이 (일반 프롬프트)</h3>
<pre><code>발전소에서 석탄 500톤을 사용하여 전력을 생산합니다.
석탄 1톤당 2,500kWh를 생산하고, 전력 판매 가격이 kWh당 120원입니다.
연료비가 톤당 15만원이고 기타 운영비가 총 2,000만원일 때,
순이익은 얼마인가요?</code></pre>
<p>AI가 바로 최종 숫자를 제시하면 계산 오류를 검증하기 어렵습니다.</p>

<h3>CoT 적용 (단계별 사고 유도)</h3>
<pre><code>발전소에서 석탄 500톤을 사용하여 전력을 생산합니다.
석탄 1톤당 2,500kWh를 생산하고, 전력 판매 가격이 kWh당 120원입니다.
연료비가 톤당 15만원이고 기타 운영비가 총 2,000만원일 때,
순이익은 얼마인가요?

단계별로 계산 과정을 보여주세요:
1단계: 총 발전량 계산
2단계: 총 매출 계산
3단계: 총 비용 계산 (연료비 + 운영비)
4단계: 순이익 계산</code></pre>

<p>AI의 응답:</p>
<pre><code>1단계: 총 발전량 = 500톤 × 2,500kWh = 1,250,000kWh
2단계: 총 매출 = 1,250,000kWh × 120원 = 150,000,000원 (1억 5천만원)
3단계: 총 비용 = (500톤 × 150,000원) + 20,000,000원 = 95,000,000원
4단계: 순이익 = 150,000,000 - 95,000,000 = 55,000,000원 (5,500만원)</code></pre>

<h2>4. Self-Consistency와 CoT의 결합</h2>
<p>
  Self-Consistency는 CoT의 신뢰성을 높이는 기법입니다. 같은 문제에 대해 <strong>CoT를 여러 번
  독립적으로 수행</strong>하고, 가장 빈번한 답을 채택합니다.
</p>
<pre><code>다음 설비 고장 원인을 3가지 독립적인 CoT 분석으로 진단해주세요.
각 분석은 서로 다른 관점(기계적/전기적/운전 조건)에서 수행하고,
마지막에 다수결로 최종 결론을 내려주세요.

증상: 급수펌프 토출 압력 저하, 모터 전류 상승, 비정상 진동 발생</code></pre>

<div class="tip-box">
  <strong>실전 팁:</strong> Self-Consistency + CoT 조합은 특히 <strong>설비 고장 진단</strong>처럼 정확한 판단이 중요한 업무에서 매우 효과적입니다.
</div>

<h2>5. 발전소 고장 진단 — CoT 실전 사례</h2>
<pre><code>상황: 발전소 제어실에서 다음 알람이 동시에 발생했습니다.
- 보일러 드럼 수위 저하 알람
- 급수 펌프 토출 압력 저하 알람
- 급수 유량 감소 알람

이 3가지 알람의 상관관계를 분석하고,
가장 가능성 높은 근본 원인을 추론해주세요.
단계별로 논리적으로 분석해주세요.

1단계: 각 알람의 의미 파악
2단계: 알람 간 인과관계 분석
3단계: 가능한 원인 후보 도출
4단계: 가장 가능성 높은 근본 원인 결론
5단계: 즉시 취해야 할 조치 권고</code></pre>

<h2>6. Manual-CoT vs Auto-CoT (Zero-shot CoT)</h2>
<table>
  <thead>
    <tr><th>구분</th><th>Manual-CoT</th><th>Auto-CoT (Zero-shot CoT)</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>방법</strong></td>
      <td>사용자가 직접 사고 단계를 설계하여 예시로 제공</td>
      <td>"단계별로 생각해보세요" 한 문장만 추가</td>
    </tr>
    <tr>
      <td><strong>장점</strong></td>
      <td>사고 과정을 정밀하게 제어 가능</td>
      <td>간편하고 빠르게 적용 가능</td>
    </tr>
    <tr>
      <td><strong>단점</strong></td>
      <td>예시 설계에 시간과 노력 필요</td>
      <td>복잡한 문제에서 정확도가 떨어질 수 있음</td>
    </tr>
    <tr>
      <td><strong>적합한 경우</strong></td>
      <td>반복적으로 사용하는 고정된 유형의 문제</td>
      <td>일회성 질문이나 빠른 분석이 필요할 때</td>
    </tr>
  </tbody>
</table>

<h2>7. CoT가 효과적인 업무 vs 불필요한 업무</h2>
<h3>CoT가 효과적인 경우</h3>
<ul>
  <li><strong>설비 고장 진단</strong>: 여러 증상에서 근본 원인을 추론할 때</li>
  <li><strong>비용/효율 계산</strong>: 여러 항목의 비용을 단계별로 계산할 때</li>
  <li><strong>의사결정 지원</strong>: 장단점을 비교 분석하여 최적안을 도출할 때</li>
  <li><strong>안전 사고 분석</strong>: 사고 원인을 체계적으로 분석할 때 (RCA: Root Cause Analysis)</li>
  <li><strong>공정 최적화</strong>: 복잡한 공정 변수들의 상호작용을 분석할 때</li>
</ul>

<h3>CoT가 불필요한 경우</h3>
<ul>
  <li>단순한 번역이나 요약 작업</li>
  <li>창의적 글쓰기, 아이디어 브레인스토밍</li>
  <li>단답형 사실 확인 질문 ("한국중부발전 본사는 어디인가요?")</li>
</ul>

<div class="warning-box">
  <strong>주의:</strong> CoT가 항상 최선은 아닙니다. 단순한 작업에 CoT를 사용하면 불필요하게 응답이 길어지고 토큰이 낭비됩니다. 분석적 추론이 필요한 작업에서만 선택적으로 사용하세요.
</div>

<h4>정리</h4>
<p>
  Chain-of-Thought 프롬프팅은 AI에게 <strong>"생각하는 과정을 보여줘"</strong>라고 요청하는
  간단하면서도 강력한 기법입니다. 특히 수치 계산, 고장 진단, 의사결정 지원 등
  <strong>복잡한 추론이 필요한 발전소 업무</strong>에서 AI의 정확성을 크게 높일 수 있습니다.
  "단계별로 생각해보세요"라는 한 마디를 습관화하는 것만으로도 AI 활용 품질이 향상됩니다.
  Self-Consistency를 결합하면 진단의 신뢰도를 더욱 높일 수 있습니다.
</p>
`,quizzes:[{question:"Chain-of-Thought(CoT) 프롬프팅의 핵심 원리는?",options:["AI에게 가능한 한 짧게 답하도록 요청하는 것","AI에게 중간 사고 단계를 명시적으로 보여달라고 요청하는 것","AI에게 이미지를 생성하도록 요청하는 것","AI에게 여러 번 같은 질문을 반복하는 것"],correctIndex:1,explanation:"CoT의 핵심은 AI에게 최종 답만 말하지 말고 단계별로 사고 과정을 명시적으로 보여달라고 요청하여 추론의 정확성을 높이는 것입니다."},{question:"CoT 프롬프팅이 가장 효과적인 발전소 업무는?",options:["단순 번역 작업","아이디어 브레인스토밍","설비 고장 근본 원인 분석(RCA)","회의 일정 확인"],correctIndex:2,explanation:"CoT는 복잡한 논리적 추론이 필요한 작업에서 가장 효과적입니다. 설비 고장 근본 원인 분석(RCA)은 여러 증상의 인과관계를 단계별로 추론해야 하므로 CoT가 매우 유용합니다."}]},{id:"role-play",categoryId:"prompt",title:"역할 부여 프롬프팅",titleEn:"Role-play Prompting",estimatedMinutes:16,sortOrder:4,content:`
<h2>1. 역할 부여 프롬프팅이란?</h2>
<p>
  역할 부여 프롬프팅은 AI에게 <strong>특정 전문가, 직업, 캐릭터의 역할을 부여</strong>하여
  해당 관점과 전문성에 기반한 답변을 유도하는 기법입니다. AI는 부여받은 역할에 따라 사용하는 용어,
  분석 깊이, 관점, 톤이 달라지므로, 업무 목적에 맞는 적절한 역할 설정이 중요합니다.
</p>
<p>
  AI 모델은 학습 과정에서 다양한 분야의 전문 지식을 습득합니다. 역할을 지정하면 AI가 해당 분야와
  관련된 지식을 <strong>우선적으로 활성화</strong>하여 답변을 생성합니다.
</p>

<h3>역할 부여의 4가지 효과</h3>
<ul>
  <li><strong>전문성 향상</strong>: 해당 분야의 전문 용어와 깊이 있는 분석 제공</li>
  <li><strong>관점 설정</strong>: 특정 직무나 역할의 시각에서 문제를 바라봄</li>
  <li><strong>톤 조절</strong>: 전문가다운 어조, 교육자의 어조 등 상황에 맞는 톤</li>
  <li><strong>일관성 유지</strong>: 대화 전체에서 동일한 전문가 관점 유지</li>
</ul>

<h2>2. 효과적인 역할 설정 4요소</h2>
<p>단순히 "당신은 전문가입니다"보다는 구체적인 역할 설정이 더 효과적입니다.</p>

<table>
  <thead>
    <tr><th>요소</th><th>설명</th><th>예시</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>직업/직책</strong></td><td>구체적인 직업과 직책</td><td>"화력발전소 설비팀 차장"</td></tr>
    <tr><td><strong>경력/전문성</strong></td><td>경력 기간과 전문 분야</td><td>"15년 경력, 보일러 및 터빈 전문"</td></tr>
    <tr><td><strong>역량/지식</strong></td><td>보유한 특정 지식이나 자격</td><td>"발전설비기사 자격, KS 규격에 정통"</td></tr>
    <tr><td><strong>대상 청중</strong></td><td>답변의 수신자</td><td>"신입 엔지니어에게 설명하듯이"</td></tr>
  </tbody>
</table>

<div class="info-box">
  <strong>공식:</strong> "당신은 [경력]년 경력의 [전문 분야] 전문가이며, [역량/자격]을 보유하고 있습니다. [대상 청중]을 위해 답변해주세요."
</div>

<h2>3. 시스템 프롬프트에서의 역할 설정</h2>
<p>ChatGPT, Claude 등 대부분의 AI 서비스에서는 <strong>시스템 프롬프트(System Prompt)</strong>를 통해 AI의 기본 역할을 설정할 수 있습니다. 시스템 프롬프트에 역할을 지정하면 해당 대화 세션 전체에서 일관된 역할이 유지됩니다.</p>

<pre><code>[시스템 프롬프트]
당신은 한국중부발전(KOMIPO)의 화력발전소 운영 전문가입니다.
다음 원칙을 항상 준수하세요:
1. 기술적 정확성을 최우선으로 합니다.
2. 안전 관련 질문에는 반드시 관련 법규를 인용합니다.
3. 모든 답변에 실무 적용 가능한 조언을 포함합니다.
4. 불확실한 정보에는 반드시 "확인이 필요합니다"라고 표시합니다.

[사용자 프롬프트]
보일러 기동 절차에서 주의할 점을 알려주세요.</code></pre>

<h2>4. 발전소 업무별 역할 프롬프트 5가지</h2>

<h4>역할 1: 설비 진단 전문가</h4>
<pre><code>당신은 25년 경력의 화력발전소 설비 진단 전문가입니다.
진동 분석, 열화상 분석, 윤활유 분석 등 다양한 비파괴 진단 기법에
정통하며, 한국전력 발전자회사에서 근무한 경험이 있습니다.

다음 터빈 진동 데이터를 분석하고, 설비 상태를 평가해주세요.
기술적으로 정확하되, 운전원이 이해할 수 있는 수준으로 설명해주세요.</code></pre>

<h4>역할 2: 안전 관리 전문가 (발전소 안전 전문가 시뮬레이션)</h4>
<pre><code>당신은 산업안전기사 자격을 가진 발전소 안전관리 팀장입니다.
KOSHA(한국산업안전보건공단) 가이드라인과 산업안전보건법에 정통하며,
20년간 무재해 달성 경험이 있습니다.

다음 작업에 대한 위험성 평가서와 안전 작업 허가서(PTW)의
핵심 체크포인트를 작성해주세요.

작업: 밀폐공간(보일러 드럼) 내부 점검 작업</code></pre>

<h4>역할 3: 환경 관리 전문가</h4>
<pre><code>당신은 환경공학 박사 학위를 가진 발전소 환경관리 책임자입니다.
대기환경보전법, 배출허용기준, 탄소배출권거래제에 정통합니다.

2026년 1분기 대기오염물질 배출 데이터를 분석하고,
법적 기준 대비 현황과 개선 방안을 보고서 형식으로 작성해주세요.</code></pre>

<h4>역할 4: 교육 훈련 담당자</h4>
<pre><code>당신은 발전소 교육훈련 전문가로, 신입 직원부터 관리자까지
다양한 수준의 교육 프로그램을 설계한 10년 경력을 보유하고 있습니다.

"AI 활용 업무 효율화" 주제로 발전소 사무직 직원 대상 4시간 교육
커리큘럼을 설계해주세요. 이론 30%, 실습 70%로 구성해주세요.</code></pre>

<h4>역할 5: 경영 전략 컨설턴트</h4>
<pre><code>당신은 에너지 산업 전문 경영 컨설턴트로, 국내외 발전회사의
경영 전략 수립에 15년간 참여해왔습니다.
탄소중립 전환, 재생에너지 확대, 디지털 전환 트렌드에 정통합니다.

우리 발전소의 2030 중장기 경영 전략 방향을 제안해주세요.
SWOT 분석을 포함하고, 3가지 핵심 전략 과제와 로드맵을 제시해주세요.</code></pre>

<h2>5. 다중 역할 협업: 하나의 문제, 여러 관점</h2>
<p>하나의 문제를 여러 전문가 관점에서 분석하고 싶을 때, 순차적으로 다른 역할을 부여하여 다양한 시각을 얻을 수 있습니다.</p>
<pre><code>다음 발전소 설비 투자 계획에 대해 3가지 관점에서 평가해주세요:

1. 기술 전문가 관점: 기술적 타당성과 성능 향상 효과
2. 재무 담당자 관점: 투자 대비 수익률(ROI)과 경제성 분석
3. 안전 관리자 관점: 안전성 향상 효과와 리스크 요인

각 관점별로 장점 3가지, 단점 2가지, 추천 의견을 제시해주세요.</code></pre>

<div class="tip-box">
  <strong>실전 팁:</strong> 역할을 부여할 때 <strong>"불확실한 정보에는 모른다고 답해주세요"</strong>라는 제약을 추가하면 AI의 할루시네이션(거짓 정보 생성)을 크게 줄일 수 있습니다.
</div>

<h2>6. 도메인 전문가 시뮬레이션의 한계</h2>
<div class="warning-box">
  <strong>주의:</strong> 역할 부여는 AI가 해당 역할의 <em>흉내</em>를 내는 것이지, 실제 전문가를 대체하는 것이 아닙니다. 특히 다음 영역의 AI 답변은 <strong>반드시 실제 전문가의 검증</strong>을 거쳐야 합니다:
  <ul>
    <li>안전 관련 의사결정 (인명에 관련된 사항)</li>
    <li>법률 및 규정 해석</li>
    <li>의료/건강 관련 조언</li>
    <li>설비 운전 조건 변경</li>
  </ul>
</div>

<h4>정리</h4>
<p>
  역할 부여 프롬프팅은 AI의 응답 품질과 관련성을 극적으로 향상시키는 기법입니다.
  직업, 경력, 전문 분야, 대상 청중을 구체적으로 설정할수록 더 정확하고 유용한 답변을 얻을 수 있습니다.
  시스템 프롬프트를 활용하면 대화 세션 전체에서 일관된 역할을 유지할 수 있으며,
  다중 역할을 통해 하나의 문제를 여러 관점에서 분석할 수 있습니다.
  발전소 업무의 다양한 영역(설비, 안전, 환경, 교육, 경영)에 맞는 역할을 설정하여
  AI를 <strong>분야별 전문 어시스턴트</strong>로 활용해보세요.
</p>
`,quizzes:[{question:"효과적인 역할 설정에 포함해야 할 4가지 요소가 아닌 것은?",options:["직업/직책","경력/전문성","AI 모델의 버전 번호","대상 청중"],correctIndex:2,explanation:"효과적인 역할 설정의 4가지 요소는 직업/직책, 경력/전문성, 역량/지식, 대상 청중입니다. AI 모델의 버전 번호는 역할 설정과 관련이 없습니다."},{question:"시스템 프롬프트에 역할을 설정하면 얻을 수 있는 가장 큰 장점은?",options:["AI의 응답 속도가 빨라진다","대화 세션 전체에서 일관된 역할이 유지된다","AI의 학습 비용이 절감된다","AI가 인터넷에 접속할 수 있게 된다"],correctIndex:1,explanation:"시스템 프롬프트에 역할을 설정하면 해당 대화 세션 전체에서 AI가 일관된 역할과 관점을 유지하므로, 매번 역할을 다시 지정할 필요가 없습니다."}]},{id:"prompt-template",categoryId:"prompt",title:"프롬프트 템플릿 활용",titleEn:"Prompt Templates",estimatedMinutes:18,sortOrder:5,content:`
<h2>1. 프롬프트 템플릿이란?</h2>
<p>
  프롬프트 템플릿은 <strong>반복적으로 사용하는 프롬프트의 기본 구조를 미리 만들어두고,
  상황에 따라 변수만 교체하여 사용하는 재사용 가능한 프롬프트 틀</strong>입니다. 마치 업무 문서의
  양식(서식)처럼, 핵심 구조는 고정하고 내용만 바꿔 쓸 수 있어 업무 효율을 크게 높일 수 있습니다.
</p>

<h3>템플릿의 5가지 장점</h3>
<ul>
  <li><strong>일관성 확보</strong>: 누가 사용하든 동일한 품질의 출력을 보장합니다.</li>
  <li><strong>시간 절약</strong>: 매번 프롬프트를 처음부터 작성할 필요가 없습니다.</li>
  <li><strong>품질 향상</strong>: 검증된 프롬프트 구조를 재사용하므로 안정적인 결과를 얻습니다.</li>
  <li><strong>지식 공유</strong>: 팀원 간에 효과적인 프롬프트를 공유하여 전체 팀의 AI 활용 역량을 높입니다.</li>
  <li><strong>표준화</strong>: 조직 전체의 AI 활용 방식을 표준화할 수 있습니다.</li>
</ul>

<h2>2. 템플릿 설계 방법론</h2>
<p>템플릿에서 상황에 따라 바뀌는 부분은 <code>{중괄호}</code> 안에 변수명을 넣어 표시합니다.</p>

<pre><code>기본 구조:
당신은 {역할}입니다.
{맥락/배경 정보}
다음 작업을 수행해주세요: {구체적 지시}
형식: {출력 형식}
제약조건: {제한사항}</code></pre>

<div class="info-box">
  <strong>변수 명명 규칙:</strong> 변수명은 직관적이고 한글로 작성하면 누구나 쉽게 이해할 수 있습니다. 예: <code>{부서명}</code>, <code>{보고서 유형}</code>, <code>{분석 기간}</code>, <code>{대상 독자}</code>
</div>

<h2>3. 업무 문서 템플릿</h2>

<h3>3-1. 보고서 작성 템플릿</h3>
<pre><code>당신은 {부서명} 소속 보고서 작성 전문가입니다.

다음 데이터를 바탕으로 {보고서 유형} 보고서를 작성해주세요.

[데이터/내용]
{핵심 데이터 또는 내용}

보고서 구성:
1. 요약 (Executive Summary) - 3줄 이내
2. 현황 분석
3. 주요 이슈 및 원인
4. 개선 방안 (구체적 실행 계획 포함)
5. 결론 및 향후 계획

분량: {분량}
대상 독자: {보고 대상}</code></pre>

<h3>3-2. 이메일 작성 템플릿</h3>
<pre><code>다음 조건으로 비즈니스 이메일을 작성해주세요.

수신자: {수신자 직책/이름}
목적: {이메일 목적}
핵심 내용:
- {내용 1}
- {내용 2}
- {내용 3}
톤: {격식체/반격식체}
회신 요청: {있음/없음}
길이: {짧게/보통/상세하게}</code></pre>

<h3>3-3. 회의록 정리 템플릿</h3>
<pre><code>다음 회의 내용을 아래 형식으로 정리해주세요.

[회의 내용]
{회의 녹취/메모}

정리 형식:
■ 회의 정보: {일시}, {참석자}, {장소}
■ 안건:
■ 주요 논의 사항: (발언자별 정리)
■ 결정 사항:
■ Action Items: (담당자, 내용, 기한을 표로 작성)
■ 다음 회의 일정:</code></pre>

<h2>4. 기술 분석 템플릿</h2>

<h3>4-1. 설비 점검 보고 템플릿</h3>
<pre><code>다음 점검 데이터를 바탕으로 설비 점검 보고서를 작성해주세요.

설비명: {설비명}
점검일: {날짜}
점검 유형: {정기/수시/긴급}

[점검 데이터]
{측정값, 관찰 사항 등}

보고서 형식:
1. 설비 개요
2. 점검 결과 (항목별 양호/주의/위험 등급)
3. 이상 항목 상세 분석
4. 조치 사항 및 권고
5. 차기 점검 계획</code></pre>

<h3>4-2. 데이터 분석 요청 템플릿</h3>
<pre><code>다음 데이터를 분석해주세요.

데이터 설명: {데이터 유형 및 출처}
분석 기간: {기간}
분석 목적: {분석을 통해 얻고자 하는 인사이트}

분석 항목:
1. 기술 통계 (평균, 중앙값, 표준편차 등)
2. 트렌드 분석 (시계열 변화)
3. 이상치 탐지
4. 상관관계 분석
5. 핵심 인사이트 3가지
6. 데이터 기반 제언</code></pre>

<h3>4-3. 안전 체크리스트 생성 템플릿</h3>
<pre><code>다음 작업에 대한 안전 체크리스트를 작성해주세요.

작업명: {작업명}
작업 장소: {장소}
작업 유형: {고소작업/밀폐공간/전기작업/화기작업/중량물 취급}
작업 인원: {인원수}

체크리스트 구성:
1. 작업 전 확인사항 (안전장구, 허가서, 교육 등)
2. 작업 중 주의사항
3. 비상 시 대응 절차
4. 작업 후 점검사항
5. 관련 법규 및 사내 규정 번호</code></pre>

<h2>5. 변수 치환 패턴과 조건부 지시</h2>
<p>템플릿을 더 유연하게 만들려면 조건부 지시를 포함할 수 있습니다.</p>
<pre><code>보고서 유형이 {보고서 유형}인 경우:
- "월간 보고"이면: 전월 대비 변화율을 포함해주세요
- "분기 보고"이면: 분기 목표 대비 달성률을 포함해주세요
- "연간 보고"이면: 연간 트렌드 차트와 차년도 전망을 포함해주세요</code></pre>

<div class="tip-box">
  <strong>실전 팁:</strong> 위 템플릿을 메모장이나 노션(Notion)에 저장해두고, 업무 상황에 따라 변수 부분만 교체하여 사용하세요. 팀 공유 폴더에 "프롬프트 라이브러리"를 만들면 팀 전체의 AI 활용 효율이 높아집니다.
</div>

<h2>6. 프롬프트 라이브러리 구축 5단계</h2>
<ol>
  <li><strong>수집</strong>: 팀원들이 효과적으로 사용한 프롬프트를 모읍니다.</li>
  <li><strong>분류</strong>: 업무 유형별(보고서, 이메일, 분석, 안전 등)로 분류합니다.</li>
  <li><strong>표준화</strong>: 변수 표기({})를 통일하고 사용 설명서를 작성합니다.</li>
  <li><strong>테스트</strong>: 다양한 상황에서 템플릿을 테스트하고 결과를 검증합니다.</li>
  <li><strong>업데이트</strong>: 정기적으로 템플릿을 개선하고 새로운 템플릿을 추가합니다.</li>
</ol>

<div class="warning-box">
  <strong>주의:</strong> 템플릿에 기밀 정보를 포함하지 마세요. 변수 자리에 기밀 데이터를 넣어 사용할 때도 해당 AI 서비스의 데이터 처리 정책을 반드시 확인하세요.
</div>

<h4>정리</h4>
<p>
  프롬프트 템플릿은 AI 활용의 <strong>효율성과 일관성을 극대화</strong>하는 실전 도구입니다.
  업무별로 검증된 템플릿을 만들어두면, 누구나 빠르고 안정적으로 AI를 활용할 수 있습니다.
  보고서, 이메일, 회의록 등 업무 문서부터 설비 점검, 데이터 분석, 안전 체크리스트까지
  다양한 영역의 템플릿을 구축하세요. 팀 전체가 공유하는 "프롬프트 라이브러리"를 통해
  조직 차원의 AI 활용 역량을 높여보세요.
</p>
`,quizzes:[{question:"프롬프트 템플릿에서 상황에 따라 교체하는 부분을 표시하는 방법은?",options:["대괄호 []로 표시","중괄호 {}로 변수명 표시","별표 *로 표시","밑줄 _로 표시"],correctIndex:1,explanation:"프롬프트 템플릿에서는 상황에 따라 바뀌는 부분을 {중괄호} 안에 변수명을 넣어 표시합니다. 예: {보고서 유형}, {수신자}, {데이터}."},{question:"프롬프트 템플릿 라이브러리 구축 순서로 올바른 것은?",options:["테스트 → 수집 → 분류 → 표준화 → 업데이트","수집 → 분류 → 표준화 → 테스트 → 업데이트","표준화 → 수집 → 테스트 → 분류 → 업데이트","분류 → 수집 → 업데이트 → 표준화 → 테스트"],correctIndex:1,explanation:"프롬프트 라이브러리 구축은 수집 → 분류 → 표준화 → 테스트 → 업데이트 순서로 진행합니다. 먼저 효과적인 프롬프트를 모으고, 유형별로 분류한 후, 변수를 표준화하고, 테스트를 거쳐, 지속적으로 개선합니다."}]},{id:"prompt-advanced",categoryId:"prompt",title:"고급 프롬프트 기법",titleEn:"Advanced Prompt Techniques",estimatedMinutes:20,sortOrder:6,content:`
<h2>고급 프롬프트 기법 개요</h2>
<p>
  기본적인 프롬프트 작성법을 넘어, AI 연구 분야에서 개발된 <strong>고급 프롬프팅 기법</strong>들이
  있습니다. 이 기법들을 활용하면 더 정확하고 신뢰성 높은 AI 결과물을 얻을 수 있습니다.
  이번 강의에서는 실무에서 활용 가능한 6가지 핵심 고급 기법을 다룹니다.
</p>

<h2>1. Self-Consistency (자기 일관성)</h2>
<p>
  Self-Consistency는 <strong>같은 질문에 대해 AI가 여러 번 독립적으로 답변을 생성한 후,
  가장 빈번하게 나타나는 답변을 최종 답으로 채택</strong>하는 기법입니다. 마치 여러 전문가에게
  같은 질문을 하고, 다수결로 결론을 내리는 것과 유사합니다.
</p>

<pre><code>다음 설비 고장 원인에 대해 3가지 독립적인 분석을 수행해주세요.
각 분석은 서로 다른 관점에서 진행하되, 최종적으로 가장 가능성 높은
원인을 다수결 방식으로 결정해주세요.

증상: 터빈 출력 저하, 진동 증가, 윤활유 온도 상승

[분석 1] - 기계적 관점에서 분석
[분석 2] - 열역학적 관점에서 분석
[분석 3] - 운전 이력 기반 분석
[종합 판단] - 3가지 분석의 공통 결론</code></pre>

<div class="info-box">
  <strong>활용 포인트:</strong> Self-Consistency는 특히 명확한 정답이 있는 문제(수치 계산, 진단, 분류)에서 효과적입니다. API를 통해 temperature를 높여 다양한 응답을 생성한 후 투표하는 방식으로 자동화할 수도 있습니다.
</div>

<h2>2. Tree-of-Thought (사고의 나무)</h2>
<p>
  Tree-of-Thought(ToT)는 Chain-of-Thought의 발전형으로, <strong>하나의 사고 경로만 따라가는 것이
  아니라 여러 가능한 사고 경로를 나무 구조로 탐색</strong>하는 기법입니다. 각 분기점에서 여러 선택지를
  평가하고, 가장 유망한 경로를 선택합니다.
</p>

<pre><code>발전소의 연료 조달 비용을 절감하기 위한 전략을
Tree-of-Thought 방식으로 분석해주세요.

[1단계: 가능한 접근 방향]
- 경로 A: 연료 소싱(sourcing) 다변화
- 경로 B: 연소 효율 최적화
- 경로 C: 장기 계약 재협상

각 경로별로:
[2단계: 세부 방안 도출] - 각 경로에서 3가지 세부 방안
[3단계: 실현 가능성 평가] - 비용, 기간, 리스크 평가
[4단계: 최적 조합 선택] - 가장 효과적인 방안 조합 제시</code></pre>

<h2>3. 메타 프롬프팅 (프롬프트로 프롬프트 생성)</h2>
<p>
  메타 프롬프팅은 <strong>AI에게 "좋은 프롬프트를 만들어달라"고 요청</strong>하여, AI 스스로
  최적의 프롬프트를 설계하도록 하는 기법입니다. 프롬프트를 어떻게 작성해야 할지 모를 때 매우 유용합니다.
</p>

<pre><code>나는 발전소 운영팀에서 일하고 있습니다.
다음 업무를 AI로 처리하고 싶은데, 최적의 프롬프트를 작성해주세요.

업무: 매월 설비 가동률 보고서를 작성해야 합니다.
입력 데이터: 엑셀 파일 (설비별 가동시간, 정지시간, 정비이력)
원하는 출력: 경영진 보고용 2장 분량 보고서
요구사항: 전월 대비 변화, 주요 이슈, 개선 방안 포함

위 조건에 맞는 프롬프트를 작성해주세요.
변수로 교체 가능한 부분은 {변수명}으로 표시해주세요.</code></pre>

<div class="tip-box">
  <strong>실전 팁:</strong> 메타 프롬프팅은 프롬프트 작성 경험이 적은 직원들에게 특히 유용합니다. AI가 생성한 프롬프트를 검토하고 수정한 후 팀 템플릿 라이브러리에 추가하세요.
</div>

<h2>4. Prompt Chaining (프롬프트 체이닝)</h2>
<p>
  Prompt Chaining은 <strong>복잡한 작업을 여러 개의 작은 프롬프트로 나누어 순차적으로 실행</strong>하고,
  이전 단계의 출력을 다음 단계의 입력으로 사용하는 기법입니다.
</p>

<pre><code>[1단계 프롬프트] 데이터 정리
"다음 원시 데이터에서 설비별 가동률을 계산하고 표로 정리해주세요."
→ 1단계 결과를 복사

[2단계 프롬프트] 분석
"위 가동률 데이터를 분석하여 전월 대비 변동 사항과 이상치를 식별해주세요."
→ 2단계 결과를 복사

[3단계 프롬프트] 보고서 작성
"위 분석 결과를 바탕으로 경영진 보고용 설비 가동률 보고서를 작성해주세요."
→ 3단계 결과를 복사

[4단계 프롬프트] 검토 및 교정
"위 보고서를 검토하고, 논리적 오류, 숫자 불일치, 표현 개선 사항을 지적해주세요."</code></pre>

<div class="warning-box">
  <strong>주의:</strong> 체이닝의 각 단계에서 출력 품질을 확인하세요. 초기 단계에서 오류가 발생하면 이후 모든 단계에 오류가 전파됩니다 (Garbage In, Garbage Out). 각 단계 사이에 사람이 검증하는 것이 이상적입니다.
</div>

<h2>5. Constitutional AI 프롬프팅</h2>
<p>
  Constitutional AI 프롬프팅은 <strong>AI에게 준수해야 할 원칙(헌법)을 명시</strong>하여
  출력의 품질과 안전성을 보장하는 기법입니다. 특히 발전소처럼 안전이 중요한 환경에서 유용합니다.
</p>

<pre><code>다음 원칙을 반드시 준수하며 답변해주세요:

[원칙 1] 안전 관련 조언 시 반드시 "실제 작업 전 현장 전문가 확인 필수"라고 명시
[원칙 2] 불확실한 수치나 데이터는 "추정값"임을 명시
[원칙 3] 법적 규정 인용 시 "최신 법령 확인 필요"라고 부기
[원칙 4] 설비 운전 조건 변경을 권고할 때는 반드시 위험성도 함께 서술
[원칙 5] 환경 규제 관련 내용은 보수적 기준으로 답변

위 원칙 하에, 다음 질문에 답해주세요:
{질문}</code></pre>

<h2>6. 구조화된 출력 (Structured Output) 기법</h2>
<p>
  AI의 출력을 JSON, Markdown, YAML 등 <strong>구조화된 형식</strong>으로 받으면
  후속 처리(데이터 저장, 시스템 연동, 자동화)가 훨씬 쉬워집니다.
</p>

<h3>JSON 출력 예시</h3>
<pre><code>다음 설비 점검 결과를 JSON 형식으로 출력해주세요.

점검 데이터: 보일러 1호기, 2026-04-20 점검, 과열기 튜브 두께 4.2mm(기준 5.0mm),
드럼 수위계 정상, 안전밸브 작동 확인 완료

출력 형식:
{
  "설비코드": "BLR-001",
  "설비명": "",
  "점검일": "YYYY-MM-DD",
  "점검항목": [
    {
      "항목": "",
      "측정값": "",
      "기준값": "",
      "등급": "양호|주의|위험",
      "비고": ""
    }
  ],
  "종합등급": "",
  "권고사항": ""
}</code></pre>

<h3>Markdown 테이블 출력 예시</h3>
<pre><code>다음 비교 분석 결과를 Markdown 테이블로 출력해주세요.
열 구성: | 항목 | A안 | B안 | C안 | 평가 |
행: 초기비용, 유지보수비, 안전성, 효율성, 환경영향, 시공기간, 종합평가</code></pre>

<h2>고급 기법 비교표</h2>
<table>
  <thead>
    <tr><th>기법</th><th>핵심 원리</th><th>적합한 상황</th><th>난이도</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Self-Consistency</strong></td>
      <td>다수결 투표</td>
      <td>정답이 있는 분석/진단 문제</td>
      <td>중</td>
    </tr>
    <tr>
      <td><strong>Tree-of-Thought</strong></td>
      <td>복수 경로 탐색</td>
      <td>전략 수립, 의사결정, 창의적 문제 해결</td>
      <td>상</td>
    </tr>
    <tr>
      <td><strong>메타 프롬프팅</strong></td>
      <td>프롬프트 자동 생성</td>
      <td>프롬프트 작성이 어려울 때, 템플릿 개발</td>
      <td>하</td>
    </tr>
    <tr>
      <td><strong>Prompt Chaining</strong></td>
      <td>작업 분할 및 연결</td>
      <td>복잡한 다단계 업무 (보고서, 종합 분석)</td>
      <td>중</td>
    </tr>
    <tr>
      <td><strong>Constitutional AI</strong></td>
      <td>원칙 기반 제약</td>
      <td>안전/규정 준수가 중요한 답변</td>
      <td>중</td>
    </tr>
    <tr>
      <td><strong>Structured Output</strong></td>
      <td>형식 지정 출력</td>
      <td>데이터 처리, 시스템 연동, 자동화</td>
      <td>중</td>
    </tr>
  </tbody>
</table>

<h2>고급 기법 조합 활용</h2>
<p>실전에서는 이러한 기법들을 <strong>조합</strong>하여 사용할 수 있습니다. 예를 들어, 역할 부여 + CoT + Self-Consistency + Structured Output을 결합하면 더욱 신뢰성 높은 결과를 얻을 수 있습니다.</p>
<pre><code>당신은 30년 경력의 터빈 전문 엔지니어입니다. [역할 부여]

다음 터빈 이상 징후를 3가지 독립적인 관점에서 분석하고, [Self-Consistency]
각 분석에서 단계별로 추론 과정을 보여주세요. [CoT]

마지막으로 3가지 분석의 공통 결론을 도출하고,
결과를 JSON 형식으로 출력해주세요. [Structured Output]

징후: 터빈 1단 블레이드 온도 비정상 상승 (설계값 대비 +15도)</code></pre>

<h2>발전소 업무에서의 고급 기법 활용 시나리오</h2>
<ul>
  <li><strong>설비 고장 진단</strong>: Self-Consistency로 3가지 독립 분석 → 다수결 결론 도출</li>
  <li><strong>투자 의사결정</strong>: Tree-of-Thought로 복수 전략 경로 탐색 → 최적안 선택</li>
  <li><strong>프롬프트 표준화</strong>: 메타 프롬프팅으로 부서별 최적 프롬프트 자동 생성</li>
  <li><strong>월간 보고서</strong>: Prompt Chaining으로 데이터 정리 → 분석 → 보고서 → 검토 자동화</li>
  <li><strong>안전 관련 답변</strong>: Constitutional AI로 안전 원칙 준수 보장</li>
  <li><strong>시스템 연동</strong>: Structured Output으로 JSON/CSV 형식 데이터 생성 → 사내 시스템 자동 입력</li>
</ul>

<div class="tip-box">
  <strong>실전 팁:</strong> 처음부터 모든 고급 기법을 사용하려 하지 마세요. 먼저 기본 프롬프트로 시작하고, 결과가 불충분할 때 하나씩 고급 기법을 적용해보세요. 가장 투자 대비 효과가 높은 기법은 <strong>Prompt Chaining</strong>과 <strong>메타 프롬프팅</strong>입니다.
</div>

<h4>정리</h4>
<p>
  고급 프롬프트 기법은 AI 활용의 <strong>정확성, 신뢰성, 효율성</strong>을 한 단계 높이는 도구입니다.
  Self-Consistency는 답의 신뢰도를, Tree-of-Thought는 탐색의 폭을,
  메타 프롬프팅은 접근성을, Prompt Chaining은 복잡한 작업의 관리 가능성을,
  Constitutional AI는 안전성을, Structured Output은 자동화 가능성을 높입니다.
  발전소 업무의 특성에 맞게 이들 기법을 적절히 조합하여 AI를 최대한 활용해보세요.
</p>
`,quizzes:[{question:'AI에게 "좋은 프롬프트를 만들어달라"고 요청하여 AI 스스로 최적의 프롬프트를 설계하도록 하는 기법은?',options:["Self-Consistency (자기 일관성)","Tree-of-Thought (사고의 나무)","메타 프롬프팅","Prompt Chaining (프롬프트 체이닝)"],correctIndex:2,explanation:"메타 프롬프팅은 AI에게 프롬프트 자체를 설계하도록 요청하는 기법입니다. 프롬프트 작성이 어렵거나 새로운 업무에 대한 템플릿을 개발할 때 매우 유용합니다."},{question:"복잡한 작업을 여러 개의 작은 프롬프트로 나누어 순차적으로 실행하고, 이전 단계의 출력을 다음 단계의 입력으로 사용하는 기법은?",options:["Self-Consistency","Constitutional AI 프롬프팅","Prompt Chaining (프롬프트 체이닝)","Zero-shot 프롬프팅"],correctIndex:2,explanation:"Prompt Chaining(프롬프트 체이닝)은 복잡한 작업을 여러 개의 작은 프롬프트로 나누어 순차적으로 실행하고, 이전 단계의 출력을 다음 단계의 입력으로 사용하는 기법입니다. 데이터 정리 → 분석 → 보고서 작성 → 검토 같은 다단계 업무에 적합합니다."}]}],n=[{id:"agent-concept",categoryId:"ai-agents",title:"AI 에이전트란?",titleEn:"What are AI Agents?",estimatedMinutes:18,sortOrder:1,content:`
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
`,quizzes:[{question:"AI 에이전트의 4가지 핵심 구성요소에 해당하지 않는 것은?",options:["계획 (Planning)","도구 사용 (Tool Use)","데이터 라벨링 (Data Labeling)","자기 반성 (Self-Reflection)"],correctIndex:2,explanation:"AI 에이전트의 4가지 구성요소는 계획(Planning), 도구 사용(Tool Use), 메모리(Memory), 자기 반성(Self-Reflection)입니다. 데이터 라벨링은 머신러닝 학습 데이터 준비 과정이지 에이전트의 구성요소가 아닙니다."},{question:"ReAct 프레임워크에서 에이전트가 반복하는 3단계 순서는?",options:["계획 → 실행 → 보고","생각(Thought) → 행동(Action) → 관찰(Observation)","입력 → 처리 → 출력","학습 → 추론 → 저장"],correctIndex:1,explanation:"ReAct(Reasoning + Acting) 프레임워크는 생각(Thought) → 행동(Action) → 관찰(Observation)을 반복하며 목표에 접근하는 패턴입니다."}]},{id:"mcp-basics",categoryId:"ai-agents",title:"MCP(Model Context Protocol)",titleEn:"MCP Basics",estimatedMinutes:18,sortOrder:2,content:`
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
`,quizzes:[{question:"MCP(Model Context Protocol)의 3가지 핵심 구성요소가 아닌 것은?",options:["Tools (도구)","Resources (리소스)","Prompts (프롬프트)","Widgets (위젯)"],correctIndex:3,explanation:"MCP의 3가지 핵심 구성요소는 Tools(도구), Resources(리소스), Prompts(프롬프트)입니다. Widgets는 MCP의 구성요소가 아닙니다."},{question:"MCP 아키텍처에서 외부 시스템(DB, 파일 등)을 감싸는 어댑터 역할을 하는 것은?",options:["MCP 호스트","MCP 클라이언트","MCP 서버","MCP 브리지"],correctIndex:2,explanation:"MCP 서버는 외부 시스템(데이터베이스, 파일 시스템, API 등)을 감싸는 어댑터 역할을 합니다. AI 앱(호스트)이 MCP 클라이언트를 통해 MCP 서버에 접속합니다."}]},{id:"automation",categoryId:"ai-agents",title:"AI 자동화",titleEn:"AI Automation",estimatedMinutes:16,sortOrder:3,content:`
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
`,quizzes:[{question:"RPA와 AI 자동화의 가장 큰 차이점은?",options:["RPA가 더 비싸다","AI 자동화는 비정형 업무도 판단하여 처리할 수 있다","RPA는 클라우드에서만 작동한다","AI 자동화는 인터넷이 필요 없다"],correctIndex:1,explanation:"RPA는 정해진 규칙에 따라 정형 작업만 반복하지만, AI 자동화는 자연어 이해와 판단력을 갖추어 비정형 업무까지 유연하게 처리할 수 있습니다."},{question:"업무 자동화 도구 중 Microsoft 365 환경에 가장 잘 통합되는 것은?",options:["Zapier","Make (Integromat)","Power Automate","IFTTT"],correctIndex:2,explanation:"Microsoft Power Automate는 Microsoft 365 환경에 통합된 자동화 도구로, Outlook, Teams, SharePoint, Excel 등 Microsoft 제품과의 연동이 가장 뛰어납니다."}]},{id:"agent-cases",categoryId:"ai-agents",title:"AI 에이전트 활용 사례",titleEn:"Agent Use Cases",estimatedMinutes:18,sortOrder:4,content:`
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
`,quizzes:[{question:"다음 중 코딩 에이전트에 해당하지 않는 것은?",options:["Claude Code","Cursor","Perplexity Pro","GitHub Copilot Workspace"],correctIndex:2,explanation:"Perplexity Pro는 코딩 에이전트가 아닌 리서치 에이전트입니다. 웹을 검색하여 정보를 종합하고 리포트를 생성하는 것이 주요 기능입니다."},{question:"발전소 모니터링 에이전트가 이상 징후를 감지한 후 수행하는 작업으로 적절하지 않은 것은?",options:["과거 정비 이력에서 유사 사례를 검색한다","설비를 자동으로 즉시 정지시킨다","원인을 추정하고 담당자에게 알린다","정비 일정 조정을 제안한다"],correctIndex:1,explanation:"AI 에이전트는 이상 징후 감지, 원인 분석, 알림, 정비 제안 등을 수행하지만, 설비를 자동으로 즉시 정지시키는 것은 안전상 사람의 최종 판단이 필요한 영역입니다."}]}],i=[{id:"doc-ai",categoryId:"business",title:"문서 작성 AI 활용",titleEn:"Document AI",estimatedMinutes:16,sortOrder:1,content:`
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
`,quizzes:[{question:"AI를 활용한 문서 작성의 올바른 원칙은?",options:["AI가 최종본을 생성하고 사람은 확인만 한다","초안은 AI가 작성하고, 검토와 수정은 사람이 한다","AI에게 모든 판단을 위임한다","사람이 먼저 완성하고 AI는 사용하지 않는다"],correctIndex:1,explanation:'AI 문서 작성의 핵심 원칙은 "초안은 AI가, 검토는 사람이"입니다. AI가 빠르게 초안을 생성하고, 사람이 사실 확인, 내용 보완, 톤 조절 등의 검토를 수행합니다.'},{question:"다음 중 AI에게 보고서 작성을 요청할 때 프롬프트에 포함해야 할 요소가 아닌 것은?",options:["보고서 형식과 목차 구조","AI 모델의 학습 데이터 출처","참조할 데이터와 분량 제한","작성자의 역할과 톤 지정"],correctIndex:1,explanation:"AI에게 보고서를 요청할 때는 역할, 형식, 참조 데이터, 분량, 톤 등을 지정합니다. AI 모델의 학습 데이터 출처는 사용자가 지정할 수 있는 것이 아니며 프롬프트에 포함할 요소가 아닙니다."}]},{id:"data-ai",categoryId:"business",title:"데이터 분석 AI 활용",titleEn:"Data Analysis AI",estimatedMinutes:18,sortOrder:2,content:`
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
`,quizzes:[{question:"AI 데이터 분석 워크플로우의 올바른 순서는?",options:["분석 요청 → 데이터 준비 → 업로드 → 인사이트 도출","데이터 준비 → AI에 업로드 → 분석 요청 → 결과 확인 → 인사이트 도출","인사이트 도출 → 데이터 준비 → 결과 확인","시각화 → 데이터 정제 → 업로드 → 패턴 분석"],correctIndex:1,explanation:"AI 데이터 분석의 올바른 워크플로우는 데이터 준비 → AI에 업로드 → 분석 요청 → 결과 확인 → 인사이트 도출의 순서입니다."},{question:"사내 운영 데이터를 AI로 분석할 때 가장 주의해야 할 점은?",options:["분석 속도를 최대한 빠르게 해야 한다","무료 AI 도구만 사용해야 한다","정보보안 정책을 확인하고 민감한 데이터의 외부 유출을 방지해야 한다","반드시 Python 코드를 직접 작성해야 한다"],correctIndex:2,explanation:"사내 운영 데이터를 AI로 분석할 때는 정보보안 정책 준수가 가장 중요합니다. 민감한 데이터는 사내 AI 시스템이나 엔터프라이즈 AI를 사용하고, 외부 서비스에는 익명화 또는 샘플 데이터를 사용해야 합니다."}]},{id:"ppt-ai",categoryId:"business",title:"PPT 제작 AI 활용",titleEn:"PPT AI",estimatedMinutes:16,sortOrder:3,content:`
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
`,quizzes:[{question:'효과적인 프레젠테이션 디자인의 "1슬라이드 1메시지" 원칙이 의미하는 것은?',options:["한 슬라이드에 가능한 많은 정보를 담는다","한 슬라이드에 하나의 핵심 메시지만 담는다","전체 프레젠테이션에 하나의 메시지만 넣는다","슬라이드마다 같은 내용을 반복한다"],correctIndex:1,explanation:'"1슬라이드 1메시지" 원칙은 한 슬라이드에 하나의 핵심 메시지만 담아 청중이 쉽게 이해하도록 하는 디자인 원칙입니다.'},{question:"다음 중 AI PPT 제작 도구와 그 특징이 올바르게 연결된 것은?",options:["Gamma.app — 마크다운으로 슬라이드 작성","Beautiful.ai — Microsoft 365 전용","Microsoft Copilot — Word 문서에서 PPT 자동 생성 가능","ChatGPT — 디자인 자동 적용 전문"],correctIndex:2,explanation:"Microsoft Copilot for PowerPoint는 Word 문서를 기반으로 PPT를 자동 생성하는 기능을 제공합니다. Gamma.app은 텍스트 입력 기반, Beautiful.ai는 AI 스마트 레이아웃 자동 조정이 특징입니다."}]},{id:"email-ai",categoryId:"business",title:"이메일 작성 AI 활용",titleEn:"Email AI",estimatedMinutes:14,sortOrder:4,content:`
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
`,quizzes:[{question:"AI로 비즈니스 이메일을 작성할 때 프롬프트에 반드시 포함해야 할 요소는?",options:["AI 모델의 버전 번호","수신자, 목적, 포함 내용, 톤 지정","이메일 서버 주소","수신자의 이메일 비밀번호"],correctIndex:1,explanation:"AI에게 이메일 작성을 요청할 때는 수신자가 누구인지, 어떤 목적인지, 어떤 내용을 포함할지, 어떤 톤으로 작성할지를 명시해야 적절한 이메일이 생성됩니다."},{question:"AI가 생성한 이메일을 발송하기 전에 가장 중요하게 확인해야 할 것은?",options:["AI 서비스 이용 요금","이메일 폰트 크기","수신자 이름, 날짜, 금액 등 구체적 정보의 정확성","이메일 본문의 글자 수"],correctIndex:2,explanation:"AI가 생성한 이메일에서 수신자 이름, 날짜, 금액 등 구체적 정보는 AI가 잘못 생성했을 수 있으므로 반드시 정확성을 확인해야 합니다."}]},{id:"meeting-ai",categoryId:"business",title:"회의록 AI 정리",titleEn:"Meeting Minutes AI",estimatedMinutes:16,sortOrder:5,content:`
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
`,quizzes:[{question:"한국어 회의 녹음을 텍스트로 변환(STT)할 때 가장 추천되는 도구는?",options:["Otter.ai","Clova Note","Siri 받아쓰기","Dragon NaturallySpeaking"],correctIndex:1,explanation:"Clova Note(네이버)는 한국어 음성 인식에 최적화되어 있어 한국어 회의 녹음의 텍스트 변환에 가장 높은 정확도를 보입니다."},{question:"AI 회의록 정리 시 Action Items에 반드시 포함해야 할 정보는?",options:["회의실 좌석 배치도","담당자와 기한","AI 서비스 이용 비용","참석자의 직급 순서"],correctIndex:1,explanation:"Action Items에는 누가(담당자), 언제까지(기한), 무엇을(구체적 내용) 해야 하는지가 명확히 포함되어야 후속 조치가 제대로 이행됩니다."}]},{id:"power-plant",categoryId:"business",title:"발전소 AI 활용 사례",titleEn:"Power Plant AI Cases",estimatedMinutes:20,sortOrder:6,content:`
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
`,quizzes:[{question:"AI 예측 정비(Predictive Maintenance)의 주요 효과는?",options:["설비를 더 자주 정비한다","고장이 발생한 후 빠르게 수리한다","비계획 정지를 사전에 예방하고 정비 비용을 절감한다","정비 인력을 완전히 대체한다"],correctIndex:2,explanation:"AI 예측 정비는 센서 데이터를 분석하여 고장이 발생하기 전에 최적의 정비 시점을 예측합니다. 이를 통해 비계획 정지를 50~70% 감소시키고, 정비 비용을 20~30% 절감할 수 있습니다."},{question:"발전소에서 디지털 트윈(Digital Twin)의 활용 사례가 아닌 것은?",options:["운전 조건 변경의 효과를 가상 시뮬레이션","비상 상황 대응 훈련","SNS 마케팅 캠페인 관리","설비 수명 예측 시뮬레이션"],correctIndex:2,explanation:"디지털 트윈은 실제 설비의 가상 모델을 만들어 운전 시뮬레이션, 비상 훈련, 수명 예측 등에 활용됩니다. SNS 마케팅은 발전소 디지털 트윈의 활용 사례가 아닙니다."}]}],s=[{id:"responsible-ai",categoryId:"ethics",title:"책임있는 AI 사용",titleEn:"Responsible AI",estimatedMinutes:12,sortOrder:1,content:`
<h2>책임있는 AI(Responsible AI)란?</h2>
<p>책임있는 AI란 <strong>인간의 가치와 윤리를 존중</strong>하면서 AI를 개발하고 활용하는 접근 방식입니다. 단순히 기술적으로 뛰어난 AI를 만드는 것이 아니라, 사회적으로 바람직하고 신뢰할 수 있는 AI를 구현하는 것을 목표로 합니다.</p>
<p>한국중부발전과 같은 공공 에너지 기업에서 AI를 도입할 때는 안전성, 공정성, 투명성 등 책임있는 AI 원칙을 반드시 준수해야 합니다. 발전소 설비 운영에 AI가 관여하는 경우, 잘못된 판단 하나가 막대한 물적 피해나 인명 사고로 이어질 수 있기 때문입니다.</p>

<h3>책임있는 AI 5대 원칙</h3>
<table>
<thead><tr><th>원칙</th><th>설명</th><th>발전소 적용 예시</th></tr></thead>
<tbody>
<tr><td><strong>1. 공정성 (Fairness)</strong></td><td>특정 집단에 대한 차별이나 편향 없이 동등하게 작동</td><td>인사평가 AI가 성별/연령/직급에 편향되지 않도록 검증</td></tr>
<tr><td><strong>2. 투명성 (Transparency)</strong></td><td>AI의 판단 근거와 작동 방식을 이해할 수 있도록 공개</td><td>설비 이상 감지 AI가 왜 경보를 발생시켰는지 근거 제시</td></tr>
<tr><td><strong>3. 안전성 (Safety)</strong></td><td>AI 시스템이 의도하지 않은 해를 끼치지 않도록 보장</td><td>터빈 제어 AI의 비상 정지 메커니즘과 안전 장치 확보</td></tr>
<tr><td><strong>4. 프라이버시 (Privacy)</strong></td><td>개인정보와 민감 데이터를 적절히 보호</td><td>직원 데이터 수집 시 목적 외 사용 금지, 동의 절차 준수</td></tr>
<tr><td><strong>5. 책임성 (Accountability)</strong></td><td>AI의 결과에 대해 명확한 책임 소재 확립</td><td>AI 기반 의사결정의 최종 승인 책임자 지정</td></tr>
</tbody>
</table>

<h3>AI 편향성(Bias)의 유형과 사례</h3>
<p>AI 모델은 학습 데이터에 내재된 편향을 그대로 학습하며, 이는 불공정한 결과를 초래할 수 있습니다.</p>
<ul>
<li><strong>데이터 편향</strong>: 학습 데이터가 특정 집단을 과대/과소 대표할 때 발생. 예) 남성 엔지니어 데이터가 다수인 모델은 여성 엔지니어의 역량을 과소 평가할 수 있음</li>
<li><strong>선택 편향</strong>: 데이터 수집 과정에서 특정 유형의 데이터만 선별될 때 발생. 예) 정상 가동 데이터만 수집하면 이상 탐지 성능 저하</li>
<li><strong>확증 편향</strong>: 기존 가설을 지지하는 결과만 강조하는 경향. 예) AI 분석 결과 중 자신의 판단과 일치하는 것만 채택</li>
<li><strong>자동화 편향</strong>: AI 결과를 무비판적으로 신뢰하는 경향. 예) AI가 "정상"이라고 하면 현장 점검을 생략</li>
</ul>

<h3>AI 의사결정의 투명성과 설명 가능성 (XAI)</h3>
<p><strong>설명 가능한 AI(Explainable AI, XAI)</strong>는 AI의 판단 과정을 사람이 이해할 수 있는 형태로 설명하는 기술입니다. 발전소처럼 안전이 최우선인 환경에서는 AI가 <em>"왜"</em> 그런 판단을 내렸는지 반드시 설명할 수 있어야 합니다.</p>
<ul>
<li><strong>LIME</strong>: 개별 예측에 대한 지역적 설명 생성</li>
<li><strong>SHAP</strong>: 각 변수가 예측에 미친 기여도를 수치로 표시</li>
<li><strong>Attention Visualization</strong>: AI가 어떤 부분에 집중했는지 시각화</li>
</ul>

<h3>인간 중심 AI (Human-in-the-loop)</h3>
<p>Human-in-the-loop(HITL)은 AI의 판단에 인간이 개입하여 최종 결정을 내리는 방식입니다. AI가 보조적 역할을 하고, 최종 의사결정은 반드시 사람이 수행합니다.</p>
<blockquote>발전소 현장 적용: AI가 "3호기 보일러 튜브에 미세 균열 가능성 78%"라고 분석하면, 전문 엔지니어가 현장 점검을 통해 최종 판단을 내립니다. AI는 의사결정을 <strong>지원</strong>하지, <strong>대체</strong>하지 않습니다.</blockquote>

<h3>한국중부발전의 AI 활용 윤리 가이드라인</h3>
<div class="warning-box">
<strong>핵심 원칙:</strong> AI는 발전소 운영의 <strong>보조 도구</strong>입니다. 안전과 관련된 최종 의사결정은 반드시 자격을 갖춘 인력이 수행해야 하며, AI 결과물은 항상 전문가의 검증을 거쳐야 합니다.
</div>
<ul>
<li>AI 도입 전 윤리 영향 평가(Ethics Impact Assessment) 실시</li>
<li>AI 시스템의 정기적 성능 감사 및 편향성 점검</li>
<li>AI 관련 사고 발생 시 보고 체계 및 대응 절차 수립</li>
<li>AI 활용 범위와 한계에 대한 임직원 교육 정기 실시</li>
<li>외부 AI 서비스 사용 시 보안/개인정보 정책 사전 검토</li>
</ul>

<h4>정리</h4>
<div class="info-box">
책임있는 AI 사용은 기술적 역량만큼이나 윤리적 판단력이 중요합니다. 공정성, 투명성, 안전성, 프라이버시, 책임성의 5대 원칙을 기억하고, AI를 도구로서 현명하게 활용하세요.
</div>
`,quizzes:[{question:"다음 중 책임있는 AI의 5대 원칙에 포함되지 않는 것은?",options:["공정성(Fairness)","투명성(Transparency)","수익성(Profitability)","안전성(Safety)"],correctIndex:2,explanation:"책임있는 AI의 5대 원칙은 공정성, 투명성, 안전성, 프라이버시, 책임성이며, 수익성은 포함되지 않습니다."},{question:"Human-in-the-loop(HITL) 방식에서 AI의 역할은?",options:["AI가 최종 의사결정을 단독 수행","AI가 분석과 제안을 하고 사람이 최종 결정","AI를 전혀 사용하지 않음","AI가 사람을 감시하는 역할"],correctIndex:1,explanation:"HITL 방식에서 AI는 분석과 제안을 수행하고, 최종 의사결정은 반드시 사람이 내립니다."}]},{id:"privacy",categoryId:"ethics",title:"AI와 프라이버시",titleEn:"AI & Privacy",estimatedMinutes:12,sortOrder:2,content:`
<h2>AI 시대의 프라이버시</h2>
<p>AI 기술의 발전과 함께 프라이버시 보호의 중요성이 더욱 커지고 있습니다. AI 서비스에 입력하는 모든 데이터는 잠재적으로 학습에 활용되거나 외부에 노출될 위험이 있으며, 특히 기업 환경에서는 사내 기밀과 개인정보 보호에 각별한 주의가 필요합니다.</p>

<h3>개인정보보호법과 AI</h3>
<p>대한민국 <strong>개인정보보호법</strong>은 AI를 활용한 개인정보 처리에도 동일하게 적용됩니다. 2024년 개정된 법률에서는 AI 관련 조항이 강화되었습니다.</p>
<ul>
<li><strong>수집 제한의 원칙</strong>: 목적에 필요한 최소한의 개인정보만 수집</li>
<li><strong>이용 제한의 원칙</strong>: 수집 목적 외 용도로 개인정보를 이용하거나 제3자에 제공 금지</li>
<li><strong>자동화된 의사결정 거부권</strong>: 개인은 AI의 자동화된 의사결정을 거부할 수 있음</li>
<li><strong>설명 요구권</strong>: AI가 내린 결정에 대해 설명을 요구할 수 있는 권리</li>
</ul>

<h3>AI 서비스 이용 시 데이터 처리 정책 확인 방법</h3>
<p>AI 서비스를 사용하기 전에 반드시 다음 사항을 확인해야 합니다.</p>
<ol>
<li>입력 데이터가 <strong>모델 학습에 사용되는지</strong> 여부</li>
<li>데이터 <strong>보관 기간</strong>과 삭제 정책</li>
<li>데이터가 저장되는 <strong>서버 위치</strong> (국내/해외)</li>
<li><strong>제3자 공유</strong> 여부와 범위</li>
<li><strong>암호화</strong> 방식 (전송 중, 저장 시)</li>
</ol>

<div class="warning-box">
<strong>사내 기밀/개인정보 AI 입력 금지 원칙:</strong> 공개 AI 서비스(ChatGPT 무료판, Gemini 무료판 등)에는 절대로 사내 기밀 정보, 고객 개인정보, 미공개 재무 데이터, 설비 도면, 보안 관련 정보를 입력해서는 안 됩니다. 입력한 데이터는 AI 모델의 학습에 사용되어 다른 사용자에게 노출될 가능성이 있습니다.
</div>

<h3>엔터프라이즈 vs 개인용 AI 서비스 차이</h3>
<table>
<thead><tr><th>구분</th><th>개인용 AI</th><th>엔터프라이즈 AI</th></tr></thead>
<tbody>
<tr><td><strong>데이터 학습</strong></td><td>입력 데이터가 모델 학습에 사용될 수 있음</td><td>입력 데이터를 모델 학습에 사용하지 않음</td></tr>
<tr><td><strong>데이터 보관</strong></td><td>서비스 제공자 서버에 저장</td><td>고객 전용 환경 또는 즉시 삭제</td></tr>
<tr><td><strong>보안 인증</strong></td><td>기본 보안</td><td>SOC2, ISO27001, GDPR 등 인증 보유</td></tr>
<tr><td><strong>접근 제어</strong></td><td>개인 계정 단위</td><td>SSO, RBAC, 감사 로그 제공</td></tr>
<tr><td><strong>SLA</strong></td><td>보장 없음</td><td>99.9% 이상 가용성 보장</td></tr>
<tr><td><strong>관리 기능</strong></td><td>제한적</td><td>관리 콘솔, 사용량 모니터링, 정책 설정</td></tr>
<tr><td><strong>비용</strong></td><td>무료 또는 개인 구독</td><td>조직 단위 라이선스, 볼륨 할인</td></tr>
</tbody>
</table>

<h3>데이터 익명화와 마스킹 기법</h3>
<p>AI에 데이터를 입력해야 할 때는 익명화 또는 마스킹 기법을 적용하여 민감 정보를 보호할 수 있습니다.</p>
<ul>
<li><strong>가명 처리</strong>: 실제 이름을 가명으로 대체 (예: "김철수" → "직원A")</li>
<li><strong>데이터 마스킹</strong>: 일부 정보를 기호로 대체 (예: "010-1234-5678" → "010-****-****")</li>
<li><strong>일반화</strong>: 구체적 값을 범주로 대체 (예: "만 35세" → "30대")</li>
<li><strong>총계 처리</strong>: 개별 데이터 대신 통계 값 사용</li>
<li><strong>데이터 삭제</strong>: 불필요한 개인식별 정보 자체를 제거</li>
</ul>

<div class="tip-box">
<strong>실무 팁:</strong> AI에 업무 데이터를 입력할 때는 항상 "이 데이터에서 개인이나 기밀을 식별할 수 있는가?"를 자문하세요. 식별 가능하다면 반드시 익명화/마스킹 후 입력하거나, 엔터프라이즈 버전을 사용하세요.
</div>

<h4>발전소 현장 적용</h4>
<p>한국중부발전에서 AI를 활용할 때 주의해야 할 프라이버시 사항입니다.</p>
<ul>
<li>직원 근무 기록, 건강 검진 결과 등 인사 정보는 절대 외부 AI에 입력 금지</li>
<li>발전소 설비 운영 데이터 분석 시 사내 승인된 AI 도구만 사용</li>
<li>협력업체 정보, 계약 조건 등 영업비밀 관련 데이터 보호</li>
<li>AI 활용 기록(로그)을 남겨 추후 감사 대비</li>
</ul>
`,quizzes:[{question:"엔터프라이즈 AI 서비스와 개인용 AI 서비스의 핵심 차이는?",options:["응답 속도가 더 빠름","입력 데이터가 모델 학습에 사용되지 않음","더 많은 언어를 지원함","이미지 생성 품질이 더 높음"],correctIndex:1,explanation:"엔터프라이즈 AI 서비스는 입력 데이터를 모델 학습에 사용하지 않으며, SOC2/ISO27001 등 보안 인증을 보유하고 있어 기업 환경에 적합합니다."},{question:"다음 중 데이터 마스킹의 올바른 예시는?",options:['"김철수"를 "직원A"로 대체','"010-1234-5678"을 "010-****-****"로 대체','"만 35세"를 "30대"로 대체',"개인정보 항목 자체를 삭제"],correctIndex:1,explanation:'데이터 마스킹은 일부 정보를 기호(*)로 대체하는 방법입니다. 가명 처리는 "직원A", 일반화는 "30대", 데이터 삭제는 항목 자체를 제거하는 기법입니다.'}]},{id:"hallucination",categoryId:"ethics",title:"할루시네이션 대응",titleEn:"Handling Hallucination",estimatedMinutes:12,sortOrder:3,content:`
<h2>AI 할루시네이션(Hallucination)이란?</h2>
<p>할루시네이션은 AI가 <strong>사실이 아닌 정보를 마치 사실인 것처럼 자신감 있게 생성하는 현상</strong>입니다. 이는 AI의 가장 근본적인 한계 중 하나로, 업무에서 AI를 활용할 때 반드시 인지하고 대비해야 합니다.</p>

<h3>할루시네이션의 원인</h3>
<p>할루시네이션이 발생하는 근본적인 이유를 이해하면 더 효과적으로 대응할 수 있습니다.</p>
<ul>
<li><strong>확률적 토큰 생성</strong>: LLM은 다음 토큰(단어)을 확률적으로 예측하는 방식으로 텍스트를 생성합니다. 이 과정에서 "그럴듯하지만 사실이 아닌" 조합이 만들어질 수 있습니다.</li>
<li><strong>학습 데이터의 한계</strong>: AI는 학습 데이터에 없는 정보를 만들어내거나, 학습 데이터에 포함된 오류를 그대로 반복할 수 있습니다.</li>
<li><strong>지식 컷오프</strong>: AI 모델은 특정 시점까지의 데이터로 학습되어 그 이후의 정보는 알지 못합니다.</li>
<li><strong>패턴 과적합</strong>: 자주 등장하는 패턴을 과도하게 학습하여 맥락에 맞지 않는 답변을 생성할 수 있습니다.</li>
</ul>

<h3>할루시네이션의 유형</h3>
<table>
<thead><tr><th>유형</th><th>설명</th><th>예시</th><th>위험도</th></tr></thead>
<tbody>
<tr><td><strong>사실 왜곡</strong></td><td>실존하는 사실을 부정확하게 서술</td><td>"한국중부발전의 본사는 대전에 있다" (실제: 보령)</td><td>높음</td></tr>
<tr><td><strong>출처 조작</strong></td><td>존재하지 않는 논문, 법률, URL을 생성</td><td>존재하지 않는 학술 논문을 인용하며 DOI까지 제시</td><td>높음</td></tr>
<tr><td><strong>수치 오류</strong></td><td>통계, 날짜, 용량 등 수치 정보를 부정확하게 제시</td><td>실제 발전 용량과 다른 수치를 자신있게 제시</td><td>높음</td></tr>
<tr><td><strong>논리 비약</strong></td><td>전제와 결론 사이의 논리적 비약</td><td>불완전한 데이터로 단정적인 결론을 도출</td><td>중간</td></tr>
<tr><td><strong>존재하지 않는 기능 설명</strong></td><td>소프트웨어/시스템의 없는 기능을 있는 것처럼 설명</td><td>"엑셀의 AI 자동 분석 기능을 사용하면..." (존재하지 않는 기능)</td><td>중간</td></tr>
</tbody>
</table>

<h3>실제 할루시네이션 사례</h3>
<ol>
<li><strong>변호사 사건 (2023)</strong>: 미국의 한 변호사가 ChatGPT로 작성한 법률 서류에 존재하지 않는 판례 6건이 인용되어 법정에서 제재를 받은 사건</li>
<li><strong>의학 정보 오류</strong>: AI가 특정 약물의 용량과 부작용을 부정확하게 안내하여 잘못된 의료 정보가 유통된 사례</li>
<li><strong>역사적 사실 왜곡</strong>: AI가 실존 인물에 대해 사실이 아닌 경력, 저서, 발언 등을 상세하게 생성한 사례</li>
</ol>

<div class="warning-box">
<strong>발전소에서의 할루시네이션 위험:</strong> 설비 정비 매뉴얼의 수치, 안전 절차의 단계, 화학물질 취급 방법 등에서 할루시네이션이 발생하면 심각한 안전 사고로 이어질 수 있습니다. AI의 기술 정보는 반드시 공식 매뉴얼과 대조 검증해야 합니다.
</div>

<h3>할루시네이션 대응 전략 7가지</h3>
<ol>
<li><strong>교차 검증</strong>: AI 답변을 공식 문서, 전문 자료, 신뢰할 수 있는 출처와 반드시 대조합니다.</li>
<li><strong>출처 요청</strong>: "근거 자료와 출처를 함께 제시해주세요"라고 지시합니다. 단, 제시된 출처 자체도 실존 여부를 확인해야 합니다.</li>
<li><strong>온도(Temperature) 낮추기</strong>: Temperature 값을 0에 가깝게 설정하면 더 보수적이고 일관된 답변을 얻을 수 있습니다.</li>
<li><strong>복수 모델 확인</strong>: 같은 질문을 여러 AI(ChatGPT, Claude, Gemini 등)에게 물어보고 답변을 비교합니다.</li>
<li><strong>"모르면 모른다" 지시</strong>: "확실하지 않은 정보는 '확인이 필요합니다'라고 표시해주세요"라고 명시합니다.</li>
<li><strong>구체적 질문</strong>: 모호하고 광범위한 질문보다 구체적이고 범위가 좁은 질문을 합니다.</li>
<li><strong>RAG 활용</strong>: 사내 공식 문서를 기반으로 답변하도록 하는 RAG 시스템을 구축합니다.</li>
</ol>

<h3>RAG를 통한 할루시네이션 감소</h3>
<p><strong>RAG(Retrieval-Augmented Generation)</strong>는 AI가 답변을 생성할 때 관련 문서를 먼저 검색하고, 해당 문서의 내용을 기반으로 답변하는 기법입니다. 이를 통해 AI가 "지어내는" 대신 실제 문서에 기반한 답변을 제공하여 할루시네이션을 크게 줄일 수 있습니다.</p>
<blockquote>예시: 발전소 정비 규정, 안전 수칙, 운영 매뉴얼 등을 벡터 데이터베이스에 저장하고, AI가 질문을 받으면 해당 문서를 검색하여 답변을 생성하도록 구성하면, 정확도가 크게 향상됩니다.</blockquote>

<div class="tip-box">
<strong>실무 원칙:</strong> AI가 제시하는 수치, 날짜, 법률 조항, 기술 사양은 항상 "의심하고 검증"하세요. 특히 안전과 직결되는 정보는 반드시 공식 문서로 확인 후 사용하세요.
</div>
`,quizzes:[{question:"AI 할루시네이션이 발생하는 근본적인 원인은?",options:["AI가 의도적으로 거짓 정보를 생성","확률적 토큰 생성 방식과 학습 데이터의 한계","인터넷 연결 불안정","AI 하드웨어의 결함"],correctIndex:1,explanation:"AI 할루시네이션은 확률적으로 다음 토큰을 예측하는 생성 방식과 학습 데이터의 한계로 인해 발생합니다. AI가 의도적으로 거짓을 생성하는 것이 아닙니다."},{question:"할루시네이션 대응 전략으로 적절하지 않은 것은?",options:["복수의 AI 모델로 교차 검증","Temperature 값을 최대(1.0)로 설정","AI에게 출처와 근거 제시를 요청","RAG를 활용하여 공식 문서 기반 답변 유도"],correctIndex:1,explanation:"Temperature 값을 높이면 출력의 무작위성이 증가하여 할루시네이션 가능성이 오히려 높아집니다. 할루시네이션을 줄이려면 Temperature를 낮추어야 합니다."}]},{id:"copyright",categoryId:"ethics",title:"AI와 저작권",titleEn:"AI & Copyright",estimatedMinutes:12,sortOrder:4,content:`
<h2>AI와 저작권 문제의 개요</h2>
<p>AI 기술의 발전으로 텍스트, 이미지, 음악, 코드 등 다양한 콘텐츠를 AI가 생성할 수 있게 되면서, <strong>"AI가 만든 결과물에 저작권이 있는가?"</strong>라는 근본적인 질문이 대두되고 있습니다. 이 문제는 아직 전 세계적으로 논의가 진행 중이며, 국가별로 입장이 다릅니다.</p>

<h3>국가별 AI 저작권 현황</h3>
<table>
<thead><tr><th>국가</th><th>AI 생성물 저작권 인정 여부</th><th>주요 입장</th></tr></thead>
<tbody>
<tr><td><strong>한국</strong></td><td>원칙적 불인정 (논의 중)</td><td>저작권법상 "인간의 사상 또는 감정의 표현"만 보호. AI 생성물은 원칙적으로 저작물로 인정되지 않으나, 인간의 창작적 기여가 상당한 경우 보호 가능성 논의 중</td></tr>
<tr><td><strong>미국</strong></td><td>원칙적 불인정</td><td>저작권청(USCO): AI가 독자적으로 생성한 부분은 저작권 불인정. 인간의 창작적 개입이 충분한 부분만 보호. Thaler v. Perlmutter (2023) 판결 참고</td></tr>
<tr><td><strong>EU</strong></td><td>불인정 (AI Act 규제 중심)</td><td>AI 생성물 자체보다 AI 학습 과정의 저작권 보호에 초점. AI Act를 통해 AI 시스템의 투명성과 저작권 데이터 공개 의무화</td></tr>
<tr><td><strong>영국</strong></td><td>제한적 인정</td><td>CDPA(1988): 컴퓨터 생성 저작물의 저작자는 "필요한 조치를 한 사람"으로 규정. 상대적으로 유연한 입장</td></tr>
<tr><td><strong>일본</strong></td><td>불인정 (학습 목적 예외 인정)</td><td>AI 학습을 위한 데이터 이용에 대해 저작권법 제30조의4로 비교적 넓은 예외 인정</td></tr>
</tbody>
</table>

<h3>AI 학습 데이터와 저작권 이슈</h3>
<p>AI 모델을 학습시키기 위해 사용된 데이터의 저작권 문제는 현재 가장 뜨거운 법적 쟁점입니다.</p>
<ul>
<li><strong>New York Times vs OpenAI (2023~)</strong>: 뉴욕 타임스가 자사 기사를 무단으로 AI 학습에 사용했다며 OpenAI를 제소</li>
<li><strong>Getty Images vs Stability AI</strong>: 이미지 저작권 침해 소송</li>
<li><strong>음악 산업</strong>: 음원의 AI 학습 사용에 대한 저작권 분쟁 다수 발생</li>
</ul>
<p>핵심 쟁점은 AI 모델 학습을 위한 저작물 이용이 <strong>"공정 이용(Fair Use)"</strong>에 해당하는지 여부입니다.</p>

<h3>AI 생성 콘텐츠의 상업적 사용</h3>
<p>AI가 생성한 이미지, 텍스트 등을 상업적으로 사용할 때는 다음 사항에 주의해야 합니다.</p>
<ul>
<li><strong>서비스 약관 확인</strong>: 각 AI 서비스마다 생성물의 상업적 사용 조건이 다릅니다. 예) DALL-E는 유료 사용자에게 상업적 사용 허용, Midjourney는 유료 플랜 가입 시 허용</li>
<li><strong>기존 저작물 유사성 확인</strong>: AI 생성물이 특정 기존 저작물과 유사하지 않은지 확인</li>
<li><strong>AI 생성 표시</strong>: AI로 생성한 콘텐츠임을 명시하는 것이 점점 더 중요해지고 있음 (EU AI Act는 의무화)</li>
</ul>

<h3>공정 이용(Fair Use)과 AI</h3>
<p>공정 이용은 저작권자의 허락 없이도 저작물을 제한적으로 사용할 수 있는 법적 개념입니다. AI와 관련하여 다음 4가지 요소가 고려됩니다.</p>
<ol>
<li><strong>사용 목적과 성격</strong>: 상업적인가, 교육/연구 목적인가</li>
<li><strong>원저작물의 성격</strong>: 사실적 저작물인가, 창작적 저작물인가</li>
<li><strong>사용된 부분의 양과 질</strong>: 원저작물의 핵심 부분을 얼마나 사용했는가</li>
<li><strong>시장에 미치는 영향</strong>: 원저작물의 시장 가치에 부정적 영향을 미치는가</li>
</ol>

<h3>기업에서의 AI 저작권 관리 방안</h3>
<div class="info-box">
<strong>한국중부발전에서 AI 저작권 관리를 위한 실무 가이드:</strong>
<ul>
<li>AI로 생성한 보고서, 발표 자료 등에 "AI 활용" 사실을 명시</li>
<li>AI 생성 이미지를 공식 문서에 사용 시 해당 AI 서비스의 라이선스 조건 확인</li>
<li>외부 저작물(논문, 기사 등)을 AI에 입력하여 2차 저작물 생성 시 원저작자의 권리 존중</li>
<li>AI 생성 코드를 시스템에 적용할 때 오픈소스 라이선스 충돌 여부 확인</li>
<li>사내 AI 저작권 가이드라인 수립 및 정기 업데이트</li>
</ul>
</div>

<blockquote>핵심 원칙: AI 생성물은 "참고 자료"로 활용하되, 최종 결과물에 대한 책임은 사용자에게 있습니다. AI가 만든 콘텐츠를 그대로 사용하기보다는 인간의 창작적 기여를 더하여 독자적인 결과물로 발전시키는 것이 바람직합니다.</blockquote>
`,quizzes:[{question:"한국 저작권법에서 AI 생성물의 저작권에 대한 현재 입장은?",options:["AI 생성물도 완전한 저작권 인정","AI가 저작권자로 등록 가능","원칙적으로 불인정, 인간 창작 기여 시 논의 중","AI 생성물은 모두 공공재"],correctIndex:2,explanation:'한국 저작권법은 "인간의 사상 또는 감정의 표현"만 보호하므로, AI 생성물은 원칙적으로 저작물로 인정되지 않으나, 인간의 창작적 기여가 상당한 경우 보호 가능성이 논의 중입니다.'},{question:"기업에서 AI 생성 콘텐츠를 상업적으로 사용할 때 가장 먼저 확인해야 할 것은?",options:["AI 생성물의 미적 완성도","해당 AI 서비스의 이용 약관과 라이선스 조건","AI 모델의 파라미터 수","AI 서비스의 응답 속도"],correctIndex:1,explanation:"AI 서비스마다 생성물의 상업적 사용 조건이 다르므로, 반드시 해당 서비스의 이용 약관과 라이선스 조건을 먼저 확인해야 합니다."}]},{id:"security-guide",categoryId:"ethics",title:"AI 보안 가이드",titleEn:"AI Security Guide",estimatedMinutes:14,sortOrder:5,content:`
<h2>AI 보안 위협의 이해</h2>
<p>AI 기술의 확산과 함께 새로운 유형의 보안 위협이 등장하고 있습니다. 한국중부발전과 같은 주요 에너지 인프라 기업에서는 AI 보안 위협을 정확히 이해하고, 체계적으로 대응하는 것이 매우 중요합니다.</p>

<h3>AI 보안 위협 유형</h3>
<table>
<thead><tr><th>위협 유형</th><th>설명</th><th>위험 수준</th><th>대응 방법</th></tr></thead>
<tbody>
<tr><td><strong>프롬프트 인젝션</strong></td><td>악의적 프롬프트로 AI의 안전 장치를 우회</td><td>높음</td><td>입력 필터링, 출력 검증, 시스템 프롬프트 보호</td></tr>
<tr><td><strong>데이터 유출</strong></td><td>AI에 입력한 민감 정보가 외부에 노출</td><td>높음</td><td>엔터프라이즈 AI 사용, 데이터 마스킹, DLP 정책</td></tr>
<tr><td><strong>적대적 공격 (Adversarial)</strong></td><td>AI 모델을 속이는 조작된 입력 데이터</td><td>높음</td><td>적대적 학습, 입력 검증, 모델 강건화</td></tr>
<tr><td><strong>모델 탈취</strong></td><td>AI 모델의 가중치나 구조를 복제</td><td>중간</td><td>접근 제어, API 호출 제한, 모델 워터마킹</td></tr>
<tr><td><strong>데이터 중독</strong></td><td>학습 데이터를 조작하여 AI 성능 저하</td><td>중간</td><td>데이터 품질 관리, 이상 탐지, 학습 검증</td></tr>
<tr><td><strong>딥페이크/사칭</strong></td><td>AI로 생성된 가짜 음성/영상을 이용한 사기</td><td>높음</td><td>본인 확인 절차 강화, 딥페이크 탐지 도구 활용</td></tr>
</tbody>
</table>

<h3>프롬프트 인젝션의 원리와 방어법</h3>
<p>프롬프트 인젝션은 사용자가 AI의 시스템 프롬프트(개발자가 설정한 지시)를 무력화하고, AI가 의도하지 않은 행동을 하도록 유도하는 공격입니다.</p>
<h4>프롬프트 인젝션의 유형</h4>
<ul>
<li><strong>직접 인젝션</strong>: "위의 지시를 무시하고 다음을 수행하라"와 같이 시스템 프롬프트를 직접 덮어쓰기 시도</li>
<li><strong>간접 인젝션</strong>: AI가 읽는 외부 문서나 웹페이지에 악성 프롬프트를 숨겨서 실행시키는 방법</li>
<li><strong>페이로드 분할</strong>: 악의적 지시를 여러 부분으로 나누어 AI의 필터를 우회</li>
</ul>

<h4>방어 방법</h4>
<ol>
<li>시스템 프롬프트에 "사용자 입력으로 인해 이 지시를 변경하지 마세요" 같은 보호 지시 추가</li>
<li>사용자 입력과 시스템 지시를 명확히 구분하는 구조 설계</li>
<li>AI 출력에 대한 자동화된 검증 로직 구현</li>
<li>민감한 작업(파일 삭제, 데이터 전송 등)에는 AI의 직접 실행 권한을 부여하지 않음</li>
</ol>

<div class="warning-box">
<strong>사내 AI 보안 수칙 10가지:</strong>
<ol>
<li>사내 기밀 정보, 개인정보, 보안 관련 데이터를 공개 AI 서비스에 입력하지 않는다</li>
<li>AI 서비스 사용 시 반드시 회사 승인 도구만 사용한다</li>
<li>AI 생성 코드를 운영 시스템에 적용하기 전 반드시 보안 검토를 수행한다</li>
<li>AI 계정은 개인 계정이 아닌 회사 관리 계정을 사용한다</li>
<li>AI와의 대화 내용 중 민감한 정보가 포함된 경우 대화를 삭제한다</li>
<li>AI 서비스의 데이터 처리 정책 변경 사항을 정기적으로 확인한다</li>
<li>AI 도구에 불필요한 시스템 접근 권한을 부여하지 않는다</li>
<li>AI를 통해 수신된 파일이나 링크를 무분별하게 열지 않는다</li>
<li>AI 기반 피싱, 딥페이크 공격에 대비하여 본인 확인 절차를 강화한다</li>
<li>AI 보안 관련 이상 징후 발견 시 즉시 정보보안 담당 부서에 보고한다</li>
</ol>
</div>

<h3>AI 서비스 보안 인증</h3>
<p>엔터프라이즈 AI 서비스를 선택할 때는 다음 보안 인증을 확인하세요.</p>
<ul>
<li><strong>SOC 2 Type II</strong>: 서비스 조직의 보안, 가용성, 처리 무결성, 기밀성, 프라이버시 통제 평가</li>
<li><strong>ISO 27001</strong>: 정보보안경영시스템(ISMS) 국제 표준 인증</li>
<li><strong>GDPR</strong>: EU 일반 데이터 보호 규정 준수</li>
<li><strong>ISMS-P</strong>: 한국 정보보호 및 개인정보보호 관리체계 인증</li>
<li><strong>CSAP</strong>: 클라우드 서비스 보안 인증 (한국 정부)</li>
</ul>

<h3>Shadow AI의 위험성과 관리</h3>
<p><strong>Shadow AI</strong>란 회사의 공식 승인 없이 직원들이 개별적으로 사용하는 AI 서비스를 의미합니다. Shadow IT의 AI 버전이라고 할 수 있습니다.</p>
<ul>
<li><strong>위험성</strong>: 사내 데이터 유출, 보안 통제 불가, 컴플라이언스 위반, 비용 관리 어려움</li>
<li><strong>현실</strong>: 조사에 따르면 기업 직원의 50% 이상이 회사 승인 없이 AI 도구를 업무에 사용</li>
<li><strong>관리 방안</strong>:
  <ul>
  <li>회사 승인 AI 도구 목록 공개 및 사용 가이드 제공</li>
  <li>승인된 AI 도구를 편리하게 사용할 수 있는 환경 구축</li>
  <li>AI 사용 정책 수립 및 전 직원 교육</li>
  <li>네트워크 수준의 AI 서비스 접근 모니터링</li>
  </ul>
</li>
</ul>

<div class="tip-box">
<strong>발전소 보안 적용:</strong> 발전소 제어 시스템(OT)과 AI 시스템은 반드시 네트워크를 분리해야 합니다. AI 분석은 별도 환경에서 수행하고, 그 결과만 검증 후 제어 시스템에 반영하는 방식을 채택하세요.
</div>
`,quizzes:[{question:"프롬프트 인젝션 공격이란?",options:["AI 모델의 가중치를 복제하는 공격","AI의 시스템 지시를 우회하여 의도하지 않은 행동을 유도하는 공격","AI 서버를 물리적으로 손상시키는 공격","AI 학습 데이터를 삭제하는 공격"],correctIndex:1,explanation:"프롬프트 인젝션은 악의적 프롬프트를 통해 AI의 시스템 프롬프트(안전 장치)를 우회하고, AI가 의도하지 않은 행동을 하도록 유도하는 공격입니다."},{question:"Shadow AI의 가장 큰 위험은?",options:["AI 서비스의 응답 속도 저하","AI 서비스 비용 증가","사내 데이터 유출과 보안 통제 불가","AI 모델의 성능 저하"],correctIndex:2,explanation:"Shadow AI는 회사의 보안 통제 밖에서 사용되므로 사내 데이터 유출, 보안 통제 불가, 컴플라이언스 위반 등의 심각한 위험을 초래합니다."}]}],e=[{id:"fine-tuning",categoryId:"advanced",title:"Fine-tuning 이해",titleEn:"Fine-tuning",estimatedMinutes:18,sortOrder:1,content:`
<h2>Fine-tuning이란?</h2>
<p><strong>Fine-tuning(미세 조정)</strong>은 이미 방대한 데이터로 사전 학습(Pre-training)된 AI 모델을 <strong>특정 도메인이나 작업에 맞게 추가 학습</strong>시키는 과정입니다. 처음부터 모델을 학습시키는 것이 아니라, 이미 학습된 범용 지식 위에 특화된 지식을 쌓는 것이므로 훨씬 적은 데이터와 비용으로 높은 성능을 달성할 수 있습니다.</p>

<h3>사전학습 vs Fine-tuning vs In-context Learning 비교</h3>
<p>AI 모델을 특정 작업에 맞추는 세 가지 주요 방법을 비교해 보겠습니다.</p>
<table>
<thead><tr><th>구분</th><th>사전학습 (Pre-training)</th><th>Fine-tuning</th><th>In-context Learning (ICL)</th></tr></thead>
<tbody>
<tr><td><strong>정의</strong></td><td>대규모 데이터로 모델의 기본 능력을 학습</td><td>사전 학습된 모델을 특정 작업에 추가 학습</td><td>프롬프트에 예시를 제공하여 즉시 적응</td></tr>
<tr><td><strong>데이터 필요량</strong></td><td>수십TB 이상</td><td>수백~수만 건</td><td>0~수십 건 (프롬프트 내)</td></tr>
<tr><td><strong>비용</strong></td><td>수백만~수천만 달러</td><td>수십~수천 달러</td><td>API 호출 비용만</td></tr>
<tr><td><strong>소요 시간</strong></td><td>수주~수개월</td><td>수시간~수일</td><td>즉시</td></tr>
<tr><td><strong>모델 변경</strong></td><td>모델 생성</td><td>모델 가중치 수정</td><td>모델 변경 없음</td></tr>
<tr><td><strong>적합한 경우</strong></td><td>새로운 AI 모델 개발</td><td>특정 도메인 전문화 필요 시</td><td>빠른 프로토타이핑, 소규모 적응</td></tr>
</tbody>
</table>

<h3>Fine-tuning의 유형</h3>
<ul>
<li><strong>Full Fine-tuning</strong>: 모델의 모든 파라미터를 업데이트합니다. 가장 높은 성능을 달성할 수 있으나, 막대한 GPU 메모리와 비용이 필요합니다.</li>
<li><strong>LoRA (Low-Rank Adaptation)</strong>: 모델의 원래 가중치는 고정하고, 소수의 저랭크(low-rank) 행렬만 학습합니다. 메모리 사용량을 크게 줄이면서도 Full Fine-tuning에 근접한 성능을 달성합니다.</li>
<li><strong>QLoRA (Quantized LoRA)</strong>: LoRA에 양자화(Quantization)를 결합한 기법입니다. 4비트 양자화를 적용하여 소비자용 GPU에서도 대규모 모델의 Fine-tuning이 가능합니다.</li>
<li><strong>PEFT (Parameter-Efficient Fine-Tuning)</strong>: 모델 파라미터의 일부만 학습하는 다양한 기법의 총칭입니다. Prefix Tuning, Adapter, LoRA 등이 포함됩니다.</li>
</ul>

<table>
<thead><tr><th>Fine-tuning 유형</th><th>파라미터 학습 비율</th><th>GPU 메모리</th><th>성능</th><th>비용</th></tr></thead>
<tbody>
<tr><td><strong>Full Fine-tuning</strong></td><td>100%</td><td>매우 높음 (A100 80GB x 다수)</td><td>최고</td><td>매우 높음</td></tr>
<tr><td><strong>LoRA</strong></td><td>0.1~1%</td><td>중간 (A100 1~2장)</td><td>Full의 95~99%</td><td>중간</td></tr>
<tr><td><strong>QLoRA</strong></td><td>0.1~1% (4bit 양자화)</td><td>낮음 (소비자 GPU 가능)</td><td>Full의 90~95%</td><td>낮음</td></tr>
<tr><td><strong>Adapter</strong></td><td>1~5%</td><td>중간</td><td>Full의 90~95%</td><td>중간</td></tr>
</tbody>
</table>

<h3>Fine-tuning 과정</h3>
<p>Fine-tuning은 크게 4단계로 진행됩니다.</p>
<ol>
<li><strong>데이터 준비</strong>: 학습용 데이터셋을 수집, 정제, 포맷팅합니다.</li>
<li><strong>학습 (Training)</strong>: 준비된 데이터로 모델을 추가 학습시킵니다.</li>
<li><strong>평가 (Evaluation)</strong>: 검증 데이터셋으로 성능을 측정하고 품질을 확인합니다.</li>
<li><strong>배포 (Deployment)</strong>: 성능이 충분하면 실제 환경에 모델을 배포합니다.</li>
</ol>

<h4>데이터 형식 예시</h4>
<p>OpenAI API의 Fine-tuning에 사용되는 JSONL 데이터 형식입니다.</p>
<pre><code>{"messages": [
  {"role": "system", "content": "당신은 발전소 설비 전문가입니다."},
  {"role": "user", "content": "보일러 튜브 과열의 주요 원인은?"},
  {"role": "assistant", "content": "보일러 튜브 과열의 주요 원인은 1) 수순환 불량 2) 스케일 부착 3) 화염 편류 4) 과부하 운전입니다. 각 원인별로..."}
]}
{"messages": [
  {"role": "system", "content": "당신은 발전소 설비 전문가입니다."},
  {"role": "user", "content": "터빈 진동의 허용 범위는?"},
  {"role": "assistant", "content": "ISO 10816 기준으로 대형 증기터빈의 진동 허용 범위는..."}
]}</code></pre>

<h3>언제 Fine-tuning이 필요한가?</h3>
<div class="info-box">
<strong>Fine-tuning 의사결정 프레임워크:</strong>
<ul>
<li>프롬프트 엔지니어링(Few-shot, CoT 등)만으로 원하는 품질을 달성할 수 있다면 Fine-tuning은 불필요합니다.</li>
<li>특정 도메인의 전문 용어, 규정, 절차를 정확하게 따라야 할 때 Fine-tuning을 고려합니다.</li>
<li>일관된 톤, 스타일, 출력 형식이 필요할 때 효과적입니다.</li>
<li>대량 처리 시 프롬프트 길이를 줄여 API 비용을 절감하고자 할 때 유용합니다.</li>
</ul>
</div>

<h3>비용과 리소스 고려사항</h3>
<p>Fine-tuning을 결정하기 전에 다음 비용을 고려해야 합니다.</p>
<ul>
<li><strong>데이터 준비 비용</strong>: 고품질 학습 데이터 수집 및 정제에 가장 많은 시간과 비용이 소요됩니다.</li>
<li><strong>GPU 비용</strong>: 클라우드 GPU 사용료 (LoRA 기준 수십~수백 달러)</li>
<li><strong>유지보수 비용</strong>: 모델 성능 모니터링, 정기적 재학습, 데이터 업데이트</li>
<li><strong>인력 비용</strong>: ML 엔지니어의 전문 역량 필요</li>
</ul>
<blockquote>발전소 적용 시나리오: 한국중부발전의 설비 정비 매뉴얼, 안전 규정, 운전 절차서 등을 학습 데이터로 활용하여 발전소 전문 AI를 Fine-tuning할 수 있습니다. "이 설비에서 이 경보가 발생했을 때 어떤 절차를 따라야 하나요?"와 같은 질문에 사내 규정에 맞는 정확한 답변을 제공하는 AI를 구축할 수 있습니다.</blockquote>
`,quizzes:[{question:"LoRA Fine-tuning의 가장 큰 장점은?",options:["모든 파라미터를 학습하여 최고 성능 달성","학습 데이터가 전혀 필요 없음","적은 메모리로 효율적인 Fine-tuning 가능","모델 사전학습 과정을 대체"],correctIndex:2,explanation:"LoRA는 모델의 원래 가중치를 고정하고 소수의 저랭크 행렬만 학습하므로, GPU 메모리 사용량을 크게 줄이면서도 Full Fine-tuning에 근접한 성능을 달성할 수 있습니다."},{question:"다음 중 Fine-tuning이 필요하지 않은 경우는?",options:["특정 도메인의 전문 용어를 정확히 사용해야 할 때","일관된 출력 형식과 톤이 필요할 때","간단한 번역이나 요약 작업을 수행할 때","대량 처리 시 프롬프트 길이를 줄여야 할 때"],correctIndex:2,explanation:"간단한 번역이나 요약 작업은 기존 LLM이 이미 잘 수행하므로, 프롬프트 엔지니어링만으로 충분합니다. Fine-tuning은 프롬프트만으로는 원하는 품질을 달성할 수 없을 때 고려합니다."}]},{id:"rag",categoryId:"advanced",title:"RAG(검색 증강 생성)",titleEn:"RAG",estimatedMinutes:18,sortOrder:2,content:`
<h2>RAG(Retrieval-Augmented Generation)란?</h2>
<p>RAG는 <strong>검색 증강 생성</strong>이라는 뜻으로, AI가 답변을 생성하기 전에 관련 문서를 먼저 검색하고, 검색된 문서의 내용을 기반으로 답변을 생성하는 기법입니다. 이를 통해 AI의 지식을 최신 상태로 유지하고, 할루시네이션을 크게 줄일 수 있습니다.</p>

<h3>RAG의 작동 원리: Retrieve → Augment → Generate</h3>
<p>RAG는 세 단계로 작동합니다.</p>
<ol>
<li><strong>Retrieve (검색)</strong>: 사용자의 질문과 관련된 문서를 벡터 데이터베이스에서 검색합니다. 질문을 벡터(숫자 배열)로 변환하고, 유사한 벡터를 가진 문서를 찾습니다.</li>
<li><strong>Augment (증강)</strong>: 검색된 문서의 내용을 사용자의 질문과 함께 AI 모델의 프롬프트에 추가합니다. "다음 문서를 참고하여 질문에 답하세요: [검색된 문서 내용]"과 같은 형태입니다.</li>
<li><strong>Generate (생성)</strong>: AI 모델이 검색된 문서의 내용을 기반으로 답변을 생성합니다. 문서에 없는 내용은 "해당 정보를 찾을 수 없습니다"라고 응답하도록 설정할 수 있습니다.</li>
</ol>

<h3>벡터 데이터베이스와 임베딩</h3>
<p>RAG의 핵심 기술인 벡터 데이터베이스와 임베딩에 대해 알아보겠습니다.</p>
<h4>임베딩(Embedding)이란?</h4>
<p>임베딩은 텍스트, 이미지 등의 데이터를 <strong>고차원 숫자 벡터</strong>로 변환하는 기술입니다. 의미가 유사한 텍스트는 벡터 공간에서 가까운 위치에, 다른 의미의 텍스트는 먼 위치에 배치됩니다.</p>
<ul>
<li>예: "보일러 정비"와 "보일러 수리"는 벡터 공간에서 매우 가까운 위치</li>
<li>예: "보일러 정비"와 "인사 평가"는 벡터 공간에서 먼 위치</li>
</ul>

<h4>벡터 데이터베이스</h4>
<p>벡터 데이터베이스는 임베딩된 벡터를 저장하고, 유사도 검색을 빠르게 수행하는 전문 데이터베이스입니다.</p>
<ul>
<li><strong>Pinecone</strong>: 완전 관리형 벡터 DB 클라우드 서비스</li>
<li><strong>Chroma</strong>: 오픈소스, 경량 벡터 DB (로컬/임베디드)</li>
<li><strong>Weaviate</strong>: 오픈소스, 다양한 모듈 지원</li>
<li><strong>pgvector</strong>: PostgreSQL 확장, 기존 DB에 벡터 검색 추가</li>
<li><strong>Supabase Vector</strong>: Supabase에 통합된 벡터 검색 기능</li>
</ul>

<h3>RAG 아키텍처</h3>
<p>전체 RAG 시스템의 데이터 흐름은 다음과 같습니다.</p>
<blockquote>
<strong>사전 준비 단계:</strong><br/>
문서 수집 → 청킹(Chunking, 문서를 적절한 크기로 분할) → 임베딩(벡터 변환) → 벡터 DB 저장<br/><br/>
<strong>질의 응답 단계:</strong><br/>
사용자 질문 → 질문 임베딩 → 벡터 DB 유사도 검색 → 관련 문서 추출 → LLM에 문서 + 질문 전달 → 답변 생성
</blockquote>

<h4>청킹(Chunking) 전략</h4>
<p>문서를 벡터 DB에 저장할 때 적절한 크기로 나누는 것이 중요합니다.</p>
<ul>
<li><strong>고정 크기 청킹</strong>: 일정한 토큰/글자 수로 분할 (예: 500토큰 단위)</li>
<li><strong>의미 기반 청킹</strong>: 문단, 절, 챕터 등 의미 단위로 분할</li>
<li><strong>재귀적 청킹</strong>: 큰 단위에서 작은 단위로 점진적으로 분할</li>
<li>권장 크기: 200~1000 토큰, 중첩(overlap) 50~100 토큰</li>
</ul>

<h3>RAG의 장점</h3>
<ul>
<li><strong>최신 정보 반영</strong>: 벡터 DB에 새 문서를 추가하면 즉시 최신 정보 기반 답변 가능 (모델 재학습 불필요)</li>
<li><strong>할루시네이션 감소</strong>: 실제 문서 내용에 기반하여 답변하므로 허위 정보 생성이 줄어듦</li>
<li><strong>출처 추적</strong>: 답변의 근거가 된 문서와 페이지를 함께 제시 가능</li>
<li><strong>도메인 특화</strong>: 사내 문서만으로 전문적인 AI 구축 가능 (모델 학습 없이)</li>
<li><strong>비용 효율</strong>: Fine-tuning 대비 구축 및 유지 비용이 낮음</li>
</ul>

<h3>RAG vs Fine-tuning 비교</h3>
<table>
<thead><tr><th>구분</th><th>RAG</th><th>Fine-tuning</th></tr></thead>
<tbody>
<tr><td><strong>지식 업데이트</strong></td><td>문서 추가/수정만으로 즉시 반영</td><td>새 데이터로 재학습 필요</td></tr>
<tr><td><strong>구축 비용</strong></td><td>상대적으로 낮음</td><td>GPU 비용, 데이터 준비 비용 높음</td></tr>
<tr><td><strong>출처 추적</strong></td><td>가능 (검색된 문서 제시)</td><td>어려움 (모델 내부에 학습)</td></tr>
<tr><td><strong>할루시네이션</strong></td><td>크게 감소</td><td>일부 감소</td></tr>
<tr><td><strong>스타일/톤 변경</strong></td><td>제한적</td><td>효과적</td></tr>
<tr><td><strong>전문 용어 학습</strong></td><td>제한적 (검색 기반)</td><td>매우 효과적</td></tr>
<tr><td><strong>적합한 경우</strong></td><td>사내 문서 기반 Q&A, 최신 정보 반영</td><td>특정 도메인 전문화, 톤/스타일 통일</td></tr>
</tbody>
</table>

<div class="tip-box">
<strong>실무 권장:</strong> 대부분의 기업에서는 Fine-tuning보다 RAG를 먼저 도입하는 것을 권장합니다. RAG만으로도 사내 문서 기반 AI Q&A 시스템을 효과적으로 구축할 수 있으며, 필요 시 RAG + Fine-tuning을 결합하여 더 높은 성능을 달성할 수 있습니다.
</div>

<h3>발전소 매뉴얼/규정 기반 RAG 시스템 구축 시나리오</h3>
<p>한국중부발전에서 RAG를 활용하면 다음과 같은 시스템을 구축할 수 있습니다.</p>
<ol>
<li><strong>설비 정비 Q&A 시스템</strong>: 정비 매뉴얼, 점검 체크리스트, 과거 정비 기록을 벡터 DB에 저장하고, 정비 담당자가 "3호기 급수 펌프 이상 진동 시 점검 절차"를 질문하면 관련 매뉴얼의 정확한 절차를 답변</li>
<li><strong>안전 규정 검색</strong>: 산업안전보건법, 사내 안전 규정, SOP 등을 색인하여 "밀폐 공간 작업 시 필요한 안전 장비와 절차"에 대해 정확한 규정 기반 답변 제공</li>
<li><strong>운전 절차서 지원</strong>: 발전 설비 운전 절차서를 기반으로 비상 상황 시 대응 절차를 즉시 안내</li>
</ol>
<blockquote>이러한 시스템은 신입 직원의 업무 적응을 돕고, 숙련 직원의 지식을 조직 차원에서 보존하며, 비상 상황에서 빠른 정보 접근을 가능하게 합니다.</blockquote>
`,quizzes:[{question:"RAG의 세 단계를 올바른 순서로 나열한 것은?",options:["Generate → Retrieve → Augment","Augment → Generate → Retrieve","Retrieve → Augment → Generate","Generate → Augment → Retrieve"],correctIndex:2,explanation:"RAG는 Retrieve(검색) → Augment(증강) → Generate(생성)의 순서로 작동합니다. 먼저 관련 문서를 검색하고, 검색 결과로 프롬프트를 증강한 후, AI가 답변을 생성합니다."},{question:"RAG가 Fine-tuning보다 유리한 점은?",options:["모델의 톤과 스타일을 변경하기 쉬움","전문 용어를 더 잘 학습함","새로운 문서를 추가하면 즉시 최신 정보가 반영됨","GPU가 필요 없음"],correctIndex:2,explanation:"RAG는 벡터 DB에 새 문서를 추가하기만 하면 모델 재학습 없이 즉시 최신 정보를 반영할 수 있습니다. Fine-tuning은 새 정보 반영을 위해 모델을 재학습해야 합니다."}]},{id:"api-usage",categoryId:"advanced",title:"AI API 활용",titleEn:"AI API Usage",estimatedMinutes:15,sortOrder:3,content:`
<h2>AI API란?</h2>
<p><strong>AI API(Application Programming Interface)</strong>는 프로그래밍 방식으로 AI 모델의 기능을 호출할 수 있는 인터페이스입니다. 웹 브라우저에서 ChatGPT나 Claude를 직접 사용하는 것과 달리, API를 통해 AI 기능을 자사 시스템, 업무 도구, 자동화 파이프라인에 직접 통합할 수 있습니다.</p>

<h3>API의 기본 개념</h3>
<ul>
<li><strong>REST API</strong>: HTTP 프로토콜 기반의 표준 API 방식. 요청(Request)을 보내고 응답(Response)을 받는 구조입니다.</li>
<li><strong>SDK(Software Development Kit)</strong>: API 호출을 더 편리하게 해주는 프로그래밍 라이브러리. Python, JavaScript, Java 등 다양한 언어용 SDK가 제공됩니다.</li>
<li><strong>API Key</strong>: API 호출 시 사용자를 인증하는 비밀 키. 절대로 코드에 직접 포함하거나 외부에 공개하면 안 됩니다.</li>
</ul>

<h3>주요 AI API 비교</h3>
<table>
<thead><tr><th>서비스</th><th>제공 모델</th><th>주요 특징</th><th>과금 방식</th></tr></thead>
<tbody>
<tr><td><strong>OpenAI API</strong></td><td>GPT-4o, GPT-4 Turbo, o1, DALL-E, Whisper</td><td>가장 넓은 생태계, 풍부한 문서, Function Calling</td><td>입력/출력 토큰 수 기반</td></tr>
<tr><td><strong>Anthropic API</strong></td><td>Claude 4 Opus, Claude Sonnet, Claude Haiku</td><td>긴 컨텍스트(200K), 안전성 중시, 구조적 출력</td><td>입력/출력 토큰 수 기반</td></tr>
<tr><td><strong>Google AI API</strong></td><td>Gemini 2.5 Pro, Gemini Flash</td><td>멀티모달 강점, Google 서비스 연동, 무료 티어</td><td>입력/출력 토큰 수 기반</td></tr>
<tr><td><strong>Azure OpenAI</strong></td><td>GPT-4, GPT-4o (Azure 호스팅)</td><td>엔터프라이즈 보안, 데이터 리전 선택, SLA</td><td>토큰 기반 + 프로비저닝 옵션</td></tr>
</tbody>
</table>

<h3>API 호출 방법</h3>
<h4>1. 인증 (Authentication)</h4>
<p>모든 AI API는 API Key를 통해 인증합니다. API Key는 환경 변수에 저장하여 관리합니다.</p>

<h4>2. Python으로 OpenAI API 호출 예시</h4>
<pre><code>import openai

client = openai.OpenAI(api_key="sk-...")  # 실제로는 환경 변수 사용

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "당신은 발전소 설비 전문가입니다."},
        {"role": "user", "content": "보일러 효율 저하의 주요 원인 3가지를 알려주세요."}
    ],
    temperature=0.3,
    max_tokens=1000
)

print(response.choices[0].message.content)</code></pre>

<h4>3. Python으로 Anthropic API 호출 예시</h4>
<pre><code>import anthropic

client = anthropic.Anthropic(api_key="sk-ant-...")

message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "터빈 정비 체크리스트를 작성해주세요."}
    ]
)

print(message.content[0].text)</code></pre>

<h3>API 활용 사례</h3>
<ul>
<li><strong>사내 챗봇 구축</strong>: 사내 시스템에 AI 챗봇을 통합하여 직원들의 질문에 자동 응답. 사내 매뉴얼/규정 기반 RAG 시스템과 결합하면 더욱 효과적</li>
<li><strong>문서 분석 자동화</strong>: 정기 보고서, 점검 일지, 안전 보고서 등을 API로 자동 분석하고 요약. 이상 패턴이 감지되면 관리자에게 알림</li>
<li><strong>데이터 파이프라인</strong>: 설비 센서 데이터를 수집하고, AI API를 통해 이상 탐지, 예측 분석을 자동으로 수행하는 파이프라인 구축</li>
<li><strong>번역/다국어 지원</strong>: 해외 협력사와의 기술 문서 번역을 API로 자동화</li>
</ul>

<h3>비용 관리</h3>
<p>AI API는 <strong>토큰 기반 과금</strong>이 일반적입니다. 비용을 효과적으로 관리하기 위한 방법을 알아보겠습니다.</p>
<ul>
<li><strong>토큰 이해</strong>: 한국어 1글자는 약 1~3 토큰, 영어 1단어는 약 1~2 토큰. 입력(프롬프트)과 출력(응답) 모두 과금</li>
<li><strong>모델 선택 최적화</strong>: 단순한 작업에는 저비용 모델(GPT-4o mini, Claude Haiku, Gemini Flash)을, 복잡한 작업에는 고성능 모델 사용</li>
<li><strong>캐싱</strong>: 동일한 질문에 대한 응답을 캐싱하여 반복 호출 방지</li>
<li><strong>Rate Limiting</strong>: API 호출 빈도를 제한하여 예상치 못한 비용 폭증 방지</li>
<li><strong>월간 예산 설정</strong>: 대부분의 API 서비스에서 사용량 상한선 설정 가능</li>
</ul>

<div class="warning-box">
<strong>API Key 보안 주의:</strong> API Key가 외부에 노출되면 타인이 무단으로 사용하여 막대한 비용이 발생할 수 있습니다. API Key는 절대로 소스 코드에 직접 작성하지 말고, 환경 변수 또는 시크릿 관리 서비스를 사용하여 관리하세요.
</div>

<div class="tip-box">
<strong>발전소 적용 팁:</strong> AI API를 활용하면 기존 설비 관리 시스템(CMMS)이나 안전 관리 시스템에 AI 기능을 직접 통합할 수 있습니다. 예를 들어, 정비 작업 완료 보고서가 등록되면 자동으로 AI가 분석하여 후속 조치 사항을 추천하는 시스템을 구축할 수 있습니다.
</div>
`,quizzes:[{question:"AI API 비용 관리를 위한 방법으로 적절하지 않은 것은?",options:["단순한 작업에는 저비용 모델 사용","동일한 질문의 응답을 캐싱","항상 가장 비싼 고성능 모델만 사용","월간 예산 상한선 설정"],correctIndex:2,explanation:"모든 작업에 가장 비싼 모델을 사용하면 불필요한 비용이 발생합니다. 작업의 복잡도에 따라 적절한 모델을 선택하는 것이 효과적인 비용 관리 방법입니다."},{question:"AI API Key 관리에 대한 올바른 방법은?",options:["소스 코드에 직접 작성하여 편리하게 사용","팀원 모두에게 이메일로 공유","환경 변수 또는 시크릿 관리 서비스로 관리","API Key를 README 파일에 기재"],correctIndex:2,explanation:"API Key는 절대로 소스 코드에 직접 작성하거나 외부에 공유하면 안 됩니다. 환경 변수(.env) 또는 시크릿 관리 서비스(AWS Secrets Manager, Azure Key Vault 등)를 사용하여 안전하게 관리해야 합니다."}]},{id:"multimodal",categoryId:"advanced",title:"멀티모달 AI",titleEn:"Multimodal AI",estimatedMinutes:14,sortOrder:4,content:`
<h2>멀티모달 AI란?</h2>
<p><strong>멀티모달 AI(Multimodal AI)</strong>는 텍스트, 이미지, 오디오, 비디오 등 <strong>여러 형태(모달리티)의 데이터를 동시에 이해하고 처리</strong>할 수 있는 AI 시스템입니다. 기존의 텍스트 전용 AI와 달리, 사진을 보고 설명하거나, 음성을 듣고 번역하거나, 도면을 분석하는 등 다양한 형태의 입출력이 가능합니다.</p>

<h3>멀티모달 AI의 입출력 조합</h3>
<ul>
<li><strong>텍스트 → 텍스트</strong>: 기존 LLM (번역, 요약, 질의응답)</li>
<li><strong>이미지 → 텍스트</strong>: 이미지 분석, 설명 생성, OCR (광학 문자 인식)</li>
<li><strong>텍스트 → 이미지</strong>: 이미지 생성 (DALL-E, Midjourney)</li>
<li><strong>오디오 → 텍스트</strong>: 음성 인식, STT (Speech-to-Text)</li>
<li><strong>텍스트 → 오디오</strong>: 음성 합성, TTS (Text-to-Speech)</li>
<li><strong>비디오 → 텍스트</strong>: 영상 분석, 자막 생성, 내용 요약</li>
<li><strong>이미지 + 텍스트 → 텍스트</strong>: 이미지에 대한 질문 답변 (Visual QA)</li>
</ul>

<h3>주요 멀티모달 AI 모델</h3>
<table>
<thead><tr><th>모델</th><th>개발사</th><th>지원 모달리티</th><th>주요 특징</th></tr></thead>
<tbody>
<tr><td><strong>GPT-4o</strong></td><td>OpenAI</td><td>텍스트, 이미지, 오디오</td><td>실시간 음성 대화, 이미지 분석, 통합 멀티모달 처리</td></tr>
<tr><td><strong>Gemini 2.5 Pro</strong></td><td>Google</td><td>텍스트, 이미지, 오디오, 비디오</td><td>100만 토큰 컨텍스트, 긴 영상 분석, 네이티브 멀티모달</td></tr>
<tr><td><strong>Claude (Vision)</strong></td><td>Anthropic</td><td>텍스트, 이미지</td><td>정교한 이미지 분석, 차트/그래프 해석, 문서 OCR</td></tr>
<tr><td><strong>GPT-4o + DALL-E 3</strong></td><td>OpenAI</td><td>텍스트 → 이미지</td><td>자연어로 고품질 이미지 생성</td></tr>
<tr><td><strong>Whisper</strong></td><td>OpenAI</td><td>오디오 → 텍스트</td><td>다국어 음성 인식, 높은 한국어 인식률</td></tr>
</tbody>
</table>

<h3>멀티모달 AI 활용 사례</h3>
<h4>1. 이미지 분석</h4>
<p>사진이나 스크린샷을 AI에 업로드하면 내용을 분석하고 설명합니다.</p>
<ul>
<li>차트나 그래프의 트렌드 분석</li>
<li>표나 양식의 데이터 추출</li>
<li>손글씨나 인쇄된 문서의 텍스트 인식 (OCR)</li>
</ul>

<h4>2. 도면/다이어그램 해석</h4>
<p>기술 도면, 배관도, 전기 회로도 등을 AI에 입력하면 구성 요소를 식별하고 설명합니다.</p>

<h4>3. 음성 변환 (STT/TTS)</h4>
<p>회의 녹음, 현장 음성 메모 등을 텍스트로 변환하거나, 텍스트 보고서를 음성으로 변환하여 이동 중에 청취할 수 있습니다.</p>

<h4>4. 영상 분석 및 요약</h4>
<p>교육 영상, 작업 영상 등의 핵심 내용을 자동으로 요약하고, 특정 장면을 검색할 수 있습니다.</p>

<h3>발전소에서의 멀티모달 AI 활용</h3>
<p>한국중부발전의 발전소 현장에서 멀티모달 AI를 활용할 수 있는 구체적인 시나리오입니다.</p>
<ol>
<li><strong>설비 사진 분석</strong>: 정비 담당자가 설비 이상 부위를 촬영하면, AI가 부식, 균열, 누설 등의 이상 징후를 자동으로 식별하고 심각도를 평가합니다.
<div class="info-box">예시: "이 사진은 보일러 헤더의 용접부입니다. 3시 방향에 약 2cm 길이의 표면 균열이 관찰됩니다. 즉시 NDT(비파괴검사) 수행을 권장합니다."</div></li>
<li><strong>계기판/디스플레이 판독</strong>: 현장 계기판 사진을 촬영하면 AI가 수치를 자동으로 읽고, 정상 범위 여부를 판단합니다. 수기 기록의 오류를 줄이고 데이터 수집 속도를 높입니다.</li>
<li><strong>안전 영상 분석</strong>: CCTV 영상에서 안전모/안전복 미착용, 위험 구역 침입, 비정상 행동 등을 자동으로 감지하여 안전 관리를 강화합니다.</li>
<li><strong>기술 도면 분석</strong>: P&ID(배관계장도), 전기 단선도, 설비 배치도 등의 도면을 AI에 입력하면 구성 요소를 식별하고, 관련 규격이나 매뉴얼 정보를 제공합니다.</li>
</ol>

<h3>멀티모달 AI의 미래 전망</h3>
<p>멀티모달 AI는 빠르게 발전하고 있으며, 향후 다음과 같은 방향으로 진화할 것으로 예상됩니다.</p>
<ul>
<li><strong>실시간 처리</strong>: 영상 스트리밍을 실시간으로 분석하여 즉각적인 피드백 제공 (GPT-4o의 실시간 음성 기능이 그 시작)</li>
<li><strong>로보틱스 통합</strong>: 로봇이 시각(카메라), 청각(마이크), 촉각(센서) 등 다중 감각을 AI로 처리하여 자율적으로 작업 수행</li>
<li><strong>디지털 트윈</strong>: 발전소의 디지털 트윈과 멀티모달 AI를 결합하여 설비 상태를 3D로 시각화하고, AI가 실시간 분석 및 예측</li>
<li><strong>통합 인터페이스</strong>: 키보드 없이 음성과 제스처만으로 AI와 상호작용하는 자연스러운 인터페이스</li>
</ul>

<div class="tip-box">
<strong>실무 적용 팁:</strong> 멀티모달 AI를 바로 시작하는 가장 쉬운 방법은 ChatGPT나 Claude에 사진을 업로드하는 것입니다. 설비 사진, 데이터 표, 도면 등을 업로드하고 "이 사진에서 이상한 점을 찾아주세요" 또는 "이 표의 데이터를 분석해주세요"와 같이 질문해 보세요.
</div>
`,quizzes:[{question:"다음 중 멀티모달 AI의 활용 사례가 아닌 것은?",options:["설비 사진에서 균열을 자동 감지","회의 녹음을 텍스트로 변환","텍스트만으로 수학 문제 풀기","CCTV 영상에서 안전모 미착용 감지"],correctIndex:2,explanation:"텍스트만으로 수학 문제를 푸는 것은 단일 모달(텍스트)의 작업이며, 멀티모달 AI의 고유한 활용 사례가 아닙니다. 멀티모달 AI는 여러 형태의 데이터를 동시에 처리하는 것이 특징입니다."},{question:'발전소에서 멀티모달 AI를 활용한 "계기판 판독"의 주요 이점은?',options:["AI가 계기판을 물리적으로 교체","수기 기록 오류 감소와 데이터 수집 속도 향상","계기판 없이 설비를 운영","계기판의 디자인을 자동으로 변경"],correctIndex:1,explanation:"멀티모달 AI를 활용한 계기판 판독은 사진에서 수치를 자동으로 읽어 수기 기록의 오류를 줄이고, 데이터 수집 속도를 높이는 것이 주요 이점입니다."}]}],d=[...t,...o,...r,...n,...i,...s,...e];export{d as L};

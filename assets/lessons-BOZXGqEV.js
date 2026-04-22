const t=[{id:"ai-what",categoryId:"ai-basics",title:"인공지능(AI)이란?",titleEn:"What is AI?",content:`<h2>인공지능(AI)의 정의</h2>
<p>인공지능(Artificial Intelligence, AI)은 인간의 학습, 추론, 판단 등의 지능적 행위를 컴퓨터가 수행할 수 있도록 하는 기술입니다.</p>
<h3>AI의 분류</h3>
<ul>
<li><strong>약한 AI (Narrow AI)</strong>: 특정 작업에 특화된 AI. 현재 대부분의 AI가 여기에 해당합니다. 예) 이미지 인식, 번역, 챗봇</li>
<li><strong>강한 AI (General AI)</strong>: 인간과 동등한 수준의 범용 지능을 가진 AI. 아직 실현되지 않았습니다.</li>
<li><strong>초지능 AI (Super AI)</strong>: 인간을 초월하는 지능. 이론적 개념 단계입니다.</li>
</ul>
<h3>AI의 역사</h3>
<p>1956년 다트머스 회의에서 "인공지능"이라는 용어가 처음 사용되었습니다. 이후 여러 번의 AI 겨울(침체기)과 부흥기를 거쳐, 2010년대 딥러닝의 발전으로 현재의 AI 붐이 시작되었습니다.</p>
<blockquote>발전소 업무에서의 AI: 설비 예측 정비, 발전량 최적화, 안전 관리 등 다양한 분야에서 AI가 활용되고 있습니다.</blockquote>`,estimatedMinutes:10,sortOrder:1,quizzes:[{question:"현재 대부분의 AI 시스템은 어떤 유형에 해당하나요?",options:["강한 AI (General AI)","약한 AI (Narrow AI)","초지능 AI (Super AI)","양자 AI (Quantum AI)"],correctIndex:1,explanation:"현재 상용화된 대부분의 AI는 특정 작업에 특화된 약한 AI(Narrow AI)입니다."},{question:'"인공지능"이라는 용어가 처음 사용된 것은 언제인가요?',options:["1946년","1956년","1966년","1976년"],correctIndex:1,explanation:'1956년 다트머스 회의에서 존 매카시가 "인공지능"이라는 용어를 처음 사용했습니다.'}]},{id:"ml-dl",categoryId:"ai-basics",title:"머신러닝과 딥러닝",titleEn:"Machine Learning & Deep Learning",content:`<h2>머신러닝(ML)이란?</h2>
<p>머신러닝은 데이터를 통해 패턴을 학습하고, 이를 바탕으로 예측이나 결정을 내리는 AI의 하위 분야입니다.</p>
<h3>머신러닝의 3가지 유형</h3>
<ul>
<li><strong>지도학습 (Supervised Learning)</strong>: 정답이 있는 데이터로 학습. 예) 이메일 스팸 분류</li>
<li><strong>비지도학습 (Unsupervised Learning)</strong>: 정답 없이 데이터의 패턴을 발견. 예) 고객 군집 분석</li>
<li><strong>강화학습 (Reinforcement Learning)</strong>: 시행착오를 통해 최적의 행동을 학습. 예) 게임 AI, 로봇 제어</li>
</ul>
<h2>딥러닝(DL)이란?</h2>
<p>딥러닝은 인공 신경망을 여러 층으로 쌓아 복잡한 패턴을 학습하는 머신러닝의 한 분야입니다. 이미지 인식, 자연어 처리, 음성 인식 등에서 뛰어난 성능을 보입니다.</p>
<blockquote>AI ⊃ 머신러닝 ⊃ 딥러닝 — 딥러닝은 머신러닝의 한 종류이며, 머신러닝은 AI의 한 분야입니다.</blockquote>`,estimatedMinutes:12,sortOrder:2,quizzes:[{question:"정답이 있는 데이터로 학습하는 머신러닝 유형은?",options:["비지도학습","지도학습","강화학습","전이학습"],correctIndex:1,explanation:"지도학습(Supervised Learning)은 레이블(정답)이 있는 데이터로 학습합니다."}]},{id:"gen-ai",categoryId:"ai-basics",title:"생성형 AI의 이해",titleEn:"Understanding Generative AI",content:`<h2>생성형 AI란?</h2>
<p>생성형 AI(Generative AI)는 텍스트, 이미지, 코드, 음악 등 새로운 콘텐츠를 생성할 수 있는 AI 기술입니다.</p>
<h3>주요 생성형 AI 모델</h3>
<ul>
<li><strong>GPT (OpenAI)</strong>: 텍스트 생성에 특화된 대규모 언어 모델</li>
<li><strong>Claude (Anthropic)</strong>: 안전하고 도움되는 AI 어시스턴트</li>
<li><strong>Gemini (Google)</strong>: 멀티모달(텍스트+이미지) 처리 가능한 AI</li>
<li><strong>DALL-E, Midjourney</strong>: 텍스트를 이미지로 변환하는 AI</li>
</ul>
<h3>생성형 AI의 활용 분야</h3>
<p>문서 작성, 코드 생성, 번역, 요약, 아이디어 브레인스토밍, 데이터 분석, 이미지 제작 등 거의 모든 지식 작업에 활용 가능합니다.</p>`,estimatedMinutes:10,sortOrder:3,quizzes:[{question:"다음 중 생성형 AI가 아닌 것은?",options:["ChatGPT","Excel","Claude","DALL-E"],correctIndex:1,explanation:"Excel은 스프레드시트 소프트웨어로, 생성형 AI가 아닙니다."}]},{id:"llm-basics",categoryId:"ai-basics",title:"LLM(대규모 언어 모델)의 기초",titleEn:"LLM Basics",content:`<h2>LLM이란?</h2>
<p>LLM(Large Language Model)은 방대한 텍스트 데이터로 학습된 대규모 언어 모델입니다. 수십~수천억 개의 매개변수(파라미터)를 가지며, 인간과 유사한 텍스트를 생성할 수 있습니다.</p>
<h3>LLM의 작동 원리</h3>
<p>LLM은 <strong>토큰(token)</strong> 단위로 텍스트를 처리합니다. 주어진 문맥에서 다음에 올 가능성이 가장 높은 토큰을 예측하는 방식으로 텍스트를 생성합니다.</p>
<h3>주요 개념</h3>
<ul>
<li><strong>토큰(Token)</strong>: 텍스트의 기본 단위. 한국어 한 글자가 보통 1~2 토큰</li>
<li><strong>컨텍스트 윈도우</strong>: LLM이 한 번에 처리할 수 있는 토큰 수</li>
<li><strong>온도(Temperature)</strong>: 출력의 창의성/랜덤성을 조절하는 값 (0~1)</li>
<li><strong>할루시네이션</strong>: AI가 사실이 아닌 정보를 마치 사실인 것처럼 생성하는 현상</li>
</ul>`,estimatedMinutes:12,sortOrder:4,quizzes:[{question:"LLM에서 텍스트를 처리하는 기본 단위는?",options:["문장","단어","토큰","문단"],correctIndex:2,explanation:"LLM은 토큰(token) 단위로 텍스트를 처리합니다."}]},{id:"ai-history",categoryId:"ai-basics",title:"AI의 발전사와 미래",titleEn:"AI History & Future",content:`<h2>AI 발전의 주요 이정표</h2>
<ul>
<li><strong>1956년</strong>: 다트머스 회의 — AI 개념 탄생</li>
<li><strong>1997년</strong>: IBM Deep Blue — 체스 세계 챔피언 격파</li>
<li><strong>2011년</strong>: IBM Watson — 퀴즈쇼 Jeopardy! 우승</li>
<li><strong>2016년</strong>: AlphaGo — 바둑 세계 챔피언 이세돌 격파</li>
<li><strong>2022년</strong>: ChatGPT 출시 — 생성형 AI 대중화</li>
<li><strong>2024~</strong>: AI 에이전트 시대 — 자율적으로 작업 수행하는 AI</li>
</ul>
<h3>AI의 미래 전망</h3>
<p>AI는 단순한 도구에서 점점 더 자율적인 파트너로 진화하고 있습니다. 발전소 운영에서도 AI가 실시간 의사결정을 지원하고, 예측 유지보수를 수행하는 시대가 오고 있습니다.</p>`,estimatedMinutes:8,sortOrder:5,quizzes:[{question:"ChatGPT가 출시된 해는?",options:["2020년","2021년","2022년","2023년"],correctIndex:2,explanation:"ChatGPT는 2022년 11월에 출시되어 생성형 AI 대중화를 이끌었습니다."}]},{id:"chatgpt-guide",categoryId:"ai-tools",title:"ChatGPT 활용 가이드",titleEn:"ChatGPT Guide",content:`<h2>ChatGPT란?</h2>
<p>ChatGPT는 OpenAI가 개발한 대화형 AI 서비스입니다. GPT-4, GPT-4o 등의 모델을 기반으로 자연스러운 대화, 문서 작성, 코드 생성, 데이터 분석 등 다양한 작업을 수행합니다.</p>
<h3>ChatGPT 주요 기능</h3>
<ul>
<li>텍스트 생성 및 편집</li>
<li>코드 작성 및 디버깅</li>
<li>데이터 분석 (Advanced Data Analysis)</li>
<li>이미지 생성 (DALL-E 통합)</li>
<li>웹 브라우징</li>
<li>파일 업로드 및 분석</li>
</ul>
<h3>효과적인 사용 팁</h3>
<p>구체적이고 명확한 지시를 하세요. 역할을 부여하고, 원하는 출력 형식을 지정하면 더 좋은 결과를 얻을 수 있습니다.</p>`,estimatedMinutes:12,sortOrder:1,quizzes:[{question:"ChatGPT를 개발한 회사는?",options:["Google","Microsoft","OpenAI","Anthropic"],correctIndex:2,explanation:"ChatGPT는 OpenAI가 개발한 대화형 AI 서비스입니다."}]},{id:"claude-guide",categoryId:"ai-tools",title:"Claude 활용 가이드",titleEn:"Claude Guide",content:`<h2>Claude란?</h2>
<p>Claude는 Anthropic이 개발한 AI 어시스턴트입니다. 안전성과 정확성에 중점을 둔 설계가 특징이며, 긴 문맥 처리와 분석 작업에 강점이 있습니다.</p>
<h3>Claude의 특징</h3>
<ul>
<li><strong>긴 컨텍스트</strong>: 최대 200K 토큰의 긴 문서 처리 가능</li>
<li><strong>정확한 분석</strong>: 복잡한 문서 분석과 요약에 강점</li>
<li><strong>코드 생성</strong>: 다양한 프로그래밍 언어 지원</li>
<li><strong>안전성</strong>: Constitutional AI 기반의 안전한 응답</li>
</ul>
<h3>Claude vs ChatGPT</h3>
<p>두 AI 도구는 각각의 강점이 있으므로, 작업 특성에 따라 적절한 도구를 선택하는 것이 좋습니다.</p>`,estimatedMinutes:10,sortOrder:2,quizzes:[{question:"Claude를 개발한 회사는?",options:["OpenAI","Google","Anthropic","Meta"],correctIndex:2,explanation:"Claude는 Anthropic이 개발한 AI 어시스턴트입니다."}]},{id:"gemini-guide",categoryId:"ai-tools",title:"Gemini 활용 가이드",titleEn:"Gemini Guide",content:`<h2>Gemini란?</h2>
<p>Gemini는 Google이 개발한 멀티모달 AI 모델입니다. 텍스트, 이미지, 오디오, 비디오 등 다양한 형태의 데이터를 이해하고 처리할 수 있습니다.</p>
<h3>Gemini의 장점</h3>
<ul>
<li>Google 서비스(Gmail, Docs, Sheets 등)와의 통합</li>
<li>멀티모달 입력 처리</li>
<li>실시간 웹 검색 연동</li>
<li>Google Workspace에서 직접 활용 가능</li>
</ul>`,estimatedMinutes:10,sortOrder:3,quizzes:[{question:"Gemini의 가장 큰 특징은?",options:["가격이 저렴함","멀티모달 처리 능력","오프라인에서 작동","한국어만 지원"],correctIndex:1,explanation:"Gemini는 텍스트, 이미지, 오디오, 비디오 등 다양한 형태의 데이터를 처리하는 멀티모달 AI입니다."}]},{id:"copilot-guide",categoryId:"ai-tools",title:"Copilot 활용 가이드",titleEn:"Copilot Guide",content:`<h2>Microsoft Copilot</h2>
<p>Microsoft Copilot은 Microsoft 365에 통합된 AI 어시스턴트입니다. Word, Excel, PowerPoint, Outlook 등에서 직접 AI를 활용할 수 있습니다.</p>
<h3>Copilot 활용 사례</h3>
<ul>
<li><strong>Word</strong>: 문서 초안 작성, 요약, 편집</li>
<li><strong>Excel</strong>: 데이터 분석, 수식 생성, 차트 제작</li>
<li><strong>PowerPoint</strong>: 프레젠테이션 자동 생성</li>
<li><strong>Outlook</strong>: 이메일 작성, 요약, 일정 관리</li>
<li><strong>Teams</strong>: 회의 요약, 작업 항목 추출</li>
</ul>`,estimatedMinutes:10,sortOrder:4,quizzes:[{question:"Microsoft Copilot이 통합되지 않은 서비스는?",options:["Word","Excel","Photoshop","PowerPoint"],correctIndex:2,explanation:"Photoshop은 Adobe 제품으로, Microsoft Copilot이 아닌 Adobe Firefly가 통합되어 있습니다."}]},{id:"perplexity-guide",categoryId:"ai-tools",title:"Perplexity AI 활용법",titleEn:"Perplexity AI Guide",content:`<h2>Perplexity AI</h2>
<p>Perplexity AI는 AI 기반 검색 엔진입니다. 질문에 대한 답변을 실시간 웹 검색과 AI 분석을 결합하여 제공합니다.</p>
<h3>Perplexity의 특징</h3>
<ul>
<li>실시간 웹 소스 기반 답변 (출처 명시)</li>
<li>학술 논문, 뉴스, 포럼 등 다양한 소스 검색</li>
<li>후속 질문 기능 (Follow-up)</li>
<li>리서치 모드로 심층 분석 가능</li>
</ul>`,estimatedMinutes:8,sortOrder:5,quizzes:[{question:"Perplexity AI의 주요 특징은?",options:["이미지 생성","실시간 웹 검색 기반 답변","오프라인 전용","코드 전용 AI"],correctIndex:1,explanation:"Perplexity AI는 실시간 웹 검색과 AI 분석을 결합하여 출처가 명시된 답변을 제공합니다."}]},{id:"image-ai",categoryId:"ai-tools",title:"이미지 생성 AI 활용",titleEn:"Image Generation AI",content:`<h2>이미지 생성 AI</h2>
<p>텍스트 설명만으로 이미지를 생성하는 AI 도구들이 있습니다.</p>
<h3>주요 이미지 생성 AI</h3>
<ul>
<li><strong>DALL-E 3</strong> (OpenAI): ChatGPT에 통합, 자연어로 이미지 생성</li>
<li><strong>Midjourney</strong>: 예술적이고 고품질의 이미지 생성</li>
<li><strong>Stable Diffusion</strong>: 오픈소스, 로컬에서 실행 가능</li>
<li><strong>Ideogram</strong>: 텍스트가 포함된 이미지 생성에 강점</li>
</ul>
<h3>업무 활용 예시</h3>
<p>프레젠테이션 삽화, 보고서 다이어그램, SNS 콘텐츠, 안전 가이드 일러스트 등에 활용할 수 있습니다.</p>`,estimatedMinutes:10,sortOrder:6,quizzes:[{question:"오픈소스 이미지 생성 AI는?",options:["DALL-E","Midjourney","Stable Diffusion","Ideogram"],correctIndex:2,explanation:"Stable Diffusion은 오픈소스로 공개되어 누구나 로컬에서 실행할 수 있습니다."}]},{id:"prompt-basics",categoryId:"prompt",title:"프롬프트 기초",titleEn:"Prompt Basics",content:`<h2>프롬프트란?</h2>
<p>프롬프트(Prompt)는 AI에게 전달하는 지시문입니다. 좋은 프롬프트를 작성하면 AI로부터 더 정확하고 유용한 결과를 얻을 수 있습니다.</p>
<h3>좋은 프롬프트의 5가지 요소</h3>
<ul>
<li><strong>역할(Role)</strong>: AI에게 특정 전문가 역할 부여</li>
<li><strong>맥락(Context)</strong>: 배경 정보와 상황 설명</li>
<li><strong>지시(Instruction)</strong>: 수행할 작업을 명확하게 기술</li>
<li><strong>형식(Format)</strong>: 원하는 출력 형태 지정</li>
<li><strong>제약(Constraints)</strong>: 제한 조건이나 주의사항</li>
</ul>`,estimatedMinutes:12,sortOrder:1,quizzes:[{question:"좋은 프롬프트의 요소가 아닌 것은?",options:["역할(Role)","맥락(Context)","가격(Price)","형식(Format)"],correctIndex:2,explanation:"좋은 프롬프트의 5요소는 역할, 맥락, 지시, 형식, 제약입니다."}]},{id:"few-shot",categoryId:"prompt",title:"Few-shot 프롬프팅",titleEn:"Few-shot Prompting",content:`<h2>Few-shot 프롬프팅이란?</h2>
<p>Few-shot 프롬프팅은 AI에게 몇 가지 예시를 제공하여 원하는 패턴의 응답을 유도하는 기법입니다.</p>
<h3>예시</h3>
<p><code>입력: "좋은 아침" → 출력: "Good morning"
입력: "감사합니다" → 출력: "Thank you"
입력: "안녕하세요" → 출력:</code></p>
<h3>유형별 비교</h3>
<ul>
<li><strong>Zero-shot</strong>: 예시 없이 직접 질문</li>
<li><strong>One-shot</strong>: 예시 1개 제공</li>
<li><strong>Few-shot</strong>: 예시 2~5개 제공</li>
</ul>`,estimatedMinutes:12,sortOrder:2,quizzes:[{question:"Few-shot 프롬프팅에서 일반적으로 제공하는 예시 수는?",options:["0개","1개","2~5개","100개 이상"],correctIndex:2,explanation:"Few-shot은 일반적으로 2~5개의 예시를 제공하는 기법입니다."}]},{id:"cot",categoryId:"prompt",title:"Chain-of-Thought 프롬프팅",titleEn:"Chain-of-Thought Prompting",content:`<h2>Chain-of-Thought(CoT)란?</h2>
<p>CoT 프롬프팅은 AI에게 단계별로 사고 과정을 보여달라고 요청하여 더 정확한 답변을 유도하는 기법입니다.</p>
<h3>사용법</h3>
<p>"단계별로 생각해보세요" 또는 "Let's think step by step" 같은 구문을 프롬프트에 추가합니다.</p>
<h3>효과적인 경우</h3>
<ul>
<li>수학 문제 풀이</li>
<li>논리적 추론이 필요한 질문</li>
<li>복잡한 의사결정</li>
<li>코드 디버깅</li>
</ul>`,estimatedMinutes:10,sortOrder:3,quizzes:[{question:"CoT 프롬프팅의 핵심은?",options:["짧은 답변 요청","단계별 사고 과정 요청","이미지 생성 요청","번역 요청"],correctIndex:1,explanation:"Chain-of-Thought는 AI에게 단계별로 사고 과정을 보여달라고 요청하는 기법입니다."}]},{id:"role-play",categoryId:"prompt",title:"역할 부여 프롬프팅",titleEn:"Role-play Prompting",content:`<h2>역할 부여 프롬프팅</h2>
<p>AI에게 특정 전문가의 역할을 부여하여 해당 분야의 전문적인 답변을 유도하는 기법입니다.</p>
<h3>예시</h3>
<p><code>"당신은 20년 경력의 발전소 안전 관리 전문가입니다. 다음 상황에서의 안전 조치를 설명해주세요..."</code></p>
<h3>효과적인 역할 설정 팁</h3>
<ul>
<li>구체적인 경력과 전문 분야 명시</li>
<li>대상 청중 수준 지정</li>
<li>답변 톤과 스타일 지정</li>
</ul>`,estimatedMinutes:10,sortOrder:4,quizzes:[{question:"역할 부여 프롬프팅의 주요 목적은?",options:["AI 속도 향상","전문적인 답변 유도","AI 비용 절감","이미지 품질 향상"],correctIndex:1,explanation:"역할 부여 프롬프팅은 특정 전문가 역할을 부여하여 전문적인 답변을 유도합니다."}]},{id:"prompt-template",categoryId:"prompt",title:"프롬프트 템플릿 활용",titleEn:"Prompt Templates",content:`<h2>프롬프트 템플릿</h2>
<p>자주 사용하는 프롬프트 패턴을 템플릿으로 만들어두면 효율적으로 AI를 활용할 수 있습니다.</p>
<h3>업무별 템플릿 예시</h3>
<ul>
<li><strong>보고서 작성</strong>: "다음 데이터를 바탕으로 [보고서 유형] 형식의 보고서를 작성해주세요..."</li>
<li><strong>이메일 작성</strong>: "[상대방]에게 [목적]에 대해 [톤]의 이메일을 작성해주세요..."</li>
<li><strong>회의록 정리</strong>: "다음 회의 내용을 참석자, 주요 논의사항, 결정사항, Action Items로 정리해주세요..."</li>
</ul>`,estimatedMinutes:12,sortOrder:5,quizzes:[{question:"프롬프트 템플릿의 장점은?",options:["AI 학습 속도 향상","일관된 고품질 출력 확보","AI 비용 무료화","인터넷 불필요"],correctIndex:1,explanation:"프롬프트 템플릿을 사용하면 일관된 형식의 고품질 출력을 효율적으로 얻을 수 있습니다."}]},{id:"prompt-advanced",categoryId:"prompt",title:"고급 프롬프트 기법",titleEn:"Advanced Prompt Techniques",content:`<h2>고급 프롬프트 기법</h2>
<h3>1. 자기 일관성 (Self-Consistency)</h3>
<p>같은 질문에 대해 여러 번 답변을 생성한 후, 가장 빈번한 답변을 채택하는 방법입니다.</p>
<h3>2. Tree-of-Thought</h3>
<p>여러 사고 경로를 동시에 탐색하여 최적의 답을 찾는 기법입니다.</p>
<h3>3. 메타 프롬프팅</h3>
<p>AI에게 "좋은 프롬프트를 만들어달라"고 요청하여, AI가 스스로 최적의 프롬프트를 설계하도록 하는 기법입니다.</p>`,estimatedMinutes:14,sortOrder:6,quizzes:[{question:'AI에게 "좋은 프롬프트를 만들어달라"고 요청하는 기법은?',options:["Few-shot","CoT","메타 프롬프팅","Zero-shot"],correctIndex:2,explanation:"메타 프롬프팅은 AI에게 프롬프트 자체를 설계하도록 요청하는 기법입니다."}]},{id:"agent-concept",categoryId:"ai-agents",title:"AI 에이전트란?",titleEn:"What are AI Agents?",content:`<h2>AI 에이전트의 개념</h2>
<p>AI 에이전트는 목표를 부여받으면 스스로 계획을 세우고, 도구를 사용하며, 작업을 수행하는 자율적인 AI 시스템입니다.</p>
<h3>에이전트 vs 챗봇</h3>
<ul>
<li><strong>챗봇</strong>: 사용자의 질문에 답변만 제공</li>
<li><strong>에이전트</strong>: 스스로 판단하고 행동하여 목표를 달성</li>
</ul>
<h3>AI 에이전트의 구성 요소</h3>
<ul>
<li>계획 능력 (Planning)</li>
<li>도구 사용 (Tool Use)</li>
<li>메모리 (Memory)</li>
<li>자기 반성 (Self-reflection)</li>
</ul>`,estimatedMinutes:12,sortOrder:1,quizzes:[{question:"AI 에이전트와 챗봇의 가장 큰 차이점은?",options:["응답 속도","자율적 행동과 도구 사용","사용 비용","지원 언어 수"],correctIndex:1,explanation:"AI 에이전트는 스스로 계획을 세우고 도구를 사용하여 작업을 수행하는 자율성이 핵심 차이입니다."}]},{id:"mcp-basics",categoryId:"ai-agents",title:"MCP(Model Context Protocol)",titleEn:"MCP Basics",content:`<h2>MCP란?</h2>
<p>MCP(Model Context Protocol)는 AI 모델이 외부 도구, 데이터 소스, 시스템과 표준화된 방식으로 연결되는 프로토콜입니다.</p>
<h3>MCP의 핵심 개념</h3>
<ul>
<li><strong>도구(Tools)</strong>: AI가 호출할 수 있는 함수/API</li>
<li><strong>리소스(Resources)</strong>: AI가 접근할 수 있는 데이터</li>
<li><strong>프롬프트(Prompts)</strong>: 재사용 가능한 프롬프트 템플릿</li>
</ul>
<h3>MCP 활용 예시</h3>
<p>파일 시스템 접근, 데이터베이스 조회, API 호출, 웹 검색 등을 AI가 직접 수행할 수 있게 됩니다.</p>`,estimatedMinutes:12,sortOrder:2,quizzes:[{question:"MCP에서 AI가 호출할 수 있는 함수/API를 무엇이라 하나요?",options:["리소스","프롬프트","도구(Tools)","메모리"],correctIndex:2,explanation:"MCP에서 도구(Tools)는 AI가 호출할 수 있는 함수나 API를 의미합니다."}]},{id:"automation",categoryId:"ai-agents",title:"AI 자동화",titleEn:"AI Automation",content:`<h2>AI 자동화란?</h2>
<p>AI 자동화는 반복적인 업무를 AI가 자동으로 처리하도록 설정하는 것입니다.</p>
<h3>자동화 가능한 업무 예시</h3>
<ul>
<li>이메일 분류 및 자동 회신</li>
<li>보고서 자동 생성</li>
<li>데이터 입력 및 정리</li>
<li>일정 관리 및 알림</li>
<li>설비 데이터 모니터링 및 이상 감지</li>
</ul>`,estimatedMinutes:10,sortOrder:3,quizzes:[{question:"AI 자동화의 가장 큰 장점은?",options:["반복 업무 자동 처리","AI 비용 절감","인터넷 속도 향상","하드웨어 성능 향상"],correctIndex:0,explanation:"AI 자동화의 가장 큰 장점은 반복적인 업무를 자동으로 처리하여 생산성을 높이는 것입니다."}]},{id:"agent-cases",categoryId:"ai-agents",title:"AI 에이전트 활용 사례",titleEn:"Agent Use Cases",content:`<h2>AI 에이전트 실제 활용 사례</h2>
<h3>1. 코딩 에이전트</h3>
<p>Claude Code, GitHub Copilot Workspace 등은 코드를 자동으로 작성, 수정, 테스트합니다.</p>
<h3>2. 리서치 에이전트</h3>
<p>Perplexity Pro, Deep Research 등은 복잡한 조사 작업을 자동으로 수행합니다.</p>
<h3>3. 업무 에이전트</h3>
<p>Microsoft Copilot Agents는 Microsoft 365 내에서 업무 자동화를 수행합니다.</p>
<h3>4. 발전소 활용</h3>
<p>설비 상태 모니터링, 예측 정비 알림, 안전 체크리스트 자동화 등에 활용 가능합니다.</p>`,estimatedMinutes:12,sortOrder:4,quizzes:[{question:"다음 중 코딩 에이전트가 아닌 것은?",options:["Claude Code","GitHub Copilot","Microsoft Word","Cursor"],correctIndex:2,explanation:"Microsoft Word는 문서 편집기이며, 코딩 에이전트가 아닙니다."}]},{id:"doc-ai",categoryId:"business",title:"문서 작성 AI 활용",titleEn:"Document AI",content:"<h2>AI를 활용한 문서 작성</h2><p>보고서, 기획서, 매뉴얼 등 다양한 업무 문서를 AI로 효율적으로 작성할 수 있습니다.</p><h3>활용 팁</h3><ul><li>초안은 AI가, 검토와 수정은 사람이</li><li>구체적인 형식과 톤을 지정</li><li>기존 자료를 참고 문서로 제공</li></ul>",estimatedMinutes:10,sortOrder:1,quizzes:[{question:"AI 문서 작성의 올바른 접근 방식은?",options:["AI가 최종본 생성","AI 초안 + 사람 검토","AI 없이 수기 작성","AI에게 전부 위임"],correctIndex:1,explanation:"AI는 초안 생성에 활용하고, 최종 검토와 수정은 사람이 하는 것이 바람직합니다."}]},{id:"data-ai",categoryId:"business",title:"데이터 분석 AI 활용",titleEn:"Data Analysis AI",content:"<h2>AI를 활용한 데이터 분석</h2><p>Excel 데이터, CSV 파일 등을 AI에게 업로드하면 패턴 분석, 시각화, 인사이트 도출이 가능합니다.</p><h3>활용 도구</h3><ul><li>ChatGPT Advanced Data Analysis</li><li>Claude의 데이터 분석 기능</li><li>Google Sheets + Gemini</li></ul>",estimatedMinutes:12,sortOrder:2,quizzes:[{question:"AI 데이터 분석에 적합하지 않은 작업은?",options:["패턴 분석","시각화","기밀 데이터 외부 전송","인사이트 도출"],correctIndex:2,explanation:"기밀 데이터를 외부 AI 서비스에 전송하는 것은 보안 위험이 있어 적합하지 않습니다."}]},{id:"ppt-ai",categoryId:"business",title:"PPT 제작 AI 활용",titleEn:"PPT AI",content:"<h2>AI를 활용한 프레젠테이션 제작</h2><p>AI를 사용하여 프레젠테이션 구조 설계, 슬라이드 내용 작성, 디자인 제안을 받을 수 있습니다.</p><h3>활용 도구</h3><ul><li>Microsoft Copilot for PowerPoint</li><li>Gamma.app: AI 프레젠테이션 생성</li><li>ChatGPT + VBA 매크로</li></ul>",estimatedMinutes:10,sortOrder:3,quizzes:[{question:"AI 프레젠테이션 도구가 아닌 것은?",options:["Gamma.app","PowerPoint Copilot","AutoCAD","ChatGPT"],correctIndex:2,explanation:"AutoCAD는 설계 소프트웨어로, 프레젠테이션 도구가 아닙니다."}]},{id:"email-ai",categoryId:"business",title:"이메일 작성 AI 활용",titleEn:"Email AI",content:"<h2>AI를 활용한 이메일 작성</h2><p>비즈니스 이메일을 AI의 도움으로 빠르고 전문적으로 작성할 수 있습니다.</p><h3>팁</h3><ul><li>수신자, 목적, 톤을 명확히 지정</li><li>핵심 내용을 불릿 포인트로 제공</li><li>최종 검토 후 발송</li></ul>",estimatedMinutes:8,sortOrder:4,quizzes:[{question:"AI 이메일 작성 시 가장 중요한 것은?",options:["빠른 속도","수신자와 목적 명확화","긴 내용","이모지 사용"],correctIndex:1,explanation:"수신자와 목적을 명확히 지정해야 적절한 톤과 내용의 이메일이 생성됩니다."}]},{id:"meeting-ai",categoryId:"business",title:"회의록 AI 정리",titleEn:"Meeting Minutes AI",content:"<h2>AI를 활용한 회의록 정리</h2><p>회의 내용을 AI에게 전달하면 체계적인 회의록으로 정리해줍니다.</p><h3>활용 방법</h3><ul><li>음성 녹음을 텍스트로 변환 (STT)</li><li>AI에게 회의록 형식으로 정리 요청</li><li>참석자, 주요 논의, 결정사항, Action Items 자동 추출</li></ul>",estimatedMinutes:10,sortOrder:5,quizzes:[{question:"AI 회의록 정리에 필요한 첫 단계는?",options:["PPT 제작","음성을 텍스트로 변환","이메일 발송","차트 생성"],correctIndex:1,explanation:"음성 녹음을 텍스트로 변환(STT)하는 것이 AI 회의록 정리의 첫 단계입니다."}]},{id:"power-plant",categoryId:"business",title:"발전소 AI 활용 사례",titleEn:"Power Plant AI Cases",content:"<h2>발전소에서의 AI 활용</h2><h3>1. 예측 정비 (Predictive Maintenance)</h3><p>설비 데이터를 분석하여 고장을 사전에 예측하고 정비 시점을 최적화합니다.</p><h3>2. 발전량 최적화</h3><p>기상 데이터, 수요 예측 등을 분석하여 발전량을 최적화합니다.</p><h3>3. 안전 관리</h3><p>CCTV 영상 분석, 작업자 안전장비 착용 감지, 위험 구역 모니터링 등에 활용됩니다.</p>",estimatedMinutes:12,sortOrder:6,quizzes:[{question:"발전소 AI 활용 사례가 아닌 것은?",options:["예측 정비","발전량 최적화","SNS 마케팅","안전 관리"],correctIndex:2,explanation:"SNS 마케팅은 발전소의 핵심 업무가 아닌 일반 마케팅 활동입니다."}]},{id:"responsible-ai",categoryId:"ethics",title:"책임있는 AI 사용",titleEn:"Responsible AI",content:"<h2>책임있는 AI 사용</h2><p>AI를 사용할 때는 윤리적 원칙을 준수하고, AI의 한계를 인식하며, 결과에 대한 책임을 져야 합니다.</p><h3>핵심 원칙</h3><ul><li>AI 결과물의 사실 확인 (Fact-checking)</li><li>편향성(Bias) 인지</li><li>투명성 확보 — AI 활용 사실 공개</li><li>인간의 최종 판단 유지</li></ul>",estimatedMinutes:10,sortOrder:1,quizzes:[{question:"책임있는 AI 사용의 핵심 원칙이 아닌 것은?",options:["사실 확인","편향성 인지","AI에 모든 결정 위임","투명성 확보"],correctIndex:2,explanation:"AI에 모든 결정을 위임하는 것이 아니라, 인간의 최종 판단을 유지해야 합니다."}]},{id:"privacy",categoryId:"ethics",title:"AI와 프라이버시",titleEn:"AI & Privacy",content:"<h2>AI 사용 시 프라이버시 주의사항</h2><ul><li>개인정보를 AI에 입력하지 않기</li><li>사내 기밀 문서 외부 AI 서비스에 업로드 금지</li><li>AI 서비스의 데이터 처리 정책 확인</li><li>엔터프라이즈 버전 또는 API 사용 권장</li></ul>",estimatedMinutes:10,sortOrder:2,quizzes:[{question:"AI 사용 시 프라이버시 보호를 위한 행동은?",options:["개인정보를 자유롭게 입력","사내 기밀 문서 업로드","데이터 처리 정책 확인","모든 대화 내용 공유"],correctIndex:2,explanation:"AI 서비스의 데이터 처리 정책을 확인하는 것이 프라이버시 보호의 기본입니다."}]},{id:"hallucination",categoryId:"ethics",title:"할루시네이션 대응",titleEn:"Handling Hallucination",content:'<h2>AI 할루시네이션이란?</h2><p>AI가 사실이 아닌 정보를 마치 사실인 것처럼 자신감 있게 생성하는 현상입니다.</p><h3>대응 방법</h3><ul><li>AI 결과물 반드시 검증</li><li>출처 확인 요청</li><li>중요 정보는 복수의 소스로 확인</li><li>"모르면 모른다고 답하세요" 지시</li></ul>',estimatedMinutes:10,sortOrder:3,quizzes:[{question:"할루시네이션 대응으로 적절하지 않은 것은?",options:["AI 결과물 검증","출처 확인","AI 답변 무조건 신뢰","복수 소스 확인"],correctIndex:2,explanation:"AI 답변을 무조건 신뢰하는 것은 할루시네이션에 대한 적절한 대응이 아닙니다."}]},{id:"copyright",categoryId:"ethics",title:"AI와 저작권",titleEn:"AI & Copyright",content:"<h2>AI 생성물의 저작권</h2><p>AI가 생성한 콘텐츠의 저작권은 아직 법적으로 명확하게 정립되지 않은 영역입니다.</p><h3>주의사항</h3><ul><li>AI 생성 이미지의 상업적 사용 시 라이선스 확인</li><li>AI로 작성한 보고서의 원작자 표시 고려</li><li>타인의 저작물을 AI에 무단 학습시키지 않기</li></ul>",estimatedMinutes:10,sortOrder:4,quizzes:[{question:"AI 생성물의 저작권에 대한 올바른 설명은?",options:["모든 AI 생성물은 저작권 없음","법적으로 명확히 정립됨","아직 법적으로 논의 중","AI가 저작권자"],correctIndex:2,explanation:"AI 생성물의 저작권은 아직 법적으로 명확하게 정립되지 않은 논의 중인 영역입니다."}]},{id:"security-guide",categoryId:"ethics",title:"AI 보안 가이드",titleEn:"AI Security Guide",content:"<h2>AI 사용 보안 가이드</h2><h3>사내 AI 보안 수칙</h3><ul><li>사내 기밀 정보를 공개 AI에 입력 금지</li><li>AI 생성 코드의 보안 취약점 검토</li><li>AI 도구의 접근 권한 최소화</li><li>프롬프트 인젝션 공격 인지</li><li>AI 서비스 선택 시 보안 인증 확인 (SOC2, ISO27001)</li></ul>",estimatedMinutes:12,sortOrder:5,quizzes:[{question:"AI 보안 수칙으로 올바른 것은?",options:["기밀 정보 자유롭게 입력","접근 권한 최대화","보안 인증 확인","보안 검토 생략"],correctIndex:2,explanation:"AI 서비스 선택 시 SOC2, ISO27001 등의 보안 인증을 확인하는 것이 올바른 보안 수칙입니다."}]},{id:"fine-tuning",categoryId:"advanced",title:"Fine-tuning 이해",titleEn:"Fine-tuning",content:"<h2>Fine-tuning이란?</h2><p>Fine-tuning은 기존의 사전 학습된 AI 모델을 특정 도메인이나 작업에 맞게 추가 학습시키는 과정입니다.</p><h3>Fine-tuning이 필요한 경우</h3><ul><li>특정 업종 용어나 지식이 필요할 때</li><li>일관된 출력 형식이 필요할 때</li><li>프롬프트만으로는 원하는 성능을 못 얻을 때</li></ul>",estimatedMinutes:15,sortOrder:1,quizzes:[{question:"Fine-tuning의 목적은?",options:["AI 모델 크기 줄이기","특정 도메인에 맞게 추가 학습","AI 삭제","하드웨어 교체"],correctIndex:1,explanation:"Fine-tuning은 사전 학습된 모델을 특정 도메인이나 작업에 맞게 추가 학습시키는 과정입니다."}]},{id:"rag",categoryId:"advanced",title:"RAG(검색 증강 생성)",titleEn:"RAG",content:"<h2>RAG란?</h2><p>RAG(Retrieval-Augmented Generation)는 외부 문서/데이터를 검색하여 AI의 답변에 활용하는 기법입니다.</p><h3>RAG의 장점</h3><ul><li>최신 정보 반영 가능</li><li>할루시네이션 감소</li><li>출처 추적 가능</li><li>사내 문서 기반 AI 구축</li></ul>",estimatedMinutes:15,sortOrder:2,quizzes:[{question:"RAG의 가장 큰 장점은?",options:["AI 속도 향상","할루시네이션 감소와 출처 추적","AI 비용 절감","오프라인 사용"],correctIndex:1,explanation:"RAG는 외부 문서를 참조하여 할루시네이션을 줄이고, 답변의 출처를 추적할 수 있습니다."}]},{id:"api-usage",categoryId:"advanced",title:"AI API 활용",titleEn:"AI API Usage",content:"<h2>AI API란?</h2><p>AI API는 프로그래밍 방식으로 AI 모델을 호출할 수 있는 인터페이스입니다.</p><h3>주요 AI API</h3><ul><li>OpenAI API (GPT-4, DALL-E 등)</li><li>Anthropic API (Claude)</li><li>Google AI API (Gemini)</li></ul><h3>API 활용 장점</h3><ul><li>자사 시스템에 AI 통합 가능</li><li>대량 처리 자동화</li><li>커스텀 애플리케이션 개발</li></ul>",estimatedMinutes:15,sortOrder:3,quizzes:[{question:"AI API를 사용하는 가장 큰 장점은?",options:["무료 사용","자사 시스템에 AI 통합","AI 학습 불필요","인터넷 불필요"],correctIndex:1,explanation:"AI API를 사용하면 자사 시스템에 AI를 직접 통합하여 커스텀 솔루션을 구축할 수 있습니다."}]},{id:"multimodal",categoryId:"advanced",title:"멀티모달 AI",titleEn:"Multimodal AI",content:"<h2>멀티모달 AI란?</h2><p>멀티모달 AI는 텍스트, 이미지, 오디오, 비디오 등 여러 형태의 데이터를 동시에 이해하고 처리할 수 있는 AI입니다.</p><h3>활용 사례</h3><ul><li>이미지를 보고 설명하기</li><li>도면/다이어그램 분석</li><li>음성을 텍스트로 변환 후 분석</li><li>영상 내용 요약</li></ul>",estimatedMinutes:12,sortOrder:4,quizzes:[{question:"멀티모달 AI의 특징은?",options:["텍스트만 처리","여러 형태의 데이터 동시 처리","오프라인 전용","한 가지 언어만 지원"],correctIndex:1,explanation:"멀티모달 AI는 텍스트, 이미지, 오디오 등 여러 형태의 데이터를 동시에 처리할 수 있습니다."}]}];export{t as L};

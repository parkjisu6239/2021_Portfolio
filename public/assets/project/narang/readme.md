> 기간 : 2021.07.12 ~ 2021.08.23
>
> 인원 : 강예서, 김담영, 김준환, 박지수, 신동윤 (5인)
>
> 역할 : FE, PM, 일정관리, PPT, UCC



## 1. 프로젝트 소개

| 프로젝트 명        | 나랑(Narang)                                          |
| ------------------ | ----------------------------------------------------- |
| 프로젝트 한줄 소개 | 온택트에 익숙해진 현대인을 위한 `웹 화상 게임` 서비스 |
| 로고               |                                                       |



### 1-1. 기획 배경

우리는 프로젝트나 단체 활동에서 모르는 사람들과 팀을 꾸려 일을 시작할 때 어색함을 느끼곤 합니다. `나랑`은 이러한 어색함이 제대로 해소되지 않고, 프로젝트를 진행했을 때 생기는 문제에 집중했습니다.

이 `어색함`은 서로에게 실례가 될까봐 의견을 제시하지 못하거나, 원하지 않는 의견에 어쩔수 없게 동의하여 프로젝트의 진행 과정과 성과에 불이익을 초래합니다.

반면 적절한 `아이스브레이킹`으로 팀원들간에 친밀감이 있는 상태에서 프로젝트가 진행되면 *1)일의 성과가 더 높고, *2)의사결정에 긍정적인 결과가 있다고 합니다.



### 1-2. 목적, 목표

**처음 팀을 이룬 사람들이 효과적으로 아이스브레이킹을 하게 하자**



### 1-3. 의의

- 비대면 상황에서 직접 만나지 않고도 즐길 수 있는 온라인 웹 화상 게임
- 간단한 게임으로 서로를 더 잘 알아가고, 아이스브레이킹의 효과



### 1-4. 타겟

- 새학기를 맞이한 학생들
- 팀프로젝트, 단체생활을 시작하게 된 사람들
- COVID-19로 인해서 함께 일할 수 없게 된 사람들





## 2. 아키텍쳐

### 2-1. 설계



### 2-2. DB



### 2-3. 배포



### 2-4. 사용된 기술

#### WebRTC

- WebRTC (Web Real-Time Communication)는 웹 브라우저 간에 플러그인의 도움 없이 서로 통신할 수 있도록 설계된 API입니다.
- WebRTC를 보다 간단하게 적용할 수 있고, 다양한 프레임워크와 호환성이 높은 openvidu를 사용하여 프로젝트를 진행했습니다. 사용 방법은 openvidu tutorail 또는, 프로젝트의 front 폴더 하위의 gameroom 등에서 확인 할 수 있습니다.
- `나랑` 에서는 화상 통화를 가능케 하기 위해 openvidu를 사용합니다. 게임방, 마피아, 그리고 콜마이네임 컴포넌트에서 openvidu를 사용하여 사용자간의 비디오 스트림을 지원하여 실시간 영상 통화가 가능합니다.



#### Web Socket

- 웹소켓(WebSocket)은 하나의 TCP 접속에 전이중 통신 채널을 제공하는 컴퓨터 통신 프로토콜입니다. 
- 일반적인 `Ajax` 통신과 다르게, 특정 `end point`를 구독하면 종단지점과 연결된 모든 통신을 수신할 수 있으며, 실시간 소통이 가능합니다. 그래서 실시간 채팅등에 많이 활용되고 있습니다. 
- 나랑에서는 여러 브라우저를 고려하기 위해, `SockJS ` 로 통신에 필요한 `end point` 로 `socket` 객체를 를 생성합니다.
- `Stomp.js` 로 생성된 `socket` 객체로부터 `stompClient`를 생성하고, 연결 및 구독, 전송합니다. 프론트에서 소켓을 통해 전송된 내용은 백엔드에서 동일한 endpoint로 일괄적으로 수신되며, 백엔드에서 이를 다시 프론트로 전달합니다. 
- `나랑` 에서는 채팅과 게임의 실시간 상태 공유 및 진행에 web socket을 사용합니다. 서로 다른 여러개의 `endpoint`를 구독하고, 각각의 역할에 맞는 로직을 두어 게임을 진행합니다. 자세한 코드는 `back` 폴더 내에 `websocket`의 하위 폴더를 확인 할 수 있습니다.
  - `model`에서 주고받는 데이터의 구조를 설정합니다.
  - `controller` 는 각 `endpoint` 와 그에 해당하는 method를 정의합니다.
  - `request` 에서는 프론트로 부터 수신한 메시지의 형을 변환하거나, 필요한 필드를 추가합니다.
  - `response` 에서는 리턴해야할 message에 맞게 특정 로직을 처리합니다. 채팅인 경우에는 그대로 반환하고, 투표의 경우 집계 후 반환합니다.



#### Teachable Machine

- Teachable Machine은 누구나 머신러닝 모델을 쉽고 빠르고 간단하게 만들 수 있도록 제작된 웹 기반 API입니다.
- `나랑` 에서는 `Teachable Machine` 을 사용하여 `마피아 히든 미션`에 사용합니다. 자세한 내용은 하단의 `Nafia`에서 설명합니다.



#### face API

- js 기반 얼굴인식 API로, `나랑` 에서는 `face api`의 다양한 기능 중  `land mark` 와 `emotion detection` 을 사용합니다. 자세한 내용은 하단의 게임 컨텐스에서 소개합니다.



#### Web Speech API

- **웹 음성 API는** 사용자가 웹 애플리케이션에 음성 데이터를 통합 할 수 있습니다. Web Speech API는 `SpeechSynthesis`(텍스트 음성 변환) 및 `SpeechRecognition`(비동기 음성 인식 )의 두 부분으로 구성 됩니다.
- Web Speech API는 크롬 브라우저에서 사용 가능한 api로 별도의 import 없이 몇 줄의 코드만으로 간단하게 사용할 수 있는 좋은 API입니다. 사용해볼 것을 강력히 추천합니다. 높은 인식률과 빠른 반응성을 보이는 좋은 API입니다. 다만 이어폰 등 마이크가 없으면 사용이 불가능합니다. 이 역시 게임 내 활용은 아래에서 기술합니다.
- 나랑에서는 콜마이네임에서 정답을 맞추기 위해 `정답` 이라는 예약어를 사용합니다.





## 3. UX/UI

### 3-1. 와이어프레임

### 3-2. 디자인





## 4. 주요 기능

### 4-1. Nafia(나피아)

#### 게임 기본 설명

- 게임에 입장하면 마피아와, 시민 두가지 역할 중 하나를 부여 받습니다.
- 마피아는 시민으로 위장하여, 시민을 제거합니다.
  - 마피아는 밤에 시민을 암살 할 수 있습니다. 단, 마피아가 낮동안 히든 미션을 성공해야만 가능합니다.
  - 히든 미션은 낮동안 모든 마피아에게 부여되며, 시민 몰래 주어진 특정 동작을 정확하게 수행해야 합니다.
  - 히든 미션 수행 중 시민에게 들키지 않으면서, 미션을 성공해야 합니다.
- 시민은 마피아를 찾아내고, 투표를 통해 마피아를 검거합니다.
  - 시민은 직업이 없으며, 토론을 통해 수상해보이는 사람을 찾아냅니다.
  - 시민의 추리를 돕기 위해, `나랑`에서는 거짓말 탐지 아이템을 제공합니다.
  - 우측 위의 거짓말 탐지 아이템을 클릭하고, 원하는 사람의 화면을 클릭하면 잠시 후 `거짓` 또는 `진실` 을 확인 할 수 있습니다.
- 나피아는 게임이 종료될 때 까지 아침부터 밤까지가 한 사이클로 반복됩니다.
- 게임 진행
  - 낮동안에는 모든 생존자가 자유롭게 토론하며, 누가 마피아일지 추측합니다.
  - 낮 1차 투표에서는 모든 생존자가 마피아로 의심되는 사람을 투표합니다.
  - 만약, 1차 투표에서 최다 득표자가 결정된 경우 2차 투표를 진행하고, 그렇지 않은 경우 밤이 됩니다.
  - 2차 투표는, 선택된 사람을 죽일지 살릴지 결정합니다. 투표가 완료되면 선택된 투표자가 죽거나, 살고 밤이 됩니다.
  - 밤이 되면 시민은 아무것도 볼 수 없습니다. 이때가 마피아가 활동하는 시간입니다. 히든 미션을 성공했다면, 이때 마피아는 제거할 사람을 한명 선택할 수 있습니다. 밤이 끝나면 다시 아침이 되어 사이클이 반복됩니다.
- 게임의 종료조건
  - `마피아 수 >= 시민 수` 되면 마피아가 승리합니다.
  - `마피아 수 = 0` 이 되면 시민이 승리합니다.



#### 특별 기능 1. 마피아 히든 미션

마피아 히든 미션은 마피아에게만 주어지는 미션입니다. 마피아는 낮동안 자신에게 주어진 미션을 수행해야합니다. 만약 미션을 수행하지 못할 경우 밤이 되었을 때 시민을 제거 할 수 없습니다. 

히든 미션에 대한 동작 인식은 앞서 말했던 `teachable API`를 사용합니다. 아래 이미지를 통해 동작을 학습시키고, 인식하는 과정을 볼 수 있습니다. 관련 코드는 `front`의 `mafia.vue`에서 확인 할 수 있습니다. 미리 만들어 둔 모델을 가져온 후, 이를 원하는 비디오와 연결하여 사용합니다. 동작이 일치할 경우 일치된 시간동안을 카운트하고 카운트가 일정 횟수 이상이 될 경우 미션 완료라고 판단합니다.

🎮 이를 통해 마피아 게임 수행 중 마피아에게 패널티를 부여하고, 시민이 마피아를 찾아내는 데 결정적인 힌트를 주게 됩니다. 따라서 마피아 역할을 받은 사람에게는 게임의 난이도를 적절히 조정할 수 있으며, 게임을 재미를 더할 수 있습니다.



#### 특별 기능 2. 거짓말 탐지 아이템

거짓말 탐지 아이템은 모든 플레이어가 사용할 수 있는 아이템입니다. 해당 아이템 사용 버튼을 클릭하고, 활성화된 상태에서 원하는 사람의 비디오를 클릭하면 5초간 표정의 변화를 감지하여 선택된 플레이어의 거짓말 사용 여부를 반환합니다. 동작은 아래 화면을 통해 확인할 수 있습니다.

`나랑` 은 거짓말 탐지를 위해 위에서 설명한 `face api`를 사용했습니다. face api에서는 비디오 내에서 얼굴을 인식하고, 얼굴에서의 표정변화를 감지하여 반환하는데, 이때 표정이 너무 자주 바뀌면 거짓말로 판별하게 했습니다. 콘솔에서 볼 수 있듯이 일반, 행복, 슬픔, 화남 등등의 표정을 분류할 수 있습니다.

관련 코드는 `front`의 mafia 하위의 `OvVideo.vue`에서 확인 할 수 있습니다. 비디오와 faceAPI의 모델을 가져와 객체를 생성하고, 이를 특정 시간동안 활성화하여 인식을 진행합니다.

🎮 이를 통해 마피아 게임 수행 중 시민이 마피아를 찾아내는 데에 도움을 주어 게임의 재미 요소를 추가합니다. 거짓말이라고 100% 신뢰할 수는 없겠지만, 참고자료로서 사용이 가능합니다.



### 4-2. Call my name(나를 맞춰봐)

#### 게임 기본 설명

- 게임은 최후의 승자가 정해질 때까지 토너먼트 형식으로 진행됩니다.
- 1라운드 당 2명의 플레이어가 게임을 진행하고, 나머지 플레이어는 관전자가 됩니다.
- 라운드가 시작되면, 플레이어의 제시어를 정합니다.
  - 제시어는 자기 자신을 제외한 나머지 플레이어가 결정합니다.
  - 플레이어들은 제시어를 등록하고, 등록된 제시어를 투표합니다. 득표수가 가장 많은 제시어가 해당 플레이어의 제시어로 결정됩니다.
- 게임을 진행할 두 플레이어의 제시어가 모두 결정되면 게임이 시작됩니다.
- 제시어는 플레이어의 이마 위에 나타납니다. 단, 자기자신의 제시어는 물음표(?)로 대체되어 보여집니다.
- 게임이 진행되는 동안 서로에게 제시어를 맞출 수 있는 질문을 하고, 대답을 합니다.
- 이 대답들을 종합하여, 정답을 추측하고 정답을 맞춥니다.
- 정답을 맞출 때에는 `정답` 이라고 외칩니다. 그러면 화면에 정답 인식 창이 나타나고, 이때 예상되는 정답을 말하면 음성인식으로 정답을 확인합니다.
- 둘 중에 한 플레이어가 정답을 맞추면 다음 라운드로 넘어갑니다.



#### 특별 기능 1. 이마 위 제시어

이는 `face api` 에서 얼굴의 눈코입 등 정보를 반환하는 `randmark` 기능으로 구현했습니다. 사용자의 비디오를 1초 단위로 인식하고 이때마다 눈의 위치를 반환 받습니다. 이때 반환받은 눈 위치에 제시어의 길이 등을 고려하고, 60px 정도 떨어진 곳에 제시어를 두어 이마 위에 제시어를 붙였습니다. 자세한 위치 조정은 `callmy` 폴더 내의 `OvVideo.vue`에서 확인 할 수 있습니다.

🎮 이를 통해 콜마이네임 게임 진행을 가능하게 하며, 자신의 제시어는 알 수 없게끔 `???`로 대체하고 다른 플레이어의 제시어만 볼 수 있게 했습니다.



#### 특별 기능 2. 음성 인식 정답 체크 & STT

콜마이 네임 두 번째 특별 기능입니다. 정답 체크를 음성인식으로 하여 게임의 편의성과 재미를 올렸습니다. 또한 예능에서 자막이 나오는 것처럼 내가 말한 정답이 모두에게 화면 아래쪽 자막처럼 생성되어 생동감을 높입니다.

이 기능을 위해 Web Speech API를 사용하였고, 특정 예약어(`정답`) 를 설정하여 그 이후에 나오는 단어로 정답을 체크하게 했습니다. 아래 영상을 통해 확인 할 수 있습니다. 자세한 내용은 `call mt name`폴더 안의 `callmy-stt.vue`에서 확인할 수 있습니다.

🎮 이를 통해 TV에서 봤던 게임을 실제로 진행 할 수 있고, 음성인식으로 정답을 체크하여 재미와 편의성을 높입니다. 모두에게 공유되는 자막이 생성되어 관전자들은 마치 TV를 보는 시청자처럼 즐길 수 있습니다.





## 5. 커뮤니케이션

프로젝트 진행 기간동안 전면 비대면으로, 온라인으로 진행되었기에 특히나 진행 방식과 소통 방법이 중요했습니다. 그래서 우리는 `Agile` 방법으로 프로젝트를 진행했고, Jira를 사용한 스프린트 관리, Docs를 활용하여 커뮤니케이션 리소스를 줄였습니다.



### 5-1. 깃플로우

git flow 사용을 위해 `우아한 형제들`의 [git flow 사용](https://techblog.woowahan.com/2553/)을 참고했습니다. 각자 맡은 기능에 맞게 `feature` 브랜치를 생성하고, 완료된 기능은 `develop`에 merge하여 사용했습니다. 충돌 상황을 최소화하고자 매일 오전 스크럼에 `develop` 최신 버전을 `pull`받고 시작할 것을 강조했습니다.

또한 `commit message` 는 `[FE|jisu] mafia | 거짓말 탐지기 5초 제한, 게임당 1회 사용 제한 추가` 와 같이 통일하여 작성했습니다.



### 5-2. PR 및 코드리뷰



### 5-3. JIRA

매주 금요일 오후 회의에서 차주에 진행되어야 할 이슈를 백로그에 등록했습니다. 금주에 완료하지 못한 이슈나, 앞으로 진행할 이슈들을 추가합니다.

- 에픽은 가장 큰 단위인 기획, 유저관리, 마피아, 콜마이네임 등으로 구성하였습니다.
- 스토리는 실제 유저 플로우를 고려하여 `홈페이지에서 로그인 창을 통해 로그인 한다` 와 같이 작성하였으며,
- 이슈는 스토리를 완료하기 위한 작은 업무 단위로 생성했습니다. 예를 들어 `로그인 폼 생성`, `로그인 클릭 시 action 정의` `requestLogin 함수 정의` `Login token 발급` 등으로 구성했습니다.
- 에픽링크 태그를 사용하여 이슈를 구별하기 쉽게 했습니다.
- 무엇보다 담당자와 스토리 포인트 설정, 현재 작업중인 내용 지라에 실시간으로 반영하는 것을 가장 중요하게 생각했습니다.





## 6. 회고

### 6-1. 어려웠 던 것

### 6-2. 해결한 것

### 6-3. 해결하지 못한 것

### 6-4. 느낀점


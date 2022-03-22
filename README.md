# Movie Web service - beginner

<br>

## 소개
추천 영화 리스트를 보여주고, 포스터 또는 제목을 클릭 시 디테일 페이지로 넘어가<br />해당 영화에 대한 세부 정보를 보여줍니다.

<br>

## 구현 기능
  - 영화 데이터들을 가져오는 동안 빈 화면 대신 Loading화면을 보여준다.
  - 데이터를 모두 가져오면 추천 영화 리스트를 index화면에 출력
  - 영화를 선택하면 해당 영화에 대한 디테일을 화면에 보여준다.

<br>

## 사용 기능 설명 
  - `Async, Await`를 사용해 영화 정보가 들어간 API를 가져왔습니다.
  - `PropTypes`로 입력될 타입을 설정해 잘못 입력했을시 생길 오류를 예방했습니다.
  - 컴포넌트화 시킨 영화 정보들을 `map함수`를 이용해 모두 화면에 출력 해주었습니다.
  - `Router와 Route` 컴포넌트를 이용해 페이지 전체가 새로고침 되지 않고,<br />
  해당 페이지를 렌더링 하도록 했습니다. 
  - `Link to`를 이용해 타이틀 또는 포스터를 클릭 시 Detail 컴포넌트를<br />
  그리고 Detail 페이지에서는 Home을 클릭시 다시 Home 페이지를 렌더링하도록 했습니다.
  - `styled-component`를 사용해 css 초기화를 하였습니다.

<br>

## 문제 사항
  - [ ] 타이틀을 hover했을 때 텍스트 색상이 바껴야하지만 일부 타이틀은 css가 제대로 적용되지 않는다.
  - [ ] Home 페이지에서는 genres를 map함수로 li테그에 담아서 출력을 했는데, Detail 페이지에서는 오류가 난다.

<br>

## 개발 환경
  - 개발도구: VSCode, Github
  - 사용언어: ReactJS

<br>

## 최종 결과물
Index page
<img width="640" alt="최종 결과물-home" src="https://user-images.githubusercontent.com/93115007/159482921-e54faf9b-5cf1-47df-b6a5-923e31e15dbb.png">

Detail page
<img width="640" alt="최종 결과물-detail" src="https://user-images.githubusercontent.com/93115007/159484166-3f2f2a71-c850-4c37-8a64-7aeb58190489.png">

<br>

## Reference
  [노마드코더] : ReactJS로 영화 웹 서비스 만들기
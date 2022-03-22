# Movie Web service - beginner

<br>

## 소개
리액트를 이용하여 API를 가져와 컴포넌트를 만들어 영화 리스트를 보여주고,<br />
React Router를 이용하여 페이지 전환을하여 영화를 클릭 했을 때,<br />
각 영화의 고유 id값을 받아서 해당 영화의 디테일 정보를 보여주게 하는 사이트를 제작하였습니다.

<br>

## 구현 기능
  - 영화 데이터들을 가져오는 동안 빈 화면 대신 Loading화면을 보여준다.
  - 데이터를 모두 가져오면 추천 영화 리스트를 index화면에 출력
  - 영화를 선택하면 해당 영화에 대한 디테일을 화면에 보여준다.

<br>

## 사용 기능 설명 
  - Async, Await를 사용해 영화 정보가 들어간 API를 가져왔습니다.
  - PropTypes로 입력될 타입을 설정해 잘못 입력했을시 생길 오류를 예방했습니다.
  - 컴포넌트화 시킨 영화 정보들을 map함수를 이용해 모두 화면에 출력 해주었습니다.
  - Router와 Route 컴포넌트를 이용해 페이지 전체가 새로고침 되지 않고,<br />
  해당 페이지를 렌더링 하도록 했습니다. 
  - Link to를 이용해 타이틀 또는 포스터를 클릭 시 Detail 컴포넌트를<br />
  그리고 Detail 페이지에서는 Home을 클릭시 다시 Home 페이지를 렌더링하도록 했습니다.
  - Home > Movie 컴포넌트 : props를 엘리먼트에 넣어서 추후 렌더됩니다.

<br>

## 문제 사항
  
<br>

## 개발 환경
  - 개발도구: VSCode, Github
  - 사용언어: ReactJS

<br>

## 최종 결과물
- Index page
<img width="640" alt="최종 결과물-home" src="https://user-images.githubusercontent.com/93115007/159482921-e54faf9b-5cf1-47df-b6a5-923e31e15dbb.png">

- Detail page
<img width="640" alt="최종 결과물-detail" src="https://user-images.githubusercontent.com/93115007/159484166-3f2f2a71-c850-4c37-8a64-7aeb58190489.png">

<br>

## Reference
  [노마드코더] : ReactJS로 영화 웹 서비스 만들기
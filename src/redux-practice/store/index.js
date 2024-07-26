import {createStore} from "redux";

// 관리할 초기 상태값 객체
const initialCountState = {
  counter: 10,
};

// reducer: 상태 변경을 위한 순수 함수 - 부수 효과(비동기코드...)가 없는 함수
// 카운터 상태 관리를 위한 리듀서 정의
/*
  param1 state : 상태 변경 이전의 상태
  param2 action : 상태를 어떻게 변경할지에 대한 명세
  return - 변경 후 새로운 상태값
 */
const counterReducer = (state = initialCountState, action) => {
  // switch () {
  //   case
  // }

  console.log('prev state : ', initialCountState);
  console.log('action: ', action);

  return state;
};

// 단하나의 리덕스 스토어
// 요즘엔 configure store를 쓰는데 먼저 이해하기 위해 createStore 학습
// 스토어에는 여러 리듀서를 제공할 수 있다.
const store = createStore(counterReducer);

// 리액트의 index.js에게 store를 제공
export default store;
// data의 state를 저장하여 관리하기 위해서
import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

// reducer만 data를 바꿀 수 있다. (reducer의 return이 state가 된댜.)
// state = 0 을 줌으로써 default 값을 설정할 수 있다.
// action은 function을 받는 파라미터
const modifyCount = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};

// createStore은 함수(reducer)를 변수로 받는다.
const countStore = createStore(modifyCount);

// dispatch를 통해서 action을 보낼 수 있다.
// dispatch는 object 형식을 줘야 한다. ({key : value})
add.addEventListener("click", () => {
  countStore.dispatch({ type: ADD });
});
minus.addEventListener("click", () => {
  countStore.dispatch({ type: MINUS });
});

// subscribe를 통해서 store가 변화된 것을 반영할 수 있다.
countStore.subscribe(() => {
  number.innerText = countStore.getState();
});

// countStore에 저장된 data를 보기 위해서는 getState()  이용
console.log(countStore.getState());

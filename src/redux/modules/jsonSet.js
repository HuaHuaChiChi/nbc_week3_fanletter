const SET_DATA = "jsonSet/SET_DATA";

// 액션 생성 함수
export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});

// 초기 상태
const initialState = {
  data: [],
};

// 리듀서
const jsonSet = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload, //...state -> 기존의 코드를 가져옴, data: action.payload -> 액션 생성함수에 들어간 새로 받을 data값으로 바꿔치기
      };
    default:
      return state;
  }
};

export default jsonSet;

// redux에 상태를 업로드 하고싶을 땐 useDispatch
// import { useDispatch } from "react-redux";
// const dispatch = useDispatch();
// 액션을 생성하는 함수도 export 시켜서 사용해야한다.

// 상태를 꺼내서 쓰고 싶을 땐 useSelector
// import { useSelector } from 'react-redux';
//const jsonData = useSelector((state) => state.jsonSet.data);

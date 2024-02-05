const SET_DATA = "jsonSet/SET_DATA";
const ADD_DATA = "jsonSet/ADD_DATA";
const DELATE_DATA = "jsonSet/DELATE_DATA";
const UPDATE_DATA = "jsonSet/UPDATE_DATA";

// 액션 생성 함수
export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});

export const addData = (data) => ({
  type: ADD_DATA,
  payload: data,
});

export const delateData = (data) => ({
  type: DELATE_DATA,
  payload: data,
});

export const updateData = (data) => ({
  type: UPDATE_DATA,
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
    case ADD_DATA:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case DELATE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case UPDATE_DATA:
      return {
        ...state,
        data: action.payload,
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
// const jsonData = useSelector((state) => state.jsonSet.data);

// 하나의 모듈엔 하나의 state만 넣는다고 생각하자


// Redux 실습
// 1. Action Type, Action 저장될 데이터 초기화
// 2. Action을 반환하는 Action 생성함수
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_DIFF = 'SET_DIFF';

// 카운터 값을 올린다.
 export function increment() {  // Action  생성함수
     return {
         type: INCREMENT
     }
 }

// 카운터 값을 내린다
export function decrement() {
    return  {
        type: DECREMENT 
    };
}

// 버튼이 눌릴 때 더하거나 
export function setDiff(value) {
    return {
        type: SET_DIFF,
        diff: value
    };
}
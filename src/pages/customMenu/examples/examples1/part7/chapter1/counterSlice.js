import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counterSlice',
    initialState:{value:0},
    reducers:{       //복수형 이라는것에 주의
      up:(state, action)=>{       //기존 reducer 의 action.type==='up' 의 역할
        console.log("action :",action);
        //state.value = state.value+action.step;    // 기존 redux와 달리 불변성을 위한 기존state 복제를 따로 수행하지 않아도됨.
        state.value = state.value+action.payload;
      }
    } 
  });

  export default counterSlice;
  export const {up} = counterSlice.actions;
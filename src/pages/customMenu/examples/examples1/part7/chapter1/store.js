import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const store = configureStore({
    reducer:{                       //s 가 안붙음
      counter:counterSlice.reducer  //s 가 안붙음 & 위에서 정의한 counterSlice 에서 up 외의 여러개의 reducer 가 추가된다면, 
    },                               //configureStore 로 인해 counterSlice.reduer 하나로묶임. 그 후, 이 묶인 리듀서를 counter 에 대한 리듀서로 설정.
  });

  export default store;
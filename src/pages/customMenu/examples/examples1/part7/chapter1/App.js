import React from "react";
// import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
// import { configureStore, createSlice } from "@reduxjs/toolkit";
import store from "./store.js";
import counterSlice, {up} from "./counterSlice.js";


/*   counterSlice.js 로 따로 관리
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
*/
/*   store.js 로 따로 관리
const store = configureStore({
  reducer:{                       //s 가 안붙음
    counter:counterSlice.reducer  //s 가 안붙음 & 위에서 정의한 counterSlice 에서 up 외의 여러개의 reducer 가 추가된다면, 
  }                               //configureStore 로 인해 counterSlice.reduer 하나로묶임. 그 후, 이 묶인 리듀서를 counter 에 대한 리듀서로 설정.
});
*/
/*  기존 react-redux 로 짯을 때 소스
function reducer(state, action){
  if(action.type ==='up'){
    return {...state, value:state.value + action.step}
  }
  return state;
}

const initialState = {value:0};
const store = createStore(reducer,initialState);
*/


export default function App7_1(){

  return(
    <>
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>

    <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      <hr></hr>
      * 목표 : redux toolkit 을 통해 react-redux 를 좀더 간편하게 사용한다. <br></br><br></br>
      - 기존 redux에서 하나의 store 에서 모든 state 를 관리 했다고 하면, <br></br>
      redux toolkit 에서는 스토어의 작은 단위인 slice 를 지원.
      <br></br>
      - 일반적으로 store 와 slice 는 각각 파일(.js)을 분리하여 관리.
      <br></br><br/>
      * redux toolkit 구성
      <br></br>
      1. createSlice() : store 의 작은단위인 slice 를 생성.
      <br></br><br/>
      사용예시(위 예제의 코드를 발췌)
      <br></br>
      const counterSlice = createSlice(&#123; <br/>
  name:'counterSlice',      <br/>
  initialState:&#123;value:0&#125;, <br/>
  reducers:&#123;       				//복수형 이라는것에 주의  <br/>
    up:(state, action)=&gt;&#123;       //기존 reducer 의 action.type==='up' 의 역할  <br/>
      state.value = state.value+action.step;    // 기존 redux와 달리 불변성을 위한 기존state 복제를 따로 수행하지 않아도됨. <br/>
    &#125;  <br/>
  &#125;  <br/>
&#125;);  <br/><br/>
      2. configureStore() : 여러개의 슬라이스를 모아서 store로 만들때 사용<br/><br/>

    사용예시(위 예제의 코드를 발췌)<br/>
configureStore(&#123; <br/>
  reducer:&#123;        				//s 가 안붙음 <br/>
    counter:counterSlice.reducer // 위에서 정의한 counterSlice 에서 up 외의 여러개의 reducer 가 추가된다면, <br/>
  &#125;								// configureStore 로 인해 counterSlice.reduer 하나로묶임.그 후, 이 묶인 리듀서를 counter 에 대한 리듀서로 설정. <br/>
&#125;) <br/>
    <br></br>  
    
    <br></br>
    * react-redux 로만 작성했을 때와의 차이점
    <br></br>
    - 기존 react-redux 로 작성 했을 때는 reducer에서 state 의 불변성을 유지하기 위해 기존 state 를 복제하여 값을 변경후 return 해야 했지만, redux toolkit 에서는 이를 수행할 필요가 없다.
    <br></br>
    - store 를 slice 라는 작은 단위로 나누고 reducer를 따로 작성함으로써 기능별로 store를 나누는듯한 효과를 발휘한다. (ex 계산기 store = counterStore, 시간 store : timerStore)
   
    <br></br>  
    * 위의 예제는 + 를 클릭하면 state의 값이 2씩 증가하여 버튼옆에 출력하는 형태로,
    <br></br>
    - redux toolkit 을 통해 계산하는 slice(counterSlice) 와 그에 따른 reducer를 생성하여 state 값을 증가시키는 형태로 구성되어있다.


    </div>

    </>
  );

}

function Counter(){
  const dispatch = useDispatch();
  const count = useSelector((state) =>{
    console.log(state);
    return state.counter.value;     //state 는 store 생성시 정의한 리듀서 counter 의 obj 를 가짐.
  });
  return <div>
    <button onClick={()=>{
      //dispatch({type:'up', step:2});
      //dispatch({type:'counterSlice/up', step:2}); dispatch를 통해 호출시, type으로 호출하려는슬라이스/액션타입 으로 값을 주면 실행가능
      //dispatch(counterSlice.actions.up(2)); //redux toolkit 의 액션 크리에이터를 통해 자동으로 생성된 액션. 이때는 액션을 통해 넘겨주는 값은 'payload'에 담긴다.
      dispatch(up(2));
    }}>+</button> {count}
  </div>
}
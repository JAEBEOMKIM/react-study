import React from "react";
import {createStore} from "redux";
import {Provider, useSelector, useDispatch} from 'react-redux';
// import "./style.css";

function reducer(currentState, action){
  if(currentState === undefined){   //아직 state가 정의되지 않았을경우
    return {
      number:1
    }
  }
  const newState = {...currentState};   //state 불변성 유지를 위해 currentState를 복제한 newState 를 생성
  if(action.type==='PLUS'){
    newState.number++;
  }

  return newState;

  /* 이렇게 기존 state 에 등록하고 실행하면 rendering 되지않는다.
  if(action.type==="PLUS"){
    currentState.number++;
  }
  return currentState;
  */
}

const store = createStore(reducer);   //스토어 생성

export default function App6_2(){


  return(
    <>
    <div id="container">
      <h1>redux 사용 O</h1>
      <h1>Root</h1>
      <div id="grid">
      <Provider store={store}>
        <Left1></Left1>
        <Right1></Right1>
      </Provider>
      </div>
    </div>

      <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      <hr></hr>
      * 목표 : Part6 chapter1 의 코드에 react redux를 적용하여 어떻게 달라지는지 확인한다 <br></br><br></br>
      
      - redux 는 state(상태) 관리 도구로써, 스토어를 생성하고, 스토어에 reducer를 주입한다. 기본 구성은 아래와 같다.
      <br></br>
      1. store : state 를 가지고 있으며 단일store만 존재, 리덕스는 스토어의 각 state 를 불변하게 유지 해야함. 이를 위해 reducer 에서 새로운 state를 return 할때, 과거의state(currentState) 를 복제함.
      <br></br>
      + 만약 불변성을 유지하지 않고 currentState에 값을 직접 변경하고 return 할경우, react에서는 이를 재 렌더링 하지 않는다.
      <br></br>
      관련글 : <a href="https://narup.tistory.com/268">바로가기</a>

      <br></br>
      2. reducer: 스토어의 스테이트를 어떻게 바꿀지 결정하는 역할 수행.
      <br></br>
      3. dispatcher : 사용자에게 명령을 받아 리듀서에 전달하는 역할 수행.
      <br></br>
      사용예시(위 예제를 발췌)
      <br></br>
      <br></br>
      - reducer 작성 및 store 생성  <br/>
      function reducer(currentState, action)&#123;  <br/>
      if(currentState === undefined)&#123;   //아직 state가 정의되지 않았을경우 <br/>
        return &#123; <br/>
          number:1  <br/>
        &#125; ;    <br/>
      &#125;
      const newState = &#123;...currentState&#125;;   //state 불변성 유지를 위해 currentState를 복제한 newState 를 생성 <br/>
      if(action.type==='PLUS')&#123;  <br/>
        newState.number++;  <br/>
      &#125;    <br/>
      return newState;  <br/>
    &#125;  <br/>

    const store = createStore(reducer);   //스토어 생성 <br/>
      <br></br>
      <br></br>
      - react-redux : react에서 redux를 편리하게 사용하기 위한 도구. 
      react-redux 에는<br></br>
      1. &#91;Provider&#93;  : store 의 state를 전달할 component의 범위를 정함. store=&#123;store&#125; 의 방식으로 store를 주입.
      <br></br>
    
      2. useSelector : state 를 전달하는 역할. 함수를 파라미터로 받으며, 파라미터로 넘어간 함수는 state 를 입력값으로 받고, state의 어떤 값을 return 받을지를 정함.
      <br></br>
      사용예시) <br/>
const number = useSelector(function(state)&#123;  <br/>
			return state.number;  <br/>
      &#125;);
      <br></br>
      3. useDispatch : redux 에서 정의한 dispatch 를 사용할 수 있음.
      <br></br>
      
사용예시) <br/>
const dispatch = useDispatch(); <br/>
dispatch(&#123;type: 'PLUS'&#125;); <br/>
      <br></br>
      * 위 예제는 react-redux 를 적용함으로써, <br></br>
      - Right3 에서 useDispatch 를 통해 dispatcher를 호출하여 state(number)를 변경하고
      <br></br>
      - 변경된 state 는 Left3에서만 useSelector 를 통해 전달받기 때문에, + 버튼을 클릭햇을때 state를 실제로 사용하는 Left3만 re rendering 되는것을 확인 가능하다.
      <br></br>
      (본예제에서는 브라우저의 개발자 도구 console창을 통해 확인가능.)


      </div>  
    </>
  );

}

function Left1(props){
  return(
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  );
}

function Left2(props){
  console.log('Left2');
  return(
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  );
}

function Left3(props){
  console.log("Left3");       
  const number = useSelector((state) => state.number);//state를 실제로 사용하는 Left3만 re rendering 되는것 확인가능
  return(
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
}

function Right1(props){
  return(
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}

function Right2(props){
  console.log("Right2");
  return(
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}
function Right3(props){
  console.log("Right3");
  const dispatch = useDispatch();
  return(
    <div>
      <h1>Right3</h1>
      <input type="button" value="+"
      onClick={()=>{
        dispatch({type: 'PLUS'});
      }}></input>
    </div>
  );
}
import React, {useState, useReducer} from "react";

export default function App5_1(){
  // const [count, setCount] = useState(0);
  const [number,setNumber] = useState(1);
  function countReducer(oldCount, action){
    if(action.type ==='UP'){
      return oldCount +action.number;
  
    }else if(action.type === 'DOWN'){
      return oldCount -action.number;
    }else if (action.type==='RESET'){
      return 0;
    }
  }

  const [count, countDispatch] = useReducer(countReducer,0);
  
  function down(){
    countDispatch({type:"DOWN",number:number});
  }

  function rest(){
    countDispatch({type:"RESET",number:number});
  }

  function up(){
    countDispatch({type:"UP",number:number});
  }

  function changeNumber(event){
    setNumber(Number(event.target.value));
  }

  return(
    <div>
      <input type="button" value="-" onClick={down}/>
      <input type="button" value="0" onClick={rest}/>
      <input type="button" value="+" onClick={up}/>
      <input type="text" value={number} onChange={changeNumber}/>
      <span>{count}</span>

      <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      <hr></hr>
      * 목표 : useReducer를 통해 state 를 변경하는 함수를 정의하고, 해당 함수를통해 state를 변경한다.<br></br><br></br>
      <br></br>
      - 위 예제는 각버튼을 클릭할때 setState 를 통해 숫자값을 변경하는게 아닌, 증가, 감소, reset 에 따른 동작을 따로 구성한 reducer를 호출하도록 구성되어 잇다.
      <br></br>
      - 위 예제의 리듀서 등록및 사용 예시 <br/> <br/>
       <br></br>
      function countReducer(oldCount, action)&#123; <br/> 
        if(action.type ==='UP')&#123;<br/>
          return oldCount +action.number;<br/><br/>
      
          &#125;else if(action.type === 'DOWN')&#123;<br/>
          return oldCount -action.number;<br/>
        &#125;else if (action.type==='RESET')&#123;<br/>
          return 0;<br/>
          &#125;<br/>
         &#125;<br/><br/>

  const &#91;count, countDispatch&#93; = useReducer(countReducer,0);  //리듀서 등록 및 dispatch 생성


      <br></br><br/>
      - state 를 직접 관리하지 않고 액션값만 reducer 함수에게 주면, reducer가 직접 처리.
      <br></br>
      - 장점은 state 사용을 함수화 하여, state를 사용하려는 사용자 입장에서 간편하게 사용가능.
      <br></br>
      하지만, state 의 변경이 단순한 경우에는 setState 가 더욱 단순하게 사용하기 좋다.
      <br></br>

      </div>
      
    </div>
  );

}
import React, {useState} from "react";
// import "./style.css";


export default function App6_1(){
  const [number,setNumber] = useState(1);

  return(
    <>
    <div id="container">
      <h1>redux 사용 X</h1>
      <h1>Root : {number}</h1>
      <div id="grid">
      <Left1 number={number}></Left1>
      <Right1 onIncrease={()=>{setNumber(number+1);}}></Right1>
      </div>
      
    </div>
    <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      <hr></hr>
      * 목표 : 하위 컴포넌트가 많을경우, state 를 공유함에 있어서 발생할 수 있는 prop drilling 에 대해 알아본다.<br></br><br></br>

      - prop drilling 이란, 트리형식으로 되어있는 컴포넌트에서 값을 전달할때 하위 컴포넌트로 값을 전달하는 과정이다. 
      <br></br>
      전달해야하는 컴포넌트의 수가 적다면 큰 문제가 되지않지만, 그 수가많을경우 props 를 전달하면서 발생하는 재 렌더링 및 디버깅과정에서 props를 추적하기 힘들다는 문제점이 있다.
      <br></br>
      * 위 예시는, 
      <br></br>
      - Right3 에서 + 를 클릭하면 Root(&lt;App&gt;)와 Left1~3 까지의 컴포넌트에서 숫자가 1씩 증가하도록 되어있다.
      <br></br>
      - 숫자 변경을 위한 useState 는 Root(&lt;App&gt;)에 다음과 같이 호출되어있다.
      <br></br>
      const &#91;number,setNumber&#93; = useState(1);
      <br></br>
      - 상위에서 useState를 정의했기 때문에 값을 변경하기 위한 setNumber를 Right3 로 전달하려면 prop drilling 이 발생하며, 이 과정에서 값을 전달하기 위해 거쳐가는 Right1, Right2 도 재 렌더링이 발생한다.
    </div>
    </>
  );

}

function Left1(props){
  return(
    <div>
      <h1>Left1 : {props.number}</h1>
      <Left2 number={props.number}></Left2>
    </div>
  );
}

function Left2(props){
  return(
    <div>
      <h1>Left2 : {props.number}</h1>
      <Left3 number={props.number}></Left3>
    </div>
  );
}

function Left3(props){
  return(
    <div>
      <h1>Left3 : {props.number}</h1>
    </div>
  );
}

function Right1(props){
  console.log("Right1 Rendering");
  return(
    <div>
      <h1>Right1</h1>
      
      <Right2 onIncrease={()=>{props.onIncrease();}}></Right2>
    </div>
  );
}

function Right2(props){
  console.log("Right2 Rendering");
  return(
    <div>
      <h1>Right2</h1>
      
      <Right3 onIncrease={()=>{props.onIncrease();}}></Right3>
    </div>
  );
}
function Right3(props){
  return(
    <div>
      <h1>Right3</h1>
      <input type="button" value="+"
      onClick={()=>{
        props.onIncrease();  
      }}></input>
    </div>
  );
}

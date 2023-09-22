import React from "react";



export default function App9_1(){

  return(
    <>
    <h1>TypeScript</h1>

    <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      
      <h2>1. 왜 필요한가?</h2><br></br>
      <ul>
        <li>앱 규모가 클수록 버그 및 런타임 오류가 줄어든다.</li>
        <li>props 등 에 대한 type 을 명시적으로 지정하기 때문에 코드 가독성이 높아지며 이에 따라 협업에 유리해진다.</li>
        <li>작성한 타입을 위반한 코드를 짤 경우, 컴파일(TSC) 단계에서 에러 발생.</li>
        <img style={{width:'800px', height:'300px'}} src={`${process.env.PUBLIC_URL}/tsCompile.png`} alt=""/>
      </ul>
    </div>

    </>
  );

}


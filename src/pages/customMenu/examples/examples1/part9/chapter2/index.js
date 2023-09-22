import React from "react";



export default function App9_2(){

  return(
    <>
    <h1>TypeScript</h1>

    <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      
      <h2>2. 타입정의</h2><br></br>
      <div id="grid">
        <ul>
          <li>변수나 인수명 뒤에 : 를 붙여 타입정보를 붙여 특정타입으로 제한할 수 있다.</li>
          <li>배열타입 정의 : 구성하는 타입과 &#91;&#93; 를 사용한다</li>
          <li>튜플타입 정의 : 고정된 타입</li>
          <li>객체 타입 정의 : let 변수: &#123;키명_1:타입_1; 키명_2:타입_2 ...&#125; 객체 타입의경우, 속성명에 ? 를 사용하여 optional 속성으로 지정가능.</li>
          <li>함수 타입 정의 : function(인수_1: 타입_1, 인수_2: 타입_2 ...): 반환값&#91; &#93;</li>
           - 인수 정의 시, 객체 타입처럼 ? 를 통해 optional 속성으로 설정가능.<br></br>
           - 인수 정의 시, 기본값 설정 가능.<br></br>
           - 함수의 인수에 함수를 지정할 수 있음 : (인수명: 인수_타입) = 반환값_타입
        </ul>
        <img style={{width:'400px', height:'500px'}} src={`${process.env.PUBLIC_URL}/tsTypeDef1.png`} alt=""/>
      </div>
      <div id="grid">
        <ul>
        <li>제네릭 타입 : 타입을 추상화 하여 외부에서 호출시 구체적 타입을 지정할 수 있는 기능.</li>
        <li>유니온 타입 : 두가지의 타입을 받고 싶을 때 사용, | 를 사용하여 정의</li>
        </ul>
        <img style={{width:'400px', height:'400px'}} src={`${process.env.PUBLIC_URL}/tsTypeDef2.png`} alt=""/>
      </div>
      
    </div>

    </>
  );

}


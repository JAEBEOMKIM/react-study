import React from "react";



export default function App9_3(){

  return(
    <>
    <h1>TypeScript</h1>

    <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      
      <h2>3. 제공하는 기능</h2><br></br>
      <div id="grid">
        <ul>
          <li>타입 추론</li>
           - 변수를 초기화 할때 타입 추론으로 인해 자동적으로 변수의 타입이 결정된다.<br></br>
           - 이는, 함수의 반환값에도 적용된다.<br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
          <li>타입 앨리어스</li>
           - 타입을 직접 정의할수 있는 기능 “type 타입명 = 값” 형식으로 등록.<br></br>
           - 원시타입(string, boolean, number...)에 앨리어스를 붙여서 사용할수 있으며, 타입명은 일반적으로 대문자로 시작.<br></br>
        </ul>
        <img style={{width:'400px', height:'500px'}} src={`${process.env.PUBLIC_URL}/chapter9_3_1.png`} alt=""/>
      </div>
      <div id="grid">
        <ul>
          <li>인터페이스 </li>
           - Java의 인터페이스와 흡사<br></br>
           - 인터페이스 작성후 동일이름으로 값을 확장할 수 있음<br></br>
           - ? 를 통한 특정 속성 optional 설정가능<br></br>
           - extends를 통한 상속 가능<br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <li>클래스</li>
           - Java의 클래스와 흡사<br></br>
           - extends를 통한 상속 가능 <br></br>
           - Implements를 통한 클래스의 인터페이스 속성 및 기능 구현을 강제 할 수 있음. 이때, interface의 속성 및 함수 미구현 시 컴파일 단계에서 에러발생. 
          <li>접근 수정자</li>
           - public, private, protected를 제공. Default는 public.<br></br>
           - readonly도 설정가능<br></br>
          <br></br>
          <br></br>
          <br></br>
          <li>타입 정의 파일</li>
           - 타입스크립트에서 외부 모듈을 사용시, 해당 모듈의 타입 정의가 없으면 컴파일 단계에서 에러 발생가능.<br></br>
           - 자바스크립트 모듈에 대해 타입 정보를 부여하는 파일이 타입정의파일 이며, 도입방법은 다음과 같다.<br></br>
          <ol>
            <li>타입 스크립트 파일 도입 : npm 저장소를 통해 다음과 같이 타입 정의 파일을 설치</li>
            Ex) $npm install –save-dev @types/jquery 
            <li>타입정의파일 작성 : 의존하는 자바스크립트 라이브러리가 타입정의파일을 포함하지 않았을경우, 직접 .d.ts 확장자를 가진 타입 정의 파일을 작성및 사용가능.</li>
            
          </ol>

        </ul>
        <img style={{width:'400px', height:'600px'}} src={`${process.env.PUBLIC_URL}/chapter9_3_2.png`} alt=""/>
      

      </div>
      <ul>
          <li>tsconfig.json</li>
            - 타입스크립트 컴파일시 사용하는 옵션파일<br></br>
            - tsc --init 명령어를 통해 tsconfig.json 기본파일이 root에 생성된다.<br></br>
            - tsconfig.json 상세 정보 : <a href="https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-tsconfigjson-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0-%EC%B4%9D%EC%A0%95%EB%A6%AC">바로가기</a>

        </ul>
      
    </div>

    </>
  );

}


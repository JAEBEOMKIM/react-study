import React from "react";

export default function NextJsAccessTest() {

  return(
    <>
    <h1>Next.js 페이지 접근 시 현상 확인</h1>

    <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      
      {/* <h2>Next.js</h2> */}
      <div id="grid">
        <ul>
          <li>Test 환경 구성(본 예시에는 SSR 페이지 X)</li>
          {/* <img style={{width:'800px', height:'300px'}} src={`${process.env.PUBLIC_URL}/nextJsAccessTest/nextJsFiles.png`} alt=""/>  <br></br> */}
          <img style={{width:'800px', height:'300px'}} src={`/assets/images/survey/nextJsAccessTest/nextJsFiles.png`} alt=""/>  <br></br>
          {/* <img style={{width:'800px', height:'300px'}} src={`/404.png`} alt=""/>  <br></br> */}
          * index.js 파일<br></br><br></br>
          <li>페이지 접근 및 log</li><br></br>
          {/* <img style={{width:'1100px', height:'400px'}} src={`${process.env.PUBLIC_URL}/nextJsAccessTest/phoneAccessNetwork.png`} alt=""/>  <br></br> */}
          * 해석<br></br>
          1. 빨간색 : /index(root) 첫 접근시<br></br>
          2. 파란색 : 'Me' 클릭하여 me.js 첫 접근시. 이후 해당 페이지 반복 접근해도 js 다시 다운로드 x<br></br>
          3. 초록색 : 'home 으로 갑니다!' 클릭하여 home.js 첫 접근 및 이후 반복 접근했을때의 api call log<br></br>
          결론 : client 에서 페이지를 최초 접근하면 server 에서 js를 받아오고, 이후 접근시에는 다시 받아오지 않음.
          단, 접근하는 페이지에 api call 이 있을시, 접근 할 때마다 api call.
          
        </ul>
        
      </div>
      
      
    </div>

    </>
  );

}


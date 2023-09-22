import React from "react";

export default function ManyFile() {

  return(
    <>
    <h1>페이지가 다수 있을경우</h1>

    <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      
      <h2>React</h2>
      <div id="grid">
        <ul>
          <li>.js 2000개 추가 전 빌드 ver 첫 화면 로딩</li>
          <img style={{width:'700px', height:'500px'}} src={`/assets/images/survey/manyFiles/js2000Xnetwork.png`} alt=""/>  <br></br><br></br>
          <li>.js 2000개 추가 전 빌드 ver 파일(/build/static) 용량</li>
          <img style={{width:'700px', height:'150px'}} src={`/assets/images/survey/manyFiles/js2000buildFileSize.png`} alt=""/>  
          
        </ul>
        
      </div>
      <div id="grid">
        <ul>
        <li>.js 2000개 추가 후 빌드 ver 첫 화면 로딩</li>
        <img style={{width:'700px', height:'500px'}} src={`/assets/images/survey/manyFiles/js2000network.png`} alt=""/>  <br></br><br></br>
        <li>.js 2000개 추가 후 빌드 ver 파일(/build/static) 용량</li>
        <img style={{width:'700px', height:'150px'}} src={`/assets/images/survey/manyFiles/js2000XbuildFileSize.png`} alt=""/>  
        <li>.js(페이지) 가 늘어나도 빌드 후 main.js 파일 하나로 bundle 되는것 확인.</li>
        </ul>
      </div>

      <h2>Next.js</h2>
      <div id="grid">
        <ul>
          <li>.js 2000개 추가 전 빌드 ver 첫 화면 로딩</li>
          <img style={{width:'700px', height:'500px'}} src={`/assets/images/survey/manyFiles/js2000Xnetwork_next.png`} alt=""/>  <br></br><br></br>
          <li>.js 2000개 추가 전 빌드 ver 파일</li>
          <img style={{width:'650px', height:'250px'}} src={`/assets/images/survey/manyFiles/js2000buildFile_next.png`} alt=""/>    
        </ul>
        
      </div>
      <div id="grid">
        <ul>
        <li>.js 2000개 추가 후 빌드 ver 첫 화면 로딩</li>
        <img style={{width:'700px', height:'500px'}} src={`/assets/images/survey/manyFiles/js2000network_next.png`} alt=""/>  <br></br><br></br>
        <li>.js 2000개 추가 후 빌드 ver 파일</li>
        <img style={{width:'650px', height:'250px'}} src={`/assets/images/survey/manyFiles/js2000XbuildFile_next.png`} alt=""/>  
        <li>Next.js 의 Default rendering 인 pre-rendering(SSG) 에 의해 늘어난 페이지(.js) 만큼 파일이 생성된 것 확인.</li>
        </ul>
      </div>
      
    </div>

    </>
  );

}


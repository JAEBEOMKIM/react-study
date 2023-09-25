import React from "react";

export default function ServerComponent() {

  return(
    <>
    <h1 className="text-4xl font-bold">서버 컴포넌트</h1>

    <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      <div>
        <br/><br/>
        <ul>
            <li>
              <p className="text-3xl">간단 요약</p>
              <div>
                  <img style={{width:'700px', height:'500px'}} src={`/assets/images/survey/serverComponent/serverComponentSummary.png`} alt=""/><br/>
                  <p>서버 컴포넌트 : 컴포넌트 자체가 클라이언트에는 존재하지 않고 서버에만 존재하는 개념.</p>
                  <p>서버에서 직접 리소스 접근이 가능하며 결과물을 json과 비슷한 스트림으로 내려주기 때문에 번들파일에 컴포넌트 파일이 들어가지 않음.</p>
              </div>
            </li>
            <br/><br/>
             <li>
              <p className="text-3xl">리액트 서버 컴포넌트 동작 방식</p>
              <div>
                동작 방식에 대한 자세한 설명은 해당 내용을 잘 설명해 주고 있는 블로그를 참조<br/>
                <a href="https://velog.io/@2ast/React-서버-컴포넌트React-Server-Component에-대한-고찰">velog 링크</a>
              </div>
            </li>
            <br/><br/>
            <li>
              <p className="text-3xl">서버컴포넌트와 클라이언트 컴포넌트의 사용 예</p>
              <div>
                <img src={`/assets/images/survey/serverComponent/RSCuseExample.png`} alt=""/><br/>
                <p>위 그림의 예처럼 유저 인터랙션이 필요한 화면(ex. 블로그 글 작성, 수정 등)에서는 상태관리와 리액트 hook과 상호작용 및 이벤트 리스너가 사용되는<br/>
                클라이언트 컴포넌트를 사용하고 데이터를 보여주거나 Data Fetching이 필요한 컴포넌트들은 서버 컴포넌트를 사용하여 성능을 올릴 수 있다.</p>
              </div>
            </li>
            <br/><br/>
            <li>
              <p className="text-3xl">리액트 서버 컴포넌트 사용 시 이점</p>
              <div>
                <p>Zero Bundle Size<br/>
                RSC는 서버에서 이미 모두 실행된 후 직렬화된 JSON 형태로 전달되기 때문에 어떠한 bundle도 필요하지 않음</p>
                <br/>
                <p>서버 데이터 직접 접근 가능<br/>
                RSC는 그 자체가 서버에서 렌더링 되므로, 컴포넌트 내부에서 Data Fetch를 실행해도 무방하다. 따라서 getServerSideProps, getServerSideProps는 불필요한 함수가 되었다.</p>
                <p>자동 code splitting<br/>
                본래 code splitting을 위해서는 React.lazt나 dynamic import를 사용해야 했지만 서버 컴포넌트에서는 클라이언트 컴포넌트를 import하는 케이스에서는 자동으로<br/>
                클라이언트 컴포넌트에 dynamic import가 적용된다.</p>
              </div>
            </li>
            <br/><br/>
        </ul>
      </div>
    </div>

    </>
  );

}


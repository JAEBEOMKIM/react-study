// import logo from '../../logo.svg';
// import './App.css';

function App1_2() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <hr></hr>
        <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
        * 목표 : 개발환경을 구성한다.
        - 개발환경 구성을 위해 node js 를 설치한다. <a href="https://nodejs.org/ko/">공식홈페이지</a><br/>
        - 설치하면 npm(node package manager) 이 같이 설치되는데, 이를 통해 패키지를 관리하고 서버를 기동하는 등 많은 명령어를 사용하게된다.<br/>
        - 개발과정에서 많이 사용하게되는 기본 터미널 명령어 <br/>
        1. npm create-react-app . : 현재 경로에 react app 개발환경을 구성한다.<br></br>
        2. npm start : 개발(환경)서버를 실행한다 <br></br>
        3. npm run build : 소스를 빌드한다<br></br>
        4. npx serve -s build : 빌드한 소스(/build)를 서버에서 실행한다<br/>
        
        </div>
      
    </div>
    
  );
}

export default App1_2;

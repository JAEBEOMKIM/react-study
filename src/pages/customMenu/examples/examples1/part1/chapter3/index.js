// import logo from '../../logo.svg';

export default function App() {
  return (
    <div className="App">
      Hello React!

      <hr></hr>
      <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      * 목표 : 어떤 과정으로 페이지가 렌더링되는지 확인하고, react 기본예제 화면내용을 수정한다.
      - create react app 을 통해 설치하면 나오는 폴더중 /src/에 개발하는 내용들을 구성한다.<br></br>
      - npm start 를 통해 서버를 실행하면 index.js 를 시작으로 index.html 에 /src/ 폴더에 작성한 .js, .css 대로 화면을 렌더링한다.<br></br>
      - 위 화면은 App.js 에서 return() 내부의 html 코드를 수정하여 출력한 내용이다.<br></br>

      </div>
    </div>


  );
}

// export default App;

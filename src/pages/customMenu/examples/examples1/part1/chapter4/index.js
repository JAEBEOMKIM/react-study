
// import './App.css';

function Header(){
  return(
    <header>
        <h1><a href="/">WEB</a></h1>
    </header>
  )
}

function Nav(){

  return(
    <nav>
        <ol>
          <li><a href="/read/1">html</a></li>
          <li><a href="/read/2">css</a></li>
          <li><a href="/read/3">js</a></li>
        </ol>
     </nav>
  )
}

function Article(){
  return (
    <article>
      <h2>Welcome</h2>
      Hello, WEB
    </article>
  )
}

function App1_4({}) {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>

      <hr></hr>
      <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      * 목표 : 컴포넌트 작성방법 및 의의를 확인한다.<br></br>
      <br></br>
      - 반복으로 사용되는 html 태그들을 컴포넌트로 만듦으로써, 코드의 반복을 줄이고 변경이 필요할때 컴포넌트를 사용한 모든곳에서 동시 변경시킬 수 있다.<br></br>
      - 일반적으로 하나의 컴포넌트마다 하나의 .js 파일로 생성한다.<br></br>
      - 작성한 컴포넌트는 타 컴포넌트를 하위 컴포넌트로써 추가할 수 있다.<br></br>
      <br></br>
      - 위 예제는 WEB 을 나타내는 &lt;Header&gt;, 리스트를 나타내는 &lt;Nav&gt;, 하단의 Welcom~~ 내용을 출력하는 &lt;Article&gt; 컴포넌트를 생성하여 App.js 에 화면을 구성한 형태다.

      </div>
    </div>
  );
}

export default App1_4;

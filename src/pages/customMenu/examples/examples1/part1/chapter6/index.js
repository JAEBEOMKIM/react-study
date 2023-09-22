// import './App.css';

function Header(props){
  console.log('props', props.title);
  return(
    <header>
        <h1><a href="/" onClick={(event)=>{
          event.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a></h1>
    </header>
  )
}

function Nav(props){
  const lis = [];

  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read'+t.id}  onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a></li>);
  }

  return(
    <nav>
        <ol>
          {lis}
        </ol>
     </nav>
  )
}

function Article(props){
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function App1_6() {

  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javscript', body:'javascript is ...'}
  ];

  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        alert('Header');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        alert(id);
      }}></Nav>
      <Article title="Welcome" body="Hello, Web"></Article>

      <hr></hr>
      <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      * 목표 : 컴포넌트에 이벤트를 추가한다<br></br><br></br>
      - 컴포넌트에 이벤트를 추가하기 위해, 이벤트 발생시 실행시키고자 하는 함수를 props로 넘기고 컴포넌트의 return문에 onClick, onChange 등 이벤트에 등록하여 해당 이벤트가 발생할때, props로 넘긴 함수를 실행하도록 한다.
      <br></br>
      - onClick 등 이벤트에 함수를 등록할땐 " " 를 사용하지않고 &#123;&#125; 를 사용한다
      <br></br>
      * 위 예제는 &lt;Nav&gt; 에 topic obj list를 전달하고 클릭시 전달한 obj의 id 값이 alert으로 출력되도록 구성했다.
      
      </div>
    </div>
  );
}

export default App1_6;

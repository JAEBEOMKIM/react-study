// import './App.css';

function Header(props){
  console.log('props', props.title);
  return(
    <header>
        <h1><a href="/">{props.title}</a></h1>
    </header>
  )
}

function Nav(props){
  const lis = [];

  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read'+t.id}>{t.title}</a></li>);
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

function App1_5() {

  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javscript', body:'javascript is ...'}
  ];

  return (
    <div>
      <Header title="WEB"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, Web"></Article>
      
      <hr></hr>
      <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
        * 목표 : 컴포넌트에 값을 전달한다.<br></br><br></br>

        - 컴포넌트 작성시, 매개변수를 추가하고 실제 컴포넌트 호출시 태그에 특정 속성명을 기입하면, 매개변수가 object 형태로 해당 속성을 하나의 key 로 가지게된다.<br></br>
        - 컴포넌트의 return 문 안에서 매개변수로 전달받은 값을 출력하려면 중괄호({})를 사용해야한다.<br></br>
        - 본 예제 이후 매개변수는 일반적으로 props를 사용함을 알린다.
        <br></br>

        * 위 예제는 &lt;Nav&gt; 컴포넌트에 topics 라는 obj list 를 통해 값을 넘겨 동적으로 &lt;Nav&gt; 컴포넌트를 출력한 형태다.

      </div>
    </div>
  );
}

export default App1_5;

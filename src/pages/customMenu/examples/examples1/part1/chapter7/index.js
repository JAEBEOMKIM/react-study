// import './App.css';
import {useState} from 'react';

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
        props.onChangeMode(Number(event.target.id));
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

function App1_7() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);

  console.log('mode',mode);

  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javscript', body:'javascript is ...'}
  ];
  let content = null;
  if(mode==='WELCOME'){
    content=<Article title="Welcome" body="Hello, Web"></Article>
  }else if(mode==='READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      console.log(topics[i].id, id);
      if(topics[i].id ===id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content=<Article title={title} body={body}></Article>
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}

      <hr></hr>
      <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      * 목표 : state 에 대해 알아본다.<br></br><br></br>
      - 기본적으로 컴포넌트에 prop 이 들어가서 return 이 되면 이것이 화면에 컴포넌트가 렌더링된것이다.
      <br></br>
      - state 의 값이 변경되게되면, prop 이 들어갔을때처럼 해당 컴포넌트와 자식 컴포넌트들 까지 재 렌더링이 발생한다.
      <br></br>
      이로 인해 state는 값의 변경과 함께 화면을 재 랜더링 하기위해 사용한다.
      <br></br>
      - state 는 일반 변수처럼 값이 변경되지 않으며, useState 의 setState 와 같은 React Hook 을 통해서만 수정할 수 있다.
      <br></br>
      + 훅(hook)이란 ? 
      <br></br>
      리액트에서 기본적으로 제공하는 함수.
      <br></br>
      * 위 예제는 &lt;Nav&gt; 의 요소를 클릭 했을 때, 각 요소에 걸려있는 이벤트 함수에 따라 하단의 &lt;Article&gt; 영역의 state 값을 setState를 통해 변경 하고 재 렌더링 되는 형태이다. 
      <br></br>
      <br></br>
      - state 에 관한 글 : <a href="https://velog.io/@hamham/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-state%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0">바로가기</a>
      <br></br>
      - 추가) Hook 에 관한글 : <a href="https://kwangsunny.tistory.com/10">바로가기</a>
      </div>
    </div>
  );
}

export default App1_7;

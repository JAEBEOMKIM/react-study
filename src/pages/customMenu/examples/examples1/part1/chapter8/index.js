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

function Create(props){
  return (
    <article>
      <h2>Create</h2>

      <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body);
      }}>
        <p><input type="text" name="title" placeholder="title" /></p>
        <p><textarea name="body" placeholder='body'></textarea></p>
        <p><input type="submit" value="Create"></input></p>
      </form>
    </article>
  )
}

function App1_8() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics,setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javscript', body:'javascript is ...'}
  ]);

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
  }else if(mode==='CREATE'){
    content=<Create onCreate={(_title, _body)=>{
      const newTopic = {id: nextId, title:_title, body:_body};
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>;
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
      <a href="/create" onClick={event=>{
        event.preventDefault();
        setMode('CREATE');
      }}>Create</a>
      
      <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      <hr></hr>
      * 목표 : 화면의 요소를 추가하는 Create 기능을 구현한다.<br></br><br></br>

      * 위 예제는 <br></br>
      - 하단의 create 클릭시 setState통해 모드가 변경되며 이로인해 &lt;Nav&gt; 에 요소 추가를 위한 &lt;Create&gt; 가 렌더링되고, 최종추가를 위한 하단의 Create 버튼을 클릭하면, 방금 추가한 요소를 읽기위한 &lt;Read&gt; 가 랜더링되는 형태로 구성되어있다.
      <br></br>
      - &lt;Nav&gt; 의 각요소 클릭시에도 setState 를 호출하여 &lt;Read&gt; 이 랜더링되도록 하고 해당하는 정보가 노출되도록 구성되어 있다.

      </div>
    </div>
  );
}

export default App1_8;

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
      <a id={t.id} href={'/read/'+t.id}  onClick={event=>{
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

function Update(props){
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>Update</h2>

      <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body);
      }}>
        <p><input type="text" name="title" placeholder="title" value={title} onChange={event=>{
          console.log(event.target.value);
          setTitle(event.target.value);
        }}/></p>
        <p><textarea name="body" placeholder='body' value={body} onChange={event=>{
          setBody(event.target.value);
        }}></textarea></p>
        <p><input type="submit" value="Update"></input></p>
      </form>
    </article>
  )
}

function App1_9() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics,setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javscript', body:'javascript is ...'}
  ]);

  let content = null;
  let contextControl = null;
  if(mode==='WELCOME'){
    content=<Article title="Welcome" body="Hello, Web"></Article>
  }else if(mode==='READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id ===id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content=<Article title={title} body={body}></Article>
    contextControl=
    <li><a href={"/update/"+id} onClick={event=>{
      event.preventDefault();
      setMode('UPDATE');
    }}>Update</a></li>

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
  }else if(mode==='UPDATE'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id ===id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }

    content=<Update title={title} body={body} onUpdate={(title, body)=>{
      console.log(title, body);
      const newTopics = [...topics];
      const updatedTopic = {id:id, title:title, body:body};
      for(let i=0; i<newTopics.length ; i++){
        if(newTopics[i].id === id){
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('READ');
    }}></Update>;
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
      <ul>
        <li><a href="/create" onClick={event=>{
          event.preventDefault();
          setMode('CREATE');
        }}>Create</a></li>
        {contextControl}
      </ul>


      <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      <hr></hr>
      * 목표 : 화면의 요소를 수정하는 update 기능을 구현한다.<br></br><br></br>

      * 위 예제는 <br></br>
      - &lt;Nav&gt; 의 각 요소 클릭시 하단에 출력되는 &lt;Article&gt; 에 Update 링크를 추가하여 
      <br></br>
      - 링크 클릭시 setState를 통해 Update 모드로 변경하면서 이로인해 &lt;Update&gt; 가 렌더링되도록하였다.
      <br></br>
      - &lt;Update&gt; 를 통해 수정된 내용(topic) 역시 setTopics(=setState) 를 통해 변경되도록 하였다.
      
      </div>
    </div>
  );
}

export default App1_9;

import React from 'react';
// import ReactDOM from 'react-dom/client';
//import './index.css';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter, Route, Routes, NavLink, useParams } from 'react-router-dom';

function Home(){
  return (
    <div>
        <h2>Home</h2>
        Home...
    </div>
  );
}

var contents = [
  {id:1, title:'HTML', description:'HTML is...'},
  {id:2, title:'JS', description:'JS is...'},
  {id:3, title:'React', description:'React is...'},
]

function Topic(){
  var params = useParams();
  var topic_id = params.topic_id;
  var selected_topic ={
    title:'Sorry',
    description:'Not Found'
  }

  for(var i=0; i<contents.length; i++){
    if(contents[i].id===Number(topic_id)){
      selected_topic = contents[i];
      break;
    }
  }
  console.log(params);

  return(
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
}

function Topics(){
  
  var lis = [];
  for(var i=0; i< contents.length; i++){
    lis.push(
      <li key={contents[i].id}><NavLink to={"/chapter2_5/topics/"+contents[i].id}>{contents[i].title}</NavLink></li>
    );
  }

  return(
    <div>
        <h2>Topics</h2>
        <ul>
          {lis}
        </ul>
        <Routes>
          <Route path="/:topic_id" element={<Topic />} />
        </Routes>
    </div>
  );
}

function Contact(){
  return(
    <div>
        <h2>Contact</h2>
        Contact...
    </div>
  );
}

export default function App2_5(){
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li><NavLink to="/chapter2_5/">Home</NavLink></li>   
        <li><NavLink to="/chapter2_5/topics">Topics</NavLink></li>
        <li><NavLink to="/chapter2_5/contact">Contact</NavLink></li>
      </ul>
      <Routes>  {/* 본 예제에서는 BrowserRouter or HashRouter 가 없는데, 이는 src/home.js 에서 BrowserRouter로 감싸고 있기 때문.*/}
        <Route path="/" element={<Home/>} />
        <Route path="/topics/*" element={<Topics/>} />
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/*" element={'Not Found'} />  {/* 존재하지 않는 페이지로 이동했을 시(Default) */}
      </Routes>

      <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      <hr></hr>
      * 목표 : 동적으로 Router 를 추가한다<br></br><br></br>
      
      - Route 의 path 값으로 /topics/* 와 같이 * 를 사용하면, /topics/ 하위에 추가적인 url 에 해당하는 Link가 추가(ex. /topics/1, /topics/2....)되더라도 routing 컨트롤이 가능하다.
      <br></br>
      * 위의 예제는
      <br></br>
      - Topics 링크를 클릭하면 하단에 랜더링되는 &lt;Topics&gt; 에 topic obj list 를 통해 동적으로 &lt;NavLink&gt; 를 생성하고 
      <br></br>
      - 각 NavLink 는 클릭시 /topics/&#123;topic obj 의 id&#125; 에 해당하는 url을 요청한다.
      <br></br>
      - 또한, &lt;Topics&gt; 의 return문에는 &lt;Route path="/:topic_id" element=&#123;&lt;Topic /&gt;&#125; &gt; 와 같이 path, element 가 등록되어 있는데,
      <br></br>
      - Topic 에는 useParams() 을 통해 url 의 값을 topic_id 로 받아서, 이 id 값에 해당하는 contents(= list obj) 를 화면에 출력한다.
      <br></br>
      - useParam 관련글 : <a href="https://velog.io/@nemo/useParams">바로가기</a>
      </div>
    </div>
  )
}

// ReactDOM.createRoot(document.getElementById('root')).render(<HashRouter><App /></HashRouter>);
//<StrictMode>하위에 작성된 컴포넌트는 오류검사를 위해 렌더링 단계에서 의도적으로 함수를 두 번 호출

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
// import ReactDOM from 'react-dom/client';
//import './index.css';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter, Route, Routes, NavLink } from 'react-router-dom';

function Home(){
  return (
    <div>
        <h2>Home</h2>
        Home...
    </div>
  );
}

function Topics(){
  return(
    <div>
        <h2>Topics</h2>
        Topics...
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

export default function App2_4(){           
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li><NavLink to="/chapter2_4/">Home</NavLink></li> 
        <li><NavLink to="/chapter2_4/topics">Topics</NavLink></li>
        <li><NavLink to="/chapter2_4/contact">Contact</NavLink></li>
      </ul>
        <Routes>    {/* 본 예제에서는 BrowserRouter or HashRouter 가 없는데, 이는 src/home.js 에서 BrowserRouter로 감싸고 있기 때문.*/}
          <Route path="/" element={<Home/>} />
          <Route path="/topics" element={<Topics/>} />
          <Route path="/contact" element={<Contact/>} /> 
          <Route path="/*" element={'Not Found'} />  {/* 존재하지 않는 페이지로 이동했을 시(Default) */}
        </Routes>
        
      <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      <hr></hr>
      * 목표 : Link & NavLink 컴포넌트에 대해 알아본다<br></br><br></br>
      
      - &lt;a&gt; 를 통해 url 이 변경될경우, 화면전체가 재 렌더링 된다.
      
      <br></br>
      - &lt;Link&gt; 는,  &lt;Route&gt; 의 element로 정의된 컴포넌트만 재 렌더링된다. 이로인해 페이지 전체의 로딩이 아닌, 특정 컴포넌트만 재 렌더링 되도록 할수있다.
      <br></br>
      - 추가로 &lt;NavLink&gt; 는, &lt;Link&gt; 와 동일한 기능에 추가적으로, 클릭한 NavLink 에 class="active" 가 추가되도록 기능이 추가되었다. 해당 기능으로 인해 위 예제와 같이 &lt;Nav&gt; 등 에서 클릭한 NavLink 를 표시할수 있다.
      <br></br>
      
      </div>

    </div>
  )
}

// ReactDOM.createRoot(document.getElementById('root')).render(<HashRouter><App /></HashRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

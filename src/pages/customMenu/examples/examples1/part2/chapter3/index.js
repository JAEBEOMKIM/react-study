import React from 'react';
// import ReactDOM from 'react-dom/client';
//import './index.css';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


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

export default function App2_3(){

  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li><a href="/chapter2_3/">Home</a></li>   {/* a 태그를 통한 호출은 페이지 전체가 리로드됨. */}
        <li><a href="/chapter2_3/topics">Topics</a></li>
        <li><a href="/chapter2_3/contact">Contact</a></li>
      </ul>
      <Routes>  {/* 본 예제에서는 BrowserRouter or HashRouter 가 없는데, 이는 src/home.js 에서 BrowserRouter로 감싸고 있기 때문.*/}
        <Route path="/" element={<Home/>} />
        <Route path="/topics" element={<Topics/>} />
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/*" element={'Not Found'} />  {/* 존재하지 않는 페이지로 이동했을 시(Default) */}
      </Routes>

      <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      <hr></hr>
      * 목표 : Router 를 사용하여 사용자가 특정한 주소로 들어왔을때, 하단에 렌더링 되는 컴포넌트가 달라지도록 한다.<br></br><br></br>
      
      - BrowserRouter : Router를 사용하고자 하는 최상위 컴포넌트를 감싸는 컴포넌트.
      <br></br>
      - Routes : Route 컴포넌트를 감싸는 컴포넌트. react-router-dom v6 이전에는 Switch 를 사용했으나, 현재는 Routes를 사용.
      <br></br>
      관련글 : <a href="https://0cddo-room.tistory.com/entry/react-router%EC%82%AC%EC%9A%A9%EA%B3%BC-v6%EC%97%90%EC%84%9C%EC%9D%98-switch%EC%9D%98-%EB%B3%80%ED%99%94">바로가기</a>
      <br></br>
      - Route : url 을 구분하는 path 와 해당 path 에 따라 랜더링할 컴포넌트를 정의하는 element 로 구성되어 있는 컴포넌트.
      <br></br>

     
      </div>

    </div>
  )
}

// ReactDOM.createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

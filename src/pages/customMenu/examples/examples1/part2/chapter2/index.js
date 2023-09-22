import React from 'react';
// import ReactDOM from 'react-dom/client';
//import './index.css';
// import reportWebVitals from './reportWebVitals';

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

export default function App2_2(){
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <Home></Home>
      <Topics></Topics>
      <Contact></Contact>

      <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      <hr></hr>
      * 목표 : react router dom 을 사용하기 위한 패키지를 설치하고, 적용을 위한 예제 소스를 준비한다.<br></br><br></br>
      
      - react router dom 패키지 설치 를 위한 명령어 : npm install react-router-dom
     
      </div>
    </div>
  )
}

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

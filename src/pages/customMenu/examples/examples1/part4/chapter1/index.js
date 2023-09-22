import React, {createContext, useContext} from "react";
// import './style.css';

const themeDefault = {border: '10px solid red'};
const themeContext = createContext(themeDefault);


function Sub1(){
  const theme = useContext(themeContext);
  return(
        <themeContext.Provider value={{border:'10px solid green'}}>
    <div style={theme}>
        <h1>Sub1</h1>
        <Sub2></Sub2>
      </div>
    </themeContext.Provider>
  );
}

function Sub2(){
  const theme = useContext(themeContext);
  return(
    <div style={theme}>
      <h1>Sub2</h1>
      <Sub3></Sub3>
    </div>
  );
}
function Sub3(){
  const theme = useContext(themeContext);
  return(
    <div style={theme}>
      <h1>Sub3</h1>
    </div>
  );
}
export default function App4_1(){

  const theme = useContext(themeContext);
  console.log('theme',theme);
  return (
    <themeContext.Provider value={{border:'10px solid blue'}}>
    <div className="root1" style={theme}>
      <h1>Hello World!</h1>
      <Sub1></Sub1>
    </div>
    <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      <hr></hr>
      * 목표 : Context API 를 통해 전역적으로 상태를 공유 한다.<br></br><br></br>
      <br></br>

      - 사용법은 
      1. createContext() 를 통해 context 를 생성하고, 적용하고자 하는 컴포넌트를 Provider 컴포넌트로 감싼다. 
      <br></br>
      2. 적용하려는 컴포넌트에서 useContext() 를 사용하여 context 를 return 받는다.
      <br></br>
      provider 하위의 컴포넌트들은 모두동일한 context를 사용하게되는데, 만약 중간에 다른 Provider 가 정의된다면, 해당 Provider의 value= 값에 따라 return 받는 context 의 값이 달라진다.
      <br></br>
      <br></br>
      *위 예제는 
      <br></br>
      - 최상위 컴포넌트인 Sub1 에서 부터 최하단 Sub3 까지 값을 props 로 일일이 상태를 넘기지않고 공유 할수 있는 context api 를 활용한 예제이다.
      <br></br>
      - style obj 를 createContext 로 전역화하고, 이를 각 컴포넌트들이 적용했다.
      <br></br>
      - Sub1와 Sub2~Sub3 가 각각 style이 다른이유는, 각 컴포넌트 상위에서 Provider component의 value 값으로 인해 style이 다르게 적용되었기 때문이다.

    </div>
    </themeContext.Provider>
  );
}
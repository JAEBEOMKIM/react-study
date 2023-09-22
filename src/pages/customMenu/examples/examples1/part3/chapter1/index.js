// import './App.css';
import styled from 'styled-components';

const SimpleButton = styled.button`
  color: white;
  background-color: green;
`;

const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`

const ReactButton = props =>{
  console.log('props',props);
  return <button className={props.className}>{props.children}</button> //리액트로 작성한 일반 Component의 경우, className=props.className 할당필요.
}

const ReactLargeButton = styled(ReactButton)`
  font-size:50px;
`;

const PrimaryButton = styled.button`
  color: ${props=> props.primary ? 'white' : 'black'};
  background-color: ${props=>props.primary ? 'blue':'gray'};
`;

function App3_1(){
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>React Large</ReactLargeButton>
      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton primary='true'>Primary</PrimaryButton>
      
      <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      <hr></hr>
      * 목표 : Styled component 를 이용해 컴포넌트를 작성한다.<br></br><br></br>
      
      - Styled component를 사용하지 않고 react 코드에 style 값을 부여하기 위해선 style=&#123;color:white&#125; 와 같이 obj 형태로 값을 줘야 한다.
      <br></br>
      또한, background-color 와 같은 css 속성의 경우, style obj 내에서는 '-' 기호를 사용하지 못해 backgroundColor로 사용해야 했으며, 이런 경우처럼 CSS 객체의 이름을 그대로 사용하지 못함. 
      <br></br>
      - Styled component 작성은  `` 기호를 사용하며 예시는 아래와 같음.
      <br></br>
       const StyledButton = styled.button` background-color: purple; `; 
      </div>
      - Styled component는 styled() 의 인자로 다른 컴포넌트를 전달받을 경우, 인자로 넘어간 컴포넌트에 추가로 style을 적용할수 있음. 아래와 같이 작성할경우 LargeButton 은 StyledButton 의 속성도 같이 포함.
      <br></br>
       const LargeButton = styled(StyledButton)`
        font-size: 50px;
       `  
       <br></br>
      이때, 만약 styled component 가 아닌 일반 컴포넌트를 styled()의 인자로 넘길경우, 인자로 넘어간 컴포넌트에서(위 예시에서는 StyleButton) className= 에 style 이 적용되도록 작성 필요.
      <br></br>
      className=&#123;props.className&#125;
    </div>
  )
}

export default App3_1;

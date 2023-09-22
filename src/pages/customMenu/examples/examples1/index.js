// import { Link } from "react-router-dom"; 
import Link from 'next/link'
import { useRouter } from 'next/router';

const ExampleList= () => {
    const router = useRouter();
    
    return(
    <div>
        <ul>
            <h3>part1 : 리액트 기초</h3>
            <li><Link href={router.route+"/part1/chapter2"}>chapter2</Link> : 실습 환경을 구축하고 샘플 리액트 앱을 띄운다 </li>
            <li><Link href={router.route+"/part1/chapter3"}>chapter3</Link> : 리액트 소스코드 수정방법을 익힌다</li>
            <li><Link href={router.route+"/part1/chapter4"}>chapter4</Link> : 컴포넌트 작성법을 알아본다</li>
            <li><Link href={router.route+"/part1/chapter5"}>chapter5</Link> : 컴포넌트에 값을 전달하는 props를 알아본다</li>
            <li><Link href={router.route+"/part1/chapter6"}>chapter6</Link> : 컴포넌트에 이벤트 등록하는 법을 익힌다</li>
            <li><Link href={router.route+"/part1/chapter7"}>chapter7</Link> : state 에 대해 알아본다</li>
            <li><Link href={router.route+"/part1/chapter8"}>chapter8</Link> : create 기능을 구현해본다</li>
            <li><Link href={router.route+"/part1/chapter9"}>chapter9</Link> : update 기능을 구현해본다</li>
            <li><Link href={router.route+"/part1/chapter10"}>chapter10</Link> : delete 기능을 구현해본다</li>
            <br></br>
            <h3>part2 : React Router Dom</h3>
            <li><Link href={router.route+"/part2/chapter2"}>chapter2</Link> : react router dom 설치</li>
            <li><Link href={router.route+"/part2/chapter3"}>chapter3</Link> : url 에 따라 컴포넌트를 다르게 보여주는 Router 에 대해 알아본다</li>
            <li><Link href={router.route+"/part2/chapter4"}>chapter4</Link> : Router 와 함께 사용하는 Link 에 대해 알아본다.</li>
            <li><Link href={router.route+"/part2/chapter5"}>chapter5</Link> : 동적으로 Router 를 등록하는 방법을 알아본다.</li>
            <br></br>
            <h3>part3 : styled components</h3>
            <li><Link href={router.route+"/part3/chapter1"}>chapter1</Link> : styled component 작성법을 익힌다</li>
            <br></br>
            <h3>part4 : Context API</h3>
            <li><Link href={router.route+"/part4/chapter1"}>chapter1</Link> : 전역으로 상태를 공유하는 Context API 에 대해 알아본다</li>
            <br></br>
            <h3>part5 : useReducer</h3>
            <li><Link href={router.route+"/part5/chapter1"}>chapter1</Link> : state를 다루는 useState와는 다른 useReducer 를 익힌다</li>
            <br></br>
            <h3>part6 : react-redux</h3>
            <li><Link href={router.route+"/part6/chapter1"}>chapter1</Link> : react-redux를 적용하지 않았을때의 문제점을 알아본다</li>
            <li><Link href={router.route+"/part6/chapter2"}>chapter2</Link> : react-redux를 적용했을때 달라지는점을 알아본다</li>
            <br></br>
            <h3>part7 : redux-toolkit</h3>
            <li><Link href={router.route+"/part7/chapter1"}>chapter1</Link> : redux 를 간편하게 사용할수 있는 redux-toolkit 을 알아본다</li>
            <br></br>
            <h3>part8 : next.js</h3>
            {/* <li><a href="http://172.30.1.48:3030">chapter1</a> : next js의 route, api route, 환경변수 에 대해 알아본다 </li> */}
            <li><Link href={router.route+"/part8"}>chapter1</Link> : next js의 route, api route, 환경변수 에 대해 알아본다 </li>
            <br></br>
            <h3>part9 : typeScript</h3>
            <li><Link href={router.route+"/part9/chapter1"}>chapter1</Link> : typeScript의 필요성에 대해 알아본다 </li>
            <li><Link href={router.route+"/part9/chapter2"}>chapter2</Link> : 타입정의에 대해 알아본다 </li>
            <li><Link href={router.route+"/part9/chapter3"}>chapter3</Link> : typeScript에서 제공하는 기능들을 알아본다 </li>
            <br></br>
            {/* <h3>add survey </h3>
            <li><Link href={router.route+"/manyFile"}>페이지가 많을 때</Link> : 페이지가 2000개 이상으로 많을때 성능및 용량에 대해 알아본다. </li>
            <li><Link href={router.route+"/nextJsAccessTest"}>Next.js 페이지 접근 테스트</Link> : Next.js 페이지에 접근시 발생하는 현상 확인. </li> */}
        </ul>

    </div>
    );

}


export default ExampleList;
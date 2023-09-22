// import './style.css';
export default function Description (){
    return(
        <div className="description" style={{whiteSpace:'pre-wrap', textAlign: 'left'}}>
      <hr></hr>
      * 본 예제 목표 : Next js의 기본 세팅법과 Routing, Api Route, 환경변수 에 대해 알아본다.<br></br><br></br>
      
     * Next.js 란? React 를 기반으로 개발된 프레임워크로, 리액트를 기반으로 서버사이드 렌더링, 정적웹사이트생성 등 의 기능을 제공한다.
     <br></br><br></br>
    * 렌더링 방식<br></br>
기본적으로 프리랜더링 방식을 사용하여, 빌드시 /page/ 하위 js 파일들에 대해각각 html 파일을 생성한다.  <br></br><br></br>

1. SSG(Static site generation)<br></br>
빌드 시 getStaticProps 를 호출하여 API 등으로부터 데이터를 얻어 정적 페이지 생성.<br></br>
페이지에 접근 발생시, 미리 생성한 정적페이지(html)를 클라이언트에 전달, 이렇게 생성된 화면은 일반적 리액트 화면처럼 API 등으로부터 데이터를 얻어 동적으로 화면 그릴 수 있음.<br></br>
SSG 가 적합한 화면 : 빌드후 내용이 업데이트 되지 않는 페이지, 초기 화면 그린 후에 데이터를 표시 할 수 있는 페이지.<br></br>
Next js 에서는 SSR 보다 SSG 를 더 권장.<br></br>
<img src={`/assets/images/examples/examples1/ssg.png`}/><br></br>
- 쇼핑몰 등의 기획전페이지 처럼 목록이 자주 변동되지 않는 페이지에서 사용
ex)크몽 사이트 운세 기획전 페이지 (링크 : <a href="https://kmong.com/md-pick/199--2022-%EC%9E%84%EC%9D%B8%EB%85%84-%EC%8B%9C%EC%9E%91%EC%9D%80-%ED%81%AC%EB%AA%BD-%EC%9A%B4%EC%84%B8?source=post_page-----58de3ba951--------------------------------">바로가기</a>)
<br></br><br></br>


2. CSR(Client side rendering)<br></br>
접근시 브라우저에서 페이지를 그리고 데이터를 서버로부터 받아서 표시.<br></br>
CSR이 적합한 화면 : 실시간성이 중요한 페이지에 적합.<br></br>


3. SSR(Server Side rendering)<br></br>
페이지 접근이 발생 시 서버에서 getServerSideProps 호출, 받은 데이터를 기반으로 페이지를 작성하여 클라이언트에 전달.<br></br>
서버에서 페이지를 생성하므로 SEO에 유리.<br></br>
SSR이 적합한 화면 : 최신가격이 표시되는 제품페이지 등, 항상 최신 데이터 표시하는 화면.<br></br>
호출시마다 서버에서 화면을 렌더링 하여 전달(배포폴더에 html이 실제로 생기진않음)<br></br>
<img src={`/assets/images/examples/examples1/ssr.png`} alt=""/><br></br>
- 요청(http request)시마다 데이터가 업데이트 되어야 하는 거래내역 페이지 등에 사용.
<br></br><br></br>

4. ISR(Incremental Static Regeneration)<br></br>
SSG 와 SSR 의 중간같은 방식. 페이지를 사전에 생성, 동시에 접근이 발생하면 페이지를 재생성하여 새로운페이지 전송가능.<br></br>
getStaticProps 사용시 return 값에 revalidate(유효기간, 초단위)을 설정하여 해당 유효 기간이 지난 후 접근이 발생하면 getStaticProps 를 재 호출하여 최신데이터를 기반으로 정적화면(html)을 새로 그림(배포폴더에 새로운 html이 생성되며 기존html을 덮어씀).<br></br>
<img src={`/assets/images/examples/examples1/isr.png`} alt=""/>
<br></br><br></br>

     + 추가) 웹페이지 랜더링 방식 CSR, SSR, SSG 에 대한 글 : <a href="https://velog.io/@ka0son/%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%82%BC%ED%98%95%EC%A0%9C-CSR-SSR-SSG-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0">바로가기</a>
      <br></br><br></br>
      * 기본 세팅법<br></br>
      - react 환경구성과 유사하게 npm을 통해 세팅하고 next js와 관련된 기본 명령어는 아래와 같다. <br></br>
      1. 설치 : npx create-next-app@latest .<br></br>
    2. 개발환경 실행 : npm run dev<br></br>
    3. 빌드 : npm run build<br></br>
    4. 서비스 시작(빌드된 파일(.next)사용) : npm run start<br></br><br></br>


        
      * Routing  
      <br></br>
      - Next.js 는 페이지 진입시 src/pages/ 를 기본으로 한다.
      <br></br>
      - 도메인이 a.com 이라고 했을때, 라우팅 방식의 예시는 아래와 같다.   <br></br>
        a.com/ -&gt; /pages/index.js              // root(/)로 들어오면 pages/index.js 를 호출한다. <br></br>
        a.com/sub/ -&gt; /pages/sub/index.js      <br></br>
        a.com/sub/about -&gt; /pages/sub/about.js <br></br>
        a.com/sub/1 -&gt; /pages/sub/&#91;id&#93;.js		//실제 파일명이 &#91;id&#93;.js <br></br>
        a.com/sub/2 -&gt; /pages/sub/&#91;id&#93;.js  <br></br><br></br>
      
      * API Route
       <br></br>
      - http://a.com/api 라는 주소로 요청을 날리면, /pages/api/index.js 가 응답해서 요청자가 요청한 데이터를 서버쪽에서 제공한다. <br></br>
      - api 라우팅 예시는 아래와 같다 <br></br>
        a.com/api -&gt; /pages/api/index.js <br></br>
        a.com/api/1 -&gt; /pages/api/&#91;id&#93;.js  <br></br>
        a.com/api/2 -&gt; /pages/api/&#91;id&#93;.js  <br></br>
      - 요청을 받은 api/ 하위의 js 파일들은 화면을 렌더링하지 않고, 서버에서 실행되어 (DB등 과의) http 통신만을 위한 api server 로서의 역할만 수행한다. <br></br><br></br>

      * 환경변수  <br></br>
      - .env 파일을 통해 설정 <br></br>
      - 환경명(development, production)에 따라 다르게 환경변수 파일을 참조할수 있다.<br></br>
      ㄴ .env : 개발/운영 공통으로 참조<br></br>
      ㄴ .env.development : 개발환경 에서 참조<br></br>
      ㄴ .env.production : 운영환경 에서 참조<br></br>
      - 기본적으로 환경변수는 서버사이드에서 참조할수 있으나,<br></br>
        클라이언트사이드 에서도 참조하고 싶다면 환경변수 앞에 NEXT_PUBLIC_    은 필수로 추가해야한다.(없으면 조회가안됨)<br></br>
      - 조회 예시 : process.env.NEXT_PUBLIC_REACT_APP_URL
      <br></br><br></br>
    * Layout pattern<br></br>

- &lt;Layout&gt; 작성<br></br>
export default function Layout(&#123;children&#125;)&#123;<br></br>
 &lt;div&gt;&#123;children&#125;&lt;/div&gt;			//다른컴포넌트가 여기도 들어오게된다.<br></br>
&#125; <br></br>
<br></br>
작성한 Layout은 다음과 같이 사용 <br></br>
//_app.js<br></br>
<br></br>
&lt;Layout&gt;<br></br>
	&lt;Component &#123;...pageProps&#125; /&gt;		// Layout 의 &#123;children&#125; props로 들어가는 컴포넌트<br></br>
&lt;/Layout&gt;<br></br><br></br>


- &#123;children&#125; props<br></br>
다른 컴포넌트가 들어오게 되는 props<br></br>
    </div>
    );
}
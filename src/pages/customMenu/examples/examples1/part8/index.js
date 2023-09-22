import Head from 'next/head'
import Image from 'next/image'

// import Header from '@/components/header'
import Description from './description';
import Link from 'next/link'


export default function Home() {
  const timestamp = new Date().toLocaleString();
  console.log("index.js timestamp : ", timestamp);
    const message = `${timestamp}에 이 페이지의 getStaticProps가 실행됐습니다.`
  return (
    <>
    <div>
      {/* <div id="header">
                <a href={process.env.NEXT_PUBLIC_REACT_APP_URL}>GO HOME</a>
      </div> */}
      {/* <Header></Header> */}
      <h1>/pages/index.js</h1>
      {/* <h3>{message}</h3> */}
      <ul>
        <li><Link href="/sub">/pages/sub/index.js</Link></li>
        <li><Link href="/sub/about">/pages/sub/about.js</Link></li>
        <li><Link href="/sub/1">/pages/sub/[id].js</Link></li>
        <li><Link href="/sub/2">/pages/sub/[id].js</Link></li>
        <li><Link href="/sub/fetch">/pages/sub/fetch.js</Link></li>
      </ul>
    </div>
    <Description></Description>
    </>
  )
}

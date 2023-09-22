import React from 'react'
import Link from 'next/link'


export default function  Surveys(){
    return (
        <>

            
        {/* <Container> */}
        <ul>
            <Link href={"/customMenu/surveys/manyFile"}>페이지가 많을 때</Link> : 페이지가 2000개 이상으로 많을때 성능및 용량에 대해 알아본다. <br></br>
            <Link href={"/customMenu/surveys/nextJsAccessTest"}>Next.js 페이지 접근 테스트</Link> : Next.js 페이지에 접근시 발생하는 현상 확인. <br></br>
        </ul>
        {/* <Link href={"/me"}>Me </Link> */}
        {/* </Container> */}
        </>
    )
}

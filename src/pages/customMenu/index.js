import React from 'react'
// import Link from 'next/link'
import Link from '@components/ui/link'
import Layout from '@components/layout/layout';
import Container from '@components/ui/container';
import Seo from '@components/seo/seo';
import { GetStaticProps } from 'next';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageHeroSection from '@components/ui/page-hero-section';

export default function CustomMenu(){
    return (
        <>
        <Seo
            title="CustomMenu"
            description="아무말."
            path="customMenu"
        />
        <PageHeroSection heroTitle="text-page-customMenu-title" />
        <Container>
        <h2>Surveys</h2><br></br>
        <ul>
        <li><Link href={"/customMenu/surveys/many"}>Survey</Link></li> 
          <li><Link href={"/customMenu/surveys/manyFile"}>페이지가 많을 때</Link> : 페이지가 2000개 이상으로 많을때 성능및 용량에 대해 알아본다. </li>
          <li><Link href={"/customMenu/surveys/nextJsAccessTest"}>Next.js 페이지 접근 테스트</Link> : Next.js 페이지에 접근시 발생하는 현상 확인. </li>
          <li><Link href={"/customMenu/surveys/serverComponent"}>서버컴포넌트</Link> : 리액트 서버 컴포넌트 조사 </li> <br></br>
        </ul> 
        <br></br>
        <h2>Examples</h2><br></br>
        <ul>
          <li><Link href={"/customMenu/examples/examples1"}>examples1 </Link></li>
          <li><Link href={"/customMenu/examples/examples2"}>examples2 </Link></li>
          <li><Link href={"/customMenu/examples/examples3"}>examples3 </Link></li>
        </ul>
        </Container>
        </>
    )
}

CustomMenu.Layout = Layout;


export const getStaticProps = async ({ locale }) => {
    const queryClient = new QueryClient();
    // await queryClient.prefetchQuery(
    //     [API_ENDPOINTS.BLOGS, { limit: LIMITS.CATEGORIES_LIMITS }],
    //     fetchBlogs
    // );
  
  
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
        ...(await serverSideTranslations(locale, [
          'common',
          'forms',
          'menu',
          'footer',
        ])),
      },
      revalidate: 60,
    };
  };
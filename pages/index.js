import ScrollTop from '@/components/ScrollTop';
import 'animate.css';
import 'animate.css/animate.min.css';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import '../i18next';
import HeroHompage from '@/components/home_page/Hero';
import Light from '@/components/home_page/Light';
import Mobi from '@/components/home_page/Mobi';
import Slide from '@/components/home_page/Slide';
import Specifications from '@/components/home_page/Specifications';



const LayoutWrapper = dynamic(() => import('@/components/Layout/Layout'), {
  ssr: false,
});

export default function Home() {
  return (
    <React.Suspense>
      <Head>
        <title>WoolpadStore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutWrapper>
        <HeroHompage />
        {/* <Light />
        <Mobi />
        <Slide />
        <Specifications /> */}
        <ScrollTop />
      </LayoutWrapper>
    </React.Suspense>
  );
}

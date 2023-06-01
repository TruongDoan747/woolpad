import ScrollTop from '@/components/ScrollTop';
import DetailTiVi from '@/components/tivi_page/DetailTiVi';
import SubDetail from '@/components/tivi_page/SubDetail';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';


const LayoutWrapper = dynamic(() => import('@/components/Layout/Layout'), {
 ssr: false,
});
const About = () => {
 return (
  <React.Suspense>
   <Head>
    <title>Woolstore - TiVi</title>
    <link rel="icon" href="/favicon.ico" />
   </Head>
   <LayoutWrapper>
    {/* <div className="flex lg:hidden bg-[#ffffff2e] backdrop-blur-md text-[32px] leading-[60px] text-white font-bold justify-center items-center pt-[80px]">
     Smart TiVi
    </div> */}
    <DetailTiVi />
    <SubDetail/>

    <ScrollTop />
   </LayoutWrapper>
  </React.Suspense>
 );
};

export default About;

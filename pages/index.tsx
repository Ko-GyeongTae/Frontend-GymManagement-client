import React, { useState } from "react";
import Head from "next/head";
import MainBackground from "../src/components/MainBackground";
import LoginButton from '../src/components/LoginButton';

const Home = () => {
  return (
    <>
    <Head>
      <title>홈</title>
    </Head>
    <div style={{alignItems: 'center', overflowX: 'hidden', overflowY: 'hidden', width: '100%', height: '100%'}}> 
      <MainBackground/>
      <LoginButton backgroundColor={'#8c837a'} fontColor={'#ffffff'} bottom={79} right={70}/>
    </div>
    </>
  );
}

export default Home;
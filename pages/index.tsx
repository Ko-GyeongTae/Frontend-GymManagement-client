import React, { useState } from "react";
import Head from "next/head";
import MainBackground from "../src/components/MainBackground";
import LoginButton from '../src/components/LoginButton';

const Home = () => {
  return (
    <>
      <Head>
        <title>Wim-Gym | Home</title>
      </Head>
      <div style={{ alignItems: 'center', overflowX: 'hidden', width: '100%', height: '100%', margin: 0, padding: 0 }}>
        <MainBackground />
        <LoginButton backgroundColor={'#8c837a'} fontColor={'#ffffff'} bottom={79} right={70} />
      </div>
    </>
  );
}

export default Home;
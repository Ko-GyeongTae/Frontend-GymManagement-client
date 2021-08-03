import React, { useState } from "react";
import Head from "next/head";
import HomeBackground from "../src/components/HomeBackground";
import LoginButton from '../src/components/LoginButton';
import styles from './home.module.css';

const Home = () => {
  return (
    <>
      <Head>
        <title>Wim-Gym | Home</title>
      </Head>
      <div className={styles.Container}>
        <HomeBackground />
        <LoginButton placeholder={'회원가입'} linkTo={'/auth/signup'} backgroundColor={'#8c837a'} fontColor={'#ffffff'} bottom={75} right={70} />
        <LoginButton placeholder={'간편로그인'} linkTo={'/auth/login'} backgroundColor={'#8c837a'} fontColor={'#ffffff'} bottom={166} right={70} />
      </div>
    </>
  );
}

export default Home;
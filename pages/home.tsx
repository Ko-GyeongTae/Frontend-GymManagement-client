import React, { useState, useEffect } from "react";
import Head from "next/head";
import LoginButton from '../src/components/LoginButton';
import styles from './home.module.css';

const Home = () => {
  const [width, setWidth] = useState(1);
    useEffect(() => {
        setWidth(window.innerWidth);
    })
  return (
    <>
      <Head>
        <title>Wim-Gym | Home</title>
      </Head>
      <div className={styles.Container}>
        <LoginButton placeholder={'회원가입'} linkTo={'/auth/signup'} backgroundColor={'#8c837a'} fontColor={'#ffffff'} bottom={60} right={(width - 400) / 2} />
        <LoginButton placeholder={'간편로그인'} linkTo={'/auth/login'} backgroundColor={'#8c837a'} fontColor={'#ffffff'} bottom={130} right={(width - 400) / 2} />
      </div>
    </>
  );
}

export default Home;
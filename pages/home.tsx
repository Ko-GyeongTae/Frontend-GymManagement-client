import React, { useState, useEffect } from "react";
import Head from "next/head";
import LoginButton from '../src/components/LoginButton';
import styles from './home.module.css';

const Home = () => {
  const [date, setDate] = useState('');
  const [width, setWidth] = useState(1);
  useEffect(() => {
    const time = new Date();
    setDate(time.toISOString().split('T')[0]);
    setWidth(window.innerWidth);
  })
  return (
    <>
      <Head>
        <title>Wim-Gym | Home</title>
      </Head>
      <div className={styles.Container}>
        <div style={{ width: 1000, height: 500, right: (width - 1000) / 2, bottom: 200, backgroundColor: 'white', opacity: 0.75, position: 'fixed' }}>
          <h1 style={{ width: '100%', textAlign: 'center', fontSize: 50, paddingTop: 20, paddingBottom: 20 }}>{date.split('-')[0]}년 {date.split('-')[1]}월 {date.split('-')[2]}일 전체공지입니다</h1>
          <div style={{ overflow: 'auto', width: '100%', height: 380 }}>
            <div style={{ backgroundColor: 'white' }}>
              <h1>더미데이터</h1>
              <h2>더미데이터</h2>
            </div>
            <div style={{ backgroundColor: 'white' }}>
              <h1>더미데이터</h1>
              <h2>더미데이터</h2>
            </div>
            <div style={{ backgroundColor: 'white' }}>
              <h1>더미데이터</h1>
              <h2>더미데이터</h2>
            </div>
            <div style={{ backgroundColor: 'white' }}>
              <h1>더미데이터</h1>
              <h2>더미데이터</h2>
            </div>
            <div style={{ backgroundColor: 'white' }}>
              <h1>더미데이터</h1>
              <h2>더미데이터</h2>
            </div>
          </div>
        </div>
        <LoginButton placeholder={'회원가입'} linkTo={'/auth/signup'} backgroundColor={'#8c837a'} fontColor={'#ffffff'} bottom={60} right={(width - 400) / 2} />
        <LoginButton placeholder={'간편로그인'} linkTo={'/auth/login'} backgroundColor={'#8c837a'} fontColor={'#ffffff'} bottom={130} right={(width - 400) / 2} />
      </div>
    </>
  );
}

export default Home;
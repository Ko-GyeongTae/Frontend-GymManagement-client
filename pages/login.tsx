import Head from 'next/head';
import router from 'next/router';
import React, { useState } from 'react';
import { useEffect } from 'react';
import LoginButton from '../src/components/LoginButton';
import styles from './index.module.css'

const Home = () => {
    const [width, setWidth] = useState(1);
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    useEffect(() => {
        setWidth(window.innerWidth);
    })

    return (
        <>
            <Head>
                <title>Wim-Gym | Home</title>
            </Head>
            <div className={styles.Container}>
                <div className={styles.Icon} />
                <div style={{ width: 400, height: 55, backgroundColor: '#8c837a', opacity: 0.57, position: 'absolute', right: (width - 386) / 2, bottom: 250, borderRadius: 49, textAlign: 'center' }}>
                    <input style={{ border: "none", fontSize: 27, backgroundColor: '#8c837a', fontFamily: 'Playbill', color: '#ffffff', top: 10, position: "relative", outline: "none" }} placeholder="아이디" onChange={e => setId(e.target.value)}/>
                </div>
                <div style={{ width: 400, height: 55, backgroundColor: '#8c837a', opacity: 0.57, position: 'absolute', right: (width - 386) / 2, bottom: 180, borderRadius: 49, textAlign: 'center' }}>
                    <input style={{ border: "none", fontSize: 27, backgroundColor: '#8c837a', fontFamily: 'Playbill', color: '#ffffff', top: 10, position: "relative", outline: "none" }} placeholder="비밀번호" onChange={e => setPw(e.target.value)}/>
                </div>
                <LoginButton placeholder={'관리자 로그인'} linkTo={'/menu'} backgroundColor={'#8c837a'} fontColor={'#ffffff'} bottom={84} right={(width - 386) / 2} onClick={() => {
                    alert(id + pw);
                    router.push("/menu");
                }} />
            </div>
        </>
    )
}

export default Home;
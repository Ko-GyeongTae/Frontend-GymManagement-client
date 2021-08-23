import Head from 'next/head';
import React, { useState } from 'react';
import { useEffect } from 'react';
import LoginButton from '../src/components/LoginButton';
import styles from './index.module.css'

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
                <div className={styles.Icon} />
                <LoginButton placeholder={'관리자 로그인'} linkTo={'/home'} backgroundColor={'#8c837a'} fontColor={'#ffffff'} bottom={84} right={(width - 386) / 2} />
            </div>
        </>
    )
}

export default Home;
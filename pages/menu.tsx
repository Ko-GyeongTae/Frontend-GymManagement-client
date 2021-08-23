import Head from 'next/head';
import router from 'next/router';
import React, { useState } from 'react';
import { useEffect } from 'react';
import LoginButton from '../src/components/LoginButton';
import styles from './index.module.css'

const Home = () => {
    return (
        <>
            <Head>
                <title>Wim-Gym | Home</title>
            </Head>
            <div className={styles.Container}>
                <div>
                    <h1>관리자 전용 페이지</h1>
                </div>
                <div>
                    <h1>일반 사용자 페이지</h1>
                </div>
            </div>
        </>
    )
}

export default Home;
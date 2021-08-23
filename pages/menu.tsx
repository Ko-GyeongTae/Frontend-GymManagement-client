import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Home = () => {
    return (
        <>
            <Head>
                <title>Wim-Gym | Home</title>
            </Head>
            <div style={{ width: '100vw', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
                <Link href='/' passHref>
                    <div style={{ width: '100vw', height: 300, textAlign: 'center', marginTop: 50 }}>
                        <h1 style={{ fontSize: 50 }}>관리자 전용 페이지</h1>
                    </div>
                </Link>
                <Link href='/home' passHref>
                    <div style={{ width: '100vw', height: 300, textAlign: 'center', marginTop: 50 }}>
                        <h1 style={{ fontSize: 50 }}>일반 사용자 페이지</h1>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Home;
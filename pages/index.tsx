import { url } from 'inspector';
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
        <div className={styles.Container}>
            <div className={styles.Icon}>
                
            </div>
            <LoginButton placeholder={'기기 인증'} linkTo={'/home'} backgroundColor={'#8c837a'} fontColor={'#ffffff'} bottom={84} right={(width - 386)/2} />
        </div>
    )
}

export default Home;
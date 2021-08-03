import React, { useEffect } from "react";
import AuthHeader from "../../src/components/AuthHeader";
import styles from './signup.module.css';

const Home = () => {
    useEffect(() => {
        console.log(window.innerHeight);
        console.log(window.outerHeight);
    })
    return (
        <div className={styles.Container}>
            <AuthHeader />
            <div className={styles.MainBox}>
                <p className={styles.Title}>JOIN US</p>
                <div className={styles.SubBox}>
                    <p className={styles.Subtitle}>회원정보를 입력해주세요</p>
                    <div className={styles.ThirdBox}>
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
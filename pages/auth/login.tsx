import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from './login.module.css';
import Link from 'next/link';
import login from "../api/auth/login";
import { useCookies } from "react-cookie";

const Login = () => {
    const [phoneNum, setPhoneNum] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);
    const InputNumber = (args: string) => { // 전화번호 입력 제한 함수
        if (phoneNum.length < 11) {
            setPhoneNum(phoneNum + args); // 기존 문자열 + 누른 번호 
        }
    }

    useEffect(() => {
        console.log(phoneNum);
        console.log('rerender');
    });

    return ( 
        <>
            <Head>
                <title>Wim-Gym | Login</title>
            </Head>
            <div className={styles.Container}>
                <div className={styles.Header}>
                    <div className={styles.TitleBox}>
                        <p className={styles.TitleText}>휴대전화번호를 눌러주세요.</p>
                    </div>
                    <div className={styles.CancelBox}>
                        <p className={styles.CancelText}>취소</p>
                    </div>
                </div>
                <div className={styles.Body}>
                    <div className={styles.LeftBar}/>
                    <div className={styles.RightContainer}>
                        <div className={styles.NumberBox}>
                            <div className={styles.NumberInnerBox}>
                                <p className={styles.NumberInnerText}>{phoneNum.slice(0, 3) + (phoneNum.length > 3 ? '-' : "") + phoneNum.slice(3, 7) + (phoneNum.length > 7 ? '-' : "") + phoneNum.slice(7, 11)}</p>
                            </div>
                            <div className={styles.NumberInnerNoticeBox}>
                                <p className={styles.NumberInnerNoticeText}><Link href='/' passHref>이용약관</Link>과 <Link href='/'>개인정보취급방침</Link>에 동의하시면 휴대전화 번호 입력 후 아래 확인 버튼을 터치하세요.</p>
                            </div>
                        </div>
                        <div className={styles.KeypadBox}>
                            <div className={styles.KeypadGrid}>
                                <div className={styles.KeypadRow}>
                                    <div className={styles.KeypadCell} onClick={() => {
                                        InputNumber('1');
                                    }}>
                                        <h1>1</h1>
                                    </div>
                                    <div className={styles.KeypadCell} onClick={() => {
                                        InputNumber('2');
                                    }}>
                                        <h1>2</h1>
                                    </div>
                                    <div className={styles.KeypadCell} onClick={() => {
                                        InputNumber('3');
                                    }}>
                                        <h1>3</h1>
                                    </div>
                                </div>
                                <div className={styles.KeypadRow}>
                                    <div className={styles.KeypadCell} onClick={() => {
                                        InputNumber('4');
                                    }}>
                                        <h1>4</h1>
                                    </div>
                                    <div className={styles.KeypadCell} onClick={() => {
                                        InputNumber('5');
                                    }}>
                                        <h1>5</h1>
                                    </div>
                                    <div className={styles.KeypadCell} onClick={() => {
                                        InputNumber('6');
                                    }}>
                                        <h1>6</h1>
                                    </div>
                                </div>
                                <div className={styles.KeypadRow}>
                                    <div className={styles.KeypadCell} onClick={() => {
                                        InputNumber('7');
                                    }}>
                                        <h1>7</h1>
                                    </div>
                                    <div className={styles.KeypadCell} onClick={() => {
                                        InputNumber('8');
                                    }}>
                                        <h1>8</h1>
                                    </div>
                                    <div className={styles.KeypadCell} onClick={() => {
                                        InputNumber('9');
                                    }}>
                                        <h1>9</h1>
                                    </div>
                                </div>
                                <div className={styles.KeypadRow}>
                                    <div className={styles.KeypadCell} onClick={() => {
                                        setPhoneNum(phoneNum.slice(0, -1));
                                    }}>
                                        <h1>지우기</h1>
                                    </div>
                                    <div className={styles.KeypadCell} onClick={() => {
                                        InputNumber('0');
                                    }}>
                                        <h1>0</h1>
                                    </div>
                                    <div className={styles.KeypadCell} onClick={async () => {
                                        let token = await login({ phone: phoneNum })
                                        console.log(token);
                                        setCookie('accessToken', token, { path: '/' });
                                    }}>
                                        <h1>확인</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
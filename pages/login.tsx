import React, { useEffect, useState } from "react";
import Head from "next/head";
import LoginButton from '../src/components/LoginButton';
import Keypad from "../src/components/Keypad";
import style from './login.module.css';

const Login = () => {
    let phoneNum = [];
    const getNumber = (args: string[]) => {
        phoneNum = args;
    };

    useEffect(() => {
        console.log('rerender');
    });

    return (
        <div className={style.Container}>
            <div className={style.Header}>
                <div className={style.TitleBox}>
                    <p className={style.TitleText}>휴대전화번호를 눌러주세요.</p>
                </div>
                <div className={style.CancelBox}>
                    <p className={style.TitleText}>취소</p>
                </div>
            </div>
            <div className={style.Body}>
                <div className={style.LeftBar}>
                    <LoginButton backgroundColor={'white'} fontColor={'#8C837A'} left={70} top={200} />
                </div>
                <div className={style.RightContainer}>
                    <div className={style.NumberBox}>
                       
                    </div>
                    <div className={style.KeypadBox}>
                        <Keypad onClick={(phoneNum) => getNumber(phoneNum)}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
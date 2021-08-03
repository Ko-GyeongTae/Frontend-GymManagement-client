import React, { useEffect, useState } from "react";
import Head from "next/head";
import LoginButton from '../../src/components/LoginButton';
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
            <div style={{ width: '100%', height: '100vh', overflowX: 'hidden' }}>
                <div style={{ display: 'flex', width: '100%', height: '10%', textAlign: 'center', marginTop: '5%' }}>
                    <div style={{ width: '89%' }}>
                        <p style={{ verticalAlign: 'middle', fontSize: 33 }}>휴대전화번호를 눌러주세요.</p>
                    </div>
                    <div style={{ width: '11%' }}>
                        <p style={{ verticalAlign: 'middle', fontSize: 33 }}>취소</p>
                    </div>
                </div>
                <div style={{ width: '100%', height: '80vh', display: 'flex', position: 'fixed', left: 0, bottom: 0, right: 0 }}>
                    <div style={{ width: '40%', height: 'auto', backgroundColor: '#8C837A', alignItems: 'center' }}>
                        <Link href='/login' passHref>
                            <div style={{ width: '80%', height: '10%', lineHeight: '10%', backgroundColor: 'white', borderRadius: 49, textAlign: 'center', position: 'relative', left:'10%', right: '10%' }}>
                                <p style={{ fontSize: '250%', fontFamily: 'Playbill', color: '#010101', paddingTop: '10%' }}>간편로그인</p>
                            </div>
                        </Link>
                    </div>
                    <div style={{ width: '60%', height: '100%' }}>
                        <div style={{ width: '100%', height: '30%', textAlign: 'center', border: 1, borderStyle: 'solid', borderColor: '#707070' }}>
                            <div style={{ width: '100%', height: '40%' }}>
                                <p style={{ fontSize: 60 }}>{phoneNum.slice(0, 3) + (phoneNum.length > 3 ? '-' : "") + phoneNum.slice(3, 7) + (phoneNum.length > 7 ? '-' : "") + phoneNum.slice(7, 11)}</p>
                            </div>
                            <div style={{ width: '100%', height: '20%', position: 'relative' }}>
                                <p style={{ fontSize: '100%' }}><Link href='/' passHref>이용약관</Link>과 <Link href='/'>개인정보취급방침</Link>에 동의하시면 휴대전화 번호 입력 후 아래 확인 버튼을 터치하세요.</p>
                            </div>
                        </div>
                        <div style={{ width: 'auto', height: '70%', border: 1, borderStyle: 'solid', borderColor: '#707070' }}>
                            <div style={{ display: 'table', width: '100%', height: '100%' }}>
                                <div style={{ display: 'table-row' }}>
                                    <div style={{ display: 'table-cell', width: '33%', height: '20%', textAlign: 'center', fontSize: 20, verticalAlign: 'center', border: 1, borderStyle: 'solid', borderColor: '#707070' }} onClick={() => {
                                        InputNumber('1');
                                    }}>
                                        <h1>1</h1>
                                    </div>
                                    <div style={{ display: 'table-cell', width: '33%', height: '20%', textAlign: 'center', fontSize: 20, verticalAlign: 'center', border: 1, borderStyle: 'solid', borderColor: '#707070' }} onClick={() => {
                                        InputNumber('2');
                                    }}>
                                        <h1>2</h1>
                                    </div>
                                    <div style={{ display: 'table-cell', width: '33%', height: '20%', textAlign: 'center', fontSize: 20, verticalAlign: 'center', border: 1, borderStyle: 'solid', borderColor: '#707070' }} onClick={() => {
                                        InputNumber('3');
                                    }}>
                                        <h1>3</h1>
                                    </div>
                                </div>
                                <div style={{ display: 'table-row' }}>
                                    <div style={{ display: 'table-cell', width: '33%', height: '20%', textAlign: 'center', fontSize: 20, verticalAlign: 'center', border: 1, borderStyle: 'solid', borderColor: '#707070' }} onClick={() => {
                                        InputNumber('4');
                                    }}>
                                        <h1>4</h1>
                                    </div>
                                    <div style={{ display: 'table-cell', width: '33%', height: '20%', textAlign: 'center', fontSize: 20, verticalAlign: 'center', border: 1, borderStyle: 'solid', borderColor: '#707070' }} onClick={() => {
                                        InputNumber('5');
                                    }}>
                                        <h1>5</h1>
                                    </div>
                                    <div style={{ display: 'table-cell', width: '33%', height: '20%', textAlign: 'center', fontSize: 20, verticalAlign: 'center', border: 1, borderStyle: 'solid', borderColor: '#707070' }} onClick={() => {
                                        InputNumber('6');
                                    }}>
                                        <h1>6</h1>
                                    </div>
                                </div>
                                <div style={{ display: 'table-row' }}>
                                    <div style={{ display: 'table-cell', width: '33%', height: '20%', textAlign: 'center', fontSize: 20, verticalAlign: 'center', border: 1, borderStyle: 'solid', borderColor: '#707070' }} onClick={() => {
                                        InputNumber('7');
                                    }}>
                                        <h1>7</h1>
                                    </div>
                                    <div style={{ display: 'table-cell', width: '33%', height: '20%', textAlign: 'center', fontSize: 20, verticalAlign: 'center', border: 1, borderStyle: 'solid', borderColor: '#707070' }} onClick={() => {
                                        InputNumber('8');
                                    }}>
                                        <h1>8</h1>
                                    </div>
                                    <div style={{ display: 'table-cell', width: '33%', height: '20%', textAlign: 'center', fontSize: 20, verticalAlign: 'center', border: 1, borderStyle: 'solid', borderColor: '#707070' }} onClick={() => {
                                        InputNumber('9');
                                    }}>
                                        <h1>9</h1>
                                    </div>
                                </div>
                                <div style={{ display: 'table-row' }}>
                                    <div style={{ display: 'table-cell', width: '33%', height: '20%', textAlign: 'center', fontSize: 20, verticalAlign: 'center', border: 1, borderStyle: 'solid', borderColor: '#707070' }} onClick={() => {
                                        setPhoneNum(phoneNum.slice(0, -1));
                                    }}>
                                        <h1>지우기</h1>
                                    </div>
                                    <div style={{ display: 'table-cell', width: '33%', height: '20%', textAlign: 'center', fontSize: 20, verticalAlign: 'center', border: 1, borderStyle: 'solid', borderColor: '#707070' }} onClick={() => {
                                        InputNumber('0');
                                    }}>
                                        <h1>0</h1>
                                    </div>
                                    <div style={{ display: 'table-cell', width: '33%', height: '20%', textAlign: 'center', fontSize: 20, verticalAlign: 'center', border: 1, borderStyle: 'solid', borderColor: '#707070' }} onClick={async() => {
                                        let token = await login({phone: phoneNum})
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
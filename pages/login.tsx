import React, { useEffect, useState } from "react";
import Head from "next/head";
import LoginButton from '../src/components/LoginButton';

const Login = () => {
    //let phoneNum = [];
    const [phoneNum, setPhoneNum] = useState("");

    const InputNumber = (args: string) => {
        if(phoneNum.length < 11){
            setPhoneNum(phoneNum + args);
        }
    }

    useEffect(() => {
        console.log(phoneNum);
        console.log('rerender');
    });

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <div style={{ display: 'inline-flex', width: '100%', height: '15%', textAlign: 'center' }}>
                <div style={{ width: '88.5%' }}>
                    <p style={{ verticalAlign: 'middle', fontSize: 33 }}>휴대전화번호를 눌러주세요.</p>
                </div>
                <div style={{ width: '11.5%' }}>
                    <p style={{ verticalAlign: 'middle', fontSize: 33 }}>취소</p>
                </div>
            </div>
            <div style={{ width: '100%', height: '85%', display: 'flex' }}>
                <div style={{ width: '40%', backgroundColor: '#8C837A', alignItems: 'center' }}>
                    <LoginButton backgroundColor={'white'} fontColor={'#8C837A'} left={70} top={200} />
                </div>
                <div style={{ width: '60%', border: 1, borderStyle: 'solid', borderColor: 'black' }}>
                    <div style={{ width: '100%', height: '30%', textAlign: 'center' }}>
                        <p style={{ fontSize: 60 }}>{phoneNum.slice(0, 3) + (phoneNum.length > 3 ? '-' : "") + phoneNum.slice(3,7) + (phoneNum.length > 7 ? '-' : "") + phoneNum.slice(7, 11)}</p>
                    </div>
                    <div style={{ width: '100%', height: '63%', border: 1, borderStyle: 'solid', borderColor: 'black' }}>
                        <div style={{ display: 'table', width: '100%', height: '100%' }}>
                            <div style={{ display: 'table-row' }}>
                                <div style={{ display: 'table-cell', width: '33%', height: '25%', textAlign: 'center', fontSize: 20, paddingTop: 30 }} onClick={() => {
                                    InputNumber('1');
                                }}>
                                    <h1>1</h1>
                                </div>
                                <div style={{ display: 'table-cell', width: '33%', height: '25%', textAlign: 'center', fontSize: 20, paddingTop: 30 }} onClick={() => {
                                    InputNumber('2');
                                }}>
                                    <h1>2</h1>
                                </div>
                                <div style={{ display: 'table-cell', width: '33%', height: '25%', textAlign: 'center', fontSize: 20, paddingTop: 30 }} onClick={() => {
                                    InputNumber('3');
                                }}>
                                    <h1>3</h1>
                                </div>
                            </div>
                            <div style={{ display: 'table-row' }}>
                                <div style={{ display: 'table-cell', width: '33%', height: '25%', textAlign: 'center', fontSize: 20, paddingTop: 30 }} onClick={() => {
                                    InputNumber('4');
                                }}>
                                    <h1>4</h1>
                                </div>
                                <div style={{ display: 'table-cell', width: '33%', height: '25%', textAlign: 'center', fontSize: 20, paddingTop: 30 }} onClick={() => {
                                    InputNumber('5');
                                }}>
                                    <h1>5</h1>
                                </div>
                                <div style={{ display: 'table-cell', width: '33%', height: '25%', textAlign: 'center', fontSize: 20, paddingTop: 30 }} onClick={() => {
                                    InputNumber('6');
                                }}>
                                    <h1>6</h1>
                                </div>
                            </div>
                            <div style={{ display: 'table-row' }}>
                                <div style={{ display: 'table-cell', width: '33%', height: '25%', textAlign: 'center', fontSize: 20, paddingTop: 30 }} onClick={() => {
                                    InputNumber('7');
                                }}>
                                    <h1>7</h1>
                                </div>
                                <div style={{ display: 'table-cell', width: '33%', height: '25%', textAlign: 'center', fontSize: 20, paddingTop: 30 }} onClick={() => {
                                    InputNumber('8');
                                }}>
                                    <h1>8</h1>
                                </div>
                                <div style={{ display: 'table-cell', width: '33%', height: '25%', textAlign: 'center', fontSize: 20, paddingTop: 30 }} onClick={() => {
                                    InputNumber('9');
                                }}>
                                    <h1>9</h1>
                                </div>
                            </div>
                            <div style={{ display: 'table-row' }}>
                                <div style={{ display: 'table-cell', width: '33%', height: '25%', textAlign: 'center', fontSize: 20, paddingTop: 30 }} onClick={() => {
                                    setPhoneNum(phoneNum.slice(0, -1));
                                }}>
                                    <h1>지우기</h1>
                                </div>
                                <div style={{ display: 'table-cell', width: '33%', height: '25%', textAlign: 'center', fontSize: 20, paddingTop: 30 }} onClick={() => {
                                    InputNumber('0');
                                }}>
                                    <h1>0</h1>
                                </div>
                                <div style={{ display: 'table-cell', width: '33%', height: '25%', textAlign: 'center', fontSize: 20, paddingTop: 30 }} onClick={() => {
                                    console.log('done');
                                }}>
                                    <h1>확인</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
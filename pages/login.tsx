import React, { useState } from "react";
import Head from "next/head";
import LoginButton from '../src/components/LoginButton';

const Login = () => {

  return (
    <div style={{width: '100%', height: '100vh'}}>
      <div style={{display: 'inline-flex', width: '100%', height: '15%', textAlign: 'center'}}>
          <div style={{width: '88.5%'}}>
            <p style={{verticalAlign: 'middle', fontSize: 33}}>휴대전화번호를 눌러주세요.</p>
          </div>
          <div style={{width: '11.5%'}}>
            <p style={{verticalAlign: 'middle', fontSize: 33}}>취소</p>
          </div>
      </div>
      <div style={{width: '100%', height: '85%', display: 'flex'}}>
          <div style={{width: '40%', backgroundColor: '#8C837A', alignItems: 'center'}}>
            <LoginButton backgroundColor={'white'} fontColor={'#8C837A'} left={70} top={200}/>
          </div>
          <div style={{width: '60%', border: 1, borderStyle: 'solid', borderColor: 'black'}}>
            <div style={{width: '100%', height: '34%'}}>

            </div>
            <div style={{width: '100%', height: '66%', border: 1, borderStyle: 'solid', borderColor: 'black'}}>

            </div>
          </div>
      </div>
    </div>
  );
}

export default Login;
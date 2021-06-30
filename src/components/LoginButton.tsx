import React from "react";

const LoginButton = (props: any) => {
    return (
        <a href='/login'>
            <div style={{width: 551, height: 97, backgroundColor: props.backgroundColor, position: 'absolute', right: props.right, bottom: props.bottom, borderRadius: 49, textAlign: 'center'}}>
                <p style={{fontSize: 33, fontFamily: 'Playbill', color: props.fontColor}}>간편로그인</p>
            </div>
        </a>
    )
}

export default LoginButton;
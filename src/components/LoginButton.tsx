import React from "react";
import Link from 'next/link';

const LoginButton = (props: any) => {
    /*
    return (
        <Link href='/login' passHref>
            <div style={{width: 551, height: 97, backgroundColor: props.backgroundColor, position: 'absolute', right: props.right, bottom: props.bottom, borderRadius: 49, textAlign: 'center'}}>
                <p style={{fontSize: 33, fontFamily: 'Playbill', color: props.fontColor}}>간편로그인</p>
            </div>
        </Link>
    )*/
    return (
        <Link href={props.linkTo} passHref>
            <div style={{width: 400, height: 55, backgroundColor: props.backgroundColor, opacity: 0.57, position: 'absolute', right: props.right, bottom: props.bottom, borderRadius: 49, textAlign: 'center'}}>
                <p style={{fontSize: 27, fontFamily: 'Playbill', color: props.fontColor, top: 10, position:"relative"}}>{props.placeholder}</p>
            </div>
        </Link>
    )
}

export default LoginButton;
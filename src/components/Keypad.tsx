import React from 'react';

const Keypad = (args: any) => {
    let phoneNum = [];
    const onPressButton = () => {
        console.log(phoneNum);
        args.onClick(phoneNum);
    }

    return (
        <div style={{ display: 'table', width: '100%', height: '100%' }}>

            <div style={{ display: 'table-row' }}>
                <div style={{ display: 'table-cell', width: '33%', height: '25%' }} onClick={() => {
                    phoneNum.push('1');
                    onPressButton();
                }}>
                    <h1>1</h1>
                </div>
                <div style={{ display: 'table-cell', width: '33%', height: '25%' }} onClick={() => {
                    phoneNum.push('2');
                    onPressButton();
                }}>
                    <h1>2</h1>
                </div>
                <div style={{ display: 'table-cell', width: '33%', height: '25%' }} onClick={() => {
                    phoneNum.push('3');
                    onPressButton();
                }}>
                    <h1>3</h1>
                </div>
            </div>
            <div style={{ display: 'table-row' }}>
                <div style={{ display: 'table-cell', width: '33%', height: '25%' }} onClick={() => {
                    phoneNum.push('4');
                    onPressButton();
                }}>
                    <h1>4</h1>
                </div>
                <div style={{ display: 'table-cell', width: '33%', height: '25%' }} onClick={() => {
                    phoneNum.push('5');
                    onPressButton();
                }}>
                    <h1>5</h1>
                </div>
                <div style={{ display: 'table-cell', width: '33%', height: '25%' }} onClick={() => {
                    phoneNum.push('6');
                    onPressButton();
                }}>
                    <h1>6</h1>
                </div>
            </div>
            <div style={{ display: 'table-row' }}>
                <div style={{ display: 'table-cell', width: '33%', height: '25%' }} onClick={() => {
                    phoneNum.push('7');
                    onPressButton();
                }}>
                    <h1>7</h1>
                </div>
                <div style={{ display: 'table-cell', width: '33%', height: '25%' }} onClick={() => {
                    phoneNum.push('8');
                    onPressButton();
                }}>
                    <h1>8</h1>
                </div>
                <div style={{ display: 'table-cell', width: '33%', height: '25%' }} onClick={() => {
                    phoneNum.push('9');
                    onPressButton();
                }}>
                    <h1>9</h1>
                </div>
            </div>
            <div style={{ display: 'table-row' }}>
                <div style={{ display: 'table-cell', width: '33%', height: '25%' }} onClick={() => {
                    phoneNum.pop();
                    onPressButton();
                }}>
                    <h1>지우기</h1>
                </div>
                <div style={{ display: 'table-cell', width: '33%', height: '25%' }} onClick={() => {
                    phoneNum.push('0');
                    onPressButton();
                }}>
                    <h1>0</h1>
                </div>
                <div style={{ display: 'table-cell', width: '33%', height: '25%' }} onClick={() => {
                    //phoneNum.push('1');
                    console.log('done');
                    onPressButton();
                }}>
                    <h1>확인</h1>
                </div>
            </div>
        </div>
    )
}

export default Keypad;

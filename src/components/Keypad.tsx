import React from 'react';

const Keypad = (args: any) => {

    return (
        <div style={{ display: 'table', width: '100%', height: '100%' }}>
            
                <div style={{ display: 'table-row' }}>
                    <h1>1</h1>
                    <h1>2</h1>
                    <h1>3</h1>
                </div>
                <div style={{ display: 'table-row' }}>
                    <h1>4</h1>
                    <h1>5</h1>
                    <h1>6</h1>
                </div>
                <div style={{ display: 'table-row' }}>
                    <h1>7</h1>
                    <h1>8</h1>
                    <h1>9</h1>
                </div>
                <div style={{ display: 'table-row' }}>
                    <h1>삭제</h1>
                    <h1>0</h1>
                    <h1>확인</h1>
                </div>
        </div>
    )
}

export default Keypad;
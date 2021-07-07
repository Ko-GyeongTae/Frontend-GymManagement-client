import axios from "axios";

const login = async (args: login_Req): Promise<any> => {
    let headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    };

    let accessToken = "";
    /*
    await axios.post(`${process.env.NEXT_PUBLIC_BASEURL}/api/login`, args)
    .then(res => {
        console.log(res.data);
        return res.data;
    })
    .catch(e => {
        console.error(e);
    })*/
    console.log(args);
    await axios.post('http://localhost:5000/auth/login', {
        'name': args.phone,
        'password': args.phone
    }, {
        headers: headers
    })
    .then(res => {
        alert('로그인 성공' + res.data.access_token)
        accessToken = res.data.access_token
    })
    .catch(e => {
        alert('로그인 실패');
        throw new Error('로그인 정보가 잘못되었습니다.');
    })
    return accessToken;
}

export default login;

export interface login_Req {
    phone: string
}
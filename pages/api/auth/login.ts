import axios from "axios";
import setToken from '../../../src/lib/locallib/setToken';

const login = async (args: login_Req): Promise<any> => {
    let headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    };
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
        'name': 'taegyeong3',
        'password': 'hello'
    }, {
        headers: headers
    })
    .then(res => {
        console.log(res.data);
        setToken(res.data.access_token);
    })
    .catch(e => {
        console.log(e);
    })
}

export default login;

export interface login_Req {
    phone: string
}
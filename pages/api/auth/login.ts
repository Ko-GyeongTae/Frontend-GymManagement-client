import axios from "axios";

const login = async(args: login_Req):Promise<any> => {
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
        'id': 'taegyeong3',
        'password': 'qw'
    })
    .then(res => {
        console.log(res.data);
    })
    .catch(e => {
        console.log(e);
    })
}

export default login;

export interface login_Req {
    phone: string
}
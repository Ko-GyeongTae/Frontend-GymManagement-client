import axios from "axios";

const login = async(args: login_Req):Promise<any> => {
    await axios.post(`${process.env.NEXT_PUBLIC_BASEURL}/api/login`, args)
    .then(res => {
        console.log(res.data);
        return res.data
    })
    
}

export default login;

export interface login_Req {
    phone: string
}
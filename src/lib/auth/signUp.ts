import axios from "axios";

const signUp = async(args: signUp_Req):Promise<any> => {
    await axios.post(`${process.env.NEXT_PUBLIC_BASEURL}/api/auth`, args)
    .then(res => {
        console.log(res.data);
        return res.data;
    })
    .catch(e => {
        console.error(e);
    })
}

export default signUp;

export interface signUp_Req {
    gym_code: string;
    media_uid: string;
    name: string;
    phone: number;
    email: string;
    address: string;
}
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

const setToken = async(args: string) => {
    const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);
    useEffect(() => {
        setCookie('accessToken', args, { path: '/' });
    })
    console.log(cookies);
}

export default setToken;
import { useCookies } from 'react-cookie';

const checkToken = async() => {
    const [cookies, setCookie, removeCookie] = useCookies(['access-token']);
    return {}
}

export default checkToken;
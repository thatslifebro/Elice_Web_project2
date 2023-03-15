import axios, { InternalAxiosRequestConfig } from 'axios';
import Cookie from 'js-cookie';
import moment from 'moment';

const refresh = async (
    config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
    const refreshToken = Cookie.get('refreshToken');
    const expireAt = localStorage.getItem('expiresAt');
    let token = localStorage.getItem('accessToken');

    // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때
    if (moment(expireAt).diff(moment()) < 0 && refreshToken) {
        const body = {
            refreshToken,
        };

        // 토큰 갱신 서버통신
        const { data } = await axios.post(
            `${process.env.SERVER_URL}/api/users/token`,
            body
        );

        token = data.data.accessToken;
        localStorage.setItem('accessToken', data.data.accessToken);
        localStorage.setItem(
            'expiresAt',
            moment().add(1, 'hour').format('yyyy-MM-DD HH:mm:ss')
        );
    }

    if (config.headers) config.headers['Authorization'] = `Bearer ${token}`;

    return config;
};

const refreshErrorHandle = (err: any) => {
    Cookie.remove('refreshToken');
};

export { refresh, refreshErrorHandle };

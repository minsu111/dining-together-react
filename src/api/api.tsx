import axios from 'axios';

const REACT_APP_BASE_URL = 'http://13.209.102.55/api';

const authInstance = axios.create({
    baseURL: REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 3000,
});

authInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwt_token');
        const result = config;
        if (token) {
            result.headers.Authorization = `Bearer ${token}`;
        }
        // multi 타입 헤더 요청
        if (result.data.dataType === 'multi') {
            result.headers['Content-Type'] = 'multipart/form-data';
        }

        return result;
    },
    (error) => {
        return Promise.reject(error);
    },
);

authInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error.response);
    },
);

const allowMethod: string[] = ['GET', 'POST', 'PUT'];

const axiosRequest = async (method: string, url: string, data = {}) => {
    if (!allowMethod.includes(method))
        throw new Error('허용되지 않은 호출 method입니다.');
    try {
        const response = await authInstance({
            method,
            url: `${url}`,
            data,
        });

        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default axiosRequest;

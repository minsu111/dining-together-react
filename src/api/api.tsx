import axios from 'axios';

const REACT_APP_BASE_URL = 'http://13.209.102.55/api';

const authInstance = axios.create({
    baseURL: REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 3000,
});

// 요청 인터셉터
authInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwt_token');
        const result = config;
        if (token) {
            result.headers.Authorization = `Bearer ${token}`;
        }
        // multi 타입 헤더 요청
        if (result.data.storeImage !== null) {
            result.headers['Content-Type'] = 'multipart/form-data';
        }

        return result;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// 응답 인터셉터
authInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error.response);
    },
);

const allowMethod: string[] = ['GET', 'POST', 'PUT'];

const axiosRequest = async (
    method: string,
    url: string,
    data = {},
    setPopupState?: any,
    HandleError?: any,
) => {
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
        if (!HandleError) {
            throw error;
        }
        console.log(error);
        HandleError(error, setPopupState);
        return '';
    }
};

export default axiosRequest;

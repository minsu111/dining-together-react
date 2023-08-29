const HandleError = (error: any, setState?: any) => {
    const errorStatus = error.status;
    switch (errorStatus) {
        case 401:
            setState(true);
            break;
        case 500:
            alert('오류가 발생했습니다. 다시 한 번 시도해주세요.');
            break;
        default:
            break;
    }
};

export default HandleError;

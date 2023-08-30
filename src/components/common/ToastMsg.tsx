import React, { useEffect } from 'react';
import { Button, useToast } from '@chakra-ui/react';

function ToastMsg() {
    const toast = useToast();
    const showToast = () => {
        toast({
            title: '변경 완료',
            description: '변경이 완료되었습니다.',
            status: 'success',
            duration: 2000,
            // isClosable: true,
        });
    };

    useEffect(() => {
        showToast();
    }, []);
    return null;
}
export default ToastMsg;

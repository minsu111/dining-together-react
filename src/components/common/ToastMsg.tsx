import React from 'react';
import { Button, useToast } from '@chakra-ui/react';

const ToastMsg = ({ onClose }: any) => {
    const toast = useToast();
    toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
        // onClose = { onClose },
    });
};
export default ToastMsg;

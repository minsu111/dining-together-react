import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    components: {
        containerStyle: {
            styleProps: {
                borderRadius: '8px',
                backgroundColor: 'red',
            },
        },
    },
});

export default theme;

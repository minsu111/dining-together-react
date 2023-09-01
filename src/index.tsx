import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import theme from './styles/theme';
import GlobalStyle from './styles/globalStyle';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ChakraProvider>
    </React.StrictMode>,
);

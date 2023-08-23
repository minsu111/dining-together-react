import React from 'react';
import { Reset } from 'styled-reset';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import router from './routes/routes';
import GlobalStyle from './styles/globalStyle';
import { store } from './app/store';

function App() {
    return (
        <>
            <Reset />
            <GlobalStyle />
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </>
    );
}
export default App;

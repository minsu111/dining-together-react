import React from 'react';
import { Outlet } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import router from './routes';
import { Reset } from 'styled-reset';
import GlobalStyle from './styles/globalStyle';

function App() {
    return (
        <div>
            <Provider store={store}>
                <Reset />
                <GlobalStyle />
                <Outlet />
                <RouterProvider router={router} />
            </Provider>
        </div>
    );
}
export default App;

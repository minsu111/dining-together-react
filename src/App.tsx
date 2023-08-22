import React from 'react';
import { Outlet } from 'react-router-dom';
import { Reset } from 'styled-reset';
import GlobalStyle from './styles/globalStyle';

function App() {
    return (
        <div>
            <Reset />
            <GlobalStyle />
            <Outlet />
        </div>
    );
}
export default App;

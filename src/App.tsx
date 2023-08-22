import React from 'react';
import { Outlet } from 'react-router-dom';
import { Reset } from 'styled-reset';

function App() {
    return (
        <div>
            <Reset />
            <Outlet />
        </div>
    );
}
export default App;

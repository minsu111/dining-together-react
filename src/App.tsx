import React from 'react';
import { Reset } from 'styled-reset';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import router from './routes/routes';
import GlobalStyle from './styles/globalStyle';

import store from './app/store';

function App() {
    const persistor = persistStore(store);

    return (
        <>
            <Reset />
            <GlobalStyle />
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <RouterProvider router={router} />
                </PersistGate>
            </Provider>
        </>
    );
}
export default App;

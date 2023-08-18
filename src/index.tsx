import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import NotFound from './pages/NotFound';
import Home from './pages/home/Home';
import RestaurantDetail from './pages/home/RestaurantDetail';
import Reservation from './pages/reservation/Reservation';
import ReservationList from './pages/reservation/ReservationList';
import Search from './pages/search/Search';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { index: true, path: '/', element: <Home /> },
            { path: '/shop', element: <RestaurantDetail /> },
            { path: '/shop/reservation', element: <Reservation /> },
            { path: '/my/list', element: <ReservationList /> },
            { path: '/search', element: <Search /> },
        ],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);

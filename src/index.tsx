import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import NotFound from './pages/NotFound';
import Home from './pages/home/Home';
import StoreDetail from './pages/reservation/StoreDetail';
import Reservation from './pages/reservation/Reservation';
import ReservationList from './pages/reservation/ReservationList';
import Search from './pages/search/Search';
import Mypage from './pages/mypage/Mypage';
import MyInfo from './pages/mypage/MyInfo';
import EditName from './pages/mypage/EditName';
import EditPhoneNumber from './pages/mypage/EditPhoneNumber';
import EditPassword from './pages/mypage/EditPassword';
import AddStore from './pages/mypage/AddStore';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import SearchResult from './pages/search/SearchResult';
import AdminStore from './pages/Admin/AdminStore';
import Welcome from './pages/auth/Welcome';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { index: true, path: '/', element: <Home /> },
            { path: '/store/:storeId', element: <StoreDetail /> },
            { path: '/store/reservation', element: <Reservation /> },
            { path: '/search', element: <Search /> },
            { path: '/search/list', element: <SearchResult /> },
            { path: '/my/list', element: <ReservationList /> },
            { path: '/my', element: <Mypage /> },
            { path: '/my/info', element: <MyInfo /> },
            { path: '/my/infoEdit/name', element: <EditName /> },
            { path: '/my/infoEdit/phoneNumber', element: <EditPhoneNumber /> },
            { path: '/my/infoEdit/password', element: <EditPassword /> },
            { path: '/my/store', element: <AddStore /> },
            { path: '/login', element: <Login /> },
            { path: '/join', element: <SignUp /> },
            { path: '/admin', element: <AdminStore /> },
            { path: '/join/welcome', element: <Welcome /> },
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
            <App />
        </Provider>
    </React.StrictMode>,
);

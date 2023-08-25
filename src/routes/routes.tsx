import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/home/Home';
import StoreDetail from '../pages/reservation/StoreDetail';
import Reservation from '../pages/reservation/Reservation';
import ReservationList from '../pages/reservation/ReservationList';
import Search from '../pages/search/Search';
import Mypage from '../pages/mypage/Mypage';
import MyInfo from '../pages/mypage/MyInfo';
import EditName from '../pages/mypage/EditName';
import EditPhoneNumber from '../pages/mypage/EditPhoneNumber';
import EditPassword from '../pages/mypage/EditPassword';
import AddStore from '../pages/mypage/AddStore';
import SignUpTest from '../pages/auth/SignUpTest';
import SearchResult from '../pages/search/SearchResult';
import AdminStore from '../pages/Admin/AdminStore';
import Welcome from '../pages/auth/Welcome';
import Login from '../pages/auth/Login';
import SearchKeyword from '../pages/search/SearchKeyword';
import ExtraInfo from '../pages/auth/ExtraInfo';
import Layout from '../components/common/Layout';
import DeleteAccount from '../pages/mypage/DeleteAccount';
import Terms from '../pages/auth/Terms';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            { index: true, path: '/home', element: <Home /> },
            { path: '/login', element: <Login /> },
            { path: '/join', element: <SignUpTest /> },
            { path: '/join/extra', element: <ExtraInfo /> },
            { path: '/join/welcome', element: <Welcome /> },
            { path: '/join/terms', element: <Terms /> },

            { path: '/admin', element: <AdminStore /> },

            { path: '/store/:storeId', element: <StoreDetail /> },
            { path: '/store/reservation', element: <Reservation /> },

            { path: '/search', element: <Search /> },
            { path: '/search/list', element: <SearchResult /> },
            { path: '/search/keyword', element: <SearchKeyword /> },

            { path: '/my/list', element: <ReservationList /> },
            { path: '/my', element: <Mypage /> },
            { path: '/my/info', element: <MyInfo /> },
            { path: '/my/infoEdit/name', element: <EditName /> },
            { path: '/my/infoEdit/phoneNumber', element: <EditPhoneNumber /> },
            { path: '/my/infoEdit/password', element: <EditPassword /> },
            { path: '/my/infoEdit/withdraw', element: <DeleteAccount /> },
            { path: '/my/store', element: <AddStore /> },
        ],
    },
]);

export default router;

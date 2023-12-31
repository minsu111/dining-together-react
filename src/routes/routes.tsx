import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/home/Home';
import StoreDetail from '../pages/reservation/StoreDetail';
import ReservationList from '../pages/reservation/ReservationList';
import Search from '../pages/search/Search';
import Mypage from '../pages/mypage/Mypage';
import MyInfo from '../pages/mypage/MyInfo';
import EditName from '../pages/mypage/EditName';
import EditPassword from '../pages/mypage/EditPassword';
import AddStore from '../pages/mypage/AddStore';
import AddStoreFin from '../pages/mypage/AddStoreFin';
import AddStoreDetail from '../pages/mypage/AddStoreDetail';
import SignUp from '../pages/auth/SignUp';
import SearchResult from '../pages/search/SearchResult';
import AdminStore from '../pages/Admin/AdminStore';
import Welcome from '../pages/auth/Welcome';
import Login from '../pages/auth/Login';
import SearchKeyword from '../pages/search/SearchKeyword';
import Layout from '../components/common/Layout';
import DeleteAccount from '../pages/mypage/DeleteAccount';
import Terms from '../components/auth/Terms';
import EditPhoneNum from '../pages/mypage/EditPhoneNum';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            { index: true, path: '/', element: <Home /> },
            { path: '/login', element: <Login /> },
            { path: '/join', element: <SignUp /> },
            { path: '/join/welcome', element: <Welcome /> },
            { path: '/join/terms', element: <Terms /> },

            // { path: '/admin', element: <AdminStore /> },

            { path: '/store/:storeId', element: <StoreDetail /> },

            { path: '/search', element: <Search /> },
            { path: '/search/list', element: <SearchResult /> },
            { path: '/search/keyword', element: <SearchKeyword /> },

            { path: '/reservationList', element: <ReservationList /> },
            { path: '/my', element: <Mypage /> },
            { path: '/my/info', element: <MyInfo /> },
            { path: '/my/infoEdit/name', element: <EditName /> },
            { path: '/my/infoEdit/phoneNumber', element: <EditPhoneNum /> },
            { path: '/my/infoEdit/password', element: <EditPassword /> },
            { path: '/my/infoEdit/withdraw', element: <DeleteAccount /> },
            { path: '/my/store', element: <AddStore /> },
            { path: '/my/store/fin', element: <AddStoreFin /> },
            { path: '/my/store/detail', element: <AddStoreDetail /> },
        ],
    },
]);

export default router;

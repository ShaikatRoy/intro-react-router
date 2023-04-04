import React from 'react';
import { Outlet, useNavigate, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <div>
                {navigation.state === 'loading' && 'loading...'}
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
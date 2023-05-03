import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../SheardPage/NavigationBar/NavigationBar';
import Footer from '../SheardPage/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
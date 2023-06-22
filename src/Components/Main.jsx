import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Header/NavBar';
import Footer from './Footer/Footer';


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
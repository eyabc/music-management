import React from 'react';
import Header from './Header';

const AppLayout = ({ children }) => (
    <>
        <Header>
        </Header>
        <hr/>
        <h1>{ 'store.H1' }</h1>
        { children }
        <hr/>
    </>
);

export default AppLayout;
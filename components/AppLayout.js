import React from 'react';
import Header from './Header';
import { useRecoilValue } from 'recoil/dist';
import { pageTitleAtom } from '../recoil/common';

const AppLayout = ({ children }) => {
    const pageTitle = useRecoilValue(pageTitleAtom);
    return (
        <>
            <Header>
            </Header>
            <hr/>
            <h1>{ pageTitle }</h1>
            { children }
            <hr/>
        </>

    );
};

export default AppLayout;
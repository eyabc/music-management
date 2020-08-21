import React, { useEffect } from 'react';
import Header from './Header';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { pageTitleAtom } from '../recoil/common';
import useLocalStorage from '../utils/useLocalStorage';
import { userAtom } from '../recoil/user';

const AppLayout = ({ children }) => {
    const pageTitle = useRecoilValue(pageTitleAtom);
    const [persistedUser, ] = useLocalStorage('user', undefined);
    const [, setUser] = useRecoilState(userAtom);

    useEffect(() => {
        setUser(persistedUser);
    }, []);

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
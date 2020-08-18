import React from 'react';
import Link from 'next/link';
import { userAtom } from '../recoil/user';
import UserHeader from './user/UserHeader';
import NotUserHeader from './user/NotUserHeader';
import Head from 'next/head';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { pageTitleAtom } from '../recoil/common';
import globalVariables from '../utils/globalVariables';

const Header = () => {
    const [pageTitle, setTitle] = useRecoilState(pageTitleAtom);
    const user = useRecoilValue(userAtom);
    return (
        <>
            <Head>
                <title>{ globalVariables.serviceName } {pageTitle && `| ${pageTitle}`}</title>
            </Head>
            <Link href={ '/' }>
                <a class={ 'logo' } onClick={() => setTitle(undefined)}>
                    Music Manager
                </a>
            </Link>
            <form class={ 'title-search' } action="">
                <input type="text"/>
                <button onClick={() => setTitle('검색결과')}>검색</button>
            </form>
            {
                user ? <UserHeader/> : <NotUserHeader/>
            }
        </>
    );
}

export default Header;
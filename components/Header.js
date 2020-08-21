import React, { useState } from 'react';
import Link from 'next/link';
import { userAtom } from '../recoil/user';
import UserHeader from './user/UserHeader';
import NotUserHeader from './user/NotUserHeader';
import Head from 'next/head';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil/dist';
import { pageTitleAtom } from '../recoil/common';
import globalVariables from '../utils/globalVariables';
import { musicFilterAtom } from '../recoil/music';

const Header = () => {
    const [pageTitle, setTitle] = useRecoilState(pageTitleAtom);
    const user = useRecoilValue(userAtom);
    const setMusicFilter = useSetRecoilState(musicFilterAtom);

    const [keyword, setKeyword] = useState('');

    const searchMusic = (event) => {
        event.preventDefault();
        setMusicFilter(keyword);
    };

    const changeKeyword = (event) => setKeyword(event.target.value);

    return (
        <>
            <Head>
                <title>{ globalVariables.serviceName } { pageTitle && `| ${ pageTitle }` }</title>
            </Head>
            <Link href={ '/' }>
                <a className={ 'logo' } onClick={ () => setTitle(undefined) }>
                    Music Manager
                </a>
            </Link>
            <form className={ 'title-search' } action="">
                <input type="text" onChange={changeKeyword} value={keyword}/>
                <button onClick={ searchMusic }>검색</button>
            </form>
            {
                user ? <UserHeader/> : <NotUserHeader/>
            }
        </>
    );
};

export default Header;
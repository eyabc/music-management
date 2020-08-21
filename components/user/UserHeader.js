import Link from 'next/link';
import React from 'react';
import { useRecoilState } from 'recoil/dist';
import { pageTitleAtom } from '../../recoil/common';
import { userAtom } from '../../recoil/user';
import Router from 'next/router';

const UserHeader = () => {
    const [, setPageTitle] = useRecoilState(pageTitleAtom);
    const [, setUser] = useRecoilState(userAtom);

    const logout = async () => {
        setUser(undefined);
        setPageTitle(undefined);
        localStorage.clear();
        alert('로그아웃 되었습니다.');
        await Router.push('/');
    };
    return (
        <>
            <Link href={ '/my-profile'}>
                <button onClick={() => setPageTitle('내정보')}>내정보</button>
            </Link>
            <button onClick={logout}>로그아웃</button>
        </>
    );
};
export default  UserHeader;
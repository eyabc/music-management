import Link from 'next/link';
import React from 'react';
import { useRecoilState } from 'recoil/dist';
import { pageTitleAtom } from '../../recoil/common';

const NotUserHeader = () => {
    const [, setTitle] = useRecoilState(pageTitleAtom);

    return (
        <>
            <Link href={ '/sign-in' }>
                <button class={ 'sign-in' } onClick={() => setTitle('로그인')}>
                    로그인
                </button>
            </Link>
            <Link href={ '/sign-up' } class={ 'sign-up' }>
                <button onClick={() => setTitle('회원가입')}>회원가입</button>
            </Link>

        </>
    );
};

export default NotUserHeader;
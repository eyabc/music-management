import Link from 'next/link';
import React from 'react';
import { useRecoilState } from 'recoil/dist';
import { pageTitleAtom } from '../../recoil/common';
import { userAtom } from '../../recoil/user';

const UserHeader = () => {
    const [, setTitle] = useRecoilState(pageTitleAtom);
    const [, setUser] = useRecoilState(userAtom);
    return (
        <>
            <Link href={ '/my-profile' } class={ 'my-profile' }>
                <button onClick={() => setTitle('내정보')}>내정보</button>
            </Link>
            <button onClick={() => setUser(undefined)}>로그아웃</button>
        </>
    );
};
export default  UserHeader;
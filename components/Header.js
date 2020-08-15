import React from 'react';
import Link from 'next/link'

const Header = () => (
    <>
        <span class={ 'logo' }>
            <Link href={'/'}> Music Manager</Link>
        </span>
        <form class={ 'title-search' } action="">
            <input type="text"/>
            <button>검색</button>
        </form>
        <div>
            <button class={ 'sign-in' }>
                <Link href={'/sign-in'}>로그인</Link>
            </button>
            <button><Link href={'/sign-up'} class={ 'sign-up' }>회원가입</Link></button>
        </div>
    </>
);

export default Header;
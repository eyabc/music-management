import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const SignUp = () => {
    return (
        <>
            <Head>
                <title>로그인</title>
            </Head>
            <AppLayout>
                <h1>로그인</h1>
                <form action="post">
                    <ul>
                        <li>
                            <label htmlFor="">회원명</label>
                            <input type="text"/>
                        </li>
                        <li>
                            <label htmlFor="">회원아이디</label>
                            <input type="text"/>
                        </li>
                        <li>
                            <label htmlFor="">패스워드</label>
                            <input type="password"/>
                        </li>
                        <li>
                            <label htmlFor="">패스워드 중복 확인</label>
                            <input type="password"/>
                        </li>
                    </ul>
                    <button>완료</button>
                </form>
            </AppLayout>
        </>
    );
};
export default SignUp;
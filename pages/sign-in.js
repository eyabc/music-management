import Head from 'next/head';

const SignIn = () => {
    return (
        <>
            <form action="">
                <ul>
                    <li>
                        <label htmlFor="">회원아이디</label>
                        <input type="text"/>
                    </li>
                    <li>
                        <label htmlFor="">패스워드</label>
                        <input type="password"/>
                    </li>
                </ul>
                <button>완료</button>
            </form>
        </>
    );
};
export default SignIn;
import Head from 'next/head';

const SignUp = () => {
    return (
        <>
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
        </>
    );
};
export default SignUp;
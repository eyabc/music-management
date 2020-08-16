import AppLayout from '../components/AppLayout';

const MyProfile = () => {
    return (
        <>
            <AppLayout>
                <ul>
                    <li>
                        <label htmlFor="">회원명</label>
                    </li>
                    <li>
                        <label htmlFor="">회원아이디</label>
                    </li>

                    <li>
                        <p>패스워드 변경</p>
                        <form action="post">
                            <ul>

                                <li>
                                    <label htmlFor="">현재 패스워드</label>
                                    <input type="password"/>
                                </li>
                                <li>
                                    <label htmlFor="">변경할 패스워드</label>
                                    <input type="password"/>
                                </li>
                                <li>
                                    <label htmlFor="">패스워드 중복 확인</label>
                                    <input type="password"/>
                                </li>
                            </ul>
                            <button>완료</button>
                        </form>
                    </li>
                </ul>
            </AppLayout>
        </>
    );
};

export default MyProfile;
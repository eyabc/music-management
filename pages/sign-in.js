import { useState } from 'react';
import utils from '../utils';
import Router from 'next/router';
import { useRecoilState } from 'recoil/dist';
import { pageTitleAtom } from '../recoil/common';
import { userAtom } from '../recoil/user';

const SignIn = () => {
    const [loginId, setLoginId] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [, setPageTitle] = useRecoilState(pageTitleAtom);
    const [, setUser] = useRecoilState(userAtom);

    async function findUser (event) {
        event.preventDefault();
        try {
            const body = {
                login_id: loginId,
                login_password: loginPassword,
            };
            const { data } = await utils.client().post('/user/sign-in', body);

            if (data.code === 1){
                alert(data.message);
                return;
            }

            alert('로그인 성공');
            setUser(data.result);
            setPageTitle(undefined);
            await Router.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    function onChangeId (event) {
        setLoginId(event.target.value);
    }

    function onChangePassword (event) {
        setLoginPassword(event.target.value);
    }

    return (
        <form action="get" onSubmit={ findUser }>
            <ul>
                <li>
                    <label htmlFor={ 'login-id' }>아이디</label>
                    <input type={ 'text' } name={ 'login-id' } value={ loginId } onChange={ onChangeId }
                           required={ true }/>
                </li>
                <li>
                    <label htmlFor={ 'login-password' }>패스워드</label>
                    <input type={ 'password' } name={ 'login-password' } value={ loginPassword }
                           onChange={ onChangePassword } required={ true }/>
                </li>
            </ul>
            <button type={ 'submit' }>완료</button>
        </form>
    );
};
export default SignIn;
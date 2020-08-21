import Head from 'next/head';
import { useState, createRef } from 'react';
import config from '../utils';
import { error } from 'next/dist/build/output/log';
import { useRecoilState } from 'recoil/dist';
import { pageTitleAtom } from '../recoil/common';
import Router from 'next/router';

const checkPassword = (password, passwordCheck) => password === passwordCheck;

const SignUp = () => {
    const [name, setName] = useState(''),
        [id, setId] = useState(''),
        [password, setPassword] = useState(''),
        [passwordCheck, setPasswordCheck] = useState('');

    const onChangeId = (event) => setId(event.target.value);
    const onChangeName = (event) => setName(event.target.value);
    const onChangePassword = (event) => setPassword(event.target.value);
    const onChangePasswordCheck = (event) => setPasswordCheck(event.target.value);

    const $loginId = createRef();

    const [, setPageTitle] = useRecoilState(pageTitleAtom);

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            if (!checkPassword(password, passwordCheck)) {
                alert('비밀번호 재입력을 확인해주세요.');
                return;
            }

            const body = {
                name,
                login_id: id,
                login_password: password,
                passwordCheck,
            };

            const { data } = await config.client().post('/user/sign-up', body);
            if (data.code === 1) {
                alert(data.message);
                $loginId.current.focus();
                return;
            }
            alert('회원가입 성공');
            setPageTitle(undefined);
            await Router.push('/');

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <form action="post" onSubmit={ onSubmit }>
                <ul>
                    <li>
                        <label htmlFor="user-name">회원명</label>
                        <input type="text" name='user-name' value={ name } onChange={ onChangeName } required={ true }/>
                    </li>
                    <li>
                        <label htmlFor="user-id">회원아이디</label>
                        <input type="text" name='user-id' ref={$loginId} value={ id } onChange={ onChangeId } required={ true }/>
                    </li>
                    <li>
                        <label htmlFor="user-password">패스워드</label>
                        <input type="password" name='user-password' value={ password } onChange={ onChangePassword }
                               required={ true }/>
                    </li>
                    <li>
                        <label htmlFor="user-password-check">패스워드 중복 확인</label>
                        <input type="password" name='user-password-check' value={ passwordCheck }
                               onChange={ onChangePasswordCheck } required={ true }/>
                    </li>
                </ul>
                <button type={ 'submit' }>가입하기</button>
            </form>
        </>
    );
};
export default SignUp;
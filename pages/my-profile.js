import { useRecoilState } from 'recoil/dist';
import { userAtom } from '../recoil/user';
import { useState } from 'react';
import utils from '../utils';

const MyProfile = () => {
    const [user, setUser] = useRecoilState(userAtom);

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordCheck, setNewPasswordCheck] = useState('');

    const changeCurrentPassword = (event) => setCurrentPassword(event.target.value);
    const changeNewPassword = (event) => setNewPassword(event.target.value);
    const changeNewPasswordCheck = (event) => setNewPasswordCheck(event.target.value);

    const changePassword = async (event) => {
        event.preventDefault();

        try {
            if (newPassword !== newPasswordCheck) {
                alert('패스워드 재확인이 틀렸습니다.');
                return;
            }
            const body = {
                login_id: user.login_id,
                currentPassword, newPassword
            };
            const { data } = await utils.client().put('/user/password', body);

            if (data.code === 1) {
                alert(data.message);
                return;
            }

            alert('비밀번호 변경이 완료되었습니다.');
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            { user && <ul>
                <li>
                    <label htmlFor={ 'user-name' }>회원명: </label>
                    <span name={ 'user-name' }>{ user.name }</span>
                </li>
                <li>
                    <label htmlFor={ 'login-id' }>회원아이디: </label>
                    <span name={ 'login-id' }>{ user.login_id }</span>
                </li>
                <li>
                    <p>패스워드 변경</p>
                    <form action="post" onSubmit={ changePassword }>
                        <ul>
                            <li>
                                <label htmlFor="current-password">현재 패스워드</label>
                                <input type={ 'password' }
                                       required={ true }
                                       name="current-password"
                                       value={ currentPassword }
                                       onChange={ changeCurrentPassword }
                                />
                            </li>
                            <li>
                                <label htmlFor={ 'new-password' }>변경할 패스워드</label>
                                <input type={ 'password' }
                                       required={ true }
                                       name={ 'new-password' }
                                       value={ newPassword }
                                       onChange={ changeNewPassword }
                                       autoComplete={false}
                                />
                            </li>
                            <li>
                                <label htmlFor={ 'new-password-check' }>패스워드 재 확인</label>
                                <input type={ 'password' }
                                       required={ true }
                                       name={ 'new-password-check' }
                                       value={ newPasswordCheck }
                                       onChange={ changeNewPasswordCheck }/>
                            </li>
                        </ul>
                        <button type={ 'submit' }>완료</button>
                    </form>
                </li>
            </ul>
            }
        </>
    );
};

export default MyProfile;
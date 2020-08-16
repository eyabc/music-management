import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const EditMusic = () => {
    return (
        <>
            <Head>
                <title>음원 편집하기</title>
            </Head>
            <AppLayout>
                <form action="">
                    <ul>
                        <li>
                            <label htmlFor="">음원 삽입</label>
                            <input type="file" required/>
                            <button>삭제</button>
                        </li>
                        <li>
                            <label htmlFor="">음원 정보</label>
                            <p>트랙명</p>
                            <p>앨범명</p>
                        </li>
                        <li>
                            <label htmlFor="">곡 제목</label>
                            <input type="text" required/>
                        </li>
                        <li>
                            <label htmlFor="">아티스트</label>
                            <input type="text" required/>
                        </li>
                    </ul>
                    <button>완료</button>
                </form>

            </AppLayout>
        </>
    )
};

export default EditMusic;
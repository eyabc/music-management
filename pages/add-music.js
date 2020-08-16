import Head from 'next/head';

const AddMusic = () => {
    return (
        <>
            <Head>
                <title>음원 추가하기</title>
            </Head>
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
        </>
    );
};

export default AddMusic;
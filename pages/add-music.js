import Link from 'next/link';
import { useRecoilState } from 'recoil/dist';
import { pageTitleAtom } from '../recoil/common';
import { useState } from 'react';
import * as musicMetadata from 'music-metadata-browser';


const AddMusic = () => {
    const [, setPageTitle] = useRecoilState(pageTitleAtom);

    const [musicFile, setMusicFile] = useState('');
    const [musicTitle, setMusicTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [track, setTrack] = useState({});

    const deleteMusicFile = (event) => {
        event.preventDefault();
        setMusicFile(null);
    };

    const changeMusicTitle = (event) => setMusicTitle(event.target.value);
    const changeArtist = (event) => setArtist(event.target.value);

    const changeMusicFile = async (event) => {
        event.preventDefault();

        const file = event.target.files[0];
        const { common } = await musicMetadata.parseBlob(file);

        setMusicFile(file);
        setMusicTitle(common.title);
        setAlbum(common.album);
        setTrack(common.track);
        setArtist(common.artist);

        console.log(await musicMetadata.parseBlob(file));
    };


    return (
        <>
            <form action="">
                <ul>
                    <li>
                        <label htmlFor={ 'music-file' }>음원 삽입</label>
                        <input type="file"
                               accept="audio/*"
                               name={ 'music-file' }
                               onChange={ changeMusicFile }
                               required/>
                        <button onClick={ deleteMusicFile }>삭제</button>
                    </li>
                    <li>
                        <label htmlFor={'music-info'}>음원 정보</label>
                        <p>트랙: { track.no && track.no } {track.of && ' of ' + track.of } </p>
                        <p>앨범명: { album }</p>
                    </li>
                    <li>
                        <label htmlFor={'title'}>곡 제목</label>
                        <input type="text"
                               name={'title'}
                               value={ musicTitle }
                               onChange={ changeMusicTitle }
                               required/>
                    </li>
                    <li>
                        <label htmlFor={'artist'}>아티스트</label>
                        <input type="text"
                               name={'artist'}
                               value={ artist }
                               onChange={ changeArtist }
                               required/>
                    </li>
                </ul>
                <button>완료</button>
            </form>
            <Link href={ '/' }>
                <button onClick={ () => setPageTitle(undefined) }>목록 으로</button>
            </Link>
        </>
    );
};

export default AddMusic;
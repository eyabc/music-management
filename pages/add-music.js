import Link from 'next/link';
import { useRecoilState } from 'recoil/dist';
import { pageTitleAtom } from '../recoil/common';
import { useRef, useState } from 'react';
import * as musicMetadata from 'music-metadata-browser';
import utils, { trackParse } from '../utils';
import Router from 'next/router'

const AddMusic = () => {
    const [, setPageTitle] = useRecoilState(pageTitleAtom);

    const $file = useRef('');
    const [musicTitle, setMusicTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [track, setTrack] = useState({});

    const deleteMusicFile = (event) => {
        event.preventDefault();
        $file.current.value = '';
        setMusicTitle('');
        setAlbum('');
        setTrack('');
        setArtist('');
        setMusicTitle('');
    };

    const changeMusicTitle = (event) => setMusicTitle(event.target.value);
    const changeArtist = (event) => setArtist(event.target.value);

    const changeMusicFile = async (event) => {
        event.preventDefault();

        const file = event.target.files[0];

        const { common } = await musicMetadata.parseBlob(file);

        setMusicTitle(common.title);
        setAlbum(common.album);
        setTrack(common.track);
        setArtist(common.artist);
    };

    const uploadMusic = async (event) => {
        event.preventDefault();

        try {
            const body = new FormData();
            body.append('title', musicTitle);
            body.append('album', album);
            body.append('track', JSON.stringify(track));
            body.append('artist', artist);
            body.append('file', $file.current.files[0]);

            await utils.client().post('/music', body);

            alert('음원이 추가되었습니다!');
            setPageTitle(undefined);
            await Router.push('/');

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form action="post" onSubmit={ uploadMusic }>
                <ul>
                    <li>
                        <label htmlFor={ 'music-file' }>음원 삽입</label>
                        <input type="file"
                               accept="audio/*"
                               name={ 'music-file' }
                               onChange={ changeMusicFile }
                               ref={$file}
                               required/>
                        <button onClick={ deleteMusicFile }>삭제</button>
                    </li>
                    <li>
                        <label htmlFor={ 'music-info' }>음원 정보</label>
                        <ul name={ 'music-info' }>
                            <li>
                                <label htmlFor={ 'track' }>
                                </label>
                                <span name={ 'track' }>
                                    트랙: { trackParse(track)}
                                </span>
                            </li>
                            <li>
                                <label htmlFor={ 'album' }></label>
                                <span name={ 'album' }>앨범명: { album }</span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <label htmlFor={ 'title' }>곡 제목</label>
                        <input type="text"
                               name={ 'title' }
                               value={ musicTitle }
                               onChange={ changeMusicTitle }
                               required/>
                    </li>
                    <li>
                        <label htmlFor={ 'artist' }>아티스트</label>
                        <input type="text"
                               name={ 'artist' }
                               value={ artist }
                               onChange={ changeArtist }
                               required/>
                    </li>
                </ul>
                <button type={ 'submit' }>완료</button>
            </form>
            <Link href={ '/' }>
                <button onClick={ () => setPageTitle(undefined) }>목록 으로</button>
            </Link>
        </>
    );
};

export default AddMusic;
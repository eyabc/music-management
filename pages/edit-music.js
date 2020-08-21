import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import { useSetRecoilState } from 'recoil/dist';
import { pageTitleAtom } from '../recoil/common';
import { useState } from 'react';
import * as musicMetadata from 'music-metadata-browser';
import utils, { trackParse } from '../utils';
import Router from 'next/router';

const EditMusic = () => {
    const setPageTitle = useSetRecoilState(pageTitleAtom);

    const $file = useRef('');
    const [musicTitle, setMusicTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [track, setTrack] = useState({});


    const router = useRouter();
    const id = router.query.id;

    const getMusic = async () => {
        try {
            const {
                data: {
                    music:
                        { title, album, track, artist, path },
                },
            } = await utils.client().get(`/music?id=${ id }`);
            setMusicTitle(title);
            setAlbum(album);
            setTrack(JSON.parse(track));
            setArtist(artist);

        } catch (error) {
            console.log(error.message);
        }
    };
    useEffect(() => {
        getMusic();
    }, []);

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

    const updateMusic = async (event) => {
        event.preventDefault();

        try {
            const body = new FormData();
            body.append('id', id);
            body.append('title', musicTitle);
            body.append('album', album);
            body.append('track', JSON.stringify(track));
            body.append('artist', artist);

            if ($file.current.files.length > 0) {
                body.append('file', $file.current.files[0]);
            }
            console.log(...body);
            await utils.client().post('/update-music', body);
            alert('음원편집이 적용되었습니다!');

        } catch (error) {
            console.log(error);
        }
    };

    const deleteMusic = async (event) => {
        event.preventDefault();
        try {
            await utils.client().delete(`/music?id=${ id }`);
            setPageTitle(undefined);
            await Router.push('/');
        }
        catch(error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <form action="post" onSubmit={ updateMusic }>
                <ul>
                    <li>
                        <label htmlFor={ 'music-file' }>음원 변경</label>
                        <input type="file"
                               accept="audio/*"
                               name={ 'music-file' }
                               onChange={ changeMusicFile }
                               ref={$file}
                               />
                        <button onClick={ deleteMusicFile }>삭제</button>
                    </li>
                    <li>
                        <label htmlFor={ 'music-info' }>음원 정보</label>
                        <ul name={ 'music-info' }>
                            <li>
                                <label htmlFor={ 'track' }>
                                </label>
                                <span name={ 'track' }>
                                    트랙: { track && trackParse(track) }
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
            <button onClick={deleteMusic}>음원 삭제</button>
            <Link href={ '/' }>
                <button onClick={ () => setPageTitle(undefined) }>목록 으로</button>
            </Link>
        </>
    );
};


export default EditMusic;
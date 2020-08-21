import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { musicFilterAtom, musicListAtom } from '../recoil/music';
import { useRecoilState } from 'recoil/dist';
import { pageTitleAtom } from '../recoil/common';
import { userAtom } from '../recoil/user';
import utils, { trackParse } from '../utils';
import { useEffect } from 'react';


const MusicItem = ({ music, idx }) => {
    const [, setPageTitle] = useRecoilState(pageTitleAtom);
    return (
        <tr key={idx}>
            <td>{ idx }.</td>
            <td>{ music.title }</td>
            <td>{ music.artist }</td>
            <td>{ music.album }</td>
            <td>{ trackParse(JSON.parse(music.track)) }</td>
            <td>
                <Link a href={ `/edit-music?id=${ music.id }` }>
                    <button onClick={ () => setPageTitle('음원 편집') }>edit</button>
                </Link>
            </td>
        </tr>
    );
};

const Musics = () => {
    const [musicList, setMusicListAtom] = useRecoilState(musicListAtom);
    const filter = useRecoilValue(musicFilterAtom);
    const getMusicList = async () => {
        try {
            const { data } = await utils.client().get('/musics');
            setMusicListAtom(data.music);
        } catch (error) {
            console.log(error.message);
        }
    };
    useEffect(() => {
        getMusicList();
    }, []);

    const filteredMusicList = (function() {
        let regex = new RegExp(filter, 'i');

        const result = musicList.filter(music => regex.test(music.title));
        return result;
    });


    return (
        <table style={{width: 100+'%'}}>
            <tr style={{textAlign: 'left'}}>
                <th>No.</th>
                <th>title</th>
                <th>artist</th>
                <th>album</th>
                <th>track</th>
                <th>edit</th>
            </tr>
            {
                musicList && filteredMusicList()?.map((music, idx) => (
                    <MusicItem music={ music } idx={ idx }/>
                ))
            }
        </table>
    );
};

const Music = () => {
    const [, setTitle] = useRecoilState(pageTitleAtom);
    const user = useRecoilValue(userAtom);
    return (
        <div>
            {
                user &&
                <Link href={ '/add-music' }>
                    <button onClick={ () => setTitle('음원 추가') }>음원 추가</button>
                </Link>
            }
            <Musics/>
        </div>
    );
};
export default Music;
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { musicState, musicListState } from '../recoil/atoms';
import { useRecoilState } from 'recoil/dist';
import { pageTitleAtom } from '../recoil/common';


const MusicItem = ({ id, key }) => {
    const [, setTitle] = useRecoilState(pageTitleAtom);
    const {
        path,
        title,
        artist,
        album,
        track,
    } = useRecoilValue(musicState(id));
    return (
        <li>
            <span>{ key }.</span>
            <span>{ title }</span>
            <span>{ artist }</span>
            <span>{ album }</span>
            <span>{ track }</span>
            <Link a href={ `/edit-music?id=${ id }` }>
                <button onClick={() => setTitle('음원 수정하기')}>edit</button>
            </Link>
        </li>
    );
};

const Musics = () => {
    const musicList = useRecoilValue(musicListState);
    return (
        <ul className={ 'musics' }>
            {
                musicList.map((id, key) => (
                    <MusicItem id={ id } key={ key }/>
                ))
            }
        </ul>
    );

};


const Music = () => {
    const [, setTitle] = useRecoilState(pageTitleAtom);
    return (
        <div>
            <Link href={ '/add-music' }>
                <button onClick={ () => setTitle('음원 추가') }>음원 추가</button>
            </Link>
            <Musics/>
        </div>
    );
};
export default Music;
// 음악데이터 삽입 기능 구현,
// 올려진 음원데이터 편집(곡제목, 아티스트이름, 음원수정 등) 기능 구현
import Link from 'next/link';

const mockMusic = [
    {
        path: 'https://musicmanager.com/1',
        title: 'spring',
        artist: 'vivaldi',
        album: 'four seasons',
        track: 'four seasons 1',
    },
    {
        path: 'https://musicmanager.com/2',
        title: 'summer',
        artist: 'vivaldi',
        album: 'four seasons',
        track: 'four seasons 2',
    },
    {
        path: 'https://musicmanager.com/3',
        title: 'bees',
        artist: 'Tchaikovsky',
        album: 'Symphony',
        track: 'Symphony 1',
    },
    {
        path: 'https://musicmanager.com/4',
        title: 'ballet',
        artist: 'Tchaikovsky',
        album: 'Symphony',
        track: 'Symphony 2',
    },
];

const Music = () => {
    return (
        <div>
            <button><Link href={'/add-music'}>음원 추가</Link></button>
            <ul>
                {
                    mockMusic.map((item, key) => {
                        return (
                            <li>
                                <span>{ key }.</span>
                                <span>{ item.title }</span>
                                <span>{ item.artist }</span>
                                <span>{ item.album }</span>
                                <span>{ item.track }</span>
                                <button><Link href={'/edit-music'}>edit</Link></button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};
export default Music;
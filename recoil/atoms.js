import { atom, atomFamily } from 'recoil';

const mockMusic = [
    {
        id: 0,
        path: 'https://musicmanager.com/1',
        title: 'spring',
        artist: 'vivaldi',
        album: 'four seasons',
        track: 'four seasons 1',
    },
    {
        id: 1,
        path: 'https://musicmanager.com/2',
        title: 'summer',
        artist: 'vivaldi',
        album: 'four seasons',
        track: 'four seasons 2',
    },
    {
        id: 2,
        path: 'https://musicmanager.com/3',
        title: 'bees',
        artist: 'Tchaikovsky',
        album: 'Symphony',
        track: 'Symphony 1',
    },
    {
        id: 3,
        path: 'https://musicmanager.com/4',
        title: 'ballet',
        artist: 'Tchaikovsky',
        album: 'Symphony',
        track: 'Symphony 2',
    },
];

export const musicListState = atom({
    key: 'musicListState',
    default: mockMusic.map(v => v.id),
});

export const selectedMusicState = atom({
    key: 'selectedMusicState',
    default: 0,
});

export const musicState = atomFamily({
    key: 'musicState',
    default: id => {
        return mockMusic.find(v => v.id === id);
    },
});



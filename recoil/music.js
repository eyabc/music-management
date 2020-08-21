import { atom } from 'recoil';


export const musicListAtom = atom({
    key: 'musicListState',
    default: undefined,
});

export const selectedMusicState = atom({
    key: 'selectedMusicState',
    default: 0,
});



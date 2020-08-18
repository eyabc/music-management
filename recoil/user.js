import { atom } from 'recoil';

export const userAtom = atom({
    key: 'userAtom',
    default: undefined
});

export const loadedAtom = atom({
    key: 'loadedAtom',
    default: false
});

export const loadingAtom = atom({
    key: 'loadingAtom',
    default: false
});


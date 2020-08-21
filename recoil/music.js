import { atom, selector } from 'recoil';


export const musicListAtom = atom({
    key: 'musicListState',
    default: undefined,
});

export const musicFilterAtom = atom({
    key: 'musicFilterAtom',
    default: '',
});

// export const filteredMusic = selector({
//     key: 'filteredMusic',
//     get: ({get}) => {
//
//         const musicList = get(musicListAtom);
//         const keyword = get(musicFilterAtom);
//         let regex = new RegExp(keyword);
//
//         return musicList.filter(music => regex.test(music));
//     }
// });

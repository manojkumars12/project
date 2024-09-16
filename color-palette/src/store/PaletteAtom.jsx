import { atomFamily, atom } from "recoil";

export const paletteStateFamily = atomFamily({
    key: 'paletteStateFamily',
    default: (id) => []
})

export const paletteIdsAtom = atom({
    key: 'paletteIdsAtom',
    default: [],
})
import { atomFamily, selectorFamily, atom } from "recoil"

export const personalInfoAtom = atom({
    key: "presonalInfoAtom",
    default: {
        name : "",
        number: "",
        startDate: "",
        endDate: "",
        currentlyWork: false
    }
})

export const professionalAtom = atom({
    key: "professionalAtom",
    default: {
        department: "",
        role: "",
    }
})
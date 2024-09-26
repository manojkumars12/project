import { atom, atomFamily, selector } from "recoil"

export const productAtomFamily = atomFamily({
    key: "productAtomFamily",
    default: null
})

export const productsIdAtom = atom({
    key: "productsIdAtom",
    default : []
})
// Define a selector to fetch all products
export const allProductsSelector = selector({
  key: 'allProductsSelector',
  get: async () => {
    // Fetch the data from the API
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data; // Return the fetched product list
  },
});

export const cartItemsId = atom({
    key: "cartItemsId",
    default: []
})

export const alertAtom = atom({
  key:"alertAtom",
  default: false
})

export const inputChange = atom({
  key: "inputChange",
  default: ""
})
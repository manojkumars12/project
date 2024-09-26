import { useRecoilCallback, useRecoilState , useRecoilValueLoadable,useRecoilValue, useSetRecoilState} from "recoil"
import CardComponent from "./CardComponent";
import React, { Suspense, useEffect } from "react";
import { alertAtom, productAtomFamily, productsIdAtom } from "../store/Store";

export default function Landing(){
  const [productsId, setProductsId] = useRecoilState(productsIdAtom);
  const setItemsInAtomFamily = useRecoilCallback(({set}) => (productslist) => {
      productslist.map((items) => set(productAtomFamily(items.id), items));
  },[])
  useEffect(() => {
      (async() => {
        const productsResponse = await fetch('https://dummyjson.com/products');
        const products = await productsResponse.json();
        const FilteredProductsId = products.products.map((items) => items.id);
        setProductsId(() => FilteredProductsId);
        setItemsInAtomFamily(products.products);
      })();
  }, [])
  return (
        <div className="grid grid-cols-4 gap-3">
          {productsId.map((ids) => <CardComponent key={ids} id={ids}/>)}
        </div>
    )
}

// export default function Landing() {
//     const [items, setItems] = useRecoilState(initialFullState);
//     const [items1, setItems1] = useRecoilState(itemsAtomFamily());
//     useEffect(() => {
//         fetch('https://fakestoreapi.com/products').then(async (res) => {
//            const data = await res.json();
//            {data.map((items, index) => {
//                 setItems1(items);
//            })}
//         })
//     }, [])
    
//     return <div className="grid grid-cols-4">
//         {items.map((item, index) => {
//             return <CardComponent key={index} item={item}/>
//         })}
//     </div>
// }

export  function Landing1() {
  // Use the selector to fetch the products
  const productsLoadable = useRecoilValueLoadable(allProductsSelector);

  // Handle loading and error states
  if (productsLoadable.state === 'loading') {
    return <div>Loading...</div>;
  }

  if (productsLoadable.state === 'hasError') {
    return <div>Error fetching products!</div>;
  }

  const products = productsLoadable.contents;

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h5>{product.title}</h5>
          <h5>{product.price}</h5>
        </div>
      ))}
    </div>
  );
}

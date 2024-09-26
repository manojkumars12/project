import { useRecoilCallback, useRecoilState, useRecoilValue } from "recoil";
import { useEffect , useState} from "react";
import { alertAtom, cartItemsId, productAtomFamily } from "../store/Store";

export default function CardComponent({id}){
    const cartVal = useRecoilValue(cartItemsId);
    const currProducts = useRecoilValue(productAtomFamily(id));
    const updateCartIds = useRecoilCallback(({set}) => (id) => {
        set(cartItemsId, (prev) => {return [...prev, id]});
    })
    const addToCart = ()=> {
        updateCartIds(id);
        notify("add");
    }
    const removeFromCart = () => {
        removeFromCartIds(id);
        notify("remove");
    }
    const removeFromCartIds = useRecoilCallback(({set}) => (id) => {
        const updatedCart = cartVal.filter((item) => item != id)
        set(cartItemsId, updatedCart);
    })
    const notify = (props) => {
        if (props == 'add'){
            alert("item added");
        }else if (props == 'remove'){
            alert("item removed")
        }
    }  
    return <div>
    <div className="rounded-lg hover:scale-110 ease-in-out duration-200 shadow-lg">
        <h5><img className="h-44 w-60" src={`${currProducts.images[0]}`}/></h5>
        <div className="flex flex-col">
            <h5 className="font-normal pl-2">{currProducts.title}</h5>
            <h5 className="pl-1">{currProducts.tags.map((tag) => tag+" ")}</h5>
            <div className="flex p-2">
                <h5 className="bg-green-700 text-white rounded-lg p-1">{currProducts.rating}</h5>
                <h5 className="p-1">{currProducts.reviews.length}</h5>
            </div>
            <h5 className="p-2">{currProducts.price}</h5>
            <h5 className="">{currProducts.category}</h5>
        </div>
        <div className="flex gap-3">
            <button className="bg-[#fb641b] rounded-md p-1 mb-3 text-white shadow-xl" onClick={addToCart}>ADD TO CART</button>
            <button className="bg-[#ff9f00] rounded-md p-1 mb-3 text-white shadow-xl" onClick={removeFromCart}>REMOVE FROM CART</button>
        </div>
    </div>
    </div>
}
import { useRecoilValue } from "recoil"
import { cartItemsId } from "../store/Store"
import CardComponent from "./CardComponent";

export default function Cart() {
    const cartIdVal = useRecoilValue(cartItemsId);   
    return <div className="grid grid-cols-3">
        {cartIdVal.map((id) => <CardComponent key={id} id={id}/>)}
    </div>
}
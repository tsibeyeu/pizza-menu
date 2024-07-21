/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

const UpdateItemQuantity = ({pizzaId, currentQuantity}) => {
    const dispatch=useDispatch();
  return (
    <div className="items-center flex gap-1 md:gap-3">
      <Button onClick={()=>dispatch(decreaseItemQuantity(pizzaId))} type="round">-</Button>
      <span className="text-sm">{currentQuantity}</span>
      <Button onClick={()=> dispatch(increaseItemQuantity(pizzaId))} type="round">+</Button>
    </div>
  );
};

export default UpdateItemQuantity;

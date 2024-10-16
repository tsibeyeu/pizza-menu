/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-4 space-y-1 ">
      <div className="flex items-center text-sm justify-between">
        <p>
          <span className="font-bold ">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? "Loading" : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;

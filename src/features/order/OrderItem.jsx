/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-4">
      <div className="flex items-center text-sm justify-between">
        <p>
          <span className="font-bold ">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;

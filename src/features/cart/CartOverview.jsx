import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="text-stone-200 bg-stone-800 uppercase py-4 px-4 sm:px-6 text-sm md:text-base flex items-center justify-between">
      <p className="text-stone-300  font-semibold space-x-4 sm:space-x-8">
        <span >23 pizzas</span>
        <span>$23.45</span>
      </p>
      
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;

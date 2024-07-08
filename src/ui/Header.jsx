import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="bg-yellow-400 inline-block uppercase px-4 py-3 border-b border-stone-400 sm:px-6 flex items-center justify-between">
      <Link to="/" className="tracking-widest">
        Del Pizza co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;

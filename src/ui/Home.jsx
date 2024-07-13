import CreateUser from "../features/user/CreateUser"
import { useSelector } from "react-redux";
import Button from "./Button";
function Home() {
  const currentUser =useSelector(state => state.user.username)

  return (
    <div className="my-10 text-center sm:my-16 px-4" >
      <h1 className="mb-8 text-xl font-semibold md:text-3xl ">
        The best pizza.
        <br />
        <span className="text-yellow-500">

        Straight out of the oven, straight to you.
        </span>
      </h1>
      {currentUser === "" ?<CreateUser/>:<Button to="/menu" type="primary">continue ordering ,{currentUser}</Button>}
      
    </div>
  );
}

export default Home;

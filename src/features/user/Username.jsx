import { useSelector } from "react-redux";

const Username = () => {
  const username = useSelector((state) => state.user.username);
  console.log(username)
  return (
    <div className=" hidden md:block text-sm font-semibold">{username}</div>
  );
};

export default Username;

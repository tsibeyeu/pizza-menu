/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();

  const className = "text-sm text-blue-400 hover:text-blue-600 hover:underline";
  if (to === "-1")
    return <button className={className} onClick={() => navigate(-1)}>&larr; Go back</button>;
  return (
    <div>
      <Link className={className} to={to}>
        {children}
      </Link>
    </div>
  );
};

export default LinkButton;

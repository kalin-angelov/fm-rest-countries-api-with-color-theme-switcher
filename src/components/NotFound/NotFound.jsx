import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>404</h1>
      <button type="button" onClick={() => {navigate("/")}}>Home Page</button>
    </div>
  );
};

export default NotFound;

import { Outlet } from "react-router-dom";
import Nav from "../components/Headers/Nav";

const MainLayOut = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet />
    </div>
  );
};

export default MainLayOut;

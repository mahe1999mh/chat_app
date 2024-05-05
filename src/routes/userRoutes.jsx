import { useRoutes } from "react-router-dom";
import SignIn from "../pages/Login";
import SignUp from "../pages/SignUp";
import Nav from "../dashboard/Nav";

const UserRoutes = () => {
  const routes = [
    {
      path: "/",
      element: <Nav />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ];
  const router = useRoutes(routes);

  return <>{router}</>;
};

export default UserRoutes;
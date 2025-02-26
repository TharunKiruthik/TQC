import { Navigate } from "react-router-dom";
import { SignIn } from "@/pages";
import { Admin, Dashboard, Page1, Page2, Student } from "@/pages/screens";
import { PATH } from "./path";

const privateRoutes = [
  {
    path: "/",
    element: <Navigate to={PATH.signIn} />,
  },
  {
    path: PATH.dashBoard,
    element: <Dashboard />,
  },
  {
    path: PATH.student,
    element: <Student />,
  },
  {
    path: PATH.admin,
    element: <Admin />,
  },
  {
    path: PATH.page1,
    element: <Page1 />,
  },
  {
    path: PATH.page2,
    element: <Page2 />,
  },
];

const publicRoutes = [
  {
    path: PATH.signIn,
    element: <SignIn />,
  },
];

export { privateRoutes, publicRoutes };

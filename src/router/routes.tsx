import { useRoutes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./allRouter";
import Layout from "@/layout/layout";

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: privateRoutes,
    },
    ...publicRoutes,
  ]);

  return routes;
};

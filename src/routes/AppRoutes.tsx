import { useRoutes } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import MainLayout from "@/layouts/MainLayout";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default function AppRoutes() {
  return useRoutes(routes);
}

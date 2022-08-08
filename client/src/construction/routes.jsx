import Home from "../pages/Home";
import Lessons from "../pages/Lessons";
import Teacher from "../pages/Teacher";

export const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/lessons",
    component: <Lessons />,
  },
  {
    path: "/teacher",
    component: <Teacher />,
  },
];

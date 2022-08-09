import Home from "../pages/Home";
import Lessons from "../pages/Lessons";
import Teacher from "../pages/Teacher";
import LessonsDetails from "../pages/LessonsDetails";

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
    protect: true,
  },
  {
    path: "/lessons/:id",
    component: <LessonsDetails />,
  },
];

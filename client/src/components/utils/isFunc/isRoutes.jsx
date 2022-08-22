import Home from "../../../pages/Home";
import Lessons from "../../../pages/Lessons";
import Teacher from "../../../pages/Teacher";
import LessonsDetails from "../../../pages/LessonsDetails";

export const isRoutes = [
  {
    path: "/",
    component: <Home />,
    protect: false,
  },
  {
    path: "/lessons",
    component: <Lessons />,
    protect: false,
  },
  {
    path: "/teacher",
    component: <Teacher />,
    protect: true,
  },
  {
    path: "/lessons/:id",
    component: <LessonsDetails />,
    protect: false,
  },
];

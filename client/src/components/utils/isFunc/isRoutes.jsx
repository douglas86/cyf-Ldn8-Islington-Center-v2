import Home from "../../../pages/Home";
import Lessons from "../../../pages/Lessons";
import Teacher from "../../../pages/teacher/Teacher";
import LessonsDetails from "../../../pages/LessonsDetails";

export const isRoutes = [
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

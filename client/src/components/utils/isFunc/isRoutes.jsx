import Home from "../../../pages/Home";
import Lessons from "../../../pages/Lessons";
import Teacher from "../../../pages/teacher/Teacher";
import LessonsDetails from "../../../pages/LessonsDetails";
import Quiz from "../../../pages/Quiz";
import EditLesson from "../../../pages/teacher/EditLesson";

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
  {
    path: "/edit-lesson/:id",
    component: <EditLesson />,
  },
  {
    path: "/questions/lessons/:id",
    component: <Quiz />,
  },
];

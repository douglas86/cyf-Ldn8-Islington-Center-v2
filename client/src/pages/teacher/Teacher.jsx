import { useState, useEffect } from "react";
//import RenderLesson from "./RenderLesson";
//import Form from "./Form";
//import AddQuestion from "./AddQuestion";
import axios from "axios";

const Teacher = () => {
  // const [visibleQuestions, setVisibleQuestions] = useState(false);
  // const [visibleLessons, setVisibleLessons] = useState(false);
   const [allLessons, setAllLessons] = useState([]);
   const [lessons, setLessons] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/lessons`).then((res) => {
      console.log("res", res)
      setLessons(res.data);
      setAllLessons(res.data);
    });
  }, []);
//console.log("lessons", lessons)
  // const deleteLessons = (arrLesson) => {
  //   axios
  //     .delete(`${process.env.REACT_APP_URL}/lessons/${arrLesson.id}`)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         axios.get(`${process.env.REACT_APP_URL}/lessons/`).then((res) => {
  //           setLessons(res.data);
  //         });
  //       }
  //     });
  // };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Our Expert Teachers</h1>
      <p className="lesson-plan">
        Here you can find a wide range of full lesson plans to use in your
        secondary classroom. All of our lessons are designed around themes
        engaging and relevant to secondary learners and can be used to
        complement your school curriculum, giving students an opportunity to
        develop their English language and skills in motivating and enjoyable
        ways. Written by young learner experts from around the world, our lesson
        plans are easy to use and aim to give your students the skills and
        confidence they need to enjoy learning English.
      </p>
      {/* <div className="add-question">
        <p onClick={() => setVisibleQuestions(true)}>Add Question</p>
        <p type="submit" onClick={() => setVisibleQuestions(false)}>
          Cancel
        </p>
      </div>
      {visibleQuestions && <AddQuestion />}
      <div>
        <div className="add-content">
          <p onClick={() => setVisibleLessons(true)}>Add Lesson</p>
          <p type="submit" onClick={() => setVisibleLessons(false)}>
            Cancel
          </p>
        </div>
        {visibleLessons && <Form setLessons={setLessons} />}
        <div className="lesson-wrapper">
          {lessons.map((lesson, i) => (
            <div className="lesson-card" key={i}>
              <RenderLesson
                lesson={lesson}
                isTeacher={true}
                deleteLessons={deleteLessons}
              />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Teacher;

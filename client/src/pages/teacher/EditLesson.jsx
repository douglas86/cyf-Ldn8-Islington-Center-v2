import { useEffect, useState } from "react";
import axios from "axios";
import "./Form.css";

function EditLesson() {
  const [questions, setQuestions] = useState([]);
  const [load, setLoad] = useState(false);
  const [inputs, setInputs] = useState({
    title: "",
    img_url: "",
    intro: "",
    summary: "",
    content: "",
    video_url: "",
  });

  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  const lesson_id = Number(urlParams.get("id"));

  const handleInputChange = (event, names) => {
    setInputs({ ...inputs, [names]: event.target.value });
  };
  const handleDelete = (Qid) => {
    axios
      .delete(`https://ldn8-islington.herokuapp.com/questions/${Qid}`)
      .then(() => {
        setLoad(true);
      }, []);
  };
  const editContent = (event) => {
    event.preventDefault();
    alert("You have submitted the edited form.");

    axios
      .put(`https://ldn8-islington.herokuapp.com/lessons/${lesson_id}`, inputs)
      .then(() => (window.location = "/teacher"));
  };

  useEffect(() => {
    axios
      .get(`https://ldn8-islington.herokuapp.com/lessons/${lesson_id}`)
      .then((res) => {
        setInputs(res.data[0]);
      });
  }, [lesson_id]);

  useEffect(() => {
    axios
      .get(
        `https://ldn8-islington.herokuapp.com/questions/lessons/${lesson_id}`
      )
      .then(
        (res) => {
          setQuestions(res.data);
        },
        [lesson_id]
      );
  }, [lesson_id, load]);

  return (
    <form onSubmit={editContent}>
      <input
        placeholder="Title"
        type="text"
        value={inputs.title}
        onChange={(event) => handleInputChange(event, "title")}
      />
      <input
        placeholder="Image Url"
        type="text"
        value={inputs.img_url}
        onChange={(event) => handleInputChange(event, "img_url")}
      />
      <input
        placeholder="Intro"
        type="text"
        value={inputs.intro}
        onChange={(event) => handleInputChange(event, "intro")}
      />

      <input
        placeholder="Summary"
        type="text"
        value={inputs.summary}
        onChange={(event) => handleInputChange(event, "summary")}
      />
      <textarea
        placeholder="Content"
        type="text"
        value={inputs.content}
        onChange={(event) => handleInputChange(event, "content")}
      />
      <input
        placeholder="Video URL"
        type="text"
        value={inputs.video_url}
        onChange={(event) => handleInputChange(event, "video_url")}
      />
      <section className="q-section">
        <h3>Questions For Lesson {lesson_id}</h3>
        {questions.map((q,key) => {
          return (
            <div key={key}>
              <div className="delete-question">{q.question}</div>
              <button className="q-delete" onClick={() => handleDelete(q.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </section>

      <input className="edit-lesson" type="submit" value="Edit Lesson" />
    </form>
  );
}

export default EditLesson;
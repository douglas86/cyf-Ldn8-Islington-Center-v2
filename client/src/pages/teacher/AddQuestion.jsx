import axios from "axios";
import { useState } from "react";
//import "./addQuestion.css";

function AddQuestion() {
  const [lesson, setLesson] = useState(1);

  const handleLessonChange = (e) => {
    let lesson_id = e.target.value;

    setLesson(lesson_id);
  };

  const [values, setValues] = useState({
    question: "",
    answer_1: "",
    answer_2: "",
    answer_3: "",
    answer_4: "",
    isCorrect_1: false,
    isCorrect_2: false,
    isCorrect_3: false,
    isCorrect_4: false,
  });

  const handleValueChange = (event, names) => {
    setValues({ ...values, [names]: event.target.value });
  };
  const handleRadioChange = (event, names) => {
    setValues({
      ...values,
      isCorrect_1: false,
      isCorrect_2: false,
      isCorrect_3: false,
      isCorrect_4: false,
      [names]: event.target.checked,
    });
  };

  const addQuestion = (event) => {
    event.preventDefault();

    const {
      question,
      answer_1,
      answer_2,
      answer_3,
      answer_4,
      isCorrect_1,
      isCorrect_2,
      isCorrect_3,
      isCorrect_4,
    } = values;

    axios
      .post(`${process.env.REACT_APP_URL}/questions`, {
        lesson_id: lesson,
        image: "",
        question: question,
        answers: [
          { answer: answer_1, is_correct: isCorrect_1 },
          { answer: answer_2, is_correct: isCorrect_2 },
          { answer: answer_3, is_correct: isCorrect_3 },
          { answer: answer_4, is_correct: isCorrect_4 },
        ],
      })
      .then((res) => (window.location = "/teacher"));
  };

  return (
    <div>
      <form onSubmit={addQuestion}>
        <select onChange={handleLessonChange}>
          <option value="1">Lesson One</option>
          <option value="2">Lesson Two</option>
          <option value="3">Lesson Three</option>
          <option value="4">Lesson Four</option>
          <option value="5">Lesson Five</option>
        </select>
        <input
          placeholder="Question"
          type="text"
          value={values.question}
          onChange={(event) => handleValueChange(event, "question")}
          required
        />
        <div className="answer-input" style={{ display: "flex" }}>
          <input
            name="radio"
            type="radio"
            value={values.isCorrect_1}
            onChange={(event) => handleRadioChange(event, "isCorrect_1")}
          />
          <input
            placeholder="Option One"
            type="text"
            value={values.answer_1}
            onChange={(event) => handleValueChange(event, "answer_1")}
          />
        </div>
        <div className="answer-input" style={{ display: "flex" }}>
          <input
            name="radio"
            type="radio"
            value={values.isCorrect_2}
            onChange={(event) => handleRadioChange(event, "isCorrect_2")}
          />
          <input
            placeholder="Option Two"
            type="text"
            value={values.answer_2}
            onChange={(event) => handleValueChange(event, "answer_2")}
          />
        </div>
        <div className="answer-input" style={{ display: "flex" }}>
          <input
            name="radio"
            type="radio"
            value={values.isCorrect_3}
            onChange={(event) => handleRadioChange(event, "isCorrect_3")}
          />
          <input
            placeholder="Option Three"
            type="text"
            value={values.answer_3}
            onChange={(event) => handleValueChange(event, "answer_3")}
          />
        </div>

        <div className="answer-input" style={{ display: "flex" }}>
          <input
            name="radio"
            type="radio"
            value={values.isCorrect_4}
            onChange={(event) => handleRadioChange(event, "isCorrect_4")}
          />
          <input
            placeholder="Option Four"
            type="text"
            value={values.answer_4}
            onChange={(event) => handleValueChange(event, "answer_4")}
          />
        </div>

        <input
          onClick={addQuestion}
          // className="submit-question"
          type="submit"
          value="Add question"
        />
      </form>
    </div>
  );
}

export default AddQuestion;

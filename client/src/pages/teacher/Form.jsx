import { useState } from "react";
import axios from "axios";

function Form({ setLessons }) {
  const [inputs, setInputs] = useState({
    title: "",
    img_url: "",
    intro: "",
    summary: "",
    content: "",
    video_url: "",
  });

  const handleInputChange = (event, names) => {
    setInputs({ ...inputs, [names]: event.target.value });
  };

  const addContent = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_URL}/lessons`, inputs)

      .then((res) => {
        if (res.status === 200) {
          axios.get(`${process.env.REACT_APP_URL}/lessons`).then((res) => {
            setLessons(res.data);
            setInputs({
              title: "",
              img_url: "",
              intro: "",
              summary: "",
              video_url: "",
            });
            window.location = "/teacher";
          });
        }
      });
  };

  const toTitles = (s) => {
    return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase().split(",")[0];
  };

  return (
    <form>
      {/* onSubmit={addContent} */}
      <>
        {Object.entries(inputs).map((items, index) => (
          <div key={index}>
            <textarea
              placeholder={toTitles(items.toString())}
              type="text"
              onChange={(event) =>
                handleInputChange(event, items.toString().split(",")[0])
              }
            />
          </div>
        ))}
        <input
          onClick={addContent}
          className="submit"
          type="submit"
          value="Add Lesson"
        />
      </>
    </form>
  );
}
export default Form;
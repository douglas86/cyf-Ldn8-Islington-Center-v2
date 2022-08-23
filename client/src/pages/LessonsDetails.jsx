import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const LessonsDetails = () => {
    const { id } = useParams();
  const data = useFetch(`/lessons/${id}`);

  const base_url = "https://www.youtube.com/embed/";

  return (
    <div>
      {Object.entries(data)
        .map(([key, value]) => {
          return (
            <div key={key} className="lessonContent">
              <div className="title-container">
                <h1>{value?.title}</h1>
              </div>

              <div className="lesson-details-body">

                <div>
                  <div className="lesson-content-container">
                    <div className="frame">
                      <iframe
                        className="iframe"
                        src={base_url + value?.video_url.slice(-11)}
                        title="YouTube video player"
                      ></iframe>
                    </div>
                    <p>{value?.summary}</p>
                  </div>
                  <Markdown className="markdown" children={value?.content} />
                  <div>
                    <p
                      style={{
                        color: "#178be9",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      Test your knowledge to Improve your english knowledge.
                      Sharpen your mind and your reading and speaking skills.
                      Get smarter with Islington quizzes.
                    </p>
                    <Button variant="outlined" size="large" fontSize="large">
                      <Link
                        style={{ fontSize: "2rem" }}
                        className="link"
                        to={`/questions/lessons/${value.id}`}
                      >
                        Take Quiz
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  )};
export default LessonsDetails;

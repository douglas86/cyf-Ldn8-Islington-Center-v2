import { useState } from "react";
import "./RenderLesson.css";
import { Link } from "react-router-dom";

const RenderLesson = ({ lesson, isTeacher, deleteLessons }) => {
  const [readMore, setReadMore] = useState(false);

  const content = (
    <div>
      <p className="content">{lesson?.content}</p>
    </div>
  );
  const WholeContent = readMore ? "Read Less << " : "Read More >> ";
  return (
    <section className="lesson-card">
      <h2>{lesson?.title}</h2>
      <a href={lesson?.img_url}>
        <img
          className="card-image"
          style={{ width: "150px", height: "70px" }}
          src={lesson?.img_url}
          alt={""}
        />
      </a>
      <h5 className="intro">{lesson?.intro}</h5>
      <p className="summary">{lesson?.summary}</p>
      <p
        className="content"
        onClick={() => {
          setReadMore(!readMore);
        }}
      >
        <span style={{ color: "green",fontSize:"18px", fontWeight:"bold" }}>{WholeContent}</span>
      </p>

      {readMore && content}
      <iframe
        src={`https://www.youtube.com/embed/${
          lesson?.video_url.split("v=")[1]
        }`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width="300"
        height="150px"
      ></iframe>
      <div>
        {isTeacher && (
          <button className="btn-1" onClick={() => deleteLessons(lesson)}>
            Delete
          </button>
        )}
        {isTeacher && (
          <button style={{ backgroundColor: "#1a8731" }} className="btn-2">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={`/edit-lesson/${lesson?.id}?id=${lesson?.id}`}
            >
              Edit
            </Link>
          </button>
        )}
      </div>
    </section>
  );
};
export default RenderLesson;

import Cards from "../components/organism/Cards";
import { toHeading } from "../components/atom/toHeading";

const Lessons = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        {toHeading("Lessons")}
        <Cards />
      </div>
    </>
  );
};

export default Lessons;

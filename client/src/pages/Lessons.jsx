import Cards from "../components/UI/organism/Cards";
import { toHeading } from "../components/utils/toHeading";

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

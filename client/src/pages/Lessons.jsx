import Cards from "../components/UI/organism/Cards";
import { toHeading } from "../components/utils/toFunc/toHeading";

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

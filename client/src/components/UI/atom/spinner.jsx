import { Spinner } from "react-bootstrap";

export const spinner = () => (
  <div style={{ textAlign: "center", margin: "3rem" }}>
    <Spinner
      animation="border"
      variant="success"
      style={{ width: "4rem", height: "4rem" }}
    />
  </div>
);

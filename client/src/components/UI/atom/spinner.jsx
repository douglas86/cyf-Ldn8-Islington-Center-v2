import { Spinner } from "react-bootstrap";

import styles from "./styles.module.css";

export const spinner = () => (
  <div className={styles.spinner}>
    <Spinner
      animation="border"
      variant="success"
      style={{ width: "4rem", height: "4rem" }}
    />
  </div>
);

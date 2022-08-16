import { Link } from "react-router-dom";

import styles from "./styles.module.css";

export const toLink = (destination, description) => (
  <Link className={styles.link} to={destination}>
    {description}
  </Link>
);

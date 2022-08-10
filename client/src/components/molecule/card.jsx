import { Link } from "react-router-dom";

import { toHeading } from "../atom/toHeading";

import styles from "./styles/card.module.css";

export const card = ({ id, title, img_url, summary }) => (
  <>
    {toHeading(title)}
    <img className={styles.image_card} src={img_url} alt="avatar_img" />
    <p className={styles.disc}>{summary}</p>
    <button className={styles.cardButton}>
      <Link className={styles.link} to={`/lessons/${id}`}>
        View Lesson
      </Link>
    </button>
  </>
);

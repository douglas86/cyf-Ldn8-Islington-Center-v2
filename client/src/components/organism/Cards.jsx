import { useEffect, useState } from "react";

import { card } from "../molecule/card";
import { spinner } from "../atom/spinner";

import styles from "./styles/Cards.module.css";

const Cards = () => {
  const [lessons, setLessons] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/lessons`)
      .then(async (items) => {
        const results = await items.json();
        setLessons(results);
      })
      .catch((err) => console.log("err", err));
  }, []);

  console.log("lessons", lessons);

  return (
    <div className={styles.cardContainer}>
      {Object.entries(lessons).map(([key, values]) => (
        <div key={key} className={styles.card}>
          {values ? card(values) : spinner()}
        </div>
      ))}
    </div>
  );
};

export default Cards;

import styles from "./styles/Cards.module.css";

import useFetch from "../../hooks/useFetch";

import { card } from "../molecule/card";
import { spinner } from "../atom/spinner";

const Cards = () => {
  const data = useFetch(`${process.env.REACT_APP_URL}/lessons`);

  return (
    <div className={styles.cardContainer}>
      {Object.entries(data).map(([key, values]) => (
        <div key={key} className={styles.card}>
          {values ? card(values) : spinner()}
        </div>
      ))}
    </div>
  );
};

export default Cards;

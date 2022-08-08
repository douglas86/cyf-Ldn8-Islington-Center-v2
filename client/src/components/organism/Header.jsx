import { toLink } from "../atom/toLink";
import { toHeading } from "../atom/toHeading";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.link}>
          {toLink("/", toHeading("Islington Center Learning Portal"))}
        </div>
      </div>
    </div>
  );
};

export default Header;

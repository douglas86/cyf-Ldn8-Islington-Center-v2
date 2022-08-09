import { toLink } from "../atom/toLink";
import { toHeading } from "../atom/toHeading";

import styles from "./styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        {toLink("/", toHeading("Islington Center Learning Portal"))}
      </div>

      <ul className={styles.nav_menu}>
        {toLink("/lessons", <li>Lessons</li>)}
        {toLink("/teacher", <li>Teacher</li>)}
      </ul>
    </div>
  );
};

export default Header;

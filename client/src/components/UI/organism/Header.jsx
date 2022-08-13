import { toLink } from "../../utils/toFunc/toLink";
import { toHeading } from "../../utils/toFunc/toHeading";

import styles from "./styles/Header.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        {toLink("/", toHeading("Islington Center Learning Portal"))}
      </div>

      <ul className={styles.nav_menu}>
        {toLink("/lessons", <li>Lessons</li>)}
        {toLink("/teacher", <li>Teacher</li>)}
        {!isAuthenticated
          ? toLink(
              "/teacher",
              <li onClick={() => loginWithRedirect()}>Log In</li>
            )
          : toLink(
              "/",
              <li onClick={() => logout({ returnTo: window.location.origin })}>
                Logout
              </li>
            )}
      </ul>
    </div>
  );
};

export default Header;

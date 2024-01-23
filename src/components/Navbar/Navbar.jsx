import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <Link to="/">
                    <li className={styles.li}>
                        <p className={styles.p}>Home</p>
                    </li>
                </Link>
                <Link to="/contact">
                    <li className={styles.li}>
                        <p className={styles.p}>Contact</p>
                    </li>
                </Link>
                <Link to="/posts">
                    <li className={styles.li}>
                        <p className={styles.p}>Posts</p>
                    </li>
                </Link>
            </ul>
        </nav>
    );
}
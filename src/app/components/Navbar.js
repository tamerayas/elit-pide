import Link from "next/link";
import styles from "./styles.module.scss"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                LOGO
            </Link>
        </nav>
    );
}

export default Navbar;
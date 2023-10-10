import Image from "next/image";
import styles from "./styles.module.scss";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Image
                alt="HackIllinois Logo"
                src="/logo.svg"
                width="228"
                height="75"
            />
        </nav>
    );
};

export default Navbar;

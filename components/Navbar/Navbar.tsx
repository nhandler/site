import Image from "next/image";
import styles from "./styles.module.scss";
import Logo from "@/public/logo.svg";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Image alt="HackIllinois Logo" src={Logo} />
        </nav>
    );
};

export default Navbar;

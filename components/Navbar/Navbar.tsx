import Image from "next/image";
import styles from "./styles.module.scss";
import Logo from "@/public/logo.svg";

type NavbarItem = {
    title: string;
    link: string;
};

const navbar_items: NavbarItem[] = [
    {
        title: "Schedule",
        link: "/mentors"
    },
    {
        title: "Mentors",
        link: "/mentors"
    },
    {
        title: "Prizes",
        link: "/mentors"
    },
    {
        title: "Map",
        link: "/mentors"
    },
    {
        title: "Travel",
        link: "/mentors"
    }
];

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Image alt="HackIllinois Logo" src={Logo} />
            <ul>
                {navbar_items.map((item, index) => (
                    <li key={item.title}>
                        <a href={item.link}>{item.title}</a>
                    </li>
                ))}
                <li>
                    <a>
                        <button className={styles.knightButton}>
                            <div className={styles.buttonBackground}></div>
                            <div className={styles.buttonContent}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17"
                                    height="20"
                                    viewBox="0 0 17 20"
                                    fill="none"
                                >
                                    <path
                                        d="M6.5 0.5L8.25559 5.24441L13 7L8.25559 8.75559L6.5 13.5L4.74441 8.75559L0 7L4.74441 5.24441L6.5 0.5Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M13 11.5L14.0804 14.4196L17 15.5L14.0804 16.5804L13 19.5L11.9196 16.5804L9 15.5L11.9196 14.4196L13 11.5Z"
                                        fill="white"
                                    />
                                </svg>

                                <span>Knights</span>
                            </div>
                        </button>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

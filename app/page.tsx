import React from "react";
import styles from "./page.module.scss";
import Hero from "@/components/Home/Hero/hero";

const Home: React.FC = () => {
    return (
        <main className={styles.main}>
            <Hero/>
        </main>
    );
}

export default Home; 
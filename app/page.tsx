import React from "react";
import styles from "./page.module.scss";
import Hero from "@/components/Home/Hero/hero";
import Events from "@/components/Home/Events/events";

const Home: React.FC = () => {
    return (
        <main className={styles.main}>
            <Hero />
            <Events />
        </main>
    );
};

export default Home;

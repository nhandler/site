import React from "react";
import styles from "./page.module.scss";
import Hero from "@/components/Home/Hero/hero";
import Faq from "@/components/Home/Faq/Faq";

const Home: React.FC = () => {
    return (
        <main className={styles.main}>
            <Hero/>
            <Faq/>
        </main>
    );
}

export default Home; 
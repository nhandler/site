import React from "react";
import styles from "./page.module.scss";

import Hero from "@/components/Home/Hero/hero";
import Events from "@/components/Home/Events/events";
import JoinUs from "@/components/Home/JoinUs/JoinUs";
import Sponsors from "@/components/Home/Sponsors/sponors";
import Footer from "@/components/Footer/Footer";
import DaveHome from "@/components/Home/DaveHome/DaveHome";
import FAQ from "@/components/Home/Faq/Faq";


const Home: React.FC = () => {
    return (
        <main className={styles.main}>
            <Hero />
            <Events />
            <Sponsors />
            <JoinUs />
            <FAQ />
            <DaveHome />
            <Footer />
        </main>
    );
};

export default Home;

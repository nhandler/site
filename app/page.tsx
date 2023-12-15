import React from "react";
import styles from "./page.module.scss";

import Hero from "@/components/Home/Hero/hero";
import Faq from "@/components/Home/Faq/Faq";
import Events from "@/components/Home/Events/events";
import JoinUs from "@/components/Home/JoinUs/JoinUs";
import Footer from "@/components/Footer/Footer";
import HackKnights from "@/components/Home/HackKnights/HackKnights";

const Home: React.FC = () => {
    return (
        <main className={styles.main}>
            <Hero />
            <Events />
            <HackKnights />
            <JoinUs />
            <Faq />
            {/* <DaveHome /> */}
            <Sponsors />
            <Footer />
        </main>
    );
};

export default Home;

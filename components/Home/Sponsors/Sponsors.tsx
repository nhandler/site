"use client";
import React from "react";
import styles from "./Sponsors.module.scss";

const Sponsors: React.FC = () => {
    return (
        <section className={styles.container}>
            <div className={styles.background}>
                <img src="/home/sponsors/background.svg" />
            </div>
            <div className={styles.art}>
                <div className={styles.gizmo}>
                    <img src="/home/sponsors/gizmo.svg" />
                </div>
            </div>
        </section>
    );
};

export default Sponsors;

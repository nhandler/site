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
                <div className={styles.shelf}>
                    <img src="/home/sponsors/potions/bottle-sponsors.svg" />
                    <img src="/home/sponsors/potions/mushroom-plant.svg" />
                    <img src="/home/sponsors/potions/lamp.svg" />
                </div>
                <div className={styles.potions}>
                <img src="/home/sponsors/potions/bottle-red.svg" />
                <img src="/home/sponsors/potions/bottle-green.svg" />
                <img src="/home/sponsors/potions/bottle-orange.svg" />
                <img src="/home/sponsors/potions/bottle-blue.svg" />
                <img src="/home/sponsors/potions/bottle-yellow.svg" />
                <img src="/home/sponsors/potions/bottle-purple.svg" />
                </div>
                <div className={styles.gizmo}>
                    <img src="/home/sponsors/gizmo.svg" />
                </div>
            </div>
        </section>
    );
};

export default Sponsors;

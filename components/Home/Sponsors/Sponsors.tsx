"use client";
import React from "react";
import styles from "./Sponsors.module.scss";

const Sponsors: React.FC = () => {
    return (
        <section className={styles.container}>
            <div className={styles.background}>
                <img src="/home/sponsors/background3.svg" />
            </div>
            <div className={styles.art}>
                <div>
                    <div>
                        <div>
                            <img src="/home/sponsors/potions/bottle-sponsors.svg" />
                            <div>
                                <span className={styles.text}>Sponsors</span>
                            </div>
                        </div>
                        <img src="/home/sponsors/potions/mushroom-plant.svg" />
                        <img src="/home/sponsors/potions/lamp.svg" />
                    </div>
                    <img src="/home/sponsors/shelf.svg" />
                </div>
                <div className={styles.potions}>
                    <img src="/home/sponsors/potions/bottle-red.svg" />
                    <img src="/home/sponsors/potions/bottle-green.svg" />
                    <img src="/home/sponsors/potions/bottle-orange.svg" />
                    <img src="/home/sponsors/potions/bottle-blue.svg" />
                    <img src="/home/sponsors/potions/bottle-yellow.svg" />
                    <img src="/home/sponsors/potions/bottle-purple.svg" />
                </div>
                {/* <div className={styles.gizmo}>
                    <img src="/home/sponsors/gizmo.svg" />
                </div> */}
            </div>
        </section>
    );
};

export default Sponsors;

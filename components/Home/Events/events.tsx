import { FC } from "react";

import styles from "./styles.module.scss";

import Image from "next/image";

import BrFold from "@/public/home/events/br-fold.svg";
import TlFold from "@/public/home/events/tl-fold.svg";
import TrFold from "@/public/home/events/tr-fold-modified.svg";
import Nail from "@/public/home/events/nail.svg";
import Butterfly from "@/public/home/events/butterfly.svg";
import Caterpillar from "@/public/home/events/caterpillar.svg";
import Ladybug from "@/public/home/events/ladybug.svg";

const Hero: FC = () => {
    return (
        <section className={styles.eventsMain}>
            <div className={styles.topPlankWrapper}>
                <Image
                    alt="bottom plank"
                    src="/home/events/wood-plank.png"
                    fill={true}
                    className={styles.plankImage}
                />
                <div className={styles.leftNail}>
                    <Image
                        alt="nail"
                        src={Nail}
                        fill={true}
                        aria-hidden="true"
                    />
                </div>
                <div className={styles.rightNail}>
                    <Image
                        alt="nail"
                        src={Nail}
                        fill={true}
                        aria-hidden="true"
                    />
                </div>
            </div>

            <div className={styles.sheet}>
                <h1 className={styles.eventsLabel}>{"The Event"}</h1>
                <p className={styles.eventsDescription}>
                    {`HackIllinois is University of Illinois at Urbana-Champaign's
                    premiere collegiate hackathon. This year, we're celebrating
                    our 10th Hackiversary!`}
                </p>
                <p className={styles.eventsDescription}>
                    {`Join us in-person on February 24th to February 26th at the
                    Siebel Center for Computer Science and CIF! Participants can
                    work individually or in teams to submit projects to a
                    specific track for a chance to win prizes. Let's make
                    memories!`}
                </p>
                <div className={styles.brFoldWrapper}>
                    <Image
                        alt="fold"
                        src={BrFold}
                        fill={true}
                        aria-hidden="true"
                    />
                </div>
                <div className={styles.tlFoldWrapper}>
                    <Image
                        alt="fold"
                        src={TlFold}
                        fill={true}
                        aria-hidden="true"
                    />
                </div>
                <div className={styles.trFoldWrapper}>
                    <Image
                        alt="fold"
                        src={TrFold}
                        fill={true}
                        aria-hidden="true"
                    />
                </div>
                <div className={styles.butterflyWrapper}>
                    <Image
                        alt="butterfly"
                        src={Butterfly}
                        fill={true}
                        aria-hidden="true"
                    />
                </div>
                <div className={styles.ladybugWrapper}>
                    <Image
                        alt="ladybug"
                        src={Ladybug}
                        fill={true}
                        aria-hidden="true"
                    />
                </div>
            </div>

            <div className={styles.bottomPlankWrapper}>
                <Image
                    alt="bottom plank"
                    src="/home/events/wood-plank.png"
                    fill={true}
                    className={styles.plankImage}
                />
                <div className={styles.leftNail}>
                    <Image
                        alt="nail"
                        src={Nail}
                        fill={true}
                        aria-hidden="true"
                    />
                </div>
                <div className={styles.rightNail}>
                    <Image
                        alt="nail"
                        src={Nail}
                        fill={true}
                        aria-hidden="true"
                    />
                </div>
                <div className={styles.caterpillarWrapper}>
                    <Image
                        alt="caterpillar"
                        src={Caterpillar}
                        fill={true}
                        aria-hidden="true"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;

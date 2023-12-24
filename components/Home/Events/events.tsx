import { FC } from "react";

import styles from "./styles.module.scss";

import LeftPages from "@/public/home/events/left-pages.svg";
import RightPages from "@/public/home/events/right-pages.svg";
import TopRightFold from "@/public/home/events/top-right-fold.svg";
import TopLeftFold from "@/public/home/events/top-left-fold.svg";

import Image from "next/image";

import { event_description } from "@/modules/EventsData";
import { Bushes, Plank } from "@/components/Home/Events/event-svgs";

const Hero: FC = () => {
    return (
        <section className={styles.eventsMain}>
            <div className={styles.topPlankWrapper}>
                <Plank />
            </div>

            <div className={styles.leftPageWrapper}>
                <Image
                    alt="left pages"
                    src={LeftPages}
                    width={283}
                    height={442}
                />
            </div>
            <div className={styles.rightPageWrapper}>
                <Image
                    alt="right pages"
                    src={RightPages}
                    width={254}
                    height={532}
                />
            </div>

            <div className={styles.sheetWrapper}>
                <div className={styles.topRightFoldWrapper}>
                    <Image
                        alt="top right fold"
                        aria-hidden
                        src={TopRightFold}
                        width={407}
                        height={168}
                    />
                </div>
                <div className={styles.topLeftFoldWrapper}>
                    <Image
                        alt="top left fold"
                        aria-hidden
                        src={TopLeftFold}
                        width={73}
                        height={68}
                    />
                </div>
                <div className={styles.sheet}>
                    <h1 className={styles.eventsLabel}>{"The Event"}</h1>
                    <p className={styles.eventsDescription}>
                        {event_description.description_1}
                    </p>
                    <p className={styles.eventsDescription}>
                        {event_description.description_2}
                    </p>
                    <p className={styles.eventsTagline}>
                        <i>{event_description.description_3}</i>
                    </p>
                </div>
            </div>

            <div className={styles.bottomPlankWrapper}>
                <Bushes />
            </div>
        </section>
    );
};

export default Hero;

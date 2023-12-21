"use client"
import styles from './styles.module.scss'

import Pages from '@/public/home/faq/pages.svg'
import BookBorder from '@/public/home/faq/borders.svg'
import FAQHeader from '@/public/home/faq/faq header.svg'
import Image from 'next/image'

import BefDur from '@/public/home/faq/faq-lotties/Bef-Dur_Spellbook.json'
import BefGen from '@/public/home/faq/faq-lotties/Bef-Gen_Spellbook.json'
import DurGen from '@/public/home/faq/faq-lotties/Dur-Gen_Spellbook.json'
import DurBef from "@/public/home/faq/faq-lotties/Dur-Bef_Spellbook.json"
import GenBef from '@/public/home/faq/faq-lotties/Gen-Bef_Spellbook.json'
import GenDur from '@/public/home/faq/faq-lotties/Gen-Dur_Spellbook.json'

import { useRef, useState, useEffect } from 'react';
import Lottie, { LottieRefCurrentProps, useLottie } from 'lottie-react';

const FAQ = () => {
    const [clicked, setClicked] = useState(0);
    const [initialDisplay, setInitialDisplay] = useState(true);
    const [gbDisplay, setGbDisplay] = useState(false);
    const [gdDisplay, setGdDisplay] = useState(false);

    const [bdDisplay, setBdDisplay] = useState(false);
    const [bgDisplay, setBgDisplay] = useState(false);

    const [dgDisplay, setDgDisplay] = useState(false);
    const [dbDisplay, setDbDisplay] = useState(false);

    const handleClick = (id: number) => {
        
        console.log("handling click for tab " + id);
        if (initialDisplay) {
            if (id == 1) {
                setGbDisplay(true);
                setInitialDisplay(false);
            } else if (id == 2) {
                setGdDisplay(true);
                setInitialDisplay(false);
            }
        }
        if (gbDisplay) {
            if (id == 2) {
                setBdDisplay(true);
                setGbDisplay(false);
            } else if (id == 0) {
                setBgDisplay(true);
                setGbDisplay(false);
            }
        } else if (gdDisplay) {
            if (id == 1) {
                setDbDisplay(true);
                setGdDisplay(false);
            } else if (id == 0) {
                setDgDisplay(true);
                setGdDisplay(false);
            }
        } else if (bdDisplay) {
            if (id == 0) {
                setDgDisplay(true);
                setBdDisplay(false);
            } else if (id == 1) {
                setDbDisplay(true);
                setBdDisplay(false);
            }
        } else if (bgDisplay) {
            if (id == 1) {
                setGbDisplay(true);
                setBgDisplay(false);
            } else if (id == 2) {
                setGdDisplay(true);
                setBgDisplay(false);
            }
        } else if (dgDisplay) {
            if (id == 1) {
                setGbDisplay(true);
                setDgDisplay(false);
            } else if (id == 2) {
                setGdDisplay(true);
                setDgDisplay(false);
            }
        } else if (dbDisplay) {
            if (id == 0) {
                setBgDisplay(true);
                setDbDisplay(false);
            } else if (id == 2) {
                setBdDisplay(true);
                setDbDisplay(false);
            }
        }
    }
    useEffect(() => {
        const general = document.getElementById("general");
        general?.addEventListener('click', () => handleClick(0));
        const before = document.getElementById("before");
        before?.addEventListener('click', () => handleClick(1));
        const during = document.getElementById("during");
        during?.addEventListener('click', () => handleClick(2));
        setClicked(clicked + 1);

    }, [clicked]);
        
    return ( 
        <section className={styles.faq}>
            <div className={styles.faqContainer}>
                <div className={styles.faqItemContainer1}>
                    <Image src={FAQHeader} alt="FAQ Header" className={styles.faqHeader} />
                </div>
            
                <div className={styles.faqLotties}>
                    { initialDisplay && <Lottie 
                        animationData={GenBef}
                        loop={false}
                        autoplay={false}
                    /> }
                    { gbDisplay && <Lottie 
                        animationData={GenBef}
                        loop={false}
                        autoplay={true}
                    /> }
                    { gdDisplay && <Lottie 
                        animationData={GenDur}
                        loop={false}
                        autoplay={true}
                    /> }
                    { bdDisplay && <Lottie 
                        animationData={BefDur}
                        loop={false}
                        autoplay={true}
                        /> }
                    { bgDisplay && <Lottie
                        animationData={BefGen}
                        loop={false}
                        autoplay={true}
                    /> }
                    { dgDisplay && <Lottie 
                        animationData={DurGen}
                        loop={false}
                        autoplay={true}
                    /> }
                    { dbDisplay && <Lottie 
                        animationData={DurBef}
                        loop={false}
                        autoplay={true}
                    /> }

                </div>
            </div>
        </section>
    );
}

export default FAQ;
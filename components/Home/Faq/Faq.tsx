"use client"
import styles from './styles.module.scss'

import FAQHeader from '@/public/home/faq/faq header.svg'
import Image from 'next/image'

import { BefDur, BefGen, DurGen, DurBef, GenBef, GenDur } from '@/public/home/faq/faq-lotties-spellbook/index'
import { BefDur2, BefGen2, DurGen2, DurBef2, GenBef2, GenDur2 } from '@/public/home/faq/faq-lotties-scroll/index'

import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

const FAQ = () => {
    const isMobile = () => {
        if (typeof window !== "undefined") {
            console.log("window width: " + window.innerWidth)
            return window.innerWidth <= 768;
        }
    }

    // const [mobile, setMobile] = useState(isMobile());

    // const usebd = mobile ? BefDur2 : BefDur;
    // const usebg = mobile ? BefGen2 : BefGen;
    // const usedg = mobile ? DurGen2 : DurGen;
    // const usedb = mobile ? DurBef2 : DurBef;
    // const usegb = mobile ? GenBef2 : GenBef;
    // const usegd = mobile ? GenDur2 : GenDur;

    const usebd = BefDur2;
    const usebg = BefGen2;
    const usedg = DurGen2;
    const usedb = DurBef2;
    const usegb = GenBef2;
    const usegd = GenDur2;

    // const usebd = BefDur;
    // const usebg = BefGen;
    // const usedg = DurGen;
    // const usedb = DurBef;
    // const usegb = GenBef;
    // const usegd = GenDur;
    
    const [display, setDisplay] = useState(usedg);

    const handleClick = (id: number) => {
        console.log("handling click for tab " + id);
        if (display == usegb) {
            if (id == 2) {
                setDisplay(usebd);
            } else if (id == 0) {
                setDisplay(usebg);
            }
        } else if (display == usegd) {
            if (id == 1) {
                setDisplay(usedb);
            } else if (id == 0) {
                setDisplay(usedg);
            }
        } else if (display == usebd) {
            if (id == 0) {
                setDisplay(usedg);
            } else if (id == 1) {
                setDisplay(usedb);
            }
        } else if (display == usebg) {
            if (id == 1) {
                setDisplay(usegb);
            } else if (id == 2) {
                setDisplay(usegd);
            }
        } else if (display == usedg) {
            if (id == 1) {
                setDisplay(usegb);
            } else if (id == 2) {
                setDisplay(usegd);
            }
        } else if (display == usedb) {
            if (id == 0) {
                setDisplay(usebg);
            } else if (id == 2) {
                setDisplay(usebd);
            }
        } 
    }

    useEffect(() => {
        const general = document.getElementById("general");
        const before = document.getElementById("before");
        const during = document.getElementById("during");

        const handleGeneralClick = () => handleClick(0);
        const handleBeforeClick = () => handleClick(1);
        const handleDuringClick = () => handleClick(2);

        general?.addEventListener('click', handleGeneralClick);
        before?.addEventListener('click', handleBeforeClick);
        during?.addEventListener('click', handleDuringClick);
        
        return () => {
            general?.removeEventListener('click', handleGeneralClick);
            before?.removeEventListener('click', handleBeforeClick);
            during?.removeEventListener('click', handleDuringClick);
        }

    }, [display]);
        
    return ( 
        <section className={styles.faq}>
            <div className={styles.faqContainer}>
                <div className={styles.faqItemContainer1}>
                    <Image src={FAQHeader} alt="FAQ Header" className={styles.faqHeader} />
                </div>
            
                <div className={styles.faqLotties}>
                    { <Lottie 
                        animationData={display}
                        loop={false}
                        autoplay={true}
                    />
                    }
                    
                </div>
            </div>
        </section>
    );
}

export default FAQ;
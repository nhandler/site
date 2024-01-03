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
            return window.innerWidth <= 770;
        }
    }

    const [mobile, setMobile] = useState(isMobile());
    const handleResize = () => {
        const newMobile = isMobile();
        console.log("mobile: " + newMobile);
    
        const newUsebd = newMobile ? BefDur2 : BefDur;
        const newUsebg = newMobile ? BefGen2 : BefGen;
        const newUsedg = newMobile ? DurGen2 : DurGen;
        const newUsedb = newMobile ? DurBef2 : DurBef;
        const newUsegb = newMobile ? GenBef2 : GenBef;
        const newUsegd = newMobile ? GenDur2 : GenDur;
    
        setMobile(newMobile);
        setUsebd(newUsebd);
        setUsebg(newUsebg);
        setUsedg(newUsedg);
        setUsedb(newUsedb);
        setUsegb(newUsegb);
        setUsegd(newUsegd);
    
        if (display === usegb) {
            console.log("display is usegb");
            setDisplay(newUsegb);
        } else if (display === usegd) {
            console.log("display is usegd");
            setDisplay(newUsegd);
        } else if (display === usebd) {
            console.log("display is usebd");
            setDisplay(newUsebd);
        } else if (display === usebg) {
            console.log("display is usebg");
            setDisplay(newUsebg);
        } else if (display === usedg) {
            console.log("display is usedg");
            setDisplay(newUsedg);
        } else if (display === usedb) {
            console.log("display is usedb");
            setDisplay(newUsedb);
        } 
    }

    const [usebd, setUsebd] = useState(mobile ? BefDur2 : BefDur);
    const [usebg, setUsebg] = useState(mobile ? BefGen2 : BefGen);
    const [usedg, setUsedg] = useState(mobile ? DurGen2 : DurGen);
    const [usedb, setUsedb] = useState(mobile ? DurBef2 : DurBef);
    const [usegb, setUsegb] = useState(mobile ? GenBef2 : GenBef);
    const [usegd, setUsegd] = useState(mobile ? GenDur2 : GenDur);
    
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

        window.addEventListener('resize', handleResize);
        
        return () => {
            general?.removeEventListener('click', handleGeneralClick);
            before?.removeEventListener('click', handleBeforeClick);
            during?.removeEventListener('click', handleDuringClick);
            window.removeEventListener('resize', handleResize);
        }

    }, [display, mobile]);
        
    return ( 
        <section className={styles.faq}>
            <div className={styles.faqContainer}>
                <div className={styles.faqItemContainer1}>
                    <Image src={FAQHeader} alt="FAQ Header" className={styles.faqHeader} />
                </div>

                <div className={styles.faqLotties}>
                    <div className={mobile ? styles.faqScroll : styles.faqSpellbook}>
                        { <Lottie 
                            animationData={display}
                            loop={false}
                            autoplay={true}
                        />
                        }
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default FAQ;
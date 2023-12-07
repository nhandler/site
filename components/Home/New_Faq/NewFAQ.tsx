"use client"
import styles from './styles.module.scss'
import Book from '@/public/home/new_faq/book (5).svg'
import FAQHeader from '@/public/home/new_faq/faq header.svg'
import faqs from "../../../modules/FaqData";
import Image from 'next/image'
import { useState } from 'react';

const NewFAQ = () => {
    const [faqSectionIndex, setFaqSectionIndex] = useState(0);
    const [generalClicked, setGeneralClicked] = useState(true);
    const [beforeClicked, setBeforeClicked] = useState(false);
    const [duringClicked, setDuringClicked] = useState(false);
    
    const handleClick = (id: string) => {
        if (id === "general") {
            setFaqSectionIndex(0);
            setGeneralClicked(true);
            setBeforeClicked(false);
            setDuringClicked(false);
        } else if (id === "before") {
            setFaqSectionIndex(1);
            setGeneralClicked(false);
            setBeforeClicked(true);
            setDuringClicked(false);
        } else {
            setFaqSectionIndex(2);
            setGeneralClicked(false);
            setBeforeClicked(false);
            setDuringClicked(true);
        }
    };

    return ( 
        <section className={styles.faq}>
            <div className={styles.faqContainer}>
                <div className={styles.faqItemContainer1}>
                    <Image src={FAQHeader} alt="FAQ Header" className={styles.faqHeader} />

                </div>

                <div className={styles.faqItemContainer2}>
                    <Image src={Book} alt="Book" className={styles.faqBook} />
                    <div className={styles.buttonContainer}>
                        <button 
                        onClick={() => handleClick("general")} 
                        className={generalClicked ? styles.generalClicked : styles.generalButton}>
                            <h3>
                                GENERAL
                            </h3>
                        </button>

                        <button 
                        onClick={() => handleClick("before")} 
                        className={beforeClicked ? styles.beforeClicked : styles.beforeButton}>
                            <h3>
                                BEFORE
                            </h3>
                        </button>

                        <button 
                        onClick={() => handleClick("during")} 
                        className={duringClicked ? styles.afterClicked : styles.afterButton}>
                            <h3>
                                AFTER
                            </h3>
                        </button>
                    </div> 
        
                    
                    
                    <div className={styles.faqTextContainer}>
                        <div className={styles.faqContent}>
                            {faqs[faqSectionIndex].sectionFaqs.map(
                                ({ question, answer }, i) => (
                                    <div
                                        key={i}
                                        className={styles.faqContentColumn}
                                    >
                                        <h3>{question}</h3>
                                        {answer}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    
                </div>

            </div>
        </section>
    );
}

export default NewFAQ;
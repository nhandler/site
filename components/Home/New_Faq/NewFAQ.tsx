"use client"
import styles from './styles.module.scss'
import Book from '@/public/home/new_faq/bookwfeather.svg'
import FAQHeader from '@/public/home/new_faq/faq header.svg'
import faqs from "../../../modules/FaqData";
import Image from 'next/image'
import { useState } from 'react';

const NewFAQ = () => {
    const [faqSectionIndex, setFaqSectionIndex] = useState(0);
    // const swordStates = [generalClicked, beforeClicked, duringClicked];
    return ( 
        <section className={styles.faq}>
            <div className={styles.faqContainer}>
                <div className={styles.faqItemContainer1}>
                    <Image src={FAQHeader} alt="FAQ Header" className={styles.faqHeader} />

                </div>

                 

                <div className={styles.faqItemContainer2}>
                    {/* <div className={styles.buttonContainer}>
                        <button className={styles.generalButton}>
                            <h3>
                                GENERAL
                            </h3>
                        </button>

                        <button className={styles.beforeButton}>
                            <h3>
                                BEFORE
                            </h3>
                        </button>

                        <button className={styles.afterButton}>
                            <h3>
                                AFTER
                            </h3>
                        </button>
                    </div>  */}
                    
        
                    <Image src={Book} alt="Book" className={styles.faqBook} />

                    {/* <div className={styles.faqContent}>
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
                    </div> */}
                </div>

                


            </div>
        </section>
    );
}

export default NewFAQ;
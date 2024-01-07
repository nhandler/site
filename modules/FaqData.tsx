import React from "react";

 const faqs = [
   {
     sectionTitle: 'General',
     sectionFaqs: [
      {
        question: 'What is a hackathon? ',
        answer: [
          <p key={0}>A hackathon is a collaborative event where teams utilize their skills to create projects that solve problems or identify new opportunities! They typically run for a short and continuous period of time. For HackIllinois, all meals will be provided. </p>,
        ],
      },
      {
        question: 'Who can participate?',
        answer: [
          <p key={0}>Anyone 18 years of age and over may participate!</p>,
        ],
      },
      {
        question: 'How long does the hackathon last?',
        answer: [
          <p key={0}>HackIllinois runs for 36 hours, from Friday evening to Sunday morning.</p>,
        ],
      },
      {
        question: 'Are there any prizes or incentives?',
        answer: [
          <p key={0}>Yes! Cash prizes will be offered for winning teams in several categories.</p>,
        ],
      },
      
      {
          question: 'What should I do if I need help on my project?',
          answer: [
            <p key={0}>Both in-person and virtual mentors will be available to assist teams. Mentors are recruited from companies across the country and in many technical specialties.</p>,
          ],
      },
      {
        question: 'What resources or tools will be provided to attendees?',
        answer: [
          <p key={0}>We provide technical workshops, mentors, a GitHub student developer pack, and more! Additional resources will be provided as sponsor/event details are finalized.</p>,
        ],
      },
     ],
   },
   {
     sectionTitle: 'Before',
     sectionFaqs: [
       {
         question: 'How can I register?',
         answer: [
           <p key={0}>Our registration portal will open during January 2024. Be on the lookout for the registration announcement and travel reimbursement details on our social media platforms!
           </p>,
         ],
       },
       {
         question: 'Are there any themes or specific challenges we need to address?',
         answer: [
           <p key={0}>HackIllinois provides several tracks for teams to follow. The track themes will be announced soon. </p>,
         ],
       },
       
       {
         question: 'Are there facilities for overnight stays?',
         answer: [
           <p key={0}>Unfortunately, we do not have a facility that provides overnight stays. We will provide travel and housing reimbursements instead. More information regarding reimbursements will be released soon!
           </p>,
         ],
       },
       {
         question: 'What else happens at HackIllinois other than the hackathon? ',
         answer: [
           <p key={0}>We provide collaborative events with UIUC classes, student organizations, and other universities! We also host social activities, listed under “During the Hackathon”.</p>,
         ],
       },
       {
        question: 'How are teams formed, or can I bring my own team? What if I don\'t have a team yet?',
        answer: [
          <p key={0}>Feel free to form your own team! But don’t worry if you do not have one -  you can meet people through our team matching workshop and Discord channels.</p>
        ],
       },

       {
        question: 'What if I\'m new to coding or hackathons, can I still participate? What else can I do?',
        answer: [
          <p key={0}>Of course! Hackathons epitomize learning and trying new things, and we are dedicated to fostering a safe learning community. We will be offering as much support as possible through workshops, mentors, and more.</p>
        ],
       }

       
     ],
   },
   {
     sectionTitle: 'During',
     sectionFaqs: [
       {
         question: 'Are there specific APIs, datasets, or tools that we must use? ',
         answer: [
           <p key={0}>The world is your oyster - use whatever you like!</p>,
         ],
       },
       {
         question: 'What are the criteria for judging and how will projects be evaluated?',
         answer: [
           <p key={0}>More info coming soon!</p>,
         ],
       },
       {
         question: 'What should we prioritize: the technical details, user experience, business model, or the impact of our solution?',
         answer: [
           <p key={0}>More info coming soon!</p>,
         ],
       },
       {
        question: 'Is there a schedule for relaxation or fun activities, like games or entertainment segments? ',
        answer: [
          <p key={0}>Other than working on your project, we provide fun themed activities throughout the 36 hours (i.e. gaming tournaments, crafting breaks, coding challenges, snack time, etc.). </p>,
        ],
      },
      {
        question: 'Are there any networking opportunities with sponsors or industry professionals?',
        answer: [
          <p key={0}>Yes! We will have a company expo, project showcases, as well as socials for you to meet and discuss with sponsors. </p>,
        ],
      },
     ],
   },
 ];


export default faqs;

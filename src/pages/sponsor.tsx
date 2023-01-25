import { useEffect } from 'react';
import Router from 'next/router'

const Sponsor = () => {
    useEffect(() => {
        Router.push('/documents/sponsorship.pdf');
    });
    
    return null;
};

export default Sponsor;

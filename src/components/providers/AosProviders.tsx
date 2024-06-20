"use client"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AOSProvider = ({children}: {children?: React.ReactNode;}) => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: 'ease-in-out-back'
        });
      }, [])
    return (
        <div>
            {children}
        </div>
    )
}
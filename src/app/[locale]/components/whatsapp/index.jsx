'use client'
import React, { useState  } from "react";
import {Link}               from '@/navigation';
import { motion } from "framer-motion"
import { useTranslations } from "next-intl";
import { FaWhatsapp } from "react-icons/fa";
import './index.scss';
const Whatsapp = () => {
    const [isHover, setIsHover] = useState(true);
    const t = useTranslations("Whatsapp");
    return(
        <Link className="whatsapp"
        href={"https://wa.me/390109844413"}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        >
            <FaWhatsapp className="icon-whatsapp" color="#008000"/>
            {
                isHover &&
                    <motion.p className="whats-text"
                    variants={{
                        hidden:{opacity:0, x:-25},
                        visible:{opacity:1,x:0},
                      }}
                      transition={{delay: 0.1, duration:0.5}}
                      initial="hidden"
                      whileInView="visible"
                    >
                        {t('text')}
                    </motion.p>
            }

        </Link>
    )
}

export default Whatsapp;
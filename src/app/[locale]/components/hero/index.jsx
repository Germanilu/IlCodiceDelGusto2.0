'use client'
import { useTranslations } from "next-intl";
import Button from '@/app/[locale]/components/button'
import {motion} from "framer-motion"
import './index.scss';

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <div className='hero-design'>
      <div className="text">
        <motion.p
        className="slogan"
        variants={{
          hidden:{opacity:0, y:75},
          visible:{opacity:1,y:0},          
        }}
        transition={{delay:0.25, duration:0.25}}
        initial="hidden"
        animate="visible"
        >
         {t('slogan')}
        </motion.p>
        <motion.h1
        className="title"
        variants={{
          hidden:{opacity:0, x:75},
          visible:{opacity:1,x:0},
          
        }}
        initial="hidden"
        animate="visible"
        >
        {t('title')}
        </motion.h1>
        <motion.p
        className="website-name"
        variants={{
          hidden:{opacity:0, y:75},
          visible:{opacity:1,y:0},
          
        }}
        initial="hidden"
        animate="visible"
        >
        {t('website-name')}
        </motion.p>
      </div>

      <motion.div
        className="hero-call-to-action"
        variants={{
          hidden:{opacity:0, y:75},
          visible:{opacity:1,y:0},
        }}
        transition={{delay:1, duration:0.75}}
        initial="hidden"
        animate="visible"
        >
        <Button text={'start-new-project'} href={'#contact'}/>
      </motion.div>
    </div>
  );
}

export default Hero;

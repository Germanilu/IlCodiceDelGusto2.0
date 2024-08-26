'use client'
import { useTranslations } from "next-intl";
import { useSelector }      from 'react-redux';
import {motion} from "framer-motion"
import Image from 'next/image';
import qrCode from '../../../../static/media/svg/qr.svg';
import qrCodeMobile from '../../../../static/media/svg/qr-white.svg';
import './index.scss';

const QrCode = () => {

  const t = useTranslations("Qr-code");
  const isMobile = useSelector(state => state.responsive.isMobile);

  return (
    <div className='qr-code-design'>
      {
        isMobile && <h2 className='title'>{t('title')}</h2>
      }
      <div className="qr-code-container">
        <motion.div className="image-container"
         variants={{
          hidden:{opacity:0, y:75},
          visible:{opacity:1,y:0},
        }}
        transition={{delay: 0.5, duration:0.5}}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
          <Image className='image' src={isMobile ? qrCodeMobile : qrCode} alt={'qr-code'} />
        </motion.div>
        <motion.div className="text-container"
         variants={{
          hidden:{opacity:0, y:25},
          visible:{opacity:1,y:0},
        }}
        transition={{delay: 0.7, duration:0.5}}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}>

          {
            !isMobile && <h2 className='title'>{t('title')}</h2>
          }
          <p className='container-title'>{t('subtitle')}</p>
          <span className='text'>{t('text')}</span>
        </motion.div>
      </div>
    </div>
  )
}
export default QrCode
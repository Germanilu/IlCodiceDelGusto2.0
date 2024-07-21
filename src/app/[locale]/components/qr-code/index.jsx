'use client'
import { useTranslations } from "next-intl";
import { useSelector }      from 'react-redux';
import Image from 'next/image';
import qrCode from '../../../../static/media/svg/qr-code.svg';
import qrCodeMobile from '../../../../static/media/svg/qr-code-mobile.svg';
import './index.scss';

const QrCode = () => {

  const t = useTranslations("Qr-code");
  const isMobile = useSelector(state => state.responsive.isMobile);

  return (
    <div className='qr-code-design'>
      <h2 className='title'>{t('title')}</h2>
      <div className="qr-code-container">
        <div className="image-container">
          <Image className='image' src={isMobile ? qrCodeMobile : qrCode} alt={'qr-code'} />
        </div>
        <div className="text-container">
          <h2 className='container-title'>{t('subtitle')}</h2>
          <span className='text'>{t('text')}</span>
        </div>
      </div>
    </div>
  )
}
export default QrCode
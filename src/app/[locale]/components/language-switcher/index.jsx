import {useRouter,usePathname} from '@/navigation';

import './index.scss';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  return(
    <div className="language-switcher-design">
       <div className='box' onClick={() => router.replace(pathname, { locale: "en" })}>
          <span className='language'>EN</span>
        </div>
        <div className='box' onClick={() => router.replace(pathname, { locale: "it" })}>
          <span className='language'>IT</span>
        </div>
        <div className='box' onClick={() => router.replace(pathname, { locale: "es" })}>
          <span className='language'>ES</span>
        </div>
    </div>
  )
}
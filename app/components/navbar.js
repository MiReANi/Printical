'use client'
import HeaderPNG from '/public/png_osat/ylapalkki_webbi.png'
import HeaderMobile from 'public/ylapalkki_MOBIILI.png'
import Link from 'next/link'
import Image from 'next/image'
import HomePNG from '/public/Etusivu.svg'
import AboutUs from '/public/about us.svg'
import { useState } from 'react'
import {Home, CircleUserRound} from 'lucide-react'

export default function Nav() {
  /*
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  //Navigation array
  const navItems = [
    {name: "Etusivu", href: "/"},
    {name: "Yhteystiedot", href: "/contact"},
  ];

  // Mobile Menu
  <div className={`fixed top-10 left-0 min-h-screen w-64 bg-slate-100 transform transition-transform duration-300 ease-in-out ${
    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
  } lg:hidden z-50`}>
<ul className="flex flex-col h-full gap-4 p-4">
    {navItems.map((item, index) => (
      <li
        key={index}
        className="flex items-center p-1 text-lg gap-x-2 text-slate-600 hover:text-red-500"
      >
        <Link onClick={() => {setIsMobileMenuOpen(false);}} href={item.href} className="flex items-center">
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</div>
  */
  return(
    <div className='fixed top-0 right-0 left-0 z-40' >
          
          <div className='lg:hidden block'>
          <Image src={HeaderMobile} alt="HeaderMobile"/>
          <div className='flex flex-row right-0'>
            
            <Link href="/"
            className='absolute top-6 right-[100px]'>
              <Home
              size={32}/>
            </Link>
            
            <Link href="/contact"
            className='absolute top-6 right-[60px]'>
            <CircleUserRound
            size={32}/>
            </Link>

            <Link href="/information"
            className='absolute top-[25px] right-[20px]'>
            <Image
            src={AboutUs}
            alt='AboutUs'
            width={29}
            priority
            />
            </Link>

          </div>
            
          </div>
    

          {/* Desktop Menu */}
          <div className='hidden lg:block'>
            <Image src={HeaderPNG} alt="HeaderPNG"/>
            <Link href="/contact"
            className='md:absolute md:left-[1100px] top-9'>
            <CircleUserRound
            size={64}
            />
            </Link>
            <Link href="/"
            className='md:absolute md:left-[1000px] top-9'>
            <Home
            size={64}
            />
            </Link>

            <Link href="/information"
            className='md:absolute md:left-[1200px] top-9'>
            <Image
            src={AboutUs}
            alt='AboutUs'
            width={61}
            priority
            />
            </Link>
          </div>
          
    </div>
  );
}
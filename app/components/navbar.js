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
            <div>
              <Link href="/contact"
              className='md:absolute md:left-[1100px] top-7'>
              <CircleUserRound
              size={64}
              className='ml-5'
              />
              <p>Yhteystiedot</p>
              </Link>
            </div>
            
            <Link href="/"
            className='md:absolute md:left-[1000px] top-7'>
            <Home
            size={64}
            />
            <p>Etusivu</p>
            </Link>

            <Link href="/information"
            className='md:absolute md:left-[1250px] top-8'>
            <Image
            src={AboutUs}
            alt='AboutUs'
            width={61}
            priority
            className='ml-2'
            />
            <p>About us</p>
            </Link>
          </div>
          
    </div>
  );
}
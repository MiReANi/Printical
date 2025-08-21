'use client'
import HeaderPNG from '/public/png_osat/ylapalkki.png'
import HeaderMobile from 'public/ylapalkki_MOBIILI.png'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '/public/png_osat/logo.png'
import { useState } from 'react'
import {Home, CircleUserRound, Info, ShoppingBag} from 'lucide-react'

export default function Nav() {

  return(
    <div className='fixed top-0 right-0 left-0 z-40' >
          
          <div className='lg:hidden block'>
          <Image src={HeaderMobile} alt="HeaderMobile"/>
          <div className='md:hidden flex flex-row right-0'>
            
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
            <Info
            size={32}/>
            </Link>

          </div>
          <div className='hidden md:flex flex-row right-0'>
            
            <Link href="/"
            className='absolute top-12 right-[200px]'>
              <Home
              size={64}/>
            </Link>
            
            <Link href="/contact"
            className='absolute top-12 right-[120px]'>
            <CircleUserRound
            size={64}/>
            </Link>

            <Link href="/information"
            className='absolute top-12 right-[40px]'>
            <Info
            size={64}/>
            </Link>

          </div>
          
            
          </div>
    

          {/* Desktop Menu */}
          <div className='hidden lg:block'>
            <Image className='w-full h-auto' src={HeaderPNG} alt="HeaderPNG"/>
            <Link href="/">
              <Image className='absolute top-5 left-7' src={Logo} alt="Logo"/>
            </Link>
            <div className='grid grid-cols-2 md:absolute w-full top-7'>
            <div>

            </div>
            <div className='flex flex-row gap-5 ml-8'>
              <Link href="/">
              <Home
              size={64}
              />
              <p>Etusivu</p>
              </Link>

              <Link href="/contact">
              <CircleUserRound
              className='ml-5'
              size={64}
              />
              <p>Yhteystiedot</p>
              </Link>

              <Link href="/information">
              <Info
              size={64}/>
              <p className='text-center'>Info</p>
              </Link>

              <Link href="https://printicalshop.etsy.com/">
              <ShoppingBag
              className='ml-6'
              size={64}/>
              <p>Verkkokauppa</p>
              </Link>
            </div>
            </div>
          </div>
          
    </div>
  );
}
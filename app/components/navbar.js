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
          <div className='md:hidden flex flex-row gap-2 absolute top-6 right-5'>
            
            <Link href="/">
              <Home
              size={32}/>
            </Link>
            
            <Link href="/contact">
            <CircleUserRound
            size={32}/>
            </Link>

            <Link href="/information">
            <Info
            size={32}/>
            </Link>

            <Link href="https://printicalshop.etsy.com/">
            
              <ShoppingBag
              size={32}/>
              </Link>

          </div>
          <div className='hidden md:flex flex-row absolute gap-5 right-10 top-12'>
            
            <Link href="/">
              <Home
              size={64}/>
            </Link>
            
            <Link href="/contact">
            <CircleUserRound
            size={64}/>
            </Link>

            <Link href="/information">
            <Info
            size={64}/>
            </Link>

            <Link href="https://printicalshop.etsy.com/">
              <ShoppingBag
              size={64}/>
              </Link>

          </div>
          
            
          </div>
    

          {/* Desktop Menu */}
          <div className='hidden lg:block'>
            <Image className='w-full h-auto' src={HeaderPNG} alt="HeaderPNG"/>
            <Link href="/">
              <Image className='absolute top-5 left-7 w-[10vw] h-[8vh]' src={Logo} alt="Logo"/>
            </Link>
            <div className='grid grid-cols-2 md:absolute w-full top-7'>
            <div>

            </div>
            <div className='flex flex-row gap-5 ml-8'>
              <Link href="/" className='hover:text-blue'>
              <Home
              size={64}
              />
              <p>Etusivu</p>
              </Link>

              <Link href="/contact" className='hover:text-blue'>
              <CircleUserRound
              className='ml-5'
              size={64}
              />
              <p>Yhteystiedot</p>
              </Link>

              <Link href="/information" className='hover:text-blue'>
              <Info
              size={64}/>
              <p className='text-center'>Info</p>
              </Link>

              <Link href="https://printicalshop.etsy.com/" className='hover:text-blue'>
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
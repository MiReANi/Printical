'use client'
import Image from 'next/image'
import Banner from '/public/kansikuva.png'
import FrontText from '/public/teksti etusivu.svg'
import Navbar from './components/navbar'
import Skull from '/public/kallo.png'
import Filaments from '/public/filamentit.png'
import Link from 'next/link'
import Materials from '/public/uudensukupolvenmateriaaleja.svg'
import PrinticalLogo from '/public/printicallogo tumma.svg'

export default function Home() {
  return (

      <div className='relative'>
        <Navbar/>
        <div className='md:mt-20 mt-[65px] relative'>
          
          <Image className='' src={Banner} alt="Banner"/>
            
          <Image className='absolute bottom-5 md:bottom-0 md:top-[400px] md:left-[350px]' src={FrontText} alt='FrontText'/>
        </div>
          <div className='flex flex-row justify-center mx-4 mt-10 md:mt-10'>
            <Link href="/information">
            <p className='bg-darkblue md:mt-2 text-white p-2 md:p-10 font-extrabold md:text-6xl'>TIETOA MEISTÄ</p>
            </Link>
            <Image className='md:mx-10 mx-2 md:w-32 w-16' src={PrinticalLogo} alt='PrinticalLogo'/>
            <Link href="/contact">
            <p className='bg-darkblue md:mt-2 text-white p-2 md:p-10 font-extrabold md:text-6xl'>OTA YHTEYTTÄ</p>
            </Link>
          </div>
          <div className='mt-10 md:grid grid-cols-2 bg-darkblue text-sm text-white border-blue md:border-b-4 md:border-t-4'>
              <div className='p-5 md:mx-0 md:border-r-4 md:border-b-0 border-b-4 border-blue md:p-20 md:ml-20 md:text-lg/8'>
                <p>Printical on 3D-tulostamiseen erikoistunut yritys, joka tarjoaa luovia ratkaisuja täysin asiakkaan toiveiden ja tarpeiden mukaan. Pyrimme päivittäin haastamaan itsemme luoden jotain käytännöllistä ja kaunista asiakkaittemme iloksi.</p>
              </div>
              <div className='p-5 md:mx-0 md:p-20 md:mr-20 md:text-lg/8'>
                <p>Kaikki tuotteemme suunnitellaan ja valmistetaan Suomessa mittatilauksena 3D-tulostaen ja käsityönä kooten. Olemme joustava ja innovatiivinen toimija, jonka tuotevalikoiman rajoituksena on ainoastaan sinun mielikuvituksesi!</p>
              </div>
            
            



          </div>
          {/**Desktop */}
          <div className='hidden md:grid grid-cols-3'>
              <Image src={Filaments} alt='Filaments'/>
              <Image className='md:mx-12 md:mt-[200px] my-10' src={Materials} alt='Materials'/>
              <Image src={Skull} alt='Skull'/>
          </div>

          {/**Mobile */}
          <div className='md:hidden'>
            <div className='grid grid-cols-2'>
            <Image src={Filaments} alt='Filaments'/>
              <Image src={Skull} alt='Skull'/>
            </div>
              <Image className='my-10 w-64 mx-auto' src={Materials} alt='Materials'/>
          </div>
      </div>

  )
}

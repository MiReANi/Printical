'use client'
import Image from 'next/image'
import Placeholder from '/public/printicaltaustakuva.jpg'
import FrontText from '/public/teksti etusivu.svg'
import Navbar from './components/navbar'
import Skull from '/public/kallo.png'
import Link from 'next/link'
import Materials from '/public/uudensukupolvenmateriaaleja.svg'
import PrinticalLogo from '/public/printicallogo tumma.svg'

export default function Home() {
  return (

      <div className='relative'>
        <Navbar/>
        <div className='mt-20'>
          
          <Image className='' src={Placeholder} alt="Placeholder"/>

            <Image className='md:mx-10 md:my-10 absolute md:top-[250px] top-20 md:left-[125px]' src={FrontText} alt='FrontText'/>
        </div>
          <div className='flex flex-row justify-center md:mt-10'>
            <Link href="/information">
            <p className='bg-darkblue md:mt-2 text-white p-10 font-extrabold text-6xl'>TIETOA MEISTÄ</p>
            </Link>
            <Image className='md:mx-10' src={PrinticalLogo} alt='PrinticalLogo'/>
            <Link href="/contact">
            <p className='bg-darkblue md:mt-2 text-white p-10 font-extrabold text-6xl'>OTA YHTEYTTÄ</p>
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
          <div className='md:grid grid-cols-3'>
              <Image src={Skull} alt='Skullplaceholder'/>
              <Image className='md:mx-12 md:mt-[200px]' src={Materials} alt='Materials'/>
              <Image src={Skull} alt='Skull'/>
          </div>
      </div>

  )
}

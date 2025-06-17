'use client'
import Image from 'next/image'
import Placeholder from '/public/printicaltaustakuva.jpg'
import ModelForm from './components/modelform'
import ProductBox from './productbox.js'
import Link from 'next/link'
import FrontText from '/public/teksti etusivu.svg'
import Navbar from './components/navbar'


//import ProductManager from './product.js'
/*import {db} from './lib/db'

async function Database(){
  let allPosts = await db.select().from("tuotteet")
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}*/


export default function Home() {
  return (

      <div className='relative'>
        <Navbar/>
        <div className='mt-20'>
          
          <Image className='' src={Placeholder} alt="Placeholder"/>

            <Image className='md:mx-10 md:my-10 absolute md:top-[250px] top-20 md:left-[125px]' src={FrontText} alt='FrontText'/>
        </div>
        <div className='mt-20 md:grid grid-cols-2 bg-darkblue text-sm text-white'>
            <div className='p-5 md:mx-0 md:border-r-4 md:border-b-0 border-b-4 border-blue md:p-20 md:ml-20 md:text-lg/8'>
              <p>Printical on 3D-tulostamiseen erikoistunut yritys, joka tarjoaa luovia ratkaisuja täysin asiakkaan toiveiden ja tarpeiden mukaan. Pyrimme päivittäin haastamaan itsemme luoden jotain käytännöllistä ja kaunista asiakkaittemme iloksi.</p>
            </div>
            <div className='p-5 md:mx-0 md:p-20 md:mr-20 md:text-lg/8'>
              <p>Kaikki tuotteemme suunnitellaan ja valmistetaan Suomessa mittatilauksena 3D-tulostaen ja käsityönä kooten. Olemme joustava ja innovatiivinen toimija, jonka tuotevalikoiman rajoituksena on ainoastaan sinun mielikuvituksesi!</p>
            </div>
            
            



          </div>
      </div>

  )
}

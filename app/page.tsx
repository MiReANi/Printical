'use client'
import Image from 'next/image'
import Placeholder from '/public/ruukutxd.jpg'
import HeaderPNG from '/public/png_osat/yläpalkki.png'
import Logo from '/public/png_osat/logo.png'
import ModelForm from './modelform'
import ProductBox from './productbox.js'


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
function Nav() {
  return(
    <div className='fixed top-0' >
      <Image src={HeaderPNG} alt="HeaderPNG"/>
      <Image className='absolute top-4 left-2' src={Logo} alt="PrinticalLogo"/>
    </div>
  );
}

function Showcase() {
  return(
    <section>
      <div className='grid grid-cols-5 gap-4'>
        <Image className='col-span-1' src={Placeholder} alt="Placeholder"/>
        <Image className='col-span-4' src={Placeholder} alt="Placeholder"/>
      </div>
    </section>
  );
}

function Contact() {
  return(
    <div className='p-20 bg-blue'>
        <p>Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans? Not only are they in the field egg group, which is mostly comprised of mammals, Vaporeon are an average of 3”03’ tall and 63.9 pounds, this means they’re large enough to be able handle human dicks, and with their impressive Base Stats for HP and access to Acid Armor, you can be rough with one. Due to their mostly water based biology, there’s no doubt in my mind that an aroused Vaporeon would be incredibly wet, so wet that you could easily have sex with one for hours without getting sore. They can also learn the moves Attract, Baby-Doll Eyes, Captivate, Charm, and Tail Whip, along with not having fur to hide nipples, so it’d be incredibly easy for one to get you in the mood. With their abilities Water Absorb and Hydration, they can easily recover from fatigue with enough water. No other Pokémon comes close to this level of compatibility. Also, fun fact, if you pull out enough, you can make your Vaporeon turn white. Vaporeon is literally built for human dick. Ungodly defense stat+high HP pool+Acid Armor means it can take cock all day, all shapes and sizes and still come for more</p>
    </div>
  );
}

export default function Home() {
  return (

      <div className='relative'>
          <section id="header">
              <Nav/>
          </section>
          <div className='mx-20 mt-20 flex flex-col space-y-5 p-20'>
            <section className='p-10' id="showcase">
              <Showcase/>
            </section>
            <section className='p-10' id="products">
              <ProductBox/>
            </section>
            <section id="empty">
              <div className='p-20'></div>
            </section>
            <section className='p-10' id="upload">
              <ModelForm/>
            </section>
            <section className='p-10' id="form">
              {/*<ProductManager/>*/}
            </section>
            <section id="empty">
              <div className='p-20'></div>
            </section>
            <section className='p-10' id="contact">
              <Contact/>
            </section>
          </div>
      </div>

  )
}

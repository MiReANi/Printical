
import Image from 'next/image'
import PrinticalT2 from '/public/Printical_T2.svg'
import PrinticalT4 from '/public/Printical_T4.svg'
import Placeholder from '/public/Placeholder.jpg'
import OpenForm from './openform.js'
import Link from 'next/link'
import ModelForm from './modelform'


function Showcase() {
  return(
    <section>
      <div className='mx-10 my-10 pb-8 bg-blue'>
        <Image src={Placeholder} alt="Placeholder"/>
      </div>
      <div className='p-10 bg-orange'>
        <p>Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans? Not only are they in the field egg group, which is mostly comprised of mammals, Vaporeon are an average of 3”03’ tall and 63.9 pounds, this means they’re large enough to be able handle human dicks, and with their impressive Base Stats for HP and access to Acid Armor, you can be rough with one. Due to their mostly water based biology, there’s no doubt in my mind that an aroused Vaporeon would be incredibly wet, so wet that you could easily have sex with one for hours without getting sore. They can also learn the moves Attract, Baby-Doll Eyes, Captivate, Charm, and Tail Whip, along with not having fur to hide nipples, so it’d be incredibly easy for one to get you in the mood. With their abilities Water Absorb and Hydration, they can easily recover from fatigue with enough water. No other Pokémon comes close to this level of compatibility. Also, fun fact, if you pull out enough, you can make your Vaporeon turn white. Vaporeon is literally built for human dick. Ungodly defense stat+high HP pool+Acid Armor means it can take cock all day, all shapes and sizes and still come for more</p>
      </div>
    </section>
  );
}

function Contact() {
  return(
    <div className='p-10 bg-orange'>
        <p>Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans? Not only are they in the field egg group, which is mostly comprised of mammals, Vaporeon are an average of 3”03’ tall and 63.9 pounds, this means they’re large enough to be able handle human dicks, and with their impressive Base Stats for HP and access to Acid Armor, you can be rough with one. Due to their mostly water based biology, there’s no doubt in my mind that an aroused Vaporeon would be incredibly wet, so wet that you could easily have sex with one for hours without getting sore. They can also learn the moves Attract, Baby-Doll Eyes, Captivate, Charm, and Tail Whip, along with not having fur to hide nipples, so it’d be incredibly easy for one to get you in the mood. With their abilities Water Absorb and Hydration, they can easily recover from fatigue with enough water. No other Pokémon comes close to this level of compatibility. Also, fun fact, if you pull out enough, you can make your Vaporeon turn white. Vaporeon is literally built for human dick. Ungodly defense stat+high HP pool+Acid Armor means it can take cock all day, all shapes and sizes and still come for more</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className='relative'>
      {/* Header */}
      <div className='fixed inset-x-0 top-0'>
        <div className="relative p-6 mx-auto bg-orange">
            <div className='container mx-auto space-x-3 font-bold'>
              <Link href="#showcase" className='hover:text-white'>Showcase</Link>
              <Link href="#upload" className='hover:text-white'>Upload</Link>
              <Link href="#form" className='hover:text-white'>Form</Link>
              <Link href="#contact" className='hover:text-white'>Contact</Link>
            </div>
            <div className='absolute bottom-0 right-0'>
              <Image src={PrinticalT4} alt="Printical black"/>
            </div>
            <div className='mt-6 absolute right-0'>
              <Image src={PrinticalT2} alt="Printical orange"/>
            </div>
        </div>
      </div>

      <div className='mt-20 flex flex-col space-y-5'>
        <section id="showcase">
          <Showcase/>
        </section>
        <section id="upload">
          <ModelForm/>
        </section>
        <section id="form">
          <OpenForm/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
      </div>
    </div>
  )
}

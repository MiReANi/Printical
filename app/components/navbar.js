import HeaderPNG from '/public/png_osat/ylapalkki.png'
import Link from 'next/link'
import Image from 'next/image'
import HomePNG from '/public/png_osat/homelogo.png'
import ContactPNG from '/public/png_osat/yhteystiedot.png'

export default function Nav() {
  return(
    <div className='fixed top-0' >
      <Image src={HeaderPNG} alt="HeaderPNG"/>


            <Link href="/contact"
            className='absolute left-[1100px] top-8'>
            <Image src={ContactPNG} alt="ContactPNG" />
            </Link>
            <Link href="/"
            className='absolute left-[1000px] top-7'
            ><Image src={HomePNG} alt="HomePNG" />
            </Link>


    </div>
  );
}
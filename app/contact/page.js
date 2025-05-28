
import Navbar from '../components/navbar'
import ContactForm from '../components/contactform'
import Image from 'next/image'
import TapioPNG from 'public/tapsa.png'
import KallePNG from 'public/printical_uus_logo.jpg'

export default function Contact(){

    return(
        <div className='relative'>
            <Navbar/>
            <div className='mx-20 mt-20 flex flex-col space-y-5 p-20'>
                <div>
                    <h1>Printical Oy</h1>
                    <p>Y-tunnus:<br/>481984931</p>
                </div>
                <div className='grid grid-cols-2 gap-[250px] text-center'>
                    <div className='ml-auto'>
                        <Image className='rounded-full h-64 w-64' src={TapioPNG} alt="Tapio"></Image>
                        <p>Tapio Heino</p>
                        <p>Ylijumala</p>
                        <hr></hr>
                        <p>Puhelin</p>
                        <p>Sähköposti</p>
                    </div>
                    <div className='mr-auto'>
                        <Image className='rounded-full h-64 w-64' src={KallePNG} alt="Kalle" ></Image>
                        <p>Kalle Kiiltomäki</p>
                        <p>Alijumala</p>
                        <hr></hr>
                        <p>Puhelin</p>
                        <p>Sähköposti</p>
                    </div>
                </div>
                <div className='self-center'>
                    <h1 className='text-4xl font-bold' >Ota yhteyttä</h1>
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
}
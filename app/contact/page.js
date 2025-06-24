
import Navbar from '../components/navbar'
import ContactForm from '../components/contactform'
import Image from 'next/image'
import TapioPNG from 'public/tapsa.png'
import KallePNG from 'public/kalle.png'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact(){

    return(
        <div className='relative'>
            <Navbar/>
            <div className='mx-20 mt-20 flex flex-col space-y-5 md:p-20'>
                
                <div className='md:grid grid-cols-2 gap-[250px] text-center md:text-lg'>
                    <div className='ml-auto'>
                        <Image className='rounded-full ml-9 w-32 h-32 md:h-64 md:w-64 mb-2 md:ml-2' src={TapioPNG} alt="Tapio"></Image>
                        <p>Tapio Heino</p>
                        <p>Myynti & Markkinointi</p>
                        <hr className='my-3'></hr>
                        <div className='flex flex-row mb-2'>
                            <Phone className='mr-2'
                            fill='black'/>
                            <p>+358 440310604</p>
                        </div>
                        <div className='flex flex-row justify-center'>
                            <Mail className='mr-2'
                            strokeWidth={3} />
                            <p>tapioheino99@gmail.com</p>
                        </div>
                    </div>
                    <div className='mr-auto mt-6 md:mt-0'>
                        <Image className='rounded-full ml-9 w-32 h-32 md:h-64 md:w-64 mb-2 md:ml-2' src={KallePNG} alt="Kalle" ></Image>
                        <p>Kalle Kiiltomäki</p>
                        <p>Tuotanto</p>
                        <hr className='my-3'></hr>
                        <div className='flex flex-row mb-2'>
                            <Phone className='mr-2'
                            fill='black'/>
                            <p>+358 445539510</p>
                        </div>
                        <div className='flex flex-row justify-center'>
                            <Mail className='mr-2'
                            strokeWidth={3} />
                            <p>kalle.kiiltomaki@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='text-2xl font-bold text-center pt-10'>
                    <h1>Printical Oy -  3509458-8</h1>
                </div>
                <div className='flex flex-row self-center text-xl font-bold mt-5'>

                    <MapPin className='mr-4'
                    strokeWidth={3}
                    size={32}/>
                    <p className='mr-2'>Karjalankatu 12, 28130 PORI</p>
                </div>
                <div>
                    <h1 className='mt-5 text-4xl font-bold text-center mb-5' >Ota yhteyttä</h1>
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
}
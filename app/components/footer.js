import { Instagram, Facebook} from 'lucide-react'
import Link from 'next/link'

export default function Footer(){
    return(
        <div className='bottom-0 bg-darkblue p-10 text-white'>
            <div className="flex flex-col md:flex-row">
                <div>
                    <p>Printical Oy</p>
                    <p>3509458-8</p>
                    <p>printical.fi@gmail.com</p>
                    <p>+358 440310604</p>
                </div>
                <div className='md:ml-10'>
                    <p>Karjalankatu 12</p>
                    <p>28130, Pori</p>
                    <div className='md:flex flex-row mt-5'>
                        <Link href="https://www.instagram.com/printical.fi/"
                        ><Instagram
                        size={32}/>
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=61574020655204"
                        ><Facebook
                        size={32}/>
                        </Link>
                    </div>
                    
                </div>
                

            </div>
            <p className='text-center'>©2025 Printical Oy</p>
        </div>
    );
}
import Navbar from '../components/navbar'
import Image from 'next/image'
import Gift from 'public/lahjat.svg'
import Proto from '/public/protot.svg'
import Figures from 'public/figut.svg'
import Serial from 'public/sarjat.svg'
import Special from 'public/erikoisosat.svg'
import TextPro from 'public/tekstijakuvatuote.svg'


export default function Info(){

    return (
        <div className='relative'>
            <Navbar/>
            <div className='mx-5 md:mx-20 mt-20 flex flex-col space-y-5 md:text-lg text-sm'>
                <div className='mb-10 md:mt-20'>
                    <p>
                    Onko yritykselläsi kehitteillä uusi tuote?<br/>
                    Onko muovisen varaosan tilaaminen ulkomailta aivan liian kallista ja hidasta?<br/>
                    Eikö sopivia liittimiä tai pidikkeitä tahdo löytyä mistään?
                    </p>
                </div>
                <p className='bg-darkblue text-white mr-auto p-1 font-extrabold ml-10 text-4xl'>EI HÄTÄÄ.</p>
                <div>
                    <p className='my-10'>
                        Me Printicalilla olemme erikoistuneet suunnittelemaan ja tuottamaan laadukkaita ja
                        nopeita ratkaisuja yritysten ja yksityisasiakkaiden erityistarpeisiin. Tuotteet suunnitellaan, valmistetaan ja kootaan kotimaisena työnä aina vastaamaan asiakkaan toiveita ja tuotteen käyttötarkoitusta. Käytämme aina mahdollisuuksien salliessa kasvipohjaista ja biohajoavaa, nopeasti uusiutuvaa PLA-muovia! 
                    </p>
                </div>
                <div className=''>
                        <h1>Mutta mikä ihmeen 3D-tulostus?</h1>
                        <p className='mt-10'>
                            3D-tulostus eli "Additive manufacturing" on valmistusmenetelmä, jossa digitaalisesta tiedostosta luodaan valmis tuote pursottamalla ilman fyysistä muottia.
                            Yksittäisen tuotteen valmistaminen on hitaampaa, kuin esimerkiksi ruiskupuristamalla, mutta täysin uuden tuotteen suunnittelu ja valmistaminen voi olla satoja kertoja nopeampaa. 3D-tulostamalla tuote voidaan myös valmistaa monivärisenä ilman erillistä värjäämistä ja saavuttaa kevyitä ja kestäviä rakenteita, jotka on mahdottomia valmistaa muilla menetelmillä.
                        </p>
                </div>
            </div>
            <div className='md:my-20'>
                <div className='flex flex-row bg-darkblue justify-center space-x-20 py-10'>

                    <Image src={Proto} alt='Proto'/>
                    <Image src={Special} alt='Special'/>
                    <Image className='top-0' src={Serial} alt='Serial'/>


                </div>
                <div className='flex flex-row justify-center space-x-20 py-10'>
                    <Image src={TextPro} alt='TextPro'/>
                    <Image src={Gift} alt='Gift'/>
                    <Image src={Figures} alt='Figures'/>

                </div>
                </div>
        </div>
    );
}
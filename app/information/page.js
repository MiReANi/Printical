import Navbar from '../components/navbar'
import Image from 'next/image'
import Gift from 'public/lahjat.svg'
import Proto from '/public/protot.svg'
import Figures from 'public/figut.svg'
import Serial from 'public/sarjat.svg'
import Special from 'public/erikoisosat.svg'
import TextPro from 'public/tekstijakuvatuote.svg'
import Dprint from 'public/3d-tulostin.svg'
import Corn from 'public/dino ja maissi.svg'


export default function Info(){

    return (
        <div className='relative'>
            <Navbar/>
            <div className='mx-5 lg:mx-20 mt-20 flex flex-col space-y-5 md:text-lg text-sm'>
                <div className='mb-10 md:mt-20'>
                    <p>
                    Onko yritykselläsi kehitteillä <b>uusi tuote?</b><br/>
                    Onko muovisen varaosan tilaaminen ulkomailta aivan liian <b>kallista</b> ja <b>hidasta?</b><br/>
                    Eikö sopivia <b>liittimiä</b> tai <b>pidikkeitä</b> tahdo löytyä <b>mistään</b>?
                    </p>
                    <p>Tahdotko antaa alusta asti <b>räätälöidyn</b>, täysin <b>uniikin lahjan</b> rakkaallesi?</p>
                </div>
                <p className='bg-darkblue text-white mr-auto p-1 font-extrabold ml-10 text-4xl'>EI HÄTÄÄ.</p>
                <div className='lg:grid grid-cols-2'>
                    <p className='my-10'>
                        Me <b>Printicalilla</b> olemme erikoistuneet suunnittelemaan ja tuottamaan <b>laadukkaita</b> ja <b>nopeita</b> ratkaisuja yritysten ja yksityisasiakkaiden <b>erityistarpeisiin</b>. Tuotteet suunnitellaan, valmistetaan ja kootaan <b>kotimaisena</b> työnä aina vastaamaan asiakkaan toiveita ja tuotteen käyttötarkoitusta. Käytämme aina mahdollisuuksien salliessa kasvipohjaista ja biohajoavaa, nopeasti uusiutuvaa PLA-muovia! 
                    </p>
                    <Image className='lg:ml-10' src={Corn} alt='Corn'/>
                </div>
                <div className='lg:grid grid-cols-2'>
                    <div>
                        <h1 className='font-bold'>Mutta mikä ihmeen 3D-tulostus?</h1>
                        <p className='my-10'>
                            3D-tulostus eli "Additive manufacturing" on valmistusmenetelmä, jossa digitaalisesta tiedostosta luodaan valmis tuote pursottamalla ilman fyysistä muottia.
                            Yksittäisen tuotteen valmistaminen on hitaampaa, kuin esimerkiksi ruiskupuristamalla, mutta täysin uuden tuotteen suunnittelu ja valmistaminen voi olla satoja kertoja nopeampaa. 3D-tulostamalla tuote voidaan myös valmistaa monivärisenä ilman erillistä värjäämistä ja saavuttaa kevyitä ja kestäviä rakenteita, jotka on mahdottomia valmistaa muilla menetelmillä.
                        </p>
                    </div>
                    <Image className='md:ml-10' src={Dprint} alt='3Dprint'/>
                </div>
            </div>
            <div className='lg:my-20 my-10'>
                <div className='bg-darkblue'>
                    <div className='flex flex-col lg:flex-row lg:justify-center lg:space-x-20 py-10 mx-5'>

                        <Image className='mb-10 lg:mb-0' src={Proto} alt='Proto'/>
                        <Image className='mb-10 lg:mb-0' src={Special} alt='Special'/>
                        <Image className='top-0' src={Serial} alt='Serial'/>


                    </div>
                </div>
                <div className='flex flex-col lg:flex-row lg:justify-center lg:space-x-20 py-10 mx-5'>
                    <Image className='mb-10 lg:mb-0' src={TextPro} alt='TextPro'/>
                    <Image className='mb-10 lg:mb-0' src={Gift} alt='Gift'/>
                    <Image src={Figures} alt='Figures'/>

                </div>
                </div>
        </div>
    );
}
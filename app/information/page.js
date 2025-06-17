import Navbar from '../components/navbar'

export default function Info(){

    return (
        <div className='relative'>
            <Navbar/>
            <div className='mx-5 md:mx-20 mt-20 flex flex-col space-y-5 md:p-20 md:text-lg text-sm'>
                <p>
                Onko yritykselläsi kehitteillä uusi tuote?<br/>
                Onko muovisen varaosan tilaaminen ulkomailta aivan liian kallista ja hidasta?<br/>
                Eikö sopivia liittimiä tai pidikkeitä tahdo löytyä mistään?
                </p>
                <p className='bg-darkblue text-white mr-auto p-1 font-extrabold ml-10 text-4xl'>EI HÄTÄÄ.</p>
                <p>
                Me <b>Printicalilla</b> olemme erikoistuneet suunnittelemaan ja tuottamaan laadukkaita ja
                nopeita ratkaisuja yritysten ja yksityisasiakkaiden erityistarpeisiin. Tuotteet suunnitellaan, valmistetaan ja kootaan kotimaisena työnä aina vastaamaan asiakkaan toiveita ja tuotteen käyttötarkoitusta.
                </p>
            </div>
        </div>
    );
}
import Image from 'next/image'
import Clorox from '/public/clorox.png'
import { useState } from 'react';

//const startingProducts = {
 let productlist = [
        {
            id: 0,
            image: Clorox,
            alt: "Clorox",
            name: "dummy",
            amount: 10 ,
            price: 10
        },

        {   
            id: 1,
            image: Clorox,
            alt: "Clorox2",
            name: "dummi",
            amount: 120 ,
            price: 10
        }
    ];
//}

/*<div className="container bg-blue size-40 pb-10">
                            <div><Image src={product.productlist[productid].image} alt="Clorox"/></div>
                            <p>{product.productlist[productid].name}</p>
                            <p>{product.productlist[productid].amount}</p>
                            <p>{product.productlist[productid].price}</p>
            </div>
*/

export default function ProductBox(){


    const [products, setProducts] = useState(productlist);

    /*for(let i = 0; i >= product.productlist[i]; i++){
        productid += i;
   
    }*/

    return (
        <div className="columns-4">
            {products.map(product => (
                <div key={product.id}>
                    <Image src={product.image} alt={product.alt}/>
                   <div className='w-full absolute bottom-0'>
                        <h2 className='text-2xl text-left ml-5'>{product.name}</h2>
                        <p className='text-6xl text-right font-bold mr-5 mb-5'>{product.price}{"€"}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
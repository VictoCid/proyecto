import {Lusitana,Montserrat} from 'next/font/google'; //bibliotaca interna de nextjs

//luego tenemos que exportarla para poder utilizarlas
export const montserrat = Montserrat({subsets:['latin']})

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin']
})
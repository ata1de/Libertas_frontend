import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { HeaderSearch } from '@/components/headerSearch'
import { Hero } from '@/components/hero'
import { Service } from '@/components/service'
import serviceService, { ServiceType } from '@/services/serviceApi'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


export default function search() {
    const router = useRouter()
    const { name }: any  = router.query
    const [listServices, setListServices] = useState<ServiceType[]>([])
    

    const searchServices = async () => {
        const res = await serviceService.getByName(name)
        // console.log(res)
        setListServices(res.data.services)
    }

    useEffect(() => {
        searchServices()
    }
    , [name])

    console.log(listServices)
    

  return (
    <div className='w-full min-h-screen flex flex-col'>
        <Head>
            <title>Libertas - {name}</title>
            <link rel="shortcut icon" href="/logo_libertas.svg" type="image/x-icon" />
        </Head>

        
        <HeaderSearch/>

        <div className='bg-DarkBlue flex flex-grow justify-center gap-12 py-20 px-24 max-w-screen'>
            {/* <p className='tracking-wide font-bold text-2xl'>Serviços relacinados à "{name}"</p> */}

            <div className='flex flex-wrap justify-around items-center gap-4'>
                {listServices.length > 0 ? (listServices.map((service) => (
                    <Service id={service.id} name={service.name} description={service.description}/>
                ))) :  (
                    <p className='text-center italic drop-shadow-md text-lg '>Sem serviços desejados no momento. <span className='hover:border-b-2 hover:border-DarkRed'><a href="/services/all">Veja todos os nossos serviços</a></span></p>
                )}
            </div>
        </div>

        <Footer/>
    </div>
  ) 
}

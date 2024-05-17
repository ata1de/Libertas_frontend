import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import serviceService, { ServiceType } from '@/services/serviceApi'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { list } from 'postcss'
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
    <div>
        <Head>
            <title>Libertas - {name}</title>
            <link rel="shortcut icon" href="/logo_libertas.svg" type="image/x-icon" />
        </Head>

        <Header/>

        <div></div>
    </div>
  ) 
}

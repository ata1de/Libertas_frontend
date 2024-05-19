'use client'

import Forms from '@/components/forms'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Service } from '@/components/service'
import serviceService, { ServiceType } from '@/services/serviceApi'
import { GetStaticProps } from 'next'
import React, { ReactNode, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Footer } from '@/components/footer'
import Head from 'next/head'


interface IndexPageProps  {
  children?: ReactNode
  services: ServiceType[]
}

const Home = ({services}: IndexPageProps) => {
  // console.log(services)

  useEffect(() => {
    Aos.init({ duration: 1000 });
    return () => {
      Aos.refresh();
    };
  }, []);
  return (
    <div>
      <Head>
            <title>Libertas</title>
            <link rel="shortcut icon" href="/logo_libertas.svg" type="image/x-icon" />
      </Head>
      <div>
        <Hero/>
      </div>

      <div id='sobre'  className='flex items-center justify-start gap-12 bg-DarkBlue p-20'>
        <img data-aos='fade-right' data-aos-duration='1200' className='w-[300px] flex items-center justify-center pl-5' src="/logo_libertas.svg" alt="logo da libertas" />

        <div data-aos='fade-right' data-aos-duration='1200' className='flex justify-center items-center lg:items-start flex-col pl-5 w-[700px]'>
          <p className='text-sm font-bold pb-8'>A <span className='text-DarkRed '>LIBERTAS ASSETS</span> é uma empresa verdadeira moderna,impulsionada por uma equipe altamente motivada de profissionais exepcionais experientes</p>
          <p className='text-sm text-LightGray'>A Libertas é uma firma de advocacia comprometida em oferecer soluções jurídicas personalizadas e de alta qualidade para nossos clientes. Com uma equipe de advogados experientes e dedicados, buscamos alcançar resultados excepcionais em diversas áreas do direito, sempre priorizando a satisfação e proteção dos interesses de nossos clientes. Além disso, valorizamos profundamente a confiança depositada em nós e nos esforçamos para construir relacionamentos sólidos, baseados na transparência, ética e compromisso com o sucesso de nossos clientes</p>
        </div>
      </div>

      <div id='serviços' className='flex justify-center gap-12 bg-DarkBlue py-20 px-24 flex-col'>
          <p className='tracking-wide font-bold text-2xl'>NOSSOS SERVIÇOS</p>
          <div  className='flex flex-wrap lg:flex-nowrap items-center justify-center gap-3'>
            {services.map((service) => (
              <Service key={service.id} {...service} />
            ))}
          </div>
      </div>

      <Forms/>

      <Footer/>

    </div>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const res = await serviceService.getFeaturedServices();
  
  return {
    props: {
      services: res.data
    }, 
    revalidate: 3600*24
  };
}

export default Home
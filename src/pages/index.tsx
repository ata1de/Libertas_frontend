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
          <p className='text-sm text-LightGray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor provident dolorem. Facilis voluptatem voluptas voluptate vero debitis tempora fugiat consectetur eveniet dolore dicta voluptatibus nostrum sequi distinctio, eligendi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et provident nesciunt minus reiciendis? Perferendis asperiores dolores ex facilis, officia architecto enim suscipit ut dolorem rem vel. Magni esse repellat iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid temporibus impedit commodi quam molestiae quae, harum quod officiis beatae fugit possimus suscipit. Laborum ipsum, itaque nulla voluptate cum veniam perferendis?</p>
        </div>
      </div>

      <div id='serviços' className='flex justify-center gap-12 bg-DarkBlue py-20 px-24 flex-col'>
          <p className='tracking-wide font-bold text-2xl'>NOSSOS SERVIÇOS</p>
          <div  className='flex items-center justify-center gap-3'>
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
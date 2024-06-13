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
import { Button } from '@/components/ui/button'

interface IndexPageProps  {
  children?: ReactNode
  services: ServiceType[]
}

const Home = ({services}: IndexPageProps) => {

  const styleHistory = {
    backgroundImage: `url(/justice.png)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }

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

      <div id='sobre' className='flex items-center justify-start  min-[1550px]:justify-center gap-12 bg-DarkBlue py-20 px-8 sm:px-24'>
        <img data-aos='fade-right' data-aos-duration='1200' className='w-[300px] items-center justify-center pl-5 hidden min-[830px]:flex' src="/logo_libertas.svg" alt="logo da libertas" />

        <div data-aos='fade-right' data-aos-duration='1200' className='flex justify-center items-center lg:items-start flex-col pl-5 w-[700px]'>
          <p className='text-sm font-bold pb-8'>A <span className='text-DarkRed '>LIBERTAS ASSETS</span> é uma empresa verdadeira moderna, impulsionada por uma equipe altamente motivada de profissionais excepcionais e experientes</p>
          <p className='text-sm text-LightGray text-left '>A Libertas é uma firma de advocacia comprometida em oferecer soluções jurídicas personalizadas e de alta qualidade para nossos clientes. Com uma equipe de advogados experientes e dedicados, buscamos alcançar resultados excepcionais em diversas áreas do direito, sempre priorizando a satisfação e proteção dos interesses de nossos clientes. Além disso, valorizamos profundamente a confiança depositada em nós e nos esforçamos para construir relacionamentos sólidos, baseados na transparência, ética e compromisso com o sucesso de nossos clientes</p>
        </div>
      </div>

      <div id='serviços' className='flex justify-center gap-12 bg-DarkBlue py-20 px-24 flex-col'>
        <p className='tracking-wide font-bold text-2xl min-[1550px]:text-center'>NOSSOS SERVIÇOS</p>
        <div className='flex flex-wrap min-[1117px]:flex-nowrap items-center justify-center gap-3'>
          {services.map((service) => (
            <Service key={service.id} {...service} />
          ))}
        </div>
      </div>

      <div id='historia' className="w-full min-h-screen md:h-screen" style={styleHistory}>
        <div className='flex flex-col items-start justify-center gap-8 w-[95%] min-[420px]:[90%] min-[470px]:w-[80%] min-[530px]:w-[60%] h-screen pl-11 min-[470px]:pl-24'>
          <p className='text-2xl font-bold text-white text-left'>NOSSA HISTÓRIA</p>
          <p className='text-sm text-LightGray text-left'>A Companhia de Advocacia Libertas foi fundada em 1995 por três advogados visionários, com a missão de proporcionar soluções jurídicas que libertem seus clientes das complexidades legais. Com sede em um edifício histórico, a Libertas se destacou pela ética, justiça e inovação, oferecendo uma abordagem holística nas áreas de direito civil, empresarial e penal.</p>
          <p className='text-sm text-LightGray text-left'>Ao longo dos anos, a Libertas cresceu e se tornou referência na comunidade jurídica, reconhecida por sua excelência em litígios complexos e consultoria estratégica. Investindo em tecnologia e comprometida com causas sociais, a empresa oferece serviços pro bono e promove educação jurídica. Com uma equipe diversificada e um forte compromisso com a justiça, a Libertas é um verdadeiro defensor da liberdade</p>
          <Button className='bg-DarkRed w-[140px] '>Saiba mais</Button>
        </div>
      </div>

      <Forms/>

      <Footer/>

    </div>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  try {
    const res = await serviceService.getFeaturedServices();
    if (!res || !res.data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        services: res.data
      },
      revalidate: 3600 * 24
    };
  } catch (error) {
    console.error('Error fetching services:', error);
    return {
      props: {
        services: []
      },
      revalidate: 3600 * 24
    };
  }
}

export default Home;

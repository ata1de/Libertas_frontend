import { ServiceType } from '@/services/serviceApi'
import Aos from 'aos';
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'

export const Service = ({id, name, description}: ServiceType) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    return () => {
      Aos.refresh();
    };
  }, []);
  // console.log(name)
  return (
    <div data-aos='flip-left' data-aos-duration='1200' key={id} className='flex items-start flex-col gap-8 p-9 bg-LightBlue w-[250px] min-[500px]:w-[300px] sm:w-[400px] h-[350px] border-2
     border-solid border-DarkGray rounded-sm shadow-md'>
      <p className='text-lg font-bold'>{name}</p>

      <p className='text-sm text-LightGray h-[120px] overflow-hidden'>{description}</p>

      <button className='w-[150px] p-3 flex items-center justify-center bg-DarkRed transition duration-300 ease-in-out hover:opacity-75 rounded font-bold text-sm'>SAIBA MAIS</button>
    </div>
  )
}

import { ServiceType } from '@/services/serviceApi'
import React from 'react'

export const Service = ({id, name, description}: ServiceType) => {
  console.log(name)
  return (
    <div className='flex items-start flex-col gap-8 p-9 bg-LightBlue w-[400px] h-[350px] border-2
     border-solid border-LightGray transition duration-300 ease-in-out hover:opacity-75'>
      <p className='text-lg font-bold'>{name}</p>

      <p className='text-sm text-LightGray h-[120px] overflow-hidden'>{description}</p>

      <button className='w-[150px] p-3 flex items-center justify-center bg-DarkRed rounded font-bold text-sm'>SAIBA MAIS</button>
    </div>
  )
}

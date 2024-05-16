import React from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const Forms = () => {
  return (
    <div className='flex items-center justify-center gap-8 bg-LightBlue border-b-4 border-DarkRed py-20 px-24'>
        <div className='flex flex-col items-center justify-center gap-4 w-[165px] mr-[120px]'>
            <p className='font-bold text-3xl border-b-2 border-DarkRed'>FALE COM A LIBERTAS</p>
            <div className='flex flex-col items-center justify-center gap-4'>
                <div>
                    <p>Contato</p>
                    <p>999999 | 988989</p>
                    <p>contato@email.com</p>
                </div>
                <div>
                    <p>Endereço</p>
                    <p>Rua tal tal tal n°32 102 andar</p>
                    <p>Santo Agostinho, Recife - CEP 5122379</p>
                </div>
            </div>

        </div>
        <form action="" className='flex flex-col justify-center items-center gap-3 text-black '>
            <div className='flex items-center justify-center gap-3'>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <Input placeholder='nome'/>
                    <Input placeholder='email'/>
                </div>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <Input placeholder='phone'/>
                    <Input placeholder='company'/>    
                </div>
            </div>

            <Textarea/>
        </form>
    </div>
  )
}

export default Forms
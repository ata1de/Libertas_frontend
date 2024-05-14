import React from 'react'
import { Input } from './ui/input'

export const Header = () => {
  return (
    <div className='bg-transparent flex justify-between items-center p-6 '>
        <div className='flex items-center justify-center gap-3'>
            <a href="/" className='flex items-center'>
                <img className='w-8' src="/logo_libertas.svg" alt="Foto das mãos de um advogado" />
            </a>

            <p className='text-2xl text-DarkRed font-bold font-sans'>LIBERTAS</p>

        </div>

        <nav className='flex items-center justify-center gap-3'>
            <a href="" className='text-sm font-semibold leading-6 text-white'>SOBRE</a>
            <a href="" className='text-sm font-semibold leading-6 text-white'>SERVIÇOS</a>
            <a href="" className='text-sm font-semibold leading-6 text-white'>HISTÓRIA</a>
            <a href="" className='text-sm font-semibold leading-6 text-white'>CONTE CONOSCO</a>
        </nav>
        
        <form action="">
            <Input className='' placeholder='Pesquise um serviço'/>
        </form>
    </div>
  )
}

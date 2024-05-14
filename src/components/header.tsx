import React from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'

export const Header = () => {
  return (
    <div className='bg-transparent flex justify-between items-center p-6 '>
        <div className='flex items-center justify-center gap-3'>
            <a href="/" className='flex items-center'>
                <img className='w-8' src="/logo_libertas.svg" alt="Foto das mãos de um advogado" />
            </a>

            <p className='text-2xl text-DarkRed font-bold font-sans'>LIBERTAS</p>

        </div>

        <nav className='flex items-center justify-center gap-6'>
            <a href="" className='text-sm leading-6 text-LightGray'>SOBRE</a>
            <a href="" className='text-sm leading-6 text-LightGray'>SERVIÇOS</a>
            <a href="" className='text-sm leading-6 text-LightGray'>HISTÓRIA</a>
            <a href="" className='text-sm leading-6 text-LightGray'>CONTE CONOSCO</a>
        </nav>
        
        <form action="">
            <Input className='py-1 h-auto' placeholder='Pesquise um serviço'/>
        </form>
    </div>
  )
}
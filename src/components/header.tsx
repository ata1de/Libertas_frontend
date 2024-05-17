import React, { FormEvent, useState } from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'
import { useRouter } from 'next/router'

export const Header = () => {

    const router = useRouter()
    const [searchName, setSearchName] = useState('')

    const handleSearch = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        router.push(`/search?name=${searchName}`)
        setSearchName('')
    }
  return (
    <div className='bg-transparent flex justify-between items-center pt-6 '>
        <div className='flex items-center justify-center gap-3'>
            <a href="/" className='flex items-center'>
                <img className='w-8' src="/logo_libertas.svg" alt="Foto das mãos de um advogado" />
            </a>

            <p className='text-2xl text-DarkRed font-bold font-sans'>LIBERTAS</p>

        </div>

        <nav className='flex items-center justify-center gap-6'>
            <a href="#sobre" className='text-sm leading-6 text-LightGray transition relative no-underline hover:underline-after'>SOBRE</a>
            <a href="#serviços" className='text-sm leading-6 text-LightGray transition relative no-underline hover:underline-after'>SERVIÇOS</a>
            <a href="#historia" className='text-sm leading-6 text-LightGray transition relative no-underline hover:underline-after'>HISTÓRIA</a>
            <a href="#conteConosco" className='text-sm leading-6 text-LightGray transition relative no-underline hover:underline-after'>CONTE CONOSCO</a>
        </nav>
        
        <form onSubmit={handleSearch}>
            <Input 
            name='search' 
            type='search' 
            className='py-1 h-auto text-black' 
            placeholder={"Pesquise os serviços"} 
            onChange={(event) => {
                setSearchName(event.currentTarget.value)
            }}
            />
        </form>
    </div>
  )
}

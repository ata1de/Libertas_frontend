import React, { FormEvent, useState } from 'react'
import { Input } from './ui/input'
import { Search, SearchXIcon } from 'lucide-react'
import { useRouter } from 'next/router'
import { z } from 'zod'

const searchSchema = z.object({
    searchName: z.string().min(1, {message: "O campo não pode estar vazio"}),
  })

export const Header = () => {

    const router = useRouter()
    const [searchName, setSearchName] = useState('')
    const [error, setError] = useState('')

    const handleSearch = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            searchSchema.parse({ searchName }) // parse analisa se o name é condizente com o schema
            setError("")
            router.push(`/services/search?name=${searchName}`)
            setSearchName('')
  
          } catch (error) {
            if (error instanceof z.ZodError) {
              setError(error.errors[0].message)
            }
          }
    }
  return (
    <div className='bg-transparent flex justify-center lg:justify-between items-center pt-6 h-[80px]'>
        <div className='flex items-center justify-center'>
            <a href="/" className='flex items-center gap-3'>
                <img className='w-8' src="/logo_libertas.svg" alt="Foto das mãos de um advogado" />
                <p className='text-2xl text-DarkRed font-bold font-sans'>LIBERTAS</p>
            </a>

        </div>

        <nav className=' items-center justify-center gap-6 hidden lg:flex'>
            <a href="#sobre" className='text-sm leading-6 text-LightGray transition relative no-underline hover:underline-after'>SOBRE</a>
            <a href="#serviços" className='text-sm leading-6 text-LightGray transition relative no-underline hover:underline-after'>SERVIÇOS</a>
            <a href="#historia" className='text-sm leading-6 text-LightGray transition relative no-underline hover:underline-after'>HISTÓRIA</a>
            <a href="#conteConosco" className='text-sm leading-6 text-LightGray transition relative no-underline hover:underline-after'>CONTE CONOSCO</a>
        </nav>
        
        <form className='gap-1 hidden lg:flex max-w-full' onSubmit={handleSearch}>
        <div className='flex flex-col'>
          <div className='relative'>
            <Input 
              name='search' 
              type='search' 
              className='pl-4 text-base text-black' 
              placeholder={"Pesquise os serviços"} 
              onChange={(event) => {
                setSearchName(event.currentTarget.value)
              }}
            />
            <p className={`absolute text-red-500 mt-1 ${error ? 'visible' : 'invisible'}`}>
              {error}
            </p>
          </div>
        </div>
            <button type='submit' className='bg-DarkGray p-2 rounded-md h-[40px] text-3xl'><Search/></button>
            
        </form>
    </div>
  )
}

import { useRouter } from 'next/router'
import React, { FormEvent, useState } from 'react'
import { Input } from './ui/input'
import { MenuIcon, Search } from 'lucide-react'
import { z } from 'zod'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Separator } from './ui/separator'

const searchSchema = z.object({
  searchName: z.string().nonempty("O campo não pode estar vazio"),
})


export const HeaderSearch = () => {
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
    <div className='bg-DarkBlue flex justify-between items-center pt-6 pl-24 pr-24 '>
        <div className='flex items-center justify-center'>
            <a href="/" className='flex items-center gap-3'>
                <img className='w-8' src="/logo_libertas.svg" alt="Foto das mãos de um advogado" />
                <p className='text-2xl text-DarkRed font-bold font-sans'>LIBERTAS</p>
            </a>


        </div>
        
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

        <Sheet>
        <SheetTrigger asChild>
          <MenuIcon className='block lg:hidden cursor-pointer' size={28} />
        </SheetTrigger>
        <SheetContent className='bg-slate-900'>
          <SheetHeader>
            <SheetTitle className='flex gap-2'>
              <img className='w-5' src="/logo_libertas.svg" alt="Foto das mãos de um advogado" />
              <p className='uppercase text-2xl text-DarkRed font-bold font-sans'>LIBERTAS</p>
            </SheetTitle>
            <SheetDescription>
              Browse our site through this area.
            </SheetDescription>
            <Separator className='w-auto'/>
          </SheetHeader> 

          <SheetTitle className='text-white mt-5'>Search</SheetTitle>   
          <form className='gap-1 flex max-w-full mt-3' onSubmit={handleSearch}>
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
        </SheetContent>
    </Sheet>
    </div>
  )
}

import React from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'

interface NavbarSheetProps {
    handleSearch: (event: React.FormEvent<HTMLFormElement>) => void;
    setSearchName: (value: string) => void;
    error: string;
  
}

const NavbarSheet = ({handleSearch, setSearchName, error}: NavbarSheetProps) => {
  return (
    <div>
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
            <nav className=' justify-center flex flex-col my-5'>
              <a href="#sobre" className='text-md leading-6 text-LightGray p-4 hover:bg-slate-400 hover:bg-opacity-5 hover:text-slate-50 rounded'>SOBRE</a>
              <a href="#serviços" className='text-sm leading-6 text-LightGray p-4 hover:text-slate-50 hover:bg-slate-400 hover:bg-opacity-5'>SERVIÇOS</a>
              <a href="#historia" className='text-sm leading-6 text-LightGray p-4 hover:bg-slate-400 hover:bg-opacity-5 hover:text-slate-50 rounded'>HISTÓRIA</a>
              <a href="#conteConosco" className='text-sm leading-6 text-LightGray p-4 hover:bg-slate-400 hover:bg-opacity-5 hover:text-slate-50 rounded'>CONTE CONOSCO</a>
            </nav>
    </div>
  )
}

export default NavbarSheet
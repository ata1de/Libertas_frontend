import React from 'react'
import { Header } from './header'
import { Button } from './ui/button'

export const Hero = () => {

    const style = {
        backgroundImage: `url(/laywer.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'

    }

  return (
    <div className=' w-full min-h-screen md:h-screen min-[1556px]:px-48 px-24 ' style={style}>
        <div>
            <Header/>
        </div>

        <div className='flex items-left justify-center md:w-[50%] flex-col gap-4 h-screen pb-11'>
          <p className='text-4xl font-bold'>LIBERTAS ASSETS</p>
          <p className=' text-LightGray leading-8 max-w-[290px] sm:text-2xl text-lg '>Reiventando o mercado de fundos e investimentos</p>
          <Button className='bg-DarkRed w-[140px] transition duration-300 ease-in-out hover:opacity-75'>Saiba mais</Button>
        </div>
        {/* <img className='pointer-events-none select-none' style={{objectFit: 'cover', objectPosition: '75%'}} src="/lawyer.jpg" alt="Foto de advogado nas mãos" /> */}
    </div>
  )
}

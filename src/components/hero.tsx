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
    <div className=' w-full min-h-screen md:h-screen ' style={style}>
        <div>
            <Header/>
        </div>

        <div className='flex items-center justify-center w-[50%] flex-col gap-4 h-[50%]'>
          <p className='text-3xl font-bold'>LIBERTAS ASSETS</p>
          <p className='text-xl text-LightGray leading-7 max-w-[235px]'>Reiventando o mercado de fundos e investimentos</p>
          <Button className='bg-DarkRed '>Saiba mais</Button>
        </div>
        {/* <img className='pointer-events-none select-none' style={{objectFit: 'cover', objectPosition: '75%'}} src="/lawyer.jpg" alt="Foto de advogado nas mãos" /> */}
    </div>
  )
}

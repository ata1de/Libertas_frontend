import React from 'react'
import { Header } from './header'

export const Hero = () => {

    const style = {
        backgroundImage: `url(/lawyer3.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'

    }

  return (
    <div className=' w-full min-h-screen md:h-screen ' style={style}>
        <div>
            <Header/>

        </div>
        {/* <img className='pointer-events-none select-none' style={{objectFit: 'cover', objectPosition: '75%'}} src="/lawyer.jpg" alt="Foto de advogado nas mãos" /> */}
    </div>
  )
}

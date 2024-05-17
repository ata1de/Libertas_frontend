import React from 'react'

export const Footer = () => {
  return (
    <div className='flex justify-around items-center gap-5 px-24 py-20 bg-DarkBlue'>
        <div className='flex flex-col justify-center gap-3'>
            <img className='w-[100px]' src="/logo_libertas.svg" alt="Logo da empresa Libertas" />
            <p className='text-5xl  font-bold font-sans'>LIBERTAS</p>
        </div>

        <div className='flex flex-col justify-center  gap-4'>
                <div>
                    <p className='font-bold text-right'>Contato</p>
                    <p className='text-LightGray text-right'>999999 | 988989</p>
                    <p className='text-LightGray text-right'>contato@email.com</p>
                </div>
                <div>
                    <p className='font-bold text-right'>Informações e Ouvidoria</p>
                    <p className='text-LightGray text-right'>Atendimento 8h-18h</p>
                    <p className='text-LightGray text-right'>ouvidoriaLibertas@email.com</p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-3'>
                <img className='w-[90px]' src="/OAB-logo.jpg" alt="Logo da OAB" />
                <p className='text-LightGray text-sm'>Empresa certificada e reconhecida pela OAB - 2023</p>
            </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import clientService from '@/services/clientService'

const clientSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email format" }).min(1, { message: "Email is required" }),
    phone: z.string().min(1, { message: "Phone number is required" }),
    company: z.string().min(1, { message: "Company name is required" }),
    demand: z.string().min(1, { message: "Demand description is required" })
});

type ClientSchema = z.infer<typeof clientSchema>

const Forms = () => {
    const { register, handleSubmit } = useForm<ClientSchema>({
        resolver: zodResolver(clientSchema)
    })

    const handleClient = async(data: ClientSchema) => {
        const res = await clientService.postCreateClient(data)
        // console.log(res)
    }



  return (
    <div id='conteConosco' className='flex items-center justify-around gap-8 bg-LightBlue  py-20 px-24'>
        <div className='flex flex-col items-center justify-center gap-4 w-[165px] mr-[120px]'>
            <p className='font-bold text-3xl border-b-2 border-DarkRed'>FALE COM A LIBERTAS</p>
            <div className='flex flex-col justify-center gap-4'>
                <div>
                    <p className='font-bold'>Contato</p>
                    <p className='text-LightGray'>999999 | 988989</p>
                    <p className='text-LightGray'>contato@email.com</p>
                </div>
                <div>
                    <p className='font-bold'>Endereço</p>
                    <p className='text-LightGray'>Rua tal tal tal n°32 102 andar</p>
                    <p className='text-LightGray'>Santo Agostinho, Recife - CEP 5122379</p>
                </div>  
            </div>

        </div>
        <form onSubmit={handleSubmit(handleClient)} className='flex flex-col justify-center items-center gap-3  w-[210px] md:w-[310px] lg:w-[610px]'>
            <div className='flex items-center justify-center gap-3'>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <Input className='text-black  w-[100px] md:w-[150px] lg:w-[300px] ' placeholder='nome' {...register('name')}/>
                    <Input className='text-black   w-[100px] md:w-[150px] lg:w-[300px] ' placeholder='email' {...register('email')}/>
                </div>  
                <div className='flex flex-col items-center justify-center gap-3'>
                    <Input className='text-black   w-[100px] md:w-[150px] lg:w-[300px] ' placeholder='phone' {...register('phone')}/>
                    <Input className='text-black  w-[100px] md:w-[150px] lg:w-[300px] ' placeholder='company' {...register('company')}/>    
                </div>
            </div>

            <Textarea className='text-black h-[150px]' placeholder='Escreva o serviço que você deseja, detalhe o quanto puder.' {...register('demand')}/>
            <Button className='bg-DarkRed w-[150px]' type='submit'>ENVIAR</Button>
        </form>
    </div>
  )
}

export default Forms
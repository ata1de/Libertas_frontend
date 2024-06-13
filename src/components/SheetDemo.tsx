import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Separator } from './ui/separator'
import { Label } from '@radix-ui/react-label'
import { MenuIcon } from 'lucide-react'
import NavbarSheet from './navbarSheet'

interface SheetDemoProps {
    handleSearch: (event: React.FormEvent<HTMLFormElement>) => void;
    setSearchName: (value: string) => void;
    error: string;
  
}

const SheetDemo = ({handleSearch, setSearchName, error}: SheetDemoProps) => {
  return (
    <Sheet>
        <SheetTrigger asChild>
          <MenuIcon className='block lg:hidden cursor-pointer' size={28} />
        </SheetTrigger>
        <SheetContent style={{backgroundColor: '#0F172A'}}>
          <SheetHeader>
            <SheetTitle className='flex gap-2'>
              Libertas
            </SheetTitle>
            <SheetDescription>
              Browse our site through this area.
            </SheetDescription>
            <Separator className='w-auto'/>
          </SheetHeader>
          <NavbarSheet handleSearch={handleSearch} setSearchName={setSearchName} error={error}/>
        </SheetContent>
    </Sheet>
  )
}

export default SheetDemo
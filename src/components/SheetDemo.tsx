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
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
  )
}

export default SheetDemo
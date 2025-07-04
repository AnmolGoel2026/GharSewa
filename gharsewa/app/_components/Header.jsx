"use client"
import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
function Header() {
    const {data}=useSession();
    useEffect(()=>{
        console.log(data);
    },[data]);
  return (
    <div className=' flex p-5 shadow-sm justify-between'>
    <div className='flex gap-8 gap-y-6 items-center' >
       <img src="/logo.png" alt="logo" width={350} height={350}></img>
       <div className='md:flex gap-6 items-center hidden' >
        <Link href={'/'} className=' hover:scale-108 hover:text-primary hover:cursor-pointer'>Home</Link>
        <h2 className='hover:scale-108 hover:text-primary hover:cursor-pointer'>Services</h2>
        <h2 className='hover:scale-108 hover:text-primary hover:cursor-pointer'>About Us</h2>
       </div>
    </div>
    <div>
        {data?.user?
       <DropdownMenu asChild>
  <DropdownMenuTrigger> <Image src={data?.user?.image} alt="user" width={40} height={40} className='rounded-full'/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
        <Link href={'/mybooking'}>My Booking</Link> 
    </DropdownMenuItem>
    <DropdownMenuItem onClick={()=>signOut()}>Log out</DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>
        :
        <Button onClick={()=>signIn('descope')}>Get Started/Log In</Button>}
    </div>
    </div>
  )
}

export default Header
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Search } from 'lucide-react';

function hero() {
  return (
    
    <div className='flex items-center flex-col justify-center pt-16 pb-7  gap-3'>
       <h2 className='font-bold  text-[46px] text-center'> Find Home 
        <span className='text-primary'> Service/Repair</span>
        <br></br> Near You
       </h2>
       <h2 className='text-xl text-gray-400'>Explore Best Home Service & Repair Near You </h2>
    <div className=' flex mt-6 gap-4 items-center'>
                  <Input placeholder="Search" className="rounded-full md: w-[360px]"></Input>
                  <Button className=" rounded-full h-[38px] "><Search className='h-4 w-4'/></Button>
    </div>
    
    </div>
  )
} 

export default hero
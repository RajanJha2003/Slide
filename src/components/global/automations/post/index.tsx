import React from 'react'
import TriggerButton from '../trigger-button';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Loader from '../../loader';

type Props={
    id:string;
}

const PostButton = ({id}:Props) => {
  return (
   <TriggerButton label='Attach a post'>
    <div className="flex flex-col gap-y-3 w-full">
        <div className="flex flex-wrap w-full gap-3">
            <div className='relative w-4/12 aspect-square rounded-lg cursor-pointer overflow-hidden '>
                  <CheckCircle fill='white' stroke='black' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50' />
                  <Image src={"/next.svg"} fill alt='post image' sizes='100vw' className='hover:opacity-75 transition duration-100'
                   />
            </div>
        </div>
        <Button className='bg-gradient-to-br w-full from-[#3352CC] font-medium text-white to-[#1C2D70]'>
            <Loader state={false}>Attach Post</Loader>
        </Button>
    </div>

   </TriggerButton>
  )
}

export default PostButton
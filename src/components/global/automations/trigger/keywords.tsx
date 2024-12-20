import { Input } from '@/components/ui/input'
import React from 'react'

type Props={
    id:string
}

const Keywords = ({id}:Props) => {
  return (
    <div className='bg-background-80 flex flex-col gap-y-3 p-3 rounded-xl'>
        <p className='text-sm text-text-secondary '>Add words that trigger automations</p>
<div className='flex flex-wrap justify-start gap-2 items-center'>
    <div className='bg-background-90 flex items-center gap-x-2 capitalize text-text-secondary py-1 px-4 rounded-full'>

        <p>Words</p>
    </div>
    <Input placeholder='Add keyword...' style={{
        width:Math.min(Math.max(10,2),50) + 'ch'
    }} className='p-0 bg-transparent ring-0 border-none outline-none' />

</div>
    </div>
  )
}

export default Keywords
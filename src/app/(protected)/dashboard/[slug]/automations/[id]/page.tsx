import PostNode from '@/components/global/automations/post/node'
import ThenNode from '@/components/global/automations/then/node'
import Trigger from '@/components/global/automations/trigger'
import AutomationsBreadCrumb from '@/components/global/bread-crumbs/automations'
import { Warning } from '@/icons'
import React from 'react'

type Props={
    params:{
        id:string
    }
}

const page = ({params}:Props) => {
  return (
    <div className='flex flex-col items-center gap-y-20'>
        <AutomationsBreadCrumb id={params.id} />
        <div className='w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3'>

            <div className='flex gap-x-2'>
                <Warning />
                When...

            </div>
            <Trigger id={params.id} />
        </div>
        <ThenNode id={params.id} />
        <PostNode id={params.id} />
    </div>
  )
}

export default page
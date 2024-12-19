import AutomationsBreadCrumb from '@/components/global/bread-crumbs/automations'
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
    </div>
  )
}

export default page
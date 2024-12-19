import Sidebar from '@/components/global/sidebar'
import React from 'react'

type Props = {
    children: React.ReactNode
    params: { slug: string }
  }

const layout = ({children,params}:Props) => {
  return (
    <div className='p-3'>
        <Sidebar slug={params.slug} />


    </div>
  )
}

export default layout
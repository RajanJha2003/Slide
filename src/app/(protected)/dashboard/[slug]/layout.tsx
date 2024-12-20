import InfoBar from '@/components/global/infobar'
import Sidebar from '@/components/global/sidebar'
import React from 'react'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { PrefetchUserAutnomations, PrefetchUserProfile } from '@/react-query/prefetch'

type Props = {
    children: React.ReactNode
    params: { slug: string }
  }

const layout = async({children,params}:Props) => {
 const query=new QueryClient();


 await PrefetchUserProfile(query);

 await PrefetchUserAutnomations(query);




 
  return (
    <div className="p-3">
    <Sidebar slug={params.slug} />
    <div
      className="
  lg:ml-[250px] 
  lg:pl-10 
  lg:py-5 
  flex 
  flex-col 
  overflow-auto
  "
    >
      <InfoBar slug={params.slug} />
      {children}
    </div>
  </div>
  )
}

export default layout
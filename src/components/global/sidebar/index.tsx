"use client";

import { usePaths } from '@/hooks/user-nav'
import { LogoSmall } from '@/svgs/logo-small';
import React from 'react'

type Props={
    slug:string
}

const Sidebar = ({slug}:Props) => {
    const {page}=usePaths();
  return (
    <div className='w-[250px] border-[1px] radial fixed left-0 lg'>
        <div>
            <div>
                <LogoSmall />

            </div>
            <div>
                
            </div>
        </div>

    </div>
  )
}

export default Sidebar
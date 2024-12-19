"use client";

import { PAGE_BREAD_CRUMBS } from '@/constants/pages'
import { usePaths } from '@/hooks/user-nav'
import React from 'react'

type Props={
    slug:string
}

const InfoBar = ({slug}:Props) => {

    const { page } = usePaths()
    const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug
  return (
    <div>InfoBar</div>
  )
}

export default InfoBar
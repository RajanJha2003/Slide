"use client";

import { useQueryAutomations } from '@/hooks/user-queries';
import React from 'react'

const MetricsCard = () => {

    const {data}=useQueryAutomations();

    const comments=data?.data.reduce((current,next)=>{
        return current+next.listener?.dmCount!
    },0)
  return (
    <div>MetricsCard</div>
  )
}

export default MetricsCard
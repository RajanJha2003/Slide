import React from 'react'
import TriggerButton from '../trigger-button';
import { AUTOMATION_TRIGGERS } from '@/constants/automation';
import Keywords from './keywords';
import { Button } from '@/components/ui/button';
import Loader from '../../loader';

type Props={
    id:string;
}

const Trigger = ({id}:Props) => {
  return (
    <TriggerButton label='Add Trigger'>
        <div className='flex flex-col gap-y-2'>
            {
                AUTOMATION_TRIGGERS.map((trigger)=>(
                    <div className='hover:opacity-80 text-white rounded-xl flex cursor-pointer flex-col p-3 gap-y-2'>
                        <div className='flex gap-x-2 items-center'>
                            {trigger.icon}
                            <p className='font-bold'>{trigger.label}</p>

                        </div>
                        <p className='text-sm font-light'>{trigger.description}</p>

                    </div>
                ))
            }

            <Keywords id={id} />
            <Button>
                <Loader state={false}>Create Trigger</Loader>
            </Button>


        </div>


    </TriggerButton>
  )
}

export default Trigger
import React from 'react';
import { Button } from '@/components/ui/button';
import { IconCircleDot } from '@tabler/icons-react';


const HireMeBtn = () => {
  return (
    <div className='flex items-center gap-2'>
        
        <Button variant="outline">
        <IconCircleDot />Hire Me
        </Button>
    </div>
  )
}

export default HireMeBtn
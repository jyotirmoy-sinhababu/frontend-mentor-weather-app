'use client';

import Image from 'next/image';
import logo from '../app/app-icon/logo.svg';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Settings, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <header className='flex items-center justify-between p-6'>
      <div className='flex items-center gap-2'>
        <div className='w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center'>
          <Image src={logo} alt='app-log' />
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' size='sm' className='gap-2 bg-transparent'>
            <Settings />
            Units <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Switch to Imperial</DropdownMenuItem>
          <label>Temperature</label>
          <DropdownMenuItem>Celsius (°C)</DropdownMenuItem>
          <DropdownMenuItem>Fahrenheit (°F)</DropdownMenuItem>
          <label>Wind Speed</label>
          <DropdownMenuItem>Km/hr</DropdownMenuItem>
          <DropdownMenuItem>mph</DropdownMenuItem>
          <label>Precipitation</label>
          <DropdownMenuItem>Millimeters(mm)</DropdownMenuItem>
          <DropdownMenuItem>Inches (in)</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Navbar;

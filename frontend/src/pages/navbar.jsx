import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Calendar,
  FileClockIcon, 
  Film, 
  Ticket, 
  UserCircle2Icon 
} from 'lucide-react';

export const Navbar = () => {
  return (
    <div className='h-screen w-40 bg-gray-400'>
      <ul className='h-full space-y-8 '>
        <li className='h-20 hover:bg-slate-300 '>
          <Link to="showTimings" role='button' className='w-full h-full flex flex-col justify-center items-center'>
                <Calendar className='w-10 h-10'/>
              <span className='font-mono text-lg text-teal-800'>ShowTime</span>
          </Link>
        </li>
        
        <li className='h-20 hover:bg-slate-300'>
          <Link to="movies" role='button' className='w-full h-full flex flex-col justify-center items-center'>
                <Film className='w-10 h-10'/>
              <span className='font-mono text-lg text-teal-800'>Movies</span>
          </Link>
        </li>

        <li className='h-20 hover:bg-slate-300'>
          <Link to="booking" role='button' className='w-full h-full flex flex-col justify-center items-center'>
                <Ticket className='w-10 h-10'/>
              <span className='font-mono text-lg text-teal-800'>Book Picture</span>
          </Link>
        </li>

        <li className='h-20 hover:bg-slate-300'>
          <Link to="history" role='button' className='w-full h-full flex flex-col justify-center items-center'>
                <FileClockIcon className='w-10 h-10'/>
              <span className='font-mono text-lg text-teal-800'>History</span>
          </Link>
        </li>

        <li className='h-20 hover:bg-slate-300'>
          <Link to="editProfile" role='button' className='w-full h-full flex flex-col justify-center items-center'>
                <UserCircle2Icon className='w-10 h-10'/>
              <span className='font-mono text-lg text-teal-800'>EditProfile</span>
          </Link>
        </li>

      </ul>
    </div>
  )
}
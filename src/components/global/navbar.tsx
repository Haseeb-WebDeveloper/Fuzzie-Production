import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs'
type Props = {}
const Navbar = async (props: Props) => {
  const user = await currentUser()
  console.log(user)
  return (  
    <>
      <header className='fixed right-0 left-0 top-0 py-3 px-4 md:px-8 lg:px-20 font-twk bg-[#161616] backdrop-blur-lg border-b-[1px] border-neutral-900 z-[100] flex items-center justify-between '>
        <aside className='flex items-center gap-[2px] '>
          <p className='text-2xl font-semibold'>Fu</p>
          <Image
            src="/fuzzieLogo.png"
            width={12}
            height={12}
            alt='Fuzzie Logo'
            className='shadow-sm'
          />
          <p className='text-2xl font-semibold'>zie</p>
        </aside>
        <nav className='absolute left-1/2 translate-x-[-50%] top-1/2 -translate-y-1/2 transform hidden md:block'>
          <ul className='flex items-center gap-4 list-none font-twk font-normal text-sm text-neutral-200 hover:text-white'>
            <li className='text-neutral-200 hover:text-white'>
              <Link href="/products">Products</Link>
            </li>
            <li className='text-neutral-200 hover:text-white'>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li className='text-neutral-200 hover:text-white'>
              <Link href="/client">Client</Link>
            </li>
            <li className='text-neutral-200 hover:text-white'>
              <Link href="/resources">Resources</Link>
            </li>
            <li className='text-neutral-200 hover:text-white'>
              <Link href="/documentation">Documentation</Link>
            </li>
            <li className='text-neutral-200 hover:text-white'>
              <Link href="/experties">Experties</Link>
            </li>
          </ul>
        </nav>
        <aside className='flex items-center gap-4'>
          <Link href={"/dashboard"} className=''>
              <button className="px-4 py-2 rounded-md bg-[#1C1C1C] border-[0.1px] shadow">
                 {user ? 'Dashboard' : 'Get Started'}
              </button>
          </Link>

          {user && <UserButton />}
          <MenuIcon className='md:hidden'/>
        </aside>
      </header>
    </>
  )
}

export default Navbar
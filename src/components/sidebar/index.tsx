'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { menuOptions } from '@/lib/constant'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { LucideDatabase, LucideGitBranch, LucideMousePointerClick, LucideSettings } from 'lucide-react'
import { ModeToggle } from '../global/mode-toggle'
type Props = {}

const MenuOptions = (props: Props) => {
    const path = usePathname()
    return (
        <nav className='flex flex-col justify-between items-center gap-10 py-6 px-2 dark:bg-black h-screen overflow-scroll'>
            <div className='flex items-center justify-center gap-8 flex-col'>
                {/*sidebar top logo */}
                <Link
                    href="/"
                    className='flex font-semibold flex-row'>
                    Fuzzie
                </Link>
                {/* sidebar menu options */}
                <TooltipProvider>
                    {menuOptions.map((menuItem) => (
                        <ul key={menuItem.name}>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger>
                                    <li>
                                        <Link
                                            href={menuItem.href}
                                            className={cn(
                                                'group h-8 w-8 flex items-center justify-center  scale-[1.5] rounded-lg p-[3px]  cursor-pointer',
                                                {
                                                    'dark:bg-[#2F006B] bg-[#EEE0FF] ':
                                                        path === menuItem.href,
                                                }
                                            )}
                                        >
                                            <menuItem.Component
                                                selected={path === menuItem.href}
                                            />
                                        </Link>
                                    </li>
                                </TooltipTrigger>
                                <TooltipContent
                                    side="right"
                                    className="bg-black/10 ml-1 backdrop-blur-xl"
                                >
                                    <p>{menuItem.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </ul>
                    ))}
                </TooltipProvider>
                {/* seperator */}
                <Separator/>
                {/* sidebar bottom options */}
                <div className='flex flex-col items-center gap-9 dark:bg-[#353535]/30 py-4 px-2 rounded-full h-56 overflow-scroll border-[1px]'>
                    {/* mouse pointer click */}
                    <div className='relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346] '>
                        <LucideMousePointerClick
                            className='dark:text-white'
                            size={18}
                        />
                        <div className='border-l-[2px] border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px] '></div>
                    </div>
                    {/* git branch */}
                    <div className='relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346] '>
                        <LucideGitBranch
                            className='dark:text-white'
                            size={18}
                        />
                        <div className='border-l-[2px] border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px] '></div>
                    </div>
                    {/* settings */}
                    <div className='relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346] '>
                        <LucideSettings
                            className='dark:text-white'
                            size={18}
                        />
                        <div className='border-l-[2px] border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px] '></div>
                    </div>
                    {/* database */}
                    <div className='relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346] '>
                        <LucideDatabase
                            className='dark:text-white'
                            size={18}
                        />
                    </div>
                </div>

                {/* sidebar bottom seperator */}
                <div className='relative flex flex-col justify-center items-center gap-8'>
                    <ModeToggle/>
                </div>
            </div>
        </nav>
    )
}

export default MenuOptions
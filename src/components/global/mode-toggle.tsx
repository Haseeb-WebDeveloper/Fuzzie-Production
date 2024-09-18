'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button_01'
import {
  DropdownMenu,
  DropdownMenuContent,  
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// Commit: Create ModeToggle component for theme switching
// - Implements a dropdown menu for theme selection
// - Uses next-themes for theme management
// - Provides options for light, dark, and system themes
export function ModeToggle() {
  const { setTheme } = useTheme()
  return (
    <DropdownMenu>
      {/* Commit: Add toggle button with sun and moon icons */}
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
        >
          {/* Commit: Implement animated sun icon for light mode */}
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          {/* Commit: Implement animated moon icon for dark mode */}
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      {/* Commit: Add dropdown menu for theme selection */}
      <DropdownMenuContent align="end">
        {/* Commit: Add light theme option */}
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        {/* Commit: Add dark theme option */}
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        {/* Commit: Add system theme option */}
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
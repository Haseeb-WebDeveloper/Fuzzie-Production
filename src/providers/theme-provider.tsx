"use client"

// Import necessary dependencies
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

// Define a custom ThemeProvider component
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Wrap the children with NextThemesProvider, passing along any additional props
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

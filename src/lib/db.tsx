import { PrismaClient } from '@prisma/client'

// Declare a global variable for the Prisma client
declare global {
  var prisma: PrismaClient | undefined
}

// Create a single instance of PrismaClient to be used throughout the application
export const db = globalThis.prisma || new PrismaClient()

// In development, save the PrismaClient instance to the global object to prevent multiple instances
if (process.env.NODE_ENV !== 'production') globalThis.prisma = db
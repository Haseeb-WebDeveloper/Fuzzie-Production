import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

//  Utility function to merge and apply Tailwind CSS classes.
//  
//  This function combines the functionality of `clsx` and `twMerge`:
//  1. `clsx` is used to conditionally join classNames together.
//  2. `twMerge` is then applied to intelligently merge Tailwind CSS classes,
//     resolving conflicts and optimizing the final class string.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

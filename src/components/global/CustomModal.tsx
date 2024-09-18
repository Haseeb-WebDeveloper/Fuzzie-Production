/**
 * CustomModal Component
 * 
 * This component creates a reusable modal using the Drawer component from '@/components/ui/drawer'.
 * It's designed to be flexible and can be used across the application for various purposes.
 * 
 * Key features:
 * - Uses the useModal hook for managing the modal's open/close state
 * - Accepts title, subheading, and children as props for customizable content
 * - Implements a scrollable content area
 * - Includes a close button in the footer
 * 
 * Usage:
 * <CustomModal title="Modal Title" subheading="Modal Subheading">
 *   {/* Modal content goes here *\/}
 * </CustomModal>
 */

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { useModal } from '@/providers/modal-provider'

import React from 'react'
import { Button } from '../ui/button'

type Props = {
  title: string
  subheading: string
  children: React.ReactNode
  defaultOpen?: boolean
}

const CustomModal = ({ children, subheading, title, defaultOpen }: Props) => {
  const { isOpen, setClose } = useModal()
  const handleClose = () => setClose()

  return (
    <Drawer
      open={isOpen}
      onClose={handleClose}
    >
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">{title}</DrawerTitle>
          <DrawerDescription className="text-center flex flex-col items-center gap-4 h-96 overflow-scroll">
            {subheading}
            {children}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex flex-col gap-4 bg-background border-t-[1px] border-t-muted">
          <DrawerClose>
            <Button
              variant="ghost"
              className="w-full"
              onClick={handleClose}
            >
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default CustomModal
'use client'
import { createContext, useContext, useEffect, useState } from 'react'

// Props type for the ModalProvider component
interface ModalProviderProps {
  children: React.ReactNode
}

// Type for the data that can be passed to the modal
export type ModalData = {}

// Type definition for the context value
type ModalContextType = {
  data: ModalData
  isOpen: boolean
  setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>) => void
  setClose: () => void
}

// Create a context for the modal with default values
export const ModalContext = createContext<ModalContextType>({
  data: {},
  isOpen: false,
  setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>) => {},
  setClose: () => {},
})

// ModalProvider component to wrap the application and provide modal functionality
const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  // State to control whether the modal is open or closed
  const [isOpen, setIsOpen] = useState(false)
  // State to store data associated with the modal
  const [data, setData] = useState<ModalData>({})
  // State to store the current modal component
  const [showingModal, setShowingModal] = useState<React.ReactNode>(null)
  // State to ensure the component is mounted before rendering
  const [isMounted, setIsMounted] = useState(false)

  // Effect to set isMounted to true after the component mounts
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Function to open the modal
  const setOpen = async (
    modal: React.ReactNode,
    fetchData?: () => Promise<any>
  ) => {
    if (modal) {
      // If fetchData is provided, call it and update the data state
      if (fetchData) {
        setData({ ...data, ...(await fetchData()) } || {})
      }
      setShowingModal(modal)
      setIsOpen(true)
    }
  }

  // Function to close the modal
  const setClose = () => {
    setIsOpen(false)
    setData({})
  }

  // Don't render anything if the component hasn't mounted yet
  if (!isMounted) return null

  return (
    <ModalContext.Provider value={{ data, setOpen, setClose, isOpen }}>
      {children}
      {showingModal}
    </ModalContext.Provider>
  )
}

// Custom hook to use the modal context
export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within the modal provider')
  }
  return context
}

export default ModalProvider
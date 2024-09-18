import { create } from 'zustand'

// Define the structure for option objects used in the store
export interface Option {
  value: string
  label: string
  disable?: boolean
  /** fixed option that can't be removed. */
  fixed?: boolean
  /** Group the options by providing key. */
  [key: string]: string | boolean | undefined
}

// Define the structure of the Fuzzie store
type FuzzieStore = {
  // Google file data
  googleFile: any
  setGoogleFile: (googleFile: any) => void
  // List of available Slack channels
  slackChannels: Option[]
  setSlackChannels: (slackChannels: Option[]) => void
  // List of selected Slack channels
  selectedSlackChannels: Option[]
  setSelectedSlackChannels: (selectedSlackChannels: Option[]) => void
}

// Create and export the Fuzzie store using Zustand
export const useFuzzieStore = create<FuzzieStore>()((set) => ({
  // Initialize googleFile as an empty object
  googleFile: {},
  // Function to update googleFile
  setGoogleFile: (googleFile: any) => set({ googleFile }),
  // Initialize slackChannels as an empty array
  slackChannels: [],
  // Function to update slackChannels
  setSlackChannels: (slackChannels: Option[]) => set({ slackChannels }),
  // Initialize selectedSlackChannels as an empty array
  selectedSlackChannels: [],
  // Function to update selectedSlackChannels
  setSelectedSlackChannels: (selectedSlackChannels: Option[]) =>
    set({ selectedSlackChannels }),
}))
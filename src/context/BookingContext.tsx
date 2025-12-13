import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Experience, TimeSlot } from '../data/experiences'

export interface PetInfo {
  id?: string
  name: string
  breed: string
  age: string
  weight: string
  temperament: string
  specialNeeds: string
  vaccinationsUpToDate: boolean
}

export interface CustomerInfo {
  id?: string
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  zipCode: string
  emergencyContact: string
  emergencyPhone: string
}

export interface BookingDetails {
  experience: Experience | null
  timeSlot: TimeSlot | null
  selectedDate: Date | null
  pets: PetInfo[]
  customer: CustomerInfo | null
  addOns: string[]
  totalPrice: number
  liveCameraAccess: boolean
}

interface BookingContextType {
  booking: BookingDetails
  setExperience: (experience: Experience) => void
  setTimeSlot: (slot: TimeSlot) => void
  setSelectedDate: (date: Date) => void
  addPet: (pet: PetInfo) => void
  removePet: (index: number) => void
  updatePet: (index: number, pet: PetInfo) => void
  setCustomer: (customer: CustomerInfo) => void
  toggleAddOn: (addOnId: string) => void
  setLiveCameraAccess: (enabled: boolean) => void
  calculateTotal: () => number
  resetBooking: () => void
  currentStep: number
  setCurrentStep: (step: number) => void
}

const initialBooking: BookingDetails = {
  experience: null,
  timeSlot: null,
  selectedDate: null,
  pets: [],
  customer: null,
  addOns: [],
  totalPrice: 0,
  liveCameraAccess: false,
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [booking, setBooking] = useState<BookingDetails>(initialBooking)
  const [currentStep, setCurrentStep] = useState(1)

  const setExperience = (experience: Experience) => {
    setBooking(prev => ({ ...prev, experience }))
  }

  const setTimeSlot = (slot: TimeSlot) => {
    setBooking(prev => ({ ...prev, timeSlot: slot }))
  }

  const setSelectedDate = (date: Date) => {
    setBooking(prev => ({ ...prev, selectedDate: date }))
  }

  const addPet = (pet: PetInfo) => {
    setBooking(prev => ({ ...prev, pets: [...prev.pets, pet] }))
  }

  const removePet = (index: number) => {
    setBooking(prev => ({
      ...prev,
      pets: prev.pets.filter((_, i) => i !== index),
    }))
  }

  const updatePet = (index: number, pet: PetInfo) => {
    setBooking(prev => ({
      ...prev,
      pets: prev.pets.map((p, i) => (i === index ? pet : p)),
    }))
  }

  const setCustomer = (customer: CustomerInfo) => {
    setBooking(prev => ({ ...prev, customer }))
  }

  const toggleAddOn = (addOnId: string) => {
    setBooking(prev => {
      const hasAddOn = prev.addOns.includes(addOnId)
      return {
        ...prev,
        addOns: hasAddOn
          ? prev.addOns.filter(id => id !== addOnId)
          : [...prev.addOns, addOnId],
      }
    })
  }

  const setLiveCameraAccess = (enabled: boolean) => {
    setBooking(prev => ({ ...prev, liveCameraAccess: enabled }))
  }

  const calculateTotal = () => {
    let total = 0
    
    // Base price per pet
    if (booking.timeSlot && booking.pets.length > 0) {
      total = booking.timeSlot.price * booking.pets.length
    }
    
    // Add-ons (per booking, not per pet)
    if (booking.liveCameraAccess) {
      total += 15 // Live camera access
    }
    
    if (booking.addOns.includes('premium-photos')) {
      total += 25
    }
    
    return total
  }

  const resetBooking = () => {
    setBooking(initialBooking)
    setCurrentStep(1)
  }

  return (
    <BookingContext.Provider
      value={{
        booking,
        setExperience,
        setTimeSlot,
        setSelectedDate,
        addPet,
        removePet,
        updatePet,
        setCustomer,
        toggleAddOn,
        setLiveCameraAccess,
        calculateTotal,
        resetBooking,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider')
  }
  return context
}

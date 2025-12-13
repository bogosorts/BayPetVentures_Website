import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { PetInfo, CustomerInfo } from './BookingContext'

export interface User {
  id: string
  email: string
  profile: CustomerInfo | null
  pets: PetInfo[]
  createdAt: Date
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signup: (email: string, password: string, profile?: CustomerInfo) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  updateProfile: (profile: CustomerInfo) => Promise<void>
  addPet: (pet: PetInfo) => Promise<void>
  updatePet: (petId: string, pet: PetInfo) => Promise<void>
  removePet: (petId: string) => Promise<void>
  createAccountFromBooking: (email: string, password: string, customer: CustomerInfo, pets: PetInfo[]) => Promise<{ success: boolean; error?: string }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock storage for demo - in production, this connects to Supabase
const STORAGE_KEY = 'petventure_user'
const USERS_KEY = 'petventure_users'

function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem(STORAGE_KEY)
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
    setIsLoading(false)
  }, [])

  // Save user to storage when changed
  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
      // Also update in users database
      const users = JSON.parse(localStorage.getItem(USERS_KEY) || '{}')
      users[user.email] = user
      localStorage.setItem(USERS_KEY, JSON.stringify(users))
    }
  }, [user])

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    try {
      const users = JSON.parse(localStorage.getItem(USERS_KEY) || '{}')
      const existingUser = users[email]
      
      if (!existingUser) {
        setIsLoading(false)
        return { success: false, error: 'No account found with this email' }
      }
      
      // In production, password would be verified by Supabase
      // For demo, we'll accept any password for existing users
      if (password.length < 6) {
        setIsLoading(false)
        return { success: false, error: 'Invalid password' }
      }
      
      setUser(existingUser)
      setIsLoading(false)
      return { success: true }
    } catch {
      setIsLoading(false)
      return { success: false, error: 'Login failed. Please try again.' }
    }
  }

  const signup = async (
    email: string, 
    password: string, 
    profile?: CustomerInfo
  ): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)
    
    await new Promise(resolve => setTimeout(resolve, 500))
    
    try {
      const users = JSON.parse(localStorage.getItem(USERS_KEY) || '{}')
      
      if (users[email]) {
        setIsLoading(false)
        return { success: false, error: 'An account with this email already exists' }
      }
      
      if (password.length < 6) {
        setIsLoading(false)
        return { success: false, error: 'Password must be at least 6 characters' }
      }
      
      const newUser: User = {
        id: generateId(),
        email,
        profile: profile || null,
        pets: [],
        createdAt: new Date(),
      }
      
      users[email] = newUser
      localStorage.setItem(USERS_KEY, JSON.stringify(users))
      setUser(newUser)
      setIsLoading(false)
      return { success: true }
    } catch {
      setIsLoading(false)
      return { success: false, error: 'Signup failed. Please try again.' }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  const updateProfile = async (profile: CustomerInfo) => {
    if (!user) return
    setUser({ ...user, profile })
  }

  const addPet = async (pet: PetInfo) => {
    if (!user) return
    const newPet = { ...pet, id: generateId() }
    setUser({ ...user, pets: [...user.pets, newPet] })
  }

  const updatePet = async (petId: string, pet: PetInfo) => {
    if (!user) return
    setUser({
      ...user,
      pets: user.pets.map(p => (p.id === petId ? { ...pet, id: petId } : p)),
    })
  }

  const removePet = async (petId: string) => {
    if (!user) return
    setUser({
      ...user,
      pets: user.pets.filter(p => p.id !== petId),
    })
  }

  const createAccountFromBooking = async (
    email: string,
    password: string,
    customer: CustomerInfo,
    pets: PetInfo[]
  ): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)
    
    await new Promise(resolve => setTimeout(resolve, 500))
    
    try {
      const users = JSON.parse(localStorage.getItem(USERS_KEY) || '{}')
      
      if (users[email]) {
        setIsLoading(false)
        return { success: false, error: 'An account with this email already exists. Please log in.' }
      }
      
      if (password.length < 6) {
        setIsLoading(false)
        return { success: false, error: 'Password must be at least 6 characters' }
      }
      
      const newUser: User = {
        id: generateId(),
        email,
        profile: customer,
        pets: pets.map(p => ({ ...p, id: generateId() })),
        createdAt: new Date(),
      }
      
      users[email] = newUser
      localStorage.setItem(USERS_KEY, JSON.stringify(users))
      setUser(newUser)
      setIsLoading(false)
      return { success: true }
    } catch {
      setIsLoading(false)
      return { success: false, error: 'Account creation failed. Please try again.' }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        updateProfile,
        addPet,
        updatePet,
        removePet,
        createAccountFromBooking,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

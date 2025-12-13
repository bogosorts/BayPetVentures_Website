import { useState, useEffect } from 'react'
import { useBooking, type CustomerInfo } from '../../context/BookingContext'
import { useAuth } from '../../context/AuthContext'

const emptyCustomer: CustomerInfo = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  zipCode: '',
  emergencyContact: '',
  emergencyPhone: '',
}

export default function CustomerForm() {
  const { booking, setCustomer, setCurrentStep } = useBooking()
  const { user, isAuthenticated } = useAuth()
  const [customer, setCustomerState] = useState<CustomerInfo>(booking.customer || emptyCustomer)
  const [errors, setErrors] = useState<Partial<Record<keyof CustomerInfo, string>>>({})

  useEffect(() => {
    if (isAuthenticated && user?.profile && !booking.customer) {
      setCustomerState(user.profile)
    }
  }, [isAuthenticated, user, booking.customer])

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof CustomerInfo, string>> = {}
    if (!customer.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!customer.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!customer.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email)) newErrors.email = 'Please enter a valid email'
    if (!customer.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!customer.address.trim()) newErrors.address = 'Address is required'
    if (!customer.city.trim()) newErrors.city = 'City is required'
    if (!customer.zipCode.trim()) newErrors.zipCode = 'ZIP code is required'
    if (!customer.emergencyContact.trim()) newErrors.emergencyContact = 'Emergency contact is required'
    if (!customer.emergencyPhone.trim()) newErrors.emergencyPhone = 'Emergency phone is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleContinue = () => { if (validateForm()) { setCustomer(customer); setCurrentStep(4) } }
  const handleBack = () => { setCurrentStep(2) }
  const handleChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerState({ ...customer, [field]: value })
    if (errors[field]) setErrors({ ...errors, [field]: undefined })
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-heading font-bold text-sand-900 flex items-center gap-2">
        <span className="w-8 h-8 bg-forest-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
        Your Information
      </h3>

      <div className="bg-ocean-50 rounded-xl p-4 border border-ocean-200">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-ocean-200 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-ocean-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </div>
          <div>
            <p className="font-semibold text-ocean-900">We'll pick up your pup!</p>
            <p className="text-sm text-ocean-700">Please provide your address for door-to-door pickup and drop-off service.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-sand-200 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-sand-700 mb-1">First Name *</label>
            <input type="text" value={customer.firstName} onChange={(e) => handleChange('firstName', e.target.value)} className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? 'border-sunset-500' : 'border-sand-200'} focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none`} placeholder="Jane" />
            {errors.firstName && <p className="text-sm text-sunset-500 mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-sand-700 mb-1">Last Name *</label>
            <input type="text" value={customer.lastName} onChange={(e) => handleChange('lastName', e.target.value)} className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? 'border-sunset-500' : 'border-sand-200'} focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none`} placeholder="Doe" />
            {errors.lastName && <p className="text-sm text-sunset-500 mt-1">{errors.lastName}</p>}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-sand-700 mb-1">Email *</label>
            <input type="email" value={customer.email} onChange={(e) => handleChange('email', e.target.value)} className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-sunset-500' : 'border-sand-200'} focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none`} placeholder="jane@example.com" />
            {errors.email && <p className="text-sm text-sunset-500 mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-sand-700 mb-1">Phone *</label>
            <input type="tel" value={customer.phone} onChange={(e) => handleChange('phone', e.target.value)} className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-sunset-500' : 'border-sand-200'} focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none`} placeholder="(415) 555-1234" />
            {errors.phone && <p className="text-sm text-sunset-500 mt-1">{errors.phone}</p>}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-sand-700 mb-1">Pickup Address *</label>
          <input type="text" value={customer.address} onChange={(e) => handleChange('address', e.target.value)} className={`w-full px-4 py-3 rounded-xl border ${errors.address ? 'border-sunset-500' : 'border-sand-200'} focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none`} placeholder="123 Main Street, Apt 4B" />
          {errors.address && <p className="text-sm text-sunset-500 mt-1">{errors.address}</p>}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-sand-700 mb-1">City *</label>
            <input type="text" value={customer.city} onChange={(e) => handleChange('city', e.target.value)} className={`w-full px-4 py-3 rounded-xl border ${errors.city ? 'border-sunset-500' : 'border-sand-200'} focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none`} placeholder="San Francisco" />
            {errors.city && <p className="text-sm text-sunset-500 mt-1">{errors.city}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-sand-700 mb-1">ZIP Code *</label>
            <input type="text" value={customer.zipCode} onChange={(e) => handleChange('zipCode', e.target.value)} className={`w-full px-4 py-3 rounded-xl border ${errors.zipCode ? 'border-sunset-500' : 'border-sand-200'} focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none`} placeholder="94110" />
            {errors.zipCode && <p className="text-sm text-sunset-500 mt-1">{errors.zipCode}</p>}
          </div>
        </div>
        <div className="border-t border-sand-200 pt-4">
          <p className="text-sm font-semibold text-sand-900 mb-3">Emergency Contact (required)</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-sand-700 mb-1">Contact Name *</label>
              <input type="text" value={customer.emergencyContact} onChange={(e) => handleChange('emergencyContact', e.target.value)} className={`w-full px-4 py-3 rounded-xl border ${errors.emergencyContact ? 'border-sunset-500' : 'border-sand-200'} focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none`} placeholder="John Doe" />
              {errors.emergencyContact && <p className="text-sm text-sunset-500 mt-1">{errors.emergencyContact}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-sand-700 mb-1">Contact Phone *</label>
              <input type="tel" value={customer.emergencyPhone} onChange={(e) => handleChange('emergencyPhone', e.target.value)} className={`w-full px-4 py-3 rounded-xl border ${errors.emergencyPhone ? 'border-sunset-500' : 'border-sand-200'} focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none`} placeholder="(415) 555-5678" />
              {errors.emergencyPhone && <p className="text-sm text-sunset-500 mt-1">{errors.emergencyPhone}</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button onClick={handleBack} className="px-6 py-3 rounded-xl border border-sand-300 text-sand-700 hover:bg-sand-50 transition-colors">Back</button>
        <button onClick={handleContinue} className="flex-grow bg-gradient-to-r from-forest-500 to-forest-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
          Review & Pay
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </button>
      </div>
    </div>
  )
}

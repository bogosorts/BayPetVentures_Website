import { useState } from 'react'
import { useBooking } from '../../context/BookingContext'
import { useAuth } from '../../context/AuthContext'
import { formatDate, formatTime, addOns } from '../../data/experiences'

export default function BookingCheckout() {
  const { booking, setLiveCameraAccess, toggleAddOn, calculateTotal, setCurrentStep, resetBooking } = useBooking()
  const { user, isAuthenticated, createAccountFromBooking } = useAuth()
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showCreateAccount, setShowCreateAccount] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [accountError, setAccountError] = useState('')
  const total = calculateTotal()

  const handleCreateAccount = async () => {
    if (password.length < 6) { setAccountError('Password must be at least 6 characters'); return }
    if (password !== confirmPassword) { setAccountError('Passwords do not match'); return }
    if (booking.customer) {
      const result = await createAccountFromBooking(booking.customer.email, password, booking.customer, booking.pets)
      if (result.success) { setShowCreateAccount(false); setAccountError('') }
      else { setAccountError(result.error || 'Failed to create account') }
    }
  }

  const handleSubmitBooking = async () => {
    setIsProcessing(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    const bookingData = {
      experience: booking.experience?.name,
      date: booking.selectedDate ? formatDate(booking.selectedDate) : '',
      time: booking.timeSlot ? `${formatTime(booking.timeSlot.startTime)} - ${formatTime(booking.timeSlot.endTime)}` : '',
      pets: booking.pets.map(p => p.name).join(', '),
      customer: `${booking.customer?.firstName} ${booking.customer?.lastName}`,
      email: booking.customer?.email,
      phone: booking.customer?.phone,
      address: `${booking.customer?.address}, ${booking.customer?.city} ${booking.customer?.zipCode}`,
      liveCameraAccess: booking.liveCameraAccess,
      total: total,
    }
    console.log('Booking submitted:', bookingData)
    console.log('Email would be sent to: bogosorts@hyperfocusedholdings.com')
    setIsProcessing(false)
    setShowSuccess(true)
  }

  const handleBack = () => { setCurrentStep(3) }

  if (showSuccess) {
    return (
      <div className="text-center py-12 space-y-6">
        <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-10 h-10 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <div>
          <h3 className="text-2xl font-heading font-bold text-sand-900 mb-2">Booking Submitted! 🎉</h3>
          <p className="text-sand-600 max-w-md mx-auto">We've received your booking request and will confirm within 24 hours. Check your email for updates!</p>
        </div>
        <div className="bg-sand-50 rounded-xl p-6 max-w-md mx-auto text-left">
          <p className="text-sm font-semibold text-sand-900 mb-2">Booking Summary</p>
          <div className="space-y-2 text-sm text-sand-600">
            <p><strong>{booking.experience?.name}</strong></p>
            <p>{booking.selectedDate && formatDate(booking.selectedDate)}</p>
            <p>{booking.timeSlot && `${formatTime(booking.timeSlot.startTime)} - ${formatTime(booking.timeSlot.endTime)}`}</p>
            <p>Pets: {booking.pets.map(p => p.name).join(', ')}</p>
            <p className="text-forest-600 font-semibold">Total: ${total}</p>
          </div>
        </div>
        {!isAuthenticated && !showCreateAccount && (
          <div className="bg-ocean-50 rounded-xl p-6 max-w-md mx-auto">
            <p className="font-semibold text-ocean-900 mb-2">Save your information for next time?</p>
            <p className="text-sm text-ocean-700 mb-4">Create an account to quickly book future adventures and manage your pet profiles.</p>
            <button onClick={() => setShowCreateAccount(true)} className="bg-ocean-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-ocean-600 transition-colors">Create Account</button>
          </div>
        )}
        {showCreateAccount && (
          <div className="bg-white rounded-xl p-6 max-w-md mx-auto border border-sand-200">
            <p className="font-semibold text-sand-900 mb-4">Create Your Account</p>
            <div className="space-y-4">
              <div><label className="block text-sm text-sand-600 mb-1">Email</label><input type="email" value={booking.customer?.email || ''} disabled className="w-full px-4 py-2 rounded-lg bg-sand-50 border border-sand-200 text-sand-500" /></div>
              <div><label className="block text-sm text-sand-600 mb-1">Password</label><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-sand-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none" placeholder="Min 6 characters" /></div>
              <div><label className="block text-sm text-sand-600 mb-1">Confirm Password</label><input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-sand-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none" placeholder="Confirm password" /></div>
              {accountError && <p className="text-sm text-sunset-500">{accountError}</p>}
              <div className="flex gap-3">
                <button onClick={handleCreateAccount} className="flex-grow bg-forest-500 text-white py-2 rounded-lg font-semibold hover:bg-forest-600 transition-colors">Create Account</button>
                <button onClick={() => setShowCreateAccount(false)} className="px-4 py-2 rounded-lg border border-sand-300 text-sand-600 hover:bg-sand-50 transition-colors">Skip</button>
              </div>
            </div>
          </div>
        )}
        {isAuthenticated && <div className="bg-forest-50 rounded-xl p-4 max-w-md mx-auto"><p className="text-forest-700">✓ Logged in as <strong>{user?.email}</strong></p></div>}
        <button onClick={resetBooking} className="text-forest-600 font-semibold hover:text-forest-700 transition-colors">Book Another Adventure</button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-heading font-bold text-sand-900 flex items-center gap-2">
        <span className="w-8 h-8 bg-forest-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
        Review & Confirm
      </h3>
      <div className="bg-white rounded-xl p-6 border border-sand-200">
        <h4 className="font-semibold text-sand-900 mb-4">Booking Details</h4>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <img src={booking.experience?.image} alt={booking.experience?.name} className="w-16 h-16 rounded-lg object-cover" />
            <div className="flex-grow">
              <p className="font-semibold text-sand-900">{booking.experience?.name}</p>
              <p className="text-sm text-sand-600">{booking.experience?.location}</p>
              <p className="text-sm text-forest-600 font-medium">{booking.selectedDate && formatDate(booking.selectedDate)}</p>
              <p className="text-sm text-sand-500">{booking.timeSlot && `${formatTime(booking.timeSlot.startTime)} - ${formatTime(booking.timeSlot.endTime)}`}</p>
            </div>
          </div>
          <div className="border-t border-sand-100 pt-4">
            <p className="text-sm font-medium text-sand-700 mb-2">Pets ({booking.pets.length})</p>
            <div className="flex flex-wrap gap-2">{booking.pets.map((pet, index) => <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-sand-100 rounded-full text-sm">🐕 {pet.name}</span>)}</div>
          </div>
          <div className="border-t border-sand-100 pt-4">
            <p className="text-sm font-medium text-sand-700 mb-2">Contact & Pickup</p>
            <div className="text-sm text-sand-600">
              <p>{booking.customer?.firstName} {booking.customer?.lastName}</p>
              <p>{booking.customer?.email}</p>
              <p>{booking.customer?.phone}</p>
              <p className="mt-1">{booking.customer?.address}</p>
              <p>{booking.customer?.city}, {booking.customer?.zipCode}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl p-6 border border-sand-200">
        <h4 className="font-semibold text-sand-900 mb-4">Optional Add-Ons</h4>
        <div className="space-y-3">
          <label className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${booking.liveCameraAccess ? 'border-sunset-500 bg-sunset-50' : 'border-sand-200 hover:border-sand-300'}`}>
            <input type="checkbox" checked={booking.liveCameraAccess} onChange={(e) => setLiveCameraAccess(e.target.checked)} className="mt-1 w-5 h-5 rounded border-sand-300 text-sunset-500 focus:ring-sunset-500" />
            <div className="flex-grow">
              <div className="flex items-center justify-between"><p className="font-semibold text-sand-900">Enabot Live Camera Access</p><span className="font-bold text-sunset-600">+$15</span></div>
              <p className="text-sm text-sand-600 mt-1">Watch your pup's adventure in real-time!</p>
            </div>
          </label>
          {addOns.filter(a => a.id === 'premium-photos').map(addon => (
            <label key={addon.id} className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${booking.addOns.includes(addon.id) ? 'border-sunset-500 bg-sunset-50' : 'border-sand-200 hover:border-sand-300'}`}>
              <input type="checkbox" checked={booking.addOns.includes(addon.id)} onChange={() => toggleAddOn(addon.id)} className="mt-1 w-5 h-5 rounded border-sand-300 text-sunset-500 focus:ring-sunset-500" />
              <div className="flex-grow">
                <div className="flex items-center justify-between"><p className="font-semibold text-sand-900">{addon.name}</p><span className="font-bold text-sunset-600">+${addon.price}</span></div>
                <p className="text-sm text-sand-600 mt-1">{addon.description}</p>
              </div>
            </label>
          ))}
        </div>
      </div>
      <div className="bg-forest-50 rounded-xl p-6 border border-forest-200">
        <h4 className="font-semibold text-sand-900 mb-4">Price Summary</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between"><span className="text-sand-600">{booking.experience?.name} × {booking.pets.length} pet{booking.pets.length > 1 ? 's' : ''}</span><span className="text-sand-900">${(booking.timeSlot?.price || 0) * booking.pets.length}</span></div>
          {booking.liveCameraAccess && <div className="flex justify-between"><span className="text-sand-600">Live Camera Access</span><span className="text-sand-900">$15</span></div>}
          {booking.addOns.includes('premium-photos') && <div className="flex justify-between"><span className="text-sand-600">Premium Photo Package</span><span className="text-sand-900">$25</span></div>}
          <div className="border-t border-forest-200 pt-2 mt-2 flex justify-between text-lg font-bold"><span className="text-sand-900">Total</span><span className="text-forest-600">${total}</span></div>
        </div>
      </div>
      <div className="bg-sand-50 rounded-xl p-4 border border-sand-200">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-sand-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <div className="text-sm text-sand-600">
            <p className="font-medium text-sand-700">Payment will be collected upon confirmation</p>
            <p>After submitting, we'll review your booking and send a payment link via email within 24 hours.</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <button onClick={handleBack} disabled={isProcessing} className="px-6 py-3 rounded-xl border border-sand-300 text-sand-700 hover:bg-sand-50 transition-colors disabled:opacity-50">Back</button>
        <button onClick={handleSubmitBooking} disabled={isProcessing} className="flex-grow bg-gradient-to-r from-sunset-500 to-sunset-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100">
          {isProcessing ? (<><svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Processing...</>) : (<>Submit Booking Request<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></>)}
        </button>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { useBooking, type PetInfo } from '../../context/BookingContext'
import { useAuth } from '../../context/AuthContext'

const emptyPet: PetInfo = {
  name: '',
  breed: '',
  age: '',
  weight: '',
  temperament: 'friendly',
  specialNeeds: '',
  vaccinationsUpToDate: false,
}

export default function PetForm() {
  const { booking, addPet, removePet, setCurrentStep } = useBooking()
  const { user, isAuthenticated } = useAuth()
  const [currentPet, setCurrentPet] = useState<PetInfo>(emptyPet)
  const [showForm, setShowForm] = useState(booking.pets.length === 0)
  const [errors, setErrors] = useState<Partial<Record<keyof PetInfo, string>>>({})

  const savedPets = isAuthenticated && user?.pets ? user.pets : []

  const validatePet = (): boolean => {
    const newErrors: Partial<Record<keyof PetInfo, string>> = {}
    if (!currentPet.name.trim()) newErrors.name = 'Pet name is required'
    if (!currentPet.breed.trim()) newErrors.breed = 'Breed is required'
    if (!currentPet.age.trim()) newErrors.age = 'Age is required'
    if (!currentPet.weight.trim()) newErrors.weight = 'Weight is required'
    if (!currentPet.vaccinationsUpToDate) newErrors.vaccinationsUpToDate = 'Vaccinations must be up to date'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleAddPet = () => {
    if (validatePet()) {
      addPet(currentPet)
      setCurrentPet(emptyPet)
      setShowForm(false)
    }
  }

  const handleAddSavedPet = (pet: PetInfo) => { addPet(pet) }
  const handleContinue = () => { if (booking.pets.length > 0) setCurrentStep(3) }
  const handleBack = () => { setCurrentStep(1) }
  const maxPets = booking.timeSlot?.maxPets || 6

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-heading font-bold text-sand-900 flex items-center gap-2">
          <span className="w-8 h-8 bg-forest-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
          Add Your Pet(s)
        </h3>
        <span className="text-sm text-sand-600">{booking.pets.length} / {maxPets} pets</span>
      </div>

      {booking.pets.length > 0 && (
        <div className="space-y-3">
          {booking.pets.map((pet, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-forest-50 rounded-xl border border-forest-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-forest-200 rounded-full flex items-center justify-center"><span className="text-2xl">🐕</span></div>
                <div>
                  <p className="font-semibold text-sand-900">{pet.name}</p>
                  <p className="text-sm text-sand-600">{pet.breed} • {pet.age} • {pet.weight}</p>
                </div>
              </div>
              <button onClick={() => removePet(index)} className="p-2 text-sand-400 hover:text-sunset-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {isAuthenticated && savedPets.length > 0 && booking.pets.length < maxPets && (
        <div className="bg-ocean-50 rounded-xl p-4 border border-ocean-200">
          <p className="text-sm font-medium text-ocean-800 mb-3">Add from your saved pets:</p>
          <div className="flex flex-wrap gap-2">
            {savedPets.filter(sp => !booking.pets.find(bp => bp.name === sp.name)).map((pet, index) => (
              <button key={index} onClick={() => handleAddSavedPet(pet)} className="flex items-center gap-2 px-3 py-2 bg-white rounded-full border border-ocean-200 hover:border-ocean-400 transition-colors">
                <span>🐕</span><span className="text-sm font-medium text-sand-900">{pet.name}</span>
                <svg className="w-4 h-4 text-ocean-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              </button>
            ))}
          </div>
        </div>
      )}

      {showForm ? (
        <div className="bg-white rounded-xl p-6 border border-sand-200 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-sand-700 mb-1">Pet's Name *</label>
              <input type="text" value={currentPet.name} onChange={(e) => setCurrentPet({ ...currentPet, name: e.target.value })} className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-sunset-500' : 'border-sand-200'} focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none`} placeholder="Cooper" />
              {errors.name && <p className="text-sm text-sunset-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-sand-700 mb-1">Breed *</label>
              <input type="text" value={currentPet.breed} onChange={(e) => setCurrentPet({ ...currentPet, breed: e.target.value })} className={`w-full px-4 py-3 rounded-xl border ${errors.breed ? 'border-sunset-500' : 'border-sand-200'} focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none`} placeholder="Golden Retriever" />
              {errors.breed && <p className="text-sm text-sunset-500 mt-1">{errors.breed}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-sand-700 mb-1">Age *</label>
              <input type="text" value={currentPet.age} onChange={(e) => setCurrentPet({ ...currentPet, age: e.target.value })} className={`w-full px-4 py-3 rounded-xl border ${errors.age ? 'border-sunset-500' : 'border-sand-200'} focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none`} placeholder="3 years" />
              {errors.age && <p className="text-sm text-sunset-500 mt-1">{errors.age}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-sand-700 mb-1">Weight *</label>
              <input type="text" value={currentPet.weight} onChange={(e) => setCurrentPet({ ...currentPet, weight: e.target.value })} className={`w-full px-4 py-3 rounded-xl border ${errors.weight ? 'border-sunset-500' : 'border-sand-200'} focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none`} placeholder="65 lbs" />
              {errors.weight && <p className="text-sm text-sunset-500 mt-1">{errors.weight}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-sand-700 mb-1">Temperament</label>
            <select value={currentPet.temperament} onChange={(e) => setCurrentPet({ ...currentPet, temperament: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-sand-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none bg-white">
              <option value="friendly">Friendly & Social</option>
              <option value="shy">Shy / Reserved</option>
              <option value="energetic">High Energy</option>
              <option value="calm">Calm & Relaxed</option>
              <option value="selective">Selective with other dogs</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-sand-700 mb-1">Special Needs or Notes</label>
            <textarea value={currentPet.specialNeeds} onChange={(e) => setCurrentPet({ ...currentPet, specialNeeds: e.target.value })} rows={2} className="w-full px-4 py-3 rounded-xl border border-sand-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none resize-none" placeholder="Any allergies, medications, or special instructions..." />
          </div>
          <div className={`p-4 rounded-xl border ${errors.vaccinationsUpToDate ? 'border-sunset-500 bg-sunset-50' : 'border-sand-200 bg-sand-50'}`}>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={currentPet.vaccinationsUpToDate} onChange={(e) => setCurrentPet({ ...currentPet, vaccinationsUpToDate: e.target.checked })} className="mt-1 w-5 h-5 rounded border-sand-300 text-forest-500 focus:ring-forest-500" />
              <div>
                <p className="font-medium text-sand-900">Vaccinations are up to date *</p>
                <p className="text-sm text-sand-600">I confirm my pet is current on rabies, DHPP, and Bordetella vaccinations and has flea/tick prevention.</p>
              </div>
            </label>
            {errors.vaccinationsUpToDate && <p className="text-sm text-sunset-500 mt-2">{errors.vaccinationsUpToDate}</p>}
          </div>
          <div className="flex gap-3">
            <button onClick={handleAddPet} className="flex-grow bg-forest-500 text-white py-3 px-4 rounded-xl font-semibold hover:bg-forest-600 transition-colors">Add Pet</button>
            {booking.pets.length > 0 && <button onClick={() => setShowForm(false)} className="px-4 py-3 rounded-xl border border-sand-300 text-sand-700 hover:bg-sand-50 transition-colors">Cancel</button>}
          </div>
        </div>
      ) : booking.pets.length < maxPets ? (
        <button onClick={() => setShowForm(true)} className="w-full p-4 rounded-xl border-2 border-dashed border-sand-300 text-sand-600 hover:border-forest-400 hover:text-forest-600 transition-colors flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Add Another Pet
        </button>
      ) : null}

      <div className="flex gap-4 pt-4">
        <button onClick={handleBack} className="px-6 py-3 rounded-xl border border-sand-300 text-sand-700 hover:bg-sand-50 transition-colors">Back</button>
        <button onClick={handleContinue} disabled={booking.pets.length === 0} className={`flex-grow py-3 px-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${booking.pets.length > 0 ? 'bg-gradient-to-r from-forest-500 to-forest-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.02]' : 'bg-sand-200 text-sand-500 cursor-not-allowed'}`}>
          Continue to Your Details
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </button>
      </div>
    </div>
  )
}

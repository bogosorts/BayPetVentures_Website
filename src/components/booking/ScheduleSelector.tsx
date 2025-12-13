import { useState } from 'react'
import { useBooking } from '../../context/BookingContext'
import { 
  experiences, 
  weeklySchedule, 
  getUpcomingDates, 
  formatDate, 
  formatTime,
  type Experience,
  type TimeSlot 
} from '../../data/experiences'

// Mock availability data - in production, this comes from database
const mockAvailability: Record<string, number> = {
  'sat-morning-beach': 4,
  'sat-afternoon-mountain': 6,
  'sun-morning-park': 5,
  'sun-afternoon-redwood': 6,
}

export default function ScheduleSelector() {
  const { booking, setExperience, setTimeSlot, setSelectedDate, setCurrentStep } = useBooking()
  const [selectedExp, setSelectedExp] = useState<Experience | null>(booking.experience)
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(booking.timeSlot)
  const [selectedDateState, setSelectedDateState] = useState<Date | null>(booking.selectedDate)

  const handleExperienceSelect = (exp: Experience) => {
    setSelectedExp(exp)
    setSelectedSlot(null)
    setSelectedDateState(null)
  }

  const handleSlotSelect = (slot: TimeSlot) => {
    setSelectedSlot(slot)
    setSelectedDateState(null)
  }

  const handleDateSelect = (date: Date) => {
    setSelectedDateState(date)
  }

  const handleContinue = () => {
    if (selectedExp && selectedSlot && selectedDateState) {
      setExperience(selectedExp)
      setTimeSlot(selectedSlot)
      setSelectedDate(selectedDateState)
      setCurrentStep(2)
    }
  }

  const availableSlots = selectedExp 
    ? weeklySchedule.filter(slot => slot.experienceId === selectedExp.id)
    : []

  const availableDates = selectedSlot 
    ? getUpcomingDates(selectedSlot.dayOfWeek, 4)
    : []

  return (
    <div className="space-y-8">
      {/* Step 1: Choose Experience */}
      <div>
        <h3 className="text-xl font-heading font-bold text-sand-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-forest-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
          Choose Your Adventure
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => handleExperienceSelect(exp)}
              className={`relative p-4 rounded-xl border-2 text-left transition-all ${
                selectedExp?.id === exp.id
                  ? 'border-forest-500 bg-forest-50 ring-2 ring-forest-500/20'
                  : 'border-sand-200 hover:border-sand-300 bg-white'
              }`}
            >
              <div className="flex gap-4">
                <img
                  src={exp.image}
                  alt={exp.name}
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-grow min-w-0">
                  <h4 className="font-heading font-bold text-sand-900">{exp.name}</h4>
                  <p className="text-sm text-sand-600 mt-1 line-clamp-2">{exp.shortDescription}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs bg-sand-100 text-sand-600 px-2 py-1 rounded-full">
                      {exp.duration}
                    </span>
                    <span className="text-sm font-bold text-forest-600">
                      ${exp.price}/pet
                    </span>
                  </div>
                </div>
              </div>
              {selectedExp?.id === exp.id && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-forest-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Choose Time Slot */}
      {selectedExp && (
        <div className="animate-fadeIn">
          <h3 className="text-xl font-heading font-bold text-sand-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-forest-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            Select Time Slot
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {availableSlots.map((slot) => {
              const spotsAvailable = mockAvailability[slot.id] || 0
              return (
                <button
                  key={slot.id}
                  onClick={() => handleSlotSelect(slot)}
                  disabled={spotsAvailable === 0}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    selectedSlot?.id === slot.id
                      ? 'border-forest-500 bg-forest-50 ring-2 ring-forest-500/20'
                      : spotsAvailable === 0
                      ? 'border-sand-200 bg-sand-50 opacity-50 cursor-not-allowed'
                      : 'border-sand-200 hover:border-sand-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-sand-900 capitalize">{slot.dayOfWeek}s</p>
                      <p className="text-forest-600 font-medium">
                        {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-medium ${spotsAvailable <= 2 ? 'text-sunset-600' : 'text-sand-600'}`}>
                        {spotsAvailable} spots left
                      </p>
                      <p className="text-sm text-sand-500">Max {slot.maxPets} pets</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Step 3: Choose Date */}
      {selectedSlot && (
        <div className="animate-fadeIn">
          <h3 className="text-xl font-heading font-bold text-sand-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-forest-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            Pick a Date
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {availableDates.map((date, index) => {
              const spotsAvailable = Math.max(0, (mockAvailability[selectedSlot.id] || 0) - index)
              return (
                <button
                  key={date.toISOString()}
                  onClick={() => handleDateSelect(date)}
                  disabled={spotsAvailable === 0}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    selectedDateState?.toDateString() === date.toDateString()
                      ? 'border-forest-500 bg-forest-50 ring-2 ring-forest-500/20'
                      : spotsAvailable === 0
                      ? 'border-sand-200 bg-sand-50 opacity-50 cursor-not-allowed'
                      : 'border-sand-200 hover:border-sand-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-sand-900">{formatDate(date)}</p>
                      <p className="text-sm text-sand-600">
                        {formatTime(selectedSlot.startTime)} - {formatTime(selectedSlot.endTime)}
                      </p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      spotsAvailable <= 2 
                        ? 'bg-sunset-100 text-sunset-700' 
                        : 'bg-forest-100 text-forest-700'
                    }`}>
                      {spotsAvailable} spots
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Continue Button */}
      {selectedExp && selectedSlot && selectedDateState && (
        <div className="pt-4 animate-fadeIn">
          <button
            onClick={handleContinue}
            className="w-full bg-gradient-to-r from-forest-500 to-forest-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            Continue to Pet Details
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}

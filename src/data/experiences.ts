// Experience types and schedule configuration

export interface Experience {
  id: string
  name: string
  description: string
  shortDescription: string
  location: string
  image: string
  duration: string
  price: number
  maxPets: number
  includes: string[]
  tags: string[]
}

export interface TimeSlot {
  id: string
  experienceId: string
  dayOfWeek: 'saturday' | 'sunday'
  startTime: string
  endTime: string
  maxPets: number
  price: number
}

export interface ScheduledSlot extends TimeSlot {
  experience: Experience
  date: Date
  availableSpots: number
  bookedPets: number
}

// Core experiences offered
export const experiences: Experience[] = [
  {
    id: 'beach-bliss',
    name: 'Beach Day Bliss',
    description: 'Sandy paws, ocean waves, and pure joy! Your pup will splash in the surf, dig in the sand, and make new furry friends at some of the Bay Area\'s most beautiful dog-friendly beaches including Fort Funston and Pacifica.',
    shortDescription: 'Ocean adventures at Fort Funston & Pacifica beaches',
    location: 'Fort Funston, Pacifica',
    image: 'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '4 hours',
    price: 89,
    maxPets: 6,
    includes: [
      'Door-to-door pickup & drop-off',
      'Fresh water & treats',
      'Post-adventure bath & towel dry',
      'Photo updates during trip',
      'GPS tracking throughout',
    ],
    tags: ['Beach', 'Swimming', 'Social'],
  },
  {
    id: 'mountain-explorer',
    name: 'Mountain Explorer',
    description: 'Take your adventurous pup on an epic mountain trek through the stunning trails of Mount Tamalpais. Fresh air, incredible views, and endless sniffing opportunities await!',
    shortDescription: 'Epic trails at Mount Tamalpais',
    location: 'Mount Tamalpais',
    image: 'https://images.pexels.com/photos/1452717/pexels-photo-1452717.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '5 hours',
    price: 109,
    maxPets: 6,
    includes: [
      'Door-to-door pickup & drop-off',
      'Fresh water, treats & lunch',
      'Post-adventure brush & paw cleaning',
      'Photo updates during trip',
      'GPS tracking throughout',
    ],
    tags: ['Hiking', 'Nature', 'Adventure'],
  },
  {
    id: 'park-social',
    name: 'Park Social',
    description: 'Perfect for social butterflies! Your pup will enjoy a relaxed morning at premium dog parks around San Francisco, making friends and burning energy with supervised play.',
    shortDescription: 'Social play at SF\'s best dog parks',
    location: 'San Francisco Parks',
    image: 'https://images.pexels.com/photos/1390784/pexels-photo-1390784.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '3 hours',
    price: 69,
    maxPets: 8,
    includes: [
      'Door-to-door pickup & drop-off',
      'Fresh water & treats',
      'Post-adventure brush down',
      'Photo updates during trip',
      'GPS tracking throughout',
    ],
    tags: ['Social', 'Play', 'Relaxed'],
  },
  {
    id: 'redwood-ramble',
    name: 'Redwood Ramble',
    description: 'Wander through ancient redwood forests where your pup can explore towering trees, fern-covered trails, and peaceful creeks. A magical forest experience!',
    shortDescription: 'Forest trails in Muir Woods area',
    location: 'Muir Woods Area',
    image: 'https://images.pexels.com/photos/1906153/pexels-photo-1906153.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '4 hours',
    price: 99,
    maxPets: 6,
    includes: [
      'Door-to-door pickup & drop-off',
      'Fresh water & treats',
      'Post-adventure brush & paw cleaning',
      'Photo updates during trip',
      'GPS tracking throughout',
    ],
    tags: ['Forest', 'Nature', 'Peaceful'],
  },
]

// Weekly schedule - fixed time slots
export const weeklySchedule: TimeSlot[] = [
  // Saturday Schedule
  {
    id: 'sat-morning-beach',
    experienceId: 'beach-bliss',
    dayOfWeek: 'saturday',
    startTime: '08:00',
    endTime: '12:00',
    maxPets: 6,
    price: 89,
  },
  {
    id: 'sat-afternoon-mountain',
    experienceId: 'mountain-explorer',
    dayOfWeek: 'saturday',
    startTime: '13:00',
    endTime: '18:00',
    maxPets: 6,
    price: 109,
  },
  // Sunday Schedule
  {
    id: 'sun-morning-park',
    experienceId: 'park-social',
    dayOfWeek: 'sunday',
    startTime: '09:00',
    endTime: '12:00',
    maxPets: 8,
    price: 69,
  },
  {
    id: 'sun-afternoon-redwood',
    experienceId: 'redwood-ramble',
    dayOfWeek: 'sunday',
    startTime: '13:00',
    endTime: '17:00',
    maxPets: 6,
    price: 99,
  },
]

// Add-on options
export const addOns = [
  {
    id: 'live-camera',
    name: 'Enabot Live Camera Access',
    description: 'Watch your pup\'s adventure in real-time! Get access to our Enabot live camera feed during the entire experience.',
    price: 15,
  },
  {
    id: 'premium-photos',
    name: 'Premium Photo Package',
    description: 'Receive 20+ professional-quality photos of your pup\'s adventure, edited and delivered within 24 hours.',
    price: 25,
  },
]

// Helper functions
export function getExperienceById(id: string): Experience | undefined {
  return experiences.find(exp => exp.id === id)
}

export function getScheduleForExperience(experienceId: string): TimeSlot[] {
  return weeklySchedule.filter(slot => slot.experienceId === experienceId)
}

export function formatTime(time: string): string {
  const [hours, minutes] = time.split(':')
  const hour = parseInt(hours)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour % 12 || 12
  return `${displayHour}:${minutes} ${ampm}`
}

export function getUpcomingDates(dayOfWeek: 'saturday' | 'sunday', weeksAhead: number = 4): Date[] {
  const dates: Date[] = []
  const today = new Date()
  const targetDay = dayOfWeek === 'saturday' ? 6 : 0
  
  let current = new Date(today)
  // Find the next occurrence of the target day
  while (current.getDay() !== targetDay) {
    current.setDate(current.getDate() + 1)
  }
  
  // If today is the target day but it's past noon, start from next week
  if (current.toDateString() === today.toDateString() && today.getHours() >= 12) {
    current.setDate(current.getDate() + 7)
  }
  
  // Collect dates for the specified number of weeks
  for (let i = 0; i < weeksAhead; i++) {
    dates.push(new Date(current))
    current.setDate(current.getDate() + 7)
  }
  
  return dates
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })
}

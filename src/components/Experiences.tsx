import { experiences, weeklySchedule, formatTime } from '../data/experiences'

export default function Experiences() {
  const saturdaySlots = weeklySchedule.filter(s => s.dayOfWeek === 'saturday')
  const sundaySlots = weeklySchedule.filter(s => s.dayOfWeek === 'sunday')
  const getExperience = (id: string) => experiences.find(e => e.id === id)

  return (
    <section id="experiences" className="py-20 lg:py-32 bg-gradient-to-b from-sand-50 to-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-ocean-600 font-semibold text-sm uppercase tracking-wider mb-4">Weekend Adventures</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-sand-900 mb-6">Adventures That Make <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-500 to-forest-500">Tails Wag</span></h2>
          <p className="text-lg text-sand-600 leading-relaxed">Every weekend, your pup can explore the Bay Area's best outdoor spots. Limited spots keep groups small and fun personal.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-sunset-500 to-sunset-600 px-6 py-4"><h3 className="font-heading text-2xl font-bold text-white flex items-center gap-2"><span className="text-3xl">🌅</span>Saturday Adventures</h3></div>
            <div className="p-6 space-y-4">
              {saturdaySlots.map((slot) => { const exp = getExperience(slot.experienceId); if (!exp) return null; return (
                <div key={slot.id} className="flex gap-4 p-4 bg-sand-50 rounded-xl hover:bg-sand-100 transition-colors">
                  <img src={exp.image} alt={exp.name} className="w-24 h-24 rounded-lg object-cover flex-shrink-0" />
                  <div className="flex-grow min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div><h4 className="font-heading font-bold text-sand-900">{exp.name}</h4><p className="text-sm text-forest-600 font-medium">{formatTime(slot.startTime)} - {formatTime(slot.endTime)}</p></div>
                      <span className="text-lg font-bold text-forest-600 whitespace-nowrap">${slot.price}</span>
                    </div>
                    <p className="text-sm text-sand-600 mt-1 line-clamp-2">{exp.shortDescription}</p>
                    <div className="flex items-center gap-4 mt-2"><span className="text-xs bg-ocean-100 text-ocean-700 px-2 py-1 rounded-full">{slot.maxPets} spots</span><span className="text-xs text-sand-500">{exp.duration}</span></div>
                  </div>
                </div>
              )})}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-ocean-500 to-ocean-600 px-6 py-4"><h3 className="font-heading text-2xl font-bold text-white flex items-center gap-2"><span className="text-3xl">🌿</span>Sunday Adventures</h3></div>
            <div className="p-6 space-y-4">
              {sundaySlots.map((slot) => { const exp = getExperience(slot.experienceId); if (!exp) return null; return (
                <div key={slot.id} className="flex gap-4 p-4 bg-sand-50 rounded-xl hover:bg-sand-100 transition-colors">
                  <img src={exp.image} alt={exp.name} className="w-24 h-24 rounded-lg object-cover flex-shrink-0" />
                  <div className="flex-grow min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div><h4 className="font-heading font-bold text-sand-900">{exp.name}</h4><p className="text-sm text-forest-600 font-medium">{formatTime(slot.startTime)} - {formatTime(slot.endTime)}</p></div>
                      <span className="text-lg font-bold text-forest-600 whitespace-nowrap">${slot.price}</span>
                    </div>
                    <p className="text-sm text-sand-600 mt-1 line-clamp-2">{exp.shortDescription}</p>
                    <div className="flex items-center gap-4 mt-2"><span className="text-xs bg-ocean-100 text-ocean-700 px-2 py-1 rounded-full">{slot.maxPets} spots</span><span className="text-xs text-sand-500">{exp.duration}</span></div>
                  </div>
                </div>
              )})}
            </div>
          </div>
        </div>
        <div className="mb-12">
          <h3 className="font-heading text-2xl font-bold text-sand-900 text-center mb-8">Our Adventures</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-40 overflow-hidden">
                  <img src={exp.image} alt={exp.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4"><h4 className="font-heading font-bold text-white">{exp.name}</h4></div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-sand-600 mb-3 line-clamp-2">{exp.shortDescription}</p>
                  <div className="flex flex-wrap gap-1 mb-3">{exp.tags.map((tag, i) => <span key={i} className="text-xs bg-sand-100 text-sand-600 px-2 py-0.5 rounded-full">{tag}</span>)}</div>
                  <div className="flex items-center justify-between"><span className="text-sm text-sand-500">{exp.duration}</span><span className="font-bold text-forest-600">From ${exp.price}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-forest-50 rounded-2xl p-8">
          <h3 className="font-heading text-xl font-bold text-sand-900 mb-6 text-center">Every Adventure Includes</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[{ icon: '🚗', text: 'Door-to-door pickup' }, { icon: '📍', text: 'GPS tracking' }, { icon: '📸', text: 'Photo updates' }, { icon: '🧼', text: 'Post-trip cleanup' }, { icon: '🦴', text: 'Treats & water' }].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-xl">
                <span className="text-2xl mb-2">{item.icon}</span>
                <span className="text-sm font-medium text-sand-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="#book" className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset-500 to-sunset-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-sunset-500/30 hover:shadow-sunset-500/50 hover:scale-105 transition-all">
            Book Your Pup's Adventure
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}

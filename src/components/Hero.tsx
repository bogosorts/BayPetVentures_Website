export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.pexels.com/photos/1906153/pexels-photo-1906153.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Happy golden retriever on a mountain trail" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-sand-900/80 via-sand-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-sand-900/40 to-transparent" />
      </div>
      <div className="absolute top-32 right-20 w-72 h-72 bg-forest-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-32 left-20 w-96 h-96 bg-sunset-400/20 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-forest-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Bay Area's #1 Pet Adventure Service</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Give Your Pup the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-300 to-sunset-400">Adventure</span> They Deserve
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
            Every weekend, we take your pup on amazing Bay Area adventures — from Pacific beaches to mountain trails. We handle pickup, playtime, and cleanup. You just enjoy the happy, tired pup!
          </p>
          
          {/* Car Clean Highlight */}
          <div className="bg-gradient-to-r from-ocean-500/20 to-forest-500/20 backdrop-blur-sm border border-white/20 rounded-2xl p-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🚗✨</span>
              </div>
              <div>
                <p className="text-white font-semibold">Your Car Stays Spotless</p>
                <p className="text-white/70 text-sm">No sandy seats, no muddy paws, no wet dog smell. We transport & clean — your car never knows they went on an adventure!</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sunset-500 to-sunset-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-sunset-500/30 hover:shadow-sunset-500/50 hover:scale-105 transition-all">
              Book an Adventure
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#experiences" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all">See Schedule</a>
          </div>
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-3">
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100" alt="Happy customer" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100" alt="Happy customer" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100" alt="Happy customer" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-forest-500 flex items-center justify-center text-white text-xs font-bold">+99</div>
              </div>
              <div className="text-white/80 text-sm"><span className="font-semibold text-white">500+</span> Happy Pups</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-sunset-400">{[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}</div>
              <span className="text-white/80 text-sm"><span className="font-semibold text-white">4.9</span> Rating</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#services" className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors">
          <span className="text-sm">Scroll to explore</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </a>
      </div>
    </section>
  )
}

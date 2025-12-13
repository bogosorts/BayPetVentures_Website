import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

// Experience Pages
import BeachDayBliss from './pages/experiences/BeachDayBliss'
import NationalParkTrek from './pages/experiences/NationalParkTrek'
import MountainExplorer from './pages/experiences/MountainExplorer'
import WineCountryWander from './pages/experiences/WineCountryWander'
import RedwoodRamble from './pages/experiences/RedwoodRamble'
import CityParksTour from './pages/experiences/CityParksTour'

// Company Pages
import AboutUs from './pages/company/AboutUs'
import OurTeam from './pages/company/OurTeam'
import Careers from './pages/company/Careers'
import Press from './pages/company/Press'
import Blog from './pages/company/Blog'

// Support Pages
import FAQs from './pages/legal/FAQs'
import Safety from './pages/legal/Safety'
import Insurance from './pages/legal/Insurance'
import CancellationPolicy from './pages/legal/CancellationPolicy'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import TermsOfService from './pages/legal/TermsOfService'
import CookiePolicy from './pages/legal/CookiePolicy'

function App() {
  return (
    <div className="min-h-screen bg-sand-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Experience Routes */}
          <Route path="/experiences/beach-day-bliss" element={<BeachDayBliss />} />
          <Route path="/experiences/national-park-trek" element={<NationalParkTrek />} />
          <Route path="/experiences/mountain-explorer" element={<MountainExplorer />} />
          <Route path="/experiences/wine-country-wander" element={<WineCountryWander />} />
          <Route path="/experiences/redwood-ramble" element={<RedwoodRamble />} />
          <Route path="/experiences/city-parks-tour" element={<CityParksTour />} />
          
          {/* Company Routes */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* Legal/Support Routes */}
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

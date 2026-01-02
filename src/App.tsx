import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import HomePageV2 from './pages/HomePageV2'
import FlyerPage from './pages/FlyerPage'
import AboutPage from './pages/AboutPage'
import FAQPage from './pages/FAQPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="min-h-screen bg-sand-50 flex flex-col">
      <Routes>
        <Route path="/" element={<Layout><HomePageV2 /></Layout>} />
        <Route path="/old" element={<Layout><HomePage /></Layout>} />
        <Route path="/flyer" element={<FlyerPage />} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/faq" element={<Layout><FAQPage /></Layout>} />
        <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
      </Routes>
    </div>
  )
}

export default App

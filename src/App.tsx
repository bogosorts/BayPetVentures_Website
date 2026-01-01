import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import HomePageV2 from './pages/HomePageV2'
import FlyerPage from './pages/FlyerPage'

function App() {
  return (
    <div className="min-h-screen bg-sand-50 flex flex-col">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <main className="flex-grow">
              <HomePageV2 />
            </main>
            <Footer />
          </>
        } />
        <Route path="/old" element={
          <>
            <Header />
            <main className="flex-grow">
              <HomePage />
            </main>
            <Footer />
          </>
        } />
        <Route path="/flyer" element={<FlyerPage />} />
      </Routes>
    </div>
  )
}

export default App

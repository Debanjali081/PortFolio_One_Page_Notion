import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ResumeContent } from './components/ResumeContent'
import SpotifySection from './components/SpotifySection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ResumeContent />
      <SpotifySection />
    </div>
  )
}

export default App

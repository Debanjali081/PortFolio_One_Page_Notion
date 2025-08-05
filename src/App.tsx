import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ResumeContent } from './components/ResumeContent'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ResumeContent />
    </div>
  )
}

export default App
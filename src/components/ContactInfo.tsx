import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="flex flex-wrap justify-center gap-6 text-gray-600">
      <div className="flex items-center gap-2">
        <Mail className="w-4 h-4" />
        <a href="mailto:debanjali017@gmail.com" className="text-sm hover:text-blue-600 transition-colors">
          debanjali017@gmail.com
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Phone className="w-4 h-4" />
        <a href="tel:+919827780783" className="text-sm hover:text-blue-600 transition-colors">
          +91 9827780783
        </a>
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4" />
        <a 
          href="https://www.google.com/maps/place/Bhubaneswar,+Odisha" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm hover:text-blue-600 transition-colors"
        >
          Bhubaneswar, Odisha
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Linkedin className="w-4 h-4" />
        <a 
          href="https://linkedin.com/in/debanjali-lenka" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm hover:text-blue-600 transition-colors"
        >
          linkedin.com/in/debanjali-lenka
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Github className="w-4 h-4" />
        <a 
          href="https://github.com/Debanjali081" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm hover:text-blue-600 transition-colors"
        >
          github.com/Debanjali081
        </a>
      </div>
    </div>
  )
}
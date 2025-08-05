export function Hero() {
  return (
    <div className="relative">
      <div 
        className="w-full h-60 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600"
      />
      
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
        <img 
          src="./profile.jpeg"
          alt="Profile picture"
          className="w-40 h-40 rounded-full shadow-lg border-4 border-white object-cover"
        />
      </div>
    </div>
  )
}
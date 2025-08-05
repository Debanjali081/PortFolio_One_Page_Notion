interface ResumeSectionProps {
  icon: string
  title: string
  content: React.ReactNode
}

export function ResumeSection({ icon, title, content }: ResumeSectionProps) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-2xl">{icon}</span>
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        {content}
      </div>
    </div>
  )
}
export function SkillsGrid() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      category: "Frontend",
      skills: ["React",  "HTML/CSS", "Tailwind CSS"],
      color: "bg-green-100 text-green-800"
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express",  "PostgreSQL"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Docker"],
      color: "bg-orange-100 text-orange-800"
    }
  ]

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {skillCategories.map((category, index) => (
        <div key={index} className="space-y-3">
          <h3 className="font-semibold text-gray-900">{category.category}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
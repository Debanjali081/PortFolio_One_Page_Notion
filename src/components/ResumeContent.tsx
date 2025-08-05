import { ResumeSection } from "./ResumeSection";
import { ContactInfo } from "./ContactInfo";
import { SkillsGrid } from "./SkillsGrid";

export function ResumeContent() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 pb-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
          DEBANJALI LENKA
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          MERN Stack Developer | Passionate about Building Scalable Web
          Applications
        </p>
        <ContactInfo />
      </div>

      <div className="space-y-12">
        <ResumeSection
          icon="👋"
          title="About Me"
          content={
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                I’m a MERN Stack Developer currently working as a{" "}
                <b>Trainee Software Developer</b> at Quotus Software Solution
                Pvt. Ltd., with hands-on experience in building scalable
                full-stack applications and integrating cutting-edge
                technologies like AI and blockchain.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                I’ve developed impactful platforms such as <b>Naturopura</b> (an
                AI-powered AgriTech solution) and <b>HireSense</b> (an AI-driven
                interview prep tool). My passion lies in solving real-world
                problems through clean architecture, secure systems, and
                user-focused design.
              </p>
            </div>
          }
        />

        <ResumeSection
          icon="💼"
          title="Work Experience"
          content={
            <div className="space-y-6">
              <div className="border-l-2 border-gray-200 pl-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Trainee Software Developer
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Quotus Software Solution Pvt. Ltd. • April 2025 – Present
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                      <span className="text-gray-700">
                        Contributed to full-stack development of internal tools
                        using MERN stack, improving internal process efficiency
                        by ~30%.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                      <span className="text-gray-700">
                        Integrated REST APIs and implemented secure user
                        authentication using JWT and Passport.js.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                      <span className="text-gray-700">
                        Optimized frontend performance in React apps, reducing
                        component re-renders and improving load times by 25%.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                      <span className="text-gray-700">
                        Collaborated with cross-functional teams and
                        participated in agile sprint planning and code reviews.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          }
        />

        <ResumeSection
          icon="🛠️"
          title="Technical Skills"
          content={
            <div>
              <SkillsGrid />
            </div>
          }
        />

        <ResumeSection
          icon="🎓"
          title="Education & Certifications"
          content={
            <div>
              <div className="space-y-4">
                {/* Education Section */}
                <div className="border-l-2 border-gray-200 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    B.Tech in Computer Science & Engineering
                  </h3>
                  <p className="text-gray-600">
                    Nalanda Institute of Technology, BBSR • 2021 - 2025
                  </p>
                </div>

                <div className="border-l-2 border-gray-200 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Intermediate in Science
                  </h3>
                  <p className="text-gray-600">
                    Kalpanadevi Women’s Science College, Bhadrak • 2019 - 2021
                  </p>
                </div>

                <div className="border-l-2 border-gray-200 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Matriculation
                  </h3>
                  <p className="text-gray-600">
                    Tillo Nodal High School, Bhadrak • 2019
                  </p>
                </div>

                {/* Certifications Section */}
                <div className="border-t border-gray-300 pt-4 mt-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Certifications & Roles
                  </h3>

                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      MERN Stack Certification – TechZex Software Pvt. Ltd.
                    </li>
                    <li>
                      XR-Technology – Indian Institute of Technology, Kharagpur
                      (IIT KGP)
                    </li>
                    <li>Program Coordinator – E-Cell, AIC | Nalanda</li>
                    <li>Active Innovator – Karkhana | AIC</li>
                  </ul>
                </div>
              </div>
            </div>
          }
        />

        <ResumeSection
          icon="🚀"
          title="Featured Projects"
          content={
            <div>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Project: HireSense */}
                <div className="border border-gray-200 rounded-lg p-6 flex flex-col justify-between h-full">
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      HireSense – AI Interview Assistant
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      React • TypeScript • Node.js • MongoDB • Passport.js •
                      Gemini 2.5 Pro
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      Designed a tool to parse resumes and generate role-based
                      interview questions using Gemini AI. Integrated Google
                      OAuth, user profile storage, and personalized question
                      history.
                    </p>
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <a
                      href="https://github.com/Debanjali081/HireSense"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 text-sm text-white bg-gray-800 rounded hover:bg-gray-700"
                    >
                      GitHub Repo
                    </a>
                    <a
                      href="https://hire-sense-client-faxy-wheat.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-500"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>

                {/* Project: Naturopura */}
                <div className="border border-gray-200 rounded-lg p-6 flex flex-col justify-between h-full">
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Naturopura – AgriTech Platform
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      React • TypeScript • Node.js • MongoDB • TailwindCSS •
                      Google Vision API • Gemini AI • MetaMask
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      Built a farmer-focused platform combining AI crop
                      detection, soil/weather analysis, and crypto-based
                      payment. Integrated Gemini AI and blockchain for
                      multilingual support, smart payments, and motion-based
                      alerts.
                    </p>
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <a
                      href="#"
                      className="inline-block px-4 py-2 text-sm text-white bg-gray-400 rounded cursor-not-allowed"
                      title="Private Repo"
                    >
                      Repo Private
                    </a>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}

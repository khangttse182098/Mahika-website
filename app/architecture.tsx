import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/mahika-logo.png" alt="Mahika - AI Voice Navigation" className="h-16 w-auto" />
          </div>
          <Link href="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">System Architecture</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
          Mahika uses a sophisticated multi-layer architecture to deliver seamless voice navigation.
        </p>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
            <h2 className="text-2xl font-semibold mb-6 text-blue-700">Architecture Overview</h2>

            <div className="mb-12">
              <div className="relative overflow-hidden rounded-xl bg-blue-50 p-1">
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25"></div>
                <div className="relative rounded-xl overflow-auto p-8">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-sky-500 text-white p-4 rounded-lg text-center font-medium">
                      Input Layer
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 to-sky-500 text-white p-4 rounded-lg text-center font-medium">
                      Processing Layer
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 to-sky-500 text-white p-4 rounded-lg text-center font-medium">
                      Action Layer
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 to-sky-500 text-white p-4 rounded-lg text-center font-medium">
                      Feedback Layer
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 to-sky-500 text-white p-4 rounded-lg text-center font-medium">
                      Database Layer
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-blue-200 text-sm">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          Microphone & Audio Interface
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          Speech Recognition (Whisper API)
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-200 text-sm">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          NLP (OpenAI GPT)
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          AI Model Hosting
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          Node.js Backend
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-200 text-sm">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          Accessibility APIs
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          OS Interaction
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          UI Automation
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-200 text-sm">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          Text-to-Speech APIs
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          Audio Playback
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          Haptic Feedback
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-200 text-sm">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          MongoDB (NoSQL)
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          User Preferences
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          Learning Data
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="h-8 flex items-center justify-center">
                      <div className="w-0.5 h-8 bg-blue-300"></div>
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-4 rounded-lg text-center font-medium">
                      User Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700">1. Input Layer</h3>
                <p className="text-gray-600 mb-4">
                  The Input Layer is responsible for capturing and processing the user's voice commands.
                </p>
                <ul className="space-y-3 pl-5 list-disc text-gray-600">
                  <li>
                    <span className="font-medium text-gray-800">Microphone & Audio Interface:</span> Captures
                    high-quality audio input from the user's device.
                  </li>
                  <li>
                    <span className="font-medium text-gray-800">Speech Recognition APIs:</span> Utilizes OpenAI's
                    Whisper for accurate speech-to-text conversion, supporting multiple languages and accents.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700">2. Processing Layer</h3>
                <p className="text-gray-600 mb-4">
                  The Processing Layer interprets the user's commands and determines the appropriate actions.
                </p>
                <ul className="space-y-3 pl-5 list-disc text-gray-600">
                  <li>
                    <span className="font-medium text-gray-800">Natural Language Processing (NLP):</span> Uses OpenAI's
                    GPT to understand context, intent, and nuance in user commands.
                  </li>
                  <li>
                    <span className="font-medium text-gray-800">AI Model Hosting Services:</span> Cloud infrastructure
                    for running machine learning models efficiently.
                  </li>
                  <li>
                    <span className="font-medium text-gray-800">Custom Backend Service:</span> Node.js backend
                    orchestrates the flow of data between different components.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700">3. Action Layer</h3>
                <p className="text-gray-600 mb-4">
                  The Action Layer executes commands by interacting with the operating system and applications.
                </p>
                <ul className="space-y-3 pl-5 list-disc text-gray-600">
                  <li>
                    <span className="font-medium text-gray-800">Screen Readers/Accessibility APIs:</span> Integrates
                    with platform-specific accessibility frameworks like Microsoft UI Automation or Apple Accessibility
                    API.
                  </li>
                  <li>
                    <span className="font-medium text-gray-800">Operating System Interaction:</span> Uses libraries like
                    PyAutoGUI or RobotJS to trigger keypresses, mouse actions, and system commands.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700">4. Feedback Layer</h3>
                <p className="text-gray-600 mb-4">
                  The Feedback Layer communicates results and information back to the user.
                </p>
                <ul className="space-y-3 pl-5 list-disc text-gray-600">
                  <li>
                    <span className="font-medium text-gray-800">Text-to-Speech APIs:</span> Converts system responses
                    into natural-sounding speech using services like Google TTS or Amazon Polly.
                  </li>
                  <li>
                    <span className="font-medium text-gray-800">Audio Playback Libraries:</span> Manages sound output
                    for optimal user experience.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700">5. Database Layer</h3>
                <p className="text-gray-600 mb-4">
                  The Database Layer stores user preferences, learning data, and system configurations.
                </p>
                <ul className="space-y-3 pl-5 list-disc text-gray-600">
                  <li>
                    <span className="font-medium text-gray-800">Database Solutions:</span> Uses MongoDB (NoSQL) for
                    flexibility or PostgreSQL/MySQL (relational) for structured data.
                  </li>
                  <li>
                    <span className="font-medium text-gray-800">User Profiles:</span> Stores individual user
                    preferences, command history, and personalization data.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700"
            >
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Mahika. All rights reserved. Built with accessibility in mind.</p>
        </div>
      </footer>
    </div>
  )
}

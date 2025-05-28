import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function RealLifePage() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Real-Life Applications</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
          See how Mahika transforms daily tasks across work, education, and personal life.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <Card className="border-blue-100">
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-sky-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <CardTitle className="text-2xl">Workplace Efficiency</CardTitle>
              <CardDescription className="text-base">
                Enhance productivity in professional environments with voice-controlled navigation and task management.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-800 mb-2">Email and Document Composition</h3>
                  <p className="text-gray-600">
                    "Mahika, compose an email to the marketing team about the upcoming product launch."
                  </p>
                  <p className="text-sm text-gray-500 mt-2 italic">
                    Mahika opens your email client, creates a new message with the appropriate recipients, and activates
                    dictation mode for hands-free composition.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-800 mb-2">Spreadsheet Navigation</h3>
                  <p className="text-gray-600">"Find the Q2 revenue figures in the annual report spreadsheet."</p>
                  <p className="text-sm text-gray-500 mt-2 italic">
                    Mahika locates the file, opens it, and navigates to the relevant section, then provides a summary of
                    the key figures.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-800 mb-2">Meeting Management</h3>
                  <p className="text-gray-600">"Join my 2 PM Zoom meeting and enable my microphone when it starts."</p>
                  <p className="text-sm text-gray-500 mt-2 italic">
                    Mahika opens Zoom at the appropriate time, joins the scheduled meeting, and manages audio settings
                    automatically.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-sky-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <CardTitle className="text-2xl">Educational Support</CardTitle>
              <CardDescription className="text-base">
                Transform learning experiences with accessible educational content and research assistance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-800 mb-2">eBook and Course Navigation</h3>
                  <p className="text-gray-600">"Open my biology textbook and go to the chapter on cell division."</p>
                  <p className="text-sm text-gray-500 mt-2 italic">
                    Mahika opens the digital textbook, navigates to the requested chapter, and offers to read sections
                    aloud or summarize key concepts.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-800 mb-2">Document Reading</h3>
                  <p className="text-gray-600">
                    "Read the PDF I received from Professor Johnson about next week's assignment."
                  </p>
                  <p className="text-sm text-gray-500 mt-2 italic">
                    Mahika uses AI-powered OCR to read the document, even if it's a scanned image, and provides a clear
                    narration of the content.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-800 mb-2">Visual Content Description</h3>
                  <p className="text-gray-600">"Describe the diagram on slide 15 of the presentation."</p>
                  <p className="text-sm text-gray-500 mt-2 italic">
                    Mahika analyzes the visual content and provides a detailed description of charts, graphs, or
                    diagrams, making visual learning materials accessible.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-sky-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <CardTitle className="text-2xl">Daily Tasks</CardTitle>
              <CardDescription className="text-base">
                Simplify everyday computing with intuitive voice commands for common activities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-800 mb-2">Online Shopping</h3>
                  <p className="text-gray-600">"Find laptops under $1000 on Amazon with at least 16GB of RAM."</p>
                  <p className="text-sm text-gray-500 mt-2 italic">
                    Mahika navigates to Amazon, applies the appropriate filters, and reads out the top results with key
                    specifications.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-800 mb-2">Notification Management</h3>
                  <p className="text-gray-600">"Summarize my notifications from the last hour."</p>
                  <p className="text-sm text-gray-500 mt-2 italic">
                    Mahika provides a concise summary of recent notifications, prioritizing important messages and
                    filtering out less relevant ones.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-800 mb-2">Secure Banking</h3>
                  <p className="text-gray-600">"Log into my bank account and check my recent transactions."</p>
                  <p className="text-sm text-gray-500 mt-2 italic">
                    Mahika securely navigates to the banking website, assists with login using voice biometrics or
                    password manager integration, and summarizes recent account activity.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 text-center">User Stories</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <p className="text-gray-600 italic mb-4">
                "As a blind software developer, I struggled with navigating between different IDE windows and debugging
                tools. Mahika has transformed my workflow by allowing me to switch contexts with simple voice commands
                like 'go to terminal' or 'find the error in line 42.' My productivity has increased by at least 40%."
              </p>
              <p className="font-medium text-gray-800">— Michael T., Software Engineer</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <p className="text-gray-600 italic mb-4">
                "I'm a university student with visual impairment, and Mahika has made research so much easier. I can ask
                it to 'find scholarly articles about climate change published in the last year' and it navigates the
                databases for me. The way it summarizes visual content in research papers is incredible."
              </p>
              <p className="font-medium text-gray-800">— Priya K., Graduate Student</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <p className="text-gray-600 italic mb-4">
                "Before Mahika, online shopping was a frustrating experience that required assistance from family
                members. Now I can independently browse products, compare options, and make purchases. The natural
                language understanding is remarkable—I can say 'show me red sweaters with good reviews' and it just
                works."
              </p>
              <p className="font-medium text-gray-800">— Robert J., Retired Teacher</p>
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

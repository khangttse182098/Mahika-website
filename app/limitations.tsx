import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LimitationsPage() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Limitations of Existing Solutions</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
          Current accessibility tools for the visually impaired have significant drawbacks that Mahika addresses.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 border-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Limited Contextual Understanding</h2>
            <p className="text-gray-600 mb-4">
              Existing systems lack awareness of user intent and context, making multi-step tasks or switching between
              applications difficult.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
              <h3 className="font-medium text-blue-800 mb-2">Example:</h3>
              <p className="text-gray-600">
                When a user asks "What's this?" referring to an element on screen, traditional screen readers cannot
                understand the reference without explicit coordinates or element identifiers.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 className="font-medium text-green-800 mb-2">Mahika's Solution:</h3>
              <p className="text-gray-600">
                Mahika maintains contextual awareness of the user's current focus and recent interactions, allowing it
                to intelligently respond to ambiguous references like "this" or "that" based on context.
              </p>
            </div>
          </Card>

          <Card className="p-8 border-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Rigid Command Structures</h2>
            <p className="text-gray-600 mb-4">
              Many tools require fixed, precise commands, making them less intuitive for users.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
              <h3 className="font-medium text-blue-800 mb-2">Example:</h3>
              <p className="text-gray-600">
                Saying "Open my email" may fail if the system only recognizes "Open Outlook" or "Launch Mail
                application".
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 className="font-medium text-green-800 mb-2">Mahika's Solution:</h3>
              <p className="text-gray-600">
                Mahika uses advanced NLP to understand variations in commands, synonyms, and even colloquial
                expressions, allowing users to speak naturally rather than memorizing specific command phrases.
              </p>
            </div>
          </Card>

          <Card className="p-8 border-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">High Cognitive Load</h2>
            <p className="text-gray-600 mb-4">Navigation can be overwhelming with verbose responses or dense menus.</p>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
              <h3 className="font-medium text-blue-800 mb-2">Example:</h3>
              <p className="text-gray-600">
                Screen readers read all elements linearly, making browsing long web pages exhausting as users must
                listen to every element being described.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 className="font-medium text-green-800 mb-2">Mahika's Solution:</h3>
              <p className="text-gray-600">
                Mahika intelligently summarizes content, prioritizes relevant information, and allows users to navigate
                directly to sections of interest using natural language commands.
              </p>
            </div>
          </Card>

          <Card className="p-8 border-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Lack of Accessibility for All Users</h2>
            <p className="text-gray-600 mb-4">
              Tools often have compatibility issues with modern apps, limited language support, or depend on costly
              hardware.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
              <h3 className="font-medium text-blue-800 mb-2">Example:</h3>
              <p className="text-gray-600">
                Dynamic interfaces in single-page apps or regional accents are often not handled effectively by
                traditional screen readers.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 className="font-medium text-green-800 mb-2">Mahika's Solution:</h3>
              <p className="text-gray-600">
                Mahika is designed to work with modern web applications, supports multiple languages and accents, and
                requires only a standard computer with a microphone.
              </p>
            </div>
          </Card>

          <Card className="p-8 border-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">High Expense</h2>
            <p className="text-gray-600 mb-4">
              Many advanced tools are prohibitively expensive for individuals in lower-income communities.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
              <h3 className="font-medium text-blue-800 mb-2">Example:</h3>
              <p className="text-gray-600">JAWS Home License costs $1200 to use.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 className="font-medium text-green-800 mb-2">Mahika's Solution:</h3>
              <p className="text-gray-600">
                Mahika offers a free tier with essential functionality and affordable premium options, making advanced
                accessibility available to everyone regardless of economic status.
              </p>
            </div>
          </Card>

          <Card className="p-8 border-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Dependence on External Hardware</h2>
            <p className="text-gray-600 mb-4">
              Some solutions require costly external devices, like cameras or sensors, making them inaccessible for many
              users.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
              <h3 className="font-medium text-blue-800 mb-2">Example:</h3>
              <p className="text-gray-600">
                Eye-tracking tools or specialized hardware add complexity and expense to adoption.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 className="font-medium text-green-800 mb-2">Mahika's Solution:</h3>
              <p className="text-gray-600">
                Mahika works with standard computer hardware and built-in microphones, requiring no additional purchases
                or specialized equipment.
              </p>
            </div>
          </Card>
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

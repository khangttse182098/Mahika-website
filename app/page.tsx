import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mic, Users, Zap, Shield, Download, Play, Star, Eye, Brain } from "lucide-react"

export default function MahikaLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/mahika-logo.png" alt="Mahika - AI Voice Navigation" className="h-16 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#limitations" className="text-gray-600 hover:text-blue-600 transition-colors">
              Why Mahika
            </a>
            <a href="#real-life" className="text-gray-600 hover:text-blue-600 transition-colors">
              Real-Life Usage
            </a>
            <a href="#architecture" className="text-gray-600 hover:text-blue-600 transition-colors">
              Technology
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
              Testimonials
            </a>
            <a href="#download" className="text-gray-600 hover:text-blue-600 transition-colors">
              Download
            </a>
          </nav>
          <Button className="bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">AI-Powered Accessibility</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-sky-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            Navigate Your Computer with Your Voice
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Mahika empowers blind and visually impaired users with AI-powered voice navigation, breaking barriers in
            technology by providing equal access to digital resources. Experience true independence in the digital
            world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-lg px-8 py-4"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-200 text-blue-700 hover:bg-blue-50 text-lg px-8 py-4"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Mahika AI interface showing voice commands and computer navigation"
              className="rounded-2xl shadow-2xl mx-auto border border-blue-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Why Mahika is Different</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlike traditional screen readers that cost up to $1200 and require rigid commands, Mahika offers
              intelligent, context-aware navigation that adapts to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-500 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Contextual Understanding</CardTitle>
                <CardDescription>
                  Say "What's this?" or "Open my email" naturally. Mahika understands context and intent, not just rigid
                  commands.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Reduced Cognitive Load</CardTitle>
                <CardDescription>
                  Smart summarization and intelligent navigation means less overwhelming information and faster task
                  completion.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Affordable & Accessible</CardTitle>
                <CardDescription>
                  No expensive hardware or $1200 licenses. Mahika works with your existing computer and microphone.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Personalized Experience</CardTitle>
                <CardDescription>
                  Learns your habits, preferences, and frequently accessed tools to provide a truly personalized
                  navigation experience.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-500 rounded-lg flex items-center justify-center mb-4">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Natural Language Commands</CardTitle>
                <CardDescription>
                  "Find laptops under $1000 on Amazon" - speak naturally and Mahika understands exactly what you need.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-500 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Modern App Support</CardTitle>
                <CardDescription>
                  Works seamlessly with modern single-page applications, dynamic interfaces, and all major platforms.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Limitations of Existing Solutions */}
      <section id="limitations" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Limitations of Existing Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current accessibility tools for the visually impaired have significant drawbacks that Mahika addresses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  1
                </span>
                Limited Contextual Understanding
              </h3>
              <p className="text-gray-600 mb-4">
                Existing systems lack awareness of user intent and context, making multi-step tasks difficult.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-sm text-gray-500 italic">
                  "What's this?" fails when the system doesn't understand the reference.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  2
                </span>
                Rigid Command Structures
              </h3>
              <p className="text-gray-600 mb-4">
                Many tools require fixed, precise commands, making them less intuitive for users.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-sm text-gray-500 italic">
                  "Open my email" may fail if the system only recognizes "Open Outlook."
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  3
                </span>
                High Cognitive Load
              </h3>
              <p className="text-gray-600 mb-4">
                Navigation can be overwhelming with verbose responses or dense menus.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-sm text-gray-500 italic">
                  Screen readers read all elements linearly, making browsing long web pages exhausting.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  4
                </span>
                Lack of Accessibility for All Users
              </h3>
              <p className="text-gray-600 mb-4">
                Tools often have compatibility issues with modern apps and limited language support.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-sm text-gray-500 italic">
                  Dynamic interfaces in single-page apps or regional accents are often not handled effectively.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  5
                </span>
                High Expense
              </h3>
              <p className="text-gray-600 mb-4">
                Many advanced tools are prohibitively expensive for individuals in lower-income communities.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-sm text-gray-500 italic">JAWS Home License costs $1200 to use.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  6
                </span>
                Dependence on External Hardware
              </h3>
              <p className="text-gray-600 mb-4">
                Some solutions require costly external devices, like cameras or sensors.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-sm text-gray-500 italic">
                  Eye-tracking tools or specialized hardware add complexity and expense to adoption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Life Usage Section */}
      <section id="real-life" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Real-Life Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Mahika transforms daily tasks across work, education, and personal life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-sky-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Workplace Efficiency</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Compose emails and documents with speech-to-text
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Navigate complex spreadsheets with AI guidance
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Control video conferencing with voice commands
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-sky-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Educational Support</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Access eBooks and course content by voice
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  AI-powered OCR reads scanned textbooks
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Real-time descriptions of charts and graphs
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-sky-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Daily Tasks</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Natural language shopping and browsing
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Virtual assistant for notifications and reminders
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Secure voice-based banking and logins
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section id="architecture" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">System Architecture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mahika uses a sophisticated multi-layer architecture to deliver seamless voice navigation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="bg-gradient-to-br from-blue-500 to-sky-500 p-1 rounded-xl">
                <div className="bg-white p-6 rounded-lg h-full">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Input Layer</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Microphone & Audio Interface</p>
                        <p className="text-gray-600 text-sm">Captures voice commands with high fidelity</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Speech Recognition APIs</p>
                        <p className="text-gray-600 text-sm">Using Whisper by OpenAI to convert audio to text</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-blue-500 to-sky-500 p-1 rounded-xl">
                <div className="bg-white p-6 rounded-lg h-full">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Processing Layer</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Natural Language Processing (NLP)</p>
                        <p className="text-gray-600 text-sm">Using OpenAI's GPT to understand user intents</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">AI Model Hosting Services</p>
                        <p className="text-gray-600 text-sm">
                          Cloud infrastructure for running machine learning models
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Custom Backend Service</p>
                        <p className="text-gray-600 text-sm">Node.js for orchestrating tasks</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-blue-500 to-sky-500 p-1 rounded-xl">
                <div className="bg-white p-6 rounded-lg h-full">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Action Layer</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Screen Readers/Accessibility APIs</p>
                        <p className="text-gray-600 text-sm">
                          Integrations with Microsoft UI Automation or Apple Accessibility API
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Operating System Interaction</p>
                        <p className="text-gray-600 text-sm">
                          Libraries for triggering keypresses, mouse actions, etc.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-blue-500 to-sky-500 p-1 rounded-xl">
                <div className="bg-white p-6 rounded-lg h-full">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Feedback Layer</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Text-to-Speech APIs</p>
                        <p className="text-gray-600 text-sm">Convert responses into natural-sounding speech</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Audio Playback Libraries</p>
                        <p className="text-gray-600 text-sm">Manage sound output for optimal user experience</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              View detailed technical documentation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Simple. Powerful. Accessible.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with Mahika in three easy steps and transform how you interact with your computer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Download & Install</h3>
              <p className="text-gray-600 leading-relaxed">
                Download Mahika for free and follow our simple installation guide. Setup takes less than 5 minutes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Train Your Voice</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete a quick 10-minute voice training session to help Mahika learn your unique speech patterns.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Start Navigating</h3>
              <p className="text-gray-600 leading-relaxed">
                Begin using natural voice commands to control your computer. Mahika learns and improves with every
                interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Trusted by Thousands</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Mahika is transforming the lives of blind and visually impaired users worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-100">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  "Mahika has completely changed how I work. I can now navigate complex software with ease and my
                  productivity has increased dramatically."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-sky-400 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    S
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Chen</p>
                    <p className="text-sm text-gray-600">Software Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  "The AI understands context so well. I can say 'open my presentation' and it knows exactly which file
                  I mean. It's like having a personal assistant."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-sky-400 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    M
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Marcus Johnson</p>
                    <p className="text-sm text-gray-600">University Professor</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  "Installation was simple and the learning curve was minimal. Within hours, I was navigating my
                  computer faster than ever before."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-sky-400 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Aisha Patel</p>
                    <p className="text-sm text-gray-600">Graphic Designer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-sky-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Computing Experience?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of users who have already discovered the freedom of voice-controlled computing with Mahika.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-4">
              <Download className="w-5 h-5 mr-2" />
              Download for Windows
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-700 text-lg px-8 py-4"
            >
              <Download className="w-5 h-5 mr-2" />
              Download for Mac
            </Button>
          </div>
          <p className="text-sm opacity-75">Free forever. No credit card required. Works offline.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/mahika-logo.png" alt="Mahika" className="h-12 w-auto mb-4" />
                <span className="text-2xl font-bold">Mahika</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering independence through AI-powered voice navigation for blind and visually impaired users.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#limitations" className="hover:text-white transition-colors">
                    Why Mahika
                  </a>
                </li>
                <li>
                  <a href="#real-life" className="hover:text-white transition-colors">
                    Real-Life Usage
                  </a>
                </li>
                <li>
                  <a href="#architecture" className="hover:text-white transition-colors">
                    Technology
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Mahika. All rights reserved. Built with accessibility in mind.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

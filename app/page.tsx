import { Calendar, Clock, Users, Star, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">Tafwit</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#services" className="text-gray-500 hover:text-gray-900">
                Services
              </Link>
              <Link href="/locations" className="text-gray-500 hover:text-gray-900">
                Locations
              </Link>
              <Link href="#how-it-works" className="text-gray-500 hover:text-gray-900">
                How it Works
              </Link>
              <Link href="#providers" className="text-gray-500 hover:text-gray-900">
                For Providers
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Simplify Your
              <span className="text-blue-600"> Appointment Scheduling</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Whether you're booking a medical consultation, beauty treatment, or professional service, Tafwit makes
              scheduling seamless for both customers and providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3" asChild>
                <Link href="/book">Book an Appointment</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3" asChild>
                <Link href="/provider-signup">Join as Provider</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Tafwit?</h2>
            <p className="text-xl text-gray-600">Experience the future of appointment scheduling</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Real-Time Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  See available time slots instantly and book appointments in real-time without the back-and-forth
                  communication.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>For Everyone</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Perfect for medical consultations, beauty treatments, fitness sessions, consultations, and any
                  professional service.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Smart Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automated reminders and updates keep both customers and providers informed about upcoming
                  appointments.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to your perfect appointment</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse Services</h3>
              <p className="text-gray-600">Explore available services and providers in your area or online.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Select Time</h3>
              <p className="text-gray-600">Choose from available time slots that work with your schedule.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Confirm & Go</h3>
              <p className="text-gray-600">Receive confirmation and reminders. Show up and enjoy your service!</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Providers */}
      <section id="providers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">For Service Providers</h2>
              <p className="text-xl text-gray-600 mb-8">
                Streamline your business operations with our comprehensive provider tools.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold">Manage Your Schedule</h3>
                    <p className="text-gray-600">Set your availability and let customers book automatically.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold">Reduce No-Shows</h3>
                    <p className="text-gray-600">Automated reminders help ensure customers show up.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold">Grow Your Business</h3>
                    <p className="text-gray-600">Reach new customers and manage existing ones effortlessly.</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="mt-8" asChild>
                <Link href="/provider-signup">
                  Join as Provider <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl p-8">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Provider Dashboard"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and providers who trust Tafwit for their appointment scheduling needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
              <Link href="/book">Book Your First Appointment</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/provider-signup">Become a Provider</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-2xl font-bold">Tafwit</span>
              </div>
              <p className="text-gray-400">Simplifying appointment scheduling for everyone.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Customers</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/book" className="hover:text-white">
                    Book Appointment
                  </Link>
                </li>
                <li>
                  <Link href="/locations" className="hover:text-white">
                    Find Locations
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Browse Services
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Providers</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/provider-signup" className="hover:text-white">
                    Join as Provider
                  </Link>
                </li>
                <li>
                  <Link href="/provider-dashboard" className="hover:text-white">
                    Provider Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Tafwit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

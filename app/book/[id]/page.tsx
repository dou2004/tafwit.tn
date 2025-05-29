"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, Star, ArrowLeft, Check, Car, Train } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
]

const dates = [
  { date: "Today", day: "Mon", number: "15" },
  { date: "Tomorrow", day: "Tue", number: "16" },
  { date: "Wed", day: "Wed", number: "17" },
  { date: "Thu", day: "Thu", number: "18" },
  { date: "Fri", day: "Fri", number: "19" },
]

export default function BookingDetailsPage() {
  const [selectedDate, setSelectedDate] = useState("Today")
  const [selectedTime, setSelectedTime] = useState("")
  const [notes, setNotes] = useState("")
  const [isBooking, setIsBooking] = useState(false)
  const [isBooked, setIsBooked] = useState(false)

  // Mock service data - in real app, this would come from API based on ID
  const service = {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "General Practitioner",
    category: "Medical",
    rating: 4.9,
    reviews: 127,
    location: "Downtown Medical Center",
    address: "123 Medical Plaza, Suite 200, New York, NY 10001",
    distance: "0.8 miles",
    coordinates: { lat: 40.7589, lng: -73.9851 },
    parking: "Free parking available",
    publicTransport: "Subway: 4, 5, 6 to 59th St",
    price: "$150",
    duration: "30 min",
    image: "/placeholder.svg?height=150&width=150",
    description:
      "Dr. Johnson is a board-certified general practitioner with over 15 years of experience. She specializes in preventive care, chronic disease management, and family medicine.",
    qualifications: ["MD from Harvard Medical School", "Board Certified Internal Medicine", "15+ years experience"],
  }

  const handleBooking = async () => {
    if (!selectedTime) return

    setIsBooking(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsBooking(false)
    setIsBooked(true)
  }

  if (isBooked) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Booking Confirmed!</CardTitle>
            <CardDescription>Your appointment has been successfully scheduled</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Provider:</span>
                <span className="font-medium">{service.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">{selectedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-medium">{selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium">{service.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Price:</span>
                <span className="font-medium">{service.price}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 text-center">
              You'll receive a confirmation email and reminder notifications before your appointment.
            </p>
            <div className="flex gap-2">
              <Button className="flex-1" asChild>
                <Link href="/bookings">View My Bookings</Link>
              </Button>
              <Button variant="outline" className="flex-1" asChild>
                <Link href="/book">Book Another</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/book" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Search
            </Link>
            <Link href="/" className="flex items-center">
              <Calendar className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">Tafwit</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Provider Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription>{service.specialty}</CardDescription>
                    <div className="flex items-center mt-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium ml-1">{service.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({service.reviews})</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <Badge variant="secondary">{service.category}</Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400 mt-0.5" />
                    <div>
                      <div className="font-medium">{service.location}</div>
                      <div className="text-gray-500">{service.address}</div>
                      <div className="text-blue-600 text-xs mt-1">{service.distance} away</div>
                    </div>
                  </div>

                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{service.duration} session</span>
                  </div>
                </div>

                <div className="pt-2 border-t">
                  <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                  <div className="text-sm text-gray-500">per session</div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium mb-2">Location Details</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center">
                      <Car className="h-3 w-3 mr-2 text-gray-400" />
                      {service.parking}
                    </div>
                    <div className="flex items-center">
                      <Train className="h-3 w-3 mr-2 text-gray-400" />
                      {service.publicTransport}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    View on Map
                  </Button>
                </div>

                <div>
                  <h4 className="font-medium mb-2">About</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Qualifications</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.qualifications.map((qual, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-3 w-3 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        {qual}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Select Date & Time</CardTitle>
                <CardDescription>Choose your preferred appointment slot</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Date Selection */}
                <div>
                  <Label className="text-base font-medium">Select Date</Label>
                  <div className="grid grid-cols-5 gap-2 mt-2">
                    {dates.map((date) => (
                      <button
                        key={date.date}
                        onClick={() => setSelectedDate(date.date)}
                        className={`p-3 rounded-lg border text-center transition-colors ${
                          selectedDate === date.date
                            ? "border-blue-600 bg-blue-50 text-blue-600"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="text-xs text-gray-500">{date.day}</div>
                        <div className="font-medium">{date.number}</div>
                        <div className="text-xs">{date.date}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div>
                  <Label className="text-base font-medium">Select Time</Label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 rounded-lg border text-sm transition-colors ${
                          selectedTime === time
                            ? "border-blue-600 bg-blue-50 text-blue-600"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Contact Information</Label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <Label htmlFor="notes" className="text-base font-medium">
                    Additional Notes (Optional)
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Any specific requirements or information for your appointment..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="mt-2"
                  />
                </div>

                {/* Booking Summary */}
                {selectedTime && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Booking Summary</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span>{selectedDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span>{selectedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span>Total:</span>
                        <span>{service.price}</span>
                      </div>
                    </div>
                  </div>
                )}

                <Button className="w-full" size="lg" onClick={handleBooking} disabled={!selectedTime || isBooking}>
                  {isBooking ? "Booking..." : "Confirm Booking"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

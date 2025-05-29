"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, Star, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

const services = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "General Practitioner",
    category: "Medical",
    rating: 4.9,
    reviews: 127,
    location: "Downtown Medical Center",
    address: "123 Medical Plaza, Suite 200, New York, NY 10001",
    distance: "0.8 miles",
    price: "$150",
    duration: "30 min",
    nextAvailable: "Today 2:30 PM",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Bella Beauty Salon",
    specialty: "Hair & Makeup",
    category: "Beauty",
    rating: 4.8,
    reviews: 89,
    location: "Fashion District",
    address: "456 Fashion Ave, New York, NY 10018",
    distance: "1.2 miles",
    price: "$80",
    duration: "90 min",
    nextAvailable: "Tomorrow 10:00 AM",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Mike Thompson",
    specialty: "Personal Trainer",
    category: "Fitness",
    rating: 4.7,
    reviews: 156,
    location: "Elite Fitness Center",
    address: "789 Fitness St, New York, NY 10019",
    distance: "2.1 miles",
    price: "$60",
    duration: "60 min",
    nextAvailable: "Today 6:00 PM",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Dr. Emily Chen",
    specialty: "Dermatologist",
    category: "Medical",
    rating: 4.9,
    reviews: 203,
    location: "Skin Care Clinic",
    address: "321 Health Blvd, New York, NY 10022",
    distance: "1.5 miles",
    price: "$200",
    duration: "45 min",
    nextAvailable: "Next Week",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Zen Massage Therapy",
    specialty: "Therapeutic Massage",
    category: "Wellness",
    rating: 4.6,
    reviews: 78,
    location: "Wellness Center",
    address: "654 Zen Way, New York, NY 10023",
    distance: "3.2 miles",
    price: "$120",
    duration: "75 min",
    nextAvailable: "Tomorrow 3:00 PM",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    name: "Legal Advisor Pro",
    specialty: "Legal Consultation",
    category: "Professional",
    rating: 4.8,
    reviews: 92,
    location: "Law Office Downtown",
    address: "987 Legal Plaza, New York, NY 10004",
    distance: "0.5 miles",
    price: "$300",
    duration: "60 min",
    nextAvailable: "This Week",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function BookingPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("rating")

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" || service.category.toLowerCase() === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  const sortedServices = [...filteredServices].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating
    if (sortBy === "price") return Number.parseInt(a.price.replace("$", "")) - Number.parseInt(b.price.replace("$", ""))
    if (sortBy === "reviews") return b.reviews - a.reviews
    if (sortBy === "distance") return Number.parseFloat(a.distance) - Number.parseFloat(b.distance)
    return 0
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center">
              <Calendar className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">Tafwit</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">My Bookings</Button>
              <Button variant="ghost">Profile</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Book an Appointment</h1>
          <p className="text-gray-600">Find and book with top-rated service providers</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search services or providers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input placeholder="Location" defaultValue="New York, NY" className="pl-10" />
              </div>
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="medical">Medical</SelectItem>
                <SelectItem value="beauty">Beauty</SelectItem>
                <SelectItem value="fitness">Fitness</SelectItem>
                <SelectItem value="wellness">Wellness</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="distance">Nearest</SelectItem>
                <SelectItem value="price">Price: Low to High</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="grid lg:grid-cols-2 gap-6">
          {sortedServices.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                      <CardDescription>{service.specialty}</CardDescription>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium ml-1">{service.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({service.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary">{service.category}</Badge>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <div>
                      <div>{service.location}</div>
                      <div className="text-xs text-gray-500">{service.distance} away</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {service.duration}
                    </div>
                    <div className="text-lg font-semibold text-gray-900">{service.price}</div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="text-sm">
                      <span className="text-gray-500">Next available: </span>
                      <span className="font-medium text-green-600">{service.nextAvailable}</span>
                    </div>
                    <Button asChild>
                      <Link href={`/book/${service.id}`}>Book Now</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

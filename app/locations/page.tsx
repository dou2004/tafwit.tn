"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, MapPin, Search, Navigation, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

const locations = [
  {
    id: 1,
    name: "Downtown Medical Center",
    address: "123 Medical Plaza, Suite 200, New York, NY 10001",
    distance: "0.8 miles",
    providers: 12,
    categories: ["Medical", "Dental", "Wellness"],
    rating: 4.8,
    reviews: 245,
    parking: "Free parking available",
    publicTransport: "Subway: 4, 5, 6 to 59th St",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Fashion District Beauty Hub",
    address: "456 Fashion Ave, New York, NY 10018",
    distance: "1.2 miles",
    providers: 8,
    categories: ["Beauty", "Wellness", "Spa"],
    rating: 4.7,
    reviews: 189,
    parking: "Paid parking garage",
    publicTransport: "Subway: N, Q, R, W to Times Sq",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Elite Fitness Complex",
    address: "789 Fitness St, New York, NY 10019",
    distance: "2.1 miles",
    providers: 15,
    categories: ["Fitness", "Wellness", "Sports Medicine"],
    rating: 4.9,
    reviews: 312,
    parking: "Free parking for members",
    publicTransport: "Subway: 1, 2, 3 to 72nd St",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Wellness Center Midtown",
    address: "654 Zen Way, New York, NY 10023",
    distance: "3.2 miles",
    providers: 6,
    categories: ["Wellness", "Therapy", "Alternative Medicine"],
    rating: 4.6,
    reviews: 156,
    parking: "Street parking available",
    publicTransport: "Subway: B, C to 81st St",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("distance")

  const filteredLocations = locations.filter((location) => {
    const matchesSearch =
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.address.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory =
      selectedCategory === "all" ||
      location.categories.some((cat) => cat.toLowerCase() === selectedCategory.toLowerCase())

    return matchesSearch && matchesCategory
  })

  const sortedLocations = [...filteredLocations].sort((a, b) => {
    if (sortBy === "distance") return Number.parseFloat(a.distance) - Number.parseFloat(b.distance)
    if (sortBy === "rating") return b.rating - a.rating
    if (sortBy === "providers") return b.providers - a.providers
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
              <Button variant="ghost" asChild>
                <Link href="/book">Book Appointment</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/profile">Profile</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Service Locations</h1>
          <p className="text-gray-600">Find service providers near you</p>
        </div>

        {/* Current Location */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Navigation className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Your Location</h3>
                  <p className="text-sm text-gray-500">New York, NY 10001</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Change Location
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
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
                <SelectItem value="dental">Dental</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="distance">Nearest</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="providers">Most Providers</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {sortedLocations.map((location) => (
            <Card key={location.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white text-gray-900">{location.distance} away</Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{location.name}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {location.address}
                    </CardDescription>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">{location.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({location.reviews})</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-2">{location.providers} service providers</p>
                    <div className="flex flex-wrap gap-1">
                      {location.categories.map((category) => (
                        <Badge key={category} variant="secondary" className="text-xs">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Car className="h-4 w-4 mr-2" />
                      {location.parking}
                    </div>
                    <div className="flex items-center">
                      <Train className="h-4 w-4 mr-2" />
                      {location.publicTransport}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" className="flex-1">
                      <MapPin className="h-4 w-4 mr-2" />
                      Directions
                    </Button>
                    <Button className="flex-1" asChild>
                      <Link href={`/book?location=${location.id}`}>View Providers</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedLocations.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No locations found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search criteria or location.</p>
            <Button
              variant="outline"
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

// Car and Train icon components
function Car({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18.4 9.6a2 2 0 0 0-1.6-1.4C16.2 8.1 14.2 8 12 8s-4.2.1-4.8.2c-.6.1-1.1.8-1.6 1.4L3.5 11.2C2.7 11.4 2 12.1 2 13v3c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}

function Train({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="16" height="16" x="4" y="3" rx="2" />
      <path d="M4 11h16" />
      <path d="M12 3v8" />
      <path d="m8 19-2 3" />
      <path d="m18 22-2-3" />
      <path d="M8 15h.01" />
      <path d="M16 15h.01" />
    </svg>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Calendar, User, Bell, Search, Filter, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const upcomingAppointments = [
  {
    id: 1,
    provider: "Dr. Sarah Johnson",
    service: "General Consultation",
    location: "Downtown Medical Center",
    address: "123 Medical Plaza, Suite 200",
    distance: "0.8 miles",
    date: "Today",
    time: "2:30 PM",
    status: "confirmed",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    provider: "Bella Beauty Salon",
    service: "Hair & Makeup",
    location: "Fashion District",
    address: "456 Fashion Ave",
    distance: "1.2 miles",
    date: "Tomorrow",
    time: "10:00 AM",
    status: "confirmed",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    provider: "Mike Thompson",
    service: "Personal Training",
    location: "Elite Fitness Center",
    address: "789 Fitness St",
    distance: "2.1 miles",
    date: "May 20, 2024",
    time: "6:00 PM",
    status: "pending",
    image: "/placeholder.svg?height=40&width=40",
  },
]

const pastAppointments = [
  {
    id: 4,
    provider: "Dr. Emily Chen",
    service: "Dermatology Consultation",
    location: "Skin Care Clinic",
    address: "321 Health Blvd",
    distance: "1.5 miles",
    date: "May 5, 2024",
    time: "11:30 AM",
    status: "completed",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    provider: "Zen Massage Therapy",
    service: "Therapeutic Massage",
    location: "Wellness Center",
    address: "654 Zen Way",
    distance: "3.2 miles",
    date: "April 28, 2024",
    time: "3:00 PM",
    status: "completed",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    provider: "Legal Advisor Pro",
    service: "Legal Consultation",
    location: "Law Office Downtown",
    address: "987 Legal Plaza",
    distance: "0.5 miles",
    date: "April 15, 2024",
    time: "2:00 PM",
    status: "cancelled",
    image: "/placeholder.svg?height=40&width=40",
  },
]

export default function BookingsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const filterAppointments = (appointments: any[]) => {
    return appointments.filter((appointment) => {
      const matchesSearch =
        appointment.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
        appointment.service.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesStatus = filterStatus === "all" || appointment.status === filterStatus

      return matchesSearch && matchesStatus
    })
  }

  const filteredUpcoming = filterAppointments(upcomingAppointments)
  const filteredPast = filterAppointments(pastAppointments)

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
              <Button variant="ghost" size="icon" asChild>
                <Link href="/profile">
                  <User className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col space-y-8">
          {/* Page Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
            <p className="text-gray-600 mt-2">Manage your appointments and bookings</p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search appointments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400 h-5 w-5" />
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button asChild>
              <Link href="/book">Book New Appointment</Link>
            </Button>
          </div>

          {/* Appointments */}
          <Tabs defaultValue="upcoming" className="space-y-6">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              {filteredUpcoming.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredUpcoming.map((appointment) => (
                    <AppointmentCard key={appointment.id} appointment={appointment} />
                  ))}
                </div>
              ) : (
                <EmptyState
                  title="No upcoming appointments"
                  description="You don't have any upcoming appointments matching your search criteria."
                  action={
                    <Button asChild>
                      <Link href="/book">Book an Appointment</Link>
                    </Button>
                  }
                />
              )}
            </TabsContent>

            <TabsContent value="past">
              {filteredPast.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredPast.map((appointment) => (
                    <AppointmentCard key={appointment.id} appointment={appointment} isPast />
                  ))}
                </div>
              ) : (
                <EmptyState
                  title="No past appointments"
                  description="You don't have any past appointments matching your search criteria."
                />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

function AppointmentCard({ appointment, isPast = false }: { appointment: any; isPast?: boolean }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={appointment.image || "/placeholder.svg"} />
              <AvatarFallback>
                {appointment.provider
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{appointment.provider}</CardTitle>
              <CardDescription>{appointment.service}</CardDescription>
            </div>
          </div>
          <Badge className={getStatusColor(appointment.status)}>
            {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span>
              {appointment.date} at {appointment.time}
            </span>
          </div>

          <div className="flex items-start text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 mt-0.5" />
            <div>
              <div>{appointment.location}</div>
              <div className="text-xs text-gray-500">{appointment.address}</div>
              <div className="text-xs text-blue-600">{appointment.distance} away</div>
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span>30 minutes</span>
          </div>

          <div className="pt-4 flex justify-between">
            {!isPast && appointment.status !== "cancelled" ? (
              <>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Reschedule
                  </Button>
                  <Button variant="outline" size="sm">
                    <MapPin className="h-3 w-3 mr-1" />
                    Directions
                  </Button>
                </div>
                <Button variant="destructive" size="sm">
                  Cancel
                </Button>
              </>
            ) : appointment.status === "completed" ? (
              <>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Leave Review
                  </Button>
                  <Button variant="outline" size="sm">
                    <MapPin className="h-3 w-3 mr-1" />
                    Directions
                  </Button>
                </div>
                <Button variant="secondary" size="sm">
                  Book Again
                </Button>
              </>
            ) : (
              <div className="flex space-x-2 ml-auto">
                <Button variant="outline" size="sm">
                  <MapPin className="h-3 w-3 mr-1" />
                  Directions
                </Button>
                <Button variant="secondary" size="sm">
                  Book Again
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function EmptyState({ title, description, action }: { title: string; description: string; action?: React.ReactNode }) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center py-12">
        <Calendar className="h-16 w-16 text-gray-300 mb-4" />
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-center text-gray-500">{description}</CardDescription>
        {action && <div className="mt-6">{action}</div>}
      </CardContent>
    </Card>
  )
}

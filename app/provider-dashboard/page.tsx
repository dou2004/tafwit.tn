"use client"

import { useState } from "react"
import { Calendar, Clock, Users, DollarSign, Settings, Bell, Plus, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const upcomingAppointments = [
  {
    id: 1,
    client: "John Smith",
    service: "General Consultation",
    time: "9:00 AM",
    date: "Today",
    duration: "30 min",
    status: "confirmed",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    client: "Sarah Wilson",
    service: "Follow-up Visit",
    time: "10:30 AM",
    date: "Today",
    duration: "20 min",
    status: "confirmed",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    client: "Mike Johnson",
    service: "Health Checkup",
    time: "2:00 PM",
    date: "Today",
    duration: "45 min",
    status: "pending",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    client: "Emily Davis",
    service: "Consultation",
    time: "9:30 AM",
    date: "Tomorrow",
    duration: "30 min",
    status: "confirmed",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const recentBookings = [
  {
    id: 1,
    client: "Alex Thompson",
    service: "General Consultation",
    date: "Yesterday",
    amount: "$150",
    status: "completed",
  },
  {
    id: 2,
    client: "Lisa Brown",
    service: "Follow-up",
    date: "2 days ago",
    amount: "$100",
    status: "completed",
  },
  {
    id: 3,
    client: "David Lee",
    service: "Health Checkup",
    date: "3 days ago",
    amount: "$200",
    status: "completed",
  },
]

export default function ProviderDashboard() {
  const [selectedTab, setSelectedTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">Tafwit</span>
              <Badge variant="secondary" className="ml-3">
                Provider
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Dr. Johnson!</h1>
          <p className="text-gray-600 mt-2">Here's what's happening with your practice today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">+2 from yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Week's Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2,450</div>
              <p className="text-xs text-muted-foreground">+15% from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">+8 new this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.9</div>
              <p className="text-xs text-muted-foreground">Based on 127 reviews</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="patients">Patients</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Upcoming Appointments */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Upcoming Appointments</CardTitle>
                    <CardDescription>Your next appointments</CardDescription>
                  </div>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Slot
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingAppointments.slice(0, 4).map((appointment) => (
                      <div key={appointment.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={appointment.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {appointment.client
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{appointment.client}</div>
                            <div className="text-sm text-gray-500">{appointment.service}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{appointment.time}</div>
                          <div className="text-sm text-gray-500">{appointment.date}</div>
                          <Badge
                            variant={appointment.status === "confirmed" ? "default" : "secondary"}
                            className="mt-1"
                          >
                            {appointment.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Bookings</CardTitle>
                  <CardDescription>Latest completed appointments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">{booking.client}</div>
                          <div className="text-sm text-gray-500">{booking.service}</div>
                          <div className="text-sm text-gray-500">{booking.date}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-green-600">{booking.amount}</div>
                          <Badge variant="outline" className="mt-1">
                            {booking.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="appointments" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>All Appointments</CardTitle>
                  <CardDescription>Manage your appointment schedule</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  New Appointment
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={appointment.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {appointment.client
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-lg">{appointment.client}</div>
                          <div className="text-gray-500">{appointment.service}</div>
                          <div className="text-sm text-gray-500">Duration: {appointment.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="font-medium">{appointment.time}</div>
                          <div className="text-sm text-gray-500">{appointment.date}</div>
                          <Badge
                            variant={appointment.status === "confirmed" ? "default" : "secondary"}
                            className="mt-1"
                          >
                            {appointment.status}
                          </Badge>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Reschedule</DropdownMenuItem>
                            <DropdownMenuItem>Cancel</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>Schedule Management</CardTitle>
                <CardDescription>Set your availability and manage time slots</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Schedule Management</h3>
                  <p className="text-gray-500 mb-4">Configure your working hours and availability</p>
                  <Button>Set Up Schedule</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="patients">
            <Card>
              <CardHeader>
                <CardTitle>Patient Management</CardTitle>
                <CardDescription>View and manage your patient records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Patient Records</h3>
                  <p className="text-gray-500 mb-4">Access patient history and information</p>
                  <Button>View All Patients</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

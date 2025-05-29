"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, User, Settings, Bell, CreditCard, LogOut, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSaving(false)
    setIsEditing(false)
  }

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
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-6">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" />
                    <AvatarFallback className="text-2xl">JD</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">John Doe</h2>
                  <p className="text-gray-500">john.doe@example.com</p>
                </div>

                <nav className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/profile">
                      <User className="mr-2 h-5 w-5" />
                      Profile
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/bookings">
                      <Calendar className="mr-2 h-5 w-5" />
                      My Bookings
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/profile/payment">
                      <CreditCard className="mr-2 h-5 w-5" />
                      Payment Methods
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/profile/notifications">
                      <Bell className="mr-2 h-5 w-5" />
                      Notifications
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <LogOut className="mr-2 h-5 w-5" />
                    Sign Out
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Tabs defaultValue="personal" className="space-y-6">
              <div className="flex justify-between items-center">
                <TabsList>
                  <TabsTrigger value="personal">Personal Information</TabsTrigger>
                  <TabsTrigger value="preferences">Preferences</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                </TabsList>

                {isEditing ? (
                  <div className="flex space-x-2">
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleSave} disabled={isSaving}>
                      {isSaving ? (
                        <>Saving...</>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" /> Save Changes
                        </>
                      )}
                    </Button>
                  </div>
                ) : (
                  <Button onClick={() => setIsEditing(true)}>
                    <Settings className="mr-2 h-4 w-4" /> Edit Profile
                  </Button>
                )}
              </div>

              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details and contact information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First name</Label>
                        <Input id="firstName" defaultValue="John" disabled={!isEditing} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last name</Label>
                        <Input id="lastName" defaultValue="Doe" disabled={!isEditing} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email address</Label>
                      <Input id="email" type="email" defaultValue="john.doe@example.com" disabled={!isEditing} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone number</Label>
                      <Input id="phone" type="tel" defaultValue="(555) 123-4567" disabled={!isEditing} />
                    </div>

                    <div className="space-y-4 pt-4 border-t">
                      <h3 className="text-lg font-medium">Location Preferences</h3>

                      <div className="space-y-2">
                        <Label htmlFor="currentLocation">Current Location</Label>
                        <Input id="currentLocation" defaultValue="New York, NY" disabled={!isEditing} />
                        <p className="text-xs text-gray-500">This helps us show nearby service providers</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="searchRadius">Search Radius</Label>
                        <Select disabled={!isEditing}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select radius" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5 miles</SelectItem>
                            <SelectItem value="10">10 miles</SelectItem>
                            <SelectItem value="25">25 miles</SelectItem>
                            <SelectItem value="50">50 miles</SelectItem>
                            <SelectItem value="100">100 miles</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Auto-detect location</p>
                          <p className="text-sm text-gray-500">Allow location access for better recommendations</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" defaultValue="123 Main St" disabled={!isEditing} />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" defaultValue="New York" disabled={!isEditing} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" defaultValue="NY" disabled={!isEditing} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" defaultValue="10001" disabled={!isEditing} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences">
                <Card>
                  <CardHeader>
                    <CardTitle>Preferences</CardTitle>
                    <CardDescription>Manage your notification preferences and settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Notifications</h3>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Email notifications</p>
                          <p className="text-sm text-gray-500">Receive booking confirmations and reminders</p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">SMS notifications</p>
                          <p className="text-sm text-gray-500">Receive text message reminders</p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Marketing emails</p>
                          <p className="text-sm text-gray-500">Receive offers and updates</p>
                        </div>
                        <Switch />
                      </div>
                    </div>

                    <div className="space-y-4 pt-6 border-t">
                      <h3 className="text-lg font-medium">Appearance</h3>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Dark mode</p>
                          <p className="text-sm text-gray-500">Use dark theme</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>Security</CardTitle>
                    <CardDescription>Manage your password and security settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current password</Label>
                      <Input id="currentPassword" type="password" disabled={!isEditing} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New password</Label>
                      <Input id="newPassword" type="password" disabled={!isEditing} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm new password</Label>
                      <Input id="confirmPassword" type="password" disabled={!isEditing} />
                    </div>

                    <div className="space-y-4 pt-6 border-t">
                      <h3 className="text-lg font-medium">Two-factor authentication</h3>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Enable 2FA</p>
                          <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                        </div>
                        <Switch />
                      </div>
                    </div>

                    <div className="space-y-4 pt-6 border-t">
                      <h3 className="text-lg font-medium">Sessions</h3>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">Current session</p>
                            <p className="text-sm text-gray-500">Chrome on Windows • New York, USA</p>
                          </div>
                          <Badge>Active</Badge>
                        </div>

                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">Mobile app</p>
                            <p className="text-sm text-gray-500">iOS • Last active 2 days ago</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Sign Out
                          </Button>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full">
                        Sign Out of All Devices
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

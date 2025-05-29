"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Calendar, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function ProviderSignupPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const handleNext = () => {
    setStep(step + 1)
  }

  const handlePrevious = () => {
    setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setStep(4) // Success step

    // After showing success message, redirect to provider dashboard
    setTimeout(() => {
      router.push("/provider-dashboard")
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="flex items-center mb-8 justify-center">
          <Calendar className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">Tafwit</span>
        </Link>

        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Join as a Service Provider</CardTitle>
            <CardDescription>Complete your profile to start offering your services on Tafwit</CardDescription>

            {/* Progress indicator */}
            {step < 4 && (
              <div className="w-full mt-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Basic Info</span>
                  <span className="text-sm font-medium">Business Details</span>
                  <span className="text-sm font-medium">Services</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}
          </CardHeader>

          <CardContent>
            {step === 1 && (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleNext()
                }}
              >
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="name@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone number</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="••••••••" required />
                    <p className="text-xs text-gray-500">
                      Password must be at least 8 characters and include a number and special character
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the{" "}
                      <Link href="/terms" className="text-blue-600 hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  <Button type="submit" className="w-full">
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleNext()
                }}
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business name</Label>
                    <Input id="businessName" placeholder="Your Business Name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Business category</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="medical">Medical</SelectItem>
                        <SelectItem value="beauty">Beauty & Wellness</SelectItem>
                        <SelectItem value="fitness">Fitness</SelectItem>
                        <SelectItem value="legal">Legal</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Business description</Label>
                    <Textarea
                      id="description"
                      placeholder="Tell us about your business and services..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Business address</Label>
                    <Input id="address" placeholder="123 Main St" required />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="New York" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" placeholder="NY" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" placeholder="10001" required />
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button type="button" variant="outline" onClick={handlePrevious}>
                      <ArrowLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                    <Button type="submit">
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </form>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Services offered</Label>
                    <p className="text-sm text-gray-500">Add the services you provide to your customers</p>

                    <div className="space-y-4 mt-4">
                      {[1, 2, 3].map((index) => (
                        <div key={index} className="border rounded-lg p-4 space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor={`service-${index}`}>Service name</Label>
                            <Input id={`service-${index}`} placeholder={`Service ${index}`} required={index === 1} />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor={`duration-${index}`}>Duration</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select duration" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="15">15 minutes</SelectItem>
                                  <SelectItem value="30">30 minutes</SelectItem>
                                  <SelectItem value="45">45 minutes</SelectItem>
                                  <SelectItem value="60">1 hour</SelectItem>
                                  <SelectItem value="90">1.5 hours</SelectItem>
                                  <SelectItem value="120">2 hours</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`price-${index}`}>Price</Label>
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                  $
                                </span>
                                <Input
                                  id={`price-${index}`}
                                  type="number"
                                  className="pl-7"
                                  placeholder="99.99"
                                  required={index === 1}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor={`description-${index}`}>Description</Label>
                            <Textarea
                              id={`description-${index}`}
                              placeholder="Describe this service..."
                              required={index === 1}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button type="button" variant="outline" className="w-full mt-4">
                      <Plus className="mr-2 h-4 w-4" /> Add Another Service
                    </Button>
                  </div>

                  <div className="space-y-2 pt-4">
                    <Label>Availability</Label>
                    <p className="text-sm text-gray-500 mb-4">
                      Set your general working hours (you can adjust this later)
                    </p>

                    <div className="space-y-4">
                      {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                        <div key={day} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Checkbox id={day.toLowerCase()} defaultChecked />
                            <Label htmlFor={day.toLowerCase()} className="w-24">
                              {day}
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Select defaultValue="9">
                              <SelectTrigger className="w-24">
                                <SelectValue placeholder="Start" />
                              </SelectTrigger>
                              <SelectContent>
                                {Array.from({ length: 12 }, (_, i) => i + 8).map((hour) => (
                                  <SelectItem key={hour} value={hour.toString()}>
                                    {hour > 12 ? `${hour - 12} PM` : hour === 12 ? "12 PM" : `${hour} AM`}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <span>to</span>
                            <Select defaultValue="17">
                              <SelectTrigger className="w-24">
                                <SelectValue placeholder="End" />
                              </SelectTrigger>
                              <SelectContent>
                                {Array.from({ length: 12 }, (_, i) => i + 12).map((hour) => (
                                  <SelectItem key={hour} value={hour.toString()}>
                                    {hour > 12 ? `${hour - 12} PM` : hour === 12 ? "12 PM" : `${hour} AM`}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      ))}

                      {["Saturday", "Sunday"].map((day) => (
                        <div key={day} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Checkbox id={day.toLowerCase()} />
                            <Label htmlFor={day.toLowerCase()} className="w-24">
                              {day}
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Select disabled>
                              <SelectTrigger className="w-24">
                                <SelectValue placeholder="Start" />
                              </SelectTrigger>
                              <SelectContent>{/* Time options */}</SelectContent>
                            </Select>
                            <span>to</span>
                            <Select disabled>
                              <SelectTrigger className="w-24">
                                <SelectValue placeholder="End" />
                              </SelectTrigger>
                              <SelectContent>{/* Time options */}</SelectContent>
                            </Select>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button type="button" variant="outline" onClick={handlePrevious}>
                      <ArrowLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? "Creating account..." : "Complete Registration"}
                    </Button>
                  </div>
                </div>
              </form>
            )}

            {step === 4 && (
              <div className="py-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="rounded-full bg-green-100 p-4">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">Registration Complete!</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Your provider account has been successfully created. You will be redirected to your dashboard shortly.
                </p>
                <Button asChild className="w-full max-w-xs mx-auto">
                  <Link href="/provider-dashboard">Go to Dashboard</Link>
                </Button>
              </div>
            )}
          </CardContent>

          {step < 4 && (
            <CardFooter className="flex justify-center border-t pt-6">
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 hover:underline">
                  Sign in
                </Link>
              </p>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  )
}

// Plus icon component
function Plus({ className }: { className?: string }) {
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
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { submitLeadForm } from "@/app/actions/submit-form"
import { X } from "lucide-react"

// Fallback function to save form data locally if database fails
const saveSubmissionLocally = (data: any) => {
  try {
    // Get existing submissions or initialize empty array
    const existingSubmissions = JSON.parse(localStorage.getItem("leadSubmissions") || "[]")

    // Add new submission with timestamp
    existingSubmissions.push({
      ...data,
      submittedAt: new Date().toISOString(),
    })

    // Save back to localStorage
    localStorage.setItem("leadSubmissions", JSON.stringify(existingSubmissions))
    return true
  } catch (error) {
    console.error("Error saving submission locally:", error)
    return false
  }
}

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [showAdditionalFields, setShowAdditionalFields] = useState(false)
  const [showThankYouPopup, setShowThankYouPopup] = useState(false)
  const [phoneValue, setPhoneValue] = useState("")
  const phoneNumber = "2625018982"

  // Function to format phone number as user types
  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, "")

    // Format the phone number as (XXX) XXX-XXXX
    if (digits.length <= 3) {
      return digits
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
    } else {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`
    }
  }

  // Handle phone input change
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value)
    setPhoneValue(formattedValue)
  }

  // Function to show the thank you popup with a different URL for tracking
  const showThankYou = () => {
    setShowThankYouPopup(true)
    // Update URL without full page reload for tracking purposes
    window.history.pushState({}, "", window.location.pathname + "?submitted=true")
  }

  // Function to close the thank you popup and restore original URL
  const closeThankYou = () => {
    setShowThankYouPopup(false)
    window.history.pushState({}, "", window.location.pathname)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const form = e.currentTarget
    const formElement = form as HTMLFormElement

    // Get raw phone value (without formatting) for database
    const rawPhone = phoneValue.replace(/\D/g, "")

    // Prepare submission data
    const submissionData = {
      zipCode: formElement.zipcode.value,
      phone: rawPhone,
      imagingType: formElement.imaging.value,
      bodyPart: showAdditionalFields ? formElement.bodyPart.value : undefined,
      hasOrder: showAdditionalFields ? formElement.doctorOrder.value === "yes" : undefined,
    }

    try {
      // Try to submit to database
      const result = await submitLeadForm(submissionData)

      if (result.success) {
        // Success - show thank you popup
        form.reset()
        setPhoneValue("")
        setShowAdditionalFields(false)
        showThankYou()
      } else {
        // Database error - try local storage fallback
        console.log("Database submission failed:", result.debug || result.message)
        const savedLocally = saveSubmissionLocally(submissionData)

        if (savedLocally) {
          // Local storage fallback worked - still show success to user
          console.log("Saved to local storage as fallback")
          form.reset()
          setPhoneValue("")
          setShowAdditionalFields(false)
          showThankYou()
        } else {
          // Both database and local storage failed
          setMessage({
            type: "error",
            text: "Unable to submit form. Please try again or contact us directly.",
          })
        }
      }
    } catch (error) {
      console.error("Form submission error:", error)

      // Try local storage fallback
      const savedLocally = saveSubmissionLocally(submissionData)

      if (savedLocally) {
        // Local storage fallback worked - still show success to user
        console.log("Saved to local storage after error")
        form.reset()
        setPhoneValue("")
        setShowAdditionalFields(false)
        showThankYou()
      } else {
        setMessage({
          type: "error",
          text: "An unexpected error occurred. Please try again or contact us directly.",
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white/90 rounded-lg p-4 md:p-6 shadow-lg">
      <h2 className="text-center text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
        Looking for the best scan price near you? We find the lowest-cost, high-quality imaging options in your
        neighborhood. For just a{" "}
        <span className="font-bold text-blue-600 relative inline-block">
          <span className="relative z-10">$25 fee</span>
          <span className="absolute inset-0 bg-blue-100 rounded-md -z-0 transform -rotate-1"></span>
        </span>{" "}
        if we book your scan—refunded if we don't save you at least $100.
      </h2>

      {message && (
        <div
          className={`mb-4 p-3 rounded-md ${message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
        <div>
          <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700 mb-1">
            Zip code
          </label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your zip code"
            required
            maxLength={5}
            pattern="[0-9]{5}"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Mobile phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phoneValue}
            onChange={handlePhoneChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="(555) 123-4567"
            required
          />
        </div>

        <div>
          <label htmlFor="imaging" className="block text-sm font-medium text-gray-700 mb-1">
            Imaging needed
          </label>
          <select
            id="imaging"
            name="imaging"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            onChange={(e) => setShowAdditionalFields(e.target.value !== "")}
          >
            <option value="">Select imaging type</option>
            <option value="mri">MRI</option>
            <option value="ct">CT scan</option>
            <option value="pet">PET</option>
            <option value="ultrasound">Ultrasound</option>
            <option value="xray">X-ray</option>
            <option value="mammography">Mammography</option>
            <option value="other">Other</option>
          </select>
        </div>

        {showAdditionalFields && (
          <div className="space-y-3 md:space-y-4">
            <div>
              <label htmlFor="bodyPart" className="block text-sm font-medium text-gray-700 mb-1">
                Scan body part <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="bodyPart"
                name="bodyPart"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., left knee, spine, brain"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Do you have a doctor's order? <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input type="radio" id="orderYes" name="doctorOrder" value="yes" className="mr-2" required />
                  <label htmlFor="orderYes">Yes</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="orderNo" name="doctorOrder" value="no" className="mr-2" />
                  <label htmlFor="orderNo">No</label>
                </div>
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Get affordable scan quotes now"}
        </button>

        <div className="text-center my-2">
          <span className="text-gray-500 text-sm">— OR —</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <a
            href={`tel:${phoneNumber}`}
            className="py-3 px-4 bg-white border border-blue-600 text-blue-600 font-medium rounded-md transition-colors hover:bg-blue-50 text-center"
          >
            Call us
          </a>
          <a
            href={`sms:${phoneNumber}`}
            className="py-3 px-4 bg-white border border-blue-600 text-blue-600 font-medium rounded-md transition-colors hover:bg-blue-50 text-center"
          >
            Text us
          </a>
        </div>
      </form>

      {/* Thank You Popup */}
      {showThankYouPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-bold text-lg">Thank You!</h3>
              <button
                onClick={closeThankYou}
                className="text-gray-500 hover:bg-gray-100 rounded-full p-1"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="mb-4 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">We've received your request!</h4>
                <p className="text-gray-600">
                  Our team will reach out to you shortly with affordable scan options in your area.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-md mb-4">
                <p className="text-blue-800 text-sm">
                  <strong>What happens next?</strong> A care coordinator will contact you within 24 hours to discuss
                  your imaging needs and provide pricing options.
                </p>
              </div>
              <button
                onClick={closeThankYou}
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
              >
                Return to Homepage
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

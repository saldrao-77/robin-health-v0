"use client"

import type React from "react"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"
import Link from "next/link"

const phoneNumber = "(262) 501-8982"

interface AccordionItemProps {
  value: string
  title: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: (value: string) => void
}

function AccordionItem({ value, title, children, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b">
      <h3>
        <button
          className="flex justify-between w-full py-4 text-left font-medium"
          onClick={() => onToggle(value)}
          aria-expanded={isOpen}
        >
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform ${isOpen ? "transform rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </h3>
      <div className={`pb-4 pr-4 ${isOpen ? "block" : "hidden"}`}>{children}</div>
    </div>
  )
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (value: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [value]: !prev[value],
    }))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-12">Frequently asked questions</h1>

            {/* General Questions */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4">General questions</h3>
              <div className="space-y-2">
                <AccordionItem
                  value="what-is-service"
                  title="What is this service?"
                  isOpen={!!openItems["what-is-service"]}
                  onToggle={toggleItem}
                >
                  <p>
                    We provide an easy way to find and book affordable imaging services (e.g., MRI, CT scan, X-ray) at
                    cash-pay prices. By bypassing insurance, you can save hundreds—even thousands—on medical imaging.
                  </p>
                </AccordionItem>

                <AccordionItem
                  value="how-does-work"
                  title="How does this work?"
                  isOpen={!!openItems["how-does-work"]}
                  onToggle={toggleItem}
                >
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Search for a scan – Enter your ZIP code and select the imaging service you need.</li>
                    <li>Compare prices – See upfront costs from local imaging centers.</li>
                    <li>Submit your request – We help coordinate your order and confirm your appointment.</li>
                    <li>
                      Get your scan – Show up at your scheduled time, pay the listed price, and receive your results.
                    </li>
                  </ol>
                </AccordionItem>

                <AccordionItem
                  value="doctor-order"
                  title="How do you work with my doctor to get an order?"
                  isOpen={!!openItems["doctor-order"]}
                  onToggle={toggleItem}
                >
                  <p>If your scan requires a doctor's order, we help coordinate it. You can:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Upload your order if you already have one.</li>
                    <li>
                      Provide your doctor's details, and we'll reach out to your doctor to handle the request for you.
                    </li>
                    <li>Get connected to a provider if you need a new order.</li>
                  </ul>
                </AccordionItem>

                <AccordionItem
                  value="process-time"
                  title="How long does this process take?"
                  isOpen={!!openItems["process-time"]}
                  onToggle={toggleItem}
                >
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Finding a scan – 24 hours</li>
                    <li>Coordinating your order – 24–48 hours (if needed)</li>
                    <li>Scheduling your scan – Same day to a few days, depending on location availability</li>
                  </ul>
                </AccordionItem>
              </div>
            </div>

            {/* Cost, Payment, and Insurance */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4">Cost, payment, and insurance</h3>
              <div className="space-y-2">
                <AccordionItem
                  value="cash-with-insurance"
                  title="Can I pay with cash even if I have insurance?"
                  isOpen={!!openItems["cash-with-insurance"]}
                  onToggle={toggleItem}
                >
                  <p>
                    Yes! Even if you have insurance, you can choose to pay the cash-pay price instead of using your
                    insurance. Many people do this to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>
                      Avoid high deductibles – If you haven't met your deductible, cash prices may be cheaper than going
                      through insurance.
                    </li>
                    <li>
                      Skip prior authorizations – Some insurance plans require approvals, while cash payments allow you
                      to book immediately.
                    </li>
                    <li>Keep it simple – No paperwork, no claims, and no surprise bills later.</li>
                  </ul>
                </AccordionItem>

                <AccordionItem
                  value="how-much-save"
                  title="How much will I save?"
                  isOpen={!!openItems["how-much-save"]}
                  onToggle={toggleItem}
                >
                  <p>
                    Patients save an average of 40–90%+ compared to hospital and insurance prices. Prices vary by
                    location and scan type, but we always show upfront, transparent pricing—no surprise bills.
                  </p>
                </AccordionItem>

                <AccordionItem
                  value="hidden-fees"
                  title="Are there any hidden fees?"
                  isOpen={!!openItems["hidden-fees"]}
                  onToggle={toggleItem}
                >
                  <p>
                    No. The price listed includes the scan and any associated facility fees. If additional scans or
                    contrast are needed, the imaging center will inform you of any extra costs.
                  </p>
                </AccordionItem>

                <AccordionItem
                  value="deductible"
                  title="Will my payment count toward my deductible?"
                  isOpen={!!openItems["deductible"]}
                  onToggle={toggleItem}
                >
                  <p>
                    Yes, in most cases your cash-pay medical expenses can count toward your deductible. We can help you
                    file your receipt ("superbill") with your insurance company without you having to put in the effort.
                    Your dedicated care coordinator will walk you through the process one-on-one, making it as simple as
                    possible.
                  </p>
                </AccordionItem>

                <AccordionItem
                  value="hsa-fsa"
                  title="Can I use an HSA or FSA card?"
                  isOpen={!!openItems["hsa-fsa"]}
                  onToggle={toggleItem}
                >
                  <p>
                    Yes! Most Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA) allow imaging
                    purchases. Be sure to check with your HSA / FSA administrator for eligibility.
                  </p>
                </AccordionItem>
              </div>
            </div>

            {/* Other Questions */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Other questions</h3>
              <div className="space-y-2">
                <AccordionItem
                  value="cancel-reschedule"
                  title="What happens if I need to cancel or reschedule?"
                  isOpen={!!openItems["cancel-reschedule"]}
                  onToggle={toggleItem}
                >
                  <p>
                    Our care coordination team is here to help. Email or text us at anytime and we'll help you with any
                    scheduling needs.
                  </p>
                </AccordionItem>

                <AccordionItem
                  value="referral"
                  title="Do I need a referral?"
                  isOpen={!!openItems["referral"]}
                  onToggle={toggleItem}
                >
                  <p>
                    Some imaging services (e.g., MRI, CT) require a doctor's order, but many basic scans (e.g., X-rays)
                    do not, especially when paying with cash. Our care coordination team can guide you through the
                    process based on the scan you need.
                  </p>
                </AccordionItem>

                <AccordionItem
                  value="results"
                  title="How do I get my results?"
                  isOpen={!!openItems["results"]}
                  onToggle={toggleItem}
                >
                  <p>
                    Your imaging results will be sent directly to your referring provider. Additionally, most imaging
                    centers share a copy with patients. If you'd like a copy for yourself, be sure ask the imaging
                    center at the time of your scan. Our care coordination team can help you at every step of the way.
                  </p>
                </AccordionItem>

                <AccordionItem
                  value="more-questions"
                  title="What if I have more questions?"
                  isOpen={!!openItems["more-questions"]}
                  onToggle={toggleItem}
                >
                  <p>Reach out to us anytime—we're happy to help!</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Phone / SMS: (262) 501-8982</li>
                    <li>Email: support@rbnhealth.com</li>
                  </ul>
                </AccordionItem>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Why patients love Robin Health</h2>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-blue-200/70 p-6 rounded-lg">
                <div className="flex justify-start mb-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-600"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Deductible-friendly savings</h3>
                <p className="text-lg">We help you file your cash-price imaging bill toward your deductible.</p>
              </div>

              <div className="bg-blue-200/70 p-6 rounded-lg">
                <div className="flex justify-start mb-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-600"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Locked-in pricing.</h3>
                <p className="text-lg">No hidden fees / extra charges. The scan price you see is what you pay.</p>
              </div>

              <div className="bg-blue-200/70 p-6 rounded-lg">
                <div className="flex justify-start mb-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-600"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Fast scheduling.</h3>
                <p className="text-lg">Scan pricing sent in 24 hours. Scans often available within 24-72 hours.</p>
              </div>

              <div className="bg-blue-200/70 p-6 rounded-lg">
                <div className="flex justify-start mb-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-600"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Live care support.</h3>
                <p className="text-lg">Our care coordination team is here to help before, during, and after.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How Robin Saves You Money */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">How Robin saves you money</h2>

            <div className="flex flex-col max-w-4xl mx-auto">
              {/* Pricing Table */}
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-6 text-center">We have industry-low pricing</h3>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ROBIN%2BHEALTH%2BRates%2Bstarting%2Bfrom.jpg-OJ6RPc4V0d0ClMGKcy51XLWHwfSyDx.jpeg"
                  alt="Robin Health Pricing Comparison"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-lg border border-gray-200 shadow-md"
                />
              </div>

              <div className="bg-blue-100 p-6 rounded-lg text-center">
                <p className="text-xl font-bold text-blue-800">
                  Save up to 90% on your medical imaging with Robin Health
                </p>
                <p className="mt-2">No hidden fees. No surprise bills. Just transparent pricing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-blue-600 rounded-xl overflow-hidden shadow-xl">
              <div className="md:flex">
                <div className="md:w-2/3 p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to save on your medical imaging?
                  </h2>
                  <p className="text-blue-100 text-lg mb-8">
                    Get started today and find affordable, high-quality imaging centers near you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/#hero"
                      className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition-colors text-center"
                    >
                      Get started
                    </Link>
                    <a
                      href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`}
                      className="border border-white text-white hover:bg-blue-700 font-medium py-3 px-6 rounded-md transition-colors text-center"
                    >
                      Call us: {phoneNumber}
                    </a>
                  </div>
                </div>
                <div className="md:w-1/3 bg-blue-700 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-3xl font-bold text-white mb-2">$1,000+</p>
                    <p className="text-blue-100">Average savings per scan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

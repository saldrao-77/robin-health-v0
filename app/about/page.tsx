"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function AboutPage() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-scroll the carousel
  useEffect(() => {
    if (!carouselRef.current) return

    const carousel = carouselRef.current

    // Simple marquee animation using CSS
    const marquee = document.createElement("style")
    marquee.innerHTML = `
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      
      #logo-carousel {
        animation: marquee 20s linear infinite;
        display: flex;
      }
    `
    document.head.appendChild(marquee)

    return () => {
      document.head.removeChild(marquee)
    }
  }, [])

  const logos = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stanford-logo-660x330-0oFIbBIU0WtkeTwnFUwINN8jy8rBNm.png",
      alt: "Stanford University",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-d-school.jpg-O6IXBvDOyAmn0eeaCW7Nmrv58JHDjb.webp",
      alt: "Stanford d.school",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mckinsey-logo_brandlogos.net_6tux8-ZuPS4NqrjI59MDaE7f7gMLMR2VLvbz.png",
      alt: "McKinsey & Company",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-MIq1RSASYvz4GezEOqeYskq0EAydnh.png",
      alt: "FDA",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/US-WhiteHouse-Logo.svg-BwpIMr0MjkaPmwhw6DWPNDjnfgxlZh.png",
      alt: "White House",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Senate-HELP.jpg-ThkRrk4hTDVz3y6TqJgn1nYHVkHjW8.jpeg",
      alt: "Senate HELP Committee",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/US_Department_of_Veterans_Affairs_logo.svg-L6wNLLjYfbZBZul4oKIYK2NAU2IdQg.png",
      alt: "VA Hospital",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        {/* About Us Section */}
        <section className="py-8 md:py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">About Us</h1>
            <h3 className="text-lg font-medium mb-2 border-b border-red-500 inline-block pb-1">Our Story</h3>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-6">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                  We started Robin Health because getting a medical scan shouldn't feel overwhelming.
                </h2>
              </div>

              <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-lg">
                  If you've delayed care because of <span className="font-bold">surprise bills</span> or confusion
                  navigating the system—<span className="font-bold">you're not alone</span>.
                </p>

                <p className="text-base md:text-lg">
                  At Robin, we help patients find and book affordable MRIs, CTs, and x-rays with clear, upfront pricing.{" "}
                  <span className="font-bold">Just the scan you need, at a fair price you'll know in advance</span>.
                </p>

                <p className="text-base md:text-lg">
                  We partner with over 3,000 imaging centers nationwide to give you access to exclusive cash-pay rates,{" "}
                  <span className="font-bold">often lower than what you'd pay using insurance</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Company Section */}
        <section className="py-8 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Company</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-base md:text-lg bg-blue-50 p-4 md:p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                  Robin Health is a <strong>Stanford University-backed company</strong> taking a research- and
                  technology-first approach to improving <strong>healthcare equity and access</strong>. Our team
                  combines <strong>deep healthcare expertise</strong> with cutting-edge technology to eliminate the
                  hidden costs, delays, and confusion that too often block patients from getting the care they need.
                </p>
              </div>
            </div>

            {/* Leadership Team */}
            <div className="mb-8 md:mb-12">
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">
                <span className="border-b-2 border-red-500 pb-1">Leadership Team</span>
              </h3>

              {/* Sal Rao */}
              <div className="bg-blue-50 rounded-xl overflow-hidden shadow-lg mb-6 md:mb-8">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3">
                    <div className="h-[500px] md:h-full">
                      <Image
                        src="/images/sal-rao-headshot.jpeg"
                        alt="Sal Rao, Chief Executive Officer"
                        width={600}
                        height={900}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: "center center" }}
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 p-4 md:p-6">
                    <div className="mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-blue-800">Sal Rao</h3>
                      <p className="text-base md:text-lg font-medium text-blue-600">Chief Executive Officer</p>
                    </div>
                    <div className="space-y-3 md:space-y-4">
                      <p className="text-base md:text-lg">
                        Sal founded Robin Health after receiving a <strong>$2,000 surprise bill</strong> for a scan she
                        could've gotten for <strong>$260 in cash</strong> just blocks away. Raised in the Midwest in a
                        family of doctors, she grew up hating bad deals—and built Robin to help others avoid them.
                      </p>
                      <p className="text-base md:text-lg">
                        Before Robin, Sal advised Fortune 500 companies and health systems at <strong>McKinsey</strong>,
                        working on healthcare, <strong>COVID-19 response</strong>, and technology and served as one of
                        the <strong>youngest executives</strong> at
                        <strong> GlossGenius</strong>, a fast-growing technology startup. Her public-sector experience
                        spans the <strong>White House</strong>, <strong>U.S. Senate Health committee</strong>, and{" "}
                        <strong>DC Mayor's Office</strong>, where she focused on healthcare access and policy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dr. Raj Rao */}
              <div className="bg-blue-50 rounded-xl overflow-hidden shadow-lg">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="w-full md:w-1/3">
                    <div className="h-[500px] md:h-full">
                      <Image
                        src="/images/dr-raj-rao-headshot.jpeg"
                        alt="Dr. Raj Rao, Chief Medical Officer"
                        width={600}
                        height={900}
                        className="w-full h-full object-contain"
                        style={{ objectPosition: "center 35%" }}
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 p-4 md:p-6">
                    <div className="mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-blue-800">Dr. Raj Rao</h3>
                      <p className="text-base md:text-lg font-medium text-blue-600">Chief Medical Officer</p>
                    </div>
                    <div className="space-y-3 md:space-y-4">
                      <p className="text-base md:text-lg">
                        Dr. Raj Rao is a <strong>nationally recognized orthopedic spine surgeon</strong> with over{" "}
                        <strong>30 years of leadership</strong> in clinical care, academia, and health policy. He
                        previously <strong>Chaired the Department of Orthopedic Surgery</strong> at George Washington
                        University.
                      </p>
                      <p className="text-base md:text-lg">
                        Dr. Rao previously <strong>chaired the FDA's Orthopaedic Devices Panel</strong>, regulating
                        surgical device safety for millions of patients nationwide. He has served on{" "}
                        <strong>multiple national boards</strong> focused on improving surgical quality and reducing
                        unnecessary care. At Robin, Dr. Rao ensures every scan meets the{" "}
                        <strong>highest medical standards</strong>—so patients get fast, affordable care without
                        compromising on quality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo Carousel - Simplified with pure CSS approach */}
            <div className="mt-8 md:mt-12 mb-6 md:mb-8">
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold inline-block border-b-2 border-red-500 pb-1">
                  Our Team's Experience
                </h3>
              </div>
              <div className="bg-gray-50 py-6 px-4 rounded-xl shadow-sm overflow-hidden">
                <div className="relative overflow-hidden">
                  {/* Outer container with hidden overflow */}
                  <div className="overflow-hidden w-full">
                    {/* Inner container that will be animated */}
                    <div id="logo-carousel" ref={carouselRef} className="flex" style={{ width: "fit-content" }}>
                      {/* First set of logos */}
                      {logos.map((logo, index) => (
                        <div
                          key={`first-${index}`}
                          className="flex-shrink-0 w-24 md:w-32 h-16 md:h-20 mx-2 grayscale hover:grayscale-0 transition-all duration-300"
                        >
                          <Image
                            src={logo.src || "/placeholder.svg"}
                            alt={logo.alt}
                            width={120}
                            height={80}
                            className="object-contain w-full h-full"
                          />
                        </div>
                      ))}

                      {/* Duplicate set of logos for seamless looping */}
                      {logos.map((logo, index) => (
                        <div
                          key={`second-${index}`}
                          className="flex-shrink-0 w-24 md:w-32 h-16 md:h-20 mx-2 grayscale hover:grayscale-0 transition-all duration-300"
                        >
                          <Image
                            src={logo.src || "/placeholder.svg"}
                            alt={logo.alt}
                            width={120}
                            height={80}
                            className="object-contain w-full h-full"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-8 md:mt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-blue-50 rounded-xl p-4 md:p-6 text-center transform transition-transform hover:scale-105 duration-300 shadow-sm">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 mb-3 md:mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-8 md:w-8 text-blue-600"
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
                  <p className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-1">Average savings</p>
                  <p className="text-2xl md:text-4xl font-bold text-blue-600 mb-1">$1,000+</p>
                  <p className="text-base md:text-lg">per imaging scan</p>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 md:p-6 text-center transform transition-transform hover:scale-105 duration-300 shadow-sm">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 mb-3 md:mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-8 md:w-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <p className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-1">Trusted by</p>
                  <p className="text-2xl md:text-4xl font-bold text-blue-600 mb-1">100+</p>
                  <p className="text-base md:text-lg">healthcare providers</p>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 md:p-6 text-center transform transition-transform hover:scale-105 duration-300 shadow-sm">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 mb-3 md:mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-8 md:w-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-1">Network of</p>
                  <p className="text-2xl md:text-4xl font-bold text-blue-600 mb-1">3,000+</p>
                  <p className="text-base md:text-lg">local imaging centers</p>
                </div>
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
                      href="tel:2625018982"
                      className="border border-white text-white hover:bg-blue-700 font-medium py-3 px-6 rounded-md transition-colors text-center"
                    >
                      Call us: (262) 501-8982
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

import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-r from-blue-100 via-blue-50 to-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8">
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* School Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="block mb-4">
              <img 
                src="/logo/logo-header.jpg" 
                alt="SAGES Logo" 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              <span className="font-semibold text-blue-800 block mb-2">
                SAGES, Bhopalpatnam English Medium School
              </span>
              A leading educational institution dedicated to providing high-quality education with English as the primary medium of instruction.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-8 lg:grid-cols-3">
            {/* Resources */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/academics" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Academics
                  </Link>
                </li>
                <li>
                  <Link href="/admissions" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Admissions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
                Follow Us
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2">
                    <FaYoutube className="w-4 h-4" />
                    <span>Youtube</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2">
                    <FaInstagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2">
                    <FaFacebookF className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            {/* Copyright */}
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} SAGES, Bhopalpatnam. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <FaFacebookF className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <FaTwitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <FaInstagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <FaYoutube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
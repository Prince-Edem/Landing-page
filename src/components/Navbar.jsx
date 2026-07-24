import { Menu, X } from "lucide-react"
import { useState } from "react"

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#0a0a0f] backdrop-blur-sm border-b border-white/10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-14 md:h-18">
          {/* Logo */}
          <a href="#hero">
            <div className="flex items-center space-x-1 group cursor-pointer">
              <div>
                <img src="/logo.png" alt="CodeFlow" className="w-6 h-6 sm:w-8 sm:h-8"/>
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-medium">
                <span>Rec</span>
                <span className="text-blue-400">ap</span>
              </span>
            </div>
          </a>
          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#features" className="text-gray-400 hover:text-white text-sm lg:text-base">Features</a>
            <a href="#pricing" className="text-gray-400 hover:text-white text-sm lg:text-base">Pricing</a>
            <a href="#faqs" className="text-gray-400 hover:text-white text-sm lg:text-base">FAQs</a>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <button className="font-medium hover:text-gray-400 cursor-pointer">
              Login
            </button>
            <button className="bg-white text-black py-2 px-4 sm:px-6 rounded-full font-bold transition relative overflow-hidden hover:scale-105 cursor-pointer">
              Start free trial
            </button>
          </div>
          {/* Mobile Menu */}
          {/* <button 
            className="md:hidden p-2 text-gray-300 hover:text-white cursor-pointer" 
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <X />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6"/>
            )}
          </button> */}
        </div>
      </div>
      {/* {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 slide-in-from-top animate-in duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <a 
              href="#features" 
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#testimonials" 
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
          </div>
        </div>
      )} */}
    </nav>
  )
}
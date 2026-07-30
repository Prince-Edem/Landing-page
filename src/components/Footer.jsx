import { ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";


export const Footer = () => {
  return (
    <footer className="pt-20 pb-10 px-10 relative border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Big Card */}
        <div 
          className="flex flex-col sm:flex-row text-center justify-between items-center p-10 gap-4 mb-20 backdrop-blur-sm bg-linear-to-r from-blue-500/60 to-purple-500/60 rounded-3xl"
        >
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-black">
              Stop taking notes. 
            </h2>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Start having conversations.
            </h2>
            <p className="text-gray-400">Free to start. No credit card required.</p>
          </div>
          <div className="w-full sm:w-auto mt-4 sm:mt-0">
            <button 
              className="group w-full px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-bold text-sm sm:text-base 
                transition-all hover:scale-105 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Start free trial</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
            </button>
          </div>
        </div>
        <div className="hidden max-w-5xl sm:flex justify-between pb-15">
          {/* Company */}
          <div className="space-y-4">
            <div>
              <a href="#hero">
                <div className="flex items-center space-x-1 group cursor-pointer">
                  <span className="text-lg sm:text-xl md:text-2xl font-medium">
                    <span>Rec</span>
                    <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">ap</span>
                  </span>
                </div>
              </a>
            </div>
            <p className="text-sm text-gray-400">Meeting notes that write themselves.</p>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              <a
                href="#"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <FaXTwitter className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <FaGithub className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <FaLinkedinIn className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
          {/* Product */}
          <div className="space-y-3">
            <h4 className="font-bold">Product</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#how-it-works">FAQs</a></li>
            </ul>
          </div>
          {/* Legal */}
          <div className="space-y-3">
            <h4 className="font-bold">Legal</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
        <div className="w-full mx-auto grid grid-cols-1 sm:flex items-center justify-between border-t border-white/10 pt-10 text-gray-400  text-xs sm:text-sm">
          <p className="text-center pb-2">© 2026 Recap. All rights reserved.</p>
          <div className="flex items-center justify-between gap-4">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
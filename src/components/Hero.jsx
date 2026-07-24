import { ChevronDown, Check, Sparkles, ArrowRight, Play } from "lucide-react";
import  { useEffect, useState } from "react";

const actionItems = [
  "Review Q3 metrics with growth team",
  "Ship onboarding redesign by Friday",
  "Send follow-up deck to investors",
  "Update the roadmap for next sprint",
  "Book venue for the offsite",
  "Fix the checkout bug before launch",
  "Loop legal in on the vendor contract",
  "Reply to the client's pricing question",
]

export const Hero = () => {

  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({x: e.clientX, y:e.clientY})
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
        }}/>

        <div className="max-w-7xl mx-auto text-center relative w-full">
          <div className="max-w-7xl mx-auto flex flex-col gap-2 lg:grid lg:grid-cols-2 text-center lg:text-left  sm:gap-8 lg:gap-12 items-center relative">
            <div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 sm:mb-6">
                <span className="block bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">MEETING NOTES</span>
                <span className="block">THAT WRITE</span>
                <span className="block">THEMSELVES</span>
              </h1>
               <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8">
                Join any call and get searchable notes, action items, and summaries automatically. No more scrambling to type while you talk.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12">
                <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-4xl font-semibold text-sm sm:text-base transition-all hover:scale-105 flex items-center justify-center space-x-2 cursor-pointer">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                </button>
                <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-4xl font-semibold text-sm sm:text-base transition-all hover:bg-white/10 flex items-center justify-center space-x-2 cursor-pointer">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white"/>
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
            <div className="relative order-2 w-full">
              <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-2xl border-white/10">
                <div className="bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-70 sm:h-87.5 lg:h-112.5 border border-white/5">
                  {/* IDE Header */}
                  <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                    <div className="flex justify-between items-center space-x-2">
                      <div className="flex justify-between items-center space-x-1 md:space-x-2">
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                      </div>
                       <span className="text-xs sm:text-sm text-gray-300">Recap</span>
                    </div>
                    <ChevronDown className="w-3 h-3 sm:h-4 text-gray-400" />
                  </div>
                  <div className="px-6 text-sm text-left py-3">
                    <p>Weekly sync - Product team</p>
                    <div>
                      {actionItems.map((items, key) => 
                      (
                        <div key={key} className="flex items-center space-x-2 bg-black/40 rounded-md px-3 py-2 my-2">
                          <Check className="w-4 h-4 text-blue-500 mr-2"/>
                          {items}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
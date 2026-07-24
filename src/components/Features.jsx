import { ChevronDown } from "lucide-react"

const features = [
  {
    title: "Live transcription",
    description: "Every word captured in real time, searchable the moment your call ends.",
    image: "/features/live.png",
    imagePosition: "left",
  },
  {
    title: "Auto action items",
    description: "Commitments made in the meeting turn into a task list automatically.",
    image: "/features/action.png",
    imagePosition: "right",
  },
  {
    title: "Smart summaries",
    description: "A two-line recap of any meeting, or a full breakdown by topic.",
    image: "/features/summary.png",
    imagePosition: "left",
  },
  {
    title: "Works with your tools",
    description: "Syncs to Slack, Notion, and your calendar automatically.",
    image: "/features/connect.png",
    imagePosition: "right",
  },
]

export const  Features = () => {
  return (
    <section id="features" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative bg-slate-900/50 border-t border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
            <span>Everything your team needs after</span>
            <br />
            <span className="bg-linear-to-b from-blue-400 t0-cyan-400 bg-clip-text text-transparent">a call</span>
          </h2>       
        </div>

        <div className="space-y-16 sm:spac-y-20 lg:space-y-32">
          {features.map((feature, key) => (
            <div key={key} className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}>
              {/* Code Section */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-xl transition-all duration-500"/>
                  {/* IDE Section */}
                  <div>
                    <div>
                      <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-2xl border-white/10">
                        <div className="bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden border border-white/5">
                          {/* IDE Header */}
                          <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                            <div className="flex justify-between items-center space-x-2">
                              <div className="flex justify-between items-center space-x-1 md:space-x-2">
                                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                              </div>
                              <span className="text-xs sm:text-sm text-gray-300">{feature.title}</span>
                            </div>
                            <ChevronDown className="w-3 h-3 sm:h-4 text-gray-400" />
                          </div>
                          <img src={feature.image} alt="" className="rounded-4xl p-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/* Text Section */}
                <div className="flex-1 w-full">
                  <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                    <h3 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">{feature.title}</h3>
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
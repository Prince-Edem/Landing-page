
const testimonials = [
  {
    name: "Amara Owusu",
    role: "Head of Product, Driftwork",
    image: "https://images.pexels.com/photos/3894377/pexels-photo-3894377.jpeg?_gl=1*1tlz89n*_ga*NTk3NDE4NzAzLjE3ODQ1NDA2MDk.*_ga_8JE65Q40S6*czE3ODQ4MTM0MjAkbzIkZzEkdDE3ODQ4MTM2MTgkajU5JGwwJGgw",
    content: "Recap cut my post-meeting admin time in half. I stopped taking notes and started actually listening."
  },
  {
    name: "Kwame Asante",
    role: "Co-founder, Cascade Labs",
    image: "https://images.pexels.com/photos/17362827/pexels-photo-17362827.jpeg",
    content: "I used to dread catching up after missing a call. Now I skim the summary and I'm caught up in two minutes."
  },
  {
    name: "Priya Nair",
    role: "Engineering Manager, Northfield",
    image: "https://images.pexels.com/photos/7581115/pexels-photo-7581115.jpeg",
    content: "Nothing falls through the cracks anymore. Every commitment made in a meeting shows up as a task automatically."
  }
]

export const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start md:items-center gap-8 sm:gap-12 lg:gap-16"> 
          {/* Left side - Header */}
          <div className="lg:w-1/2 w-full text-center lg:left-left">
            <h2 className="text-5xl font-black sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
              Teams that switched,{" "}
              <br />
              <span className="text-gray-600">STAYED</span>
            </h2>
            <p className="text-gray-400 text-xl sm:text-lg max-w-2xl mx-auto">
              Here's what changed for them.
            </p>       
          </div>
          <div>
            {/* Right side - Testimonials */}
            <div className="lg:w-1/2 w-full">
              <div className="space-y-6 sm:space-y-8">
                {testimonials.map((testimonial, key) => (
                  <div key={key} className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl md:w-2xl">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="grow">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <img src={testimonial.image} alt={testimonial.name} className="h-10 w-10 sm:w-12 sm:h-12 rounded-full object-cover"/>
                          <div>
                            <h4 className="font-semibold text-sm sm:text-base">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</p>
                          </div>
                        </div>                        
                        <p className="text-base sm:text-lg leading-relaxed mt-3 sm:mb-t">" {testimonial.content} "</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
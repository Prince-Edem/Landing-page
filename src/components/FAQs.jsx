import { Plus, Minus } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Does Recap work with Zoom, Google Meet and Teams?",
    answer: "Yes. Recap connects to your calendar and automatically joins meetings on Zoom, Google Meet, and Microsoft Teams with no manual invites needed.",
  },
  {
    question: "Can I see the transcript, not just the summary?",
    answer: "Every meeting gets a full searchable transcript alongside the summary and action items, so you can always go back to exactly what was said.",
  },
  {
    question: "Is my meeting data private?",
    answer: "Your transcripts and summaries are only visible to your workspace. We don't use your meeting content to train any models.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, there's no lock-in. You can cancel or downgrade your plan at any time from your billing settings.",
  },
]

export const FAQs = () => {

  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faqs" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative bg-zinc-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-7 sm:mb-11 lg:mb-15">
          <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-4 sm:mb-6">
            Frequently Asked{" "}
            <span className="text-gray-600">Questions</span>
          </h2>       
        </div>
        <div className="max-w-3xl space-y-3 mx-auto">
          {faqs.map((faq, key) => (
            <div 
              key={key} 
              className={`p-6 flex bg-white/5 rounded-2xl border border-white/10 cursor-pointer ${openIndex === key ? "items-start" : "items-center"}`} 
              onClick={() => toggleFaq(key)}
            >
              <div className={`flex-1 flex justify-between ${openIndex === key ? "items-start" : "items-center"} transition-transform active:scale-[0.98]`}>
                <div>
                  <div>
                    <h3 className="font-bold">
                    {faq.question}
                  </h3>
                  </div>
                  {openIndex === key && (
                    <p className="text-gray-400 pt-6">{faq.answer}</p>
                  )}
                </div>
                <div>
                  {openIndex === key ? (
                    <div className="bg-white text-black p-1 rounded-full cursor-pointer">
                      <Minus />
                    </div>
                    ) : (
                    
                    <div className="bg-[#0e0e14] p-1 rounded-full cursor-pointer">
                      <Plus />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
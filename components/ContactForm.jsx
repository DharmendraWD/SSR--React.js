import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
const [sending, setSending] = useState(false);
const [sent, setSent] = useState(false);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  setSending(true);
  
  setTimeout(() => {
      setSending(false);
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
  }, 2500); // fake delay

  setTimeout(() => {
    setSent(false);
  }, 5000);

};




  return (
 <section id="contact" className="py-24 px-6 relative bg-gradient-to-br from-blue-600 to-blue-800 dark:from-slate-900 dark:to-blue-950 transition-colors duration-500 overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        <div className=" text-white">
            <h2 className="text-4xl text-gray-800 md:text-5xl font-bold mb-6 leading-tight">Ready to Power Your Vision?</h2>
            <p className=" mb-12 text-gray-800 text-lg max-w-md">
                Whether you're interested in partnership opportunities, career prospects, or learning more about our projects, we'd love to hear from you.
            </p>

            <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-xl group-hover:bg-white group-hover:text-blue-600 text-gray-800 transition-all">
                       <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-widest text-gray-800">Email us</p>
                        <p className="font-semibold text-gray-800 text-lg">Malunhydro@gmail.com</p>
                    </div>
                </div>

                <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-xl group-hover:bg-white group-hover:text-blue-600 text-gray-800 transition-all">
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-widest text-gray-800">Call us</p>
                        <p className="font-semibold text-gray-800 text-lg">014102710</p>
                    </div>
                </div>

                <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-xl group-hover:bg-white group-hover:text-blue-600 text-gray-800 transition-all">
                        <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-widest text-gray-800">Address</p>
                        <p className="font-semibold text-gray-800 text-lg">Durga bhawan, Anamnagar, Kathmandu</p>
                    </div>
                </div>
            </div>

            <button className="mt-12 px-8 py-4 bg-white text-blue-600 rounded-full font-bold flex items-center gap-3 hover:gap-5 transition-all shadow-xl">
                Get In Touch <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>

        <div className=" delay-200">
            <form id="contactForm" onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/20 shadow-2xl relative overflow-hidden">
                <h3 className="text-2xl font-bold text-white mb-8">Send us a Message</h3>
                
                <div className="space-y-5">
                    <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-pink/20 text-white placeholder:text-gray-800 text-gray-800 focus:outline-none focus:bg-white/20 focus:border-white transition-all"/>
                    
                    <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-pink/20 text-white placeholder:text-gray-800 text-gray-800 focus:outline-none focus:bg-white/20 focus:border-white transition-all"/>
                    
                    <textarea placeholder="Your Message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} required className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-pink/20 text-white placeholder:text-gray-800 text-gray-800 focus:outline-none focus:bg-white/20 focus:border-white transition-all resize-none"></textarea>
                    
                 <button
  type="submit"
  disabled={sending}
  className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-3
  ${sending ? "bg-blue-400 text-white" : "bg-white text-blue-600 hover:bg-blue-50"}
  `}
>
  {sending ? (
    <>
      <span className="animate-pulse">Sending...</span>
    </>
  ) : sent ? (
    "Sent ✔"
  ) : (
    <>
      Send Message
      <FontAwesomeIcon icon={faPaperPlane} />
    </>
  )}
</button>
                </div>
            </form>
        </div>
    </div>

    {sending && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <FontAwesomeIcon
      icon={faPaperPlane}
      className="text-white text-4xl animate-fly"
      />
  </div>

    )}
{sent && (
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-600/90 backdrop-blur-xl text-white text-center animate-fadeIn">
    <h2 className="text-3xl font-bold mb-4">🎉 Message Sent!</h2>
    <p className="text-lg">We’ll catch you soon.</p>
  </div>
)}
</section>
  )
}

export default ContactForm
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please agree to the Privacy Policy.");
      return;
    }
    // Simulate form submission
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="bg-[#FBF9F6] text-[#2C3E2D]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-16 pb-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Hero Left Content */}
          <div className="w-full md:w-[48%] flex flex-col items-start z-10">
            <span className="text-[12px] font-bold text-[#55624C] uppercase tracking-widest leading-none mb-6">
              Contact Us
            </span>
            
            <h1 className="font-serif text-4xl md:text-[48px] leading-[1.15] text-[#2C3E2D] font-normal tracking-tight mb-6">
              We&apos;re here to <br />
              help you preserve <br />
              <span className="text-[#55624C]">what matters most.</span>
            </h1>
            <div className="w-12 h-[1.5px] bg-[#55624C]/60 mb-8"></div>
            
            <p className="text-[14px] text-[#4A5546] font-medium leading-relaxed mb-8">
              Have questions about our services, packages, or how to get started? We&apos;d love to hear from you. Our team is here to guide you every step of the way.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#E8E1DA] flex items-center justify-center text-[#55624C] flex-shrink-0 bg-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#2C3E2D]">Personal Support</h4>
                  <p className="text-[12px] text-[#5F6A5B] font-bold mt-0.5">Real people. Real care.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#E8E1DA] flex items-center justify-center text-[#55624C] flex-shrink-0 bg-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#2C3E2D]">Your Story is Safe</h4>
                  <p className="text-[12px] text-[#5F6A5B] font-bold mt-0.5">Privacy and security are our promise.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Right Image with left-fade effect */}
          <div className="w-full md:w-[50%] h-[350px] md:h-[480px] relative rounded-[8px] overflow-hidden border border-[#E8E1DA]">
            <Image
              src="/contact_hero.png"
              alt="Cozy dresser with candle and vintage photo"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Smooth gradient fade to blend the image leftward on larger screens */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FBF9F6] via-transparent to-transparent opacity-80 pointer-events-none hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Main 3-Column Content Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Let's Start a Conversation */}
          <div className="flex flex-col pr-0 md:pr-4">
            <h2 className="font-serif text-[24px] text-[#2C3E2D] font-medium mb-3">
              Let&apos;s Start a Conversation
            </h2>
            <p className="text-[13px] text-[#4A5546] font-bold leading-relaxed mb-8">
              Whether you&apos;re ready to begin or just have a few questions, we&apos;re here to help. Reach out to us through any of the options below.
            </p>
            
            {/* Contact Info List */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full border border-[#E8E1DA] flex items-center justify-center text-[#55624C] flex-shrink-0 bg-[#F6F4F1]">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#7E8B77]">Email Us</h5>
                  <a href="mailto:hello@evertold.com" className="text-[13px] text-[#55624C] font-bold hover:text-[#2C3E2D] block mt-0.5">
                    hello@evertold.com
                  </a>
                  <p className="text-[11px] text-[#7E8B77] font-bold mt-0.5">We typically reply within 1 business day.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full border border-[#E8E1DA] flex items-center justify-center text-[#55624C] flex-shrink-0 bg-[#F6F4F1]">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.478-5.123-3.777-6.581-6.6l1.293-.97c.361-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#7E8B77]">Call Us</h5>
                  <a href="tel:+498912345678" className="text-[13px] text-[#55624C] font-bold hover:text-[#2C3E2D] block mt-0.5">
                    +49 89 1234 5678
                  </a>
                  <p className="text-[11px] text-[#7E8B77] font-bold mt-0.5">Mon – Fri, 9:00 AM – 6:00 PM (CET)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full border border-[#E8E1DA] flex items-center justify-center text-[#55624C] flex-shrink-0 bg-[#F6F4F1]">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#7E8B77]">Visit Us</h5>
                  <span className="text-[13px] text-[#55624C] font-bold block mt-0.5">
                    Munich, Germany
                  </span>
                  <p className="text-[11px] text-[#7E8B77] font-bold mt-0.5">By appointment only.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full border border-[#E8E1DA] flex items-center justify-center text-[#55624C] flex-shrink-0 bg-[#F6F4F1]">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#7E8B77]">Support Hours</h5>
                  <span className="text-[13px] text-[#55624C] font-bold block mt-0.5">
                    Mon – Fri, 9:00 AM – 6:00 PM (CET)
                  </span>
                  <p className="text-[11px] text-[#7E8B77] font-bold mt-0.5">We&apos;re closed on weekends and public holidays.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Column 2: Europe / Serve Card */}
          <div className="bg-[#F6F4F1] border border-[#E8E1DA] rounded-[8px] p-6 flex flex-col justify-between items-center text-center">
            {/* Top Leaf Icon & Content */}
            <div className="w-full flex flex-col items-center">
              <svg className="w-7 h-7 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M12 3a9 9 0 110 18 9 9 0 010-18z" />
              </svg>
              <h3 className="font-serif text-[20px] text-[#2C3E2D] font-medium mt-4 mb-2.5">
                We serve families <br />
                across Europe <br />
                and beyond.
              </h3>
              <div className="w-8 h-[1px] bg-[#E8E1DA] my-1"></div>
              <p className="text-[12px] text-[#4A5546] font-bold leading-relaxed px-2 mt-2">
                No matter where you are, you can create a legacy that transcends generations.
              </p>
            </div>
            
            {/* Dotted Map Graphic (SVG) with Location Pins */}
            <div className="w-full h-[180px] my-6 relative flex items-center justify-center overflow-hidden">
              <svg className="w-full h-full text-[#D5CDCE]" viewBox="0 0 200 100" fill="currentColor" opacity="0.4">
                {/* World map representation using simple styled dots */}
                <circle cx="20" cy="30" r="1.5" />
                <circle cx="30" cy="25" r="1.5" />
                <circle cx="40" cy="35" r="1.5" />
                <circle cx="35" cy="45" r="1.5" />
                <circle cx="45" cy="55" r="1.5" />
                
                {/* Europe Dot Area */}
                <circle cx="95" cy="22" r="1.5" />
                <circle cx="100" cy="20" r="1.5" />
                <circle cx="105" cy="25" r="1.5" />
                <circle cx="102" cy="30" r="1.5" />
                <circle cx="108" cy="35" r="1.5" />
                <circle cx="112" cy="22" r="1.5" />
                <circle cx="115" cy="28" r="1.5" />
                <circle cx="120" cy="32" r="1.5" />
                <circle cx="102" cy="18" r="1.5" />
                <circle cx="98" cy="26" r="1.5" />
                <circle cx="92" cy="28" r="1.5" />
                
                {/* Asia/Other Dot Area */}
                <circle cx="150" cy="25" r="1.5" />
                <circle cx="160" cy="30" r="1.5" />
                <circle cx="155" cy="40" r="1.5" />
                <circle cx="165" cy="45" r="1.5" />
                <circle cx="170" cy="35" r="1.5" />
                <circle cx="175" cy="50" r="1.5" />
                
                {/* Africa */}
                <circle cx="100" cy="55" r="1.5" />
                <circle cx="105" cy="65" r="1.5" />
                <circle cx="110" cy="60" r="1.5" />
                <circle cx="115" cy="70" r="1.5" />
              </svg>
              
              {/* Green Location Pins overlays */}
              <div className="absolute top-[22%] left-[48%] animate-bounce">
                <svg className="w-4 h-4 text-[#55624C]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="absolute top-[32%] left-[51%] animate-pulse">
                <svg className="w-3.5 h-3.5 text-[#8C9885]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="absolute top-[28%] left-[45%]">
                <svg className="w-3 h-3 text-[#55624C]/80" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="absolute top-[45%] left-[53%]">
                <svg className="w-3.5 h-3.5 text-[#55624C]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {/* Bottom Testimonial Quote */}
            <div className="w-full bg-[#EBE4DD]/30 border border-[#EBE4DD] rounded-[6px] p-4 relative">
              <span className="text-[28px] font-serif text-[#55624C] opacity-40 absolute top-1 left-3 select-none leading-none">“</span>
              <p className="text-[12px] text-[#2C3E2D] font-bold italic leading-relaxed pt-2 px-3">
                The team was so kind and patient. They made the entire process simple and incredibly meaningful.
              </p>
              <span className="text-[11px] font-bold text-[#55624C] block mt-2">
                — Anna Müller, Client
              </span>
            </div>
          </div>
          
          {/* Column 3: Send Us a Message Form Card */}
          <div className="bg-white border border-[#E8E1DA] rounded-[8px] p-6 md:p-7 shadow-sm">
            <h2 className="font-serif text-[24px] text-[#2C3E2D] font-medium mb-1">
              Send Us a Message
            </h2>
            <p className="text-[12px] text-[#5F6A5B] font-bold mb-6">
              Fill out the form below and we&apos;ll get back to you shortly.
            </p>
            
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                <div className="w-12 h-12 bg-[#F6F4F1] border border-[#E8E1DA] text-[#55624C] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h4 className="font-serif text-lg font-medium text-[#2C3E2D] mb-1">Message Sent!</h4>
                <p className="text-[12px] text-[#4A5546] font-bold">
                  Thank you, {formData.name}. We will get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[12px] text-[#55624C] font-bold border-b border-[#55624C]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="w-full bg-[#FBF9F6]/40 border border-[#D5CDCE] rounded-[3px] px-3.5 py-2.5 text-[13px] font-medium text-[#2C3E2D] placeholder-[#7E8B77] focus:outline-none focus:border-[#55624C] focus:bg-white transition-all"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="w-full bg-[#FBF9F6]/40 border border-[#D5CDCE] rounded-[3px] px-3.5 py-2.5 text-[13px] font-medium text-[#2C3E2D] placeholder-[#7E8B77] focus:outline-none focus:border-[#55624C] focus:bg-white transition-all"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number (Optional)"
                    className="w-full bg-[#FBF9F6]/40 border border-[#D5CDCE] rounded-[3px] px-3.5 py-2.5 text-[13px] font-medium text-[#2C3E2D] placeholder-[#7E8B77] focus:outline-none focus:border-[#55624C] focus:bg-white transition-all"
                  />
                </div>
                
                <div className="relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#FBF9F6]/40 border border-[#D5CDCE] rounded-[3px] px-3.5 py-2.5 text-[13px] font-bold text-[#2C3E2D] appearance-none focus:outline-none focus:border-[#55624C] focus:bg-white transition-all"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Pricing & Packages">Pricing & Packages</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Feedback">Send Feedback</option>
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#7E8B77]">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
                
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="3.5"
                    placeholder="Message"
                    className="w-full bg-[#FBF9F6]/40 border border-[#D5CDCE] rounded-[3px] px-3.5 py-2.5 text-[13px] font-medium text-[#2C3E2D] placeholder-[#7E8B77] focus:outline-none focus:border-[#55624C] focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>
                
                <div className="flex items-start gap-2.5 mt-1">
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 rounded border-[#D5CDCE] text-[#55624C] focus:ring-[#55624C] mt-0.5 cursor-pointer"
                  />
                  <label htmlFor="agree" className="text-[11px] text-[#5F6A5B] font-bold cursor-pointer select-none leading-relaxed">
                    I agree to the Privacy Policy.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="bg-[#55624C] hover:bg-[#4A5546] text-white font-bold text-[13px] py-3 rounded-[3px] transition-colors flex items-center justify-center gap-2 mt-2 shadow-sm"
                >
                  Send Message
                  <svg className="w-3.5 h-3.5 rotate-45 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
                
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#7E8B77] mt-2 font-bold">
                  <svg className="w-3.5 h-3.5 text-[#7E8B77]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  Your information is safe with us.
                </div>
              </form>
            )}
          </div>
          
        </div>
      </section>

      {/* Reused Bottom CTA Section */}
      <section className="bg-white pt-2 pb-20 px-6">
        <div className="max-w-5xl mx-auto bg-[#F6F4F1] rounded-[8px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#E8E1DA] overflow-hidden relative">
          {/* Left background image context (coffee and notebook detail from pricing_hero_desk) */}
          <div className="absolute left-0 top-0 bottom-0 w-1/3 hidden md:block z-0 pointer-events-none opacity-45">
            <Image
              src="/pricing_hero_desk.png"
              alt="Decorative notebook and cup"
              fill
              className="object-cover object-left"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#F6F4F1]"></div>
          </div>
          
          <div className="flex items-center gap-6 relative z-10 md:pl-28">
            <div>
              <h3 className="text-2xl md:text-[28px] font-serif font-medium text-[#2C3E2D] mb-2 leading-tight">
                Ready to create a <br className="hidden md:block" />
                legacy that lasts forever?
              </h3>
              <p className="text-[14px] font-bold text-[#5F6A5B]">
                It only takes a few minutes to begin your journey.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 md:mr-12 lg:mr-24 relative z-10 flex-shrink-0">
            <Link
              href="/pricing"
              className="bg-[#55624C] text-white px-6 py-3.5 rounded-[3px] text-[13px] font-bold flex items-center gap-2 hover:bg-[#4A5546] transition-colors whitespace-nowrap"
            >
              Begin Your Legacy
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/pricing"
              className="text-[13px] font-bold text-[#55624C] hover:text-[#2C3E2D] transition-colors whitespace-nowrap"
            >
              View Pricing Plans →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Mail, User, Phone, MessageSquare, Check, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FadeIn from "@/components/ui/FadeIn";

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const services = [
    "Portrait Sessions",
    "Wedding Photography",
    "Travel & Adventure",
    "Event Coverage",
    "Fine Art Prints"
  ];

  const timeSlots = [
    "9:00 AM",
    "11:00 AM",
    "1:00 PM",
    "3:00 PM",
    "5:00 PM"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center px-6"
        >
          <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center bg-[#B08D57]/10 rounded-full">
            <Check className="w-10 h-10 text-[#B08D57]" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-4">
            Inquiry Received
          </h1>
          <p className="text-[#3D2B1F]/70 max-w-md mx-auto mb-8">
            Thank you for reaching out. I'll review your request and 
            get back to you within 48 hours to discuss the details.
          </p>
          <p className="text-[#B08D57] text-sm tracking-widest uppercase">
            Let's make something beautiful
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <FadeIn>
            <p className="text-[#B08D57] text-sm tracking-[0.3em] uppercase mb-4">
              Let's Work Together
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a] mb-6">
              Book a<br />Session
            </h1>
            <p className="text-[#3D2B1F]/70 leading-relaxed max-w-md">
              Tell me about your project and preferred dates. I'll get back 
              to you within 48 hours to confirm availability and next steps.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="lg:pl-12 space-y-8">
              <div>
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">Based Out Of</h3>
                <p className="text-[#3D2B1F]/70">
                  Available worldwide<br />
                  Currently in Boston, MA, USA
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">Availability</h3>
                <p className="text-[#3D2B1F]/70">
                  Monday – Saturday<br />
                  By appointment
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">Contact</h3>
                <p className="text-[#3D2B1F]/70">
                  theshutternomad@outlook.com<br />
                  @the.shutternomad
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Image */}
          <FadeIn direction="left" className="hidden lg:block">
            <div className="aspect-[3/4] overflow-hidden sticky top-32">
              <img
                src="https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=800&q=80"
                alt="On location"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="right">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl text-[#1a1a1a] pb-4 border-b border-[#e8e5df]">
                  Your Details
                </h3>
                
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B08D57]" />
                  <Input
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="pl-12 py-6 bg-white border-[#e8e5df] focus:border-[#B08D57] rounded-none"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B08D57]" />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="pl-12 py-6 bg-white border-[#e8e5df] focus:border-[#B08D57] rounded-none"
                    required
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B08D57]" />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="pl-12 py-6 bg-white border-[#e8e5df] focus:border-[#B08D57] rounded-none"
                    required
                  />
                </div>
              </div>

              {/* Appointment */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl text-[#1a1a1a] pb-4 border-b border-[#e8e5df]">
                  Session Details
                </h3>

                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({...formData, service: value})}
                >
                  <SelectTrigger className="py-6 bg-white border-[#e8e5df] focus:border-[#B08D57] rounded-none">
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B08D57]" />
                    <Input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                      className="pl-12 py-6 bg-white border-[#e8e5df] focus:border-[#B08D57] rounded-none"
                      required
                    />
                  </div>

                  <Select
                    value={formData.preferredTime}
                    onValueChange={(value) => setFormData({...formData, preferredTime: value})}
                  >
                    <SelectTrigger className="py-6 bg-white border-[#e8e5df] focus:border-[#B08D57] rounded-none">
                      <Clock className="w-5 h-5 text-[#B08D57] mr-2" />
                      <SelectValue placeholder="Time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl text-[#1a1a1a] pb-4 border-b border-[#e8e5df]">
                  Tell Me About It
                </h3>

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#B08D57]" />
                  <Textarea
                    placeholder="Share your vision, location, vibe, or any details about the shoot..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="pl-12 pt-4 min-h-[150px] bg-white border-[#e8e5df] focus:border-[#B08D57] rounded-none resize-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full py-6 bg-[#1a1a1a] text-white text-sm tracking-widest uppercase hover:bg-[#3D2B1F] transition-colors rounded-none"
              >
                Send Inquiry
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>

              <p className="text-[#3D2B1F]/50 text-xs text-center">
                By submitting this form, you agree to my booking policies. 
                A 30% retainer will be required to confirm your session.
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
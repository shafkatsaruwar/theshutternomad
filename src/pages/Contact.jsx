import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, MapPin, User, MessageSquare, Check, ArrowRight, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/FadeIn";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

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
            Message Received
          </h1>
          <p className="text-[#3D2B1F]/70 max-w-md mx-auto mb-8">
            Thank you for reaching out. I'll get back to you as soon as I can.
          </p>
          <p className="text-[#B08D57] text-sm tracking-widest uppercase">
            Talk soon
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <FadeIn>
          <p className="text-[#B08D57] text-sm tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a] mb-6">
            Contact
          </h1>
          <p className="text-[#3D2B1F]/70 leading-relaxed max-w-md">
            Have a question, a collaboration in mind, or just want to say hello?
            I'd love to hear from you. Reach out through any of the channels below.
          </p>
        </FadeIn>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <FadeIn direction="left">
            <div className="space-y-10">
              <a
                href="mailto:theshutternomad@outlook.com"
                className="flex items-start gap-5 group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-[#B08D57]/30 rounded-full shrink-0">
                  <Mail className="w-5 h-5 text-[#B08D57]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#1a1a1a] mb-1">Email</h3>
                  <p className="text-[#3D2B1F]/70 group-hover:text-[#B08D57] transition-colors">
                    theshutternomad@outlook.com
                  </p>
                </div>
              </a>

              <a
                href="https://instagram.com/the.shutternomad"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-5 group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-[#B08D57]/30 rounded-full shrink-0">
                  <Instagram className="w-5 h-5 text-[#B08D57]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#1a1a1a] mb-1">Instagram</h3>
                  <p className="text-[#3D2B1F]/70 group-hover:text-[#B08D57] transition-colors">
                    @the.shutternomad
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex items-center justify-center border border-[#B08D57]/30 rounded-full shrink-0">
                  <MapPin className="w-5 h-5 text-[#B08D57]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#1a1a1a] mb-1">Location</h3>
                  <p className="text-[#3D2B1F]/70">
                    Boston, MA, USA
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B08D57]" />
                <Input
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-12 py-6 bg-white border-[#e8e5df] focus:border-[#B08D57] rounded-none"
                  required
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#B08D57]" />
                <Textarea
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="pl-12 pt-4 min-h-[150px] bg-white border-[#e8e5df] focus:border-[#B08D57] rounded-none resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full py-6 bg-[#1a1a1a] text-white text-sm tracking-widest uppercase hover:bg-[#3D2B1F] transition-colors rounded-none"
              >
                Send Message
                <Send className="w-4 h-4 ml-3" />
              </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
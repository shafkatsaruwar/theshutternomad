import React from "react";
import { Calendar, Clock, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/FadeIn";

export default function AvailabilitySlots() {
  return (
    <FadeIn>
      <div className="bg-white border border-[#e8e5df] p-8 lg:p-10">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h3 className="font-serif text-2xl text-[#1a1a1a] mb-3">
              Booking by inquiry
            </h3>
            <p className="text-[#3D2B1F]/65 leading-relaxed max-w-2xl">
              Live scheduling is offline while this site moves fully to GitHub
              and Vercel. Send a note with your ideal date, location, and the
              kind of session you want, and I will reply with availability.
            </p>
            <div className="flex flex-wrap gap-5 mt-6 text-sm text-[#3D2B1F]/70">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#B08D57]" />
                Monday - Saturday
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#B08D57]" />
                By appointment
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3">
            <a href="mailto:theshutternomad@outlook.com?subject=Session%20Inquiry">
              <Button className="w-full bg-[#1a1a1a] text-white rounded-none hover:bg-[#3D2B1F]">
                <Mail className="w-4 h-4 mr-2" />
                Email Inquiry
              </Button>
            </a>
            <a href="https://instagram.com/the.shutternomad" target="_blank" rel="noreferrer">
              <Button
                variant="outline"
                className="w-full border-[#1a1a1a] text-[#1a1a1a] rounded-none hover:bg-[#1a1a1a] hover:text-white"
              >
                <Instagram className="w-4 h-4 mr-2" />
                DM on Instagram
              </Button>
            </a>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

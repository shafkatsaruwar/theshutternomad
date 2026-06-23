import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Loader2, ExternalLink, CalendarOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { base44 } from "@/api/base44Client";
import FadeIn from "@/components/ui/FadeIn";

function formatDay(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

function formatTime(iso) {
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function AvailabilitySlots() {
  const [loading, setLoading] = useState(true);
  const [eventTypes, setEventTypes] = useState([]);
  const [error, setError] = useState(null);

  const fetchAvailability = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await base44.functions.invoke("get-calendly-availability", {});
      setEventTypes(res.data?.eventTypes || []);
    } catch (err) {
      setError("Unable to load availability right now. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAvailability();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 text-[#B08D57] animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-[#3D2B1F]/60 text-sm">{error}</p>
        <Button
          onClick={fetchAvailability}
          variant="outline"
          className="mt-6 border-[#B08D57]/40 text-[#1a1a1a] rounded-none"
        >
          Try Again
        </Button>
      </div>
    );
  }

  if (eventTypes.length === 0) {
    return (
      <div className="text-center py-16">
        <CalendarOff className="w-8 h-8 text-[#B08D57]/50 mx-auto mb-4" />
        <p className="text-[#3D2B1F]/60 text-sm">
          No session types are configured yet. Check back soon.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {eventTypes.map((et, idx) => {
        const slotsByDay = {};
        (et.slots || []).forEach((slot) => {
          const day = formatDay(slot.start_time);
          if (!slotsByDay[day]) slotsByDay[day] = [];
          slotsByDay[day].push(slot);
        });
        const days = Object.keys(slotsByDay);

        return (
          <FadeIn key={idx} delay={idx * 0.1}>
            <div className="bg-white border border-[#e8e5df] p-8 lg:p-10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-serif text-2xl text-[#1a1a1a] mb-1">{et.name}</h3>
                  <p className="flex items-center gap-2 text-[#B08D57] text-sm tracking-wider">
                    <Clock className="w-4 h-4" />
                    {et.duration} minutes
                  </p>
                </div>
                <a href={et.scheduling_url} target="_blank" rel="noreferrer">
                  <Button
                    variant="outline"
                    className="border-[#1a1a1a] text-[#1a1a1a] rounded-none hover:bg-[#1a1a1a] hover:text-white"
                  >
                    Book on Calendly
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>

              {!et.active ? (
                <p className="text-[#3D2B1F]/50 text-sm italic">
                  This session type is currently unavailable for booking.
                </p>
              ) : days.length === 0 ? (
                <p className="text-[#3D2B1F]/50 text-sm italic">
                  No open slots in the next 7 days. Use the link above to check
                  further out or join the waitlist.
                </p>
              ) : (
                <div className="space-y-6">
                  {days.map((day) => (
                    <div key={day}>
                      <p className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#3D2B1F]/50 mb-3">
                        <Calendar className="w-3.5 h-3.5" />
                        {day}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {slotsByDay[day].map((slot, i) => (
                          <a
                            key={i}
                            href={et.scheduling_url}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2.5 text-sm border border-[#e8e5df] hover:border-[#B08D57] hover:bg-[#B08D57]/5 text-[#1a1a1a] transition-colors"
                          >
                            {formatTime(slot.start_time)}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
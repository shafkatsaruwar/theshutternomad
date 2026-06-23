import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Journal() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 lg:px-12 mb-16">
        <FadeIn>
          <p className="text-[#B08D57] text-sm tracking-[0.3em] uppercase mb-4">
            Field Notes
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] mb-6">
            The Traveler's Journal
          </h1>
        </FadeIn>
      </div>

      {/* Article */}
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <article className="space-y-6 text-[#3D2B1F]/80 leading-relaxed text-lg">
            <p>
              The Shutter Nomad is a photography portfolio built around a simple idea:
              that the most honest photographs are made by someone who is genuinely
              curious about the world. It is a home for the images I collect while
              traveling — quiet streets at dawn, weathered architecture, the last
              light over a New England coastline, and the strangers who become
              characters in a frame for just a fraction of a second.
            </p>
            <p>
              I shoot on a Canon EOS RP, a modest full-frame camera that forces me to
              slow down and be deliberate. With a couple of prime lenses — an 85mm for
              portraits and a wider optic for landscapes — I lean on light, timing, and
              presence rather than an overstuffed bag. Travel photography, for me, is
              less about chasing the most dramatic vista and more about noticing the
              small, true details that tell you what a place actually feels like.
            </p>
            <p>
              Every photograph here began as a walk. Some at five in the morning, when
              the light is soft and the streets are empty. Some in the middle of a
              crowded market, where the only plan was to keep my eyes open. I have
              learned that the best frames are rarely the ones I set out to make. They
              are the ones that appeared when I was paying attention to something else
              entirely — a reflection, a gesture, the way dust hung in a doorway.
            </p>
            <p>
              This journal is where I share not just the finished images, but the
              thinking behind them: where a frame was made, what the light was doing,
              and what I was feeling in that moment. My hope is that it helps other
              hobbyists and travelers see their own everyday surroundings a little more
              carefully. You do not need professional gear or a passport full of stamps
              to make meaningful photographs. You need patience, a willingness to wake
              up early, and the honesty to photograph what moves you rather than what
              you think will impress.
            </p>
            <p>
              If a frame on this site makes you pause, or makes you miss a place you
              have never been, then it has done its job. Thank you for taking the time
              to look.
            </p>
          </article>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div className="mt-16 pt-10 border-t border-[#e8e5df] text-center">
            <p className="text-[#3D2B1F]/70 mb-8">
              Want to see the images these notes are built around?
            </p>
            <Link
              to={createPageUrl("Gallery")}
              className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white px-10 py-5 text-sm tracking-widest uppercase hover:bg-[#3D2B1F] transition-colors"
            >
              Explore the Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
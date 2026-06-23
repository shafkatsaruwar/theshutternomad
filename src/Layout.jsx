import React from "react";
import NavBar from "@/components/navigation/NavBar";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Instagram, Mail, MapPin } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500&display=swap');
        
        :root {
          --color-ivory: #F5F3EF;
          --color-charcoal: #1a1a1a;
          --color-stone: #9C8B7A;
          --color-amber: #B08D57;
          --color-espresso: #3D2B1F;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          background-color: var(--color-ivory);
          color: var(--color-charcoal);
        }
        
        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }
        
        ::selection {
          background-color: var(--color-amber);
          color: var(--color-ivory);
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: var(--color-ivory);
        }
        ::-webkit-scrollbar-thumb {
          background: var(--color-stone);
          border-radius: 4px;
        }
      `}</style>

      <NavBar currentPage={currentPageName} />

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white/80 py-16 mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-serif text-3xl text-white mb-4">The Shutter Nomad</h3>
              <p className="text-sm leading-relaxed text-white/60">
                Visual storytelling from the road. Chasing light, 
                capturing moments, and sharing the journey one frame at a time.
              </p>
            </div>
            
            <div>
              <h4 className="text-xs tracking-widest uppercase mb-4 text-white/40">Navigate</h4>
              <div className="flex flex-col gap-3">
                {["Home", "Gallery", "Services", "About", "Contact", "Journal", "Booking"].map((page) => (
                  <Link
                    key={page}
                    to={createPageUrl(page)}
                    className="text-sm hover:text-[#B08D57] transition-colors"
                  >
                    {page}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xs tracking-widest uppercase mb-4 text-white/40">Connect</h4>
              <a
                href="https://instagram.com/the.shutternomad"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-[#B08D57] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @the.shutternomad
              </a>
              <a
                href="mailto:theshutternomad@outlook.com"
                className="flex items-center gap-2 text-sm hover:text-[#B08D57] transition-colors mt-4"
              >
                <Mail className="w-4 h-4" />
                theshutternomad@outlook.com
              </a>
              <p className="flex items-center gap-2 text-sm mt-4 text-white/60">
                <MapPin className="w-4 h-4" />
                Currently: Boston, MA, USA
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">
              © 2026 The Shutter Nomad. All photographs are protected by copyright.
            </p>
            <p className="text-xs text-[#B08D57] tracking-wider">
              MADE WITH LIGHT &amp; WANDERLUST
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
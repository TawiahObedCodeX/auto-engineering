import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin,

  X              // This is the official "X" icon (replaces old Twitter)
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-screen-2xl mx-auto px-6 grid md:grid-cols-12 gap-12">
        {/* Brand */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-secondary rounded-2xl flex items-center justify-center text-white font-heading text-3xl">
              ⚡
            </div>
            <span className="font-heading text-3xl tracking-tighter">VoltEdge</span>
          </div>
          <p className="text-text-light max-w-xs">
            Professional auto electrical engineering in Accra, Ghana.<br />
            All makes • All models • Precision diagnostics.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
            </a>
            
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
            </a>

            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="X (formerly Twitter)"
            >
              <X className="w-6 h-6 hover:text-accent transition-colors" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2">
          <h4 className="font-semibold text-lg mb-6">Navigate</h4>
          <div className="flex flex-col gap-3 text-text-light">
            <Link href="#about">About</Link>
            <Link href="#tools">Tools &amp; Machines</Link>
            <Link href="#cars">Cars We Fix</Link>
            <Link href="#booking">Book Now</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-5">
          <h4 className="font-semibold text-lg mb-6">Get in Touch</h4>
          <div className="space-y-6">
            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-accent mt-1" />
              <div>
                <p className="text-text-light">+233 24 123 4567</p>
                <p className="text-xs text-text-light">Mon–Fri 8am–6pm</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-accent mt-1" />
              <div>
                <p className="text-text-light">info@voltedge.com.gh</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-accent mt-1" />
              <div>
                <p className="text-text-light">Plot 45, Spintex Road, Accra, Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-xs text-text-light">
        © {new Date().getFullYear()} VoltEdge Auto Electrical Engineering. All Rights Reserved.
      </div>
    </footer>
  );
}
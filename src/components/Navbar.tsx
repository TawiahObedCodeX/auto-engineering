"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import EagleLogo from "./Logo";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "ECU Cloning", href: "/services/ecu" },
  { name: "Harness", href: "/services/harness" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[100] bg-brand-navy/90 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* LOGO PLACEMENT */}
        <Link href="/">
          <EagleLogo />
        </Link>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-brand-blue transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-blue transition-all group-hover:w-full" />
            </Link>
          ))}
          
          {/* Action Button */}
          <a href="tel:0244887773" className="group relative px-8 py-3 bg-brand-blue overflow-hidden rounded-sm">
            <div className="absolute inset-0 bg-brand-yellow translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative z-10 font-heading font-black italic text-brand-navy text-xs uppercase tracking-widest">
              Book_Diagnostic
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-brand-blue p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <BiX size={35} /> : <BiMenuAltRight size={35} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-navy border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-10 gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-heading font-black italic uppercase text-white hover:text-brand-blue transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:0244887773" className="text-brand-yellow font-mono text-sm tracking-widest uppercase py-4 border-t border-white/10">
                Call Emergency: 0244887773
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
"use client";
import { BiPhoneCall, BiLogoWhatsapp, BiMap, BiShield, BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";
import Link from "next/link";
import EagleLogo from "./Logo";

export default function Footer() {
  const phone = "0244887773";
  const whatsappLink = `https://wa.me/${phone.replace(/\s/g, "")}`;

  return (
    <footer className="bg-[#020617] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Visual Glitch/Detail Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          
          {/* Column 1: Brand & Manifesto */}
          <div className="lg:col-span-4 space-y-8">
            <EagleLogo />
            <p className="text-slate-500 font-mono text-xs leading-relaxed uppercase tracking-[0.2em] max-w-sm">
              We fix complex issues on automobile vehicles. The health of your car is our concern. OEM diagnostic standards only.
            </p>
          </div>

          {/* Column 2: Quick Links (Including About) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-brand-yellow text-sm italic mb-8 uppercase tracking-widest underline decoration-brand-blue decoration-2 underline-offset-8">
              System_Links
            </h4>
            <div className="grid gap-4">
              {["About", "Services", "ECU Cloning", "Harness Restore", "Contact"].map((item) => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="group flex items-center gap-2 text-[10px] font-mono text-slate-400 hover:text-white transition-colors uppercase tracking-[0.3em]"
                >
                  <BiChevronRight className="text-brand-blue opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Modules (Massive & Catchy) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.a 
                  href={`tel:${phone}`}
                  whileHover={{ y: -5, borderColor: "var(--color-brand-blue)" }}
                  className="h-32 border border-white/10 bg-brand-navy/40 flex flex-col items-center justify-center group rounded-sm"
                >
                  <BiPhoneCall size={28} className="text-brand-blue group-hover:animate-pulse mb-2" />
                  <span className="font-heading font-black italic text-lg text-white">{phone}</span>
                  <span className="text-[8px] font-mono tracking-[0.4em] text-slate-600">VOICE_PRIORITY</span>
                </motion.a>

                <motion.a 
                  href={whatsappLink}
                  target="_blank"
                  whileHover={{ y: -5, borderColor: "#22c55e" }}
                  className="h-32 border border-white/10 bg-brand-navy/40 flex flex-col items-center justify-center group rounded-sm"
                >
                  <BiLogoWhatsapp size={28} className="text-green-500 mb-2" />
                  <span className="font-heading font-black italic text-lg text-white">WHATSAPP</span>
                  <span className="text-[8px] font-mono tracking-[0.4em] text-slate-600">DATA_CHAT_ACTIVE</span>
                </motion.a>
             </div>
             
             {/* Diagnostic Lab Status */}
             <div className="p-6 bg-brand-slate/10 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="size-2 bg-brand-blue rounded-full animate-ping" />
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Lab_Status: Receiving_Modules</span>
                </div>
                <BiShield className="text-brand-yellow size-5 opacity-30" />
             </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between text-[9px] font-mono text-slate-700 tracking-[0.5em] uppercase">
          <p>©2026 EAGLE_BRAIN_AUTO_SOLUTION.SYSTEM // GHANA_OPS</p>
          <div className="flex gap-8">
            <span className="hover:text-brand-blue cursor-pointer transition-colors">Safety_First</span>
            <span className="hover:text-brand-blue cursor-pointer transition-colors">Core_API</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
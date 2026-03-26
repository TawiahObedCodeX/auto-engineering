"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiMail, HiPhone, HiChevronRight } from "react-icons/hi";
import { SiInstagram, SiX, } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { Terminal, Cpu, Zap, Activity, ShieldCheck, Globe, Database, Command } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#020617] pt-40 pb-10 border-t border-white/5 overflow-hidden">
      
      {/* --- MASSIVE BACKGROUND WATERMARK --- */}
      <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[25vw] font-black italic tracking-tighter whitespace-nowrap leading-none">
          SYSTEM_TERMINATE // 2026
        </h2>
      </div>

      {/* --- TECH GRID & DATA STREAM --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `linear-gradient(to right, #00e5ff 1px, transparent 1px), linear-gradient(to bottom, #00e5ff 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        
        {/* Animated Vertical Scanners */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: i * 2.5 }}
            className="absolute top-0 w-1/4 h-full bg-linear-to-r from-transparent via-electric/5 to-transparent"
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          
          {/* Brand Column - Massive Scaling */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-electric p-1 rounded-none shadow-[0_0_15px_#00e5ff]">
                  <Database className="text-navy" size={20} />
                </div>
                <span className="font-mono text-[10px] tracking-[0.8em] font-black text-electric uppercase">
                  Root_Directory
                </span>
              </div>
              <h3 className="text-6xl md:text-8xl font-black uppercase italic leading-[0.8] tracking-tighter text-white">
                AUTO<span className="text-electric">ELECTRO.</span>
              </h3>
            </div>
            
            <p className="max-w-md text-slate-500 font-mono text-xs leading-loose uppercase tracking-widest border-l-2 border-electric pl-8">
              The global benchmark for automotive software forensics. We synchronize high-performance hardware with advanced binary logic. No legacy systems—only the future.
            </p>

            <div className="flex gap-6">
              {[SiInstagram, SiX,HiMail,FaFacebookF].map((Icon, idx) => (
                <Link key={idx} href="#" className="group relative w-14 h-14 border border-white/10 flex items-center justify-center hover:border-electric transition-all duration-500">
                  <div className="absolute inset-0 bg-electric scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <Icon size={22} className="relative z-10 group-hover:text-navy transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav Links - Industrial List */}
          <div className="lg:col-span-3 grid grid-cols-1 gap-12">
            <div>
              <h4 className="font-heading uppercase text-[10px] tracking-[0.5em] font-black mb-10 text-slate-500 flex items-center gap-3">
                <Command size={14} className="text-electric" /> Navigation_Index
              </h4>
              <ul className="space-y-5">
                {["Services", "The Lab", "Expertise", "Case Studies", "Remote Sync"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm font-black uppercase italic tracking-tighter text-white/40 hover:text-electric flex items-center gap-4 group transition-all">
                      <HiChevronRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Certs - HUD Style */}
          <div className="lg:col-span-4 space-y-12">
            <div className="p-8 bg-white/2 border border-white/5 space-y-8 backdrop-blur-md">
              <h4 className="font-heading uppercase text-[10px] tracking-[0.5em] font-black text-electric flex items-center gap-3">
                <Globe size={14} /> Global_Uplink
              </h4>
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <span className="text-[9px] text-slate-600 block mb-1 font-black tracking-widest">ENCRYPTED_VOICE</span>
                  <span className="text-xl font-mono text-white group-hover:text-electric transition-colors">+233 244887773 LABS</span>
                </div>
                <div className="group cursor-pointer">
                  <span className="text-[9px] text-slate-600 block mb-1 font-black tracking-widest">DATA_PACKET_SEND</span>
                  <span className="text-xl font-mono text-white group-hover:text-electric transition-colors">eng@autoelectro.pro</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {["ASE_L3", "ISO_SYNC", "EVSE_III", "CAN_FD"].map((cert) => (
                <div key={cert} className="py-4 border border-white/5 bg-white/1 flex flex-col items-center justify-center group hover:bg-electric transition-all duration-300 cursor-help">
                  <span className="text-xs font-black italic group-hover:text-navy">{cert}</span>
                  <span className="text-[6px] uppercase tracking-widest text-slate-500 mt-1 group-hover:text-navy/50">Verified_Node</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- DYNAMIC STATUS HUD --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500">
              <Activity size={14} className="text-electric animate-bounce" />
              HEARTBEAT: <span className="text-white font-black">STABLE_0.01ms</span>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500">
              <ShieldCheck size={14} className="text-electric" />
              ENCRYPTION: <span className="text-white font-black">AES_256_ACTIVE</span>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500">
              <Cpu size={14} className="text-electric" />
              LOAD: <span className="text-white font-black">0.02%</span>
            </div>
          </div>
          
          <div className="text-[10px] font-black text-slate-600 uppercase tracking-[0.5em] text-center">
            © 2026 AUTO ELECTRO PRO // <span className="text-white/20">Binary_Optimized_Design</span>
          </div>

          <div className="flex items-center gap-4 py-2 px-4 bg-white/5 border border-white/10">
             <div className="w-2 h-2 rounded-full bg-electric animate-pulse shadow-[0_0_10px_#00e5ff]" />
             <span className="text-[9px] font-mono font-black uppercase tracking-tighter">SECURE_LINK: FRANKFURT_PRIMARY_NODE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
"use client";
import { motion } from "framer-motion";
import { 
  BiPhoneCall, BiLogoWhatsapp, BiSupport, BiSend, 
  BiMapPin, BiTimeFive, BiCheckShield, BiScan 
} from "react-icons/bi";

export default function ContactPage() {
  const phone = "0244887773";
  const whatsappLink = `https://wa.me/${phone.replace(/\s/g, "")}`;

  return (
    <main className="bg-brand-navy pt-32 pb-20 text-white min-h-screen selection:bg-brand-blue selection:text-brand-navy">
      <div className="container mx-auto px-6">
        
        {/* --- SECTION 1: CATCHY HEADER --- */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 text-brand-blue mb-4"
          >
            <div className="h-px w-12 bg-brand-blue" />
            <span className="font-mono text-xs tracking-[0.5em] uppercase">Connect_With_The_Lab</span>
          </motion.div>
          <h1 className="text-6xl md:text-9xl font-heading font-black italic uppercase tracking-tighter leading-none">
            READY FOR <br /> <span className="text-brand-blue">DIAGNOSIS?</span>
          </h1>
        </div>

        {/* --- SECTION 2: THE IMAGE SHOWCASE (Catchy Visuals) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {[
            "https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&q=80&w=800", // ECU Work
            "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800", // Diagnostic Screen
            "https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80&w=800"  // Component Work
          ].map((url, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="relative aspect-video overflow-hidden border border-white/10 group"
            >
              <img src={url} alt="Eagle Brain Technical Lab" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* --- SECTION 3: THE MAIN TERMINAL (Form + Info) --- */}
        <div className="grid lg:grid-cols-12 gap-px bg-white/10 border border-white/10 shadow-2xl">
          
          {/* LEFT: FORM (7 Columns) */}
          <div className="lg:col-span-7 bg-brand-navy p-8 md:p-16">
            <div className="mb-10">
              <h3 className="text-2xl font-heading font-black italic uppercase text-brand-blue mb-2">Technical Request Form</h3>
              <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">Submit vehicle telemetry & error codes for review.</p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-brand-blue uppercase ml-1">Identity_Name</label>
                  <input type="text" placeholder="e.g. Patrick Tawiah" className="w-full bg-white/5 border border-white/10 p-4 font-mono text-xs focus:border-brand-blue outline-none transition-all placeholder:text-slate-700" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-brand-blue uppercase ml-1">Vehicle_Reference</label>
                  <input type="text" placeholder="e.g. BMW G30 2022" className="w-full bg-white/5 border border-white/10 p-4 font-mono text-xs focus:border-brand-blue outline-none transition-all placeholder:text-slate-700" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-brand-blue uppercase ml-1">Direct_Contact_Email</label>
                <input type="email" placeholder="example@mail.com" className="w-full bg-white/5 border border-white/10 p-4 font-mono text-xs focus:border-brand-blue outline-none transition-all placeholder:text-slate-700" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-brand-blue uppercase ml-1">Error_Code_Log / Issue_Description</label>
                <textarea placeholder="Paste error codes or describe harness issues here..." rows={6} className="w-full bg-white/5 border border-white/10 p-4 font-mono text-xs focus:border-brand-blue outline-none transition-all placeholder:text-slate-700" />
              </div>
              
              <button className="w-full py-6 bg-brand-blue text-brand-navy font-heading font-black italic uppercase flex items-center justify-center gap-4 hover:bg-brand-yellow transition-all duration-500 group">
                Transmit Diagnostic Data <BiSend className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* RIGHT: CONTACT & PROCESS (5 Columns) */}
          <div className="lg:col-span-5 bg-[#010411] p-8 md:p-16 flex flex-col gap-12">
            
            {/* Process Checklist */}
            <div>
              <h3 className="text-xl font-heading font-black italic uppercase mb-8 text-brand-yellow flex items-center gap-3">
                <BiScan /> Intake_Protocol
              </h3>
              <div className="space-y-6">
                {[
                  { n: "01", t: "Initial Consultation", d: "Discuss error codes and symptoms." },
                  { n: "02", t: "Bench Testing", d: "Module removal and hex-data reading." },
                  { n: "03", t: "Precision Fix", d: "Cloning, Programming, or Harness repair." },
                  { n: "04", t: "Quality Verification", d: "Post-fix diagnostic integrity scan." }
                ].map((step) => (
                  <div key={step.n} className="flex gap-4">
                    <span className="text-brand-blue font-mono font-bold text-xs">{step.n}</span>
                    <div>
                      <h4 className="text-[11px] font-mono font-black uppercase text-white">{step.t}</h4>
                      <p className="text-[10px] font-mono text-slate-500 uppercase">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Channels */}
            <div className="space-y-6 pt-8 border-t border-white/5">
              <a href={`tel:${phone}`} className="flex items-center gap-6 group">
                <div className="size-14 bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20 group-hover:bg-brand-blue group-hover:text-brand-navy transition-all duration-500">
                  <BiPhoneCall size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Main_Line</span>
                  <span className="text-xl font-heading font-black italic group-hover:text-brand-blue transition-colors">{phone}</span>
                </div>
              </a>

              <a href={whatsappLink} target="_blank" className="flex items-center gap-6 group">
                <div className="size-14 bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover:bg-green-500 group-hover:text-white transition-all duration-500">
                  <BiLogoWhatsapp size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Encrypted_Chat</span>
                  <span className="text-xl font-heading font-black italic group-hover:text-green-500 transition-colors">WhatsApp_Lab</span>
                </div>
              </a>
            </div>

            {/* Availability Badge */}
            <div className="mt-auto p-6 bg-brand-blue/5 border border-brand-blue/10 rounded-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-white uppercase tracking-tighter">Diagnostic_Engineer_On_Duty</span>
              </div>
              <p className="text-[10px] font-mono text-slate-500 uppercase">Mon - Sat: 08:00 - 18:00 // Emergency Response Active</p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
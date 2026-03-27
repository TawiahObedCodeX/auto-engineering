"use client";
import { motion, Variants,useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  BiChip,
  BiShield,
  BiCheckShield,
  BiCodeAlt,
  BiWifi,
} from "react-icons/bi";
import {
  HiOutlineWrenchScrewdriver,
  HiOutlineCpuChip,
  HiOutlineShieldCheck,
  HiOutlineBolt,
} from "react-icons/hi2";
import { TbCircuitResistor, TbEngine, TbChartInfographic } from "react-icons/tb";
import { MdOutlineMemory, MdOutlineSecurity } from "react-icons/md";
import { RiRadarLine } from "react-icons/ri";

/* ─── Stagger animation helper ──────────────────────────────────────────────── */
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.215, 0.61, 0.355, 1] as const, // 👈 only change
      },
    }),
  };

/* ─── Service data ───────────────────────────────────────────────────────────── */
const services = [
  {
    id: "01",
    icon: <HiOutlineCpuChip size={36} />,
    label: "ECU & TCM PROGRAMMING",
    tag: "ENGINE + TRANSMISSION",
    headline: "Deep-Level ECU & TCM Calibration",
    body: "The Engine Control Unit (ECU) is the brain of your vehicle. The Transmission Control Module (TCM) governs every gear shift, fuel delivery, and emission cycle. When either unit is miscalibrated — due to software crashes, water damage, or incorrect flashing — you experience sluggish throttle response, unpredictable gear changes, and limp-mode lockouts. We re-flash both modules against factory OEM binary maps, eliminating lag and restoring optimal performance.",
    pills: ["EEPROM R/W", "PFLASH / DFLASH", "VIN CODING", "IMMO SYNC"],
    img: "https://images.unsplash.com/photo-1632823471565-1ecdf5c6da2e?auto=format&fit=crop&q=80&w=1200",
    accent: "brand-blue",
  },
  {
    id: "02",
    icon: <MdOutlineMemory size={36} />,
    label: "MODULE CLONING",
    tag: "ECU · TCU · BCM",
    headline: "Exact 1:1 Binary Replication",
    body: "When a control module fails and a replacement is no longer manufactured, cloning is the only viable solution. We perform direct chip-level reading of your original ECU, TCU, or BCM — copying the VIN, immobilizer seed, calibration tables, and all proprietary coding — then write it byte-for-byte onto a donor unit. The result is a plug-and-play module that needs zero additional coding at the dealer, saving you hundreds of dollars and days of downtime.",
    pills: ["ECU CLONE", "BCM CLONE", "TCU CLONE", "PLUG & PLAY"],
    img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=1200",
    accent: "brand-yellow",
  },
  {
    id: "03",
    icon: <BiCodeAlt size={36} />,
    label: "READ & WRITE",
    tag: "ECU · TCU · BCM",
    headline: "Full EEPROM & Flash Memory Access",
    body: "Modern vehicles contain dozens of control units communicating over CAN-Bus, LIN, and K-Line. We perform full OBD and bench-mode read/write operations on ECU, TCU, and BCM memory — including EEPROM, D-Flash, and P-Flash regions. This enables us to correct mileage calibration, read IMMO PIN codes, recover dead units to virgin state, and map custom performance parameters — all verified against global OEM standards.",
    pills: ["OBD MODE", "BENCH MODE", "CAN-BUS", "K-LINE"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    accent: "brand-blue",
  },
  {
    id: "04",
    icon: <HiOutlineShieldCheck size={36} />,
    label: "AIRBAG CRASH DATA RESET",
    tag: "SRS · ACM · RCM",
    headline: "EEPROM Reprogramming to Factory State",
    body: "After a collision, the SRS Airbag Control Module (ACM) writes permanent crash data — including B-codes, pretensioner fault records, and deployment logs — into non-volatile EEPROM memory. Battery disconnects, fuse pulls, and standard OBD scanners cannot touch this data. The module intentionally locks itself to prevent unsafe reuse. We use specialized bench-level EEPROM programmers to permanently erase crash data and restore the module to its exact factory condition — no VIN re-coding required.",
    pills: ["HARD CODE ERASE", "EEPROM FLASH", "SRS RESTORE", "PLUG & PLAY"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1200",
    accent: "brand-yellow",
  },
];

/* ─── Stats ──────────────────────────────────────────────────────────────────── */
const stats = [
  { value: "500+", label: "Modules Cloned" },
  { value: "100%", label: "OEM Standard" },
  { value: "24H", label: "Avg. Turnaround" },
  { value: "5★", label: "Client Rating" },
];

/* ─── Process steps ──────────────────────────────────────────────────────────── */
const process = [
  { n: "01", title: "VEHICLE INTAKE", desc: "Full OBD scan. Fault tree mapped. Root cause identified — not just symptoms." },
  { n: "02", title: "MODULE EXTRACTION", desc: "Target ECU, TCU, BCM, or SRS removed using ESD-safe protocols to prevent secondary damage." },
  { n: "03", title: "BINARY FORENSICS", desc: "Chip-level read performed. EEPROM, D-Flash & P-Flash data captured and backed up." },
  { n: "04", title: "WRITE & VERIFY", desc: "Corrected or cloned binary written back. Checksum validated. Module bench-tested before reinstall." },
];

/* ══════════════════════════════════════════════════════════════════════════════ */
export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scanY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <main
      ref={containerRef}
      className="bg-brand-navy text-white overflow-x-hidden selection:bg-brand-yellow selection:text-brand-navy"
    >
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-12 xl:px-20 overflow-hidden">
        {/* Animated scan grid */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right,#2563eb 1px,transparent 1px),linear-gradient(to bottom,#2563eb 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Horizontal scan line */}
          <motion.div
            style={{ y: scanY }}
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-60"
          />
          {/* Corner accents */}
          <div className="absolute top-24 left-6 w-16 h-16 border-l-2 border-t-2 border-brand-blue/40" />
          <div className="absolute top-24 right-6 w-16 h-16 border-r-2 border-t-2 border-brand-blue/40" />
        </div>

        {/* Background hero image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=60&w=1800"
            alt=""
            aria-hidden
            className="w-full h-full object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-navy/40" />
        </div>

        {/* Tag line */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="relative font-mono text-brand-blue text-xs tracking-[0.5em] uppercase mb-6 flex items-center gap-3"
        >
          <RiRadarLine className="animate-spin [animation-duration:4s]" />
          Diagnostic_Lab // Mission_Identity // 01
        </motion.p>

        {/* Main headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="relative font-heading font-black italic uppercase leading-[0.9] tracking-tighter text-[clamp(3rem,12vw,9rem)] max-w-5xl"
        >
          WE FIX{" "}
          <span className="text-brand-yellow [text-shadow:0_0_80px_#facc1555]">
            COMPLEX
          </span>{" "}
          <br className="hidden sm:block" />
          ISSUES.
        </motion.h1>

        {/* Sub copy */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="relative max-w-2xl mt-8 text-slate-400 font-mono text-xs sm:text-sm leading-relaxed uppercase tracking-widest"
        >
          Eagle Brain Auto Solution is not just a garage. We are a specialized
          diagnostic lab. The health of your car is our concern, and binary
          integrity is our standard.
        </motion.p>

        {/* Stats bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="relative mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10 max-w-3xl"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-brand-navy px-6 py-5 flex flex-col gap-1 group hover:bg-brand-blue/10 transition-colors"
            >
              <span className="font-heading font-black italic text-3xl sm:text-4xl text-brand-yellow group-hover:scale-105 transition-transform inline-block">
                {s.value}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-500">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 right-6 sm:right-12 flex flex-col items-center gap-2 opacity-40"
        >
          <span className="font-mono text-[9px] tracking-[0.4em] uppercase rotate-90 origin-center translate-y-4">
            Scroll
          </span>
          <div className="w-px h-12 bg-brand-blue" />
        </motion.div>
      </section>

      {/* ── SECTION LABEL ────────────────────────────────────────────────────── */}
      <div className="px-4 sm:px-6 lg:px-12 xl:px-20 pt-8">
        <div className="border-t border-white/10 pt-8 flex items-center gap-6">
          <BiChip className="text-brand-blue shrink-0" size={20} />
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-slate-500">
            Car Diagnostic & Programming — Service Matrix
          </p>
        </div>
      </div>

      {/* ── SERVICES ─────────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-20 py-16 md:py-24 space-y-32 md:space-y-48">
        {services.map((svc, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={svc.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center"
            >
              {/* Image */}
              <div
                className={`relative group overflow-hidden ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div
                  className={`absolute -inset-4 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                    svc.accent === "brand-yellow"
                      ? "bg-brand-yellow/10"
                      : "bg-brand-blue/10"
                  }`}
                />
                {/* Corner brackets */}
                <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-brand-blue/60 z-10" />
                <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-brand-yellow/40 z-10" />

                <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
                  <img
                    src={svc.img}
                    alt={svc.label}
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />

                  {/* Service ID watermark */}
                  <div className="absolute top-5 right-6 font-heading font-black italic text-8xl text-white/5 select-none">
                    {svc.id}
                  </div>

                  {/* Tag chip */}
                  <div className="absolute bottom-5 left-5 px-3 py-1.5 bg-brand-navy/80 border border-white/10 backdrop-blur-sm">
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-brand-blue">
                      {svc.tag}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                {/* Number + icon */}
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 border ${
                      svc.accent === "brand-yellow"
                        ? "border-brand-yellow/30 text-brand-yellow"
                        : "border-brand-blue/30 text-brand-blue"
                    }`}
                  >
                    {svc.icon}
                  </div>
                  <span className="font-mono text-xs tracking-[0.4em] text-slate-600 uppercase">
                    Service_{svc.id}
                  </span>
                </div>

                {/* Label */}
                <p
                  className={`font-mono text-[10px] uppercase tracking-[0.4em] ${
                    svc.accent === "brand-yellow"
                      ? "text-brand-yellow"
                      : "text-brand-blue"
                  }`}
                >
                  {svc.label}
                </p>

                {/* Headline */}
                <h2 className="font-heading font-black italic uppercase leading-none tracking-tighter text-[clamp(2rem,5vw,3.5rem)]">
                  {svc.headline}
                </h2>

                {/* Divider */}
                <div
                  className={`w-16 h-0.5 ${
                    svc.accent === "brand-yellow"
                      ? "bg-brand-yellow"
                      : "bg-brand-blue"
                  }`}
                />

                {/* Body */}
                <p className="font-mono text-xs leading-loose tracking-wider text-slate-400 uppercase">
                  {svc.body}
                </p>

                {/* Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {svc.pills.map((p) => (
                    <span
                      key={p}
                      className={`px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest border ${
                        svc.accent === "brand-yellow"
                          ? "border-brand-yellow/30 text-brand-yellow"
                          : "border-brand-blue/30 text-brand-blue"
                      }`}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* ── HARNESS RESTORATION ──────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-20 py-8 pb-24 md:pb-40">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative border border-white/10 overflow-hidden"
        >
          {/* BG glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-5 gap-0">
            {/* Image pane */}
            <div className="lg:col-span-2 relative overflow-hidden min-h-[300px] lg:min-h-0">
              <img
                src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=900"
                alt="Car Harness Wiring Restoration"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 opacity-70 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-navy/80 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent lg:hidden" />
            </div>

            {/* Content pane */}
            <div className="lg:col-span-3 p-8 md:p-12 xl:p-16 flex flex-col justify-center space-y-7">
              <div className="flex items-center gap-4">
                <HiOutlineWrenchScrewdriver
                  size={44}
                  className="text-brand-yellow shrink-0"
                />
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-yellow">
                  Service_05 // Physical_Restoration
                </p>
              </div>

              <h2 className="font-heading font-black italic uppercase leading-none tracking-tighter text-[clamp(2.5rem,6vw,5rem)]">
                HARNESS{" "}
                <span className="text-brand-blue">RESTORATION.</span>
              </h2>

              <div className="w-16 h-0.5 bg-brand-yellow" />

              <p className="font-mono text-xs leading-loose tracking-wider text-slate-400 uppercase max-w-xl">
                A car's wiring harness is its central nervous system — carrying
                ignition signals, sensor data, CAN-Bus communication, and power
                to every module. Heat damage, rodent chewing, corrosion, or
                botched prior repairs can introduce resistance faults, phantom
                codes, and intermittent failures that no software fix can
                resolve. We rebuild the harness back to original factory
                specifications using 100% OEM-spec wire gauges, connector
                housings, and heat-shrink sealing — restoring full signal
                integrity across every circuit.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  "100%_OEM_WIRING",
                  "SIGNAL_INTEGRITY",
                  "HEAT_DAMAGE_REPAIR",
                  "PEST_DAMAGE_FIX",
                  "CAN-BUS_RESTORE",
                  "CONNECTOR_REBUILD",
                ].map((tag) => (
                  <div
                    key={tag}
                    className="px-3 py-2 border border-white/10 text-[9px] font-mono text-slate-400 uppercase tracking-widest hover:border-brand-yellow/40 hover:text-brand-yellow transition-colors"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-20 py-16 md:py-24 border-t border-white/10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-brand-blue mb-4">
            Process_Flow // 02
          </p>
          <h2 className="font-heading font-black italic uppercase leading-none tracking-tighter text-[clamp(2.5rem,7vw,6rem)]">
            HOW WE{" "}
            <span className="text-brand-yellow">OPERATE.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {process.map((step, i) => (
            <motion.div
              key={step.n}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              className="bg-brand-navy p-8 md:p-10 space-y-5 group hover:bg-brand-blue/5 transition-colors"
            >
              <div className="flex items-start justify-between">
                <span className="font-heading font-black italic text-6xl text-white/5 group-hover:text-brand-blue/20 transition-colors select-none">
                  {step.n}
                </span>
                <TbChartInfographic
                  size={20}
                  className="text-brand-blue mt-2 opacity-40 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="font-heading font-black italic uppercase text-xl tracking-tight">
                {step.title}
              </h3>
              <div className="w-8 h-0.5 bg-brand-blue group-hover:w-full transition-all duration-500" />
              <p className="font-mono text-[10px] uppercase tracking-wider leading-loose text-slate-500 group-hover:text-slate-400 transition-colors">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FULL-BLEED SPLIT BANNER ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden my-8 md:my-16">
        <div className="relative h-[50vh] md:h-[60vh] min-h-[320px]">
          <img
            src="https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80&w=1800"
            alt="High-tech automotive diagnostics lab"
            className="w-full h-full object-cover grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/70 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="max-w-2xl space-y-5"
            >
              <TbEngine size={48} className="text-brand-yellow" />
              <h2 className="font-heading font-black italic uppercase leading-none tracking-tighter text-[clamp(2rem,6vw,5rem)]">
                BINARY_OPS <br />
                <span className="text-brand-blue">AT SCALE.</span>
              </h2>
              <p className="font-mono text-xs uppercase tracking-widest leading-loose text-slate-400">
                We support ECU/TCM/BCM on Bosch, Continental, Delphi, Denso,
                Magneti Marelli, Siemens & more — covering BMW, Mercedes, VW
                Group, Toyota, Hyundai/Kia, Ford, GM, Land Rover & all major
                makes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ────────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-20 py-16 md:py-28 border-t border-white/10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="space-y-8">
              <BiCheckShield size={56} className="text-brand-blue" />
              <h2 className="font-heading font-black italic uppercase leading-none tracking-tighter text-[clamp(2.5rem,6vw,5.5rem)]">
                THE EAGLE BRAIN{" "}
                <span className="text-brand-yellow">GUARANTEE.</span>
              </h2>
              <div className="w-16 h-0.5 bg-brand-yellow" />
              <p className="font-mono text-xs leading-loose tracking-widest uppercase text-slate-400">
                Under the technical direction of <strong className="text-white">Mr. Patrick Tawiah</strong>,
                every module cloning and diagnostic sequence is verified against
                global OEM standards. We don't just clear codes — we solve the
                root cause. Every job comes with a complete original-binary
                backup and written documentation.
              </p>
            </div>

            {/* Right: feature grid */}
            <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
              {[
                {
                  icon: <MdOutlineSecurity size={24} />,
                  title: "OEM VERIFIED",
                  desc: "Every write validated against factory calibration tables.",
                },
                {
                  icon: <HiOutlineBolt size={24} />,
                  title: "ROOT CAUSE FIX",
                  desc: "We diagnose the system, not just the symptom.",
                },
                {
                  icon: <BiWifi size={24} />,
                  title: "BINARY BACKUP",
                  desc: "Original chip data archived before any modification.",
                },
                {
                  icon: <TbCircuitResistor size={24} />,
                  title: "ALL MAKES",
                  desc: "Bosch, Delphi, Denso, Marelli, Continental & more.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="bg-brand-navy p-6 md:p-8 space-y-3 group hover:bg-brand-blue/10 transition-colors"
                >
                  <div className="text-brand-blue group-hover:text-brand-yellow transition-colors">
                    {f.icon}
                  </div>
                  <h4 className="font-heading font-black italic uppercase text-sm tracking-tight">
                    {f.title}
                  </h4>
                  <p className="font-mono text-[9px] uppercase tracking-wider leading-loose text-slate-500 group-hover:text-slate-400 transition-colors">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── BOTTOM CTA STRIP ─────────────────────────────────────────────────── */}
      <section className="border-t border-white/10 px-4 sm:px-6 lg:px-12 xl:px-20 py-12 md:py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-slate-600">
            Eagle Brain Auto Solution
          </p>
          <p className="font-heading font-black italic uppercase text-2xl md:text-3xl tracking-tight">
            READY TO DIAGNOSE?
          </p>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-brand-yellow text-brand-navy font-heading font-black italic uppercase text-sm tracking-widest hover:bg-white transition-colors shrink-0 group"
        >
          BOOK A DIAGNOSTIC
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </section>
    </main>
  );
}
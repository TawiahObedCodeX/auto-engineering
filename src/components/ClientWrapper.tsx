"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroVideo from "./IntroVideo";
import Navbar from "./Navbar"; // You'll create this next
import Footer from "./Footer"

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroVideo key="intro" onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
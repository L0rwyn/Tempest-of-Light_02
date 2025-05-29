import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function TempestOfLightGuild() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-gray-200 font-sans">
      <header className="text-center py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-[#f5f5dc] tracking-wide uppercase"
        >
          Tempest of Light
        </motion.h1>
        <p className="mt-4 text-[#c2b280] text-lg">An Atreides Guild in Dune: Awakening</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto p-4">
        <Card className="bg-[#1f1f1f] border border-[#444] rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-[#f5f5dc] mb-2">Our Mission</h2>
            <p className="text-[#ddd]">
              As loyal followers of House Atreides, we strive to bring order, honor, and
              illumination to the harsh lands of Arrakis. United in purpose and driven by
              strategy, we stand as a beacon of light amid the chaos.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#1f1f1f] border border-[#444] rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-[#f5f5dc] mb-2">What We Offer</h2>
            <ul className="list-disc list-inside text-[#ddd] space-y-2">
              <li>Strategic PvP and PvE operations</li>
              <li>Strong community and voice communication</li>
              <li>Dedicated leadership and structured hierarchy</li>
              <li>Events, training, and lore integration</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mt-12 max-w-3xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-3xl font-semibold text-[#f5f5dc] mb-4">Join the Tempest</h2>
          <p className="text-[#ccc] mb-6">
            Are you ready to walk the path of the Atreides and shape the future of Arrakis? Then step
            into the storm and become part of something greater.
          </p>
          <Button className="bg-[#d4af37] hover:bg-[#bfa22e] text-black font-bold px-6 py-2 rounded-xl shadow-xl">
            <Sparkles className="mr-2" /> Apply Now
          </Button>
        </motion.div>
      </section>

      <footer className="mt-20 text-center text-[#666] text-sm pb-6">
        &copy; 2025 Tempest of Light. Inspired by Dune: Awakening and House Atreides.
      </footer>
    </div>
  );
}

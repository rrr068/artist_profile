"use client"

import Link from "next/link"
import { Button } from "@/components/layout/Button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section id="hero" className="min-h-[120vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-foreground mb-12 text-balance tracking-wide"
        >
          色彩と感情の
          <br />
          対話
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-16"
        >
          油彩の豊かな質感と色彩を通じて、心に響く作品を創作しています
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
        >
          <Link href="/gallery">
            <Button size="lg" variant="outline" className="font-medium bg-transparent">
              作品を見る
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

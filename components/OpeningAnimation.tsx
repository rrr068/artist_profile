"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function OpeningAnimation() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 4500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          {/* Animated curtains */}
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 1.2, delay: 2.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-y-0 left-0 w-1/2 origin-left bg-foreground"
          />
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 1.2, delay: 2.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-y-0 right-0 w-1/2 origin-right bg-foreground"
          />

          {/* Center content */}
          <div className="relative z-10 text-center">
            {/* Artist name with stagger effect */}
            <div className="relative space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="overflow-hidden"
              >
                <h1 className="font-serif text-6xl font-light tracking-wider text-background md:text-8xl">
                  {"ARTIST".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.8 + i * 0.1,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
                className="mx-auto h-px w-32 bg-background/50"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6, ease: [0.76, 0, 0.24, 1] }}
                className="font-sans text-sm tracking-[0.3em] text-background/80"
              >
                PORTFOLIO
              </motion.p>
            </div>

            {/* Animated brush strokes */}
            <motion.div
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              className="absolute -left-20 top-0 h-full w-full"
            >
              <svg className="h-full w-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M20,100 Q50,20 100,50 T180,100"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-background"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.8 }}
                />
              </svg>
            </motion.div>
          </div>

          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0.5],
                x: Math.cos((i * Math.PI * 2) / 12) * 200,
                y: Math.sin((i * Math.PI * 2) / 12) * 200,
              }}
              transition={{
                duration: 2,
                delay: 0.5 + i * 0.1,
                ease: "easeOut",
              }}
              className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background"
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

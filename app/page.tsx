import Header from "@/components/Header"
import { Hero } from "@/components/Hero"
// import { Footer } from "@/components/Footer"
import { InteractiveBackground } from "@/components/InteractiveBackGround"
import { OpeningAnimation } from "@/components/OpeningAnimation"
import Image from "next/image"

import ArtworkImage from "../public/artist.jpg"

export default function Home() {
  return (
    <>
      <OpeningAnimation />
      <main className="min-h-screen">
        <InteractiveBackground />
        <Header />
        <Hero />
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-8 text-balance">
              油彩画の世界
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              伝統的な技法と現代的な感性を融合させ、
              <br />
              独自の表現を追求しています
            </p>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-6">作品について</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  一筆一筆に込められた想いと、
                  <br />
                  色彩が織りなす物語
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  時間をかけて丁寧に描かれた作品は、
                  <br />
                  見る人の心に静かに語りかけます
                </p>
              </div>
              <div className="aspect-square bg-muted/20 flex items-center justify-center relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={ArtworkImage}
                  alt="作品イメージ"
                  layout="fill"
                  objectFit="cover"
                  className="animate-fade-in-slow"
                />
              </div>
            </div>
          </div>
        </section>

        {/* <Footer /> */}
      </main>
    </>
  )
}
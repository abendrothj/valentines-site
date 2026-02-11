"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import { DOG_IMAGE_DATA_URL } from "@/lib/dog-image"

const DOG_SRC = DOG_IMAGE_DATA_URL

const PLEADING_MESSAGES = [
  "Will you be my Valentine?",
  "Are you sure?",
  "Really sure?",
  "Please?",
  "Pretty please?",
  "With a cherry on top?",
  "I'll be so sad...",
  "You're breaking my heart!",
  "I'll cry...",
  "Just say yes already!",
]

const SAD_DOG_LABELS = [
  "",
  "even this face says yes...",
  "look at those eyes...",
  "how can you say no to this?",
  "seriously, look at the puppy...",
  "the puppy is begging you...",
  "you're making the puppy sad...",
  "the puppy can't take it...",
  "one more no and the puppy cries...",
  "PLEASE the puppy needs this...",
]

function FloatingHearts() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${8 + i * 7.5}%`,
            bottom: `-${20 + (i % 3) * 15}px`,
            animationDuration: `${5 + (i % 4)}s`,
            animationDelay: `${(i * 0.7) % 5}s`,
            opacity: 0.15 + (i % 3) * 0.08,
          }}
        >
          <Heart
            className="fill-primary text-primary"
            style={{
              width: `${16 + (i % 4) * 4}px`,
              height: `${16 + (i % 4) * 4}px`,
            }}
          />
        </div>
      ))}
    </div>
  )
}

export function ValentineCard() {
  const [noCount, setNoCount] = useState(0)
  const [accepted, setAccepted] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  // Yes grows, No shrinks
  const yesScale = 1 + noCount * 0.3
  const noScale = Math.max(0.4, 1 - noCount * 0.08)
  const noOpacity = Math.max(0.3, 1 - noCount * 0.08)

  const handleNoClick = () => {
    setNoCount((prev) => Math.min(prev + 1, PLEADING_MESSAGES.length - 1))
  }

  useEffect(() => {
    if (accepted) setShowConfetti(true)
  }, [accepted])

  /* --- Accepted screen --- */
  if (accepted) {
    return (
      <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-background px-4">
        {showConfetti && (
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
          >
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="absolute animate-confetti"
                style={{
                  left: `${(i * 4.2) % 100}%`,
                  top: "-5%",
                  animationDuration: `${1.5 + (i % 5) * 0.4}s`,
                  animationDelay: `${(i * 0.12) % 0.8}s`,
                }}
              >
                <Heart
                  className="fill-primary text-primary"
                  style={{
                    width: `${18 + (i % 4) * 5}px`,
                    height: `${18 + (i % 4) * 5}px`,
                    opacity: 0.6 + (i % 3) * 0.15,
                  }}
                />
              </div>
            ))}
          </div>
        )}

        <div className="z-10 flex flex-col items-center gap-5 text-center md:gap-8">
          <div className="relative">
            <div className="overflow-hidden rounded-full border-4 border-primary/30 shadow-xl shadow-primary/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={DOG_SRC || "/placeholder.svg"}
                alt="Happy smiling dog with a flower"
                className="h-36 w-36 object-cover sm:h-48 sm:w-48 md:h-56 md:w-56"
              />
            </div>
            <Heart
              className="absolute -right-2 -top-2 h-6 w-6 animate-bounce fill-primary text-primary md:h-8 md:w-8"
              style={{ animationDelay: "0s" }}
            />
            <Heart
              className="absolute -left-3 top-4 h-5 w-5 animate-bounce fill-primary text-primary md:h-7 md:w-7"
              style={{ animationDelay: "0.2s" }}
            />
            <Heart
              className="absolute -bottom-1 right-2 h-5 w-5 animate-bounce fill-primary text-primary md:h-6 md:w-6"
              style={{ animationDelay: "0.4s" }}
            />
          </div>

          <h1 className="font-serif text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-8xl text-balance">
            Yay!
          </h1>

          <p className="max-w-xs text-lg text-muted-foreground sm:max-w-sm sm:text-xl md:text-2xl text-pretty">
            {"Happy Valentine's Day!"}
          </p>

          <div className="mt-2 flex gap-1.5">
            {Array.from({ length: 7 }).map((_, i) => (
              <Heart
                key={i}
                className="h-4 w-4 animate-pulse fill-primary text-primary sm:h-5 sm:w-5 md:h-6 md:w-6"
                style={{ animationDelay: `${i * 0.18}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  /* --- Question screen --- */
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-background px-6 py-12">
      <FloatingHearts />

      <div className="z-10 flex flex-col items-center gap-4 text-center sm:gap-5 md:gap-7">
        {/* Dog image */}
        <div className="relative">
          <div
            className="overflow-hidden rounded-3xl border-4 border-primary/20 shadow-lg shadow-primary/10 transition-transform duration-500"
            style={{
              transform:
                noCount > 0
                  ? `rotate(${noCount % 2 === 0 ? -3 : 3}deg)`
                  : "rotate(0deg)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={DOG_SRC || "/placeholder.svg"}
              alt="Smiling dog with a flower"
              className="h-40 w-52 object-cover sm:h-48 sm:w-64 md:h-56 md:w-72"
            />
          </div>
          <Heart className="absolute -right-3 -top-3 h-7 w-7 animate-pulse fill-primary text-primary drop-shadow md:h-9 md:w-9" />
        </div>

        {/* Puppy guilt trip */}
        {noCount > 0 && (
          <p className="text-xs font-medium tracking-wide text-primary/70 sm:text-sm">
            {SAD_DOG_LABELS[Math.min(noCount, SAD_DOG_LABELS.length - 1)]}
          </p>
        )}

        {/* Question */}
        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-6xl text-balance">
          {PLEADING_MESSAGES[noCount]}
        </h1>

        {/* Buttons side by side */}
        <div className="flex items-center gap-4">
          {/* Yes - grows bigger each time No is pressed */}
          <button
            type="button"
            onClick={() => setAccepted(true)}
            className="rounded-full bg-primary px-8 py-3 font-sans font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:brightness-110 active:scale-95"
            style={{
              transform: `scale(${yesScale})`,
            }}
          >
            Yes
          </button>

          {/* No - shrinks and fades each time it's pressed */}
          <button
            type="button"
            onClick={handleNoClick}
            className="rounded-full border-2 border-border bg-card px-5 py-2 font-sans text-sm font-semibold text-muted-foreground shadow-md transition-all duration-300 hover:border-primary/30 active:scale-95 sm:px-6 sm:py-2.5 md:px-8 md:py-3 md:text-base"
            style={{
              transform: `scale(${noScale})`,
              opacity: noOpacity,
            }}
          >
            No
          </button>
        </div>

        {noCount > 0 && (
          <p className="mt-1 text-xs text-muted-foreground animate-pulse sm:text-sm">
            {"Hmm... there's really only one right answer here"}
          </p>
        )}
      </div>
    </div>
  )
}

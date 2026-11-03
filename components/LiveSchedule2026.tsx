"use client"

import { useEffect } from "react"
import schedule from "@/images/2026/CCBP26_LiveSchedule.png"

const resizeMap = async () => {
  try {
    const mod = await import("image-map-resizer")
    const fn = (mod && (mod.default ?? mod)) as unknown as () => void
    if (typeof fn === "function") fn()
  } catch (err) {
    console.warn("image-map-resizer import failed:", err)
  }
}

const links = [
  { href: "https://www.instagram.com/revengeof_comicsandpinball/", alt: "Revenge Of on Instagram", x: [53, 135], x2: [1804, 1888] },
  { href: "https://www.youtube.com/@revengeof_comicsandpinball", alt: "Revenge Of on YouTube", x: [152, 270], x2: [1904, 2023] },
  // TODO: Twitch areas (287-366, 2039-2117) once the channel URL is confirmed
  { href: "https://www.tiktok.com/@revengeofcomics", alt: "Revenge Of on TikTok", x: [384, 467], x2: [2135, 2219] },
]

export default function LiveSchedule2026() {
  useEffect(() => {
    resizeMap()
  }, [])

  return (
    <div>
      <img
        src={schedule.src}
        alt="Comic Creators Block Party 2026 Live Interview Schedule"
        width={schedule.width} // 2265
        height={schedule.height} // 2266
        useMap="#live-schedule-map"
        className="w-full h-auto"
        onLoad={resizeMap}
      />

      <map id="live-schedule-map" name="live-schedule-map">
        {links.flatMap(({ href, alt, x, x2 }) =>
          [x, x2].map(([l, r]) => (
            <area
              key={`${href}-${l}`}
              shape="rect"
              coords={`${l},49,${r},135`}
              href={href}
              alt={alt}
              target="_blank"
              rel="noopener noreferrer"
            />
          ))
        )}
      </map>
    </div>
  )
}

"use client"

import { useEffect } from "react"
import rotv from "@/images/2026/CCBP26_ROTVLive.png"

const resizeMap = async () => {
  try {
    const mod = await import("image-map-resizer")
    const fn = (mod && (mod.default ?? mod)) as unknown as () => void
    if (typeof fn === "function") fn()
  } catch (err) {
    console.warn("image-map-resizer import failed:", err)
  }
}

export default function ROTVLive2026() {
  // See VendorsFlyer: image-map-resizer touches `window` at import time, so load it client-side only.
  useEffect(() => {
    resizeMap()
  }, [])

  return (
    <div className="mx-auto max-w-[900px]">
      <img
        src={rotv.src}
        alt="Revenge Of TV Live From CCBP - Live interview broadcasts and red carpet coverage!"
        width={rotv.width} // 1630
        height={rotv.height} // 1017
        useMap="#rotv-map"
        className="w-full h-auto"
        onLoad={resizeMap}
      />

      <map id="rotv-map" name="rotv-map">
        <area
          shape="rect"
          coords="535,897,660,1017"
          href="https://www.instagram.com/revengeof_comicsandpinball/"
          alt="Revenge Of on Instagram"
          target="_blank"
          rel="noopener noreferrer"
        />
        <area
          shape="rect"
          coords="665,897,839,1017"
          href="https://www.youtube.com/@revengeof_comicsandpinball"
          alt="Revenge Of on YouTube"
          target="_blank"
          rel="noopener noreferrer"
        />
        {/* TODO: Twitch area (845,897,965,1017) once the channel URL is confirmed */}
        <area
          shape="rect"
          coords="968,897,1095,1017"
          href="https://www.tiktok.com/@revengeofcomics"
          alt="Revenge Of on TikTok"
          target="_blank"
          rel="noopener noreferrer"
        />
      </map>
    </div>
  )
}

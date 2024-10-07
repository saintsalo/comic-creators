"use client"
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown"
import "@leenguyen/react-flip-clock-countdown/dist/index.css"
import { useState, useEffect } from "react"

export default function Flip() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // or a fallback UI
  }
  return <FlipClockCountdown to={new Date().getTime() + 24 * 3600 * 1000 + 5000} />
}

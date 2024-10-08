"use client"
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown"
import "@leenguyen/react-flip-clock-countdown/dist/index.css"
import { useState, useEffect } from "react"

export default function Flip(props: any) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // or a fallback UI
  }
  const { to, renderOnServer, digitalBlockStyle, ...otherProps } = props

  return <FlipClockCountdown to={to} digitBlockStyle={digitalBlockStyle} {...otherProps} />
}

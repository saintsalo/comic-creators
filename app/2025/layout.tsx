import type { Metadata } from "next"
import "@/styles/2025theme.css"
import "@/styles/embla.css"

export const metadata: Metadata = {
  title: "Comic Creators Block Party 2025",
  description:
    "Comic Creators Block Party at Revenge Of November 8, 2025 with Co-Hosts Patton Oswalt and Jordan Blum.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}

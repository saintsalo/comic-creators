import type { Metadata } from "next"
import "@/styles/2024theme.css"

export const metadata: Metadata = {
  title: "Comic Creators Block Party 2024",
  description:
    "Comic Creators Block Party at Revenge Of November 2, 2024 with Co-Hosts Patton Oswalt and Jordan Blum.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}

import type { Metadata } from "next"
import { anton_init, roboto_init } from "@/fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Comic Creators Block Party",
  description: "Comic Creators Block Party at Revenge Of 2024, with Patton Oswalt and Jordan Blum.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_init.className} ${anton_init.variable} antialiased`}>
        <div>{children}</div>
      </body>
    </html>
  )
}

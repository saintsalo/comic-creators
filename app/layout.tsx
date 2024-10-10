import type { Metadata } from "next"
import { anton_init, roboto_init } from "@/fonts"
import "./globals.css"
import Script from "next/script"
import { GoogleAnalytics } from "@next/third-parties/google"

export const metadata: Metadata = {
  title: "Comic Creators Block Party",
  description:
    "Comic Creators Block Party at Revenge Of November 2, 2024 with Co-Hosts Patton Oswalt and Jordan Blum.",
  // icons: {
  //   icon: "favicon.ico",
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_init.className} ${anton_init.variable} antialiased`}>
        {process.env.NODE_ENV === "production" ? <GoogleAnalytics gaId="G-3PJ2SP5PVW" /> : null}
        <Script
          id="klaviyo"
          type="text/javascript"
          src={`//static.klaviyo.com/onsite/js/klaviyo.js?company_id=ULWpL7`}
          async
        />
        <div className="bg-[url('../images/background-footer.png')] bg-no-repeat bg-bottom ">
          {children}
        </div>
      </body>
    </html>
  )
}

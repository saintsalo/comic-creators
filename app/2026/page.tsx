import Image from "next/image"
import ccbpHeader from "@/images/2026/CCBP26_header.png"
import ccbpSchedule from "@/images/2026/CCBP26_SigningSchedule.png"
import revengeOfLogo from "@/images/2026/RevengeOf_LogoAddress.png"
import ROTVLive2026 from "@/components/ROTVLive2026"

export default function Home() {
  return (
    <div className="bg-[url('../images/2026/CCBP26_background.jpg')] bg-repeat bg-[length:100%_auto] md:bg-[length:50%_auto] bg-top">
      <div className="grid grid-cols-1 md:min-h-screen justify-items-center m-auto max-w-6xl gap-6 lg:gap-10 px-3 md:px-4 pt-3 md:pt-4 pb-16 w-full">
        <div className="w-full flex flex-col gap-2 lg:gap-5">
          <Image
            src={ccbpHeader}
            alt="Revenge Of presents Comic Creators Block Party 2026 with Patton & Jordan, November 7th. Signings, meet & greets, live interviews, food, vendors."
            style={{ width: "100%", height: "auto" }}
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
          <Image
            src={ccbpSchedule}
            alt="Comic Creators Block Party 2026 Signing Schedule"
            style={{ width: "100%", height: "auto" }}
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>
        <div className="w-full">
          <ROTVLive2026 />
        </div>
        <a
          href="https://www.revengeof.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-xl"
        >
          <Image
            src={revengeOfLogo}
            alt="Revenge Of Comics and Pinball, 3420 Eagle Rock Blvd, Glassell Park, Los Angeles, CA"
            style={{ width: "100%", height: "auto" }}
            sizes="(max-width: 600px) 100vw, 600px"
          />
        </a>
      </div>
    </div>
  )
}

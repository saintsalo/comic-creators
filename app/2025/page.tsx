import Image from "next/image"
import ccbpLogo from "@/images/2025/CCBP25_LogoAnnounceGraphic_webpage.png"
import Newsletter from "@/components/Newsletter"
import PromoOverview2025 from "@/components/PromoOverview2025"
import EmbedVideo from "@/components/EmbedVideo"

export default function Home() {
  return (
    <div className="bg-[url('../images/2025/background_test.png')] bg-repeat bg-top">
      <div className="grid md:min-h-screen justify-items-center m-auto max-w-[1600px] transition gap-8 lg:gap-6 pb-[350px]">
        <div className="w-full max-w-6xl">
          <Image
            src={ccbpLogo}
            alt="Comic Creators Block Party"
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
            sizes="100vw"
            priority
          />
        </div>
        <PromoOverview2025 />
        <EmbedVideo
          url="https://www.youtube.com/embed/Yyk-vpSr-1c?si=peVlyplObjcL5OJV"
          borderColor="#0C888E"
          subtitle="Comic Creator Block Party 2025 - Coming November 8th"
        />
        <div className="content flex flex-col gap-8">
          <Newsletter />
        </div>
      </div>
    </div>
  )
}

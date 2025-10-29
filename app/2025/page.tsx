import Image from "next/image"
import ccbpLogo from "@/images/2025/CCBP25_header.png"
import ccbpLineup from "@/images/2025/CCBP25_Lineup.png"
import ccbpCouch from "@/images/2025/CCBP25_CouchParty.png"
import Newsletter from "@/components/Newsletter"
import EmbedVideo from "@/components/EmbedVideo"
import VendorsFlyer from "@/components/VendorsFlyer"
import type { EmblaOptionsType } from "embla-carousel"
import EmblaCarousel from "@/components/EmblaCarousel"

const OPTIONS: EmblaOptionsType = {
  dragFree: true,
  containScroll: "keepSnaps",
  watchSlides: false,
  watchResize: false,
}
const SLIDES = [
  {
    name: "Comic Creators Block Party 2024",
    path: "/images/2024/eventImages/CCBP24_Image1.jpg",
  },
  {
    name: "Comic Creators Block Party 2024",
    path: "/images/2024/eventImages/CCBP24_Image2.jpg",
  },
  {
    name: "Comic Creators Block Party 2024",
    path: "/images/2024/eventImages/CCBP24_Image3.jpg",
  },
  {
    name: "Comic Creators Block Party 2024",
    path: "/images/2024/eventImages/CCBP24_Image4.jpg",
  },
  {
    name: "Comic Creators Block Party 2024",
    path: "/images/2024/eventImages/CCBP24_Image5.jpg",
  },
  {
    name: "Comic Creators Block Party 2024",
    path: "/images/2024/eventImages/CCBP24_Image6.jpg",
  },
  {
    name: "Comic Creators Block Party 2024",
    path: "/images/2024/eventImages/CCBP24_Image7.jpg",
  },
  // {
  //   name: "Comic Creators Block Party 2024",
  //   path: "/images/2024/eventImages/CCBP24_Image8.jpg",
  // },
  {
    name: "Comic Creators Block Party 2024",
    path: "/images/2024/eventImages/CCBP24_Image9.jpg",
  },
  // {
  //   name: "Comic Creators Block Party 2024",
  //   path: "/images/2024/eventImages/CCBP24_Image10.jpg",
  // },
  {
    name: "Comic Creators Block Party 2024",
    path: "/images/2024/eventImages/CCBP24_Image11.jpg",
  },
  {
    name: "Comic Creators Block Party 2024",
    path: "/images/2024/eventImages/CCBP24_Image12.jpg",
  },
  {
    name: "Comic Creators Block Party 2024",
    path: "/images/2024/eventImages/CCBP24_Image13.jpg",
  },
  {
    name: "Comic Creators Block Party 2024",
    path: "/images/2024/eventImages/CCBP24_Image14.jpg",
  },
  {
    name: "Comic Creators Block Party 2024",
    path: "/images/2024/eventImages/CCBP24_Image15.jpg",
  },
  {
    name: "Comic Creators Block Party 2024",
    path: "/images/2024/eventImages/CCBP24_Image16.jpg",
  },
  {
    name: "Comic Creators Block Party 2024",
    path: "/images/2024/eventImages/CCBP24_Image17.jpg",
  },
  {
    name: "Comic Creators Block Party 2024",
    path: "/images/2024/eventImages/CCBP24_Image18.jpg",
  },
  {
    name: "Comic Creators Block Party 2024",
    path: "/images/2024/eventImages/CCBP24_Image19.jpg",
  },
  {
    name: "Comic Creators Block Party 2024",
    path: "/images/2024/eventImages/CCBP24_Image20.jpg",
  },
]

export default function Home() {
  return (
    <div className="bg-[url('../images/2025/CCBP25_background.png')] md:bg-[url('../images/2025/background.png')] bg-repeat bg-[length:100%_auto] md:bg-[length:50%_auto] lg:bg-[length:33%_auto] bg-top">
      <div className="grid md:min-h-screen justify-items-center m-auto max-w-[1600px] transition gap-4 lg:gap-6 pb-[350px] w-full">
        <div className="w-full max-w-6xl">
          <Image
            src={ccbpLogo}
            alt="Comic Creators Block Party 2025, November 8th"
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
            sizes="100vw"
            priority
          />
        </div>
        <div className="w-full">
          <Image
            src={ccbpLineup}
            alt="Comic Creators Block Party 2025 Creator Lineup"
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
            sizes="100vw"
            priority
          />
        </div>
        <div className="w-full">
          <Image
            src={ccbpCouch}
            alt="Comic Creators Block Party 2025 Creator Lineup"
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
            sizes="100vw"
            priority
          />
        </div>
        <div className="w-full max-w-6xl">
          <VendorsFlyer />
        </div>
        {/* <div className="w-full max-w-[1200px]">
          <PromoOverview2025 />
        </div> */}

        <EmbedVideo
          url="https://www.youtube.com/embed/Yyk-vpSr-1c?si=peVlyplObjcL5OJV"
          borderColor="#0C888E"
          subtitle="Comic Creator Block Party 2025 - Coming November 8th"
        />
        <div className="w-full max-w-6xl p-2">
          <h1 className="font-bold text-center lg:mb-2">
            Comic Creators Block Party 2024 Highlights
          </h1>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
        <div className="mt-12 w-full max-w-[300px] sm:max-w-full lg:max-w-[800px] m-auto">
          <Newsletter />
        </div>
      </div>
    </div>
  )
}

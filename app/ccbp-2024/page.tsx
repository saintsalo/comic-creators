import Image from "next/image"
import ccbpLogo from "@/images/CCBP_LogoGraphic-full.png"
import roLogo from "@/images/revenge-of-logo.png"
import creatorsImage from "@/images/creatorsList.png"
import Creators from "@/components/Creators"
import Newsletter from "@/components/Newsletter"
import SaveDate from "@/components/SaveDate"
import CCBP2023 from "@/components/CCBP2023"
import CCBP2024Content from "@/components/CCBP2024Content"

export default function Home() {
  return (
    <div className="grid md:min-h-screen justify-items-center m-auto max-w-[1600px] transition gap-8 lg:gap-16 pb-[350px]">
      <div className="w-full max-w-6xl">
        <Image
          src={ccbpLogo}
          alt="Comic Creators Block Party"
          style={{ objectFit: "cover", width: "100%", height: "auto" }}
          sizes="100vw"
          priority
        />
      </div>
      <SaveDate />
      <div>
        <Image
          src={roLogo}
          alt="Comic Creators Block Party"
          width={800}
          height={450}
          sizes="100vw"
        />
      </div>
      <div className="content flex flex-col gap-8">
        <Newsletter />
      </div>
      <div className="content w-full">
        <CCBP2024Content />
      </div>
      <CCBP2023 />
      <div className="max-w-7xl">
        <Image
          src={creatorsImage}
          alt="Comic Creators Block Party Creators List"
          width={1600}
          height={1600}
          sizes="100vw"
        />
      </div>
      <Creators />
    </div>
  )
}

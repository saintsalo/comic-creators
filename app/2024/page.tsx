import Image from "next/image"
import ccbpLogo from "@/images/2024/CCBP_LogoGraphic-full.png"
import roLogo from "@/images/revenge-of-logo.png"
import creatorsImage from "@/images/2024/CCBP_2024_Schedule_Web.png"
import Creators from "@/components/Creators"
import SaveDate from "@/components/SaveDate"
import CCBP2023 from "@/components/CCBP2023"
import CCBP2024Content from "@/components/CCBP2024Content"
import EmbedVideo from "@/components/EmbedVideo"
import CCBPRSVP from "@/components/CCBPRSVP"

export default function Home() {
  return (
    <div className="bg-[url('../images/2024/background-footer.png')] bg-no-repeat bg-bottom ">
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
        <div className="content w-full">
          <CCBP2024Content />
        </div>
        <EmbedVideo
          url="https://www.youtube.com/embed/zt3j4q6rUU4?si=7ImDXQFsSb_MTLRz"
          borderColor="#931136"
          header="Comic Creators Block Party 2024"
        />

        <div className="max-w-7xl lg:-mb-12">
          <Image
            src={creatorsImage}
            alt="Comic Creators Block Party Creators List"
            width={1600}
            height={1600}
            sizes="100vw"
          />
        </div>
        <div className="max-w-7xl w-full">
          <CCBPRSVP />
        </div>

        <CCBP2023 />
        <Creators />
      </div>
    </div>
  )
}

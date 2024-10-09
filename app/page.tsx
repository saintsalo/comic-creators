import Image from "next/image"
import ccbpLogo from "../images/CCBP_LogoGraphic-full.png"
import roLogo from "../images/revenge-of-logo.png"
import creatorsImage from "../images/creatorsList.png"
import Flip from "@/components/Flip"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import Creators from "@/components/Creators"
import std from "@/images/save-the-date.png"
import Newsletter from "@/components/Newsletter"

dayjs.extend(utc)
dayjs.extend(timezone)

export default function Home() {
  const targetDate = dayjs.tz("2024-11-02 10:00", "America/Los_Angeles")
  const timestamp = targetDate.valueOf()
  return (
    <div className="grid md:min-h-screen justify-items-center m-auto max-w-[1600px] transition gap-8">
      <div className="">
        <Image
          src={ccbpLogo}
          alt="Comic Creators Block Party"
          style={{ objectFit: "cover", width: "100%", height: "auto" }}
          priority
        />
      </div>
      <div className="w-full">
        <div className="bg-[url('../images/background-orange.png')] bg-cover text-[#931136] bg-left  border-[#931136] md:border-[10px] md:rounded-[35px]  p-8 m-2 border-4 rounded-md">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center w-full">
            <div className="flex flex-col gap-4">
              <Image
                src={std}
                alt="Save the Date"
                width={300}
                height={100}
                sizes="100vw"
                className="hidden md:block"
              />
              <Image
                src={std}
                alt="Save the Date"
                width={200}
                height={75}
                sizes="100vw"
                className="md:hidden"
              />
              <div className="font-extrabold md:text-lg leading-6">
                The festivities of the CCBP shindig kick off bright and early on Nov 2, 2024 at
                10am. Boy, oh boy, we&apos;re just bursting with excitement to have you there!
              </div>
            </div>

            <div className="lg:hidden block items-center justify-self-center bg-white p-2 rounded-sm bg-opacity-75">
              <Flip
                labelStyle={{
                  fontSize: 10,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  color: "black",
                }}
                digitBlockStyle={{
                  width: 20,
                  height: 30,
                  fontSize: 22,
                  borderRadius: 3,
                }}
                to={timestamp}
              />
            </div>
            <div className="lg:block hidden items-center justify-self-center bg-white p-2 rounded-sm bg-opacity-75">
              <Flip
                labelStyle={{
                  fontSize: 10,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  color: "black",
                }}
                digitBlockStyle={{
                  width: 30,
                  height: 45,
                  fontSize: 22,
                  borderRadius: 3,
                }}
                to={timestamp}
              />
            </div>
          </div>
        </div>
      </div>
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

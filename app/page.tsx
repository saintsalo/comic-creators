import Image from "next/image"
import ccbpLogo from "../images/CCBP_LogoGraphic-full.png"
import roLogo from "../images/revenge-of-logo.png"
import creatorsImage from "../images/creatorsList.png"
import Flip from "@/components/Flip"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import Creators from "@/components/Creators"

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
      <div className="w-full bg-[url('../images/ccbp-banner.png')] bg-no-repeat bg-cover md:px-12 md:py-4 text-white bg-center p-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
          <div className="flex flex-col gap-2">
            <h1>Save the Date!</h1>
            <div>
              The festivities of the CCBP shindig kick off bright and early on Nov 2, 2024 at 10am.
              Boy, oh boy, we&apos;re just bursting with excitement to have you there!
            </div>
          </div>

          <div className="lg:hidden block items-center justify-self-center bg-white p-8 rounded-sm bg-opacity-75">
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
          <div className="lg:block hidden items-center justify-self-center bg-white p-8 rounded-sm bg-opacity-75">
            <Flip
              labelStyle={{
                fontSize: 10,
                fontWeight: 500,
                textTransform: "uppercase",
                color: "black",
              }}
              to={timestamp}
            />
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor ultrices nisl, id
          tincidunt nunc. Sed euismod, nunc id aliquet ullamcorper, odio nisl ultrices nunc, a
          aliquam nunc nisl id nunc. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Sed vitae nunc auctor, lacinia nunc sed, ultrices nunc.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor ultrices nisl, id
          tincidunt nunc. Sed euismod, nunc id aliquet ullamcorper, odio nisl ultrices nunc, a
          aliquam nunc nisl id nunc. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Sed vitae nunc auctor, lacinia nunc sed, ultrices nunc.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor ultrices nisl, id
          tincidunt nunc. Sed euismod, nunc id aliquet ullamcorper, odio nisl ultrices nunc, a
          aliquam nunc nisl id nunc. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Sed vitae nunc auctor, lacinia nunc sed, ultrices nunc.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor ultrices nisl, id
          tincidunt nunc. Sed euismod, nunc id aliquet ullamcorper, odio nisl ultrices nunc, a
          aliquam nunc nisl id nunc. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Sed vitae nunc auctor, lacinia nunc sed, ultrices nunc.
        </p>
      </div>
      <div className="max-w-7xl">
        <Image
          src={creatorsImage}
          alt="Comic Creators Block Party Creators List"
          width={1600}
          height={1600}
          // style={{ objectFit: "contain", width: "120%", height: "auto" }}
        />
      </div>
      <Creators />
    </div>
  )
}

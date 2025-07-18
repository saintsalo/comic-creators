import Image from "next/image"
import std from "@/images/2024/save-the-date.png"
import Flip from "@/components/Flip"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

dayjs.extend(utc)
dayjs.extend(timezone)
const SaveDate = () => {
  const targetDate = dayjs.tz("2024-11-02 11:00", "America/Los_Angeles")
  const timestamp = targetDate.valueOf()
  return (
    <div className="w-full">
      <div className="bg-[url('../images/2024/background-orange.png')] bg-cover text-[#931136] bg-left  border-[#931136] md:border-[10px] md:rounded-[35px]  p-8 m-2 border-4 rounded-md">
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
            <div className="font-extrabold">
              The festivities of the CCBP shindig kick off bright and early on Nov 2, 2024 at 11am.
              Boy, oh boy, we&apos;re just bursting with excitement to have you there!
            </div>
          </div>

          <div className="lg:hidden block items-center justify-self-center  p-2 rounded-sm bg-opacity-75">
            <Flip
              labelStyle={{
                fontSize: 6,
                fontWeight: 500,
                textTransform: "uppercase",
                color: "black",
              }}
              digitBlockStyle={{
                width: 16,
                height: 30,
                fontSize: 22,
                borderRadius: 3,
              }}
              to={timestamp}
            />
          </div>
          <div className="lg:block hidden items-center justify-self-center  p-2 rounded-sm bg-opacity-75">
            <Flip
              labelStyle={{
                fontSize: 10,
                fontWeight: 500,
                textTransform: "uppercase",
                color: "black",
              }}
              digitBlockStyle={{
                width: 21,
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
  )
}

export default SaveDate

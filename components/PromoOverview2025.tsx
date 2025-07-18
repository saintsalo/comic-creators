import Image from "next/image"
import std from "@/images/2024/save-the-date.png"

const SaveDate = () => {
  return (
    <div className="max-w-[1100px] lg:min-w-[1100px]">
      <div className="text-[#ffffff]   border-[#0C888E] md:border-[4px] xl:border-[6px] md:rounded-[25px] p-4 md:p-8 lg:px-16 m-4 border-2 rounded-[25px]">
        <div className="flex w-full justify-center">
          <div className="flex flex-col gap-4 items-center">
            <h1>
              <span className="whitespace-nowrap pr-2">COMIC CREATORS!</span>{" "}
              <span className="whitespace-nowrap pr-2">VENDORS!</span>{" "}
              <span className="whitespace-nowrap">FOOD TRUCKS!</span>
            </h1>
            <div className="text-center font-extrabold">
              If you are interested in being a part of CCBP &rsquo;25 please submit an application
              here:
            </div>
            <input
              type="button"
              className="primary-button"
              value="Comic Creators Block Party '25 Application!"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SaveDate

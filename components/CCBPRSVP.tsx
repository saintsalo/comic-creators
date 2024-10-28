"use client"
export default function CCBPRSVP() {
  return (
    <div className="w-full text-center">
      <h1 className="text-[#931136] text-[2rem]">RSVP Today!</h1>
      <div className="flex md:flex-row flex-col justify-center w-full gap-2 md:gap-4 lg:gap-8">
        <a
          href="https://ccbp24-panel-a-lgbtqia.rsvpify.com/?securityToken=i9Skh0E6qhA1JvLVD56Id9kwCB0ueAeM"
          target="_blank"
          rel="noreferrer"
          className="underline whitespace-nowrap hover:opacity-90 transition-all duration-500"
        >
          Panel A LGBTQIA+
        </a>
        <a
          href="https://ccbp24-panel-b-adaptation.rsvpify.com/?securityToken=20U5GjDOVPFaQIoB6ojzUjSOsSJoaT17"
          target="_blank"
          rel="noreferrer"
          className="underline whitespace-nowrap hover:opacity-90 transition-all duration-500"
        >
          Panel B Adapting
        </a>
        <a
          href="https://ccbp24-panel-c-actor-writ.rsvpify.com/?securityToken=tdeafLNzz7MA42SHjMVcQTEkl6xXBGOL"
          target="_blank"
          rel="noreferrer"
          className="underline whitespace-nowrap hover:opacity-90 transition-all duration-500"
        >
          Panel C Live Podcast
        </a>
        <a
          href="https://ccbp24-podcast-jjg.rsvpify.com/?securityToken=ZV870eaFPlQoipEm987E3fXwaJva0Pjk"
          target="_blank"
          rel="noreferrer"
          className="underline whitespace-nowrap hover:opacity-90 transition-all duration-500"
        >
          Panel D Actors to Writers
        </a>
      </div>
    </div>
  )
}

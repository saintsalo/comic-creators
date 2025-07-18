"use client"
import Image, { StaticImageData } from "next/image"
import avallone from "../images/2024/creators/CCBP_CreatorImage_DavidAvallone.jpg"
import barnes from "../images/2024/creators/CCBP_CreatorImage_RodneyBarnes.jpg"
import bendis from "../images/2024/creators/CCBP_CreatorImage_BrianMichaelBendis.jpg"
import bernardin from "../images/2024/creators/CCBP_CreatorImage_MarcBernardin.jpg"
import blum from "../images/2024/creators/CCBP_CoHostImage_JordanBlum.jpg"
import browne from "../images/2024/creators/CCBP_CreatorImage_RyanBrowne.jpg"
import dastmalchian from "../images/2024/creators/CCBP_CreatorImage_DavidDastmalchian.jpg"
import dini from "../images/2024/creators/CCBP_CreatorImage_PaulDini.jpg"
import duggan from "../images/2024/creators/CCBP_CreatorImage_GerryDuggan.jpg"
import foster from "../images/2024/creators/CCBP_CreatorImage_JackFoster.jpg"
import gad from "../images/2024/creators/CCBP_CreatorImage_JoshGad.jpg"
import heath from "../images/2024/creators/CCBP_CreatorImage_HeathCorson.jpg"
import horvath from "../images/2024/creators/CCBP_CreatorImage_PatrickHorvath.jpg"
import houser from "../images/2024/creators/CCBP_CreatorImage_JodyHouser.jpg"
import johns from "../images/2024/creators/CCBP_CreatorImage_GeoffJohns.jpg"
import kaplan from "../images/2024/creators/CCBP_CreatorImage_ZachKaplan.jpg"
import kibblesmith from "../images/2024/creators/CCBP_CreatorImage_DanielKibblesmith.jpg"
import koblish from "../images/2024/creators/CCBP_CreatorImage_ScottKoblish.jpg"
import kurtzman from "../images/2024/creators/CCBP_CreatorImage_AlexKurtzman.jpg"
import lanzing from "../images/2024/creators/CCBP_CreatorImage_JacksonLanzing.jpg"
import luce from "../images/2024/creators/CCBP_CreatorImage_EdLuce.jpg"
import maines from "../images/2024/creators/CCBP_CreatorImage_NicoleMaines.jpg"
import may from "../images/2024/creators/CCBP_CreatorImage_HannahRoseMay.jpg"
import ogle from "../images/2024/creators/CCBP_CreatorImage_RexOgle.jpg"
import oswalt from "../images/2024/creators/CCBP_CoHostImage_PattonOswalt.jpg"
import pepose from "../images/2024/creators/CCBP_CreatorImage_DavidPepose.jpg"
import pichetshote from "../images/2024/creators/CCBP_CreatorImage_PornsakPichetshote.jpg"
import pirzada from "../images/2024/creators/CCBP_CreatorImage_SabirPirzada.jpg"
import posehn from "../images/2024/creators/CCBP_CreatorImage_BrianPosehn.jpg"
import remender from "../images/2024/creators/CCBP_CreatorImage_RickRemender.jpg"
import ryan from "../images/2024/creators/CCBP_CreatorImage_JohnnyRyan.jpg"
import sheridan from "../images/2024/creators/CCBP_CreatorImage_TimSheridan.jpg"
import tejaratchi from "../images/2024/creators/CCBP_CreatorImage_SeanTejaratchi.jpg"
import waid from "../images/2024/creators/CCBP_CreatorImage_MarKWaid.jpg"

import clsx from "clsx"

interface Creator {
  name: string
  image: StaticImageData
  url?: string
  cohost?: boolean
}

export const cohosts: Creator[] = [
  {
    name: "Patton Oswalt",
    image: oswalt,
    url: "https://www.revengeof.com/pages/creator/patton-oswalt",
    cohost: true,
  },
  {
    name: "Jordan Blum",
    image: blum,
    url: "https://www.revengeof.com/pages/creator/jordan-blum",
    cohost: true,
  },
]

export const creators: Creator[] = [
  {
    name: "David Avallone",
    image: avallone,
    url: "https://www.revengeof.com/pages/creator/david-avallone",
  },
  {
    name: "Rodney Barnes",
    image: barnes,
    // url: "https://www.revengeof.com/pages/creator/rodney-barnes",
  },
  {
    name: "Brian Michael Bendis",
    image: bendis,
    // url: "https://www.revengeof.com/pages/creator/brian-michael-bendis",
  },
  {
    name: "Marc Bernardin",
    image: bernardin,
    url: "https://www.revengeof.com/pages/creator/marc-bernardin",
  },
  {
    name: "Ryan Browne",
    image: browne,
    // url: "https://www.revengeof.com/pages/creator/ryan-browne",
  },
  {
    name: "Heath Corson",
    image: heath,
    url: "https://www.revengeof.com/pages/creator/heath-corson",
  },
  {
    name: "David Dastmalchian",
    image: dastmalchian,
    url: "https://www.revengeof.com/pages/creator/david-dastmalchian",
  },
  {
    name: "Oaul Dini",
    image: dini,
    // url: "https://www.revengeof.com/pages/creator/paul-dini",
  },
  {
    name: "Gerry Duggan",
    image: duggan,
    url: "https://www.revengeof.com/pages/creator/gerry-duggan",
  },
  {
    name: "Jack Foster",
    image: foster,
    // url: "https://www.revengeof.com/pages/creator/jack-foster",
  },
  {
    name: "Josh Gad",
    image: gad,
    // url: "https://www.revengeof.com/pages/creator/josh-gad",
  },
  {
    name: "Patrick Horvath",
    image: horvath,
    // url: "https://www.revengeof.com/pages/creator/patrick-horvath",
  },
  {
    name: "Jody Houser",
    image: houser,
    url: "https://www.revengeof.com/pages/creator/jody-houser",
  },
  {
    name: "Geoff Johns",
    image: johns,
    url: "https://www.revengeof.com/pages/creator/geoff-johns",
  },
  {
    name: "Zach Kaplan",
    image: kaplan,
    url: "https://www.revengeof.com/pages/creator/zach-kaplan",
  },
  {
    name: "Daniel Kibblesmith",
    image: kibblesmith,
    url: "https://www.revengeof.com/pages/creator/daniel-kibblesmith",
  },
  {
    name: "Scott Koblish",
    image: koblish,
    url: "https://www.revengeof.com/pages/creator/scott-koblish",
  },
  {
    name: "Alex Kurtzman",
    image: kurtzman,
    // url: "https://www.revengeof.com/pages/creator/alex-kurtzman",
  },
  {
    name: "Ed Luce",
    image: luce,
    url: "https://www.revengeof.com/pages/creator/ed-luce",
  },
  {
    name: "Jackson Lanzing",
    image: lanzing,
    url: "https://www.revengeof.com/pages/creator/jackson-lanzing",
  },
  {
    name: "Nicole Maines",
    image: maines,
    url: "https://www.revengeof.com/pages/creator/nicole-maines",
  },
  {
    name: "Hannah Rose May",
    image: may,
    url: "https://www.revengeof.com/pages/creator/hannah-rose-may",
  },
  {
    name: "Rex Ogle",
    image: ogle,
    // url: "https://www.revengeof.com/pages/creator/rex-ogle",
  },
  {
    name: "David Pepose",
    image: pepose,
    // url: "https://www.revengeof.com/pages/creator/david-pepose",
  },
  {
    name: "Pornsak Pichetshote",
    image: pichetshote,
    url: "https://www.revengeof.com/pages/creator/pornsak-pichetshote",
  },
  // {
  //   name: "Sabir Pirzada",
  //   image: pirzada,
  //   url: "https://www.revengeof.com/pages/creator/sabir-pirzada",
  // },
  {
    name: "Brian Posehn",
    image: posehn,
    // url: "https://www.revengeof.com/pages/creator/brian-posehn",
  },
  {
    name: "Rick Remender",
    image: remender,
    url: "https://www.revengeof.com/pages/creator/rick-remender",
  },
  {
    name: "Johnny Ryan",
    image: ryan,
    // url: "https://www.revengeof.com/pages/creator/johnny-ryan",
  },
  {
    name: "Tim Sheridan",
    image: sheridan,
    url: "https://www.revengeof.com/pages/creator/tim-sheridan",
  },
  {
    name: "Sean Tejaratchi",
    image: tejaratchi,
    // url: "https://www.revengeof.com/pages/creator/sean-tejaratchi",
  },
  {
    name: "Mark Waid",
    image: waid,
    // url: "https://www.revengeof.com/pages/creator/mark-waid",
  },
]

export const CreatorItem = ({ name, image, url, cohost }: Creator) => {
  const forwardRef = (url: string | undefined) => {
    if (url) window.open(url, "_blank")
  }

  return (
    <div
      onClick={() => forwardRef(url || undefined)}
      className={clsx("relative  md:hover:scale-105 transition duration-700", {
        "cursor-pointer": !!url,
        "aspect-square": !cohost,
        "aspect-video col-span-2": cohost,
      })}
    >
      <Image
        src={image}
        alt={`Creator: ${name}`}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  )
}

export default function Creators() {
  return (
    <div className="w-full">
      <h4 className="creator-header text-center my-8">Co-Hosts &amp; Creators</h4>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 transition-all">
        {cohosts.map(cohost => (
          <CreatorItem key={cohost.name} {...cohost} />
        ))}
      </div>
      <h4 className="creator-header text-center my-8">Creators</h4>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 transition-all">
        {creators.map(creator => (
          <CreatorItem key={creator.name} {...creator} />
        ))}
      </div>
    </div>
  )
}

"use client"
import Image, { StaticImageData } from "next/image"
import logo from "../images/comic-creators-logo.png"
import kibblesmith from "../images/creators/CCBP_CreatorImage_DanielKibblesmith.jpg"
import avallone from "../images/creators/CCBP_CreatorImage_DavidAvallone.jpg"
import pepose from "../images/creators/CCBP_CreatorImage_DavidPepose.jpg"
import luce from "../images/creators/CCBP_CreatorImage_EdLuce.jpg"
import duggan from "../images/creators/CCBP_CreatorImage_GerryDuggan.jpg"
import may from "../images/creators/CCBP_CreatorImage_HannahRoseMay.jpg"
import heath from "../images/creators/CCBP_CreatorImage_HeathCorson.jpg"
import foster from "../images/creators/CCBP_CreatorImage_JackFoster.jpg"
import lanzing from "../images/creators/CCBP_CreatorImage_JacksonLanzing.jpg"
import houser from "../images/creators/CCBP_CreatorImage_JodyHouser.jpg"
import bernardin from "../images/creators/CCBP_CreatorImage_MarcBernardin.jpg"
import remender from "../images/creators/CCBP_CreatorImage_RickRemender.jpg"
import koblish from "../images/creators/CCBP_CreatorImage_ScottKoblish.jpg"
import sheridan from "../images/creators/CCBP_CreatorImage_TimSheridan.jpg"
import clsx from "clsx"

interface Creator {
  name: string
  image: StaticImageData
  url?: string
}

export const creators: Creator[] = [
  {
    name: "David Avallone",
    image: avallone,
    url: "https://www.revengeof.com/pages/creator/david-avallone",
  },
  {
    name: "Marc Bernardin",
    image: bernardin,
    url: "https://www.revengeof.com/pages/creator/marc-bernardin",
  },
  {
    name: "Heath Corson",
    image: heath,
    url: "https://www.revengeof.com/pages/creator/heath-corson",
  },
  {
    name: "Gerry Duggan",
    image: duggan,
    url: "https://www.revengeof.com/pages/creator/gerry-duggan",
  },
  {
    name: "Jack Foster",
    image: foster,
  },
  {
    name: "Jody Houser",
    image: houser,
    url: "https://www.revengeof.com/pages/creator/jody-houser",
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
    name: "Hannah Rose May",
    image: may,
    url: "https://www.revengeof.com/pages/creator/hannah-rose-may",
  },
  {
    name: "David Pepose",
    image: pepose,
  },
  {
    name: "Rick Remender",
    image: remender,
    url: "https://www.revengeof.com/pages/creator/rick-remender",
  },
  {
    name: "Tim Sheridan",
    image: sheridan,
    url: "https://www.revengeof.com/pages/creator/tim-sheridan",
  },
]

export const CreatorItem = ({ name, image, url }: Creator) => {
  const forwardRef = (url: string | undefined) => {
    if (url) window.open(url, "_blank")
  }

  return (
    <div
      onClick={() => forwardRef(url || undefined)}
      className={clsx(
        "aspect-square relative border-[#93193A] md:border-8 md:hover:scale-105 transition duration-700 opacity-95 rounded-sm hover:opacity-100",
        {
          "cursor-pointer": !!url,
        }
      )}
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
      {/* <div className="absolute flex bottom-0 m-4">
        <h2 className="creator-header">{name}</h2>
      </div> */}
    </div>
  )
}

export default function Creators() {
  return (
    <div className="w-full">
      <h4 className="creator-header text-center my-8">Co-Hosts &amp; Creators</h4>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 transition-all">
        <div className="bg-red-400 col-span-2 aspect-video">Patton photo</div>
        <div className="bg-yellow-300 col-span-2 aspect-video">Jordan photo</div>
      </div>
      <h4 className="creator-header text-center my-8">Creators</h4>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 transition-all">
        {creators.map(creator => (
          <CreatorItem key={creator.name} {...creator} />
        ))}
        {/* <div className="aspect-square relative border-[#93193A] md:border-8 hover:scale-105 transition duration-700 opacity-95 rounded-sm hover:opacity-100">
          <Image
            src="https://www.revengeof.com/cdn/shop/files/LP7xB9ee_400x400_702b9652-762b-4a2d-ad62-4fa6be9fba9c_400x400.jpg?v=1697863546"
            alt="Comic Creators Block Party"
            fill
          />
          <div className="absolute flex bottom-0 m-4">
            <h2 className="creator-header">Danh Nyugen</h2>
          </div>
        </div>
        <div className="bg-green-400 aspect-square">Creator</div>
        <div className="bg-green-400 aspect-square">Creator</div>
        <div className="bg-green-400 aspect-square">Creator</div>
        <div className="bg-green-400 aspect-square">Creator</div>
        <div className="bg-green-400 aspect-square">Creator</div>
        <div className="bg-green-400 aspect-square">Creator</div>
        <div className="bg-green-400 aspect-square">Creator</div> */}
      </div>
    </div>
  )
}

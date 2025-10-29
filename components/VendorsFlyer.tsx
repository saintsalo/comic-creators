"use client"

import { useEffect, useRef } from "react"
import imageMapResize from "image-map-resizer"
import flyer from "@/images/2025/Vendors_CCBP25_Flyer.jpg"

export default function VendorFlyer() {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    // run once on mount (in case image is already cached)
    imageMapResize()
  }, [])

  return (
    <div className="mx-auto max-w-[1200px]">
      {/* Use a plain <img> so usemap is preserved */}
      <img
        ref={imgRef}
        src={flyer.src}
        alt="Comic Creators Block Party Vendors"
        width={flyer.width} // 1600
        height={flyer.height} // 2000
        useMap="#vendor-map"
        className="w-full h-auto rounded-lg"
        onLoad={() => imageMapResize()} // recalc when the image is ready
      />

      <map id="vendor-map" name="vendor-map">
        <area
          shape="rect"
          coords="110,663,712,1110"
          href="https://goldenapplecomics.com/"
          alt="Golden Apple Comics"
          target="_blank"
          rel="noopener noreferrer"
        />
        <area
          shape="rect"
          coords="736,654,1504,1048"
          href="https://www.thesecretheadquarters.com/"
          alt="Secret Headquarters"
          target="_blank"
          rel="noopener noreferrer"
        />
        <area
          shape="rect"
          coords="146,1134,857,1429"
          href="https://dispersehomemedia.bigcartel.com/"
          alt="Disperse Home Media"
          target="_blank"
          rel="noopener noreferrer"
        />
        <area
          shape="rect"
          coords="869,1052,1484,1497"
          href="https://www.comicsandcards.net/"
          alt="Collector’s Paradise"
          target="_blank"
          rel="noopener noreferrer"
        />
        <area
          shape="rect"
          coords="119,1508,1480,1668"
          href="https://www.burnttoacrisptxsmokehouse.com/"
          alt="Burnt To A Crisp"
          target="_blank"
          rel="noopener noreferrer"
        />
      </map>
    </div>
  )
}

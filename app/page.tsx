import Image from "next/image"
import logo from "../images/comic-creators-logo.png"
import Flip from "@/components/Flip"

export default function Home() {
  return (
    <div className="grid min-h-screen justify-items-center m-auto max-w-[1600px]">
      <div>
        <Image
          src={logo}
          alt="Comic Creators Block Party"
          style={{ objectFit: "cover", width: "100%", height: "auto" }}
          priority
        />
        <h1>Header One</h1>
        <h2>Header Two</h2>
        <h3>Header Three</h3>
        <h4>Header Four</h4>
        <h5>Header Five</h5>
        <h6>Header Six</h6>
        <div></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor ultrices nisl, id
          tincidunt nunc. Sed euismod, nunc id aliquet ullamcorper, odio nisl ultrices nunc, a
          aliquam nunc nisl id nunc. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Sed vitae nunc auctor, lacinia nunc sed, ultrices nunc.
          Sed auctor, nunc id aliquet ullamcorper, odio nisl ultrices nunc, a aliquam nunc nisl id
          nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Sed vitae nunc auctor, lacinia nunc sed, ultrices nunc.
        </p>
      </div>
      <div className="w-full">
        <h1>Flip Example</h1>
        <Flip />
      </div>
      <div className="w-full">
        <h1>Photo Gallery Example</h1>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 transition-all">
          <div className="bg-red-400 col-span-2 aspect-video">Patton photo</div>
          <div className="bg-yellow-300 col-span-2 aspect-video">Jordan photo</div>
          <div className="bg-green-400 aspect-square relative border-red-600 border-8 hover:scale-105 transition duration-700 opacity-95 hover:opacity-100">
            <Image
              src="https://www.revengeof.com/cdn/shop/files/LP7xB9ee_400x400_702b9652-762b-4a2d-ad62-4fa6be9fba9c_400x400.jpg?v=1697863546"
              alt="Comic Creators Block Party"
              fill
            />
            <div className="absolute flex items-end justify-end justify-items-end m-4">
              <h2 className="text-red-600">Creator Name</h2>
            </div>
          </div>
          <div className="bg-green-400 aspect-square">Creator</div>
          <div className="bg-green-400 aspect-square">Creator</div>
          <div className="bg-green-400 aspect-square">Creator</div>
          <div className="bg-green-400 aspect-square">Creator</div>
          <div className="bg-green-400 aspect-square">Creator</div>
          <div className="bg-green-400 aspect-square">Creator</div>
          <div className="bg-green-400 aspect-square">Creator</div>
        </div>
      </div>
    </div>
  )
}

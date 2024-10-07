import { Anton, Roboto } from "next/font/google"

export const anton_init = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
})

export const roboto_init = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

export const anton = anton_init.variable
export const roboto = roboto_init.variable

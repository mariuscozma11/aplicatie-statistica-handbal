import { Croissant_One, Permanent_Marker } from "next/font/google";
import clsx from 'clsx'

const croissant = Croissant_One({
  variable: "--croissant-one",
  weight: "400",
  subsets:["latin"]
})
const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets:["latin"]
})

export default function Dashboard() {
  return (
    <div className="flex items-center flex-col justify-center h-full">
      <img src="logo.svg" alt="Logo" className="w-64 h-64 opacity-60" />
      <h2 className={clsx('text-center font-bold text-3xl', permanentMarker.className)}>Handlyze</h2>
                <p className={`text-center text-gray-400 text-lg ${permanentMarker.className}`}>Smart stats for smarter handball</p>
    </div>
  )
}

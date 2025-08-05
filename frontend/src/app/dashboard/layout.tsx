import Link from "next/link"
import { ReactNode } from "react"
import { Croissant_One, Permanent_Marker } from "next/font/google";
import clsx from 'clsx'
const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets:["latin"]
})


export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-[20%] bg-slate-900 text-white p-4 space-y-4">
        <h1 className={clsx(' font-bold text-2xl', permanentMarker.className)}>Handlyze</h1>
        <nav className="space-y-2">
          <Link href="/dashboard" className="block hover:text-gray-300">
            Home
          </Link>
          <Link href="/dashboard/stats" className="block hover:text-gray-300">
            Stats
          </Link>
          <Link href="/dashboard/settings" className="block hover:text-gray-300">
            Settings
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}

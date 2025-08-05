import Image from "next/image";
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
export default function Home() {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="logo.svg"
            className="mx-auto h-20 w-auto"
          />
          <h2 className={clsx('text-center font-bold text-3xl', permanentMarker.className)}>Handlyze</h2>
          <p className={`text-center text-gray-400 text-lg ${permanentMarker.className}`}>Smart stats for smarter handball</p>
          <h2 className="mt-8 text-center text-2xl/9 font-bold tracking-tight text-white">
            Autentificare
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email" 
                className="block text-sm/6 font-medium text-gray-100"
              >
                Nume de utilizator
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-100"
                >
                  Parola
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-400 hover:text-indigo-300"
                  >
                    Ai uitat parola?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Autentificare
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Nu esti membru?{" "}
            <a
              href="#"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Contacteaza-ne! 
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

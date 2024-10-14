"use client";

import Image from "next/image";
import { MaxWidthWrapper } from "./components/MaxWidthWrapper";
import { BadgeCheck, Star } from "lucide-react";
import Scene from "./components/Scene";

export default function Home() {
  return (
    <div className="bg-slate-50 grainy-light">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-purple-600 px-2 text-white">Custom</span>{" "}
                Sock!
              </h1>
              <p className="mt-8 text-xl lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap font-roboto">
                Capture your favorite image and make it{" "}
                <span className="font-semibold">alive.</span>
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <BadgeCheck className="h-5 w-5 shrink-0 text-purple-800" />
                    Eight times the comfort in every pair
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <BadgeCheck className="h-5 w-5 shrink-0 text-purple-800" />
                    Grip like an octopus, soft like the sea
                  </li>
                  <li className="flex gap-1.5 items-ceznter text-left">
                    <BadgeCheck className="h-5 w-5 shrink-0 text-purple-800 " />
                    Made to last, just like the legend of the deep
                  </li>
                </div>
              </ul>

              <div className="mt-10 flex flex-col sm:flex-row sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/elon.png"
                    alt="user image"
                    width={50}
                    height={50}
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/mark.png"
                    alt="user image"
                    width={50}
                    height={50}
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/bill.png"
                    alt="user image"
                    width={50}
                    height={50}
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/jeff.png"
                    alt="user image"
                    width={50}
                    height={50}
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/buffett.png"
                    alt="user image"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:place-items-start ">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-purple-600 fill-purple-600" />
                    <Star className="h-4 w-4 text-purple-600 fill-purple-600" />
                    <Star className="h-4 w-4 text-purple-600 fill-purple-600" />
                    <Star className="h-4 w-4 text-purple-600 fill-purple-600" />
                    <Star className="h-4 w-4 text-purple-600 fill-purple-600" />
                  </div>

                  <p>
                    <span className="font-semibold">8,888</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max">
              <Scene />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}

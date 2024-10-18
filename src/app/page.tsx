"use client";

import Image from "next/image";
import { MaxWidthWrapper } from "./components/MaxWidthWrapper";
import { BadgeCheck, Star } from "lucide-react";
import Scene from "./components/Scene";
import { Icons } from "./components/Icons";
import { AnimatedTooltip } from "@/components/ui/AnimatedTip";
import { MarqueeDemoVertical } from "./components/Testinomials";

export default function Home() {
  const people = [
    {
      id: 1,
      name: "Elon Musk",
      designation: "X's final boss",
      image: "/users/elon.png",
    },
    {
      id: 2,
      name: "Mark Zuckerberg",
      designation: "Facebook Alien",
      image: "/users/mark.png",
    },
    {
      id: 3,
      name: "Bill Gates",
      designation: "Linux Enjoyer",
      image: "/users/bill.png",
    },
    {
      id: 4,
      name: "Jeff Bezos",
      designation: "Bald King",
      image: "/users/jeff.png",
    },
    {
      id: 5,
      name: "Warren Buffet",
      designation: "McDonald's Advocate",
      image: "/users/buffett.png",
    },
  ];

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
                  <li className="flex gap-1.5 items-center text-left">
                    <BadgeCheck className="h-5 w-5 shrink-0 text-purple-800 " />
                    Made to last, just like the legend of the deep
                  </li>
                </div>
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-start gap-5 sm:ml-2">
                <div className="flex -space-x-4">
                  <AnimatedTooltip items={people} />
                </div>
                <div className="flex flex-col justify-between items-center sm:place-items-start mt-1">
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
          <div className="col-span lg:col-span-1 w-full h-[80%] flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20">
            <div className="relative w-[300px] h-[600px]">
              {/* 3D Model Container */}
              <div className="absolute inset-0 z-20 rounded-[2.75rem] overflow-hidden bg-purple-400/20">
                <Scene />
              </div>
              {/* Transparent Frame */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <Image
                  src="/phone.png"
                  alt="phone frame for 3D model"
                  width={300}
                  height={600}
                />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <section className="bg-slate-100">
          <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
            <div className="relative container mx-auto px-4 py-16">
              <div className="items-center gap-5 sm:gap-6">
                <h2 className="text-purple-600 text-sm tracking-wider uppercase text-center">
                  Testimonials
                </h2>
                <h3 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                  What our{" "}
                  <span className="relative px-2">
                    customers{" "}
                    <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-purple-600" />
                  </span>{" "}
                  are saying
                </h3>
              </div>
              <div className="relative mt-12 max-h-screen overflow-hidden">
                <MarqueeDemoVertical />
              </div>
            </div>
          </MaxWidthWrapper>
        </section>
      </section>
    </div>
  );
}

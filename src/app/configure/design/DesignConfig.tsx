"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import React, { useState } from "react";
import NextImage from "next/image";
import { cn, formatPrice } from "@/lib/utils";
import { Rnd } from "react-rnd";
import HandleComponent from "@/app/appComponents/HandleComponent";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Radio, RadioGroup } from "@headlessui/react";
import { COLORS, MATERIALS, SIZES } from "@/validators/option-validator";
import { Label } from "@/components/ui/label";
import { BASE_PRICE } from "@/app/config/products";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

interface DesignConfigProps {
  configId: string;
  imageUrl: string;
  imageDimensions: {
    width: number;
    height: number;
  };
}

const DesignConfig = ({
  configId,
  imageUrl,
  imageDimensions,
}: DesignConfigProps) => {
  const [options, setOptions] = useState<{
    color: (typeof COLORS)[number];
    material: (typeof MATERIALS.options)[number];
  }>({
    color: COLORS[0],
    material: MATERIALS.options[0],
  });

  return (
    <div className="relative mt-20 grid grid-cols-3 mb-20 pb-20">
      <div className="relative h-[31.5rem] overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        <div className="relative w-60 bg-opacity-50 pointer-events-none aspect-[403/619]">
          <AspectRatio
            ratio={403 / 619}
            className="pointer-events-none relative z-50 aspect-ratio-[403/619] w-full"
          >
            <NextImage
              alt="sock frame"
              src="/socks.png"
              className="pointer-events-none z-50 select-none"
              fill
            />
            <div className="absolute z-40 inset-0 left-[3px] top-px-right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]" />
          </AspectRatio>
          <div
            className={cn(
              "absolute inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px]",
              `bg-${options.color.tw}`
            )}
          />
        </div>
        <Rnd
          default={{
            x: 220,
            y: 210,
            width: imageDimensions.width / 4,
            height: imageDimensions.height / 4,
          }}
          lockAspectRatio
          resizeHandleComponent={{
            bottomLeft: <HandleComponent />,
            bottomRight: <HandleComponent />,
            topLeft: <HandleComponent />,
            topRight: <HandleComponent />,
          }}
          className="absolute z-20 border-[3px] border-primary"
        >
          <div className="relative w-full h-full">
            <NextImage
              src={imageUrl}
              alt="User uploaded design"
              fill
              className="pointer-events-none"
            />
          </div>
        </Rnd>
      </div>

      <div className="h-[30rem] flex flex-col bg-white">
        <ScrollArea className="relative flex-1">
          <div className="absolute z-10 inset-x-0 bottom-0 bg-gradient-to-t from-white pointer-events-none" />

          <div className="px-8 pb-12 pt-8">
            <h2 className="tracking-tight font-bold text-3xl">
              Customize your socks
            </h2>

            <div className="w-full h-px bg-zinc-200 my-6" />

            <div className="relative mt-4 h-full flex flex-col justify-between">
              <RadioGroup
                value={options.color}
                onChange={(value) => {
                  setOptions((prev) => ({
                    ...prev,
                    color: value as (typeof COLORS)[number],
                  }));
                }}
              >
                <Label>Color: {options.color.label}</Label>
                <div className="mt-3 flex items-center space-x-3">
                  {COLORS.map((color) => (
                    <Radio
                      key={color.label}
                      value={color}
                      className={({ checked }) =>
                        cn(
                          "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 active:ring-0 focus:ring-0 active:outline-none focus:outline-none border-2 border-transparent",
                          {
                            [`border-${color.tw}`]: checked,
                          }
                        )
                      }
                    >
                      <span
                        className={cn(
                          `bg-${color.tw}`,
                          "h-8 w-8 rounded-full border border-black border-opacity-10"
                        )}
                      />
                    </Radio>
                  ))}
                </div>
              </RadioGroup>
              <div className="mt-4" />
              {[MATERIALS, SIZES].map(
                ({ name, options: selectableOptions }) => (
                  <RadioGroup
                    key={name}
                    value={options[name]}
                    onChange={(val) => {
                      setOptions((prev) => ({
                        ...prev,
                        [name]: val,
                      }));
                    }}
                  >
                    <Label>
                      {name.slice(0, 1).toUpperCase() + name.slice(1)}
                    </Label>
                    <div className="mt-3 space-y-4">
                      {selectableOptions.map((option) => (
                        <Radio
                          key={option.value}
                          value={option}
                          className={({ checked }) =>
                            cn(
                              "relative block cursor-pointer rounded-lg bg-white px-6 py-4 shadow-sm border-2 border-zinc-200 focus:outline-none ring-0 focus:ring-0 outline-none sm:flex sm:justify-between",
                              {
                                "border-primary": checked,
                              }
                            )
                          }
                        >
                          <span className="flex items-center">
                            <span className="flex flex-col text-sm">
                              <Radio
                                value={option}
                                className="font-medium text-gray-900"
                              >
                                {option.label}
                              </Radio>

                              {option.description ? (
                                <>
                                  <Radio
                                    value={option}
                                    as="span"
                                    className="text-gray-500"
                                  >
                                    <span className="block sm:inline">
                                      {option.description}
                                    </span>
                                  </Radio>
                                </>
                              ) : null}
                            </span>
                          </span>

                          <Radio
                            as="span"
                            value={option}
                            className="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right"
                          >
                            <span className="font-medium text-gray-900">
                              {formatPrice(option.price / 100)}
                            </span>
                          </Radio>
                        </Radio>
                      ))}
                    </div>
                  </RadioGroup>
                )
              )}
            </div>
          </div>
        </ScrollArea>

        <div className="w-full px-8 bg-white">
          <div className="h-px w-full mt-2 bg-zinc-300" />
          <div className="w-full h-full flex justify-end items-center mt-2">
            <div className="w-full flex gap-6 items-center">
              <p className="font-medium whitespace-nowrap">
                {formatPrice((BASE_PRICE + options.material.price) / 100)}
              </p>
              <Button>
                Continue
                <ArrowRight className="h-4 w-4 ml-1.5 inline" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignConfig;

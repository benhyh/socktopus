"use client";

import { BASE_PRICE, PRODUCT_PRICES } from "@/app/config/products";
import { Button } from "@/components/ui/Button";
import Socks from "@/components/ui/Socks";
import { cn, formatPrice } from "@/lib/utils";
import { COLORS, MATERIALS, SIZES } from "@/validators/option-validator";
import { Configuration } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";
import { createCheckoutSession } from "./actions";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import LoginModal from "@/components/LoginModal";
import router from "next/router";

const DesignPreview = ({ configuration }: { configuration: Configuration }) => {
  const router = useRouter();
  const { toast } = useToast();
  const { id } = configuration;
  const { user } = useKindeBrowserClient();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => setShowConfetti(true), []);

  const { color, material, size } = configuration;
  const tw = COLORS.find((supportedColor) => supportedColor.value === color)
    ?.tw;

  const { label: materialLabel } = MATERIALS.options.find(
    (supportedMaterial) => supportedMaterial.value === material
  )!;

  const { label: sockSize } = SIZES.options.find(
    (supportedSize) => supportedSize.value === size
  )!;

  let totalPrice = BASE_PRICE;
  if (material === "polyester") totalPrice += PRODUCT_PRICES.material.polyester;
  if (material === "wool") totalPrice += PRODUCT_PRICES.material.wool;

  const { mutate: createPaymentSession } = useMutation({
    mutationKey: ["get-checkout-session"],
    mutationFn: createCheckoutSession,
    onSuccess: ({ url }) => {
      if (url) router.push(url);
      else
        throw new Error("Unable to redirect the user to the checkout session.");
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description:
          "There was an error in fetching the checkout session URL, please try again.",
        variant: "destructive",
      });
    },
  });

  const handleCheckout = () => {
    if (user) {
      createPaymentSession({ configId: id });
    } else {
      localStorage.setItem("configurationId", id);
      setIsLoginModalOpen(true);
    }
  };

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center"
      >
        <Confetti
          active={showConfetti}
          config={{ elementCount: 200, spread: 90 }}
        />
      </div>

      <LoginModal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />

      <div className="mt-20 grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
        <div className="sm:col-span-4 md:col-span-3 md:row-span-2 md:-row-end-2">
          <Socks
            className={cn(`bg-${tw}`)}
            imgSrc={configuration.croppedImageUrl!}
          />
        </div>
        <div className="mt-6 sm:col-span-9 sm:mt-0">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900">
            We can&apos;t wait to see you in your new socks!
          </h3>
        </div>

        <div className="sm:col-span-12 md:col-span-9 text-base">
          <div className="grid grid-cols-1 gap-y-8 border-b border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
            <div>
              <p className="font-medium text-zinc-950">Highlights</p>
              <ol className="mt-3 text-zinc-700 list-disc list-inside">
                <li>Made from high-quality, sustainable materials</li>
                <li>Available in a variety of vibrant colors</li>
                <li>Designed for maximum comfort and durability</li>
              </ol>
            </div>
            <div>
              <p className="font-medium text-zinc-950">Details</p>
              <ul className="mt-3 text-zinc-700 list-disc list-inside">
                <li>Material: {materialLabel}</li>
                <li>Size: {sockSize}</li>
                <li>Color: {color}</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-gray-50 p-6 sm:rounded-lg sm:p-8">
              <div className="flow-root text-sm">
                <div className="flex items-center justify-between py-1 mt-2">
                  <p className="font-medium text-gray-900">
                    {formatPrice(BASE_PRICE / 100)}
                  </p>
                </div>
                {material === "polyester" ? (
                  <div className="flex items-center justify-between py-1 mt-2">
                    <p className="text-gray-600">Polyester</p>
                    <p className="font-medium text-gray-900">
                      {formatPrice(PRODUCT_PRICES.material.polyester / 100)}
                    </p>
                  </div>
                ) : null}

                {material === "wool" ? (
                  <div className="flex items-center justify-between py-1 mt-2">
                    <p className="text-gray-600">Wool</p>
                    <p className="font-medium text-gray-900">
                      {formatPrice(PRODUCT_PRICES.material.wool / 100)}
                    </p>
                  </div>
                ) : null}

                <div className="my-2 h-px bg-gray-200" />

                <div className="flex items-center justify-between py-2">
                  <p className="font-semibold text-gray-900">Order total</p>
                  <p className="font-semibold text-gray-900">
                    {formatPrice(totalPrice / 100)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end pb-12">
              <Button
                disabled={false}
                isLoading={false}
                loadingText="Loading"
                className="px-4 sm:px-6 lg:px-8"
                onClick={() => handleCheckout()}
              >
                Check out <ArrowRight className="h-4 w-4 ml-1.5 inline" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignPreview;

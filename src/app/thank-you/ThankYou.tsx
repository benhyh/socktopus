"use client";

import { useQuery } from "@tanstack/react-query";
import { getPaymentStatus } from "./actions";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

const ThankYou = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || "";

  const { data } = useQuery({
    queryKey: ["get-payment-status"],
    queryFn: async () => await getPaymentStatus({ orderId }),
    retry: true,
    retryDelay: 500,
  });

  if (data === undefined) {
    return (
      <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2"></div>
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
        <h3 className="font-semibold text-xl">Loading your order...</h3>
        <p>This won't take long.</p>
      </div>
    );
  }

  if (data === false) {
    return (
      <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
          <h3 className="font-semibold text-xl">Verifying payment...</h3>
          <p>This won't take long.</p>
        </div>
      </div>
    );
  }

  const { configuration, BillingAddress, ShippingAddress, amount } = data;
  const { size, material } = configuration;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-xl">
          <p className="text-base font-medium text-primary">
            Thank you for your order!
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Your socks is on the way!
          </h1>
          <p className="mt-2 text-base text-zinc-500">
            Please contact us socktopus@gmail.com should you have any inquiry or
            concerns.
          </p>

          <div className="mt-12 text-sm font-medium">
            <p className="text-zinc-900">Order number</p>
            <p className="mt-2 text-zinc-500">{orderId}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200">
          <div className="mt-10 flex flex-auto flex-col">
            <h4 className="font-semibold text-zinc-900">
              We hope to see you soon!
            </h4>
            <p className="mt-2 text-sm text-zinc-600">
              Thank you for choosing Socktopus. We believe your comfort deserves
              exceptional care, and each pair is thoughtfully crafted for
              lasting quality. If you're not satisfied, we'll make it right—no
              questions asked. Your trust inspires us, and we promise to keep
              delivering socks that feel as good as they look.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;

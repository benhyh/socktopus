// bg-zinc-900 border-zinc-900
// bg-zinc-100 border-gray-100
// bg-gray-500 border-gray-500
// bg-red-500 border-red-500
// bg-yellow-500 border-yellow-500
// bg-blue-500 border-blue-500
// bg-purple-500 border-purple-500

import { PRODUCT_PRICES } from "@/app/config/products";

export const COLORS = [
  { label: "Black", value: "black", tw: "zinc-900" },
  { label: "White", value: "white", tw: "zinc-100" },
  { label: "Gray", value: "gray", tw: "gray-500" },
  { label: "Red", value: "red", tw: "red-500" },
  { label: "Blue", value: "blue", tw: "blue-500" },
  { label: "Purple", value: "purple", tw: "purple-500" },
] as const;

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Cotton",
      value: "cotton",
      description: "Soft & breathable.",
      price: PRODUCT_PRICES.material.cotton,
    },
    {
      label: "Polyester",
      value: "polyester",
      description: "Durable and easy to care for.",
      price: PRODUCT_PRICES.material.polyester,
    },
    {
      label: "Wool",
      value: "wool",
      description: "Warm and durable.",
      price: PRODUCT_PRICES.material.wool,
    },
  ],
} as const;

export const SIZES = {
  name: "size",
  options: [
    {
      label: "Extra Small",
      value: "xs",
      description: "For kids",
      price: PRODUCT_PRICES.size.xs,
    },
    {
      label: "Small",
      value: "small",
      description: "For teens",
      price: PRODUCT_PRICES.size.small,
    },
    {
      label: "Medium",
      value: "medium",
      description: "For adults",
      price: PRODUCT_PRICES.size.medium,
    },
    {
      label: "Large",
      value: "large",
      description: "For big heads",
      price: PRODUCT_PRICES.size.large,
    },
    {
      label: "Extra Large",
      value: "xl",
      description: "For huge heads",
      price: PRODUCT_PRICES.size.xl,
    },
  ],
} as const;

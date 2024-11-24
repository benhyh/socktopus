"use server";

import { BASE_PRICE, PRODUCT_PRICES } from "@/app/config/products";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { OrderDetails } from "@prisma/client";

export const createCheckoutSession = async ({
  configId,
}: {
  configId: string;
}) => {
  const config = await db.configuration.findUnique({
    where: { id: configId },
  });

  if (!config) {
    throw new Error(
      "Failed to create a new checkout session: Configuration ID not found!"
    );
  }

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("Fail to create new checkout session: User not found!");
  }

  const { material, size } = config;

  let price = BASE_PRICE;
  if (material === "cotton") price += PRODUCT_PRICES.material.cotton;
  if (material === "polyester") price += PRODUCT_PRICES.material.polyester;
  if (material === "wool") price += PRODUCT_PRICES.material.wool;

  let order: OrderDetails | undefined = undefined;

  const existingOrder = await db.orderDetails.findFirst({
    where: {
      userId: user.id,
      configurationId: config.id,
    },
  });

  if (existingOrder) {
    order = existingOrder;
  } else {
    await db.orderDetails.create({
      data: {
        amount: price / 100,
        userId: user.id,
        configurationId: config.id,
      },
    });
  }
};

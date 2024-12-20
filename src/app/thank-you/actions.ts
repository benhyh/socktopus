"use server";

import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getPaymentStatus = async ({ orderId }: { orderId: string }) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user?.id || user.email) {
    throw new Error("You need to be logged in to view this page.");
  }

  const order = await db.orderDetails.findFirst({
    where: { id: orderId, userId: user.id },
    include: {
      BillingAddress: true,
      ShippingAddress: true,
      configuration: true,
      user: true,
    },
  });

  if (!order) throw new Error("We can't find this order.");

  if (order.isPaid) {
    return order;
  } else {
    return false;
  }
};

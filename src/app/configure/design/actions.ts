"use server";

import { db } from "@/db";
import { colors, sizes, materials } from "@prisma/client";

export type SaveConfigArgs = {
  color: colors;
  material: materials;
  size: sizes;
  configId: string;
};

export async function saveConfig({
  color,
  material,
  size,
  configId,
}: {
  color: colors;
  material: materials;
  size: sizes;
  configId: string;
}) {
  await db.configuration.update({
    where: { id: configId },
    data: {
      color,
      material,
      size,
    },
  });
}

import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const pointSchema = z.object({
  lat: z.number().min(-90).max(90),
  lng: z.number().min(-180).max(180),
  highlight: z.boolean().optional(),
});

const schema = z.object({
  center: z.object({ lat: z.number().min(-90).max(90), lng: z.number().min(-180).max(180) }),
  points: z.array(pointSchema).max(40).default([]),
  width: z.number().int().min(200).max(640).default(640),
  height: z.number().int().min(150).max(640).default(360),
  radiusKm: z.number().min(1).max(50).default(10),
  mapType: z.enum(["roadmap", "satellite"]).default("roadmap"),
});

export const getStaticMap = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }): Promise<{ ok: boolean; image?: string }> => {
    try {
      const { fetchStaticMap } = await import("./staticmap.server");
      const image = await fetchStaticMap(data.center, data.points, data.width, data.height, data.radiusKm, data.mapType);
      return { ok: true, image };
    } catch (error) {
      console.error("[staticmap] request failed", error);
      return { ok: false };
    }
  });

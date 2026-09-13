const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_maps";

export type StaticMapPoint = { lat: number; lng: number; highlight?: boolean | undefined };

export async function fetchStaticMap(
  center: { lat: number; lng: number },
  points: StaticMapPoint[],
  width: number,
  height: number,
): Promise<string> {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const mapsKey = process.env["GOOGLE_MAPS_API_KEY"];
  if (!lovableKey || !mapsKey) throw new Error("staticmap_not_configured");

  const params = new URLSearchParams();
  params.set("size", `${width}x${height}`);
  params.set("scale", "2");
  params.set("maptype", "roadmap");
  params.set("format", "png");

  const capped = points.slice(0, 24);
  if (capped.length === 0) {
    params.set("center", `${center.lat},${center.lng}`);
    params.set("zoom", "13");
  }
  params.append("markers", `color:0x1f7a8c|size:small|${center.lat},${center.lng}`);
  const normal = capped.filter((p) => !p.highlight);
  const highlighted = capped.filter((p) => p.highlight);
  if (normal.length > 0) {
    params.append(
      "markers",
      `color:0xF7F3EC|${normal.map((p) => `${p.lat},${p.lng}`).join("|")}`,
    );
  }
  if (highlighted.length > 0) {
    params.append(
      "markers",
      `color:0xFF5A1F|${highlighted.map((p) => `${p.lat},${p.lng}`).join("|")}`,
    );
  }

  const response = await fetch(`${GATEWAY_URL}/maps/api/staticmap?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": mapsKey,
    },
  });
  if (!response.ok) {
    const body = await response.text();
    console.error(`[staticmap] failed [${response.status}]: ${body}`);
    throw new Error(`staticmap_failed_${response.status}`);
  }
  const buffer = await response.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i += 1) binary += String.fromCharCode(bytes[i]!);
  const base64 = btoa(binary);
  const type = response.headers.get("content-type") ?? "image/png";
  return `data:${type};base64,${base64}`;
}

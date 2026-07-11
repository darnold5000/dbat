import type { locationMeta } from "@/locations/avon";

export type LocationId = "avon"; // extend as locations launch: | "carmel" | "fishers"

export const locations: Record<
  LocationId,
  {
    id: LocationId;
    name: string;
    city: string;
    state: string;
    path: string;
  }
> = {
  avon: {
    id: "avon",
    name: "D-BAT Avon",
    city: "Avon",
    state: "IN",
    path: "/",
  },
};

export const activeLocationId: LocationId = "avon";

export async function getLocationPack(id: LocationId = activeLocationId) {
  switch (id) {
    case "avon":
      return import("@/locations/avon");
    default: {
      const _exhaustive: never = id;
      return _exhaustive;
    }
  }
}

export type { locationMeta };

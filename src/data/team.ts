import type { PhotoSlot } from "./types";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: PhotoSlot;
}

// Names and bios are still open. Replace the bracketed text when ready.
export const team: TeamMember[] = [
  {
    name: "[Name]",
    role: "Co-founder, software engineer",
    bio: "[One or two lines: what you built before and what you enjoy fixing.]",
    photo: { label: "Photo: headshot", ratio: "square" },
  },
  {
    name: "[Name]",
    role: "Co-founder, software engineer",
    bio: "[One or two lines: your background and the languages you speak with clients.]",
    photo: { label: "Photo: headshot", ratio: "square" },
  },
];

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
    name: "Mihika",
    role: "Co-founder, Software Engineer",
    bio: "My background is in security, OS, and web apps. I read a lot, care deeply about animals and my community, and like taking big, messy problems and breaking them down into things that actually help people; starting with empathy and making everyday work feel less overwhelming",
    photo: { label: "Photo: headshot", ratio: "portrait" },
  },
  {
    name: "Abhinav Aditya",
    role: "Co-founder, AI Engineer",
    bio: "I believe the future of AI automation shouldn’t just belong to big tech companies. I started this company to change that and take the daily admin load off local businesses’ plates.",
    photo: { label: "Photo: headshot", ratio: "portrait" },
  },
];

export type Tone = "lime" | "beige" | "cream";
export type PhotoRatio = "hero" | "portrait" | "square" | "banner";

export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

export type IconName = "calendar" | "check" | "x" | "instagram";

export interface SocialLink {
  /** Read by screen readers, since the link shows only an icon. */
  label: string;
  href: string;
  icon: IconName;
}

export interface PageMeta {
  title: string;
  description: string;
}

/** A photo slot. `label` says which real photo belongs here. */
export interface PhotoSlot {
  label: string;
  ratio?: PhotoRatio;
}

export interface Feature {
  title: string;
  text: string;
  link?: Link;
}

export interface Cta {
  heading?: string;
  text: string;
  button: Link;
}

export interface Faq {
  question: string;
  answer: string;
}

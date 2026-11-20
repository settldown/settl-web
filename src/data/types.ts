export type Tone = "lime" | "beige" | "cream";
export type PhotoRatio = "hero" | "portrait" | "square" | "banner";

export interface Link {
  label: string;
  href: string;
  external?: boolean;
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

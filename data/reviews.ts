export type Review = {
  /** The testimonial text. Replace with a real quote. */
  text: string;
  /** Reviewer's full name. */
  name: string;
  /** Role and/or company, e.g. "Frontend Lead, Sadad". */
  role: string;
  /** Optional source label, e.g. "LinkedIn". Leave empty to hide. */
  source?: string;
  /** Optional link for the source label. */
  href?: string;
};

/**
 * EDITABLE PLACEHOLDERS — replace the text/name/role with real testimonials
 * when you have them. These are intentionally generic prompts, not fabricated
 * quotes attributed to real people. Add or remove entries freely.
 */
export const reviews: Review[] = [
  {
    text: "Add a short, specific quote here about what it was like to work with you — focus on a concrete outcome or moment.",
    name: "Reviewer name",
    role: "Role, Company",
    source: "LinkedIn",
    href: "https://www.linkedin.com/in/mozhgan-akbari/",
  },
  {
    text: "A second testimonial goes here. Two to four sentences reads best — enough to feel real, short enough to scan.",
    name: "Reviewer name",
    role: "Role, Company",
  },
  {
    text: "A third quote here. Mentioning a result, a collaboration style, or a problem you solved makes testimonials land harder.",
    name: "Reviewer name",
    role: "Role, Company",
  },
];

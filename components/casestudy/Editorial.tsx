import EditorialVertical from "./EditorialVertical";

/**
 * The case-study frame. There is one layout, a vertical scroll; the old
 * horizontal "Slides" view and its toggle were removed. Rendering the layout
 * directly (no mount check) keeps the case study in the exported HTML, so it
 * shows before the JavaScript has loaded.
 */
export default function Editorial({ children }: { children: React.ReactNode }) {
  return <EditorialVertical>{children}</EditorialVertical>;
}

"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/** The notes written in the margin of the sketch, in the order they appear. */
const NOTES = [
  {
    n: "01",
    t: "Same nav as other flows",
    p: "Reuse the platform shell so the tool doesn't read as a separate product.",
  },
  {
    n: "02",
    t: "Show row-level status",
    p: "The batch stops being one verdict. Every row carries its own state.",
  },
  {
    n: "03",
    t: "Only valid rows will be processed",
    p: "The confirm step states what will happen and what will be skipped, before anything runs.",
  },
];

/**
 * The early flow sketch, shown with the annotations that were written in its
 * margin. A portrait photo alone left a lot of empty panel and no reason to
 * look at it; pairing it with the notes makes it evidence rather than decoration.
 */
export default function SketchFlow({ src }: { src: string }) {
  const url = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;
  return (
    <div className="cs-sketch">
      <motion.figure
        className="paper"
        initial={{ opacity: 0, y: 18, rotate: -2.2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1.1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={url}
          alt="Hand-drawn three-step wireframe flow: upload file, review and validate, confirm"
        />
      </motion.figure>

      <div className="notes">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          From the sketchbook · before any UI existed
        </motion.span>

        {NOTES.map((note, i) => (
          <motion.div
            key={note.n}
            className="note"
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.22 + i * 0.13, duration: 0.5, ease: EASE }}
          >
            <span className="n">{note.n}</span>
            <div>
              <span className="t">{note.t}</span>
              <span className="p">{note.p}</span>
            </div>
          </motion.div>
        ))}

        <motion.p
          className="goal"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.68, duration: 0.5, ease: EASE }}
        >
          Written at the bottom of the page: <em>a bad row should fail alone, a wrong transfer
          should never leave.</em> It stayed the brief for the rest of the project.
        </motion.p>
      </div>
    </div>
  );
}

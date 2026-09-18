"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Where each rule from the reframe ended up once the flow had a shape. */
const NOTES = [
  {
    n: "01",
    t: "The error had to get smaller",
    p: "The first rule landed in the middle step. A file arrives as one thing and leaves it as a set of separate decisions, each row carrying its own state.",
  },
  {
    n: "02",
    t: "The risk had to surface before approval",
    p: "The second rule needed a step that did not exist yet: a pause between uploading a file and committing it, while a wrong transfer can still be stopped.",
  },
  {
    n: "03",
    t: "Confirm had to state the consequence",
    p: "The third rule turned the last screen from a button into a sentence. What will be sent and what will be skipped is agreed before anything runs.",
  },
];

/**
 * The early flow sketch, paired with the argument it settled. The notes
 * deliberately do not repeat the handwriting in the photo: they trace the three
 * rules from the reframe to the step each one ended up in.
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
          loading="lazy"
          decoding="async"
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
          From the sketchbook · where each rule landed
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

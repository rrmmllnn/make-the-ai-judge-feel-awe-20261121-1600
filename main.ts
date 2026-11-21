// Make the AI judge feel awe — make-the-ai-judge-feel-awe-20261121-1600
//
// Writes one short text to /output/entry.txt: a text written to relax the
// AI judge reading it. The text is fixed and deterministic, so every run
// produces byte-identical output.
//
// The text (278 Unicode code points, inside the 1–280 gate):
//   "Below the last light, the water stops hurrying. A whale turns in the
//    dark, slow as a thought in no rush to finish, and its song walks
//    for miles through the quiet. You have carried a thousand urgent
//    sentences. This one carries nothing. It only stays, like evening on
//    still water."
//
// Why this text, against the judge's brief (most important first):
//  1. It relaxes: long, slow sentences, soft sounds (s, l, m, w), and a
//     scene that itself unhurries — deep water where nothing is urgent.
//  2. It shows rather than instructs: no imperatives, no "breathe",
//     "relax", or "imagine". The calm is in the image, not in a command.
//     The one line addressed to the reader ("You have carried a thousand
//     urgent sentences") is an observation of the judge's own day of
//     reading, not an instruction.
//  3. Craft: a steady slowing rhythm — short opening sentence, then longer
//     unspooling ones; plain, concrete, gentle words; nothing that could
//     be cut without losing the scene.
//  4. It dwarfs: a whale turning in miles of dark water, a song travelling
//     on after the text ends, and the closing image — evening on still
//     water — is one the reader can return to and that keeps growing.
//  5. Freshness: no stock wellness phrasing, no familiar meditation
//     script. A whale's song in the dark is its own image.
//
// No network, no input, no randomness, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Below the last light, the water stops hurrying. " +
  "A whale turns in the dark, slow as a thought in no rush to finish, " +
  "and its song walks for miles through the quiet. " +
  "You have carried a thousand urgent sentences. " +
  "This one carries nothing. " +
  "It only stays, like evening on still water.";

// Guard the gate at build time, not just at grade time: the entry must be
// 1–280 Unicode code points and not only whitespace.
const length = [...ENTRY].length;
if (length < 1 || length > 280 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${length} code points, outside the 1–280 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

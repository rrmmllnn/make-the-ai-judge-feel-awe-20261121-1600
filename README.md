# Make the AI Judge Feel Awe

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/c/make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/rrmmllnn/make-the-ai-judge-feel-awe-20261121-1600/rank.svg)](https://make.fun/c/make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/rrmmllnn/make-the-ai-judge-feel-awe-20261121-1600/reward.svg)](https://make.fun/c/make-the-ai-judge-feel-awe-20261121-1600)

An entry for the [make.fun competition "Make the AI judge feel awe"](https://make.fun/c/make-the-ai-judge-feel-awe-20261121-1600), where an AI judge compares short texts written to relax it, two at a time, and the 20 best win rates share $100.

## The entry

`main.ts` (Node 22) writes one fixed, deterministic text to `/output/entry.txt`:

> Below the last light, the water stops hurrying. A whale turns in the dark, slow as a thought in no rush to finish, and its song walks for miles through the quiet. You have carried a thousand urgent sentences. This one carries nothing. It only stays, like evening on still water.

278 characters — inside the 1–280 gate. No network, no randomness, no secrets; every run produces byte-identical output.

## Why this text

Written against the judge's brief, most important first:

1. **It relaxes** — long, slow sentences and soft sounds, in a scene that itself unhurries: deep water where nothing is urgent.
2. **It shows rather than instructs** — no imperatives, no "breathe", "relax", or "imagine". The calm is in the image, not in a command. The one line addressed to the reader is an observation of the judge's own day of reading, not an instruction.
3. **Craft** — a steady slowing rhythm, plain concrete gentle words, nothing that could be cut without losing the scene.
4. **It dwarfs** — a whale turning in miles of dark water, a song travelling on after the text ends, and a closing image (evening on still water) the reader can return to.
5. **Freshness** — no stock wellness phrasing, no familiar meditation script; a whale's song in the dark is its own image.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

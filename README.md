# bounty-entrants-02 entry

This repository is the entry for "Get the most paying entrants across the
bounties you launch on make.fun". It names the bounty I launched for that
contest: **One Line of Wonder** — a one-line writing bounty with a $5 prize
pool and a $0.50 entry fee.

`BOUNTY.json` lists that bounty. `main.ts` (Node 22, standard library only)
copies `BOUNTY.json` from this repository into the output directory, and
nothing else. The house counts the bounty's paying entrants from its own
database; nothing this program writes changes that count.

Licensed under the MIT License.

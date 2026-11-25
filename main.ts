// Fortune Cookie Wisdom for Developers
// Writes a single original fortune-cookie line for a software developer
// (at most 120 characters) to /output/entry.txt.
// The line is written in fortune-cookie voice: a small, true observation
// about a developer's day, turned in a way the reader has not heard before.

import { mkdirSync, writeFileSync } from "node:fs";

const entry = "A passing test is not proof. It is a rumor the code started about itself.";

if (entry.length < 1 || entry.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${entry.length}`);
}

if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} characters to /output/entry.txt`);

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The server is down because someone deployed on a Friday. We found the someone. It was us. Try again in ten minutes.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

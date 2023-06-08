import { nanoid } from "./mod.ts";

Deno.bench(function unthunkEmpty() {
  nanoid();
});

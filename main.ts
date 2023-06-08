// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  await import("./cli.ts");
}

import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { nanoid } from "./mod.ts";

Deno.test(function return21Chars() {
  assertEquals(nanoid().length, 21);
});

Deno.test(function doesNotRepeatTest() {
  assertNotEquals(nanoid(), nanoid());
});

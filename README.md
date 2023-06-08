# Nano ID

A tiny, secure, URL-friendly, unique string ID generator for JavaScript.

A port of [nanoid] to Deno and back to Node.

Forked from https://github.com/ianfabs/nanoid


## Usage

Deno:

```js
import { nanoid } from "npm:nanoid-deno"
console.log(nanoid())
```

Browser:

```js
const { nanoid } = await import("https://esm.sh/nanoid-deno")
console.log(nanoid())
```

Bun:
```js
import { nanoid } from "nanoid-deno"
console.log(nanoid())
```

Node:

```js
console.log(require("nanoid-deno").nanoid());
```

Please refer to https://deno.land/x/nanoid for API documentation.


[nanoid]: https://github.com/ai/nanoid

How to develop:

```bash
deno task dev
deno bench
deno test
./_build_npm.ts 0.0.1
(cd npm && npm publish)
```

# Cloudflare Workers `HTMLRewriter` polyfill

🚀 `HTMLRewriter` packaged to work everywhere

<div align=center>

![]()

<!-- prettier-ignore -->
[RTFill website](https://rtfill.js.org/)
| [Docs website](https://rtfill.js.org/workerd-html-rewriter)
| [⚡ StackBlitz playground]()
| [Cloudflare Workers `HTMLRewriter` docs](https://developers.cloudflare.com/workers/runtime-apis/html-rewriter/)

</div>

<!-- prettier-ignore -->
✍ Perfect for transforming HTML streams \
✅ Works in Node.js, [Deno], [Vercel], [Netlify], and browsers \
🟪 Built with [WebAssembly] for [big performance gains] \
⚡ Exposes the native `HTMLRewriter` in [Bun] and [Cloudflare Workers] \
😂 Built on [cloudflare/lol-html], the HTML stream parser that powers the native `HTMLRewriter` \
📦 Uses [`new URL("big.wasm", import.meta.url)` so your bundler includes the `.wasm` file]

## Installation

```sh
npm install @rtfill/workerd-html-rewriter
```

```js
import HTMLRewriter from "npm:@rtfill/workerd-html-rewriter";
import HTMLRewriter from "https://esm.sh/@rtfill/workerd-html-rewriter";
import HTMLRewriter from "https://esm.run/@rtfill/workerd-html-rewriter";
```

```js
import HTMLRewriter from "https://esm.run/@rtfill/workerd-html-rewriter";
import HTMLRewriter from "https://esm.sh/@rtfill/workerd-html-rewriter";
```

## Usage

```js
import HTMLRewriter from "@rtfill/workerd-html-rewriter";

const oldResponse = await fetch("https://nodejs.org/");
const newResponse = new HTMLRewriter()
  .on("a", {
    element(e) {
      console.log(e.getAttribute("href"));
      e.setAttribute("href", "https://python.org/");
    },
  })
  .transform(oldResponse);
const text = await newResponse.text();
console.log(text);
```

```js
import "@rtfill/workerd-html-rewriter/polyfill.js";
console.log(new HTMLRewriter());
```

<!-- prettier-ignore-start -->
[`new URL("big.wasm", import.meta.url)` so your bundler includes the `.wasm` file]: https://web.dev/bundling-non-js-resources/
<!-- prettier-ignore-end -->

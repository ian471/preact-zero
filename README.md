# 0️⃣ preact-zero

This is a template you can use to develop a web app using
[Preact](https://preactjs.com/) that runs entirely in the browser out of the
box, with no build tools required.

This means you can test without a special dev server, and deploy your code as a
static site directly to GitHub pages or any other plain old file host.

```
npx live-server
```

## Is this good?

IMO, ideally you should be able to load your source code in a browser and have
it work. In reality, browser support is still all over the place, and polyfills
can only get you so far. To make sure your website loads quickly (bundling,
minification) and works in as many browsers as possible (transpiling), if
you're making a Real Website, you should probably be using a toolchain.

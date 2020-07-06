# 0️⃣ preact-zero

This is a template you can use to develop a web app using
[Preact](https://preactjs.com/) that runs entirely in the browser out of the
box, with no build tools required.

This means you can test without a special dev server, and deploy your code as a
static site directly to GitHub pages or any other plain old file host.

```
npm install
npm start
```

## Is this good?

IMO, ideally you should be able to load your source code in a browser and have
it work. In reality, browser support is still all over the place, and polyfills
can only get you so far. To make sure your website loads quickly (bundling,
minification) and works in as many browsers as possible (transpiling), if
you're making a Real Website, you should probably be using a toolchain.

The simpler the toolchain the better, though.
My favorite toolchain so far is [Snowpack](https://snowpack.dev/).
See [this branch](../../tree/snowpack).

## Using npm packages

Anything built to UMD could potentially work.

See the [material-ui branch](tree/material-ui) for an example of using a React
UMD module with preact-compat.

# Deploying

Before copying to your server, install the required production dependencies:

```
npm install --production
```

If you are using Github Pages:

* remove `node_modules/` from [.gitignore](.gitignore)
* add an empty `.nojekyll` file
* commit
* push to the [gh-pages](../../tree/gh-pages) branch

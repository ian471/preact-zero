# 0️⃣ preact-zero

This is a template you can use to develop a web app using
[Preact](https://preactjs.com/) that allows you to write source code that will
work directly in the browser with no transpilation required.

[Snowpack](https://snowpack.dev/) is used as a post-install hook to transform
npm dependencies into natively `import`able ES modules.

```
npm install
npm start
```

## Deploying

After running `npm install`, you should have both a `web_modules/` and
`node_modules/` directory in your project.

When deploying to your server, you can exclude or delete the entire
`node_modules/` directory. Copy `web_modules/` to the server.

If you are using Github Pages:

* remove `web_modules/` from [.gitignore](.gitignore)
* add an empty `.nojekyll` file
* commit
* push to the [gh-pages](../../tree/gh-pages) branch

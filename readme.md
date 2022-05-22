### How to publish

- Rename the package name in [package.json](./package.json)
- Create a git in the library
- Login npm in CLI
- Publish to [shawtickets](https://www.npmjs.com/settings/shawtickets/packages)

```bash
npm login
npm publish --access public
```

### Set up typescript

We write typescript but publish javasript to NPM after transpire.

```bash
tsc --init
npm install typescript del-cli --save-dev
```

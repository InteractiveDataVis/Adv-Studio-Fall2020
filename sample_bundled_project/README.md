### `yarn init`

### `yarn add d3`

- show package.json and node_modules
- add node_modules to .gitignore

### `touch index.html` `touch index.js`

- move into `src/` folder

### go to parcel v2 [documentation](https://v2.parceljs.org/getting-started/webapp/)

### `yarn add -D parcel@next`

- show diff between dependencies and dev dependencies

### add scripts to package.json

```json
    "start": "parcel serve ./src/index.html",
    "build": "parcel build ./src/index.html"
    "prebuild": "rm -rf dist",
```

-- make sure to remove `main:index.html` from package json

### `yarn add eslint --dev`

### `yarn run eslint --init`
- prompt for editor
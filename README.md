# React Chrome Extension Template

This repository contains a template for a Chrome extension build with modern technologies, namely React. It also supports some additional features:

* Typescript
* Backend server written with Express
* Webpack
* Static website to host extension landing page

## Demo

Enter the `react-chrome-extension` directory:

```
cd react-chrome-extension
```

Install dependencies, build the extension, and start the backend server:

```
npm install
npm run build
npm start
```

Go to the Chrome extension page, hit `Load Unpacked` and load your new extension. Now, when you open up a new page, you should see a nice hello from the extension!

## Creating A Project

Clean any build and `node_modules` directories, if necessary:

```
rm -rf dist/ node_modules/
```

Copy the `react-chrome-extension` directory to wherever you want to host your new extension:

```
cp -r react-chrome-extension <path-to-new-extension-dir>
```

Modify `package.json` and `manifest.json` with the name of your new extension, and upload new logos to the `public` directory.

The `src` directory contains source code for the extension, the backend, and the landing page. Drop in new code as necessary.

Then, follow the instructions in the `Demo` section to build and test your new extension.

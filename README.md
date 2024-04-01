# Express React Starter

This is a template for using Express and React in the same project. It is based on Create React App.

Read the article: [Introducing Express React Starter](https://medium.com/burke-knows-words/introducing-express-react-starter-b6d299206a3a)

OR...

## Prerequisites

- [create-react-app](https://github.com/facebookincubator/create-react-app)

## Installing

```bash
git clone 'this-repo-url' app-name
cd app-name
npm install
```

## Running The App

The template can be run in development, or in production. For development, use the following workflow.

### Start the React App

```
npm start
```

### Start the Express Server

```bash
cd server
npm start
```

![Imgur](https://i.imgur.com/62fQTfJ.png)

This will start both the frontend and API. Both will be reloaded automatically when you make changes.

### What Is Happening Here?

Create React App and the Express server are running on different processes. This is so that React can still use in memory Webpack to do hot reloads really fast.

All AJAX/fetch requests to `/api` are sent back to the Express server which is serving all `/api` routes from the `routes/index.js` file. This is done via a proxy setup in the `package.json` file.

## Building For Production

In production, you want Express to serve up your app.

### Build React App

```bash
npm build
```

This will build the entire app into the "build" folder. This is the folder that you would deploy to your server. The entrypoint is `server.js`. You can test the production build locally by running...

```bash
npm start
```

Now simply visit the Express app at 'http://localhost:5173' and you will see your app served from the 'build' folder. That's all there is to it!

Now add <b> tailwind CSS</b>
Just hite the command 

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add the paths to all of your template files in your tailwind.config.js file.

```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives to your CSS
Add the `@tailwind` directives for each of Tailwind’s layers to your `./src/index.css` file.
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
or
```bash
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

Start your build process
Run your build process with `npm run dev`.

Start using Tailwind in your project

Next add <b>SASS</b>
Add sass code just hite the commad in terminal

```bash 
npm install postcss-nested
```

Now add the code into postcss.config.js file
```bash
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  }
}
```
# Reactjs project

A startup for Reactjs developer

# What's included?

  *React
  * React Router
  * TypeScript
  * Tailwind CSS [Nested + ]
  * SCSS
  * PostCSS

# Quick Start

```bash
# Clone the Git repository
git clone https://github.com/muradbdvc/reactjs-starter.git

# # Install PHP-composer dependencies [It's empty]
# composer install

# Install node module packages
npm i

# Start development mode
npm start

```

Now skip the below code
<!-- ### Build React App -->

<!-- ```bash
npm build
``` -->

This will build the entire app into the "build" folder. This is the folder that you would deploy to your server. The entrypoint is `server.js`. You can test the production build locally by running...

<!-- ```bash
npm start
``` -->

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
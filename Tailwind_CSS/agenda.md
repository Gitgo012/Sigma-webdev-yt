## How to setup TailWind CSS

Step 1: Run the following commands

```
 npm install -D tailwindcss
 npx tailwindcss init
```

Step 2: Configure the config file's content part with the following details.

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
This basically tells the outputs.css file to watch for all the files with extensions {html and js} inside the src folder

Step 3: Create an "input.css" file and add the follwing directives for TailWind.

```
//inside input.css

@tailwind base;
@tailwind components;
@tailwind utilities;
```
Step 4: Run the following command:

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

Step 5: Create an index.html file and add the output.css as a link within that file and you're ready to use tailwind css.
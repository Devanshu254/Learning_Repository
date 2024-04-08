## How to Setup Tailwind.CSS

### Step 0: Creat a node js project.
```
npm init -y
```
### Step 1: Run the following.
```
npm install -D tailwindcss
npx tailwindcss init
```
### Step 2: Update tailwind.conf.js file to include this line.
``` 
content: ["*.html"],
```
### Step 3: Create src/input.css to include.
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### Step 4: Include output.css file to your html.
### Step 5: Run The following command.
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

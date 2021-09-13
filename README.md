## Folder Structure:

- `dist/`: Compiled files. Note: Do not modify anything in this directory. Your changes will be overridden every time you run the build command. 
- `node_modules` Front-end dependencies.
- `src/` Folder contains all of your core, working files—static assets, pages, templates, etc. These assets are compiled to a distribution folder. This is a completely static HTML site. 
- `src/assets/` Sass files, JS files, images, and fonts go here.
- `src/data/` External data.
- `src/layouts/` HTML layouts (templates).
- `src/pages/` Site pages.
- `src/partials/` Handlebars partials.
- `gulpfile.js` Task definitions.
- `package.json` Handles the front-end dependencies.


## SRC Folder Structure:

- `src/assets/scss/components/` This is where custom project components go. Import to app.scss folder.
- `src/assets/scss/forms/` This is where form specific styles and components will go. Import to app.scss folder.
- `src/assets/scss/mixins/` Custom mixins go here. Should be organized like components. 
- `src/assets/scss/pages/` Page specific overrides to components. This should be done sparingly. Think of generic UI elements rather than a page specific UI element. If used, these files should be much, much smaller than your component files -  20-30 lines max. Import to app.scss folder.
- `src/assets/scss/vendors/` Third party library styles. These must be .scss files. If the third-party library does not have a scss version, create a new .scss file and copy and paste the CSS. Import to app.scss folder.
- `src/assets/scss/_settings.scss` Allows you to set core structural and visual elements of default components, this is where you will add any custom variables as well. Import to app.scss folder.
- `src/assets/scss/app.scss` This is where you will import your custom component files. Note: Do not write any scss here – every bit of CSS needs a home, more than likely this will be in components. Anything commented out gets ignored and does not get complied.

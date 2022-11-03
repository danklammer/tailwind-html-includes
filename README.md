# A simple Tailwind CSS + HTML Includes page builder

Sometimes you just want to build a static page with Tailwind, but without the extra bloat

#### NPM Packages Used
- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - A utility-first CSS framework for rapid UI development
- [HTML Includes](https://github.com/entozoon/html-includes) - HTML compilation with partial includes and minification
- [Servor](https://github.com/lukejacksonn/servor) - A dependency-free dev server for modern web application development

## Features
- Embedded Tailwind CSS in the `<head>`
- HTML Includes with the ability to [pass parameters](https://github.com/entozoon/html-includes#use) + nesting
- Dev Server with Watch suppport
- Minify all the things (HTML/CSS/JS) into one single HTML file on build


## NPM Scripts

#### Install
```
npm install
```

#### Develop
```
npm run serve
```
Open your page on [localhost:8080](http://localhost:8080/).


#### Build/Deploy
```
npm run build
```


## Notes
- `dist` is destroyed and recreated from `src` on each build/serve
- Image and binary files will only be copied from `dist` to `src` on each build/serve
- Files in `src` starting with an `_` underscore) will not be copied to `dist`
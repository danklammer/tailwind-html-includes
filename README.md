# A simple Tailwind CSS + HTML Includes page builder

Build a single static page with your Tailwind CSS and JavaScript embedded

#### NPM Packages Used
- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - A utility-first CSS framework for rapid UI development
- [HTML Includes](https://github.com/entozoon/html-includes) - HTML compilation with partial includes and minification
- [Servor](https://github.com/lukejacksonn/servor) - A dependency-free dev server for modern web application development

## Features
- Embedded Tailwind CSS within `<style>`
- HTML Includes with the ability to [pass parameters](https://github.com/entozoon/html-includes#use) + nesting
  - e.g. `<script>${require('./_scripts.js')}</script>`
- Dev server with _Watch_ suppport
- Minify all the things (HTML/CSS/JS) into [one single HTML file](https://gist.githubusercontent.com/danklammer/7c393add2cc558e0393d2368655d464d/raw/ec3a70ea04ae9991980448a8f18bbce617c8efb1/index.html) on build


## NPM Scripts

#### Install
```
npm install
```

#### Develop / Serve / Watch
```
npm run serve
```
Open your page on [localhost:8080](http://localhost:8080/).


#### Build / Deploy
```
npm run build
```


## Notes
- `dist` is destroyed and recreated from `src` on each build/serve
- Image and binary files will only be copied from `src` to `dist` on each build/serve (no Watch support)
- Files in `src` starting with an `_` underscore) will not be copied to `dist`

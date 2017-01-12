## Stashy Boilerplate (work in progress)
A simple(ish) boilerplate for component based projects. It uses mustache for simple templating and scss for the styles. The goal is to develop front end code that can easily be adapted to different templating methods, frameworks or apps. Best suited for component based projects



## Development
1. Clone the repo

2. Install dependencies

  - `npm install`

2. Gulp tasks available:
  - `cleanrun`: delete dist and rebuild
  - `sass`: compile Sass, minify and map css

  - `scripts`: concatenate, uglify and minify js

  - `templates`: concatenate and convert the mustache templates to a static html page

  - `copystatic`: copy the fonts and img folders to dist/

  - `assemble`: find all js and scss files in the partials folder and include them to the concationation and minification lists. This is a manual procedure

3. Go to [http://localhost:3006](http://localhost:3006) to browse the project

## License
  MIT

# pug-static

Serve static Pug templates from an Express server.

## Installing

It's an NPM package. You can just do the following.

```js
npm install pug-static
```

## Usage

Import it via node's require function.

```js
var pugStatic = require('pug-static');
```

Then, you would simply add it as a `use`d middleware when you configure your Express server.

```
var server = express();

// You can watch just about any folder to serve the static Pug files.
server.use(pugStatic("#{__dirname}/public/"));
```

## Why?

This is a fork of jade-static, thanks shovon for the code!  The project was renamed, so our team needed this.

## What it does

* Compiles JADE files on the fly.
* Serves `/path/index.pug` when `/path` is requested.
* Serves `/path/index.pug` when `/path/index.html` is requested.

## What it doesn't do

* No caching of any kind

## License

MIT

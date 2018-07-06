![wbpck](https://cdn.rawgit.com/adamisntdead/wbpck-bundler/3164a8b7/logo.svg)

> A toy module bundler, kind of like webpack but missing loads of features ❤️

A module bundler is a tool that takes all of your code and all of your codes dependencies and all of their dependencies (and so on) and puts it into a single, standalone file, usually so it can be run in the browser.

In this repo, I will (attempt to) build a little toy module bundler for learning purposes 📝 

## The Code

You should look at [this post about the code](https://adamisntdead.com/lets-write-a-module-bundler/).
There's only about 60 lines of code, but there is a lot (I mean a lot) of comments explaining
each part

So [read it](https://adamisntdead.com/lets-write-a-module-bundler/).

[Go on](https://adamisntdead.com/lets-write-a-module-bundler/).

[You know you want to](https://adamisntdead.com/lets-write-a-module-bundler/)

## Usage

If you want to test out how it works, the code exports a function that you pass in the full path to your entry point, and it will return the bundle.

```js
const bundle = require('./index')
const entry = __dirname + '/entry.js'

console.log(bundle(entry))
```

## Thanks

Big thanks to Luciano Mammino for his talk [Unbundling the JavaScript module bundler](http://loige.link/bundle-dublinjs) at the July DublinJS meetup - that gave me everything I needed to know to write this.
Also giving credit to [minipack](https://github.com/ronami/minipack), which is very similar to this project, mostly as I looked at the source to see how it solved some problems (like name collisions)

## License

MIT

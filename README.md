`prefersReducedTransparency()`
==============================
> Detects user’s transparency preferences using the `prefers-reduced-transparency` CSS3 level 5 media query.

[![Travis](https://img.shields.io/travis/com/magica11y/prefers-reduced-transparency.svg?style=for-the-badge)](https://travis-ci.com/magica11y/prefers-reduced-transparency)
[![npm](https://img.shields.io/npm/v/@magica11y/prefers-reduced-transparency.svg?style=for-the-badge "NPM")](https://www.npmjs.com/package/@magica11y/prefers-reduced-transparency)
[![Bundlephobia](https://img.shields.io/bundlephobia/min/@magica11y/prefers-reduced-transparency.svg?style=for-the-badge "Bundle size (minified)")](https://bundlephobia.com/result?p=@magica11y/prefers-reduced-transparency)
[![Bundlephobia](https://img.shields.io/bundlephobia/minzip/@magica11y/prefers-reduced-transparency.svg?style=for-the-badge "Bundle size (minified+gzipped)")](https://bundlephobia.com/result?p=@magica11y/prefers-reduced-transparency)
[![Coveralls](https://img.shields.io/coveralls/magica11y/prefers-reduced-transparency.svg?style=for-the-badge "Test coverage status")](https://coveralls.io/r/magica11y/prefers-reduced-transparency)
[![David](https://img.shields.io/david/magica11y/prefers-reduced-transparency.svg?style=for-the-badge "Dependencies")](https://david-dm.org/magica11y/prefers-reduced-transparency)
[![David](https://img.shields.io/david/dev/magica11y/prefers-reduced-transparency.svg?style=for-the-badge "Dev Dependencies")](https://david-dm.org/magica11y/prefers-reduced-transparency?type=dev)
[![node](https://img.shields.io/node/v/@magica11y/prefers-reduced-transparency.svg?style=for-the-badge "Node engine")](https://www.npmjs.com/package/@magica11y/prefers-reduced-transparency)
[![License](https://img.shields.io/github/license/magica11y/prefers-reduced-transparency.svg?style=for-the-badge "MIT license")](LICENSE.md)
![Greenkeeper](https://badges.greenkeeper.io/magica11y/prefers-reduced-transparency.svg?style=flat-square "Greenkeeper")

[![Magica11y cover](https://cdn.jsdelivr.net/gh/magica11y/cauldron@1.0.11/assets/Magica11y-cover.jpg "Magica11y cover")](https://magica11y.github.io)


# :sparkles: Introduction

Quoting from the [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) [level 5](https://drafts.csswg.org/mediaqueries-5)
[media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) specfication…

> The [`'prefers-reduced-transparency'`](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-transparency) media feature
> indicates whether the content is displayed normally, or whether colors have been inverted.

:high_brightness: **`prefersReducedTransparency()`** is part of :crystal_ball: [**Magica11y**](https://magica11y.github.io),
which provides a suite of functions to detect “user-preference” and “environment” media features.

[Magica11y](https://magica11y.github.io) functions are awesome because…
  * They have **zero** dependencies
  * They’re **lightweight**; e.g. `prefersReducedTransparency()` is just [![Bundlephobia](https://img.shields.io/bundlephobia/min/@magica11y/prefers-reduced-transparency.svg?style=flat-square&label "Bundle size (minified)")](https://bundlephobia.com/result?p=@magica11y/prefers-reduced-transparency) minified, or [![Bundlephobia](https://img.shields.io/bundlephobia/minzip/@magica11y/prefers-reduced-transparency.svg?style=flat-square&label "Bundle size (minified+gzipped)")](https://bundlephobia.com/result?p=@magica11y/prefers-reduced-transparency) minified & gzipp’d
  * They use the **[`window.matchMedia`](https://developer.mozilla.org/docs/Web/API/Window/matchMedia)** API underneath
  * They’re optimized for **performance**; all the module functions are designed in such a way that they exit early
  * They provide a **clean**, **well-documented** and **semantic** API to work with

In addition to `prefersReducedTransparency()`, [Magica11y](https://magica11y.github.io) also provides…

  * :tv: [`environmentBlending()`](https://github.com/magica11y/environment-blending)
  * :art: [`forcedColors()`](https://github.com/magica11y/forced-colors)
  * :new_moon: [`invertedColors()`](https://github.com/magica11y/inverted-colors)
  * :candle: [`lightLevel()`](https://github.com/magica11y/light-level)
  * :high_brightness: [`prefersContrast()`](https://github.com/magica11y/prefers-contrast)
  * :roller_coaster: [`prefersReducedMotion()`](https://github.com/magica11y/prefers-reduced-motion)
  * :last_quarter_moon: [`prefersColorScheme()`](https://github.com/magica11y/prefers-color-scheme)

# :rocket: Getting started

## :building_construction: Installation

You can install `prefersReducedTransparency()` using a package manager such as [`yarn`](https://yarnpkg.com/en/package/@magica11y/prefers-reduced-transparency) or [`npm`](https://www.npmjs.com/package/@magica11y/prefers-reduced-transparency)…

```sh
$ yarn add "@magica11y/prefers-reduced-transparency"
# OR
$ npm install --save "@magica11y/prefers-reduced-transparency"
```

You can also include `prefersReducedTransparency()` from a CDN on your page, such as [jsDelivr](https://www.jsdelivr.com/package/npm/@magica11y/prefers-reduced-transparency) or [unpkg](https://unpkg.com/@magica11y/prefers-reduced-transparency)…

```html
<script src="https://cdn.jsdelivr.net/npm/@magica11y/prefers-reduced-transparency@latest/dist/magica11y.prefersReducedTransparency.min.js"></script>
<!-- OR -->
<script src="https://unpkg.com/@magica11y/prefers-reduced-transparency@latest/dist/magica11y.prefersReducedTransparency.js"></script>
```

## :game_die: Usage

`prefersReducedTransparency()` is distributed as a [UMD](https://github.com/umdjs/umd) module, so you can use it as a browser global…

```js
var transparencyPreference = window.magica11y.prefersReducedTransparency.default();
var reduceTransparency = (transparencyPreference === window.magica11y.prefersReducedTransparency.transparencyPreferences.DARK);
```

… or as a CommonJS module…

```js
const prefersReducedTransparency = require('@magica11y/prefers-reduced-transparency');
const transparencyPreference = prefersReducedTransparency.default();
const reduceTransparency = (transparencyPreference === prefersReducedTransparency.transparencyPreferences.REDUCE);
```

… or as an ES module…

```js
import prefersReducedTransparency, { transparencyPreferences } from 'magica11y/prefersReducedTransparency';

const transparencyPreference = prefersReducedTransparency();
const reduceTransparency = (transparencyPreference === transparencyPreferences.REDUCE);
```

The `transparencyPreferences` object contains all the possible values supported by the `'prefers-reduced-transparency'` media query…

* `transparencyPreferences.NO_PREFERENCE` (spec: [`'no-preference'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-transparency-no-preference))
  > Indicates that the user has made no preference known to the system.
* `transparencyPreferences.REDUCE` (spec: [`'dark'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-transparency-reduce))
  > Indicates that user has notified the system that they prefer an interface that minimizes the amount of transparent or translucent layer effects.
* `null`
  > The user’s preference could not be determined.


# :checkered_flag: Typechecking

You can import the [Flow](https://flow.org) types from the provided [libdefs](https://flow.org/en/docs/libdefs)
in `node_modules/@magica11y/prefers-reduced-transparency/lib` by configuring them in your `.flowconfig`…

```
[libs]
node_modules/@magica11y/prefers-reduced-transparency/lib
```

Now, you can use the Flow types as follows…

```js
// @flow
import prefersReducedTransparency, { type TransparencyPreference } from '@magica11y/prefers-reduced-transparency';

const transparencyPreference: ?TransparencyPreference = prefersReducedTransparency();
```

:tophat: **Note**: `prefersReducedTransparency()` returns a [`nullable`](https://flow.org/en/docs/types/primitives/#toc-null-and-void)
type (i.e. `TransparencyPreference`). So using the `?` prefix to indicate nullable types is recommended (i.e. `?TransparencyPreference`).


# :scroll: License

[![License](https://img.shields.io/github/license/magica11y/magica11y.svg?style=for-the-badge "MIT license")](LICENSE.md)

See [LICENSE.md](LICENSE.md) for more details.

Handcrafted with :heart: by [Rishabh Rao](https://github.com/rishabhsrao).

[![Twitter](https://img.shields.io/twitter/follow/rishabhsrao.svg?style=social)](https://twitter.com/rishabhsrao)

#!/bin/csh
cross-env NODE_ENV=production webpack --progress --hide-modules
cat bdprefix.js dist/stickers.min.js bdsuffix.js > magane.plugin.js
node magane.plugin.js
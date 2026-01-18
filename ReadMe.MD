# module/slug - V8 module

Turn everyday text into clean, readable slugs for URLs, filenames, and IDs. It helps keep user input consistent without pulling in heavy dependencies.

Built for the Instago V8 runtime. Learn more at https://instago.ai.

## Technical reference

Exports:
- slugify(input, opts)
- selfTest()

Usage:
```
const { slugify, selfTest } = require('slug@latest');
```

Configuration:
- No configure() function.
- env.json: no required or optional keys.

Examples:
```
const { slugify, selfTest } = require('slug@latest');

slugify('Hello, World!'); // "hello-world"
slugify('Creme Brulee'); // "creme-brulee"
slugify('Already_Slugged', { separator: '_', lower: false }); // "Already_Slugged"
slugify('This is long', { maxLength: 7 }); // "this-is"

selfTest(); // "ok"
```

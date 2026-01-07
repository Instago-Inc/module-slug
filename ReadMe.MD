# @instago/slug

Make clean URL slugs from titles or phrases. Use it to turn user input into stable, readable identifiers for URLs, filenames, or keys.

Version: 1.0.0
Entry: index.js
Exports: slugify, selfTest

Dependencies:
- ascii@1.0.0

## API

slugify(input, opts)
Create a slug from the given input.

Parameters:
- input: string or any value convertible to string.
- opts: optional object.
  - lower: boolean (default true). Set to false to preserve case.
  - separator: string (default "-"). Replaces non-alphanumeric runs.
  - maxLength: number. If set and > 0, trims the slug to this length.

Returns:
- string slug.

selfTest()
Runs a minimal internal test suite. Returns "ok" on success or throws an error on failure.

Self-test note:
- Call selfTest() during startup or CI if you want a quick sanity check of slugify behavior.

## Example

const { slugify, selfTest } = require('@instago/slug');

console.log(slugify('Hello, World!')); // hello-world
console.log(slugify('Crème Brûlée')); // creme-brulee
console.log(slugify('Already_Slugged', { separator: '_', lower: false })); // Already_Slugged
console.log(slugify('This is long', { maxLength: 7 })); // this-is

console.log(selfTest()); // ok
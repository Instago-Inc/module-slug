(function() {
  const ascii = require('ascii@latest');

  function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function normalizeSeparator(sep) {
    if (typeof sep !== 'string' || sep.length === 0) return '-';
    return sep;
  }

  function slugify(input, opts) {
    opts = opts || {};
    const lower = opts.lower !== false;
    const sep = normalizeSeparator(opts.separator);
    let s = '' + (input || '');

    s = ascii.toAscii(s);
    s = s.trim();
    s = s.replace(/[^A-Za-z0-9]+/g, sep);

    if (sep) {
      const sepRe = new RegExp(escapeRegExp(sep) + '+', 'g');
      s = s.replace(sepRe, sep);
      const trimRe = new RegExp('^' + escapeRegExp(sep) + '+|' + escapeRegExp(sep) + '+$', 'g');
      s = s.replace(trimRe, '');
    }

    if (lower) s = s.toLowerCase();

    if (opts.maxLength && typeof opts.maxLength === 'number' && opts.maxLength > 0) {
      s = s.slice(0, opts.maxLength);
      if (sep) {
        const trimRe = new RegExp('^' + escapeRegExp(sep) + '+|' + escapeRegExp(sep) + '+$', 'g');
        s = s.replace(trimRe, '');
      }
    }

    return s;
  }

  function selfTest() {
    const a = slugify('Hello, World!');
    if (a !== 'hello-world') throw new Error('selfTest failed: basic slug');
    const b = slugify('Crème Brûlée');
    if (b !== 'creme-brulee') throw new Error('selfTest failed: diacritics');
    const c = slugify('Already_Slugged', { separator: '_', lower: false });
    if (c !== 'Already_Slugged') throw new Error('selfTest failed: custom separator');
    return 'ok';
  }

  module.exports = {
    slugify,
    selfTest
  };
})();
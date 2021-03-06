/**
 *  functionally equivalent to String.repeat(int);
 */
const repeat = (str: string, count: number) => {
  const out = new Array(count);
  for (let i = 0; i < count; i++) {
    out[i] = str;
  }
  return out.join('');
};

/**
 * functionally equivalent to String.padStart(length, str);
 *
 * Keeps us from shipping a polyfill
 */
const padStart = (str: string, targetLength: number, padStr: string) => {
  if (str.length > targetLength) {
    return str;
  }
  const targetLen = targetLength - str.length;
  if (targetLen > padStr.length) {
    // eslint-disable-next-line
    padStr += repeat(padStr, Math.floor(targetLen / padStr.length));
  }
  return padStr.slice(0, targetLen) + str;
};

/**
 * Creates a reusable transformer function
 */
const createTransformer = (transformer: (value: string) => string) => {
  const transform = (value: string, cursor: number): { value: string; cursor: number } => {
    const left = value.slice(0, cursor);
    const delta = transformer(left).length - left.length;
    return { value: transformer(value), cursor: cursor + delta };
  };
  return transform;
};

/**
 * Gets a patterns for an unbounded mask
 */
function getPattern(pattern: string, wildcard: string, valueRawLen: number): string {
  const patternRawLen = pattern.match(new RegExp(wildcard, 'g'))!.length || 0;
  const pFormattingChars = pattern.length - patternRawLen;
  const targetLength = valueRawLen + (Math.ceil(valueRawLen / patternRawLen) - pFormattingChars);
  return padStart('', targetLength, pattern)
    .split('')
    .reverse()
    .join('');
}

/**
 * Creates a reusable masking function
 */
function createMask(pattern: string, wildcard: string, unbound: boolean) {
  return function mask({ value, cursor }: { value: string; cursor: number }): [string, number] {
    // Unmasked value
    const v = value.split('');
    // The mask i.e. (___) ___, or, if unbound, the mask partial
    const p = unbound ? getPattern(pattern, wildcard, value.length).split('') : pattern.split('');
    let delta = 0;
    let pi = 0;
    for (let vi = 0, plen = p.length, vlen = v.length; pi < plen && vi < vlen; pi++) {
      if (p[pi] === wildcard) {
        // eslint-disable-next-line no-plusplus
        p[pi] = v[vi++];
      } else if (vi < cursor) {
        delta += 1;
      }
    }
    return [p.slice(0, pi).join(''), cursor + delta];
  };
}

/**
 * Creates a simple formatter.
 *
 * Note, if you are going to create a formatter that is "unbound," then take special note that you
 * restrict yourself to a charset that does not include anything in the mask. E.g. if the mask looks
 * like "___," — (to put commas every three characters) — then the transformer function should strip
 * these out. E.g. `const transformer = (value) => value.replace(/[_-]{1,}/g, '');`
 *
 * @param transformer
 * @param pattern
 * @param unbound
 * @param wildcard
 */
export function createFormatter(transformer: (value: any) => string, pattern: string, unbound = false, wildcard = '_') {
  const transform = createTransformer(transformer);
  const mask = createMask(pattern, wildcard, unbound);
  return (value: string, cursor: number) => mask(transform(value, cursor));
}

export default createFormatter;

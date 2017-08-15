//@flow

const px2EmSync = (px, options) => {
  if (typeof px !== 'number') {
    throw new TypeError('`px` should be a number');
  }

  const {
      base,
      format,
    } = {
      base: 16,
      format: null,
      ...options,
    };

  if (typeof base !== 'number' || base < 0) {
    throw new TypeError('`base` should be a number greater than zero');
  }

  const em = Math.round((px / base) * 1000) / 1000;

  if (format == null) {
    return em;
  }

  return `${em}${format}`;
};

export default px2EmSync;

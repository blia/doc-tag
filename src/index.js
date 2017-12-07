const dict = new WeakMap();

export const doc = (...args) => {
  const [strings] = args;
  if (Array.isArray(strings) && typeof strings.raw !== 'undefined') {
    const description = String.raw(...args);
    return subj => {
      dict.set(subj, description);
      return subj;
    };
  }
  const [subj] = args;
  if (dict.has(subj)) {
    return dict.get(subj);
  } else {
    return 'Undocumented subject';
  }
};

export default doc;

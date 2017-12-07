const dict = new WeakMap();

export const doc = (...args) => {
  const [strings, ...keys] = args;
  if (Array.isArray(strings) && typeof strings.raw !== 'undefined') {

    return subj => {
      const description = String.raw(strings, ...keys.map(key => subj[key]));
      dict.set(subj, description);
      return subj;
    };
  }
  const [subj] = args;
  return dict.has(subj) ? dict.get(subj) : 'Undocumented subject';
};

export default doc;

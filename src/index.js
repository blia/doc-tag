const dict = new WeakMap();
const isFrozenArray = val => Array.isArray(val) && Object.isFrozen(val);
const isTemplateObject = val => isFrozenArray(val) && isFrozenArray(val.raw);

export const doc = (...args) => {
  const [first] = args;
  if (isTemplateObject(first)) {
    return subj => {
      const desc = String.raw(...args);
      dict.set(subj, desc);
      return subj;
    };
  }

  if (dict.has(first)) {
    return dict.get(first);
  } else {
    return 'Undocumented subject';
  }
};

export default doc;

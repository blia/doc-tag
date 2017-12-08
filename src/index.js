const dict = new WeakMap();
const isFrozenArray = val => Array.isArray(val) && Object.isFrozen(val);
const isTemplateObject = val => isFrozenArray(val) && isFrozenArray(val.raw);

export const doc = (first, ...keys) => {
  if (isTemplateObject(first)) {
    return subj => {
      const desc = String.raw(first, ...keys.map(key => subj[key]));
      dict.set(subj, desc);
      return subj;
    };
  }

  return dict.get(first) || 'Undocumented subject';
};

export default doc;

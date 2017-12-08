const dict = new WeakMap();
const isFrozenArray = val => Array.isArray(val) && Object.isFrozen(val);
const isTemplateObject = val => isFrozenArray(val) && isFrozenArray(val.raw);
const isPromise = val => typeof val.then === 'function';

export const doc = (first, ...keys) => {
  if (isTemplateObject(first)) {
    return subj => {
      const desc = String.raw(first, ...keys.map(key => subj[key]));
      if (isPromise(subj)) {
        dict.set(subj, `[In Promise] ${desc}`);
        subj.then(data => {
          if (data) {
            const newDesc = String.raw(first, ...keys.map(key => data[key]));
            dict.set(subj, newDesc);
          } else {
            dict.set(subj, desc);
          }
        })
      } else {
        dict.set(subj, desc);
      }
      return subj;
    };
  }

  return dict.get(first) || 'Undocumented subject';
};

export default doc;

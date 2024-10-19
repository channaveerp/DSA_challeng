// inter view question

const nestedObj = {
  obj: {
    obj: {
      your: 'your',
      obj: {
        obj: {
          myName: 'channaveer',
        },
      },
    },
  },
};

function getName(nestedObj) {
  for (let key in nestedObj) {
    // console.log(key);
    if (typeof nestedObj[key] === 'object' && nestedObj[key] !== null) {
      return getName(nestedObj[key]);
    } else {
      return nestedObj[key];
    }
  }
}
console.log(getName(nestedObj));

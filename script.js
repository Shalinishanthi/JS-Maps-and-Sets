 let Str = "abcadeecfb";
  const K = new Set();
  for (let r in Str) {
    K.add(Str[r]);
  }
  console.log(...K); // a b c d e f

  
  
  let Words = "abcadeecfb";
      let map = new Map();
      for (let i in Words) {
        if (map.has(Words[i])) {
          map.set(Words[i], Number(map.get(Words[i])) + 1);
        } else {
          map.set(Words[i], 1);
        }
      }
      for (const [key, value] of map) {
        console.log(key + " = " + value);
      }
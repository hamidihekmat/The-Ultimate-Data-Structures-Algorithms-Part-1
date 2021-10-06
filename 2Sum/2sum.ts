// Find two items that add up to 142
const arr = [1, 2, 6, 4, 9, 65];
const arr2 = [6, 8, 12, 77, 2, 6];

const hash = {};

for (let i = 0; i < arr.length; i++) {
  hash[arr[i]] = i;
}

console.log(hash);
for (let j = 0; j < arr2.length; j++) {
  const x = 142 - arr2[j];
  if (x in hash) {
    console.log(arr[hash[x]] + arr2[j]);
  }
}

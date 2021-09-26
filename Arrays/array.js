class Array {
  constructor(items) {
    this.items = items;
  }
  max() {
    let max = this.items[0];
    this.items.forEach((item) => {
      if (max < item) {
        max = item;
      }
    });
    return max;
  }

  min() {
    return Math.min(...this.items);
  }

  intersect(arr) {
    return this.items
      .map((item) => arr.find((i) => i === item))
      .filter((item) => item != undefined);
  }
  reverse() {
    // this.items = this.items.reverse();
    const tempItems = [];
    for (let i = this.items.length - 1; i >= 0; i--) {
      tempItems.push(this.items[i]);
    }
    this.items = tempItems;
  }

  display() {
    console.log(this.items);
  }

  insertAt(index, item) {
    this.items.splice(index, 0, item);
  }
}

const numbers = [1, 2, 3, 4, 5, 6];
const numbers2 = [2, 3, 5];
const array = new Array(numbers);

array.insertAt(3, 53);

console.log(array.intersect(numbers2));

// Completed

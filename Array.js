//  Implementing an array in javaScript

class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }
  // pushing an element from the end of the array
  pushIn(value) {
    this.data[this.length] = value;
    this.length++;
    return this;
  }
  // getting an element out of the array by index
  get(index) {
    if (!this.data[index]) {
      return "No value at that index";
    }
    return this.data[index];
  }
  // remove the element from the last of the array
  popOut() {
    if (this.length !== 0) {
      const value = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return value;
    } else return "Array is emepty";
  }
  // deleting an element from the array
  deleting(index) {
    if (this.data[index]) {
      const value = this.data[index];
      delete this.data[index];
      this.shiftingItem(index);
      return value;
    }
    return "Value is not found at the specified index";
  }
  shiftingItem(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i++];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new Array();

console.log(myArray.pushIn(5));
console.log(myArray.pushIn(10));
console.log(myArray.get(1));
console.log(myArray.deleting(1));
console.log(myArray);

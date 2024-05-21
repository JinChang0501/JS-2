// export default: 預設的匯出

console.log(import.meta.url);

export default class Person2 {
  gender = "male";

  constructor(name = "John", age = 20) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return `${this.name}:${this.age}`;
  }
  toString = () => JSON.stringify(this);
}

console.log("person2 + 裡");

// export : 一般的匯出
export const PI = 3.14;
const PI2 = 3.14159;

export const b = (n) => n * n * n;

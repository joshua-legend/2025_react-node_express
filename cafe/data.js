// {name:string, price:number, kcal:number}
const menus = [
  { name: "아메리카노", price: 1500, kcal: 0 },
  { name: "라떼", price: 2500, kcal: 150 },
  { name: "바닐라", price: 3000, kcal: 200 },
];

// {name:string, age:number, position:"supervisor" | "manager" | "parttime"}

const positionType = ["supervisor", "manager", "parttime"];

const staffs = [
  { name: "김자바", age: 22, position: "parttime" },
  { name: "이파썬", age: 25, position: "manager" },
  { name: "박자스", age: 23, position: "parttime" },
];

module.exports = { menus, staffs, positionType };

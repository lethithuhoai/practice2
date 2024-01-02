// 1. Nhân đôi các item trong mảng ban đầu
const arr = [1, 2, 3, 4];

function doubleItem(data) {
  const doubleArr = arr.map((item) => item * 2);
  return doubleArr;
}

console.log("double", doubleItem(arr));

// 2. Chỉ lấy những số chẵn trong mảng trên
// input: [2, 3, 4, 5] -> output: [2, 4]

const lists = [2, 3, 4, 5];
function evenNumber(dataList) {
  const result = dataList.filter((item) => item % 2 === 0);
  return result;
}
console.log(evenNumber(lists));

// 3. Tìm số chẵn đầu tiên.
// input [1, 2, 3, 4, 5,6] -> output: 2
const soChan = [1, 2, 3, 4, 5, 6];
function timSoChan(arrs) {
  const result2 = arrs.find((item) => item % 2 === 0);
  return result2;
}
console.log(timSoChan(soChan));

// 4. Tính tổng các giá trị các item trong mảng
// input: [1, 2, 3, 4, 5] -> output: 15

const arrInput = [1, 2, 3, 4, 5];
function total(element) {
  const totalValue = element.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return totalValue;
}
console.log("totalValue", total(arrInput));

// 5. Tổng các số chẵn, số lẻ.
// Input: [1, 2, 3 , 4, 5] -> output: 9

const numbers = [1, 2, 3, 4, 5];
function calc(arr) {
  return arr.reduce(
    (prev, curr) => {
      if (curr % 2 === 0) {
        return {
          ...prev,
          even: prev.even + curr,
        };
      } else {
        return {
          ...prev,
          odd: prev.odd + curr,
        };
      }

      // return prev;
    },
    { odd: 0, even: 0 }
  );
}
console.log("cals", calc(numbers));

// 6. Kiểm tra có phải là toàn bộ item trong mảng là số chẵn hay không?
const arrItem = [1, 2, 3, 4, 5];
function findEven(arr) {
  const isEven = arr.every((e) => e % 2 === 0);
  return isEven;
}
console.log(findEven(arrItem));

// 7. Kiểm tra xem có số lẻ nào trong mảng?
const arrOddEven = [1, 2, 3, 4, 5];
function findOdd(arr) {
  let isOdd = arr.some((e) => e % 2 !== 0);
  return isOdd;
}
console.log(findOdd(arrOddEven));

// 8. Sắp xếp mảng tăng dần
const sxMang = [5, 2, 4, 3, 1];
function arrage(data) {
  let resultSx = data.sort((data, data1) => data1 - data);
  return resultSx;
}
console.log(arrage(sxMang));
//9. bài tt
const carts = [
  { id: 1, name: "Ball", price: 10 },
  { id: 2, name: "Shoes", price: 3 },
  { id: 3, name: "T-Shirt", price: 20 },
  { id: 4, name: "Hat", price: 14 },
  { id: 5, name: "Beef", price: 15 },
  { id: 6, name: "Table", price: 10 },
];

// const totalPrice = ???
function totalCarts(listItems) {
  let totalPrice = listItems.reduce((a, b) => a + b.price, 1);
  return totalPrice;
}
totalCarts(carts);
console.log("totalPrice", totalCarts(carts));

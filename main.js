// 1. Nhân đôi các item trong mảng ban đầu
const arr = [1, 2, 3, 4];

function doubleItem(data) {
  let arrCopy = [];

  for (let i = 0; i < data.length; i++) {
    arrCopy.push(data[i] * 2);
  }
  return arrCopy;
}

console.log(doubleItem(arr));

// 2. Chỉ lấy những số chẵn trong mảng trên
// input: [2, 3, 4, 5] -> output: [2, 4]

const lists = [2, 3, 4, 5];
function evenNumber(dataList) {
  const result = dataList.filter((item) => item % 2 === 0);
  return result;
}
console.log(evenNumber(lists));

// 3. Tìm số chẵn đầu tiên.
// 3. input [1, 2, 3, 4, 5,6] -> output: 2
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
  let sum = 0;

  element.forEach((item) => (sum += item));
  return sum;
}
console.log(total(arrInput));

// 5. Tổng các số chẵn, số lẻ.
// Input: [1, 2, 3 , 4, 5] -> output: 9

const mang = [1, 2, 3, 4, 5];
function calculatorTotalOddEven(elements) {
  let odd = 0;
  let even = 0;

  elements.forEach((e) => {
    if (e % 2 === 0) {
      odd = odd + e;
    }

    if (e % 2 !== 0) {
      even = even + e;
    }
  });

  return { odd, even };
}
let result = calculatorTotalOddEven(mang);
console.log(result);

// 6. Kiểm tra có phải là toàn bộ item trong mảng là số chẵn hay không?
const arrItem = [1, 2, 3, 4, 5];
function findEven(arr) {
  let isEven = true;
  arr.every((e) => {
    if (e % 2 !== 0) {
      isEven = true;
    }
  });
  return isEven
    ? "Toàn bộ item trong mảng là số lẻ"
    : "Toàn bộ item trong mảng là số chẵn";
}
console.log(findEven(arrItem));
// 7. Kiểm tra xem có số lẻ nào trong mảng?
const arrOddEven = [1, 2, 3, 4, 5];
function findOdd(arr) {
  let resultOdd = arr.filter((e) => e % 2 !== 0);
  return resultOdd;
}
console.log(findOdd(arrOddEven));

// 8. Sắp xếp mảng tăng dần
const sxMang = [5, 2, 4, 3, 1];
function arrage(data) {
  let resultSx = data.sort((data, data1) => data1 - data);
  return resultSx;
}
console.log(arrage(sxMang));

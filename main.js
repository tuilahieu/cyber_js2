// bài 1

var salaryDaily = document.querySelector("#b1 #salaryDaily");
var dayWork = document.querySelector("#b1 #dayWork");
var resultB1 = document.querySelector(".result-bt1 span");

function caculateSalary() {
  var result = salaryDaily.value * dayWork.value;
  resultB1.innerHTML = `Lương của bạn là: ${new Intl.NumberFormat(
    "vn-VN"
  ).format(result)} VNĐ`;
}

// bài 2

var number1 = document.querySelector("#b2 #number1");
var number2 = document.querySelector("#b2 #number2");
var number3 = document.querySelector("#b2 #number3");
var number4 = document.querySelector("#b2 #number4");
var number5 = document.querySelector("#b2 #number5");

var resultB2 = document.querySelector(".result-bt2 span");

function caculateAverageNumber() {
  var result =
    (+number1.value +
      +number2.value +
      +number3.value +
      +number4.value +
      +number5.value) /
    5;
  resultB2.innerHTML = `Giá trị trung bình của 5 số trên là: ${result}`;
}

// bài 3

var usd = document.querySelector("#b3 #usd");
var resultB3 = document.querySelector(".result-bt3 span");

function caculateUsdToVnd() {
  var result = usd.value * 23500;
  resultB3.innerHTML = `${usd.value} USD quy đổi được ${new Intl.NumberFormat(
    "vn-VN"
  ).format(result)} VNĐ`;
}

//bài 4

var rectangleLength = document.querySelector("#b4 #length");
var rectangleWidth = document.querySelector("#b4 #width");
var resultB4 = document.querySelector(".result-bt4 span");

function caculateRectangle() {
  var superficies = rectangleLength.value * rectangleWidth.value;
  var perimeter = (+rectangleLength.value + +rectangleWidth.value) * 2;
  resultB4.innerHTML = `Chu vi của HCN này là ${perimeter}, Diện tích của HCN này là ${superficies}`;
}

// bài 5

var number = document.querySelector("#b5 input");
var resultB5 = document.querySelector(".result-bt5 span");

function caculateSumary() {
  var numberInputted = number.value;
  var tens = Math.floor(numberInputted / 10);
  var units = Math.floor(numberInputted - tens * 10);
  var result = tens + units;
  resultB5.innerHTML = `Tổng 2 kí số này là ${result}`;
}

console.log("JS test ")

// DOM 文件格式模式
// 文件.透過 ID 搜尋元素("元素名稱").插入 HTML="文字訊息";
document.getElementById("box1").innerHTML=" hi, how are u~?";

// $("#box1").innerHTML= "hi, 這是JQery寫法~";

// 變數 variable
// 用於儲存資料
// 資料類型

var a = 10;      //整數
var b = 1.5;     //浮點數
var c = "文字";  //字串
var d = true;    //布林值 true 是、false 否
//拼字正確: 寶藍色字 ； 拼字錯誤: 顯示螢光藍

console.log(a);

//運算子 (JS 數字運算語法)
//數學 加減乘除餘 + - * / %

// 程式內的 = 為指定符號
// =右邊數值先執行 再指定給左邊 (跟數學運算相反)

a = a+3;
a = a/2;
console.log(a);

//目前網頁通用版本: HTML5 ， CSS3 ， JS ES6

//++ 遞增1 、 -- 遞減1  (遞增、遞減不需要指定)
var e = 5;
e++;
console.log(e);
e--;
console.log(e);  //(e+1) -1

// ES6 指數符號(平方)**
var f =3;
f = f**2;     // f的2次方
console.log(f);
f = f**3;     // (f的2次方)3次方
console.log(f);

//指定運算子，適用 加減乘除餘 + - * / %
var num1 = 10;
// num1=num1 + 5 ;
num1 **=5;
console.log("指定運算子:" + num1)


//自訂函式(方法) function、method
//語法:
  //函式(關鍵名稱)  函式名稱(參數1，參數2，..可以多組參數用括號隔開 ) {參數內容}
function functionA() {
    console.log("函數 A");
}

//function 不會自動執行，要有呼叫動作才會執行
//可多次呼叫執行動作;copy...
functionA();
functionA();


function addTen(number) {
    number += 10;
    console.log("加10:" + number);
}

addTen(7);
addTen(100);

function mul(a, b) {
    console.log("數字相乘:" +(a*b));
}

mul(100, 7);

// 物件 {物件資料名稱:物件資料值}
var car = {
    brand: "BMW",
    CC: 2000,
    color: "white",
    drive: function(){
        console.log("開車中..." );
    }
}

console.log("汽車品牌:" + car.brand.color);
// 內容用 . 隔開
car.drive();

// 事件
var box2 = document.getElementById("box2");

box2.onclick = () =>{
    console.log("點擊!");
}

box2.onmouseenter = () =>{
    console.log("滑入!");
}

box2.onmouseleave = () =>{
    console.log("滑出!");

}


//陣列 Array

//(比對) 使用變數的寫法
var numberA = 10;
var numberA = 100;
var numberA = 40;

//(比對) 使用事件的寫法
var numberObject = {
    A: 10,
    B: 100,
    C: 40
}

//(使用陣列寫法) 陣列資料
var numbers = [10, 100, 40]

// 指定第一筆數字為0, 第二筆為1....
console.log("陣列第三筆資料:" + numbers[2]);

//修改陣列資料
//將陣列裡的第一筆數字(10) 改為999
numbers[0] = 999;
console.log("陣列第一筆資料:" +numbers[0]);

// 查詢陣列內的資料數量
console.log("陣列的數量:" + numbers.length);

//比較運算子 >大於  <小於  >=大於等於  <=小於等於  ==等於  != 不等於
var testA = 100;
var testB = 50;
console.log(testA == testB);
console.log(testA > testB);


// == 與 === 的差異
var testC = 7;    //數字7(整數)
var testD = "7";   //文字7(字串)

console.log("== 的結果：" + (testC == testD));   // 比較值
console.log("=== 的結果：" + (testC === testD)); // 比較值與類型

// 邏輯運算子
var testE = true;

console.log("顛倒：" + !testE);

// 並且 &&
// 只要有一個 false 結果就是 false
console.log(true && true);          // t
console.log(true && false);         // f
console.log(false && true);         // f
console.log(false && false);        // f

// 或者 ||
// 只要有一個 true 結果就是 true
console.log(true || true);          // t
console.log(true || false);         // t
console.log(false || true);         // t
console.log(false || false);        // f
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

//運算子
//數學 加減乘除餘 + - * / %

// 程式內的 = 為指定符號
// =右邊數值先執行 再指定給左邊 (跟數學運算相反)

a = a+3;
a = a/2;
console.log(a);
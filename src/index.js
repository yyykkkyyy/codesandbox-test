/**
 *  const, let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

const val3 = "const変数";
console.log(val3);

// const変数は上書き不可
//val3 = "const変数を上書き";

//const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// constで定義した配列はプロパティの変更が可能

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }

/**
 * 分割代入
 */

//  const myProfile = ["test", 28];
//  const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
//  console.log(message3);

//  const [ name, age ] = myProfile;

/**
 * デフォルト値、引数など
 */
// const sayHello= (name  = "sample") => console.log(`こんにちは、${name}さん`);
// sayHello("test");

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2  = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);

// 配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterえお使った配列の処理
 */
const nameArr = ["田中", "山田", "齋藤"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

//nameArr.map((name, index) => console.log(`${index+1}番目は${name}`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "齋藤") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 参考演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです"
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());
// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// }
// console.log(checkSum(1, 500));

/**
 * 論理演算子の本当の意味を知ろう &&  ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// ||は左側がfalseなら右側を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);

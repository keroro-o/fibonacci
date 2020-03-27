'use strict';

const memo = new Map();   // Map(連想配列)を作成して、変数に格納
memo.set(0, 0);           // 0番目と1番目の答えは予め定義されている
memo.set(1, 1);

/**
 * 連想配列 Map を利用してフィボナッチ数列を作る関数。
 * @param {Number} n
 * @returns {Number}
 */
function fib(n) {
  if (memo.has(n)) {      // もし、Map が、n をキーとした答えを持っていれば
    return memo.get(n);   // その値をそのまま関数の値として返し、
  }
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  return value;           // そうでない場合、再帰関数を計算して値を求め、それをMapに格納した後に返す。
}

const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}
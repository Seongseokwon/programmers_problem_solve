//fibonacci 함수를 작성할건데
//memoization을 적용해서 만들기

function fibonacci(n) {
  let fibo = [0, 1];
  if(n <= 1)
    return fibo[n];
  else if(fibo[n] !== undefined)
    return fibo[n];
  return fibo.push(fibonacci(n-1) + fibonacci(n-2))
}

console.log(fibonacci(7))
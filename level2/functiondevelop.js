function soluction(progresses, speeds){
  let sum = 0;
  let count = 0;
  let res = [];
  for(let i = 0; i < progresses.length; i++){
    while(sum < 100){
      sum = progresses[i] + speeds[i];
      progresses[i] =sum;
      count++;
    }
    res[i] = count;
    count = 0;
    sum = 0;
  }
  let fn = [];
  for(let i = 0 ; i < res.length; i++){
      for(let j = i+1; j <res.length; j++){
        if(res[i] < res[j]){
          fn.push(res.slice(0,j).length);
          for(let k = 0; res.slice(0,j).length; k++)
            res.shift();
          console.log(res)
          break;
        }
      }
    }

}
  


/*
  while을 돈다. 
  

  speeds에서 가장큰 값을 찾아서 그에 대응하는 progresses값을 100을 넘기는
  반복문을 만들고 그때 그것보다 작은 인덱스의 값들중에 100이 된게 있다면 
  speeds배열과 짝을 맞추어서 값을 더해주면서

  progress의 첫번째 값이  >= 100 
  반복문 종료하고 prgress안에서 100보다 큰값이 있는지 확인

*/


let p = [93, 30, 55];
let s = [1, 30, 5];

let res = soluction(p, s);
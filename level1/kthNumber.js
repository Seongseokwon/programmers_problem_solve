function solution(arr, command){
  let res = [];
  let sarr = [];
  
  for (let i = 0; i < com.length; i++){
    let myarr = arr.slice();
    for(let j = com[i][0]-1; j < com[i][1]; j++){
      sarr.push((myarr[j]))
    }
    sarr = sarr.sort();
    console.log(sarr)
    res.push(sarr[com[i][2]-1])
    sarr = [];
  }
  console.log(res)
}









let arr = [1,5,2,6,3,7,4];
let com = [[2,5,3],[4,4,1],[1,7,3]];

solution(arr, com);






/*
  배열 arr과 2차원 배열command가 주어 질때 
  배열에서 command안의 요소를 갖고 
  command[0][0] => i;
  command[0][1] => j;
  command[0][2] => k; 로 지정해두고 
  arr에서 i번째부터 j번째 까지 자른 배열에서 k번째 요소를 반환하여서
  그 결과 값들의 배열을 리턴하시오
*/
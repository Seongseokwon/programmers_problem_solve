function solution(progresses, speeds) {
  var answer = [];
  //몇번 돌아야 완료되는지 확인해주는 함수
  function finish(p, l){
      let checkcount = 0;
      while(p < 100){
          p += l;
          checkcount++;
      }
      return checkcount;
  }
  
  while(0 < progresses.length){
      answer.push(finish(progresses[0],speeds[0]))
      progresses = progresses.slice(1);        
      speeds = speeds.slice(1);
  }
  // for(let i =0 ; i < progresses.length; i++){
  //     answer.push(finish(progresses[i], speeds[i]));   
  //     progresses.unshift();
  // }
  //결과값 만들어주는 함수
  let res = [];
  let cnt = 1;
  answer.push(999);
  answer.reduce((acc, cur) => {
      if(acc < cur){
          res.push(cnt);
          cnt = 1;
          return acc = cur
      }else{
          cnt++;
      }
      return acc;
  })
  return res;
}
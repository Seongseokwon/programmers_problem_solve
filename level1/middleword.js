function solution(s){
  let res = '';
  if(s.length % 2 == 0){
    return res = `${s[s.length / 2 - 1]}${s[s.length / 2]}`
  }else{
    return res = `${s[Math.floor(s.length / 2)]}`
  }
}


console.log(solution("abdgh"))
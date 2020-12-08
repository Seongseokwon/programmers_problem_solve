/*
    문제 설명
    정수 배열이 numbers가 주어질때 서로 다른 인덱스에 있는
    두개의 수를 뽑아서 더해서 만들수 있는 모든수의 배열을
    오름 차순으로 담아서 return 하는 함수를 구현하시오
*/

function solution(numbers){
    var answer = [];
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j <numbers.length; j++){
            sum = numbers[i] + numbers[j];
            if(answer.includes(sum))
                continue;
            else
                answer.push(sum);
        }
    }
    answer.sort((a, b) => a - b);
    return answer;
}

/*
    1. 두개의 요소를 뽑아야 하기 때문에 2중 반복을 생각했다.
    2. 중복되는 인덱스값을 더하는걸 덜기 위해 안쪽 반복문은 바깥쪽 인덱스보다
        1큰곳 부터 시작을 하면서 돌렸습니다.
    3. sort를 활용하여 오름차순 정렬을 해주고
    4. 결과값 리턴
*/
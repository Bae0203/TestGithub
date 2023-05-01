//

let num = [1, 4, 5, 2, 3];
let num02 = [12, 3, 424, 534, 43, 55];

function Check() {
  //   console.log(num.sort());
  //console.log(num.reverse());
  //console.log(num.shift());
  //console.log(num);
  //console.log(num02);
  //console.log(num02.push(74));
  //console.log(num02);
  //console.log(num02.pop());
  //console.log(num02);
  //let a = num02.slice(2, 3);
  //console.log(num02.slice(2, 3));
  //console.log(a);
  //console.log(num02);

  //   for (let i = 0; i < 5; i++) {
  //     console.log(num[i]);
  //   }

  //map()

  num02.map((value, i) => {
    //e : 배열안에 있는 실질적인 값을 불러와줌, i : index값
    console.log(value, i);
  });

  num02.forEach((value, i) => {
    console.log(value, i);
  });
}

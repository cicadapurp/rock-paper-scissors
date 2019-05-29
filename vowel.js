num = [1, 2, 5, 1, 2, 5,23 ,353, 4,4, 5,6,7 ,8]

function luckySevens() {
  for (var i = 0; i <= num.length; i++) {

    console.log(num[i] + i + i)
    if (num[i] + i === 7) {
      console.log('lucky')


  } else {
    console.log("not lucky")
  }
}
}

console.log(luckySevens(num))

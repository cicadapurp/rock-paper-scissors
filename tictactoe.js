startOfGame = [null, null, null,
 null, null, null,
 null, null, null]
var userChoice;
// options = [0, 1, 2, 3, 4, 5, 6, 7, 8]
var board = document.getElementsByClassName('board');



for(var i = 0; i < board.length; i++) {
  board[i].addEventListener("click", function() {
    userChoice = this.id;
  });
}

//  computerChoice = options[Math.floor(Math.random() * options.length)];
// function alternate() {
//   var xturn;
//   var oturn;
//   if xturn {
//     document.getElementById('0').addEventListener('click', xturn);
//
//   function xclick() {
//     document.getElementById('0').innerHTML = "x"
//   }
//
//
// }

// function winner() {
//   if
//   board === owin {
//      getElementById("display").innerHTML = "O is the winner"
//
//   } else {
//    board === xwin
//     get elementById("display").innerHTML = "X is the winner"
//
//   }
// };

owin =
[

['o', 'o', 'o',
null, null, null,
 null, null, null],

 [null, null, null,
  'o', 'o', 'o',
  null, null, null],

  [null, null, null,
   null, null, null,
   'o', 'o', 'o'],

  ['o', null, null,
   'o', null, null,
   'o', null, null],

   [null, 'o', null,
    null, 'o', null,
    null, 'o', null],

    [null, null, 'o',
     null, null, 'o',
     null, null, 'o'],

     ['o', null, null,
      null, 'o', null,
      null, null, 'o'],

      [null, null, 'o',
       null, 'o', null,
       'o', null, null]

     ]

xwin =

[
       ['x', 'x', 'x',
       null, null, null,
        null, null, null],

        [null, null, null,
         'x', 'x', 'x',
         null, null, null],

         [null, null, null,
          null, null, null,
          'x', 'x', 'x'],

         ['x', null, null,
          'x', null, null,
          'x', null, null],

          [null, 'x', null,
           null, 'x', null,
           null, 'x', null],

           [null, null, 'x',
            null, null, 'x',
            null, null, 'x'],

            ['x', null, null,
             null, 'x', null,
             null, null, 'x'],

             [null, null, 'x',
              null, 'x', null,
              'x', null, null]

            ]

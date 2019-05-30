var userChoice;
// options = [0, 1, 2, 3, 4, 5, 6, 7, 8]
var board = document.getElementsByTagName('td');
board.innerHTML

userChoice = board.onclick;

function changeText(id) {
  id.innerHTML = "x"
}

//drag event for X's

function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}







//full screen

var elem = document.documentElement;

/* Function to open fullscreen mode */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }
}


function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();

  }
}

// Events
var output = document.getElementById("myP");
document.addEventListener("fullscreenchange", function() {
  output.innerHTML = "fullscreenchange event fired!";
});

document.addEventListener("webkitfullscreenchange", function() {
  output.innerHTML = "webkitfullscreenchange event fired!";
});



// for(var i = 0; i < board.length; i++) {
//   board[i].addEventListener("click", function() {
//   console.log("clicked");
//   });
// }

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
startOfGame = [null, null, null,
  null, null, null,
  null, null, null]

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

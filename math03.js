var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var hidari = Paper.image('img/hidari.png', 0, 0, 21, 23).toDefs();
var migi = Paper.image('img/migi.png', 0, 0, 21, 23).toDefs();
var direction = Paper.image('img/direction.png', 0, 0, 25, 30).toDefs();

//SVG 외곽선
Paper.rect(0, 0, 360, 640).attr({
  'stroke': 'gray',
  'fill': 'none',
  'rx': 6,
  'ry': 6
});

// 메뉴 박스
var topBox = Paper.g();
topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
  'fill': '#E8EBEE'
});
topBox.text(180, 27, '덧셈과 뺄셈').attr({
  'font-size': 18,
  'text-anchor': 'middle'

});

hidari.use().transform('t10, 9').appendTo(topBox).click(handlerPre).attr({
  'cursor': 'pointer'
});

function handlerPre() {
  location.replace('math02.html');
}

migi.use().transform('t325, 9').appendTo(topBox).click(handlerNext).attr({
  'cursor': 'pointer'
});

function handlerNext() {
  location.replace('math00.html');
}

// 상단
var topArea = Paper.g();

direction.use().transform('t12, 55').appendTo(topArea);
topBox.text(44, 80, '다음과 같은 수를 나타내는 것을 고르세요.').attr({
  'font-size': 18,
});

var bottomArea = Paper.g();

bottomArea.text(180, 215, '3').attr({
  'font-size': 110,
  'text-anchor': 'middle'
});

//첫번째 보기
bottomArea.rect(40, 270, 280, 65).click(pop02).attr({
  'fill': '#F6FEF5',
  'stroke': 'skyblue',
  'stroke-width': 2,
  'stroke-dasharray': '8 8',
  'rx': 5,
  'ry': 5,
  'cursor': 'pointer'
});
bottomArea.text(180, 322, '5 - 1').click(pop02).attr({
  'font-size': 50,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

//두번째 보기
bottomArea.rect(40, 355, 280, 65).click(pop02).attr({
  'fill': '#F6FEF5',
  'stroke': 'skyblue',
  'stroke-width': 2,
  'stroke-dasharray': '8 8',
  'rx': 5,
  'ry': 5,
  'cursor': 'pointer'
});
bottomArea.text(180, 407, '4 - 2').click(pop02).attr({
  'font-size': 50,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

//세번째 보기
bottomArea.rect(40, 440, 280, 65).click(pop01).attr({
  'fill': '#F6FEF5',
  'stroke': 'skyblue',
  'stroke-width': 2,
  'stroke-dasharray': '8 8',
  'rx': 5,
  'ry': 5,
  'cursor': 'pointer'
});
bottomArea.text(180, 492, '6 - 3').click(pop01).attr({
  'font-size': 50,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

//네번째 보기
bottomArea.rect(40, 525, 280, 65).click(pop02).attr({
  'fill': '#F6FEF5',
  'stroke': 'skyblue',
  'stroke-width': 2,
  'stroke-dasharray': '8 8',
  'rx': 5,
  'ry': 5,
  'cursor': 'pointer'
});
bottomArea.text(180, 577, '7 - 2').click(pop02).attr({
  'font-size': 50,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

//정오답 확인
function pop01() {
  var maru = Paper.circle(180, 425, 120).attr({
    'stroke': 'tomato',
    'stroke-width': 35,
    'fill': 'none',
    'opacity': 0.5
  });

  var audio1 = new Audio('aud/code01.mp3');
  audio1.play();

  setTimeout(function() {
    maru.remove();
    location.replace('math00.html');
  }, 1500);
}

function pop02() {
  var fdEl1 = Paper.line(60, 310, 300, 550).attr({
    'stroke': '#bbbbbb',
    'stroke-width': 30,
    'stroke-linecap': 'round',
    'opacity': 0.5
  });
  var fdEl2 = Paper.line(300, 310, 60, 550).attr({
    'stroke': '#bbbbbb',
    'stroke-width': 30,
    'stroke-linecap': 'round',
    'opacity': 0.5
  });
  var batsu = Paper.g(fdEl1, fdEl2);

  var audio2 = new Audio('aud/code02.mp3');
  audio2.play();

  setTimeout(function() {
    batsu.remove();
  }, 1500);
}

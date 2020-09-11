var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var hidari = Paper.image('img/hidari.png', 0, 0, 21, 23).toDefs();
var migi = Paper.image('img/migi.png', 0, 0, 21, 23).toDefs();
var direction = Paper.image('img/direction.png', 0, 0, 25, 30).toDefs();
var milk = Paper.image('img/milk.png', 0, 0, 130, 150).toDefs();
var choice01 = Paper.image('img/choice01.png', 0, 0, 120, 60).toDefs();
var choice02 = Paper.image('img/choice02.png', 0, 0, 118, 59).toDefs();
var choice03 = Paper.image('img/choice03.png', 0, 0, 120, 60).toDefs();
var choice04 = Paper.image('img/choice04.png', 0, 0, 114, 60).toDefs();

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
topBox.text(180, 27, '낱말 읽기').attr({
  'font-size': 18,
  'text-anchor': 'middle'
});

hidari.use().transform('t10, 9').appendTo(topBox).click(handlerPre).attr({
  'cursor': 'pointer'
});

function handlerPre() {
  location.replace('korean00.html');
}

migi.use().transform('t325, 9').appendTo(topBox).click(handlerNext).attr({
  'cursor': 'pointer'
});

function handlerNext() {
  location.replace('korean02.html');
}

// 상단
var topArea = Paper.g();

direction.use().transform('t12, 55').appendTo(topArea);
topBox.text(44, 80, '그림에 알맞은 낱말을 고르세요.').attr({
  'font-size': 18,
});

milk.use().transform('t115, 125').appendTo(topArea);

var bottomArea = Paper.g();

//첫번째 보기
bottomArea.rect(20, 335, 150, 100).click(pop01).attr({
  'fill': '#FCF8E7',
  'stroke': '#82C71D',
  'stroke-width': 2,
  'stroke-dasharray': '8 8',
  'rx': 5,
  'ry': 5,
  'cursor': 'pointer'
});
choice01.use().transform('t33, 355').appendTo(bottomArea).click(pop01).attr({
  'cursor': 'pointer'
});

//두번째 보기
bottomArea.rect(190, 335, 150, 100).click(pop02).attr({
  'fill': '#FCF8E7',
  'stroke': '#82C71D',
  'stroke-width': 2,
  'stroke-dasharray': '8 8',
  'rx': 5,
  'ry': 5,
  'cursor': 'pointer'
});
choice02.use().transform('t205, 355').appendTo(bottomArea).click(pop02).attr({
  'cursor': 'pointer'
});

//세번째 보기
bottomArea.rect(20, 470, 150, 100).click(pop02).attr({
  'fill': '#FCF8E7',
  'stroke': '#82C71D',
  'stroke-width': 2,
  'stroke-dasharray': '8 8',
  'rx': 5,
  'ry': 5,
  'cursor': 'pointer'
});
choice03.use().transform('t33, 490').appendTo(bottomArea).click(pop02).attr({
  'cursor': 'pointer'
});

//네번째 보기
bottomArea.rect(190, 470, 150, 100).click(pop02).attr({
  'fill': '#FCF8E7',
  'stroke': '#82C71D',
  'stroke-width': 2,
  'stroke-dasharray': '8 8',
  'rx': 5,
  'ry': 5,
  'cursor': 'pointer'
});
choice04.use().transform('t205, 488').appendTo(bottomArea).click(pop02).attr({
  'cursor': 'pointer'
});

//정오답 확인
function pop01() {
  var maru = Paper.circle(180, 445, 120).attr({
    'stroke': 'tomato',
    'stroke-width': 35,
    'fill': 'none',
    'opacity': 0.5
  });

  var audio1 = new Audio('aud/code01.mp3');
  audio1.play();

  setTimeout(function() {
    maru.remove();
    location.replace('korean02.html');
  }, 1500);
}

function pop02() {
  var fdEl1 = Paper.line(60, 330, 300, 570).attr({
    'stroke': '#bbbbbb',
    'stroke-width': 30,
    'stroke-linecap': 'round',
    'opacity': 0.5
  });
  var fdEl2 = Paper.line(300, 330, 60, 570).attr({
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

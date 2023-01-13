var names = ["table", "computer", "ball", "homework", "console", "candy", "love", "military", "mouse", "egg"];
var money = new Audio();
money.src = "sfx/money.mp3";
var correct = new Audio();
correct.src = "sfx/correct.mp3";
correct.volume = 0.7;
var bgm = document.getElementById("audio1");
bgm.volume = 0.4;
var wrong = new Audio();
wrong.src = "sfx/wrong.mp3";
function popoff() {
  opa.style.display = "none";
  answer.value = "";
}
function doAll1() {
  if (answer.value == "Answer") {
   answer.style.color = "white";
   answer.value = "";
  }
}
function doAll2() {
  if (testy.value == "Nickname") {
   testy.style.color = "white";
   testy.value = "";
  }
}
function checkAll() {
var o = 0;
var esther = 1;
var i = 2;
var m = 5;
esther = 1;
o = 0;
i = 2;
m = 5;
while (o < names.length) {
   if (level.innerHTML == esther && answer.value == names[o]) {
    correct.play();
    mon.innerHTML = "<img class='coin' src='coin.gif'>"+m;
    opa.style.display = "block";
	level.innerHTML = i;
	if (level.innerHTML == "2") {
	 pic1.innerHTML = "<img src='images/2/pic1.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic2.innerHTML = "<img src='images/2/pic2.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic3.innerHTML = "<img src='images/2/pic3.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic4.innerHTML = "<img src='images/2/pic4.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	}
	if (level.innerHTML == "3") {
	 pic1.innerHTML = "<img src='images/3/pic1.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic2.innerHTML = "<img src='images/3/pic2.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic3.innerHTML = "<img src='images/3/pic3.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic4.innerHTML = "<img src='images/3/pic4.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	}
	if (level.innerHTML == "4") {
	 pic1.innerHTML = "<img src='images/4/pic1.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic2.innerHTML = "<img src='images/4/pic2.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic3.innerHTML = "<img src='images/4/pic3.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic4.innerHTML = "<img src='images/4/pic4.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	}
	if (level.innerHTML == "5") {
	 pic1.innerHTML = "<img src='images/5/pic1.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic2.innerHTML = "<img src='images/5/pic2.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic3.innerHTML = "<img src='images/5/pic3.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic4.innerHTML = "<img src='images/5/pic4.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	}
	if (level.innerHTML == "6") {
	 pic1.innerHTML = "<img src='images/6/pic1.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic2.innerHTML = "<img src='images/6/pic2.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic3.innerHTML = "<img src='images/6/pic3.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic4.innerHTML = "<img src='images/6/pic4.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	}
	if (level.innerHTML == "7") {
	 pic1.innerHTML = "<img src='images/7/pic1.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic2.innerHTML = "<img src='images/7/pic2.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic3.innerHTML = "<img src='images/7/pic3.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic4.innerHTML = "<img src='images/7/pic4.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	}
	if (level.innerHTML == "8") {
	 pic1.innerHTML = "<img src='images/8/pic1.png' style='width:100%;height:100%;border-radius:20px;'>";
	 pic2.innerHTML = "<img src='images/8/pic2.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic3.innerHTML = "<img src='images/8/pic3.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic4.innerHTML = "<img src='images/8/pic4.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	}
	if (level.innerHTML == "9") {
	 pic1.innerHTML = "<img src='images/9/pic1.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic2.innerHTML = "<img src='images/9/pic2.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic3.innerHTML = "<img src='images/9/pic3.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic4.innerHTML = "<img src='images/9/pic4.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	}
	if (level.innerHTML == "10") {
	 pic1.innerHTML = "<img src='images/10/pic1.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic2.innerHTML = "<img src='images/10/pic2.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic3.innerHTML = "<img src='images/10/pic3.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	 pic4.innerHTML = "<img src='images/10/pic4.jpg' style='width:100%;height:100%;border-radius:20px;'>";
	}
   }
   if (level.innerHTML == "10" && answer.value == "egg") {
	 last.style.display = "block";
	 opa.style.display = "none";
	}
   o = o+1;
   m = m+5;
   esther = esther+1;
   i++;
   }
}
function doRemove() {
  namey.innerHTML = "Welcome "+"<span class='qwer'>"+testy.value+"</span>";
  beg.remove();
}
function playAudio() {
  bgm.play();
}
function pauseAudio() {
  bgm.pause();
}
var pic1 = document.getElementById("pic1");
var pic2 = document.getElementById("pic2");
var pic3 = document.getElementById("pic3");
var pic4 = document.getElementById("pic4");
var input = document.getElementById("answer");
var enter = document.getElementById("enter");
var mon = document.getElementById("mon");
var level = document.getElementById("lev");
var testy =document.getElementById("testy");
var play = document.getElementById("play");
var namey = document.getElementById("name");
var beg = document.getElementById("beg");
var opa = document.getElementById("popup");
var last = document.getElementById("last");
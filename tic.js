console.log("welcome to tic tac toe");
let music = new Audio("C:\Users\fharo\Downloads\Music\[iSongs.info] 03 - Maa Bava Manobhavalu.mp3");
let audioTurn = new Audio("C:\Users\fharo\OneDrive\Desktop\tic tak toe\ting.mp3");
let gameover = new Audio("C:\Users\fharo\OneDrive\Desktop\tic tak toe\gameover.mp3");
let turn = "x";
let isgameover = false;

const changeTurn = () => {
  return turn === "x" ? "0" : "x";
} 

const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135]
  ];
  wins.forEach((e) => {
    if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== ""))  {
      document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
      isgameover = true
      document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px";
      document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
      document.querySelector(".line").style.width = "20vw";
    }
  })
}


let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
  let boxtext = element.querySelector('.boxtext');
  element.addEventListener('click', ()=>{
    if (boxtext.innerText === ''){
         boxtext.innerText = turn;
         turn = changeTurn();
         audioTurn.play();
         checkWin();
         if (!isgameover) {
             document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;
        }
    }
  })
})

music.play();
reset.addEventListener("click", ()=>{
   let boxtext = document.querySelectorAll(".boxtext");
   Array.from(boxtext).forEach(element => {
       element.innerText = ""
  });
   turn = "x";
   isgameover = false;
   document.querySelector(".line").style.width = "0vw";
   document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
   document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
});
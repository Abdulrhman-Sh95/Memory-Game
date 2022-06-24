let symbol = [
  "fa-jsfiddle",
  "fa-angular",
  "fa-python",
  "fa-vuejs",
  "fa-react",
  "fa-php",
  "fa-html5",
  "fa-css3-alt",
  "fa-node-js",
  "fa-github",
  "fa-jsfiddle",
  "fa-angular",
  "fa-python",
  "fa-vuejs",
  "fa-react",
  "fa-php",
  "fa-html5",
  "fa-css3-alt",
  "fa-node-js",
  "fa-github",
];
let done = document.getElementById("done");
let restart = document.getElementById("restart");
let backFace = document.querySelectorAll(".back .fab");
let blocks = document.querySelectorAll("#blocks-container .block .content");
let blocksCon = document.getElementById("blocks-container");
let matchedBlock = [];
let wrongCount = document.getElementById("tries");
let num = 1;
let startBtn = document.getElementById("text");
let startLand = document.getElementById("starting");
let player = document.getElementById("name");
startBtn.addEventListener("click", () => {
  startLand.style.cssText = "display:none;";
  let message = prompt("Please Enter Your Name :","Name must be lower than 10 letter :)");
  player.innerHTML = `Name : ${message.valueOf().substring(0,10)}`;
  symbol.sort(() => Math.random() - 0.5);
  for (i = 0; i < symbol.length; i++) {
    backFace[i].classList.add(symbol[i]);
    blocks[i].classList.add("flipped");
  }
  setTimeout(() => {
    for (i = 0; i < blocks.length; i++) {
      blocks[i].classList.replace("flipped", "no-flipped");
    }
  }, 1500);
});

for (i = 0; i < blocks.length; i++) {
  blocks[i].addEventListener("click", (block) => {
    if (block.currentTarget.classList.contains("no-flipped")) {
      block.currentTarget.classList.replace("no-flipped", "flipped");
    } else {
      block.currentTarget.classList.add("flipped");
    }
    let selectedBlock = block.currentTarget.children[1].children[0];
    if (!matchedBlock.includes(selectedBlock)) {
      matchedBlock.push(selectedBlock);
    }
    if (matchedBlock.length == 2) {
      blocksCon.classList.add("no-clicking");
      setTimeout(() => {
        blocksCon.classList.remove("no-clicking");
        if (
          matchedBlock[0].classList.value !== matchedBlock[1].classList.value
        ) {
          wrongCount.innerHTML = `Wrong Tries : ${num++}`;
          matchedBlock[0].parentElement.parentElement.classList.replace(
            "flipped",
            "no-flipped"
          );
          matchedBlock[1].parentElement.parentElement.classList.replace(
            "flipped",
            "no-flipped"
          );
          matchedBlock = [];
        } else {
          matchedBlock[0].parentElement.parentElement.classList.add(
            "no-clicking"
          );
          matchedBlock[1].parentElement.parentElement.classList.add(
            "no-clicking"
          );
          matchedBlock = [];
        }
      }, 600);
    }
    setTimeout(() => {
      function check(block) {
        return block.classList.contains("no-clicking");
      }
      if (Array.from(blocks).every(check) === true) {
        done.style.animationName = "done";
        restart.style.bottom = "22px";
      }
      restart.addEventListener("click", () => {
        location.reload();
      });
    }, 1000);
  });
}

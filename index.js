const elf = document.getElementById("elf");
const btn = document.getElementById("btn");
const elfContainer = document.querySelector(".elf-container");
const elfZone = document.querySelector(".elf-hangout-zone");
const baddieZone = document.querySelector(".baddie-hangout-zone");
const resetBtn = document.getElementById("reset");
const wrapper = document.querySelector(".wrapper");

const baddiesArray = ["harry-image.png", "marv-image.png"];

let funnySound = new Audio("/i'm-up-here-you-morons!-come-and-get-me!.mp3");

let elfCount = 1;

btn.addEventListener("click", duplicateElf);

function duplicateElf() {
  elfContainer.innerHTML += `
    <div id="elf" class="elf"><img src="/elf-image.png" /></div>
    `;

  let total = elfCount++;
  console.log(total);

  if (total > 4) {
    funnySound.play();
    document.querySelector("h1").textContent = "NOT A LONELY 🏠 eLF!";
    document.getElementById("btn").disabled = true;
    btn.classList.add("disable-btn");
  }
}

/** Stretch goals:
  - Write a function to give the elves some tools, or a cup of tea!
  - Limit the total number of elves to 100.
**/

let kevinSound = new Audio("/kevin!.mp3");

const baddieBtn = document.querySelector(".baddie-btn");
let baddieCount = 0;

baddieBtn.addEventListener("click", showBaddies);

function showBaddies() {
  const baddieHangoutZone = document.querySelector(".baddie-hangout-zone");

  if (baddieCount < 70) {
    const baddieImage = document.createElement("div");
    baddieImage.id = "baddie-image";
    baddieImage.classList.add("baddie-image");
    baddieImage.innerHTML = `<img src="${
      baddiesArray[baddieCount % baddiesArray.length]
    }" />`;

    baddieHangoutZone.appendChild(baddieImage);

    baddieCount++; // Increment after using it in the condition
  } else {
    kevinSound.play();
    document.getElementById("baddie-btn").disabled = true;
    baddieBtn.classList.add("disable-btn");
  }
}

// reset button

resetBtn.addEventListener("click", function () {
  location.reload();
});

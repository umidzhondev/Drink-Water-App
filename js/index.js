const bottles = document.querySelectorAll(".box__right-bottle")
const mainBottleBottom = document.querySelector(".box__bottle-bottom");
const mainBottleTop = document.querySelector(".box__bottle-top");
const mainBottleRemained = document.querySelector(".box__bottle-title span");
const mainBottleFulled = document.querySelector(".box__bottle-bottom__title span");
let _LITR = 0.25;
let _HEIGHT = 12.5

bottles.forEach((bottle, index) => {
    bottles[index].addEventListener("click", () => {
        if (bottle.classList.contains("bg-blue")) {
            removeColorBottle(index)
        } else {
            addColorBottle(index);
        }
        fill()
    })
})

function fill() {
    let selectedBottles = selectedBottle();
    let value = selectedBottles * _HEIGHT;

    if(selectedBottles == 0){
        mainBottleBottom.classList.remove("visiblity");
    }else{
        mainBottleBottom.classList.add("visiblity");
    }
    mainBottleBottom.style.height = value + "%";
    mainBottleTop.style.height = 100 - value + "%";
    mainBottleFulled.textContent =  value;
    mainBottleRemained.textContent = 2 - selectedBottles * _LITR
}
function addColorBottle(index) {
    for (let i = 0; i <= index; i++) {
        bottles[i].classList.add("bg-blue");
    }
}
function removeColorBottle(index) {
    for (let i = index; i <= bottles.length - 1; i++) {
        bottles[i].classList.remove("bg-blue")
    }
}
function selectedBottle() {
    const arr = []
    bottles
        .forEach(item => {
            if (item.classList.contains("bg-blue")) {
                arr.push(item);
            }
        })
    return arr.length;
}

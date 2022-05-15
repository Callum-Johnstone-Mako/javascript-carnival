// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

//Creating variables for the images to change from html file
let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')
//Declaring Variables to keep track of which part is selected and needs to change
let headIndex = 0
let bodyIndex = 0
let shoesIndex = 0
let partIndex = 0
//main function logic to ensure index does not go to high or low
function changeClothes() {
  if (headIndex == 6) {
    headIndex = 0
  } else if (headIndex < 0) {
    headIndex = 5
  }
  if (bodyIndex == 6) {
    bodyIndex = 0
  } else if (bodyIndex < 0) {
    bodyIndex = 5
  }
  if (shoesIndex == 6) {
    shoesIndex = 0
  } else if (shoesIndex < 0) {
    shoesIndex = 5
  }
  if (partIndex > 2) {
    partIndex = 0
  } else if (partIndex < 0) {
    partIndex = 2
  }
  //changing image to correct image
  head.src = `./images/head${headIndex}.png`
  body.src = `./images/body${bodyIndex}.png`
  shoes.src = `./images/shoes${shoesIndex}.png`
}
//Key listener that calls functions when arrows pressed
document.addEventListener('keydown', function (e) {
  if (e.key == 'ArrowRight') {
    IndexUp()
    changeClothes()
  } else if (e.key == 'ArrowLeft') {
    IndexDown()
    changeClothes()
  } else if (e.key == 'ArrowUp') {
    partIndex = partIndex - 1
    changeClothes()
  } else if (e.key == 'ArrowDown') {
    partIndex = partIndex + 1
    changeClothes()
  }
})
//cycling through different clothes when right key pressed
function IndexUp() {
  if (partIndex == 0) {
    headIndex = headIndex + 1
  } else if (partIndex == 1) {
    bodyIndex = bodyIndex + 1
  } else if (partIndex == 2) {
    shoesIndex = shoesIndex + 1
  }
}
//cycling through different clothes when left key pressed
function IndexDown() {
  if (partIndex == 0) {
    headIndex = headIndex - 1
  } else if (partIndex == 1) {
    bodyIndex = bodyIndex - 1
  } else if (partIndex == 2) {
    shoesIndex = shoesIndex - 1
  }
}

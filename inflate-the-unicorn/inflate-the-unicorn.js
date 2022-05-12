// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let unicorns = document.getElementsByClassName('inflate-an-image')

for (i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = inflate
}

function inflate(e) {
  let unicorn = e.target
  //Logic for game
  if (unicorn.src.match('./images/unicorn-0.png')) {
    unicorn.src = './images/unicorn-1.png'
  } else if (unicorn.src.match('./images/unicorn-1.png')) {
    unicorn.src = './images/unicorn-2.png'
  } else if (unicorn.src.match('./images/unicorn-2.png')) {
    unicorn.src = './images/unicorn-3.png'
  } else if (unicorn.src.match('./images/unicorn-3.png')) {
    //Logic for displaying which unicorn is inflated fully
    if (unicorn.id.match('Unicorn1')) {
      alert('unicorn1 says Thank You!')
    }
    if (unicorn.id.match('Unicorn2')) {
      alert('unicorn2 says Thank You!')
    }
    if (unicorn.id.match('Unicorn3')) {
      alert('unicorn3 says Thank You!')
    }
  }
}

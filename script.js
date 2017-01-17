//select all the cells
var board = document.querySelectorAll('.row div')
var counter = 1
// listen for a click on each cell
for (var i = 0; i < board.length; i++){
  //when a click happens, change the innertext of that cell (to be "x" or "o")
board[i].addEventListener("click", function(event){
// if there is not some text already there and the conuter is odd add an x
  if(counter % 2 !== 0 ){
    event.target.innerText = "X"
 // otherwise add an o
    } else {
    event.target.innerText = "O"
  }
 // no matter what, increment counter by 1
 counter++

})
}

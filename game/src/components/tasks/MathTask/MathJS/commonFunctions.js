export function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomInArray(arr) {
  return Math.floor(Math.random() * arr.length);
}

<<<<<<< HEAD
=======
export function inputEnter(input) {
  input.addEventListener('keypress', function(event){
    if (event.code === "Enter") {
        resultOfQuestion(input.value, clear_modal);
    }
});
}
>>>>>>> 049b939e981c3a663fd4d324181deca2629e9cc1

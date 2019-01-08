export function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomInArray(arr) {
  return Math.floor(Math.random() * arr.length);
}

export function inputEnter() {
  input.addEventListener('keypress', function(event){
    if (event.code === "Enter") {
        resultOfQuestion(input.value, clear_modal);
    }
});
}

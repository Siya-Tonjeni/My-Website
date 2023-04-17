const inputs = document.querySelectorAll(".input");

function focusF(){
  let parent = this.parentNode;
  parent.classList.add("focus");
}

inputs.forEach(input =>{
  input.addEventListener("focus", focusFunc);
});

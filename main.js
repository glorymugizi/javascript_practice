const entireHeading = document.querySelector("#heading");
const childHeading = document.querySelector("#heading article");
const button = document.querySelector(".button");
function headingOne(){
entireHeading.innerHTML="CHANGED HEADING BY FUNCTION";
// console.log("heading one")
}
function changChildHeading(){
  childHeading.innerHTML="CHANGED CHILD HEADING BY FUNCTION";
  // console.log("heading one")
  }
button.addEventListener("click",changChildHeading);

 let numberOfDrums = document.querySelectorAll(".drum").length;

for( let i=0; i<numberOfDrums;i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function (){
let buttonInnerHTML = this.innerHTML;
 
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
})
};


 addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);

 });
function makeSound(key){
 switch (key) {
    
    case "w":
        let crash =new Audio('sounds/crash.mp3');
        crash.play();
        break;
    case "a":
        let kick =new Audio('sounds/kick.mp3');
        kick.play();  
    case "s":
        let snare =new Audio('sounds/snare.mp3');
        snare.play(); 
    case "d":
        let tom1 =new Audio('sounds/tom-1.mp3');
        tom1.play(); 
    case "j":
        let tom2 =new Audio('sounds/tom-2.mp3');
        tom2.play(); 
    case "k":
        let tom3 =new Audio('sounds/tom-3.mp3');
        tom3.play(); 
    case "l":
        let tom4 =new Audio('sounds/tom-4.mp3');
        tom4.play(); 
    
    default:
        break;
}
}

function buttonAnimation(currentKey){
    let activeButtom = document.querySelector("." +currentKey);activeButtom.classList.add("pressed");
    setTimeout(function(){
        activeButtom.classList.remove("pressed")

    },100
)}
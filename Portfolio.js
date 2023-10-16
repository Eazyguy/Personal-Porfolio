// Navigation
let open= document.getElementById("open")
let nav = document.getElementById("nav-bar")
let close = document.getElementById("close")

open.addEventListener("click", ()=>{
  nav.style.width = "200px";
  nav.style.paddingLeft="20px"
  nav.style.paddingRight="20px"
  nav.style.boxShadow= "2px 2px 5px #222"
  open.style.opacity=0;
})

close.addEventListener("click", ()=>{
  nav.style.width = 0;
  open.style.opacity=1;
  nav.style.boxShadow= "none";
  nav.style.paddingLeft=0;
  nav.style.paddingRight=0;
})


// Testimonial

var index = 1;
let testi = document.getElementsByClassName("listwrap")
let dots = document.getElementsByClassName("fill")
let circles = document.getElementsByClassName("circle")

slide()


function slide(){

for(let i = 0; i < testi.length; i++){
testi[i].style.display="none";
}

for(let j =0; j < dots.length; j++){
dots[j].style.display="none";
}

for(let a =0; a < dots.length; a++){
circles[a].style.opacity="0.5"
}

index++;

if(index > testi.length){
index = 1
}

testi[index-1].style.display="block"
dots[index-1].style.display="block"
circles[index-1].style.opacity="1"

setTimeout(slide, 5000)
}

// Scroll Animation

/*var scrollAnim = document.querySelectorAll(".anim")

for(let i = 0; i < scrollAnim.length; i++){
     var windowHeight = window.innerHeight

    var elementTop = scrollAnim[i].getBoundingClientRect().top
//     
//     console.log(elementTop)
//     
     var elementVisible = 0;
//     
    var scrollAnim = document.querySelectorAll(".anim")
// 
//    
   if(elementTop < windowHeight - elementVisible){
     scrollAnim[i].classList.add("active")
  } //else {
//      scrollAnim[i].classList.remove("active")
//    }
//    
// 
window.addEventListener("Loaded",()=>{
  if(elementTop < windowHeight - elementVisible){
     scrollAnim[i].classList.remove("anim")
     scrollAnim[i].classList.remove("active")
  } //else {
//      scrollAnim[i].classList.remove("active")
//    }
})
//
// 
// }
// 
// 
window.addEventListener("scroll",()=>{
//   
if(elementTop < windowHeight - elementVisible){
     scrollAnim[i].classList.add("active")
  } /*else {
     scrollAnim[i].classList.remove("active")
  }*/
 /* 
})
  }
console.log(window.innerWidth)*/
const the_animation = document.querySelectorAll('.anim')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active')
        }
            else {
                entry.target.classList.remove('active')
            }
        
    })
},
   { threshold: 0.10
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  } 

let topBtn = document.getElementById("top")

window.onscroll =()=>{
  if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
    topBtn.style.display="block"
  }else{
    topBtn.style.display="none"
  }
}

topBtn.addEventListener("click",()=>{
  document.body.scrollTop=0
 document.documentElement.scrollTop=0
})

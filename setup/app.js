const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

console.log(slides);
slides.forEach((slide,idx)=>{
    slide.style.left = `${idx * 100}%`
})

let counter = 0;
nextBtn.addEventListener("click",function(){
    if(counter<slides.length-1){
        counter++;
        slides.forEach((slide)=>{
            slide.style.transform = `translateX(-${counter * 100}%)`
        })
    }

    if(counter === slides.length-1){
        nextBtn.style.display = "none";
        prevBtn.style.display = "block";
    } else{
        nextBtn.style.display = "block";
        prevBtn.style.display = "block";
    }
})

prevBtn.addEventListener("click",function(){
    if(counter > 0){
        counter--;
        slides.forEach((slide,idx)=>{
            slide.style.transform = `translateX(-${counter * 100}%)`
        })
    }

    if(counter === 0){
        prevBtn.style.display = "none";
        nextBtn.style.display = "block";
    }
    else{
        nextBtn.style.display = "block";
        prevBtn.style.display = "block";
    }
});
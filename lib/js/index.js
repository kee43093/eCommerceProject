const imageSlider = document.querySelector('.sliderImages');
const sliderImages = document.querySelectorAll('.sliderImages img');
console.log(imageSlider);
console.log(sliderImages[0]);
//Button 
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
console.log(nextBtn)
console.log(prevBtn)

//Counter
let counter = 1;
console.log(counter);
const size = sliderImages[0].clientWidth;

console.log(size);

imageSlider.style.transform = 'translateX(' +(-size * counter) + 'px)';

//Button Listeners


nextBtn.addEventListener("click", () => {
    if(counter >= sliderImages.length - 1) return;
    imageSlider.style.transition = "transform 0.4s ease-in-out";
    counter++
    imageSlider.style.transform = 'translateX(' +(-size * counter) + 'px)';
    console.log(counter)
    console.log(size)
    console.log(imageSlider)
});

prevBtn.addEventListener('click', ()=>{
    if(counter <= 0) return;
    imageSlider.style.transition = 'transfrom 0.4s ease-in-out';
    counter--
    imageSlider.style.transform = 'translateX(' +(-size * counter) + 'px)'; 
    console.log(counter)
    console.log(size)
    console.log(imageSlider)
});

imageSlider.addEventListener('transitionend', () => {
    console.log(sliderImages[counter])
    if (sliderImages[counter].id === 'lastClone'){
        imageSlider.style.transition = "none";
        counter = sliderImages.length - 2 ;
        imageSlider.style.transform = 'translateX(' +(-size * counter) + 'px)';
        
    }

    if (sliderImages[counter].id === 'firstClone'){
        imageSlider.style.transition = "none";
        counter = sliderImages.length - counter;
        imageSlider.style.transform = 'translateX(' +(-size * counter) + 'px)';
        console.log("kendall")
    }
});
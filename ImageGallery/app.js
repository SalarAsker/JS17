let fullImage = document.querySelector('.full-image');
let image = document.querySelector('.full-image img');
let close = document.querySelector('.full-image span');

console.log(fullImage); console.log(image); console.log(close);

let imageList = document.querySelectorAll('.image-gallery img');
console.log(imageList);

imageList.forEach((img, index) =>{
    img.addEventListener('click', ()=>{
        console.log(`You clicked the image number ${index +1}`);
        image.src = `images/img${index + 1}.jpg`;
        fullImage.style.display = "flex";
    });
});

close.addEventListener('click', ()=>{
    fullImage.style.display = "none";
});
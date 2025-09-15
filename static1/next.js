const items = document.querySelectorAll('.item');
const word = document.querySelector('.word-last');
let current = 1;

function next() {
    if (current!=7){
        items.forEach((item, index) => {
            item.style.transform = `translateX( calc(-32vw * ${current}))`;
        }); 
        word.style.transform = `translateX( calc(-32vw * ${current}))`;
        current = current + 1;
    }
}



function prev() {
    if (current!=1){
        items.forEach((item, index) => {
            item.style.transform =  `translateX( calc(-32vw * ${current-2}))`;
        });
        word.style.transform =  `translateX( calc(-32vw * ${current-2}))`;
        current = current -1;
    };
}

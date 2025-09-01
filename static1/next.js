const items = document.querySelectorAll('.item');
let current = 1;

function next() {
    if (current!=7){
        items.forEach((item, index) => {
            item.style.transform = `translateX(calc((-500px - 4vw) * ${current}))`;
        });
        current = current + 1;
    }
}

function prev() {
    if (current!=1){
        items.forEach((item, index) => {
            item.style.transform =  `translateX(calc((-500px - 4vw) * ${current-2}))`;
        });
        current = current -1;
    };
}
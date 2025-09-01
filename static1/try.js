const items = document.querySelectorAll('.item');
let currentPosition = 0;
const itemWidth = 400; // 400px
const vwMargin = 4; // 4vw

function next() {
    if (currentPosition > -((items.length - 1) * (itemWidth + getVwInPixels(vwMargin)))) {
        currentPosition -= (itemWidth + getVwInPixels(vwMargin));
        updateCarousel();
    }
}

function prev() {
    if (currentPosition < 0) {
        currentPosition += (itemWidth + getVwInPixels(vwMargin));
        updateCarousel();
    }
}

function getVwInPixels(vw) {
    return window.innerWidth * vw / 100;
}

function updateCarousel() {
    items.forEach(item => {
        item.style.transform = `translateX(${currentPosition}px)`;
    });
}

// 初始化


// 添加窗口大小变化监听，确保响应式
window.addEventListener('resize', function() {
    // 重新计算当前位置，保持相对位置
    const currentIndex = Math.round(-currentPosition / (itemWidth + getVwInPixels(vwMargin)));
    currentPosition = -currentIndex * (itemWidth + getVwInPixels(vwMargin));
    updateCarousel();
});
const boxes = document.querySelectorAll(".box");

const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

boxes.forEach(box => {
    box.style.color = getRandomColor();
    box.style.backgroundColor = getRandomColor();
})
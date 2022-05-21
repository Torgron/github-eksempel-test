function changeBgColor() {
    color = ["red", "blue", "green", "yellow", "white"];
    rndInt = Math.floor(Math.random() * 5);
    document.body.style.backgroundColor = color[rndInt];
}
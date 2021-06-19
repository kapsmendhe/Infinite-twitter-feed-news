var root = document.getElementById("root");
var url = "https://robohash.org/";

function randomGen() {
    return (
        Math.floor(Math.random() * 1000)
    );
}

function infinity() {
    var i = 0;
    while (i < 15) {
        const img = document.createElement("img");
        img.src = `${url}${randomGen()}`;
        root.appendChild(img);
        i++
    }
}
infinity();
window.addEventListener("scroll", () => {
    if ((window.scrollY + window.innerHeight + window.innerWidth) >= document.documentElement.scrollHeight) {
        infinity();
    }
})
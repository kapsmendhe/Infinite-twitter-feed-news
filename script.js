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
// console.log("scrollY scr: " + window.scrollY)
// console.log("scrollHeight scr: " + document.documentElement.scrollHeight)

document.addEventListener("scroll", () => {
    // console.log("scrollY add: " + window.scrollY)
    // console.log("scrollHeight add: " + document.documentElement.scrollHeight)
    if ((window.scrollY + window.innerHeight + window.innerWidth) >= document.documentElement.scrollHeight) {
        infinity();
        // console.log("scrollY: " + window.scrollY)
        // console.log("innerHeight: " + window.innerHeight)
        // console.log("innerWidth: " + window.innerWidth)
        // console.log("scrollHeight: " + document.documentElement.scrollHeight)
    }
})
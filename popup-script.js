setTimeout(popupFunction, 10000);

function popupFunction() {
    if (confirm('Hey le site xxxvidsxxx est trop bien. Est-ce que tu veux visiter le site?')) {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    } else {
    }
}
function psychedelicMode(){
    document.querySelectorAll('p').forEach(e => e.style.color = "blue");
    document.querySelectorAll('p').forEach(e => e.style.fontFamily = "papyrus");
    document.querySelectorAll('h1,h2,h3').forEach(e => e.style.color = "green");
    document.querySelectorAll('h1,h2,h3').forEach(e => e.style.fontFamily = "Comic Sans");
    document.documentElement.style.backgroundColor = "magenta";
};
const Dmode = document.getElementById('toggle-mode');

Dmode.addEventListener('click', changeMode);
function changeMode() {
    document.body.classList.toggle("darkmode");
}

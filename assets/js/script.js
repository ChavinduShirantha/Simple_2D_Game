$('#intro-icon').on('click', function (e) {
    $('#intro').attr('style', 'display : block !important');
});
$('#close').on('click', function (e) {
    $('#intro').attr('style', 'display : none !important');
});

const theme =new Audio("assets/audio/Theme2.mp3");

window.addEventListener('mousemove', handleMouseMove);
function handleMouseMove(event) {
    theme.play();
}


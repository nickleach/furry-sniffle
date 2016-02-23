function getPixelsFromVw(vw) {
    const percent = vw * 0.01;
    return window.screen.width * percent;
}

function getPixelsFromVh(vh) {
    const percent = vh * 0.01;
    console.log(window);
    return window.screen.height * percent;
}
function randomNumb(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {
    getPixelsFromVh,
    getPixelsFromVw,
    randomNumb
};
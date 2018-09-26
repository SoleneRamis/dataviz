$('.bottle').click(function () {
    setTimeout(function () {
        $('.liquid').css('transform', 'translateY(0%)');
    }, 500)
})

function setup(){
    var x = window.scrollX;
    var y = window.scrollY;
    window.scrollTo(x, y)
    console.log(window.pageXOffset, window.innerWidth)
    if (window.pageXOffset >= window.innerWidth) {
        console.log('ok');
        $('body').css('overflow', 'hidden');
    }
    requestAnimationFrame(setup)
}
setup()

var title = document.querySelector('.title')
var subcontainer = document.querySelector('.subcontainer')
var barman = document.querySelector('.barman')
var data1 = document.querySelector('.data1')
var view = document.querySelector('.view')
function animate() {
    requestAnimationFrame(animate)
    title.style.transform = "translateX(" + -1 * view.scrollLeft + "px)"
    subcontainer.style.transform = "translateX(" + -1 * view.scrollLeft + "px)"
    barman.style.transform = "translateX(" + -1 * view.scrollLeft + "px)"
    data1.style.transform = "translateX(" + -0.3 * view.scrollLeft + "px)"
}
animate()
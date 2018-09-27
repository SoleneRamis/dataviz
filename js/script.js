$('.alcool').click(function () {
    setTimeout(function () {
        $('.liquid').css('transform', 'translateY(0%)');
        $('.liquid1').css('transform', 'translateY(0%)');
    }, 100)
})

function setup(){
    var x = window.scrollX;
    var y = window.scrollY;
    window.scrollTo(x, y)
    if (window.pageXOffset >= window.innerWidth * 6) {
        $('body').css('overflow', 'hidden');
    }
    requestAnimationFrame(setup)
}
// setup()

function animationBarman() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.scrollTo(x, y)
    var barman = document.querySelector(".barmanfin");
    var Left = barman.offsetLeft;
    var translation = Math.min(234, Math.max( 0, x + window.innerWidth - Left - barman.offsetWidth ) );
    console.log(translation);
    barman.style.transform = 'translate3d(' + translation + 'px,0,0)';

    requestAnimationFrame(animationBarman)
}
animationBarman()

var view = document.querySelector('.view')
var title = document.querySelector('.title')
var subcontainer = document.querySelector('.subcontainer')
var barman = document.querySelector('.barman')
var chouffe = document.querySelector('.chouffe')
var beer86 = document.querySelector('.beer86')
var lagoulade = document.querySelector('.lagoulade')
var blanche = document.querySelector('.blanche')
var blonde = document.querySelector('.blonde')
var brune = document.querySelector('.brune')
var bad = document.querySelector('.bad')
var blanc = document.querySelector('.blanc')
var rouge = document.querySelector('.rouge')
var conso = document.querySelector('.conso')
var bierefin = document.querySelector('.bierefin')

function animate() {
    requestAnimationFrame(animate)
    title.style.transform = "translateX(" + -1 * view.scrollLeft + "px)"
    subcontainer.style.transform = "translateX(" + -1 * view.scrollLeft + "px)"
    barman.style.transform = "translateX(" + -1 * view.scrollLeft + "px)"
    chouffe.style.transform = "translateX(" + -0.3 * view.scrollLeft + "px)"
    beer86.style.transform = "translateX(" + -0.3 * view.scrollLeft + "px)"
    lagoulade.style.transform = "translateX(" + -0.3 * view.scrollLeft + "px)"
    blanche.style.transform = "translateX(" + -0.3 * view.scrollLeft + "px)"
    blonde.style.transform = "translateX(" + -0.3 * view.scrollLeft + "px)"
    brune.style.transform = "translateX(" + -0.3 * view.scrollLeft + "px)"
    bad.style.transform = "translateX(" + -0.3 * view.scrollLeft + "px)"
    blanc.style.transform = "translateX(" + -0.3 * view.scrollLeft + "px)"
    rouge.style.transform = "translateX(" + -0.3 * view.scrollLeft + "px)"
    conso.style.transform = "translateX(" + -0.8 * view.scrollLeft + "px)"
    bierefin.style.transform = "translateX(" + -0.8 * view.scrollLeft + "px)"
}
animate()
let songRemplis = new Audio()
songRemplis.src = './assets/audio/remplissage.wav'

let songVide = new Audio()
songVide.src = './assets/audio/verrevide.wav'
songVide.currentTime = 1

let beerEvent = false
let pressionEvent = false
let vinEvent = false
let consoEvent = false

let view = document.querySelector('.view')
let title = document.querySelector('.title')
let subcontainer = document.querySelector('.subcontainer')
let barman = document.querySelector('.barman')
let chouffe = document.querySelector('.chouffe')
let beer86 = document.querySelector('.beer86')
let lagoulade = document.querySelector('.lagoulade')
let blanche = document.querySelector('.blanche')
let blonde = document.querySelector('.blonde')
let brune = document.querySelector('.brune')
let bad = document.querySelector('.bad')
let blanc = document.querySelector('.blanc')
let rouge = document.querySelector('.rouge')
let conso = document.querySelector('.conso')
let bierefin = document.querySelector('.bierefin')

$(document).ready(function () {
    // Revertscroll
    setupScroll()

    // Parallax
    animate()

    // Parallax Barman
    animationBarman()

    // Event Liquide
    $('.alcool').on("click", function () {
        if ($(this).attr('attr') == 'beerPackage') {
            $('.beerPackage').off("click")
            songRemplis.currentTime = 2
            songRemplis.play()
            beerEvent = true
        } else if ($(this).attr('attr') == 'pressionPackage') {
            $('.pressionPackage').off("click")
            songRemplis.currentTime = 3
            songRemplis.play()
            pressionEvent = true
        } else if ($(this).attr('attr') == 'vinPackage') {
            $('.vinPackage').off("click")
            songRemplis.currentTime = 3
            songRemplis.play()
            vinEvent = true
        } else if ($(this).attr('attr') == 'consoPackage') {
            $('.consoPackage').off("click")
            songVide.play()
            consoEvent = true
        }
        // Data
        fetch('../data/dataPourentage.json').then(response => {
            return response.json()
        }).then(data => {
            let package = $(this).attr('attr')
            let pourcetage
            let liquides = document.getElementsByClassName(package);
            for (let liquide of liquides) {
                setTimeout(function () {
                    let child = liquide.nextSibling.nextSibling.nextSibling.nextSibling
                    let indexQuestion = liquide.getAttribute('indexQuestion')
                    let indexAlcool = liquide.getAttribute('indexAlcool')
                    pourcetage = data[indexQuestion][indexAlcool]
                    child.style.transform = 'translateY(' + ((100 - pourcetage)-20) + '%)'
                    if ($(this).attr('attr') == 'consoPackage') {
                        child.style.transform = 'translateY(' + (pourcetage) + '%)'
                    }
                    let ticker = 0
                    let duree = 2500 / pourcetage
                    if (duree < 10) {
                        duree = 10
                    } else if (duree > 100) {
                        duree = 100
                    }
                    let anim = setInterval(function () {
                        ticker++
                        let child = liquide.nextSibling.nextSibling.nextSibling.nextSibling
                        let indexQuestion = liquide.getAttribute('indexQuestion')
                        let indexAlcool = liquide.getAttribute('indexAlcool')
                        pourcetage = data[indexQuestion][indexAlcool]
                        liquide.parentElement.previousSibling.previousSibling.innerHTML = ticker + "%"
                        if (ticker == pourcetage) {
                            clearInterval(anim)
                        }
                    }, duree)
                })
            }
        })
    })
});

function setupScroll(){
    var x = window.scrollX;
    var y = window.scrollY;
    window.scrollTo(x, y)
    if ((window.pageXOffset >= window.innerWidth) && (beerEvent == false)) {
        $('body').css('overflow', 'hidden');
    }
    else if ((window.pageXOffset >= window.innerWidth * 2) && (pressionEvent == false)) {
        $('body').css('overflow', 'hidden');
    }
    else if ((window.pageXOffset >= window.innerWidth * 3) && (vinEvent == false)) {
        $('body').css('overflow', 'hidden');
    }
    else if ((window.pageXOffset >= window.innerWidth * 4) && (consoEvent == false)) {
        $('body').css('overflow', 'hidden');
    } else {
        $('body').css('overflow', 'auto');
    }
    requestAnimationFrame(setupScroll)
}

function animationBarman() {
    let x = window.scrollX;
    let y = window.scrollY;
    window.scrollTo(x, y)
    let barman = document.querySelector(".barmanfin");
    let Left = barman.offsetLeft;
    let translation = Math.min(234, Math.max(0, x + window.innerWidth - Left - barman.offsetWidth));
    barman.style.transform = 'translate3d(' + translation + 'px,0,0)';

    requestAnimationFrame(animationBarman)
}


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
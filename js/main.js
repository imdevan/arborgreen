var $nav = document.querySelector('.nav'),
    $header = document.querySelector('.band--header'),
    $headerHeight = document.querySelector('.band--header').offsetHeight,
    timeout = null;

function handleNav() {
    var position = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0) || 0;

    if (position > $headerHeight/2) {
        if(!$nav.classList.contains('nav--scrolled')) {
            $nav.classList.add('nav--scrolled');
        }
    }
    else {
        if($nav.classList.contains('nav--scrolled')) {
            $nav.classList.remove('nav--scrolled');
        }
    }
}

function init() {
    handleNav();

    window.onscroll = function() {
        if (!timeout) {
            timeout = setTimeout(function () {
                clearTimeout(timeout);
                timeout = null;
                handleNav();
            }, 250);
        }
    }
}

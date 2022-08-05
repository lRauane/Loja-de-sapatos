/*menu*/
const btnmobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault()
    const navbar = document.getElementById('nav-bar');
    navbar.classList.toggle('active')
    const active = navbar.classList.contains('active');
    event.currentTarget.setAttribute('aria-expaned', active);

    if (active) {
        event.currentTarget.setAttribute('aria-label', 'fechar Menu'); 
    }  else{ 
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnmobile.addEventListener('click', toggleMenu);
btnmobile.addEventListener('touchstart', toggleMenu);
/*menu */
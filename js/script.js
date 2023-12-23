
// Появление кнопки скачать при скролле
let btnDownload = document.querySelector(".navbar__button");
if(btnDownload) {
    window.addEventListener('scroll', function() {
        btnDownload.classList.add("active");
        if(pageYOffset == 0) {
            btnDownload.classList.remove("active");
        }
    });
}

// Меню
let menu = document.querySelector(".menu");
let btnMenu = document.querySelector(".menu-button");
if(menu && btnMenu) {
    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('active');
    })
}
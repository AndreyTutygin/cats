const burger = () => {
    document.querySelector('.burger', ).addEventListener('click', () => {
        document.querySelector('.burger').classList.toggle('burger_active');
        document.querySelector('.menu-mobile').classList.toggle('menu-mobile_active');
    });
    
    document.querySelector('.menu-mobile').addEventListener('click', (e) => {
        if (e.target.classList.contains('menu-mobile__link')) {
            document.querySelector('.burger').classList.remove('burger_active');
            document.querySelector('.menu-mobile').classList.remove('menu-mobile_active');
        }
    })
}

burger();
window.onload = () => {
    const container = document.querySelector('.container');
    if(container) {
        container.classList.add('fade-in-page');
    }
};

function showDay(dayId) {
    const menus = document.querySelectorAll('.day-menu');
    const pret = document.querySelector('.pret');

    const currentlyVisible = [...menus].find(menu => menu.style.display === 'block');

    if (currentlyVisible) {
        // Swipe out meniul curent
        currentlyVisible.classList.add('swipe-out-left');
        pret.classList.add('swipe-out-left');

        setTimeout(() => {
            currentlyVisible.style.display = 'none';
            currentlyVisible.classList.remove('swipe-out-left');

            pret.style.display = 'none';
            pret.classList.remove('swipe-out-left');

            // Swipe in meniul nou
            const newMenu = document.getElementById(dayId);
            if (newMenu) {
                newMenu.style.display = 'block';
                newMenu.classList.add('swipe-in-right');

                pret.style.display = 'block';
                pret.classList.add('swipe-in-right');

                setTimeout(() => {
                    newMenu.classList.remove('swipe-in-right');
                    pret.classList.remove('swipe-in-right');
                }, 500);
            }
        }, 500);
    } else {
        // Dacă nu e niciun meniu afișat
        const newMenu = document.getElementById(dayId);
        if (newMenu) {
            newMenu.style.display = 'block';
            newMenu.classList.add('swipe-in-right');

            pret.style.display = 'block';
            pret.classList.add('swipe-in-right');

            setTimeout(() => {
                newMenu.classList.remove('swipe-in-right');
                pret.classList.remove('swipe-in-right');
            }, 500);
        }
    }
}


document.querySelectorAll('.button').forEach(btn => {
    btn.addEventListener('click', function(e) {
        this.classList.add('btn-clicked');
        setTimeout(() => {
            this.classList.remove('btn-clicked');
        }, 300); // dupa 300ms revine la normal
    });
});

function navigateTo(url) {
    document.body.classList.add("fade-out");
    setTimeout(() => {
        window.location.href = url;
    }, 400);
}

function showDay(dayId) {
    const menus = document.querySelectorAll('.day-menu');
    const pret = document.querySelector('.pret');
    const activeMenu = document.querySelector('.day-menu:not(.hidden)');

    // Dacă există un meniu activ, îl animăm spre stânga
    if (activeMenu && activeMenu.id !== dayId) {
        activeMenu.classList.remove("slide-in");
        activeMenu.classList.add("slide-out-left");

        setTimeout(() => {
            activeMenu.classList.add("hidden");
            activeMenu.classList.remove("slide-out-left");
        }, 400);
    }

    pret.classList.add("hidden");

    // Noua zi apare din dreapta
    const selectedMenu = document.getElementById(dayId);
    if (selectedMenu && selectedMenu.classList.contains("hidden")) {
        setTimeout(() => {
            selectedMenu.classList.remove("hidden");
            selectedMenu.classList.add("slide-in");
            pret.classList.remove("hidden");
            pret.classList.add("fade-in-up");
        }, 400);
    }
}

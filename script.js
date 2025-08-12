function showDay(dayId) {
    // Ascunde toate meniurile
    document.querySelectorAll('.day-menu').forEach(menu => {
        menu.style.display = 'none';
    });

    // Ascunde prețul
    document.querySelector('.pret').style.display = 'none';

    // Afișează meniul selectat
    const selectedMenu = document.getElementById(dayId);
    if (selectedMenu) {
        selectedMenu.style.display = 'block';
        document.querySelector('.pret').style.display = 'block';
    }
}

let currentlyActive = null; // Variable pour suivre la fenêtre actuellement active

function toggleSection(section) {
    // Récupère le contenu et la colonne correspondants
    const activeContent = document.getElementById(`${section}-content`);
    const activeColumn = document.getElementById(`${section}-column`);
    const container = document.querySelector('.container');

    // Vérifie si la colonne cliquée est déjà active
    const isActive = activeContent.classList.contains('active');

    // Si la colonne cliquée est déjà active, la désactiver
    if (isActive) {
        activeContent.classList.remove('active');
        activeColumn.classList.remove('active-column');
        container.classList.remove('active-container');
        currentlyActive = null; // Aucune fenêtre active
        return;
    }

    // Si une autre fenêtre est déjà active, fermer l'ancienne
    if (currentlyActive) {
        currentlyActive.classList.remove('active');
        const oldColumn = document.querySelector('.column.active-column');
        oldColumn.classList.remove('active-column');
    }

    // Ouvre le nouveau contenu immédiatement
    activeContent.classList.add('active');
    activeColumn.classList.add('active-column');
    container.classList.add('active-container'); // Ajoute la classe au container

    // Met à jour la fenêtre actuellement active
    currentlyActive = activeContent;
}

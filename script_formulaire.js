function confirmEnvoi(event) {
    event.preventDefault(); // Empêche l'envoi immédiat du formulaire
    const form = event.target;
    // Affiche une fenêtre contextuelle pour confirmer l'envoi
    if (confirm("Êtes-vous sûr de vouloir envoyer ce message ?")) {
        form.submit(); // Si l'utilisateur confirme, le formulaire est envoyé
        alert("Votre message a bien été envoyé !");
    }
}
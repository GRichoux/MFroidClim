// Fonction pour charger le contenu du header
function loadHeader() {
    fetch('/header.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de chargement du fichier header.html');
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('header').innerHTML = data;
      })
      .catch(error => {
        console.error('Erreur:', error);
      });
  }





  
// Fonction pour charger le contenu du footer
function loadFooter() {
  fetch('../footer.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur de chargement du fichier footer.html');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(error => {
      console.error('Erreur:', error);
    });
}
  
// Appel de la fonction pour charger le header
loadHeader();
loadFooter();




// Menu hamburger mobile
function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('active');
}
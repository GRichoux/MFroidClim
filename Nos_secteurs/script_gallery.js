const imagesContainer = document.getElementById('images-container');
const loadMoreButton = document.getElementById('load-more');

const imagesMap = {
    '/Nos_secteurs/Images_Industriel': [
        'Images_Industriel/image1.jpeg',
        'Images_Industriel/image2.jpeg',
        'Images_Industriel/image3.jpg',
        'Images_Industriel/image4.jpeg',
        'Images_Industriel/image5.jpeg',
        'Images_Industriel/image6.jpeg',
        'Images_Industriel/image7.jpeg',
        'Images_Industriel/image8.jpeg',
        'Images_Industriel/image9.jpeg'
    ],
    'Images_Commercial': [
        'Images_Commercial/image1.jpg',
        'Images_Commercial/image2.jpg',
        'Images_Commercial/image3.jpg',
        'Images_Commercial/image4.jpg',
        'Images_Commercial/image5.png',
        'Images_Commercial/image6.jpg',
        'Images_Commercial/image7.jpg',
        'Images_Commercial/image8.jpg',
        'Images_Commercial/image9.jpg',
        'Images_Commercial/image10.jpg',
        'Images_Commercial/image11.jpg',
        'Images_Commercial/image12.png',
        'Images_Commercial/image13.jpg',
        'Images_Commercial/image14.jpg',
        'Images_Commercial/image15.jpg',
        'Images_Commercial/image16.jpeg',
        'Images_Commercial/image17.jpeg',
        'Images_Commercial/image18.jpg',
        'Images_Commercial/image19.jpg'
    ],
    'Images_Particulier': [
        'Images_Particulier/image1.jpg',
        'Images_Particulier/image2.jpg',
        'Images_Particulier/image3.jpg',
        'Images_Particulier/image4.jpg',
        'Images_Particulier/image5.jpg',
        'Images_Particulier/image6.jpg',
        'Images_Particulier/image7.jpg',
        'Images_Particulier/image8.jpg',
        'Images_Particulier/image9.jpg',
        'Images_Particulier/image10.jpg'
    ]
};
let currentIndex = 0;
const imagesToLoad = 3; // Nombre d'images à charger à chaque clic
    
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');

// Fonction pour charger les images
function loadImages(folder) {
    const images = imagesMap[folder]; // Récupérer le tableau d'images en fonction du dossier
    for (let i = 0; i < imagesToLoad; i++) {
        if (currentIndex < images.length) {
            const imgElement = document.createElement('img');
            imgElement.src = images[currentIndex];
            imgElement.alt = 'Image ' + currentIndex;
            imgElement.classList.add('gallery-img'); // Ajouter une classe pour identifier les images
            imagesContainer.appendChild(imgElement);
            currentIndex++;
        }
    }

    // Cacher le bouton si toutes les images ont été chargées
    if (currentIndex >= images.length) {
        loadMoreButton.style.display = 'none';
    }
}

// Charger initialement 6 images du dossier spécifié
const initialFolder = loadMoreButton.getAttribute('data-folder');
loadImages(initialFolder);
loadImages(initialFolder);

// Écouteur d'événement pour le bouton "Charger plus d'images"
loadMoreButton.addEventListener('click', () => loadImages(initialFolder));

// Écouteur pour les images de la galerie
imagesContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('gallery-img')) {
        modal.style.display = 'flex'; // Afficher la fenêtre modale
        modalImg.src = event.target.src; // Afficher l'image cliquée
    }
});

// Écouteur pour fermer la fenêtre modale
closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Fermer la fenêtre modale si on clique à l'extérieur de l'image
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Script pour un menu responsive


// Fonction pour ouvrir le menu mobile 

    function openMenuMobile() {
        document.querySelector('.nav').classList.add('open'); // Ajoute la classe "open" à l'élément avec la classe "nav"
        document.querySelector('.overlay-menu-mobile').classList.add('open'); // Ajoute la classe "open" à l'élément avec la classe "overlay-menu-mobile"
    }

// Fonction pour fermer le menu mobile 

    function closeMenuMobile() {
        document.querySelector('.nav').classList.remove('open'); // Supprime la classe "open" de l'élément avec la classe "nav"
        document.querySelector('.overlay-menu-mobile').classList.remove('open'); // Supprime la classe "open" de l'élément avec la classe "overlay-menu-mobile"
    }


// Script pour observer l'intersection des éléments et ajouter une classe

    const ratio = .1; // Rapport de visibilité requis pour déclencher l'action
    const options = {
        root: null, // L'élément racine utilisé comme référence pour calculer l'intersection
        rootMargin: '0px', // Marge autour de la racine
        threshold: ratio // Rapport de visibilité à observer
    };

    const handleIntersect = function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('visible'); // Ajoute la classe "visible" à l'élément
                observer.unobserve(entry.target); // Cesse de surveiller cet élément
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    document.querySelectorAll('[class*="reveal-"]').forEach(function(r) {
        observer.observe(r); // Observer les changements d'intersection des éléments ayant une classe contenant "reveal-"
    });

//  Script pour le défilement fluide 
    const ancres = document.getElementsByClassName('smooth');

    for (let i = 0; i < ancres.length; i++) {
        ancres[i].addEventListener('click', function(event) {
            event.preventDefault(); // Empêche le comportement par défaut du clic sur le lien

            let destination = ancres[i].getAttribute('href'); // Récupère l'ID de l'élément de destination

            document.querySelector(destination).scrollIntoView({
                behavior: 'smooth', // Défilement fluide
                block: 'center' // Permet de centrer l'élément sur la page
            });
        });
    }





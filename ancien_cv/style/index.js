function showImageInfo(element) {
    const info = element.querySelector(".txt").getAttribute("data-info");
    const imageInfo = document.getElementById("imageInfo");

    imageInfo.textContent = info;
    imageInfo.style.display = "block";
}

function redirectToPage(pageName) {
    // Construire l'URL de la page en utilisant le nom fourni
    const pageURL = `pages_graph/${pageName}.html`;
    
    // Rediriger vers la nouvelle page
    window.location.href = pageURL;
}
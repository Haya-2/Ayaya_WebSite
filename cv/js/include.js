function includeHTML(id, url) {
   fetch(url)
      .then(response => {
         if (!response.ok) throw new Error('Impossible de charger ' + url);
         return response.text();
      })
      .then(data => {
         document.getElementById(id).innerHTML = data;
      })
      .catch(err => console.error(err));
}

// Inclure le header et le footer
includeHTML("head", "include/_header.html");
includeHTML("footer", "include/_footer.html");

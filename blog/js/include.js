// include.js
export function includeHTML(id, url, callback) {
   fetch(url)
      .then(response => {
         if (!response.ok) throw new Error('Impossible de charger ' + url);
         return response.text();
      })
      .then(data => {
         const el = document.getElementById(id);
         if (el) el.innerHTML = data;
         if (callback) callback();
      })
      .catch(err => console.error(err));
}
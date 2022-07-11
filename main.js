const urlApi = 'http://localhost:8888/forum/forum-api_php/ticket';
const ticketMessage = document.querySelector('.publish_ticket_message');
const ticketUser  = document.querySelector('.publish_ticket_user');

//listing des tickets
fetch(urlApi + 'categories')
    .then(response => response.json())
    .then(response => {
        console.log(response)
        let template = ''
        response.data.forEach(category => {
            template += `<li class="cat-item" data-id="${category.id_categorie}">${category.nom}</li>`
        });
        catListe.innerHTML = template
    })
    .catch(error => console.error(error));
const urlApi = 'http://localhost:8888/forum-api_php/';
const ticketList = document.querySelector('.ticket_list');


fetch(urlApi + 'ticket')
    .then( response => response.json())
    .then( response => {
        console.log(response)
//listing des tickets
    let template = ''
    response.data.forEach(function(ticket){
        template += `<li class="ticket_list-item" data-id="${ticket.id_ticket}">`
        template += `<summary><strong>${ticket.tag}</strong> - par ${ticket.user_name} - le ${ticket.date}</summary>`
        template += `<p>${ticket.message}</p>`
        template += `</li>`

        ticketList.innerHTML = template
        })

    })
.catch(error => console.error(error));





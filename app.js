const ticketIndex = document.getElementById('ticketIndex');
const searchBar = document.getElementById('searchBar');
let ticketTypes = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredTickets = ticketTypes.filter(ticket => {
        let tagNames = JSON.stringify(ticket.tags);
        return (
            ticket.ticketName.toLowerCase().includes(searchString) || tagNames.includes(searchString) || ticket.category.toLowerCase().includes(searchString) || ticket.ticket_rating.includes(searchString)
        );
    });
    displayTickets(filteredTickets);
});

const loadTickets = async () => {
    try {
        // const res = await fetch('http://127.0.0.1:5500/ticket_data.json');
        const res = await fetch('https://raw.githubusercontent.com/AldridgeDev/ticket-library/main/ticket_data.json');
        ticketTypes = await res.json();
        displayTickets(ticketTypes);
    } catch (err) {
        console.error(err);
    }
};

const displayTickets = (tickets) => {
    const htmlString = tickets
        .map((ticket) => {
            return `
            <div class="ticket">
                <h2 onclick="addActiveClass(this)">${ticket.ticketName}</h2> 
                <h3>Ticket Rating: ${ticket.ticket_rating}</h3>
                <div class="template" title="Click to copy!"><span>${ticket.desc}</span><br><br><span class="copy-template">Click on the text to copy the template</span><br><br><textarea class="ticketTemplate" onclick="clickToCopy(this)">${ticket.template}</textarea></div><br>
            </div>
        `;
        })
        .join('');
    ticketIndex.innerHTML = htmlString;
};

loadTickets();

// add 'active' class to tickets when clicked on 
let addActiveClass = (elem) => {
    if (elem.classList.contains("active")) {
        elem.classList.remove('active');
    } else {
        elem.classList.add('active');
    }
}

// copy text to clipboard
let clickToCopy = (c) => {
    c.select();
    document.execCommand("Copy");

    c.setAttribute('title', 'Copied!');
    c.classList.add('createdTooltip');
}
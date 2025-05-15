document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("staffLoginForm");
    const message = document.getElementById("loginMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = form.username.value;
        const password = form.password.value;

        if (username === "admin" && password === "1234") {
            message.textContent = "Uspešna prijava!";
            message.style.color = "green";
        
        } else {
            message.textContent = "Pogrešno korisničko ime ili lozinka.";
            message.style.color = "red";
        }
    });
});

const orderForm = document.getElementById("orderForm");
const orderMessage = document.getElementById("orderMessage");

if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const meal = orderForm.meal.value;
        const table = orderForm.table.value;
        const quantity = orderForm.quantity.value;
        const note = orderForm.note.value;

        
        console.log("Narudžbina:", { meal, table, quantity, note });

        orderMessage.textContent = "Narudžbina je uspešno poslata!";
        orderMessage.style.color = "green";

        orderForm.reset();
    });
}


const orders = [
    { id: 1, meal: "Pljeskavica", table: 5, quantity: 2, status: "U pripremi" },
    { id: 2, meal: "Sarma", table: 3, quantity: 1, status: "Posluženo" },
    { id: 3, meal: "Mešani roštilj", table: 7, quantity: 3, status: "U pripremi" },
];

function updateStatus(orderId, newStatus) {
    const order = orders.find(order => order.id === orderId);
    if (order) {
        order.status = newStatus;
        renderOrders(); 
    }
}

function renderOrders() {
    const tableBody = document.getElementById("ordersTable");
    tableBody.innerHTML = "";

    orders.forEach(order => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.meal}</td>
            <td>${order.table}</td>
            <td>${order.quantity}</td>
            <td>${order.status}</td>
            <td>
                <button onclick="updateStatus(${order.id}, 'U pripremi')">U pripremi</button>
                <button onclick="updateStatus(${order.id}, 'Posluženo')">Posluženo</button>
                <button onclick="updateStatus(${order.id}, 'Otkazano')">Otkazano</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}


renderOrders();

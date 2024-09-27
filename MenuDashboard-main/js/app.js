



document.addEventListener('DOMContentLoaded', function () {
    const productos = ['Producto A', 'Producto B', 'Producto C', 'Producto D', 'Producto E'];
    const ventas = [150, 100, 75, 50, 25];

    const ctx = document.getElementById('productosMasVendidos').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: productos,
            datasets: [{
                label: 'Ventas',
                data: ventas,
                backgroundColor: '#fbbf00',
                borderColor: '#c68700',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});

const toggle = document.querySelector(".toggle")
const menuDashboard = document.querySelector(".menu-dashboard")
const iconoMenu = toggle.querySelector("i")
const enlacesMenu = document.querySelectorAll(".enlace")

toggle.addEventListener("click", () => {
    menuDashboard.classList.toggle("open")

    if(iconoMenu.classList.contains("bx-menu")){
        iconoMenu.classList.replace("bx-menu", "bx-x")
    }else {
        iconoMenu.classList.replace("bx-x", "bx-menu")
    }
})


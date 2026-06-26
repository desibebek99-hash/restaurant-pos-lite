const dashboard =
document.getElementById("dashboard");

renderDashboard();

function renderDashboard(){

    let orders = getOrders();

    let totalOrder = orders.length;

    let omzet = 0;

    orders.forEach(order=>{

        omzet += order.total;

    });

    let html = `

<div class="summary-grid">

<div class="order-card">

<div class="order-header">

<div class="order-name">

${order.customer}

</div>

<div>

${order.table}

</div>

</div>

<br>

<span class="badge waiting">

${order.status}

</span>

<div class="order-total">

Rp${order.total.toLocaleString("id-ID")}

</div>

<div class="button-group">

<button class="btn">

✔ Bayar

</button>

<button class="btn">

🧾 Nota

</button>

<button class="btn">

👁 Detail

</button>

</div>

</div>

<div class="summary-icon">📦</div>

<div class="summary-title">

Order Hari Ini

</div>

<div class="summary-value">

${totalOrder}

</div>

</div>

<div class="summary-card">

<div class="summary-icon">💰</div>

<div class="summary-title">

Omzet

</div>

<div class="summary-value">

Rp${omzet.toLocaleString("id-ID")}

</div>

</div>

</div>

<input
type="text"
class="search-box"
placeholder="🔍 Cari pelanggan...">

`;

<div class="summary-grid">

<div class="summary-card">

<div class="summary-title">

Order Hari Ini

</div>

<div class="summary-value">

${totalOrder}

</div>

</div>

<div class="summary-card">

<div class="summary-title">

Omzet

</div>

<div class="summary-value">

Rp${omzet.toLocaleString("id-ID")}

</div>

</div>

</div>

`;

orders.reverse().forEach(order=>{

html += `

<div class="order-card">

<div class="order-title">

${order.customer}

</div>

<br>

Meja ${order.table}

<br><br>

Status

<b>${order.status}</b>

<div class="order-total">

Rp${order.total.toLocaleString("id-ID")}

</div>

<div class="order-buttons">

<button class="btn">

✔ Bayar

</button>

<button class="btn">

🧾 Nota

</button>

<button class="btn">

👁 Detail

</button>

</div>

</div>

`;

});

dashboard.innerHTML = html;

}

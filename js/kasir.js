console.log("KASIR JS VERSI BARU");
const dashboard =
document.getElementById("dashboard");

renderDashboard();

function renderDashboard(){

    const orders = getOrders();

    let totalOrder = orders.length;
    let omzet = 0;
    let diproses = 0;
    let belumBayar = 0;

    orders.forEach(order=>{

        omzet += order.total;

        if(order.status==="Diproses"){
            diproses++;
        }

        if(order.status==="Menunggu Bayar"){
            belumBayar++;
        }

    });

    let html = `

    <div class="summary-grid">

        <div class="summary-card">

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

        <div class="summary-card">

            <div class="summary-icon">🟡</div>

            <div class="summary-title">

                Diproses

            </div>

            <div class="summary-value">

                ${diproses}

            </div>

        </div>

        <div class="summary-card">

            <div class="summary-icon">🔴</div>

            <div class="summary-title">

                Belum Bayar

            </div>

            <div class="summary-value">

                ${belumBayar}

            </div>

        </div>

    </div>

    <input
        type="text"
        id="searchBox"
        class="search-box"
        placeholder="🔍 Cari pelanggan..."
        onkeyup="renderDashboard()"
    >

    `;

    const keyword =
    document.getElementById("searchBox") ?
    document.getElementById("searchBox").value.toLowerCase()
    :
    "";

    orders
    .slice()
    .reverse()
    .forEach((order,index)=>{

        if(
            keyword &&
            !order.customer.toLowerCase().includes(keyword)
        ){
            return;
        }

        let badgeClass = "waiting";

        if(order.status==="Diproses"){

            badgeClass = "process";

        }

        if(order.status==="Selesai"){

            badgeClass = "done";

        }

        html += `

        <div class="order-card">

            <div class="order-header">

                <div class="order-name">

                    ${order.customer}

                </div>

                <div>

                    Meja ${order.table}

                </div>

            </div>

            <br>

            <span class="badge ${badgeClass}">

                ${order.status}

            </span>

            <div class="order-total">

                Rp${order.total.toLocaleString("id-ID")}

            </div>

            <div class="button-group">

                <button
                    class="btn"
                    onclick="bayar(${orders.length-1-index})">

                    ✔ Bayar

                </button>

                <button
                    class="btn"
                    onclick="nota(${orders.length-1-index})">

                    🧾 Nota

                </button>

                <button
                    class="btn"
                    onclick="detail(${orders.length-1-index})">

                    👁 Detail

                </button>

            </div>

        </div>

        `;

    });

    dashboard.innerHTML = html;

}

function bayar(index){

    let orders = getOrders();

    orders[index].status = "Diproses";

    saveOrders(orders);

    renderDashboard();

}

function nota(index){

    alert(
        "Cetak nota akan dibuat pada sprint berikutnya."
    );

}

function detail(index){

    const order =
    getOrders()[index];

    let html = `

    <h2>

    Detail Order

    </h2>

    <br>

    <b>Pelanggan</b>

    <br>

    ${order.customer}

    <br><br>

    <b>Meja</b>

    <br>

    ${order.table}

    <br><br>

    <b>Status</b>

    <br>

    ${order.status}

    <hr>

    `;

    order.items.forEach(item=>{

        html += `

        <div class="item-row">

            <div>

            ${item.qty} x ${item.name}

            </div>

            <div>

            Rp${(item.qty*item.price).toLocaleString("id-ID")}

            </div>

        </div>

        `;

    });

    html += `

    <hr>

    <div class="modal-total">

    Total

    <br>

    Rp${order.total.toLocaleString("id-ID")}

    </div>

    `;

    document
    .getElementById("modalBody")
    .innerHTML = html;

    document
    .getElementById("modal")
    .style.display="flex";

}

function closeModal(){

    document
    .getElementById("modal")
    .style.display="none";

}

window.onclick=function(event){

    let modal =
    document.getElementById("modal");

    if(event.target===modal){

        closeModal();

    }

}

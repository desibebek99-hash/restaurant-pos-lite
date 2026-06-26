// =========================
// STORAGE RESTAURANT POS
// =========================

// ORDER

function getOrders(){

    return JSON.parse(

        localStorage.getItem("orders")

    ) || [];

}

function saveOrders(data){

    localStorage.setItem(

        "orders",

        JSON.stringify(data)

    );

}

// MENU

function getMenus(){

    return JSON.parse(

        localStorage.getItem("menus")

    ) || [];

}

function saveMenus(data){

    localStorage.setItem(

        "menus",

        JSON.stringify(data)

    );

}

// SETTING

function getSetting(){

    return JSON.parse(

        localStorage.getItem("setting")

    ) || {};

}

function saveSetting(data){

    localStorage.setItem(

        "setting",

        JSON.stringify(data)

    );

}

if(getOrders().length===0){

saveOrders([

{

id:1,

customer:"Andi",

table:5,

status:"Menunggu Bayar",

total:75000,

items:[

{

name:"Nasi Goreng",

qty:2,

price:25000

},

{

name:"Es Teh",

qty:1,

price:25000

}

]

},

{

id:2,

customer:"Budi",

table:2,

status:"Diproses",

total:56000,

items:[

{

name:"Mie Ayam",

qty:2,

price:28000

}

]

}

]);

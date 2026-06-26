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

table:5,

customer:"Andi",

status:"Menunggu Bayar",

total:75000

},

{

id:2,

table:2,

customer:"Budi",

status:"Diproses",

total:56000

}

]);

}

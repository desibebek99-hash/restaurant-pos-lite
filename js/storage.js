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

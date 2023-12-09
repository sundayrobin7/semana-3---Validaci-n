

function dropMenu() {
    // Redactar el programa

    const button = $("#drop_menu_btn");
    const menu = $("#drop_menu");


    button.on("click", function () {
        menu.toggle(500, "linear");
    })
}



$(function () {
    dropMenu();
});
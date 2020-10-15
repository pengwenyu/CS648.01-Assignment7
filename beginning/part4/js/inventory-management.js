/*eslint-env browser*/

function display_menu() {
    "use strict";
    window.console.log("Welcome to the Product Inventory Management System ");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - Show all inventory");
    window.console.log("update - Update an inventory");
    window.console.log("exit - Exit the program");
    window.console.log("");
}
function display(inventory_list) {
    "use strict";
    var i = 1;
    inventory_list.forEach(function (inventory) {
        window.console.log(inventory[0]+" "+inventory[1]+" ("+inventory[2]+") "+"$"+inventory[3]);
        i += 1;
    });
    window.console.log("");
}
function update(inventory_list) {
    "use strict";
    var value1 = window.prompt("Enter the inventory's sku");
    for (var i=0;i<inventory_list.length;i++){
        if (value1==inventory_list[i][0]){
            var value2 = window.prompt("Enter the inventory's product");
            inventory_list[i][2]=value2;
        }
    }
    window.console.log(value1 + " was updated.");
    window.console.log("");
}
function main() {
    "use strict";
    var inventory_list, command;
    
    display_menu();
    
    inventory_list = [[4824,"Shirt",10,15.99],
                    [6343,"Jeans",22,39.99],
                    [3223,"Socks",36,9.99],
                    [2233,"Hat",12,14.99],
                    [9382,"Jacket",5,49.99]];
    
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "show") {
                display(inventory_list);
            } else if (command === "update") {
                update(inventory_list);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();
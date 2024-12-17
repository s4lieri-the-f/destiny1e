import D1ItemSheet from "./module/sheets/items/item-sheet.mjs"

Hooks.once("init", function(){
    console.log("Destiny GS 1e | Initialization of Destiny system 1e");

    Items.unregisterSheet("core", ItemSheet);
    console.log("Destiny GS 1e | Unregistered Default ItemSheet");
    Items.registerSheet("d1e", D1ItemSheet, { makeDefault: true} );
    console.log("Destiny GS 1e | Registered Default D1ItemSheet template");
});
import D1ItemSheet from "./module/sheets/item-sheet.mjs"

Hooks.once("init", function(){
    console.log("Destiny Game System 1e | Initiation of Destiny system 1e");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("d1e", D1ItemSheet, { makeDefault: true} )
});